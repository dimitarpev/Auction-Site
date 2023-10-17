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



    // Update the remaining time every second
    const interval = setInterval(() => {
        remainingTime = antique.endTime - Date.now();
        if (remainingTime <= 0) {
            clearInterval(interval);
        }
    }, 1000);
</script>

<div class="remaining-time">
    {#if remainingTime <= 0}
        <p class="timeLeft">Auction Ended</p>
    {:else}
        <span>Time left:</span>
        <p class="timeLeft">
            {remainingTime > 86400000 ? `${formatTime(remainingTime).days} days ` : ''}
            {formatTime(remainingTime).hours} hours {formatTime(remainingTime).minutes} minutes
        </p>
    {/if}
</div>

<style>
    span {
        font-weight: bold;
    }
</style>
