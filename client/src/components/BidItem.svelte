<script>
    import {isAdmin} from "../utils/token-utils.js";
    import tokenStore from "../stores/tokenStore.js";

    export let bid;
    export let bidNumber;
    export let endTime;

    function formatDateTime(dateTime) {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        }).format(new Date(dateTime));
    }

    async function deleteBid() {
        try {
            if (endTime > Date.now()){
                const response = await fetch('http://localhost:3000/antiques/' + bid.antiqueId + '/bids/' + bid.id, {
                    method: "DELETE",
                    headers: {
                        'Authorization': `Bearer ${$tokenStore.token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({data: bid})
                });
                if (response.ok){
                    const data = await response.json();
                } else {
                    const errorData = await response.json();
                    console.error(`Error: ${response.status} - ${errorData.error}`);
                }
            } else {
                console.log("Cannot delete bid when auction has ended");
            }
        } catch (e){
            console.log(e);
        }

    }


</script>


<div class="personPlacedBid">
    <div class="individualBid">
        {#if isAdmin($tokenStore.token) && endTime > Date.now()}
            <span class="deleteBid" on:click={deleteBid}>X</span>
        {/if}
        <p class="bidName">Bid number: {bidNumber}</p>
        <p class="bidRow2">Amount: {bid.amount}  Date: {formatDateTime(bid.dateTime)}</p>
    </div>
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
        line-height: 1em;
    }
    .deleteBid {
        line-height: 0.5em;
        display: flex;
        justify-content: left;
        padding-left: 1em;
        padding-top: 0.5em;
        margin-left: auto;
        cursor: pointer;
    }
</style>