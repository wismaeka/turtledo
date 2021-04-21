import TodoEntity from "../entities/todo";
import { ITodoRepository } from "./interfaces/todo";
import TodoModel from '../models/todo'

class TodoRepository implements ITodoRepository{
    constructor(){}
    async create (todoEntity: TodoEntity): Promise<TodoEntity>{
       const todo_result : {[ k: string] : any } = await TodoModel.create({
            title: todoEntity.getTitle,
            tag: todoEntity.getTag,
            description: todoEntity.getDesc,
            created_at: todoEntity.getCreated ?? new Date(),
            updated_at: todoEntity.getUpdated ?? new Date(),
            deleted_at: todoEntity.getDeleted
        })
        todoEntity.setId = todo_result.id
        return todoEntity
    }

    async findAll(): Promise<TodoEntity[]>{
        return await TodoModel.find(
            { $or: [{ deleted_at: null }, { deleted_at: undefined }]},
            )
            .then((result) => {
                return result.map((e) =>{
                    return new TodoEntity({
                        id: e.id,
                        title: e.title,
                        tag: e.tag,
                        description: e.description,
                        created_at: e.created_at ?? new Date,
                        updated_at: e.updated_at ??  new Date,
                        deleted_at: e.deleted_at
                    }) 
                })
            })
            .catch((err) => { return err })
        
    }

    async findById( id: string ): Promise<TodoEntity | null>{
        const todo = await TodoModel.findOne({ _id: id })
        return todo ? new TodoEntity ({
            id: todo.id,
            title: todo.title,
            tag: todo.tag,
            description: todo.description,
            created_at: todo.created_at ?? new Date(),
            updated_at: todo.updated_at ?? new Date(),
            deleted_at: todo.deleted_at
        }) : null
    }

    async update ( todoEntity: TodoEntity, id: string ): Promise<TodoEntity>{
        return await TodoModel.findByIdAndUpdate(
            { _id: id },
            {
                title: todoEntity.getTitle,
                tags: todoEntity.getTag,
                description: todoEntity.getDesc,
                created_at: todoEntity.getCreated ?? new Date(),
                updated_at: todoEntity.getUpdated ?? new Date(),
                deleted_at: todoEntity.getDeleted ?? undefined

            }
        )
       .then(() => {
           return todoEntity
       })
       .catch((err) => { return err });
       
    }

    async delete( id: string ): Promise<TodoEntity>{
        return await TodoModel.updateOne(
            { _id: id },
            {deleted_at: new Date()}
            )
            .then(() =>{ return null })
            .catch((err) => {return err})
    }
}

export default TodoRepository