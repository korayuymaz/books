"use client";

import { Button } from "@nextui-org/react";
import * as actions from "@/actions/delete-book";
import deleteImage from "delete.png";
import { DeleteIcon } from "../icons/delete-icon";

interface FormDeleteButtonProps {
  id: number;
}

export default function FormDeleteButton({ id }: FormDeleteButtonProps) {
  const deleteBook = () => {
    actions.deleteBookState({ id });
  };
  return (
    <Button isIconOnly color="default" onPress={(e) => deleteBook()}>
      <DeleteIcon />
    </Button>
  );
}
