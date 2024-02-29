"use server";

import { z } from "zod";

const createBookSchema = z.object({
  name: z.string().min(3),
  author: z.string().min(3),
  state: z.string().min(5),
});

export async function createBook(formData: FormData) {
  const result = createBookSchema.safeParse({
    name: formData.get("name"),
    author: formData.get("author"),
    state: formData.get("state"),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
  }
}
