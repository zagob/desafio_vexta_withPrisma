import { Request, Response } from "express";
import { CreateTownshipUseCase } from "./CreateTownshipUseCase";

export class CreateTownshipController {
  async handle(request: Request, response: Response) {
    const { name, uf } = request.body;

    const createTownshipUseCase = new CreateTownshipUseCase();

    const result = await createTownshipUseCase.execute({
      name,
      uf,
    });

    return response.json(result);
  }
}
