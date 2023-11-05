<script>
    import AuctionContainer from "../components/AuctionContainer.svelte";
    import PlaceBid from "../components/PlaceBid.svelte";

    export let params;

    async function loadAntique() {
        try {
          const response = await fetch('http://localhost:3000/antiques/' + params.id);
          if (response.ok){
              const data = await response.json();
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
</script>

{#await loadAntique()}
    <p>Loading...</p>
{:then antique}
    <AuctionContainer antique={antique}/>
    <PlaceBid antique={antique} params={params}/>
{:catch error}
    <p>Error!! {error}</p>
{/await}


<style>

</style>