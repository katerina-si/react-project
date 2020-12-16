import { IStudent } from "../../services/models/Student.interface"
import { formatedDate, getDateFromString } from "../../utils/date";

export function mapStudentFromServer(student: IStudent) {
    return {
        ...student,
    } 
}

export function mapStudentsFromServer(response: {data: IStudent[], count: number}) {
    let list = response.data.reduce((newList: any, item: IStudent) => {
        return {
            ...newList,
            [item.uuid]: mapStudentFromServer(item)
        }
    },{});

    return {
        ...response,
        data: list,
    } 
}

export function mapStudentToServer(student: any) {
    delete student.key;
    return {
        ...student,         
        birthdate: formatedDate(getDateFromString(student.birthdate)),
        registrationDate:  formatedDate(getDateFromString(student.registrationDate)),
    } 
}