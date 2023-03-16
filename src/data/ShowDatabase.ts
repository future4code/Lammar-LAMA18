import { RegisterShowDTO } from "../model/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
    registerShow(input: RegisterShowDTO) {
        throw new Error("Method not implemented.");
    }
}