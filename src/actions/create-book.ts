"use server";

import type { Book } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import paths from "@/paths";
import { z } from "zod";

const createBookSchema = z.object({
  name: z.string().min(3),
  author: z.string().min(3),
  state: z.string().min(3),
  imageUrl: z.string().min(3),
});

interface CreateBookFormState {
  errors?: {
    name?: string[];
    author?: string[];
    imageUrl?: string[];
    state?: string[];
    _form?: string[]; // For other errors might occur
  };
}

export async function createBook(
  formState: CreateBookFormState,
  formData: FormData
): Promise<CreateBookFormState> {
  console.log(formData);
  const result = createBookSchema.safeParse({
    name: formData.get("name"),
    author: formData.get("author"),
    state: formData.get("state"),
    imageUrl: formData.get("imageUrl"),
  });

  if (!result.success) {
    console.log(result.error);
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  let book: Book;

  try {
    book = await db.book.create({
      data: {
        name: result.data.name,
        author: result.data.author,
        state: result.data.state,
        imageUrl: result.data.imageUrl,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: { _form: [err.message] },
      };
    } else {
      return {
        errors: { _form: ["Something went wrong"] },
      };
    }
  }

  revalidatePath("/my-books");
  redirect(paths.bookShow());
}
