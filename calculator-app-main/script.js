'use strict'
const calculate = function (string) {
    try {
        return eval(string.replaceAll('÷', '/').replaceAll('x', '*'))
    }
    catch (err) {
        return NaN;

    }
}
const changeTheme = function () {
    document.querySelectorAll('*').forEach(el => el.classList.remove(`${el.dataset.type}-theme-${curTheme}`))
    curTheme = curTheme !== 3 ? curTheme + 1 : 1;
    document.querySelectorAll('*').forEach(el => el.classList.add(`${el.dataset.type}-theme-${curTheme}`))
}
const themeSelector = document.querySelector('.selector');
const knob = document.querySelector('.knob')
const calculatorButtons = document.querySelector('.function-buttons');
const resetBtn = document.querySelector('.reset-button');
const outputNumber = document.querySelector('.output-number')
let curTheme = 1
themeSelector.addEventListener('click', function () {
    changeTheme()
})
let string = '0';
console.log(calculate('1+2/2'))
calculatorButtons.addEventListener('click', function (e) {
    document.querySelector('body').backgroundColor = 'black !important';
    if (e.target.dataset.type === 'small-button') {
        if (string === '0' && !e.target.classList.contains('operation-button')) {
            string = e.target.dataset.value
        }
        else {
            string += e.target.dataset.value;

        }
        outputNumber.textContent = string
    }
    if (e.target.dataset.type === 'del-button') {
        string = string[string.length - 1] === ' ' ? string.slice(0, -3) : string.slice(0, -1);
        outputNumber.textContent = string || '0'

    }
})
document.querySelector('.equals-button').addEventListener('click', function () {
    const outputNumberCalc = calculate(string);
    console.log(outputNumberCalc)
    if (Number.isFinite(outputNumberCalc)) {
        outputNumber.textContent = `${outputNumberCalc}`
        string = `${outputNumberCalc}`
    }
    else if (Number.isNaN(outputNumberCalc)) {
        outputNumber.textContent = `Syntax Error`.toUpperCase()

    }

    else {
        outputNumber.textContent = `Math Error`.toUpperCase()

    }

})
resetBtn.addEventListener('click', function () {
    string = '0'
    outputNumber.textContent = string

})