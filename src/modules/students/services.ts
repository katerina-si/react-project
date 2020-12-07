import request from "../../services/api/request";
export interface IStudentParams {
    page: number,
    limit: number
}
export const fetchStudentsRequest = (params: IStudentParams) => {
    return request.get('student', {params: params});
}