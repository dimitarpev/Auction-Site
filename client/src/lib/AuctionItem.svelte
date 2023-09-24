<script>
    export let auctionItem;

    let remainingTime = auctionItem.endTime - Date.now();
    function formatTime(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        const formattedTime = {
            days: days % 24,
            hours: hours % 24,
            minutes: minutes % 60,
            seconds: seconds % 60,
        };

        return formattedTime;
    }

    // Update the remaining time every second
    const interval = setInterval(() => {
        remainingTime = auctionItem.endTime - Date.now();
        if (remainingTime <= 0) {
            clearInterval(interval);
        }
    }, 1000);

</script>

<div class="auctionItem">
    <a href="/">
        <img src={auctionItem.image} alt={auctionItem.name}>
        <p class="auctionTitle">{auctionItem.name}</p>
        <p class="startingBid">Starting bid: €{auctionItem.startingPrice}</p>
        {#if remainingTime <= 0}
            <p class="timeLeft">Auction Ended</p>
        {:else}
            <span>Time left:</span>
            <p class="timeLeft">
                {remainingTime > 86400000 ? `${formatTime(remainingTime).days} days ` : ''}
                {formatTime(remainingTime).hours} hours {formatTime(remainingTime).minutes} minutes
            </p>
        {/if}
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
    span {
        font-weight: bold;
    }
</style>