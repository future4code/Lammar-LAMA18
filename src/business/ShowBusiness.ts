import { ShowDatabase } from "../data/ShowDatabase";
import { RegisterShowDTO, Show, shows } from "../model/Show"
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {

    public async registerShow(
        input: RegisterShowDTO
    ): Promise<void> {

        const showDatabase = new ShowDatabase();

        const show = await showDatabase.getShowByDayAndTime(input.weekDay, input.startTime, input.endTime);

        if (show) {
            throw new Error("Já existe um show cadastrado nesse horário");
        }

        const id = new IdGenerator().generate();

        const showInput = {
            id: id,
            weekDay: input.weekDay,
            startTime: input.startTime,
            endTime: input.endTime,
            bandId: input.bandId
        }

        await showDatabase.registerShow(showInput);

    }

    async getShows(input: string): Promise<shows> {

        const weekDay = input

        const showDatabase = new ShowDatabase();

        const shows = await showDatabase.getShows(weekDay);

        console.log(shows)

        return shows;

    }
   
}