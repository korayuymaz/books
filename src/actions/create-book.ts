// "use server";

// import type { Book } from "@prisma/client";
// import { redirect } from "next/navigation";
// import { db } from "@/db";

// interface CreateBookFormState {
//   errors: {
//     _form?: string[];
//   };
// }

// export async function createBook(
//   formData: FormData
// ): Promise<CreateBookFormState> {
//   const result = {
//     name: formData.get("name"),
//     author: formData.get("author"),
//     state: formData.get("state"),
//   };

//   let book: Book;
//   try {
//     book = await db.book.create({
//       data: {
//         name: result.name,
//         author: result.author,
//         state: result.state,
//       },
//     });
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       return {
//         errors: {
//           _form: [err.message],
//         },
//       };
//     } else {
//       return {
//         errors: {
//           _form: ["Failed to create post"],
//         },
//       };
//     }
//   }

//   // revalidatePath(paths.topicShow(slug));
//   redirect("/");
// }
