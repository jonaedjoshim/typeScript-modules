{
    // What we are gonna leatn today class?

    // spread operator
    // rest operator
    // destructuring


    // spread operator

    const num1: number[] = [1, 2, 3];
    const num2: number[] = [4, 5, 6];

    num1.push(...num2);

    const mentor1 = {
        ts: 'Mezba',
        redux: 'Mir',
        dmbs: 'Mizan'
    }

    const mentor2 = {
        prisma: 'Firoz',
        nextjs: 'Tanmoy',
        cloud: 'Nahid'
    }

    const allMentors = { ...mentor1, ...mentor2 };

    // rest operator

    // This is a function that takes two friends as arguments and greets them but we want to greet more than two friends. So we can use rest operator to achieve that. so, what can we do? we can use rest operator to take all the friends as arguments and then we can loop through them and greet them.
    const greetFriends = (friend1: string, friend2: string) => {
        console.log(`Hello ${friend1} and ${friend2}`);
    }
    //just like this we can use rest operator to take all the friends as arguments and then we can loop through them and greet them:
    const greetAllFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hello ${friend}`));
    }

    greetAllFriends('Mezba', 'Mir', 'Mizan', 'Firoz', 'Tanmoy', 'Nahid');

}

