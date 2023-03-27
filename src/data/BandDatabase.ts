import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {

  private static TABLE_NAME = "BANDAS";

  public async createBand(
    band: Band
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
            id: band.id,
            name: band.name,
            music_genre: band.music_genre,
            responsible: band.responsible
        })
        .into(BandDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

    public async bandById(id: string): Promise<Band> {
        try {
                
                const result = await this.getConnection()
                .select("*")
                .from(BandDatabase.TABLE_NAME)
                .where({ id });

                return (result[0]);
    
            } catch (error: any) {
                throw new Error(error.sqlMessage || error.message);
            }
        }

}
