"use client";

import { Select, SelectItem } from "@nextui-org/react";

interface State {
  currentState: string;
}

export default function BookState({ currentState }: State) {
  const changeState = () => {};

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
        variant="underlined"
        onChange={changeState}
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
