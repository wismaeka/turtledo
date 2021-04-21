import BaseEntity from "./baseEntity";

export interface ITodoEntity {
    id?: string,
    title : string,
    description: string,
    tag: string
    created_at?: Date
    updated_at?: Date 
    deleted_at?: Date | null | undefined;
}

class TodoEntity extends BaseEntity {

    constructor(protected params : ITodoEntity){
        super()
    }

    get getId(): string | null {
        return this?.params.id ?? null
    }
    set setId (id: string) {
       this.params.id = id
    }

    get getTitle(): string {
        return this.params.title
    }
    set setTitle(title: string){
        this.params.title = title
    }
    get getTag(): string {
        return this.params.tag
    }
    set setTag(tag: string){
        this.params.tag = tag
    }
    get getDesc(): string {
        return this.params.description
    }
    set setDesc(description: string){
        this.params.description = description
    }
    get getCreated(): Date | null {
        return this.params.created_at ?? new Date()
    }
    set setCreated(created_at: Date){
        this.params.created_at = created_at 
    }
    get getUpdated(): Date | null {
        return this.params.updated_at ?? new Date()
    }
    set setUpdated(updated_at: Date){
        this.params.updated_at = updated_at
    }
    get getDeleted(): Date | null | undefined {
        return this.params.deleted_at
    }
    set setDeleted(deleted_at: Date | null | undefined){
        this.params.deleted_at = deleted_at
    }

    toJson(): object{
        return {
            id: this.params.id,
            title: this.params.title,
            description: this.params.description,
            tag: this.params.tag,
            created_at: this.params.created_at,
            updated_at: this.params.updated_at,
            deleted_at: this.params.deleted_at,
        }
    }

    toList(t: Function): object {
        return {
            id: this.params.id,
            title: this.params.title,
            description: this.params.description,
            tag: t(this.params.tag),
            created_at: this.params.created_at,
            updated_at: this.params.updated_at,
            deleted_at: this.params.deleted_at,
        }
    }
}

export default TodoEntity