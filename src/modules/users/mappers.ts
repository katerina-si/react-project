import { IUser } from "../../services/models/User.interface"

export function mapUserFromServer(user: IUser) {
    return {
        ...user
    } 
}

export function mapUsersFromServer(response: any) {
    return {
        data: response.data.map(mapUserFromServer),
        ...response
    } 
}