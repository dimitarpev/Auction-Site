<script>
    import router from 'page';
    import Button from "../lib/Button.svelte";

    export let params;


    let name = '';
    let type = '';
    let origin = '';
    let year = '';
    let material = '';
    let description = '';
    let startTime = Date.now();
    let endTime = '';
    let startingPrice = '';
    let image = '';
    let user = '';

    let errorMessage = '';
    async function handleAuctionCreation() {
        try {
            const response = await fetch('http://localhost:3000/antiques', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: name, type: type, origin: origin, year: year, material: material, description: description,
                startTime: startTime, endTime: endTime, startingPrice: startingPrice, image: image })
            });
            if (response.ok){
                const data = await response.json();
                console.log(data);
            } else {
                errorMessage = "Invalid credentials."
            }
        } catch (e) {
            console.log(e);
        }
    }

</script>

<main>
    <h2>Create Auction</h2>
    <form class="login-form">

        <div class="form-group">
            <label for="name" >Antique name:</label>
            <input type="text" id="name" bind:value={name} class="form-control" />
        </div>
        <div class="form-group">
            <label for="type">Type:</label>
            <input type="text" id="type" bind:value={type} class="form-control" />
        </div>
        <div class="form-group">
            <label for="origin">Origin:</label>
            <input type="text" id="origin" bind:value={origin} class="form-control" />
        </div>
        <div class="form-group">
            <label for="year">Year:</label>
            <input type="text" id="year" bind:value={year} class="form-control" />
        </div>
        <div class="form-group">
            <label for="material">Material:</label>
            <input type="text" id="material" bind:value={material} class="form-control" />
        </div>
        <div class="form-group">
            <label for="description">Description:</label>
            <input type="text" id="description" bind:value={description} class="form-control" />
        </div>
        <div class="form-group">
            <label for="endTime">End Time:</label>
            <input type="text" id="endTime" bind:value={endTime} class="form-control" />
        </div>
        <div class="form-group">
            <label for="startingPrice">Starting Price:</label>
            <input type="text" id="startingPrice" bind:value={startingPrice} class="form-control" />
        </div>
        <div class="form-group">
            <label for="image">Image:</label>
            <input type="text" id="image" bind:value={image} class="form-control" />
        </div>
        <Button text="Create" onClick={handleAuctionCreation}/>
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