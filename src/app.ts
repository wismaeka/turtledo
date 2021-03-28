import express, { Application, json ,urlencoded } from "express";
import { config as dotenv } from "dotenv"
import mongoose, { Mongoose } from "mongoose"
import TodoRepository from "./repositories/todo";
import TodoService from "./services/todo";
import TodoController from "./controllers/todo";
import TodoRouter from "./router/todo";
import IndexRoutes from "./router";

class App {
    public app: Application
    private mongooseClient: Mongoose

    constructor(){
        dotenv();
        this.app = express();
        this.mongooseClient = mongoose
        this.applyMiddleware()
        this.routes()
        this.connectDB()
    }

    private connectDB():void {
        console.log("Monggo connecting ...")
        this.mongooseClient
        .connect(
            process.env.MONGO_URI || "", 
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        )
        .then(() => console.log( "Monggo connected"))
        .catch((err) => console.log("Mongo error", err))
    }

    protected applyMiddleware(): void {
        this.app.use(json())
        this.app.use(urlencoded({ extended: true }))
    }

    protected routes() {
        const todoRepository = new TodoRepository()
        const todoService = new TodoService(todoRepository)
        const todoController = new TodoController(todoService)
        const todoRouter = new TodoRouter(todoController).routes()

        this.app.use(new IndexRoutes(todoRouter).router)
    }
}

const app = new App().app
app.listen(process.env.PORT, () => {
    console.log('Port run on ' + process.env.PORT )
})