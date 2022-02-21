import { Request, Response } from "express";
import { GetAllUsersOrWithNameUseCase } from "./GetAllUsersOrWithNameUseCase";

export class GetAllUsersOrWithNameController {
  async handle(request: Request, response: Response) {
    const { name } = request.query;

    const getAllUsersOrWithNameUseCase = new GetAllUsersOrWithNameUseCase();

    const result = await getAllUsersOrWithNameUseCase.execute({ name });

    return response.json(result);
  }
}
