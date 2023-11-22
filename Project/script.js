let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function clearLastEntry() {
    display.value = display.value.slice(0, -1);
}

function calculateSquareRoot() {
    display.value = Math.sqrt(eval(display.value));
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
