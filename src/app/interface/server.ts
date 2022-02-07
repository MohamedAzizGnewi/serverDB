import { Status } from "../enum/status.enum";

export interface server {
    id : number;
    ipAddress: string;
    name: string;
    memory: string;
    type: string;
    imageUrl: string;
    status: Status;

}