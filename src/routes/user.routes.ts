import { CreateUserController } from "@modules/accounts/useCases/CreateUser/CreateUserController";
import { Router } from "express";

const userRoutes = Router();
const createUserController = new CreateUserController();
userRoutes.post("/", createUserController.handle);

export { userRoutes };
