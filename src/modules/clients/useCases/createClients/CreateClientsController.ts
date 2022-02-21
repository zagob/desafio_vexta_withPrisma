import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientsUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const {
      cnpj_cpf,
      natureza,
      name,
      name_fantasy,
      address,
      number,
      neighborhood,
      complement,
      phone,
      email,
      web,
    } = request.body;
    const { id_township } = request.params;

    const createClientUseCase = new CreateClientUseCase();

    const result = await createClientUseCase.execute({
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
    });

    return response.json(result);
  }
}
