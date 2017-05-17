const numbers = [ 1,2,3,4,5 ]

let newNumbers = numbers.reduce( (previus, number) => {
    return [
        Array.from( previus[0] ).concat( Math.pow(number, 2) ),
        Array.from( previus[1] ).concat( number + '' ),
        Array.from( previus[2] ).concat( number * -1 )
    ]
}, [] );

console.log( newNumbers )