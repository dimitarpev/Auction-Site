<script>
    import router from 'page';
    import Button from "../lib/Button.svelte";
    import tokenStore from "../stores/tokenStore.js";
    import {filterMaterialOptions} from "../utils/filter-utils.js";
    import {filterOriginOptions} from "../utils/filter-utils.js";
    import ErrorMessage from "../lib/ErrorMessage.svelte";

    export let params;


    let antique = {};
    let name = antique.name;
    let type = antique.type;
    let origin = antique.origin;
    let year = antique.year;
    let material = antique.material;
    let description = antique.description;
    let startTime = antique.startTime;
    let endTime = antique.endTime;
    let startingPrice = antique.startingPrice;
    let image = antique.image;

    let endTimeSelections = ["1 minute","1 hour", "24 hours", "72 hours"];
    let selectedEndTimeOption = endTimeSelections[0];
    let errorMessage = '';

    async function loadAntique() {
        try {
            console.log(params);
            const response = await fetch('http://localhost:3000/antiques/' + params.id);
            if (response.ok){
                const data = await response.json();
                antique = data;
                return data;
            } else {
                const errorData = await response.json();
                console.error(`Error: ${response.status} - ${errorData.error}`);
            }
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    async function handleAuctionEdit() {
        try {
            switch (selectedEndTimeOption) {
                case "1 minute":
                    antique.endTime = antique.startTime + 60000; // 1 minute in milliseconds
                    break;
                case "1 hour":
                    antique.endTime = antique.startTime + 3600000; // 1 hour in milliseconds
                    break;
                case "24 hours":
                    antique.endTime = antique.startTime + 86400000; // 24 hours in milliseconds
                    break;
                case "72 hours":
                    antique.endTime = antique.startTime + 259200000; // 72 hours in milliseconds
                    break;
                default:
                    console.error("Invalid endTime option selected");
                    return;
            }

            const response = await fetch(`http://localhost:3000/antiques/${params.id}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${$tokenStore.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(antique)
            });
            if (response.ok){
                const data   = await response.json();
                router('/');
            } else {
                errorMessage = "Invalid input / All fields must be filled";
                const errorData = await response.json();
                console.error(`Error: ${response.status} - ${errorData.error}`);
            }
        } catch (e) {
            console.log(e);
        }
    }

</script>

<main>
    <h2>Edit Auction</h2>
    <form class="login-form">
        {#await loadAntique()}
            <p>Loading...</p>
        {:then antiquse}
            <div class="form-group">
                <label for="name" >Antique name:</label>
                <input type="text" id="name" bind:value={antique.name} class="form-control" />
            </div>
            <div class="form-group">
                <label for="type">Type:</label>
                <input type="text" id="type" bind:value={antique.type} class="form-control" />
            </div>
            <div class="form-group">
                <label for="origin">Origin:</label>
                <select id="origin" bind:value={antique.origin} class="form-control">
                    {#each filterOriginOptions as filter}
                        <option>{filter}</option>
                    {/each}
                </select>
            </div>
            <div class="form-group">
                <label for="year">Year:</label>
                <input type="text" id="year" bind:value={antique.year} class="form-control" />
            </div>
            <div class="form-group">
                <label for="material">Material:</label>
                <select id="material" bind:value={antique.material} class="form-control">
                    {#each filterMaterialOptions as filter}
                        <option>{filter}</option>
                    {/each}
                </select>
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" id="description" bind:value={antique.description} class="form-control" />
            </div>
            <div class="form-group">
                <label for="endTime">End Time:</label>
                <select id="endTime" bind:value={selectedEndTimeOption} class="form-control">
                    {#each endTimeSelections as filter}
                        <option>{filter}</option>
                    {/each}
                </select>
            </div>
            <div class="form-group">
                <label for="startingPrice">Starting Price:</label>
                <input type="text" id="startingPrice" bind:value={antique.startingPrice} class="form-control" />
            </div>
            <div class="form-group">
                <label for="image">Image:</label>
                <input type="text" id="image" bind:value={antique.image} class="form-control" />
            </div>
            <div class="form-group">
                <ErrorMessage errorMessage={errorMessage}/>
            </div>
            <Button text="Edit" onClick={handleAuctionEdit}/>
        {/await}
    </form>
</main>


<style>
    main {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 20px;
    }

    .login-form {
        background-color: #f7f7f7;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 20px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .form-control {
        width: 90%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 1rem;
    }

</style>