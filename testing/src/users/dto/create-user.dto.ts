import { Category } from "../schemas/user.schema";

export class CreateUserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly authenticate: boolean;
    readonly category: Category;
}