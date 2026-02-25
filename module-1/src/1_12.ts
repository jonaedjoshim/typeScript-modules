{
    //

    //nullable types
    const searchName = (value: string | null) => {
        if (value) {
            console.log(`Searching for ${value}...`);
        } else {
            console.log("No search term provided.");
        }
    }

    searchName("TypeScript");
    searchName(null);

    //unknown type
    const getSpeepInMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const converterValue = (value * 1000) / 3600;
            console.log(`The speed in meters per second is: ${converterValue} m/s`);
        }

        else if (typeof value === "string") {
            const valueInNumber = value.split(" ")
            const [result, unit] = valueInNumber;
            if (result) {
                const converterSpeed = (parseFloat(result) * 1000) / 3600;
                console.log(`The speed in meters per second is: ${converterSpeed} m/s`);
            }
        }
        else {
            console.log("Invalid input. Please provide a number or a string with a unit (e.g., '156 km/h' or '100').");
        }

    }
    getSpeepInMeterPerSecond("156 km/h");


    //never type
    function throwError(message: string): never {
        throw new Error(message);
    }

    throwError("This is an error message.");


    //
}   