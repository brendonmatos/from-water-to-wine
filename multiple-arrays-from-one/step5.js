const numbers = [ 1,2,3,4,5 ]

const arrayGetOfIndex = index => item => item[index]

let changer = nums => Array.from( numbers, num => [
    num * num,
    num.toString(),
    num * -1
])

const newNumbers = [
    changer(numbers).map( arrayGetOfIndex(0) ),
    changer(numbers).map( arrayGetOfIndex(1) ),
    changer(numbers).map( arrayGetOfIndex(2) )
]

console.log( newNumbers )