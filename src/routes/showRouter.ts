import express from "express";
import { ShowController } from "../controller/ShowController";


export const showRouter = express.Router();

const bandController = new ShowController();

showRouter.post("/register", bandController.registerShow);