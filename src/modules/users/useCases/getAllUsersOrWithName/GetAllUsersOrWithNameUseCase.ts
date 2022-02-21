import { prisma } from "../../../../infra/database/prismaClient";

interface IGetUsers {
  name?: string;
}

export class GetAllUsersOrWithNameUseCase {
  async execute({ name }: IGetUsers) {
    const user = await prisma.user.findMany({
      where: {
        name: {
          equals: name,
        },
      },
    });

    return user;
  }
}
