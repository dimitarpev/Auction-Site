<script>
    import tokenStore from "../stores/tokenStore.js";
    import WinningRow from "../components/WinningRow.svelte";

    export let params;

    async function getWinningAuctions() {
        try {
            const tokenParts = $tokenStore.token.split('.');
            const encodedPayload = tokenParts[1];

            const decodedPayload = atob(encodedPayload);

            const payloadObject = JSON.parse(decodedPayload);
            const userEmail = payloadObject.email;
            const response = await fetch(`http://localhost:3000/users/${userEmail}/winners`, {
                headers: {
                    'Authorization': `Bearer ${$tokenStore.token}`,
                }
            });
            if (response.ok){
                const data   = await response.json();
                return data;
            } else {
                const errorData = await response.json();
                console.error(`Error: ${response.status} - ${errorData.error}`);
            }
        } catch (e) {
            console.log(e);
        }
    }

</script>

{#await getWinningAuctions()}
    <p>Loading...</p>
{:then winningBids}
    {#if winningBids.length > 0}
        <h1> Winnings: </h1>
        <div class="auctionsTab">
            {#each winningBids as winningBid}
                <WinningRow winningBid={winningBid}/>
            {/each}
        </div>
    {:else}
        <p>No winnings yet.</p>
    {/if}
{:catch e}
    <p>Error!! {e}</p>
{/await}



<style>
    .auctionsTab {
        width: 100%;
        /*border: 1px solid;*/
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: baseline;
        padding-bottom: 2em;
    }
</style>