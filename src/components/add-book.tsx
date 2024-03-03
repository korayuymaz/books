"use client";

import {
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";

import FormButton from "./common/form-button";

import { useFormState } from "react-dom";

import * as actions from "@/actions/create-book";

export default function AddBook() {
  const [state, action] = useFormState(actions.createBook, {
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
              isInvalid={!!state.errors.name}
              errorMessage={state.errors.name?.join(", ")}
            />
            <Input
              name="author"
              label="Author"
              labelPlacement="outside"
              isInvalid={!!state.errors.author}
              errorMessage={state.errors.author?.join(", ")}
            />
            <Input
              name="imageUrl"
              label="Cover Art Url"
              labelPlacement="outside"
              isInvalid={!!state.errors.imageUrl}
              errorMessage={state.errors.imageUrl?.join(", ")}
            />
            <Input
              name="state"
              label="State"
              labelPlacement="outside"
              isInvalid={!!state.errors.state}
              errorMessage={state.errors.state?.join(", ")}
            />
            {state.errors._form ? (
              <div className="p-2 bg-red-200 border border-red-400 rounded">
                {state.errors._form?.join(", ")}
              </div>
            ) : null}
            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
