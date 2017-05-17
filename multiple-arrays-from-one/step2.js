const numbers = [ 1,2,3,4,5 ]

let newNumbers = [ [], [], [] ]
for( let number of numbers ){
    newNumbers[0].push( Math.pow(number, 2) )
    newNumbers[1].push( number + '' )
    newNumbers[2].push( number * -1 )
}

console.log( newNumbers )