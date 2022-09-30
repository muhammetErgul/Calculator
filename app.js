const display = document.getElementById('display');
const history = document.getElementById('history');
const operatorBtns = document.querySelectorAll('.operator');
const numberBtns = document.querySelectorAll('.number');
const btnAC = document.getElementById('btnAC');
const btnCE = document.getElementById('btnCE');
const btnDecimal = document.querySelector('.decimal');
const btnEqual = document.getElementById('btnEqual');

let operatorCase = false;
let operator = "";
let result = 0;

numberBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (display.textContent === '0' || operatorCase) {
            display.textContent = '';
        }
        display.textContent += e.target.innerText;
        operatorCase = false;
    });
});

operatorBtns.forEach((opt) => {
    opt.addEventListener('click', (e) => {
        operatorCase = true;
        let newOpt = e.target.innerText;
        history.textContent += ' ' + display.textContent + ' ' + newOpt;

        calculateSwitch(operator)
 
        result = Number(display.textContent);
        operator = newOpt;
    });
});

btnEqual.addEventListener('click', () => {
    history.textContent = '';
    operatorCase = true

    calculateSwitch(operator)

    result = Number(display.textContent);
    display.textContent = result;
    result = 0;
    operator = '';
});
btnDecimal.addEventListener('click', (e) => {
    if (!display.innerText.includes(e.target.value)) {
        display.innerText += e.target.value;
    }
    operatorCase = false;
})

btnAC.onclick = () => {
    display.textContent = '0';
    history.textContent = '';
    result = 0;
    operator = "";
}
btnCE.onclick = () => {
    display.textContent = '';
    result = 0;
    operator = "";
}
function calculateSwitch(operator) {
    switch (operator) {
        case '+':
            display.textContent = (result + Number(display.textContent));
            break;
        case '-':
            display.textContent = (result - Number(display.textContent));
            break;
        case 'x':
            display.textContent = (result * Number(display.textContent));
            break;
        case '/':
            display.textContent = (result / Number(display.textContent));
            break;
        case '%':
            display.textContent = (result % Number(display.textContent));
            break;
        default: break;
    }
}