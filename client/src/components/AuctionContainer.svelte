<script>
    import PlacedBids from "./PlacedBids.svelte";
    import RemainingTime from "../lib/RemainingTime.svelte";
    import Button from "../lib/Button.svelte";
    import router from 'page';
    import {isAdmin, isLoggedIn} from '../utils/token-utils.js'
    import tokenStore from "../stores/tokenStore.js";

    export let antique;

    async function deleteAuction() {
        try {
            const response = await fetch(`http://localhost:3000/antiques/${antique.id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${$tokenStore.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(antique)
            });
            if (response.ok){
                const data   = await response.json();
                router('/');
            } else {
                const errorData = await response.json();
                console.error(`Error: ${response.status} - ${errorData.error}`);
            }
        } catch (e) {
            console.log(e);
        }
    }

</script>


<div class="auctionContainer">
    <section class="antiqueItem">
        <div class="leftAntiquePart">
            <img src={antique.image} alt={antique.name}>
            {#if isLoggedIn($tokenStore.token) && isAdmin($tokenStore.token)}
                <div class="adminButtons">
                    <Button text="Edit auction" onClick={() => router(`/editAuction/${antique.id}`)}/>
                    <Button text="Delete auction" onClick={deleteAuction}/>
                </div>
            {/if}
        </div>
        <div class="rightAntiquePart">
            <p class="auctionTitle">{antique.name}</p>
            <p class="startingBid">Starting bid: €{antique.startingPrice}</p>
            <p class="type">Type: {antique.type}</p>
            <p class="origin">Origin: {antique.origin}</p>
            <p class="year">Year: {antique.year}</p>
            <p>Description:</p>
            <p class="auctionDescription">{antique.description}</p>
            <RemainingTime antique={antique}></RemainingTime>
        </div>
    </section>
    <section class="placedBids">
        <PlacedBids antique={antique}/>
    </section>
</div>

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
    .adminButtons {
        position: relative;
    }
</style>