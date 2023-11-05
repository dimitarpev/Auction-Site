<script>
    import BidItem from "./BidItem.svelte";

    export let antique;

    async function loadBids() {
        try {
            const response = await fetch('http://localhost:3000/antiques/' + antique.id + '/bids');
            if (response.ok){
                const data = await response.json();
                return data;
            } else {
                const errorData = await response.json();
                console.error(`Error: ${response.status} - ${errorData.error}`);
            }
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

</script>


{#await loadBids()}
    <p>Loading...</p>
{:then bids}
    <div class="placedBids">
        {#if bids.length === 0}
            <p>No bids yet!</p>
        {/if}
        {#each bids as bid, index}
            <BidItem bid={bid} bidNumber={index + 1} endTime={antique.endTime} />
        {/each}
   </div>
{:catch error}
    <p>Error!! {error}</p>
{/await}

<style>
    ::-webkit-scrollbar {
        width: 0;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    .placedBids {
        text-align: center;
        overflow: auto;
        height: 40vh;


        border-top-left-radius: 37px 140px;
        border-top-right-radius: 23px 130px;
        border-bottom-left-radius: 110px 19px;
        border-bottom-right-radius: 120px 24px;

        display: block;
        position: relative;
        border: solid 3px #6e7491;
        padding: 40px 8%;
        max-width: 800px;
        width: 80%;
        margin: 100px auto 0;
        font-size: 17px;
        line-height: 28px;
        transform: rotate(-1deg);
        box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
        transition: all 0.13s ease-in;
    }
    .placedBids:hover {
        transform: translateY(-10px) rotate(1deg);
        box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
    }

    .placedBids:hover  {
        transform: translateY(4px) rotate(-5deg);
    }
</style>