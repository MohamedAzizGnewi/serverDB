import { server } from "./server";

export interface CustomResponse {
    timeStamp : Date;
    statusCode: number;
    status: string;
    reason:string;
    message:string;
    developerMessage:string;
    data:{servers?: server[],server?: server};
}