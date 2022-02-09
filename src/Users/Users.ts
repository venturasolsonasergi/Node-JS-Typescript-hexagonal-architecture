import { UsersAdapter } from "./Application/UsersAdapter";
import { UsersService } from "./Domain/UsersService";

export class Users {
    constructor(
        private usersAdapter: UsersAdapter,
        private usersService: UsersService
    ) { }

    init() {
        this.usersAdapter.installGetAllUsers(
            () => this.usersService.getAllUsers()
        );
    }
}