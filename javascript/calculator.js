let buttons = document.querySelectorAll('.button')
let result = document.querySelector('#resultScreen')
let finisher = document.querySelector('.equate')
let killer = document.querySelector('.clear')
let modifier = document.querySelectorAll('.modify')

console.log(buttons)
console.log(modifier)
// This is our keypad functionality
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        result.textContent += event.target.textContent;
        console.log(event.target.textContent);

    })
}
// This is our equal button functionality
finisher.addEventListener("click", function (formulize) {
    console.log(eval(result.textContent))
    result.textContent = eval(result.textContent);
    if (result.textContent > 999999) {
        result.textContent = "ERROR";
    }
}
)
// This is our Modifier Button Functionality
for (let modify of modifier) {
    modify.addEventListener("click", function (summer) {
        result.textContent += summer.target.textContent;
        console.log(summer.target.textContent);
    })
}
// This is our Clear Button Functionality
killer.addEventListener("click", function (wiper) {
    result.textContent = "";
}
)

