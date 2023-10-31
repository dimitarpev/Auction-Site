<script>
    import AuctionItem from "../lib/AuctionItem.svelte";
    import tokenStore from "../stores/tokenStore.js";
    import router from "page";
    import filterStore from "../stores/filterStore.js";
    import {isAdmin, isLoggedIn} from "../utils/token-utils.js";

    async function loadAntiques(origin, material, year, search){
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
            if (search !== ''){
                params.append('search', search);
            }
            const queryString = params.toString();
            const url = queryString ? `http://localhost:3000/antiques?${queryString}` : 'http://localhost:3000/antiques';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
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

<div class="auctionsTab">
<!--    Place an auction button appears only if logged in and admin-->
    {#if isLoggedIn($tokenStore.token) && isAdmin($tokenStore.token)}
        <div class="placeAuction">
            <label for="placeAuctionButton">Place an auction</label>
            <button id="placeAuctionButton" on:click={() => router(`/createAuction`)}>+</button>
        </div>
    {/if}

    {#await loadAntiques($filterStore.origin, $filterStore.material, $filterStore.year, $filterStore.search)}
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
    .placeAuction {
        margin-top: 1em;
        text-align: center;
    }
    label {
        font-size: 1.2em;
        font-weight: bold;
        margin-right: 1em;
    }
    button {
        font-size: 1.2em;
        padding: 0.5em 1em;
        background-color: #000000;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: #fff;
        color: #000;
    }
    button:active {
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
</style>