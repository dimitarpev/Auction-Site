
<script>
    export let text;
    export let onClick;
</script>

<button on:click={onClick}>{text}</button>

<style>
    button {
        padding: 8px 16px;
        background-color: coral;
        color: white;
        border: none;
        cursor: pointer;
        top: 50%;
        left: 50%;
        /*position: relative;*/
    }
</style>

