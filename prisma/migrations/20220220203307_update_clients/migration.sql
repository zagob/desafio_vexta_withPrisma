/*
  Warnings:

  - You are about to drop the `Clients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Clients" DROP CONSTRAINT "Clients_id_township_fkey";

-- DropTable
DROP TABLE "Clients";

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "cnpj_cpf" TEXT NOT NULL,
    "natureza" TEXT,
    "name" TEXT NOT NULL,
    "name_fantasy" TEXT,
    "address" TEXT,
    "number" TEXT,
    "neighborhood" TEXT,
    "complement" TEXT,
    "id_township" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "web" TEXT,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_id_township_fkey" FOREIGN KEY ("id_township") REFERENCES "townships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
