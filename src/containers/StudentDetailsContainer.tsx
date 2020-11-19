import React, { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { StudentDetailsForm } from '../components';
import { IStudent } from '../services/models/Student.interface';
import { useDispatch } from 'react-redux';
import * as actions from '../modules/modal/actions';

type Props = {
    student?: IStudent;
}
const StudentDetailsContainer = ({ student }: Props) => {
    const dispatch = useDispatch();

    const onSave = (model: IStudent) => {
        console.log(model);
        dispatch(actions.modalClosing());
    };

    return (
        <StudentDetailsForm student={student} onSendModel={onSave}></StudentDetailsForm>
    );
}

export { StudentDetailsContainer };
