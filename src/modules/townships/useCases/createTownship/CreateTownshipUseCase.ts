import { prisma } from "../../../../infra/database/prismaClient";

interface ICreateTownship {
  name: string;
  uf: string;
}

export class CreateTownshipUseCase {
  async execute({ name, uf }: ICreateTownship) {
    const nameExists = await prisma.townships.findFirst({
      where: {
        name,
      },
    });

    if (nameExists) {
      throw new Error("Name already exists!");
    }

    const township = await prisma.townships.create({
      data: {
        name,
        uf,
      },
    });

    return township;
  }
}
