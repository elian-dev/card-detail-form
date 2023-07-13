<script>
    import cardLogo from '.././assets/images/card-logo.svg'
    import FrontCard from '.././assets/images/bg-card-front.png'
    import BackCard from '.././assets/images/bg-card-back.png'
</script>

<div class="card-preview">
    <div class="card-preview__back">
      <img class="card-preview__back--card" src={BackCard} alt="Card front">
      <p class="card-preview__back--cvc">000</p>
    </div>
    <div class="card-preview__front">
      <img class="card-preview__front--card" src={FrontCard} alt="Card front">


      <div class="card-preview__front--content">
        <img class="card-preview__front--logo" src={cardLogo} alt="logo">
        <p class="card-preview__front--number">0000 0000 0000 0000</p>
        <div class="card-preview__front--card-details">
          <p class="card-preview__front--name">JANE APPLESEED</p>
          <p class="card-preview__front--expiration-date">00/00</p>
        </div>
      </div>
    
    </div>
</div>
<style>
    .card-preview {
        background-image: url(.././assets/images/bg-main-mobile.png);
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 50px;
    }
            
    .card-preview__back, 
    .card-preview__front {
        position: relative;
        z-index: 1;
        padding-left: 50px;
    }

    .card-preview__back--card {
        max-width: 100%;
        width: 300px;
    }

    .card-preview__back--cvc {
        position: absolute;
        right: 35px;
        top: 60px;
        color: var(--color-white);
        font-size: .8rem;
    }

    .card-preview__front {
        margin-top: -76px;
        margin-left: -100px;
        z-index: 2;
    }

    .card-preview__front--card {
        width: 300px;
        max-width: 100%;
    }

    .card-preview__front--content {
        width: 100%;
        position: absolute;
        top: 20px;

        color: var(--color-white);
        padding-left: 15px;
    }

    .card-preview__front--card-details {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .card-preview__front--logo {
        height: 30px;
    }

    .card-preview__front--number {
        font-size: 1.3rem;
        margin: 2rem 0 1rem 0;
    }

    .card-preview__front--name {
        margin: 0;
        font-size: .8rem;
    }

    .card-preview__front--expiration-date {
        padding-right: 80px;
        margin: 0;
        font-size: .8rem;
    }

</style>