{
    // generic constraint with keyof operator

    type vehicle = {
        bike: string,
        car: string,
        ship: string
    }

    type Owner0 = 'bike' | 'car' | 'ship' //manually

    type Owner = keyof vehicle

    const person: Owner = 'ship'

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: "Mr X",
        email: "x@gmail.com",
        devType: "NLWD",
    }

    const emulator = {
        emuType: 'desktop',
        brand: 'intel processor',
        model: 'core i3-12100',
        releaseYear: 2012,
    }

    const userKey = 'name'
    const emuKey = 'releaseYear'

    const result = getPropertyValue(user, userKey)
    const result2 = getPropertyValue(emulator, emuKey,)
    // console.log(`first reuslt is : ${result}, and second result is ${result2}`)

    console.log(`Users ${userKey} is ${result} and his emulators ${emuKey} is ${result2}`)

    //
}