const numbers = [ 1,2,3,4,5 ]

const powFilter = num => num * num
const toStringFilter = num => num.toString()
const signalSwitch = num => num * -1

let changer = numbers => [
    Array.from( numbers, powFilter ),
    Array.from( numbers, toStringFilter ),
    Array.from( numbers, signalSwitch )
];

console.log( changer( numbers ) )