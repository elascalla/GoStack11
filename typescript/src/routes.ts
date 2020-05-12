import { Request, Response } from 'express';
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'erick.lascalla@gmail.com',
        password: '123456',
        techs: ['Node.js', 'ReactJs', 'React-native', { title: 'Javascript', experience: 100 }]
    });

    return response.json({ message: 'Hello World' });
}