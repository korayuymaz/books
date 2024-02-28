-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "author" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
