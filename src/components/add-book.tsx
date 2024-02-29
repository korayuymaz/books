"use client";

import {
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import { useFormState } from "react-dom";

import * as actions from "@/actions/create-book";

export default function AddBook() {
  const [formState, action] = useFormState(actions.createBook, {
    errors: {},
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">New Book</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <Input
              name="name"
              label="Book Name"
              labelPlacement="outside"
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />
            <Input
              name="author"
              label="Author"
              labelPlacement="outside"
              isInvalid={!!formState.errors.author}
              errorMessage={formState.errors.author?.join(", ")}
            />
            <Input
              name="imageUrl"
              label="Cover Art Url"
              labelPlacement="outside"
              isInvalid={!!formState.errors.imageUrl}
              errorMessage={formState.errors.imageUrl?.join(", ")}
            />
            <Input
              name="state"
              label="State"
              labelPlacement="outside"
              isInvalid={!!formState.errors.state}
              errorMessage={formState.errors.state?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="p-2 bg-red-200 border border-red-400 rounded">
                {formState.errors._form?.join(", ")}
              </div>
            ) : null}
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
