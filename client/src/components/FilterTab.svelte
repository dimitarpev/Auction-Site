<!-- FilterTab.svelte -->
<!-- FilterTab.svelte -->
<script>
    import Button from "../lib/Button.svelte";
    import FilterOption from "../lib/FIlterOption.svelte";
    import YearSlider from "../lib/YearSlider.svelte";

    let sliderValue = 0;
    let filteredMaterial;
    let filteredOrigin;
    let filteredCentury;
    // Filter options
    let filterMaterialOptions = [
        { id: "all", label: "All" },
        { id: "filter1", label: "Bronze" },
        { id: "filter2", label: "Gold" },
        { id: "filter3", label: "Iron" }
    ];

    let filterOriginOptions = [
        { id: "all", label: "All" },
        { id: "filter1", label: "Bulgaria" },
        { id: "filter2", label: "Netherlands" },
        { id: "filter3", label: "Greece" }
    ];


    function handleFilterApply() {

    }

    function handleMaterialChange(event) {
        filteredMaterial = event.target.value;
    }
    function handleOriginChange(event) {
        filteredOrigin = event.target.value;
    }

</script>

<div class="filter-tab">
    <h3>Filter By:</h3>

    <FilterOption filterCategory="Material" filterOptions={filterMaterialOptions} on:change={handleMaterialChange}/>
    <FilterOption filterCategory="Origin" filterOptions={filterOriginOptions} on:change={handleOriginChange}/>
    <YearSlider sliderValue={sliderValue}/>

    <Button text="Apply filters" onClick={handleFilterApply}/>
</div>





<style>
    .filter-tab{
        /*padding-top: 3em;*/
        margin-left: 1em;
        width: 20%;
        border-right: 2px solid coral;
        border-radius: 5%;
        position: sticky;
    }
    h3 {
        text-align: center;
    }

</style>
