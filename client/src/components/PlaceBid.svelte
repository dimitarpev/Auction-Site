<script>

    import tokenStore from "../stores/tokenStore.js";
    import Button from "../lib/Button.svelte";
    import {getEmail} from "../utils/token-utils.js";
    import ErrorMessage from "../lib/ErrorMessage.svelte";

    export let startingAmount;
    export let params;

    let bid = '';
    let errorMessage = '';
    async function placeBid() {
        try {
            const bidAmount = Number(bid);
            if (!isNaN(bidAmount)){
                if (bidAmount <= startingAmount) {
                    errorMessage = 'Bid must be higher than the starting amount.';
                    return;
                }

                const response = await fetch('http://localhost:3000/antiques/' + params.id + '/bids', {
                    method: 'POST',
                    headers:{
                        'Authorization': `Bearer ${$tokenStore.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({amount: bidAmount, dateTime: Date.now(), userEmail: getEmail($tokenStore.token), antiqueId: params.id})
                });
                if (response.ok){
                    errorMessage = '';
                    const data = await response.json();
                    console.log(data);
                } else {
                    errorMessage = 'Bid is invalid.';
                    const errorData = await response.json();
                    console.error(`Error: ${response.status} - ${errorData.error}`);
                }
            } else {
                errorMessage = 'Bid must be a number';
            }

        } catch (e) {
            console.log(e);
        }
    }

</script>

<div class="placeBidContainer">
    <section class="placeBid">

        {#if $tokenStore.token !== ''}
            <label for="placeBid">Place bid:</label>
            <input type="text" id="placeBid" bind:value={bid}>
            <Button text="Submit" onClick={placeBid}/>
            <ErrorMessage errorMessage={errorMessage}/>
        {:else}
            <p>Please log in to place a bid!</p>
        {/if}

    </section>
</div>

<style>
    input {
        border: 1px solid;
    }
</style>