import { db } from "@/db";

export default async function Books() {
  const books = await db.book.findMany();

  const renderedBooks = books.map((book) => {
    return (
      <div key={book.id}>
        <div>{book.name}</div>
        <div>{book.author}</div>
        <div>{book.state}</div>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedBooks}</div>;
}
