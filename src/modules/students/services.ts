import request from "../../services/api/request";
import { IStudent } from "../../services/models/Student.interface";
export interface IStudentParams {
    page: number,
    limit: number
}

const ApiService = {
    fetchStudentsRequest(params: IStudentParams) {
        return request.get('student', {params: params});
    },
    
    postStudentRequest(student: IStudent) {
        return request.post('student', student);
    },
        
    putStudentRequest(student: IStudent) {
        return request.put(`student/${student.uuid}`, student);
    },
        
    deleteStudentRequest(studentId: string) {
        return request.delete(`student/${studentId}`);
    }
}
export default ApiService