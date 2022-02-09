import express from "express";
import { UsersAdapter } from "../Application/UsersAdapter";
import { User } from "../Domain/User";

export class UsersAdapterExpressApi implements UsersAdapter {

    static usersPath = '/users';

    constructor(
        private basePath: string,
        private router: express.Router
    ) { }

    installGetAllUsers(getAllUsers: () => Promise<User[]>): void {
        this.router.get(this.basePath + UsersAdapterExpressApi.usersPath, async (req, res) => {
            const availablePaddleCourts = await getAllUsers();
            res.json(availablePaddleCourts);
        });
    }
}