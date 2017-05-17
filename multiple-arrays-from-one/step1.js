const numbers = [ 1,2,3,4,5 ]

let newNumbers = [ [], [], [] ]
for( let i = 0; i < numbers.length ; i++ ){
    newNumbers[0].push( Math.pow(numbers[i], 2) )
    newNumbers[1].push( numbers[i] + '' )
    newNumbers[2].push( numbers[i] * -1 )
}

console.log( newNumbers )