<script>


export let filterCategory;
export let filterOptions;
export let selectedFilter;


function handleFilterChange(event) {
    selectedFilter = event.target.value;
}
</script>
    <div class="filter-select">
        <span>{filterCategory}</span>
        <select bind:value={selectedFilter} on:change={handleFilterChange}>
            {#each filterOptions as option}
                <option value={option}>{option}</option>
            {/each}
        </select>
    </div>





<style>
    select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;

    }
    .filter-select {
        padding: 2em;
    }

</style>
