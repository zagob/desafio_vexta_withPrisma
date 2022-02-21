import { prisma } from "../../../../infra/database/prismaClient";
import { hash } from "bcrypt";

interface ICreateUser {
  login: string;
  name: string;
  password: string;
  flag?: string;
}

export class CreateUserUseCase {
  async execute({ login, name, password, flag }: ICreateUser) {
    const userExists = await prisma.user.findFirst({
      where: {
        login: {
          equals: login,
          mode: "insensitive",
        },
      },
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    const hashPassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        login,
        name,
        password: hashPassword,
        flag,
      },
    });

    return user;
  }
}
