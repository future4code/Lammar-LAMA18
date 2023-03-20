export enum DAY_TYPES {
    SEXTA = 'SEXTA',
    SABADO = 'SABADO',
    DOMINGO = 'DOMINGO'
}

export type Show = {
    id: string
    weekDay: DAY_TYPES
    startTime: number
    endTime: number
    bandId: string
}

const seila: Show = {
    id: 'id',
    weekDay: DAY_TYPES.SEXTA,
    startTime: 8,
    endTime: 10,
    bandId: 'id'
}

export class ShowParams {
    constructor(
    private id: string,
    private weekDay: DAY_TYPES,
    private startTime: number,
    private endTime: number,
    private bandId: string
    ){}

    getId(){
        return this.id;
    }

    getWeekDay(){
        return this.weekDay;
    }

    getStartTime(){
        return this.startTime;
    }

    getEndTime(){
        return this.endTime;
    }

    getBandId(){
        return this.bandId;
    }

    setId(id: string){
        this.id = id;
    }

    setWeekDay(weekDay: DAY_TYPES){
        this.weekDay = weekDay;
    }

    setStartTime(startTime: number){
        this.startTime = startTime;
    }

    setEndTime(endTime: number){
        this.endTime = endTime;
    }

    setBandId(bandId: string){
        this.bandId = bandId;
    }
}   

export interface RegisterShowDTO {
    weekDay: DAY_TYPES
    startTime: number
    endTime: number
    bandId: string
    token: string
}

export interface GetShowsDTO {
    weekDay: DAY_TYPES
}

export type shows = {
    nameBand: string
    genre: string
}