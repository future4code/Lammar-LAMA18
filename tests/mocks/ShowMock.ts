import { ShowParams } from "../../src/model/Show";

const input = {
    bandId: 'id',
    weekDay: 'sabado',
    startTime: 8,
    endTime: 10
}

export const showMock = new ShowParams(
    'id',
    'SABADO',
    8,
    10,
    'id'
)