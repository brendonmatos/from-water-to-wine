const numbers = [ 1,2,3,4,5 ]

let changer = numbers => [
    Array.from( numbers, num => num * num ),
    Array.from( numbers, num => num.toString() ),
    Array.from( numbers, num => num * -1 )
];

console.log( changer( numbers ) )