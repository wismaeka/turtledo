import BaseEntity from "./baseEntity";

export interface ITodoEntity {
    id?: string,
    title : string,
    description: string,
    created_at?: Date
    updated_at?: Date 
    deleted_at?: Date | null | undefined;
}

class TodoEntity extends BaseEntity {
    protected id? : string
    protected title: string
    protected description : string
    protected created_at?: Date
    protected updated_at?: Date
    protected deleted_at?: Date | null | undefined;

    constructor(params : ITodoEntity){
        super()
        this.id = params.id,
        this.title = params.title,
        this.description = params.description,
        this.created_at = params.created_at,
        this.updated_at = params.updated_at,
        this.deleted_at = params.deleted_at
    }

    get getId(): string | null {
        return this?.id ?? null
    }
    set setId (id: string) {
       this.id = id
    }

    get getTitle(): string {
        return this.title
    }
    set setTitle(title: string){
        this.title = title
    }
    get getDesc(): string {
        return this.description
    }
    set setDesc(description: string){
        this.description = description
    }
    get getCreated(): Date | null {
        return this.created_at ?? new Date()
    }
    set setCreated(created_at: Date){
        this.created_at = created_at 
    }
    get getUpdated(): Date | null {
        return this.updated_at ?? new Date()
    }
    set setUpdated(updated_at: Date){
        this.updated_at = updated_at
    }
    get getDeleted(): Date | null | undefined {
        return this.deleted_at
    }
    set setDeleted(deleted_at: Date | null | undefined){
        this.deleted_at = deleted_at
    }

    toJson(): object{
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            created_at: this.created_at,
            updated_at: this.updated_at,
            deleted_at: this.deleted_at,
        }
    }
}

export default TodoEntity