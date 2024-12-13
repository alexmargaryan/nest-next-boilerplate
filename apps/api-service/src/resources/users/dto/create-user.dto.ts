import { createZodDto } from "nestjs-zod";
import z from "zod";

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
