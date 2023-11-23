import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";

export enum Category {
    ADMIN = 'admin',
    USER = 'user'
}

export type UserDocument = HydratedDocument<User>;

@Schema({
    timestamps: true
})

export class User extends Document{
    @Prop()
    name: string;

    @Prop({unique: [true, 'Email already exists']})
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    authenticate: boolean;

    @Prop()
    category: Category;
}

export const UserSchema = SchemaFactory.createForClass(User);