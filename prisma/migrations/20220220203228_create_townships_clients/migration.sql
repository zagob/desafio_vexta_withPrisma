-- CreateTable
CREATE TABLE "townships" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "townships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clients" (
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

    CONSTRAINT "Clients_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Clients" ADD CONSTRAINT "Clients_id_township_fkey" FOREIGN KEY ("id_township") REFERENCES "townships"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
