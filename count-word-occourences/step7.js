const input = "Cras pretium orci sed nibh tristique elementum. Morbi ut aliquet nibh, vel suscipit sapien. Quisque venenatis ante a vulputate porta. Vivamus auctor convallis laoreet. Fusce id tellus augue. Suspendisse tristique ullamcorper leo, nec commodo ante gravida in. Donec vel a lectus vitae elit rhoncus tincidunt. Mauris eu elit quis sem volutpat laoreet. Aliquam dapibus vitae a metus nec posuere."

const lowCase = w => w.toLowerCase()
const getWords = text => text.match(/(\w)+/g)
const addWordInHash = (hash, word) => {
    hash[word] |= 1 + hash[word]
    return hash
}
const countWords = words => words.reduce(, {} )
let words = getWords(input).map(lowCase)
console.log( countWords(words) )