export const formValidation = () => {
    const formData = document.getElementById('form');
    console.log(formData)

    const cardHolderNameInput = document.querySelector('#name');
    const cardHolderNameText = document.querySelector('#name-text');

    cardHolderNameInput.addEventListener('input', (e) => {
        console.log(cardHolderNameInput.value)
        cardHolderNameText.innerHTML = cardHolderNameInput.value;
    })
    
}
