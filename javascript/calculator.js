let buttons = document.querySelectorAll('.button')
let result = document.querySelector('#resultScreen')
let finisher = document.querySelector('.equate')
let killer = document.querySelector('.clear')
let modifier = document.querySelectorAll('.modify')

console.log(buttons)
console.log(modifier)
// Function for Controlling result length
const pussy = {
    sizer: function pussyControl() {
    if ((result.textContent.length > 6) && (result.textContent.length <= 8)) {
        result.style.fontSize = "36px"
    }
    else if (result.textContent.length > 8) {
        result.style.fontSize = "26px"
    }
    else {
        result.style.fontSize = "46px"
    }
    if (result.textContent.length > 11) {
        result.textContent = "";
    }
}
}

// This is our keypad functionality
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        result.textContent += event.target.textContent;
        console.log(result.textContent.length);
        // Pussy Control Caller
        pussy.sizer.call();
    })
}
// This is our equal button functionality
finisher.addEventListener("click", function (formulize) {
    console.log(eval(result.textContent))
    result.textContent = eval(result.textContent);
    if ((result.textContent < 1) && (result.textContent.length > 6)) {
        result.textContent = result.textContent.slice(0, -14);
                // Pussy Control Caller
                pussy.sizer.call();
    }
}
)
// This is our Modifier Button Functionality
for (let modify of modifier) {
    modify.addEventListener("click", function (summer) {
        result.textContent += summer.target.textContent;
        console.log(summer.target.textContent);
        // This keeps dummies from getting cute. You can more than likely move this to its own function
        if ((result.textContent.indexOf("++") != -1) || (result.textContent.indexOf("+-") != -1) || (result.textContent.indexOf("+*") != -1) || (result.textContent.indexOf("+/") != -1) || (result.textContent.indexOf("--") != -1) || (result.textContent.indexOf("-+") != -1) || (result.textContent.indexOf("-*") != -1) || (result.textContent.indexOf("-/") != -1) || (result.textContent.indexOf("**") != -1) || (result.textContent.indexOf("*+") != -1) || (result.textContent.indexOf("*-") != -1) || (result.textContent.indexOf("*/") != -1) || (result.textContent.indexOf("//") != -1) || (result.textContent.indexOf("/-") != -1) || (result.textContent.indexOf("/+") != -1) || (result.textContent.indexOf("/*") != -1) || (result.textContent.indexOf("..") != -1)) {
            result.textContent = result.textContent.slice(0, -1);
            console.log("cleaned!");
            console.log(result.textContent.indexOf("+"))
        }
        // This'll keep dummies from starting equations with modifiers
if ((result.textContent.indexOf("+") == 0) || (result.textContent.indexOf("-") == 0) || (result.textContent.indexOf("*") == 0) || (result.textContent.indexOf("/") == 0) && (result.textContent.length == 1) ) {
    result.textContent = result.textContent.slice(0, -1);
    console.log("Don't Start")
    // I don't think it matters but we'll add a 0 onto decimals with this

}
        // Pussy Control Caller
        pussy.sizer.call();
    })
}
// This is our Clear Button Functionality
killer.addEventListener("click", function (wiper) {
    result.textContent = "";
}
)


