<script>
    import router from 'page';
    import tokenStore from '../stores/tokenStore.js';

    import Button from "../lib/Button.svelte";
    import ErrorMessage from "../lib/ErrorMessage.svelte";
    export let params;

    let username = "";
    let password = "";
    let email = "";

    let errorMessage = "";

    async function handleRegister() {
        const user = {
            'email': email,
            'username': username,
            'password': password
        }
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('data after registering', data);
                $tokenStore.token = data.token;
                router('/');
                console.log("Registering with username:", username);
            } else {
                // TODO show error message, don't parse the response as JSON
                errorMessage = "Invalid credentials."
            }

        } catch (e) {
            console.log(e);
        }
    }
</script>

<main>
    <h2>Register</h2>
    <form on:submit|preventDefault={handleRegister} class="register-form">

        <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" id="email" bind:value={email} class="form-control"/>
        </div>
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" bind:value={username} class="form-control" />
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" bind:value={password} class="form-control" />
        </div>
        <div>
            <ErrorMessage errorMessage={errorMessage}/>
        </div>
        <Button text="Register" onClick={handleRegister}/>
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

    .register-form {
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