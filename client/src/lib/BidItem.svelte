<script>
    export let bid;

    async function loadUser() {
        try {
            const response = await fetch('http://localhost:3000/users/' + bid.userEmail);
            const data = await response.json();
            console.log(data);
            return data.username;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
</script>


<div class="personPlacedBid">
    {#await loadUser()}
        <p>Loading...</p>
    {:then username}
        <div class="individualBid">
            <p class="bidName">Bid by: {username}</p>
            <p class="bidRow2">Amount: {bid.amount}  Date: {bid.dateTime}</p>
        </div>
    {:catch error}
        <p>Error!! {error}</p>
    {/await}

</div>

<style>
    .individualBid {
        width: 100%;
        background:#fff;
        border: solid black;
        border-color: black;

        border-width: 5px 3px 3px 5px;
        border-radius:95% 4% 97% 5%/4% 94% 3% 95%;
        transform: rotate(2deg);
    }
    .bidName {
        font-family: "Courier New", monospace;
        font-weight: bold;
        line-height: 0.5em;
    }
    .bidRow2 {
        line-height: 0.5em;
    }
</style>