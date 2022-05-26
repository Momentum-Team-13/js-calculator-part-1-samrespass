let buttons = document.querySelectorAll('.button')
let results = document.querySelector('.resultScreen')
console.log(buttons)
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        console.log(event.target.innerText);
        //this'll tell us what number was clicked
        document.getElementById("resultScreen").innerText += event.target.innerText;
    })
}
