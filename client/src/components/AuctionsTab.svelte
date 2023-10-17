<script>
    import AuctionItem from "../lib/AuctionItem.svelte";
    import tokenStore from "../stores/tokenStore.js";
    import router from "page";
    import filterStore from "../stores/filterStore.js";
    let now = new Date();
    now.setDate(now.getDate() + 3);
    const endTime = now.getTime();

    let auctions = [];

    // loadAntiques($filterStore.origin, $filterStore.material);

    async function loadAntiques(origin, material, year){
        try {
            const params = new URLSearchParams();
            if (origin !== '') {
                params.append('origin', origin)
            }
            if (material !== '') {
                params.append('material', material)
            }
            if (year !== 0){
                params.append('year', year);
            }
            const queryString = params.toString();
            const url = queryString ? `http://localhost:3000/antiques?${queryString}` : 'http://localhost:3000/antiques';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                return data;
            } else {
                console.log("There is an error");
            }
        } catch (e) {
            console.log(e);
        }

    }

</script>

<div class="auctionsTab">
    {#if $tokenStore.token !== ''}
        <div class="placeAuction">
            <label for="placeAuctionButton">Place an auction</label>
            <button id="placeAuctionButton" on:click={() => router(`/createAuction`)}>+</button>
        </div>
    {/if}

    {#await loadAntiques($filterStore.origin, $filterStore.material, $filterStore.year)}
        <p>Loading...</p>
    {:then antiques}

    {#each antiques as auction}
        <AuctionItem auctionItem={auction}/>
    {/each}

    {:catch error}
        <p>Error!: {error}</p>

    {/await}
</div>

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