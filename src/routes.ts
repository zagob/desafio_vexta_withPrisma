import { Router } from "express";
import { EnsureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { verifySlugIsAdmin } from "./middlewares/verifySlugIsAdmin";
import { AuthenticateUserController } from "./modules/account/useCases/authenticateUsers/AuthenticateUserController";
import { CreateClientController } from "./modules/clients/useCases/createClients/CreateClientsController";
import { CreateTownshipController } from "./modules/townships/useCases/createTownship/CreateTownshipController";
import { CreateUserController } from "./modules/users/useCases/createUsers/CreateUserController";
import { GetAllUsersOrWithNameController } from "./modules/users/useCases/getAllUsersOrWithName/GetAllUsersOrWithNameController";

export const routes = Router();

const createUserController = new CreateUserController();

const authenticateUserController = new AuthenticateUserController();

const createTownshipController = new CreateTownshipController();

const createClientController = new CreateClientController();

const getAllUsersOrWithNameController = new GetAllUsersOrWithNameController();

// USER
routes.post("/user", createUserController.handle);

routes.post("/authenticate", authenticateUserController.handle);

// TOWNSHIP
routes.post(
  "/township",
  EnsureAuthenticateUser,
  verifySlugIsAdmin,
  createTownshipController.handle
);

routes.post(
  "/client/:id_township",
  EnsureAuthenticateUser,
  createClientController.handle
);

routes.get(
  "/user",
  EnsureAuthenticateUser,
  verifySlugIsAdmin,
  getAllUsersOrWithNameController.handle
);
