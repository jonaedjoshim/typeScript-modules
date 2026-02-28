{
    //utility types

    //pick type
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string
    }

    type Name = Pick<Person, "name">
    type NameAndAge = Pick<Person, "name" | "age"> //joto gula pick krbo toto gular sthe union type use krte hbe evabe.

    //Omit type
    type ContactInfo = Omit<Person, "name" | "age"> //omit basically pick er ulta jinis, mane person er moddhe j key gula ache omit segula bad diye pick korbe. tobe pick er moto ekhaneo ekadhik key add korte caile key | key diye krte hhbe.

    //requierd type
    type PersoneRequired = Required<Person> // if there is any optional type it turned all of them required.

    //partial type
    type PersonPartial = Partial<Person> // eta required er ulta cz, eta sob key k dhore optional kore dey

    //Read Only type
    const person1: Person = {
        name: 'mr x',
        age: 12,
        contactNo: '0178910'
    }

    person1.name = 'mr yz' // we can change the name till we don't we read only type.

    type PersonReadOnly = Readonly<Person>
    const person2: PersonReadOnly = {
        name: 'mr y',
        age: 15,
        contactNo: '0178910'
    }

    // person2.age= 48 // now it's an error cz of read only type

    //Record type
    // type MyObj = {
    //   a: string;
    //   b: string;
    // };

    type MyObj = Record<string, string>;

    const EmptyObj: Record<string, unknown> = {}; // important

    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd",
        // e: 6, //error cz of value is not a string
    };

    //
}