import { Request, Response } from "express";
import { RegisterShowDTO} from "../model/Show";
import { ShowDatabase } from "../data/ShowDatabase";

export class ShowController {
    
    async registerShow(req: Request, res: Response) {
        try {

            const input : RegisterShowDTO = {
                weekDay: req.body.weekDay,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                bandId: req.body.bandId,
                token: req.headers.authorization as string
            }

            const showDatabase = new ShowDatabase();

            await showDatabase.registerShow(input);

            res.status(200).send({ message: "Show criado com sucesso" });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }
}