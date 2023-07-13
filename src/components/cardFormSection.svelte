<script>
    const actualYear = new Date().getFullYear();

    const years = [];

    for(let i = actualYear; i <= actualYear+10; i++) {
        years.push(i)
    }

</script>
<div class="card-form">
    <form action="/" method="POST">
      <div class="input-group">
        <label for="name">CARDHOLDER NAME</label>
        <input id="name" type="text" placeholder="e.g Jane Appleseed">
      </div>

      <div class="input-group">
        <label for="number">Card number</label>
        <input id="number" type="number" placeholder="e.g 1234 5678 9123 0000">
      </div>


      <div class="input-group--inputs">
            <div class="input-group input-group--exp-date">
                <label for="exp-month">EXP. DATE (MM//YY)</label>
                <div class="input-group input-group--exp-date--selects">
                    <select name="exp-month" id="exp-month">
                        {#each Array(12) as _, index}
                            <option>{index + 1}</option>
                        {/each}
                    </select>
            
                    <select name="exp-year" id="exp-year">
                        {#each years as year}
                            <option>{year}</option>
                        {/each}
                    </select>
                </div>
            </div>
    
            <div class="input-group">
                <label for="cvc">CVC</label>
                <input id="cvc" type="password" placeholder="number">
            </div>

      </div>
      
    </form>
</div>

<style>
    .card-form {
        margin: 2rem; 
    }

    .input-group {
        display: flex;
        flex-direction: column;
        margin: 1rem 0;
        gap: .5rem;
    }

    .input-group label {
        color: var(--very-dark-violet);
        font-weight: 700;
    }

    .input-group input, .input-group select {
        height: 40px;
        border-radius: 10px;
        border: 1px solid var(--light-grayish);
        padding-left: 10px;
        padding-right: 10px;
    }

    .input-group--inputs {
        display: flex;
        gap: .5rem;
    }

    .input-group--exp-date {
        width: 50%;
    }

    .input-group--exp-date--selects {
        display: flex;
        flex-direction: row;
        margin: 0;
        gap: 10px;
    }

</style>