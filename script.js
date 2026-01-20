// select element 
const toggle_theme = document.querySelector("#toggle-theme");
const body = document.querySelector("body");


toggle_theme.addEventListener("click",()=>{
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
        toggle_theme.textContent = "☀️";
    }
    else{
        toggle_theme.textContent = "🌙";

    }
});

const input = document.querySelector("#inputText");


const calculate = (number) =>{
    input.value += number;
}


function equal() {
    try {
        const expression = input.value;

        // Allow only numbers and math operators
        if (!/^[0-9+\-*/%.() ]+$/.test(expression)) { // ^ this symbol means start string $end string
            input.value = "Error";
            return;
            }

        const result = Function('"use strict"; return (' + expression + ')')();
        input.value = result;
    } catch {
        input.value = "Error";
    }
}

// clear input
const clr = () =>{
    input.value = "";
}

const del = () =>{
    input.value = input.value.slice(0, -1);
}


//   Keyboard support
document.addEventListener("keydown", (e) => {
    const key = e.key;

    // Numbers (0–9)
    if (!isNaN(key)) {
        calculate(key);
    }

    // Operators
    if (["+", "-", "*", "/", "%", "."].includes(key)) {
        calculate(key);
    }

    // Enter → =
    if (key === "Enter") {
        e.preventDefault();
        equal();
    }

    // Backspace → delete
    if (key === "Backspace") {
        del();
    }

    // Escape / Delete → clear
    if (key === "Escape" || key === "Delete") {
        clr();
    }
});
