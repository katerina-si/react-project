import { IStudent } from "../../services/models/Student.interface"

export function mapStudentFromServer(student: IStudent) {
    return {
        ...student
    } 
}

export function mapStudentsFromServer(response: {data: IStudent[], [key: string]: any}) {
    return {
        ...response,
        data: response.data.map(mapStudentFromServer),
    } 
}