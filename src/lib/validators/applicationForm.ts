import { z } from "zod";

export const applicationForm = z.object({
  name: z.string().min(1, "이름 필수로 작성해주세요."),

  phone: z
    .string()
    .min(1, "연락처 필수로 작성해주세요.")
    .regex(/^010-\d{4}-\d{4}$/, "연락처 형식이 올바르지 않습니다"),

  email: z.string().min(1, "이메일 필수로 작성해주세요.").email("이메일 형식이 옳바르지 않습니다."),

  agreedTerms: z.literal(true),
});
