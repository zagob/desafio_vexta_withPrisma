import { prisma } from "../../../../infra/database/prismaClient";

interface IClient {
  cnpj_cpf: string;
  natureza?: string;
  name: string;
  name_fantasy?: string;
  address?: string;
  number?: number;
  neighborhood?: string;
  complement?: string;
  id_township: string;
  phone?: string;
  email?: string;
  web?: string;
}

export class CreateClientUseCase {
  async execute({
    cnpj_cpf,
    natureza,
    name,
    name_fantasy,
    address,
    number,
    neighborhood,
    complement,
    id_township,
    phone,
    email,
    web,
  }: IClient) {
    if (!cnpj_cpf) {
      throw new Error("CNPJ/CPF is invalid");
    }

    if (!name) {
      throw new Error("name is invalid");
    }
    if (!(phone || address || web)) {
      throw new Error("Necessary a contact detail at least!");
    }

    if (natureza !== "J" && name_fantasy) {
      throw new Error("Name fantasy invalid to natureza");
    }

    if (!Number.isInteger(number) && number !== undefined) {
      throw new Error("Number is invalid");
    }
    const isCPF = cnpj_cpf.length === 11;

    if (cnpj_cpf.length === 11 || cnpj_cpf.length === 14) {
      const client = await prisma.clients.create({
        data: {
          cnpj_cpf,
          natureza: isCPF ? "F" : "J",
          name,
          name_fantasy: natureza === "J" ? name_fantasy : null,
          address,
          number,
          neighborhood,
          complement,
          id_township,
          phone,
          email,
          web,
        },
      });

      return client;
    }

    throw new Error("invalid format cnpj_cpf");
  }
}
