<script>
    import router from 'page';
    import Button from "../lib/Button.svelte";
    import tokenStore from "../stores/tokenStore.js";
    import ErrorMessage from "../lib/ErrorMessage.svelte";

    export let params;

    let email = "";
    let password = "";
    let errorMessage = "";
    async function handleLogin() {
        try {
            const response = await fetch('http://localhost:3000/tokens', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, password: password})
            });
            if (response.ok){
                const data = await response.json();
                $tokenStore.token = data.token;
                router('/');
            } else {
                errorMessage = "Invalid credentials."
            }
        } catch (e) {
            console.log(e);
        }
    }

</script>

<main>
    <h2>Login</h2>
    <form on:submit|preventDefault={handleLogin}  class="login-form">

        <div class="form-group">
        <label for="email" >Email:</label>
        <input type="text" id="email" bind:value={email} class="form-control" />
        </div>
        <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" bind:value={password} class="form-control" />
        </div>
        <div class="form-group">
            <ErrorMessage errorMessage={errorMessage}/>
        </div>
        <Button text="Login" onClick={handleLogin}/>
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