import React, { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { StudentDetailsForm } from '../components';
import { IStudent } from '../services/models/Student.interface';

type Props = {
  student: IStudent;
}
const StudentDetailsContainer = ({ student }: Props) => {
  const onSave = (model: any) => {
    console.log(model);
  };

  return (
    <StudentDetailsForm student={student} onSendModel={onSave}></StudentDetailsForm>
  );
}

export { StudentDetailsContainer };
