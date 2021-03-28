import { model, Model, Schema, Document } from 'mongoose'

export interface ITodo extends Document {
    title: string,
    description: string,
    created_at?: Date | null;
    updated_at?: Date | null;
    deleted_at?: Date | null | undefined;
}

const TodoSchema: Schema = new Schema ({
    title: { type: String },
    description: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date },
    deleted_at: { type: Date }
})

const Todo : Model<ITodo> = model("todo", TodoSchema)

export default Todo
