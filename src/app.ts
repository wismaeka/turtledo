import express, { Application, json ,urlencoded } from "express";
import { config as dotenv } from "dotenv"
import mongoose, { Mongoose } from "mongoose"
import TodoRepository from "./repositories/todo";
import TodoService from "./services/todo";
import TodoController from "./controllers/todo";
import TodoRouter from "./router/todo";
import IndexRoutes from "./router";
import i18next from 'i18next'
import middleware from 'i18next-http-middleware'
import Backend from "i18next-fs-backend";
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

        i18next
        .use(Backend)
        .use(middleware.LanguageDetector)
        .init({
            // debug: true,
            backend: {
                loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json'
            },
            fallbackLng: 'en',
            preload: ['en', 'id']
        })
        .then((t) => console.log(t))
        .catch((err) => console.log(err))
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
        this.app.use(middleware.handle(i18next, {}));
        this.app.use(changeLanguange);
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

function changeLanguange(changeLanguange: any) {
    throw new Error("Function not implemented.");
}

