"use server";

export async function createBook(formData: FormData) {
  const name = formData.get("name");
  const author = formData.get("author");
  const state = formData.get("state");
}
