import { Request, Response } from "express";
import { RegisterShowDTO} from "../model/Show";
import { ShowBusiness } from "../business/ShowBusiness";

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

            const showBusiness = new ShowBusiness();

            await showBusiness.registerShow(input);

            res.status(200).send({ message: "Show criado com sucesso" });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

    }

    async getShows(req: Request, res: Response) {
        try {

            const weekDay = req.query.weekDay as string;

            const showBusiness = new ShowBusiness();

            const shows = await showBusiness.getShows(weekDay);

            res.status(200).send({ shows });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}