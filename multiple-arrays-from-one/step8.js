

const numbers = [ 1,2,3,4,5 ]

const powFilter = num => num * num
const toStringFilter = num => num.toString()
const toNegative = num => -num

const transformWith = (fns, input) => (undefined, ky) => {
	return Array.from(input, fns[ky])
}

// Por indicação do @suissa
const fns = [ powFilter, toStringFilter, toNegative]
const length = fns.length

const r = Array.from({length}).map( transformWith( fns, numbers ) )

console.log(r);
