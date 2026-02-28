{
    //conditional type

    type A = number
    type B = string

    type X = A extends null ? true : false //conditional type
    type Y = A extends null ? true : B extends undefined ? undefined : any

    type Sheikh = {
        bike: string;
        car: string;
        ship: string
    }

    // vehical available ache kina check korar jnno 
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false

    type HasPlane = CheckVehicle<"ship">

    //
}