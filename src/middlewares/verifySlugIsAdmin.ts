import { NextFunction, Request, Response } from "express";
import { prisma } from "../infra/database/prismaClient";

interface IUserAdmin {
  id: string;
  login: string;
  slug: string;
}

export async function verifySlugIsAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id_user } = request;

  const userAdmin = await prisma.user.findFirst({
    where: {
      id: id_user,
      flag: {
        equals: "admin",
      },
    },
  });

  try {
    if (!userAdmin) {
      throw "User is not permission!";
    }

    return next();
  } catch (err) {
    return response.status(401).json({
      message: err,
    });
  }
}
