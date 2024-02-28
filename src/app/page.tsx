import Books from "@/components/books";
import CurrentlyReading from "@/components/currently-reading";

export default function Home() {
  return (
    <div className="container m-4">
      <h1 className="text-xl font-bold">Home</h1>
      <div>
        <h2 className="font-semibold text-lg">Currently Reading</h2>
        <div>
          <CurrentlyReading />
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Other Books You Added</h2>
        <div>
          <Books />
        </div>
      </div>
    </div>
  );
}
