{
    // Reference types= Object

    const user: {
        learningFrom: 'Programming Hero'; //Somethimes we can forcefully assign a specific value to a property like this. This is called literal type. It means that the value of the property 'learningFrom' must be 'Programming Hero', otherwise there will be an error.
        firstName: string;
        middleName?: string; // optional property, we can make it optional by adding '?' after the property name like this: middleName?: string. That means if user donen't provide a value for middleName, it will be undefined and there will be no error. but if he provide a value for middleName, it must be a string, otherwise there will be an error.
        lastName: string;
        // age: number;
        readonly age: number;
        isMarried: boolean;
    } = {
        // learningFrom: 'Programming Hero Bangladesh', // Error: Type '"Programming Hero Bangladesh"' is not assignable to type '"Programming Hero"'.
        learningFrom: 'Programming Hero', // No error, cz of literal type.
        firstName: 'Jonaed',
        // middleName: 'Hossain',
        lastName: 'Jamim',
        age: 22,
        isMarried: true
    }

    // readonly property means that we can only assign a value to it once, and we can't change it afterwards. So if we try to change the value of 'age' property, we will get an error:
    // user.age = 23 // Error: Cannot assign to 'age' because it is a read-only property.
}