{
    //interface-generic

    interface Developer<T, X = null> {
        name: string;
        address: string;
        emulator: {
            emuType: string;
            brand: string;
            model: string;
            release: number;
        };
        smartWatch: T;
        bike?: X;
    }

    type ColmiWatch = {
        brand: string;
        model: string;
    }

    const poorDeveloper: Developer<ColmiWatch> = {
        name: 'jamim',
        address: 'sirajganj',
        emulator: {
            emuType: 'desktop',
            brand: 'intel processor',
            model: 'core i3-12100',
            release: 2012,
        },
        smartWatch: {
            brand: 'colmi',
            model: 'colmi p81'
        }
    }

    type samsungWatch = {
        brand: string;
        model: string;
        callingFeature: boolean;
        heartBeatTracker: boolean;
    }

    type motorBike = {
        brand: string;
        name: string;
        model: string;
    }

    const midDeveloper: Developer<samsungWatch, motorBike> = {
        name: 'joshim',
        address: 'shahzadpur',
        emulator: {
            emuType: 'laptop',
            brand: 'dell',
            model: 'dell lattitude',
            release: 2018,
        },
        smartWatch: {
            brand: 'samsung',
            model: 'sunsung ultra',
            callingFeature: true,
            heartBeatTracker: true,
        },
        bike: {
            brand: 'suzuki',
            name: 'monotone',
            model: 'latest'
        }
    }

    interface appleWatch {
        brand: string;
        model: string;
        heartbeatTracker: boolean;
        sleepTracker: boolean;
        display: string;
    }

    interface sportsBike {
        name: string,
        model: string | number,
        cc: number,
    }

    const richDeveloper: Developer<appleWatch, sportsBike> = {
        name: 'jonaed',
        address: 'dhaka',
        emulator: {
            emuType: 'laptop and desktop',
            brand: 'mac',
            model: 'mac pro',
            release: 2024,
        },
        smartWatch: {
            brand: 'apple',
            model: 'apple watch ultra',
            heartbeatTracker: true,
            sleepTracker: true,
            display: 'super amoled'
        },
        bike: {
            name: 'yamaha r15',
            model: 'v4',
            cc: 155
        }
    }


    //
}