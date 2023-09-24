<script>
  import router from 'page';


  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Header from "./components/Header.svelte";
  import LogIn from "./pages/LogIn.svelte";
  import Register from "./pages/Register.svelte";

  let page;
  let params;
  let currentRoute;

  router('/', (ctx) => {
    page = Home;
    currentRoute = ctx.pathname;
  });
  router('/about', (ctx) => {
    page = About;
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
