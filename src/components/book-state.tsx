"use client";

import { Select, SelectItem } from "@nextui-org/react";
import * as actions from "@/actions/update-book-state";
import { ChangeEvent } from "react";

interface State {
  id: number;
  currentState: string;
}

export default function BookState({ currentState, id }: State) {
  const changeState = (event: ChangeEvent<HTMLSelectElement>) => {
    let state = event.target.value.toString();
    actions.updateBookState({ id, state });
  };

  const bookState = [
    {
      label: "Want to Read",
      value: "to-read",
      description: "Book added library to-read",
    },
    {
      label: "Currently Reading",
      value: "reading",
      description: "Book currently reading",
    },
    {
      label: "Read",
      value: "read",
      description: "Book have been read",
    },
  ];

  return (
    <div className="w-full">
      <Select
        color="default"
        aria-label={currentState}
        defaultSelectedKeys={[currentState]}
        className="w-40"
        variant="flat"
        onChange={(event) => changeState(event)}
      >
        {bookState.map((state) => (
          <SelectItem key={state.value} value={state.value}>
            {state.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
