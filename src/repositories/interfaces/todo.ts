import TodoEntity from "../../entities/todo";


export interface ITodoRepository {
    create( todoEntity: TodoEntity ): Promise<TodoEntity>
    findById( id: string ): Promise<TodoEntity | null>
    findAll(): Promise<TodoEntity[]>
    update( todoEntity: TodoEntity, id: string): Promise<TodoEntity>
    delete(id: string) : Promise<TodoEntity>
}