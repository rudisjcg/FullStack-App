import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    ADMIN = 'admin',
    USER = 'user'
}

@Schema({
    timestamps: true
})

export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: false })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    authenticate: boolean;

    @Prop()
    category: Category;
}

export const UserSchema = SchemaFactory.createForClass(User);