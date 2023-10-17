<script>
    import BidItem from "../lib/BidItem.svelte";

    export let antique;


    async function loadBids() {
        try {
            const response = await fetch('http://localhost:3000/antiques/' + antique.id + '/bids');
            const data = await response.json();
            console.log(data);
            return data;
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
        {#each bids as bid}
            <BidItem bid={bid}/>
        {/each}
   </div>
{:catch error}
    <p>Error!! {error}</p>
{/await}

<style>
    /* width */
    ::-webkit-scrollbar {
        width: 0;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    .placedBids {
        /*border: #cccccc 1px solid;*/
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
        padding: 40px 60px;
        max-width: 800px;
        width: 70%;
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