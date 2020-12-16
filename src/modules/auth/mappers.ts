import { IStudent } from "../../services/models/Student.interface"
import { IUser } from "../../services/models/User.interface"

export function mapStudentFromServer(user: IUser) {
    return {
        ...user,
    } 
}

export function mapProfileFromServer(response: {profile: any}) {
    return {
        ...response,
        profile: response.profile,
    } 
}
