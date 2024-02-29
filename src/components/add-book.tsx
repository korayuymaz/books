import {
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import BookState from "@/components/book-state";

export default function AddBook() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">New Book</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form>
          <div className="flex flex-col gap-4 p-4 w-80">
            <Input name="name" label="Book Name" labelPlacement="outside" />
            <Input name="author" label="Author" labelPlacement="outside" />
            <Input name="state" label="Book State" labelPlacement="outside" />
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
