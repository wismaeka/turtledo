import TodoEntity from "../../entities/todo"
import CreateTodoRequest from "../../request/createTodo";

export interface ITodoServices{
    create(todoEntity: CreateTodoRequest ): Promise<TodoEntity>
    findAll(): Promise<TodoEntity[]>
    findById(id: string): Promise<TodoEntity | null>
    update(todoEntity: TodoEntity, id: string):Promise<TodoEntity>
    delete(id:string): Promise<TodoEntity>
}