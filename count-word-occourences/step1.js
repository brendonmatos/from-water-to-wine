const input = "Cras pretium orci sed nibh tristique elementum. Morbi ut aliquet nibh, vel suscipit sapien. Quisque venenatis ante a vulputate porta. Vivamus auctor convallis laoreet. Fusce id tellus augue. Suspendisse tristique ullamcorper leo, nec commodo ante gravida in. Donec vel a lectus vitae elit rhoncus tincidunt. Mauris eu elit quis sem volutpat laoreet. Aliquam dapibus vitae a metus nec posuere."

let hash = {}
for( let word of input.replace( /,/g, '' ).replace( /\./g, '' ).split(" ") ){
    hash[word.toLowerCase()] = (hash[word.toLowerCase()] || 0) + 1
}

console.log(hash)