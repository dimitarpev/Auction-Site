<script>
    import router from "page";
    import noImage from '../assets/No-Image-Placeholder.svg.png';
    import RemainingTime from "./RemainingTime.svelte";
    export let auctionItem;

    function handleImageError(auctionItem) {
        auctionItem.image = noImage;
    }

</script>

<div class="auctionItem" >
    <a on:click={() => router(`/auction/${auctionItem.id}`)}>
        <div class="image-container">
            <img src={auctionItem.image} alt={auctionItem.name} on:error={handleImageError}>
        </div>
        <p class="auctionTitle">{auctionItem.name}</p>
        <p class="startingBid">Starting bid: €{auctionItem.startingPrice}</p>
        <RemainingTime antique={auctionItem}/>
    </a>
</div>

<style>
    .auctionItem {
        width: 30%;
        height: 30%;
        text-decoration: black;
        font-family: "Courier New", monospace;
    }
    .image-container {
        width: 20rem;
        height: 20rem;
        max-height: 20rem;
        position: relative;
        overflow: hidden;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
    a {
        text-align: left;
        align-items: center;
        text-decoration: none;
        color: black;
        display: block;
    }
    a:visited {
        text-decoration: none;
    }
    .auctionTitle {
        font-weight: bold;
        font-family: "Courier New",sans-serif;
    }

</style>