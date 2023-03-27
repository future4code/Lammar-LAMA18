import { DAY_TYPES, Show } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {

    private static TABLE_NAME = "SHOWS";
    
    public async registerShow(show: Show): Promise<void>{
        try {
            await this.getConnection()
            .insert({
                id: show.id,
                week_day: show.weekDay,
                start_time: show.startTime,
                end_time: show.endTime,
                band_id: show.bandId
            })
            .into(ShowDatabase.TABLE_NAME);
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getShowByDayAndTime(weekDay: DAY_TYPES, startTime: number, endTime: number) {
        const show = await this.getConnection()
        .select("*")
        .from(ShowDatabase.TABLE_NAME)
        .where({ week_day: weekDay })
        .andWhere({ start_time: startTime })
        .andWhere({ end_time: endTime });

        return show[0];

    }

    async getShows(weekDay: string): Promise<any> {
        const shows = await this.getConnection()
        .select('BANDAS.name', 'BANDAS.music_genre')
        .from('BANDAS')
        .join('SHOWS', 'BANDAS.id', 'SHOWS.band_id')
        .where({ week_day: weekDay })
        .orderBy('start_time', 'asc');

        return shows;

    }
}