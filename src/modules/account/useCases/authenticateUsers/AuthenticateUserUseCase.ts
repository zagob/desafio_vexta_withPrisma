import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../infra/database/prismaClient";

interface IAuthenticateUser {
  login: string;
  password: string;
}

export class AuthenticateUserUseCase {
  async execute({ login, password }: IAuthenticateUser) {
    const user = await prisma.user.findFirst({
      where: {
        login,
      },
    });

    if (!user) {
      throw new Error("Username or password invalid!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Username or password invalid!");
    }

    const token = sign({ login }, process.env.SECRET_USER, {
      subject: user.id,
      expiresIn: "1d",
    });

    return { token };
  }
}
