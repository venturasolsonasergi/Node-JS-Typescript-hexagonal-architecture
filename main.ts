import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { UsersService } from "./src/Users/Domain/UsersService";
import { UsersAdapterExpressApi } from "./src/Users/Infrastructure/UsersAdapterExpressApi";
import { UsersRepositoryInMemory } from "./src/Users/Infrastructure/UsersRepositoryInMemory";
import { Users } from "./src/Users/Users";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

const basePath = '/api/v1';
var router = express.Router();

const users = new Users(
    new UsersAdapterExpressApi(basePath, router),
    new UsersService(
        new UsersRepositoryInMemory()
    )
);
users.init();

app.use(router);

app.all('*', (req: express.Request, res: express.Response) => {
    res.set({ 'Content-Type': 'application/json' })
        .status(404)
        .send({
            statusCode: 404,
            error: "InvalidURIError",
            message: "Invalid URI!"
        })
});

const PORT = process.env.API_PORT || 3000;
app.listen(PORT, () => {
    console.log(`web api listening on port ${PORT}`);
});