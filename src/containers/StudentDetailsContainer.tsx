import React, { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { StudentDetailsForm } from '../components';
import { IStudent } from '../services/models/Student.interface';
import { useDispatch } from 'react-redux';
import * as modalActions from '../modules/modal/actions';
import * as actions from '../modules/students/actions';

type Props = {
    student?: IStudent;
}
const StudentDetailsContainer = ({ student }: Props) => {
    const dispatch = useDispatch();

    const onSave = (model: IStudent) => {
        if(!model.uuid) dispatch(actions.studentCreateRequest(model));
        else dispatch(actions.studentUpdateRequest(model));
        dispatch(modalActions.modalClosing());
    };

    return (
        <StudentDetailsForm student={student} onSendModel={onSave}></StudentDetailsForm>
    );
}

export { StudentDetailsContainer };
