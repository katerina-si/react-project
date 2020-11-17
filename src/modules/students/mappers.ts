import { IStudent } from "../../services/models/Student.interface"

export function mapStudentFromServer(student: IStudent) {
    return {
        ...student
    } 
}

export function mapStudentsFromServer(response: {data: IStudent[], meta: any}) {
    return {
        data: response.data.map(mapStudentFromServer),
        ...response.meta
    } 
}