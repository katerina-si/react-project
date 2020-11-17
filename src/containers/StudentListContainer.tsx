import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../modules/students/actions';
import * as selectors from '../modules/students/selectors';
import StudentList from '../components/student-list/StudentList';

const StudentListContainer = () => {
  const dispatch = useDispatch();

  const students = useSelector(selectors.studentList);
  const error = useSelector(selectors.studentListError);

  const getAllStudents = useCallback(() => {
    dispatch(actions.allStudentsRequest());
  }, [dispatch]);

  useEffect(() => {
    getAllStudents();
  }, [getAllStudents]);

  return (
    <div className="fontSize-smaller">
      StudentsListContainer
      {!error ? <StudentList students={students} /> : error}
    </div>

  );
}

export default StudentListContainer;
