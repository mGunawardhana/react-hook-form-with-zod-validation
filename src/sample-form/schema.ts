import {z} from "zod";

export const userSchema = z.object({
    name: z.string().min(1, "Name is required"),
    age: z.number().min(1, "Age is required"),
    email: z.string().min(1, "Email is required"),
    password: z.string().min(1, "Password is required"),
});

export type UserSchema = z.infer<typeof userSchema>;