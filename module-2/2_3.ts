{
    //generic type

    type GeneircArray<T> = Array<T>;


    const numberArray1: number[] = [1, 2, 3];
    const numberArray2: Array<number> = [1, 2, 3]; // generic type syntax
    const numberArray3: GeneircArray<number> = [1, 2, 3]; // using our custom generic type for dynamic type assignment.

    const stringArray1: string[] = ['a', 'b', 'c'];
    const stringArray2: Array<string> = ['a', 'b', 'c']; // generic type syntax
    const stringArray3: GeneircArray<string> = ['a', 'b', 'c']; // using our custom generic type for dynamic type assignment.

    const booleanArray1: boolean[] = [true, false, true];
    const booleanArray2: Array<boolean> = [true, false, true]; // generic type syntax
    const booleanArray3: GeneircArray<boolean> = [true, false, true]; // using our custom generic type for dynamic type assignment.

    const add = (a: number, b: number): number => {
        return a + b;
    }
    add(1, 2);

    const user: GeneircArray<{ name: string, age: number }> = [
        {
            name: 'John',
            age: 30
        },
        {
            name: 'Jane',
            age: 25
        },
        {
            name: 'Doe',
            age: 35
        }
    ];

    //generic tuple

     

    //
}