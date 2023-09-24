<script>
    import AuctionItem from "../lib/AuctionItem.svelte";
    let now = new Date();
    now.setDate(now.getDate() + 3);
    const endTime = now.getTime();

    let auctions = [
        {
            id: 1,
            name: "Bulgarian Orthodox Vase",
            type: "vase",
            origin: "Bulgaria",
            year: 1760,
            material: "porcelain",
            description: "old vase",
            startTime: Date.now(),
            endTime: endTime,
            startingPrice: 800,
            image: "https://i.etsystatic.com/12242579/r/il/600d1c/4006288033/il_fullxfull.4006288033_ah1y.jpg"
        },
        {
            id: 2,
            name: "Panagyurishte Treasure",
            type: "Treasure",
            origin: "Bulgaria",
            year: -400,
            material: "Gold",
            description: "The treasure consists of a phiale, an amphora, three oinochoai and four rhytons with total weight of 6.164 kg of 24-karat gold.[2][3][4] All nine vessels are richly and skilfully decorated.[5] It is dated from the turn of the 4th-3rd centuries BC.[6] It is thought to have been used as a royal ceremonial set by the Thracian king Seuthes III.[7][8][9]",
            startTime: Date.now(),
            endTime: endTime,
            startingPrice: 10000000,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sofia_-_Panagyurishte_Thracian_Gold_Treasure.jpg/1280px-Sofia_-_Panagyurishte_Thracian_Gold_Treasure.jpg"

        }

    ]
</script>

<div class="auctionsTab">
    {#each auctions as auction}
        <AuctionItem auctionItem={auction} />
    {/each}
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
</style>