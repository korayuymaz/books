import Link from "next/link";
import { Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold text-xl">
          Home
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Link href="/my-books" className="font-semibold text-zinc-600">
          My Books
        </Link>
        <Link href="/add-book" className="font-semibold text-zinc-600">
          Add Book
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
