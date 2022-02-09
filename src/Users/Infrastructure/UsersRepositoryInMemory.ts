import { UsersRepository } from "../Application/UsersRepository";
import { User } from "../Domain/User";

export class UsersRepositoryInMemory implements UsersRepository {
    getAll(): Promise<User[]> {
        return Promise.resolve([
            { id: 5, name: 'Pepe' },
            { id: 1, name: 'Juan' },
            { id: 2, name: 'Mónica' }
        ]);
    }
}