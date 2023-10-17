<script>
    import  'font-awesome/css/font-awesome.css';
    import logo from '../assets/logo1nb.png';
    import tokenStore from "../stores/tokenStore.js";
    import {isLoggedIn} from "../utils/token-utils.js";
    import router from "page";
    import {isAdmin} from "../utils/token-utils.js";

    export let active;

    let searchTerm = '';
    let isAuthenticated = false;
    function handleSearch() {
        // FIXME : search occurs on every press of the button
        console.log("Searching for: " + searchTerm);
    }

    function handleLogout() {
        $tokenStore.token = '';
    }

    function handleLogin() {

    }

</script>

<header>
    <nav>
        <ul>
            <li><a class:active={active === "/"} on:click={() => router(`/`)}><img src={logo} alt="Auction site logo"></a></li>
<!--            <li><a class:active={active === "/about"} href="/about">About</a></li>-->
            {#if active === "/"}
                <li class="searchBar">
                    <input type="text" class="searchInput"  bind:value={searchTerm} on:input={handleSearch}>
                    <button class="searchButton" on:click={handleSearch}>Search</button>
                </li>
            {/if}
            <li>
                {#if $tokenStore.token !== ''}
                    <a class="navLink" on:click={handleLogout}>Logout</a>
                {:else}
                    <a class:active={active === "/login"} on:click={() => router(`/login`)} class="navLink">Login</a>
                    <a class:active={active === "/register"} on:click={() => router(`/register`)} class="navLink">Register</a>
                {/if}
            </li>
            {#if isAdmin($tokenStore.token)}
                <a class:active={active === "/login"} on:click={() => router(`/login`)} class="navLink">Admin Panel</a>
            {/if}
        </ul>
    </nav>
</header>

<style>
    /*ul {*/
    /*    list-style-type: none;*/
    /*    display: flex;*/
    /*    justify-content: space-evenly;*/
    /*    flex-direction: row;*/
    /*    align-items: center;*/
    /*}*/

    /*a.active {*/
    /*    font-weight: bold;*/
    /*}*/

    /*img {*/
    /*    height: 10rem;*/
    /*    width: 10rem;*/
    /*}*/
    /*nav {*/

    /*}*/
    header {
        background-color: #fff; /* Background color for the header */
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
        border-bottom: 2px solid coral; /* Add a bottom border with a highlight color */
        padding: 1rem 0; /* Add some padding for separation from content below */

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
        padding-left: 2em;
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
        font-size: 1.2rem; /* Increase font size */
    }

    .searchButton {
        background-color: coral;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        font-size: 1.2rem; /* Increase font size */
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
        font-size: 1.2rem; /* Increase font size */
    }

    .navLink {
        text-decoration: none;
        color: #333;
        margin: 0 10px;
        font-size: 1.2rem; /* Increase font size */
    }
    li {
        padding-right: 15%;
    }
</style>