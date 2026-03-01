{
    //oop - inheritence

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(
            name: string,
            age: number,
            address: string
        ) {
            this.name = name;
            this.age = age;
            this.address = address
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }

    class Student extends Parent {

        constructor(
            name: string,
            age: number,
            address: string
        ) {
            super(name, age, address)
        }
    }


    const student1 = new Student('mr x', 20, 'uganda')


    class Teacher extends Parent {
        designation: string

        constructor(
            name: string,
            age: number,
            address: string,
            designation: string,
        ) {
            super(name, age, address)
            this.designation = designation;
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }

        takeClase(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`)
        }
    }

    const teacher = new Teacher('mr y', 40, 'uganda', 'professor')

    //
}