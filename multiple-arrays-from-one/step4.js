const numbers = [ 1,2,3,4,5 ]

let newNumbers = numbers.reduce( (previus, number) => {
    return [
        previus[0].concat( Math.pow(number, 2) ),
        previus[1].concat( number + '' ),
        previus[2].concat( number * -1 )
    ]
}, [ [], [], [] ]);

console.log( newNumbers )