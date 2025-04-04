const button = document.querySelectorAll('.button')
const background = document.querySelector('body')

button.forEach((button) => {
    button.addEventListener("click",(e) => {
        background.style.backgroundColor = e.target.id
    })  
});