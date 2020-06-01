// Longest Collatz sequence

var number
var biggerChain = 0
var chain = []

function evenOddRule(number) {
    if (number % 2 === 0) {
        number = number / 2

    } else {
        number = (3 * number) + 1
    }
    return number
}

function collatzSequence(number) {
    chain.push(number)
    while (number > 1) {
        number = evenOddRule(number)
        chain.push(number)
    }
    return chain
}

for (var x = 1; x < 1000000; x++) {

    collatzSequence(x)

    if (chain.length > biggerChain) {
        biggerChain = chain.length
        console.log('Starting number: ' + x + ' Chain size: ' + biggerChain)
        console.log(chain)
    }

    chain = []
}
