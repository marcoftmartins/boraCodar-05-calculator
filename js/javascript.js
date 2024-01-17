/** @format */

const input = document.querySelector('.result-number')
const lastCalc = document.querySelector('.last-sum')
const operators = ['+', '-', '/', '*']
let ans = false

const getValue = (event) => {
  if (!operators.includes(event.target.innerText)) {
    input.innerHTML += event.target.innerText
  } else {
    input.innerHTML = ''
    if (ans) {
      lastCalc.innerHTML = eval(lastCalc.innerText)
      ans = false
    }
  }
  lastCalc.innerHTML += '' + event.target.innerText
}

const erase = () => {
  input.innerHTML = input.innerText.slice(0, -1)
  lastCalc.innerHTML = lastCalc.innerText.slice(0, -1)
}

const clearCalculator = () => {
  input.innerHTML = ''
  lastCalc.innerHTML = ''
}

const calculate = () => {
  if (input.innerText != '') {
    input.innerHTML = eval(lastCalc.innerText)
    ans = true
  }
}

const percentage = () => {
  if (input.innerText != '') {
    input.innerHTML = parseFloat(input.innerText) / 100
  }
}

const convert = () => {
  if (input.innerText != '') {
    lastCalc.innerHTML = eval(lastCalc.innerText)
    input.innerHTML *= -1
    lastCalc.innerHTML *= -1
  }
}
