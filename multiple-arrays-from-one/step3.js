const numbers = [ 1,2,3,4,5 ]

let newNumbers = numbers.reduce( (previus, number) => {
    previus[0].push( Math.pow(number, 2) )
    previus[1].push( number + '' )
    previus[2].push( number * -1 )
    return previus
}, [ [], [], [] ]);

console.log( newNumbers )