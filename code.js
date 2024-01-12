


function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand)
}


function generateArray(min, max, n){
  let arr = []
  let start = 0

  if(!n){
    n = 1
    while(start < n){
    ++start
    arr.push(randomInteger(min, max))
    } 
    return arr 
  }
  while(start < n){
      arr.push(randomInteger(min, max))
      ++start
  }
  
  return arr 
}


function enCode(ar) {
  return String.fromCodePoint(...ar)
}

function deCode(str) {
  if(str && typeof str === "string") {
    return (
    str
      .split('')
      .map(el => el.charCodeAt())
    )
  }
}

function compression(a, b){
  return console.log(`Сжатие - ${Math.round((1 - b.length/a.join('').length)*100)}%`)
}

function test(min, max, n) {
  let a = generateArray(min, max, n)
  let b = a
  for(let i = 0; i <= 1000; i++){
    let c = deCode(enCode(b))
    b = c
  }
  let result = a.join('') === b.join('')
  return (
    console.log(`Массив длины ${a.length}. Результат - ` + (result ? 'Успешно!' : 'Неудача!')),
    console.log(`Исходная сторка: ${a.join('')}`),
    console.log(`Сжатая сторка: ${enCode(a)}`),
    compression(a, b)
  )
}

function testX3() {
  let a = x3(300)
  let b = a
  for(let i = 0; i <= 1000; i++){
    let c = deCode(enCode(b))
    b = c
  }
  let result = a.join('') === b.join('')
  return (
    console.log(`Массив длины ${a.length}. Результат - ` + (result ? 'Успешно!' : 'Неудача!')),
    console.log(`Исходная сторка: ${a.join('')}`),
    console.log(`Сжатая сторка: ${enCode(a)}`),
    compression(a, b)
  )
}

function x3(n){
  arr = []
  for(let i = 1; i <= n; i++){
    for(let j = 0; j < 3; j++){
      arr.push(i)
    }
  }
  return arr
}

test(1, 300, 12) // короткие
test(1, 300, 5) // короткие
test(1, 300, 50) // случайные 50
test(1, 300, 100) // случайные 100
test(1, 300, 500) // случайные 500
test(130, 130, 1000) // случайные 1000
test(1, 9, 1000) // все числа 1 знака
test(10, 99, 1000) // все числа 2 знака
test(100, 999, 1000) // все числа 3 знака
test(100, 999, 1000) // все числа 3 знака

testX3(300) // каждого числа по 3
