{
    // destructuring

    const user = {
        id: 123,
        name: {
            firstName: 'Jonaed',
            middleName: 'Hossain',
            lastName: 'Joshim',
        },
        contactNo: '01700000000',
        address: 'Dhaka, Bangladesh'
    }

    const {
        contactNo,
        name: { firstName },
    } = user;

    //array destructuring

    const myFriends = ['Mezba', 'Mir', 'Mizan', 'Firoz', 'Tanmoy', 'Nahid'];
    const [,,bestFriend,...rest] = myFriends;

}