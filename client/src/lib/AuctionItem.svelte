<script>
    import router from "page";
    import RemainingTime from "./RemainingTime.svelte";
    export let auctionItem;

</script>

<div class="auctionItem" >
    <a on:click={() => router(`/auction/${auctionItem.id}`)}>
        <img src={auctionItem.image} alt={auctionItem.name}>
        <p class="auctionTitle">{auctionItem.name}</p>
        <p class="startingBid">Starting bid: €{auctionItem.startingPrice}</p>
        <RemainingTime antique={auctionItem}/>
    </a>
</div>

<style>
    .auctionItem {
        width: 30%;
        height: 30%;
        /*border: 1px dashed blue;*/
        /*text-align: center;*/
        text-decoration: black;
        font-family: "Courier New", monospace;
    }
    img{
        width: 20rem;
        height: 20rem;
        text-align: center;
        object-fit: cover;
    }
    a {
        text-align: left;
        align-items: center;
        text-decoration: none;
        color: black;
    }
    a:visited {
        text-decoration: none;
    }
    .auctionTitle {
        font-weight: bold;
        font-family: "Courier New",sans-serif;
    }

</style>