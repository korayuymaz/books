/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Book_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Book_id_key" ON "Book"("id");
