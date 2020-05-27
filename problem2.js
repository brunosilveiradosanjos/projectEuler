// Even Fibonacci numbers (par)
var fibonacciSeq = [1]
var fibonacciEven = []
var maxValue = 4000000

function fibonacci(maxValue) {
    var a = 1
    var b = 1
    var c
    for (var i = 0; (a + b) < maxValue; i++) {
        c = a + b
        fibonacciSeq.push(c)
        if (c % 2 === 0) {
            fibonacciEven.push(c)
        }
        a = b
        b = c
    }
}
fibonacci(maxValue)

// console.log(fibonacciEven)
// console.log(fibonacciSeq)
var fibonacciEvenSum = 0
for (let i = 0; i < fibonacciEven.length; i++) {
    console.log(i + 1 + ' - ' + fibonacciEven[i])
    fibonacciEvenSum = fibonacciEvenSum + fibonacciEven[i]
}
console.log('fibonacciEvenSum ' + fibonacciEvenSum)
// for (let i = 0; i < fibonacciSeq.length; i++) {
//     console.log(i + 1 + ' - ' + fibonacciSeq[i])
// }
// 0 ,1, 1, 2, 3, 5, 8
//    a  b  c
//       a  b  c
//          a  b  c
//             a  b  c