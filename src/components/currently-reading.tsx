import BookCard from "./book-card";
import { fetchBooksCurrentlyReading } from "@/db/quaries/books";

export default async function CurrentlyReading() {
  const books = await fetchBooksCurrentlyReading();

  const renderedBooks = books.map((book) => {
    return (
      <div key={book.id}>
        <BookCard book={book} />
      </div>
    );
  });

  return <div>{renderedBooks}</div>;
}
