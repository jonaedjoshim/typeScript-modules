{
    //

    //interface

    {
        // interface and type alias might look same but they are different concepts in ts. there are many pros and cons of both of them. 

        // type alias
        type User1 = {
            name: string,
            age: number,
        }

        // interface
        interface User2 {
            name: string,
            age: number,
        }
        //we can say that interface looks like object literal. but type alias is different. that means when it will be primitive type then we have to use type alias and when it will be non primitive type then we have to use interface. 

        //primitive type
        type ID = string | number;

        const user1: User2 = {
            name: 'Jonaed',
            age: 22,
        }
    }

    {
        //type alias extension

        type User1 = {
            name: string,
            age: number,
        }

        type UserWithRole1 = User1 & { role: string };

        const user1: UserWithRole1 = {
            name: 'Jonaed',
            age: 22,
            role: 'admin', // admin is extended property from User1
        }

    }

    {
        //interface extension

        interface User2 {
            name: string,
            age: number,
        }

        type UserWithRole2 = User2 & { role: string };

        const user1: UserWithRole2 = {
            name: 'Jonaed',
            age: 22,
            role: 'admin', // admin is extended property from User1
        }

    }

    {

        //array extension

        // in js array, function, class, object are all type of objects. 

        // type alias for array
        type Roll1 = number[];
        const roll1: Roll1 = [1, 2, 3, 4, 5];

        // interface for array
        interface Roll2 {
            [index: number]: number;
        }
        const roll2: Roll2 = [1, 2, 3, 4, 5];

    }

    {

        //function extension

        // type alias for function
        type Add1 = (a: number, b: number) => number;
        const add1: Add1 = (a, b) => a + b;

        // interface for function
        interface Add2 {
            (a: number, b: number): number;
        }
        const add2: Add2 = (a, b) => a + b;

    }


    /*
    so, when should we use type alias and when should we use interface?

    for clean better and readable code, we should use interface for functions, arrays. we can use interface and type alias for objects but we should use interface for objects because it is more readable and clean code. and we should use type alias for data types like string, number, boolean, union types, intersection types etc. because it is more readable and clean code. 
    
    */

    //
}