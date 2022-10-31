const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');

storageInput.addEventListener('input', letter => {
    text.textConent = letter.target.value

})
const saveToLocalStorage= () => {
    localStorage.setItem('textinput', text.textContent)
}

button.addEventListener('click', saveToLocalStorage)