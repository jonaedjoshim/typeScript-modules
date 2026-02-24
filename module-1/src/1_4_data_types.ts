// Basic Data Types in TypeScript


// Primitive Data Types:

// 1. String
let Name : string = 'Jonaed'

// 2. Number
let age : number = 22

// 3. Boolean
let isAdmin : boolean = true

// 4. undefined
let x : undefined = undefined

// 5. null
let y : null = null


let d;

// By default, the type of variable 'd' is 'any' which means it can hold any type of value. But it is generally not recommended to use 'any' type as it defeats the purpose of using TypeScript for type safety. It is better to explicitly declare the type of variable 'd' to avoid potential issues in the future. As we can see below:

d = 123
d = "Hello"
d = true
d = undefined
d = null

let e : string = "Jonaed"

// e= 123 // Error: Type 'number' is not assignable to type 'string'.
e = "Hello" // No error  
// e = true // Error: Type 'boolean' is not assignable to type 'string'.
// e = undefined // Error: Type 'undefined' is not assignable to type 'string'.
// e = null // Error: Type 'null' is not assignable to type 'string'.


// Non-Primitive Data Types:

// 1. Array

// These arrays are good, because they are explicitly typed to hold only numbers and strings respectively.
let numbers : number[] = [1, 2, 3, 4, 5]
let names : string[] = ['Jonaed', 'Jamim', 'Joshim']

// But this array is not good, because it can hold any type of value, which defeats the purpose of using TypeScript for type safety.

let mixed : any[] = [1, 'Jonaed', true, undefined, null]

// On the other hand, we can't push a value of a different type into the 'numbers' array, which is good for type safety. Like, if we try to push a string into the 'numbers' array, we will get an error:

// numbers.push('Hello') // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Or if we try to push a boolean into the 'names' array, we will get an error:

// names.push(true) // Error: Argument of type 'boolean' is not assignable to parameter of type 'string'.

// tuple --> array with fixed number of elements and fixed types which is defined by the user and the order of the elements is also fixed.

let person : [string, number] = ['Jonaed', 22]
// person = [22, 'Jonaed'] // Error: Type 'number' is not assignable to type 'string' and Type 'string' is not assignable to type 'number'.

// We can use more types in a tuple, like this:

let employee : [string, number, boolean] = ['Jonaed', 22, true]
// employee = [22, 'Jonaed', true] // Error: Type 'number' is not assignable to type 'string' and Type 'string' is not assignable to type 'number'.
