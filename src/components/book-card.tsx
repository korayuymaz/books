import { Image } from "@nextui-org/react";
import BookState from "./book-state";
import FormDeleteButton from "./common/delete-button";

interface Book {
  book: {
    id: number;
    name: string;
    author: string;
    state: string;
    imageUrl: string;
  };
}

export default function BookCard({ book }: Book) {
  return (
    <div className="flex gap-4 mt-4">
      <Image
        width={95}
        alt="Placeholder for Book Covers"
        src={book.imageUrl}
        loading="lazy"
      />
      <div className="flex justify-between w-full">
        <div>
          <div className="font-bold">{book.name}</div>
          <div>by {book.author}</div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <BookState currentState={book.state} id={book.id} />
          <FormDeleteButton id={book.id} />
        </div>
      </div>
    </div>
  );
}
