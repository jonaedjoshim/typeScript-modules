{
    //

    //type assertion
    
    // type assertion means telling the compiler that I know better than you about the type of this variable. It is a way to override the type inference of the compiler.

    let value: any;

    value = "Hello World";
    value = 123;
    value = true;

    // now, if i want to use this variable as a string, number or boolean, I can use type assertion to tell the compiler that I know better than you about the type of this variable.

    // as string
    let stringValue = value as string;
    console.log(stringValue.length); // this will work because we are telling the compiler that value is a string.

    // as number
    let numberValue = value as number;
    console.log(numberValue.toFixed(2)); // this will work because we are telling the compiler that value is a number. 

    // as boolean
    let booleanValue = value as boolean;
    console.log(booleanValue); // this will work because we are telling the compiler that value is a boolean.


    const KgToGm = (value: string | number): string | number | undefined => {
        if ( typeof value === "string"){
            const convertedValue = parseFloat(value)*1000;
            return convertedValue;
        }

        if (typeof value === "number"){
            return value*1000;
        }
        
        return undefined;
    }

    const result1 = KgToGm(15) as number;
    const result2 = KgToGm("13") as string;

    // we use try catch block to handle the error if the type assertion is wrong.
    type CustomError = {
        message: string;
    }

    try{}
    catch(error){
        // console.log(error.message) // this will print the error message but ts cannot catch the error because we are telling the compiler that we know better than you about the type of this variable. so best option is :

        console.log((error as CustomError).message) //see? it's working because we are telling the compiler that error is of type CustomError.

    }
    //
}