{
    {
        //funtion with generics
        const createArray = (params: string): string[] => {
            return [params]
        }

        const createArrayWithGeneric = <T>(receiver: T): T[] => {
            return [receiver]
        }

        type user = {
            id: number,
            name: string,
        }

        const res1 = createArray('bangladesh')
        const resGen = createArrayWithGeneric<boolean>(true)
        const resGenObj = createArrayWithGeneric({ id: 344, name: 'asdf' })

        //
    }

    {
        //

        const createArrayWithTuple = <T, Q>(receiver1: T, receiver2: Q): [T, Q] => {
            return [receiver1, receiver2]
        }

        const res1 = createArrayWithTuple<string, number>('jonaed', 10)
        const resGen = createArrayWithTuple<string, boolean>('always speak', true)
        const resGenObj = createArrayWithTuple<string, object>('student', { id: 344, name: 'jonaed' })

        //
    }

    {
        const addCourseToStudent = <T>(student: T) => {
            const course = "Next Level Web Development";
            return {
                ...student,
                course,
            };
        };

        const student1 = addCourseToStudent({
            name: "Mr X",
            email: "x@gmail.com",
            devType: "NLWD",
        });

        const student2 = addCourseToStudent({
            name: "Mr Y",
            email: "y@gmail.com",
            hasWatch: "Apple Watch",
        });
    }
}