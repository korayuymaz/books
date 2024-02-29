import { db } from "@/db";
import BookCard from "./book-card";

export default async function Books() {
  const books = await db.book.findMany();

  const renderedBooks = books.map((book) => {
    return <BookCard book={book} />;
  });

  return <div className="w-full">{renderedBooks}</div>;
}
