<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import cardLogo from './assets/images/card-logo.svg'
</script>

<main>
  <section class="wrapper">
    <div class="card-preview">
      <div class="card-preview__front">
        <img src={cardLogo} alt="logo" srcset="">
        <p class="card-preview__front--number">0000 0000 0000 0000</p>
        <p class="card-preview__front--name">JANE APPLESEED</p>
        <p class="card-preview__front--expiration-date">00/00</p>
      </div>
      <div class="card-preview__back">
        <p class="card-preview__back--cvc">000</p>
      </div>
    </div>
    <div class="card-form">
      <form action="/" method="POST">
        <div class="input-group">
          <label for="name">CARDHOLDER NAME</label>
          <input id="name" type="text">
        </div>

        <div class="input-group">
          <label for="name">CARDHOLDER NAME</label>
          <input id="name" type="text">
        </div>

        <div class="input-group">
          <label for="name">CARDHOLDER NAME</label>
          <input id="name" type="text">
        </div>

        <div class="input-group">
          <label for="name">CARDHOLDER NAME</label>
          <input id="name" type="text">
        </div>
      </form>
    </div>
  </section>
</main>
