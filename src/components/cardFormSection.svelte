<script>
    const actualYear = new Date().getFullYear();
    const years = [];

    for(let i = actualYear; i <= actualYear+10; i++) {
        years.push(i)
    }
</script>
<div class="card-form">
    <form action="/" method="POST" id="form">
      <div class="input-group">
        <label for="name">CARDHOLDER NAME</label>
        <input id="name" type="text" placeholder="e.g Jane Appleseed">
      </div>

      <div class="input-group">
        <label for="number">Card number</label>
        <input id="number" type="number" placeholder="e.g 1234 5678 9123 0000">
      </div>

      <div class="input-group input-group--inputs">
            <label class="input-group--label1" for="exp-month">EXP. DATE (MM//YY)</label>
            <select class="input-group--month" name="exp-month" id="exp-month" required>
                <option selected value="" disabled>MM</option>
                {#each Array(12) as _, index}
                    <option>{index + 1}</option>
                {/each}
            </select>
    
            <select class="input-group--year" name="exp-year" id="exp-year" required>
                <option selected value="" disabled>YY</option>
                {#each years as year}
                    <option>{year}</option>
                {/each}
            </select>

            <label class="input-group--label2" for="cvc">CVC</label>
            <input class="input-group--cvc" id="cvc" type="password" placeholder="e.g 123">
      </div>
      

      <div class="input-group">
        <input id="submit" type="submit" value="confirm">
      </div>

    </form>
</div>

<style lang="scss">
    .card-form {
        width: 90%;
        margin: 3rem auto 0 auto;

        @media screen and (min-width: 769px) {
            width: 100%;
            display: grid;
            place-items: center;
        }

        @media screen and (min-width: 1600px) {
            width: 100%;
            place-items: center start;
        }
    }

    .input-group {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        gap: .5rem;
    }

    .input-group  {
        label {
            color: var(--very-dark-violet);
            font-weight: 700;
            text-transform: uppercase;
            @media screen and (min-width: 1201px) {
                font-size: 1.2rem;
            }
        }
        
        input, select {
            height: 40px;
            border-radius: 10px;
            border: 1px solid var(--light-grayish);
            padding-left: 10px;
            padding-right: 10px;
            font-size: 1rem;
            color: var(--light-grayish);
        }

        select {
            height: 45px;

            &:focus {
                border-color: var(--color-purple);
                outline-color: var(--color-purple);
                color: var(--very-dark-violet);
            }

            &:valid {
                // To give color when an option is seleted
                color: var(--very-dark-violet);
            }
        }

        input {
            &::placeholder {
                color: var(--light-grayish);
                opacity: 1; /* Firefox */
            }

            &:focus, :focus-visible {
                border-color: var(--color-purple);
                outline-color: var(--color-purple);
                color: var(--very-dark-violet);
            }

            &:not(:placeholder-shown) {
                //When an input is filled
                color: var(--very-dark-violet);
            }

            &[type='submit'] {
                background-color: var(--very-dark-violet);
                color: var(--color-white);
                text-transform: uppercase;
                height: 50px;

                @media screen and (min-width: 1201px) {
                    font-size: 1.2rem;
                }
            }
        
        }

        &--inputs {
            display: grid;
            grid-template-areas:
                "label1 label1  label2"
                "month year cvc";
            width: 90%;
            grid-template-columns: 20% 1fr;

            @media screen and (max-width: 400px) {
                display: flex;
                flex-direction: column;
            }

            @media screen and (min-width: 769px) {
                width: 100%;
            }
        }

        &--label1 {
            grid-area: label1;
            width: 100%;
        }

        &--label2 {
            grid-area: label2;
        }

        &--month {
            grid-area: month;
        }

        &--year {
            grid-area: year;
        }

        &--cvc {
            grid-area: cvc;
            max-width: 200px;
        }

    }

</style>