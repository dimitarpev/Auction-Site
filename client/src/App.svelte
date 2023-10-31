<script>
  import router from 'page';


  import Home from "./pages/Home.svelte";
  import Header from "./components/Header.svelte";
  import LogIn from "./pages/LogIn.svelte";
  import Register from "./pages/Register.svelte";
  import AuctionPage from "./pages/AuctionPage.svelte";
  import CreateAuction from "./pages/CreateAuction.svelte";
  import Winnings from "./pages/Winnings.svelte";
  import EditAuction from "./pages/EditAuction.svelte";

  let page;
  let params;
  let currentRoute;

  router('/', (ctx) => {
    page = Home;
    currentRoute = ctx.pathname;
  });
  router('/login', (ctx) => {
    page = LogIn;
    currentRoute = ctx.pathname;
  });
  router('/register', (ctx) => {
    page = Register;
    currentRoute = ctx.pathname;
  });
  router('/auction/:id', (ctx) => {
    page = AuctionPage;
    currentRoute = ctx.pathname;
    params = ctx.params;
  });
  router('/createAuction', (ctx) => {
    page = CreateAuction;
    currentRoute = ctx.pathname;
  });
  router('/editAuction/:id', (ctx) => {
    page = EditAuction;
    currentRoute = ctx.pathname;
    params = ctx.params;
  })
  router('/winnings', (ctx) => {
    page = Winnings;
    currentRoute = ctx.pathname;
  })

  router.start();
</script>

<main>
  <Header active={currentRoute} />
  <svelte:component this={page} {params} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    padding: 0;
    margin: 0 auto;
  }

</style>
