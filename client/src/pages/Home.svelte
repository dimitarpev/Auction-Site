<script>
    import FilterTab from "../components/FilterTab.svelte";
    import AuctionsTab from "../components/AuctionsTab.svelte";
    export let params;


</script>

<div class="container">
    <FilterTab />
    <AuctionsTab />
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        padding-top: 3em;
    }
</style>
