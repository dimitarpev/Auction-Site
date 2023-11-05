<script>

    export let antique;

    let remainingTime = antique.endTime - Date.now();
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


    async function announceWinner() {
        try {
            const response = await fetch(`http://localhost:3000/antiques/${antique.id}/bids`);
            if (response.ok){
                const data = await response.json();
                const winnerBid = data.reduce((maxBid, currentBid) => {
                    return currentBid.amount > maxBid.amount ? currentBid : maxBid;
                }, { amount: -Infinity });
            } else {
                const errorData = await response.json();
                console.error(`Error: ${response.status} - ${errorData.error}`);
            }
        } catch (e) {
            console.log(e);
        }
    }

    const interval = setInterval(() => {
        remainingTime = antique.endTime - Date.now();
        if (remainingTime <= 0) {
            clearInterval(interval);
            remainingTime = 0;
            announceWinner();
        }
    }, 1000);
</script>

<div class="remaining-time">
    {#if remainingTime <= 0}
        <p class="timeLeft">Auction Ended</p>
    {:else}
        <span>Time left:</span>
        <p class="timeLeft">
            {remainingTime > 86400000 ? `${formatTime(remainingTime).days}d : ` : ''}
            {formatTime(remainingTime).hours}h : {formatTime(remainingTime).minutes}m : {formatTime(remainingTime).seconds}s
        </p>
    {/if}
</div>

<style>
    span {
        font-weight: bold;
    }
</style>
