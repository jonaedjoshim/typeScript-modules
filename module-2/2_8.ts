{
    // promise
    //simulate
    {
        const createPromise = (): Promise<string> => {
            return new Promise<string>((resolve, reject) => {
                const data: string = 'nothing'
                if (data) {
                    resolve(data)
                } else {
                    reject('failed to load data')
                }
            })
        }

        //calling create promise function

        const showData = async (): Promise<string> => {
            const data = await createPromise();
            // console.log(data)
            return (data)
        }

        showData()
    }
    {

        type ABC = { something: 'nothing' }

        const createPromise = (): Promise<ABC> => {
            return new Promise<ABC>((resolve, reject) => {
                const data: ABC = { something: 'nothing' }
                if (data) {
                    resolve(data)
                } else {
                    reject('failed to load data')
                }
            })
        }

        //calling create promise function

        const showData = async (): Promise<ABC> => {
            const data = await createPromise();
            // console.log(data)
            return (data)
        }

        showData()
    }

    {
        //using json placeholder

        type Todo = {
            id: number;
            userId: number;
            title: string;
            completed: boolean
        }

        const getTodo = async (): Promise<Todo> => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

            const data = await response.json();

            return (data)
        }

        getTodo()

    }

    //
}