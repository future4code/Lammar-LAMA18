import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO} from "../model/User";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandInputDTO } from "../model/Band";

export class BandController {
    async createBand(req: Request, res: Response) {
        try {

            const input: BandInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible,
                token: req.headers.authorization as string
            }

            const bandBusiness = new BandBusiness();

            await bandBusiness.createBand(input);

            res.status(200).send({ message: "Banda criada com sucesso" });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async bandById(req: Request, res: Response) {
        try {

            const id = req.params.id;

            const bandBusiness = new BandBusiness();

            const band = await bandBusiness.bandById(id);

            res.status(200).send({ band });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }   
}
