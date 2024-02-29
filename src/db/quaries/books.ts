import type { Book } from "@prisma/client";
import { db } from "@/db";

export type BookWithData = Book & {};

// export function fetchBooksBySearchTerm(term: string): Promise<Book[]> {
//   return db.book.findMany({
//     include: {
//       topic: { select: { slug: true } },
//       user: { select: { name: true, image: true } },
//       _count: { select: { comments: true } },
//     },
//     where: {
//       OR: [{ name: { contains: term } }, { name: { contains: term } }],
//     },
//   });
// }

export function fetchBooksCurrentlyReading(): Promise<BookWithData[]> {
  return db.book.findMany({
    where: { state: "reading" },
  });
}

export function fetchBooksRead(): Promise<BookWithData[]> {
  return db.book.findMany({
    where: { state: "read" },
  });
}
