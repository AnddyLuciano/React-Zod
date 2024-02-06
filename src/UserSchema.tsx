import { z } from "zod";

export const UserSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    age: z.date(),
    isProgrammer: z.boolean(),
});
