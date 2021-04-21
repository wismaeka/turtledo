export default class CreateTodoRequest {
    private title : string
    private description: string
    private tag : string
    // private created_at: Date  = new Date()
    // private updated_at: Date  = new Date()
    // private deleted_at: Date | null | undefined

    constructor(
        title: string,
        description: string,
        tag: string
        // created_at: Date = new Date(),
        // updated_at: Date = new Date(),
        // deleted_at: Date | null | undefined
        
    ){
        this.title = title,
        this.description = description,
        this.tag = tag
        // this.created_at = created_at,
        // this.updated_at = updated_at,
        // this.deleted_at = deleted_at
    }

    getTitle(): string{
        return this.title
    }
    getDescription():string{
        return this.description
    }    
    getTag():string{
        return this.tag
    }    
    // getCreatedAt(): Date {
    //     return this.created_at
    //   }
    
    //   getUpdatedAt(): Date {
    //     return this.updated_at
    //   }
    
    //   getDeletedAt(): Date | null {
    //     return this?.deleted_at ?? null
    //   }
}