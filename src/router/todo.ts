import { Router } from "express";
import { ITodoController } from "../controllers/interfaces/todo";
import BaseRoutes from "./baseRoute";
import IRouter from './interfaces/routes'

class TodoRouter extends BaseRoutes{
    public router : Router
    constructor(
        private todoController : ITodoController
    ){
        super()
        this.router = Router()
    }

    routes(): IRouter{
    const _this = this.todoController
    this.router.get('/', this.todoController.findAll.bind(_this))
    this.router.post('/', this.todoController.create.bind(_this))
    this.router.get('/id', this.todoController.findById.bind(_this))
    this.router.put('/id', this.todoController.update.bind(_this))
    this.router.delete('/id', this.todoController.delete.bind(_this))

    return this
    }
}

export default TodoRouter