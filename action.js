// Todo: Make M+ M- and MC functions
let string = "";
let memory = 0; // Initialize memory variable
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector("input").value = "";
        } else if (e.target.innerHTML == 'M+') {
            memory += parseFloat(string); // Add the current value to memory
        } else if (e.target.innerHTML == 'M-') {
            memory -= parseFloat(string); // Subtract the current value from memory
        } else if (e.target.innerHTML == 'MC') {
            memory = 0; // Clear the memory
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});