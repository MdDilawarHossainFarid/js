const arrary = [1,2,3]

const obj = arrary[Symbol.iterator]()
console.log( obj.next())
console.log( obj.next())
console.log( obj.next())
console.log( obj.next())


