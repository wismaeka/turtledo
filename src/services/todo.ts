import TodoEntity from "../entities/todo";
import { ITodoRepository } from "../repositories/interfaces/todo";
import CreateTodoRequest from "../request/createTodo";
import { ITodoServices } from "./interfaces/todo";

class TodoService implements ITodoServices{
    constructor(
        private todoRepository: ITodoRepository
    ){}
    async create(todoEntity: CreateTodoRequest) : Promise<TodoEntity>{
        const todo_data: TodoEntity = new TodoEntity({
            title: todoEntity.getTitle(),
            description: todoEntity.getDescription(),
            tag: todoEntity.getTag(),
            created_at:  new Date(),
            updated_at:  new Date(),
            deleted_at: null
        }) 
       const todo = await this.todoRepository.create(todo_data)
        return todo
    }
    async findAll() : Promise<TodoEntity[]>{
    const todo_data = await this.todoRepository.findAll()
    return todo_data
    }
    async findById(id: string) : Promise<TodoEntity | null>{
        return await this.todoRepository.findById(id)
    }
    async update(todoEntity: TodoEntity, id: string) : Promise<TodoEntity>{
        return await this.todoRepository.update(todoEntity, id)
    }
    async delete(id: string) : Promise<TodoEntity>{
        return await this.todoRepository.delete(id)
    }
}

export default TodoService