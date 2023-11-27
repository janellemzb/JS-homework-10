// Задание 1

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let button1 = document.getElementById('avr')
let result = document.getElementById('result')

button1.onclick = function () {
    let num11 = parseFloat(num1.value);
    let num22 = parseFloat(num2.value);
    result.textContent = 'Среднее число: ' + (num11 + num22) / 2;
}

// Задание 2

let number1 = document.getElementById('number1')
let number2 = document.getElementById('number2')
let button2 = document.getElementById('divide')
let resl = document.getElementById('res')

button2.onclick = function () {
    let num111 = parseFloat(number1.value);
    let num222 = parseFloat(number2.value);
    resl.textContent = 'Result: ' + (num111 % num222)
}

































