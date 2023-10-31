<script>
    import AuctionItem from "../lib/AuctionItem.svelte";
    import winningAuctionStore from "../stores/winningAuctionStore.js";

    export let winningBid;

    async function loadAuction() {
        try {
            const response = await fetch(`http://localhost:3000/antiques/${winningBid.antiqueId}`);

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (Date.now() > data.endTime) {
                    $winningAuctionStore.paymentPending += winningBid.amount;
                }
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
{#await loadAuction()}
    <p>Loading...</p>
{:then auctionItem}
    {#if Date.now() > auctionItem.endTime}
        <AuctionItem auctionItem={auctionItem}/>
    {/if}
{:catch e}
    Error: {e}
{/await}
