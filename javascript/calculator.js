let buttons = document.querySelectorAll('.wrap')
console.log(buttons)
for (let button of buttons ) {
    buttons.addEventListener("click", function (event) {
        console.log(event.target);
        //logs the element that was clicked
    })
}