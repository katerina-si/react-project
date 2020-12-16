import React, { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { ConfirmationForm } from '../components';
import { useDispatch } from 'react-redux';
import * as modalActions from '../modules/modal/actions';
import * as actions from '../modules/students/actions';
import { IStudent } from '../services/models/Student.interface';
import { IUser } from '../services/models/User.interface';

type Props = {
  confirmProps: { message: string, confirmBtnTitle: string };
  controller: 'Student' | 'User',
  removedItem: IUser | IStudent
}
const DeleteContainer = ({ confirmProps, controller, removedItem }: Props) => {
  const dispatch = useDispatch();

  const onConfirmAction = (isConfirmed: boolean) => {
    dispatch(actions.studentDeleteRequest(removedItem.uuid))
    dispatch(modalActions.modalClosing());
  };

  return (
    <ConfirmationForm {...confirmProps} onConfirmAction={onConfirmAction}></ConfirmationForm>
  );
}

export { DeleteContainer };