<script>
    import AuctionItem from "../lib/AuctionItem.svelte";
    import RemainingTime from "../lib/RemainingTime.svelte";
    import PlacedBids from "../components/PlacedBids.svelte";
    import Button from "../lib/Button.svelte";
    import tokenStore from "../stores/tokenStore.js";
    import {getEmail} from "../utils/token-utils.js";

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const antiqueId = urlParams.get('antiqueId');
    export let params;



    async function loadAntique() {
        try {
          const response = await fetch('http://localhost:3000/antiques/' + params.id);
          const data = await response.json();
          console.log(data);
          return data;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async function loadBids() {
        try {
            const response = await fetch('http://localhost:3000/antiques/' + params.id + '/bids');
            const data = await response.json();
            console.log(data);
            return data;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    let bid = '';
    let errorMessage = '';
    // TODO: figure out how to get the userEmail and antiqueId
    async function placeBid() {
        try {
            const response = await fetch('http://localhost:3000/antiques/' + params.id + '/bids', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({amount: bid, dateTime: Date.now(), userEmail: getEmail($tokenStore.token), antiqueId: params.id})
            });
                const data = await response.json();
                console.log(data);
            // else {
            //     errorMessage = 'Bid is invalid.';
            //     console.log("Here is error")
            // }
        } catch (e) {
            console.log(e);
        }
    }

</script>

{#await loadAntique()}
    <p>Loading...</p>
{:then antique}
<div class="auctionContainer">
    <section class="antiqueItem">
        <div class="leftAntiquePart">
            <img src={antique.image} alt={antique.name}>
        </div>
        <div class="rightAntiquePart">
            <p class="auctionTitle">{antique.name}</p>
            <p class="startingBid">Starting bid: €{antique.startingPrice}</p>
            <p>Description</p>
            <p class="auctionDescription">{antique.description}</p>
            <RemainingTime antique={antique}></RemainingTime>
        </div>
    </section>
    <section class="placedBids">
        <PlacedBids antique={antique}/>
    </section>
</div>
    <div class="placeBidContainer">
        <section class="placeBid">

            {#if $tokenStore.token !== ''}
                <label for="placeBid">Place bid:</label>
                <input type="text" id="placeBid" bind:value={bid}>
                <Button text="Submit" onClick={placeBid}/>
            {:else}
                <p>Please log in to place a bid!</p>
            {/if}

        </section>
    </div>

{:catch error}
    <p>Error!! {error}</p>
{/await}


<style>
    .antiqueItem {
        width:70%;
        /*height: 30%;*/
        /*border: 1px dashed blue;*/
        /*text-align: center;*/
        text-decoration: black;
        font-family: "Courier New", monospace;
        display: flex;
        justify-content: space-evenly;
    }
    .placedBids {
        width: 30%;
        margin: 1em;

    }
    img{
        width: 30rem;
        height: 30rem;
        text-align: center;
        object-fit: cover;
    }
    .auctionTitle {
        font-weight: bold;
        font-family: "Courier New",sans-serif;
        font-size: 2em;
    }
    .leftAntiquePart {
        margin: 1em;
    }
    .rightAntiquePart {
        margin: 1em;
    }
    .auctionContainer {
        display: flex;
    }
    .startingBid {
        font-family: 'Bangers', cursive;
    }
    .auctionDescription {
        padding-bottom: 1em;
    }
    input {
        border: 1px solid;
    }



</style>