import { UsersRepository } from "../Application/UsersRepository";
import { User } from "./User";

export class UsersService {
    constructor(
        private usersRepository: UsersRepository
    ) { }

    async getAllUsers(): Promise<Array<User>> {
        return await this.usersRepository.getAll();
    }
}