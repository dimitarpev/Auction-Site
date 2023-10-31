<!-- FilterTab.svelte -->
<!-- FilterTab.svelte -->
<script>
    import Button from "../lib/Button.svelte";
    import FilterOption from "../lib/FilterOption.svelte";
    import YearSlider from "../lib/YearSlider.svelte";
    import {createEventDispatcher} from "svelte";
    import filterStore from "../stores/filterStore.js";
    import {filterMaterialOptions} from "../utils/filter-utils.js";
    import {filterOriginOptions} from "../utils/filter-utils.js";

    const dispatch = createEventDispatcher();
    let sliderValue = 0;
    let filteredMaterial = '';
    let filteredOrigin = '';
    let filteredCentury = '';
    // Filter options
    // let filterMaterialOptions = ["All", "Bronze", "Gold", "Iron", "Porcelain"];
    // let filterOriginOptions = ["All", "Bulgaria", "Netherlands", "Greece"];


    function handleFilterApply() {
        console.log(filteredMaterial);
        console.log(filteredOrigin);
        $filterStore.material = filteredMaterial;
        $filterStore.origin = filteredOrigin;
        const actualYear = sliderValue * 100;
        console.log(actualYear);
        $filterStore.year = actualYear;
    }




</script>

<div class="filter-tab">
    <h3>Filter By:</h3>

    <FilterOption filterCategory="Material" filterOptions={filterMaterialOptions} bind:selectedFilter={filteredMaterial} />
    <FilterOption filterCategory="Origin" filterOptions={filterOriginOptions} bind:selectedFilter={filteredOrigin}/>
    <YearSlider bind:sliderValue={sliderValue} />

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
