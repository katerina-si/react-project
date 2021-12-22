import { IUser } from "../../services/models/User.interface"
import { formatedDate, getDateFromString, dateInISO } from "../../utils/date";


export function mapProfileFromServer(response: {data: IUser}) {
    return {
        profile: response.data,
    } 
}

export function mapNewUserToServer(user: any) {
    return {
        ...user,         
        updatedAt: dateInISO(),
        createdAt: dateInISO(),
    } 
}