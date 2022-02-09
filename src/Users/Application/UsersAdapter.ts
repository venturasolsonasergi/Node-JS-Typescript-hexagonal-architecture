import { User } from "../Domain/User";

export interface UsersAdapter {
    installGetAllUsers(callback: () => Promise<User[]>): void
}