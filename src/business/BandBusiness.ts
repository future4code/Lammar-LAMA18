import { BandDatabase } from "../data/BandDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { BandInputDTO } from "../model/Band";

export class BandBusiness {

    async createBand(input: BandInputDTO) {

        const id = new IdGenerator().generate();

        const band = {
            id: id,
            name: input.name,
            music_genre: input.music_genre,
            responsible: input.responsible
        }

        const authenticator = new Authenticator().getData(input.token);

        if(authenticator.role !== "ADMIN"){
            throw new Error("Somente administradores podem criar bandas");
        }

        const bandDatabase = new BandDatabase();

        await bandDatabase.createBand(band);
        
    }

    async bandById(id: string) {
        try {
                
                const bandDatabase = new BandDatabase();
    
                const band = await bandDatabase.bandById(id);
    
                return band;
    
            } catch (error: any) {
                throw new Error(error.sqlMessage || error.message);
            }
        }

}