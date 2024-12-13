import { createZodDto } from "nestjs-zod";
import { z } from "zod";

import { CreateUserSchema } from "./create-user.dto";

export const UserSchema = CreateUserSchema.extend({
  id: z.string(),
});

export class UserDto extends createZodDto(UserSchema) {}
