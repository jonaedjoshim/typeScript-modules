// We know that JS had functions, and these are normal functions and arrow functions. Example:

function add(a: number, b: number): number {
    return a + b
}

add(2, 3) // 5
// add(2, '3') // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

const addArrow = (a: number, b: number): number => {
    return a + b
}

// method --> function inside an object is called method. Example:

const poorUser = {
    name: 'Jonaed',
    balance: 0,
    addBalance(money: number): string {
        this.balance += money
        return `Added ${money} to the balance. New balance is ${this.balance}`
    }
}