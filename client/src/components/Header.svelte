<script>
    import  'font-awesome/css/font-awesome.css';
    import logo from '../assets/logo1nb.png';
    import tokenStore from "../stores/tokenStore.js";
    import {isLoggedIn} from "../utils/token-utils.js";
    import router from "page";
    import {isAdmin} from "../utils/token-utils.js";
    import filterStore from "../stores/filterStore.js";

    export let active;

    let searchTerm = '';
    function handleSearch() {
        $filterStore.search = searchTerm;
        console.log("Searching for: " + searchTerm);
    }

    function handleLogout() {
        $tokenStore.token = '';
    }


</script>

<header>
    <nav>
        <ul>
            <li><a class:active={active === "/"} on:click={() => router(`/`)}><img src={logo} alt="Auction site logo"></a></li>
            {#if isLoggedIn($tokenStore.token)}
                <li class="winnings">
                    <a class:active={active === "/winnings"} on:click={() => router('/winnings')}>Winnings</a>
                </li>
            {/if}
            {#if active === "/"}
                <li class="searchBar">
                    <input type="text" class="searchInput"  bind:value={searchTerm}>
                    <button class="searchButton" on:click={handleSearch}>Search</button>
                </li>
            {/if}
            <li>
                {#if isLoggedIn($tokenStore.token)}
                    <a class="navLink" on:click={handleLogout}>Logout</a>
                {:else}
                    <a class:active={active === "/login"} on:click={() => router(`/login`)} class="navLink">Login</a>
                    <a class:active={active === "/register"} on:click={() => router(`/register`)} class="navLink">Register</a>
                {/if}
            </li>
            <!--{#if isAdmin($tokenStore.token)}-->
            <!--    <a class:active={active === "/login"} on:click={() => router(`/login`)} class="navLink">Admin Panel</a>-->
            <!--{/if}-->
        </ul>
    </nav>
</header>

<style>
    header {
        background-color: #fff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-bottom: 2px solid coral;
        padding: 1rem 0;


    }
    ul {
        list-style-type: none;
        /*display: flex;*/
        /*align-items: center;*/
        /*padding: 0;*/
        /*margin: 0;*/
        align-items: center;
        display: flex;
        height: 4.25rem;
        position: relative
    }

    a.active {
        font-weight: bold;
    }

    img {
        height: 9rem;
        width: 9rem;
        padding-left: 1em;
    }

    .searchBar {
        background-color: #f0f1f5;
        border-bottom: 2px solid #f0f1f5;
        display: flex;
        height: 3.25rem;
        padding: 0;
        position: relative;
        vertical-align: middle;
        white-space: nowrap;
        width: 100%;
    }

    .searchInput {
        padding: 0.5rem;
        border: 1px solid grey;
        border-radius: 4px;
        margin-right: 0.5rem;
        flex-grow: 1;
        font-size: 1.2rem;
    }

    .searchButton {
        background-color: coral;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        font-size: 1.2rem;
    }

    .searchButton i {
        margin-right: 5px;
    }

    .logoutButton {
        background-color: #dc3545;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        font-size: 1.2rem;
    }

    .navLink {
        text-decoration: none;
        color: #333;
        margin: 0 10px;
        font-size: 1.2rem;
    }
    li {
        padding-right: 15%;
    }
    .winnings {
        padding: 2%;
        margin: 0;
    }
</style>