<script>
  import CardSection from "./components/cardSection.svelte";
  import CardFormSection from "./components/cardFormSection.svelte";
</script>

<main>
  <section class="wrapper">
    <CardSection />
    <CardFormSection />
  </section>
</main>

<style lang="scss">
  .wrapper {
    @media screen and (min-width: 769px) {
      display: flex;
      height: 100vh;
    }
  }
</style>