{
    //Type Alias

    // Here we are declaring a type alias named Student, which is an object type with properties. Now 'Student' can be used as a type to declare objects with the same structure.
    type Student = {
        name?: string,
        age?: number,
        contact?: string,
        gender?: string,
        isGraduated?: boolean,
        address?: string
    }


    //basic when we declare an obejct we have to write the type of the object and its properties.
    const student0: {
        name: string,
        age: number,
        contact: string,
        gender: string,
        isGraduated: boolean,
        address: string
    } = {
        name: 'Jonaed',
        age: 22,
        contact: '01700000000',
        gender: 'male',
        isGraduated: false,
        address: 'Dhaka'
    }
    // But if we want to declare multiple objects with the same type then we have to write the type of the object and its properties again and again. It kills the readability of the code and also it is not efficient. We can use type alias to solve this problem.
    const student1: Student = {
        name: 'Jonaed',
        age: 22,
        contact: '01700000000',
        gender: 'male',
    }

    // We can use type alias to declare a type for boolean , number, string, array, tuple, union, intersection, etc. It is not limited to object types. For example:
    type Age = number;
    type Name = string;
    type IsGraduated = boolean;
    type Contact = string;
    type Address = string;
    const student2: {
        name: Name,
        age: Age,
        contact: Contact,
        gender: string,
        isGraduated: IsGraduated,
        address: Address
    } = {
        name: 'Jonaed',
        age: 22,
        contact: '01700000000',
        gender: 'male',
        isGraduated: false,
        address: 'Dhaka'
    }

    // Guess what? We can also use type alias to declare a type for a function. For example:
    type Add = (a: number, b: number) => number;
    const add: Add = (a, b) => a + b;

    //
}