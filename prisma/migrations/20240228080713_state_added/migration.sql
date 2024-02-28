/*
  Warnings:

  - Made the column `name` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `author` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "state" TEXT NOT NULL DEFAULT 'to-read',
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "author" SET NOT NULL;
