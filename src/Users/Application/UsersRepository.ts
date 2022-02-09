import { User } from "../Domain/User";

export interface UsersRepository {
    getAll(): Promise<Array<User>>;
}