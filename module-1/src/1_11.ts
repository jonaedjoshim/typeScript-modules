{
    //
    // You know what? that question mark can be use in different way, not only for ternary operator, but also for optional chaining and nullish coalescing operator. Let's see how it works in different scenarios.

    //ternary operator

    // usually when we want to check if a variable is truthy or falsy, we can use the ternary operator like this:

    const age = 25;
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }

    //every time converting ts to js might be a bit of a hassle. we can use few lines of code in terminal to see our result without having to create a separate file for it. we can use the ts-node package to run our TypeScript code directly in the terminal. first, we need to install it globally using npm: npm i -g ts-node-dev. then we simple run a command like this: ts-node-dev --respawn --transpile-only .\module-1\src\1_11.ts. this will execute our TypeScript code and show us the output in the terminal.

    //but we can use ternary operator to make our code more concise and easier to read. we can rewrite the above code like this:

    const age2 = 15;
    const isAdult = age2 >= 18 ? true : false;
    console.log({ isAdult });


    //nullish coalescing operator
    // the nullish coalescing operator (??) is a useful tool for providing default values when dealing with null or undefined. it allows us to specify a default value that will be used if the left-hand side of the operator is null or undefined. for example:

    const isAuthenticated = null; // here can be use null or undefined. 
    const result = isAuthenticated ?? "guest";
    const result2 = isAuthenticated ? "guest" : "user";
    console.log({ result, result2 })

    // optional chaining operator

    type User = {
        name: string;
        address: {
            city: string;
            country: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: "Jonaed",
        address: {
            city: "Dhaka",
            country: "Bangladesh",
            presentAddress: "123 Main Street",
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "Permanent address not available";
    console.log({ permanentAddress })
}