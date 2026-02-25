{
    //

    //intersection type 
    // It works like and operator from javascript. It combines two or more types into one. The resulting type will have all the properties of the combined types.

    type FrontendDeveloper = {
        skills: string[],
        designation1: 'frontendDev'
    }

    type BackendDeveloper = {
        skills: string[],
        designation2: 'backendDev'
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['html', 'css', 'javascript', 'node.js', 'express.js'],
        designation1: 'frontendDev',
        designation2: 'backendDev'
    }

    //union type

    type FrontendDeveloper2 = 'fakibazDev' | 'juniorDev';
    type FullStackDeveloper2 = 'frontendDev' | 'backendDev';

    type Developer = FrontendDeveloper2 | FullStackDeveloper2;

    //these are the only two values that can be assigned to the type FrontendDeveloper, if we try to assign any other value, it will give an error.
    const newDeveloper: FrontendDeveloper2 = 'fakibazDev';
    const newDeveloper2: FrontendDeveloper2 = 'juniorDev';

    // const newDeveloper3: FrontendDeveloper = 'johnDoeDev'; //error

    // real world example of union type
    type User = {
        name: string,
        email?: string,
        gender: 'male' | 'female',
        bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
    }
    const user: User = {
        name: 'jonaed',
        email: 'jonaed@example.com',
        gender: 'male',
        bloodGroup: 'O+'
    }

    const user2: User = {
        name: 'jamaica',
        gender: 'female',
        bloodGroup: 'A-'
    }

    //
}