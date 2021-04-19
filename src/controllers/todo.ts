import { Request, Response } from "express";
import CreateTodoRequest from "../request/createTodo";
import TodoService from "../services/todo";
import { ITodoController } from "./interfaces/todo";

class TodoController implements ITodoController{
    constructor(
        private todoService : TodoService
    ){}
    async create(req: Request, res: Response): Promise<Response>{
        const { title, description } = req.body
        const todo_data = new CreateTodoRequest(
            title,
            description
          );
        return this.todoService.create(todo_data)
        .then((result) => { 
            return res.status(201).jsonp(result) })
        .catch((err) => { return err })
    }
    async findById(req: Request, res: Response): Promise<Response>{
        return  this.todoService.findById(req.params.id)
        .then((result) => { res.status(200).jsonp(result) })
        .catch((err) => { return err })
    }
    async findAll(req: Request, res: Response): Promise<Response>{
        return  this.todoService.findAll()
        .then((result) => { return res.status(200).jsonp(result.map((e) => e))})
        .catch((err) => { return err })
    }
    async update(req: Request, res: Response):  Promise<Response>{
       return  this.todoService.update(req.body, req.params.id)
       .then((result) => { res.status(200).jsonp(result) })
       .catch((err) => { return err })
    }
    async delete(req: Request, res: Response): Promise<Response>{
        return  this.todoService.delete(req.params.id)
        .then((result) => { res.status(200).jsonp(result) })
        .catch((err) => { return err })
    }
}

export default TodoController