import CurrentlyReading from "@/components/currently-reading";
import { Divider } from "@nextui-org/react";
import { fetchBooksRead } from "@/db/quaries/books";

export default async function Home() {
  const booksRead = await fetchBooksRead();

  return (
    <div className="container">
      <div>
        {booksRead.length > 0 ? (
          <div>
            You have read <span className="font-bold">{booksRead.length}</span>{" "}
            book
          </div>
        ) : null}
        <Divider />
        <CurrentlyReading />
      </div>
    </div>
  );
}
