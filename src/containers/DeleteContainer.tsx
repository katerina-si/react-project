import React, { useState, useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { ConfirmationForm } from '../components';
import { useDispatch } from 'react-redux';
import * as actions from '../modules/modal/actions';

type Props = {
  confirmProps: { message: string, confirmBtnTitle: string };
  controller: 'Student' | 'User',
  removedItem: any
}
const DeleteContainer = ({ confirmProps, controller, removedItem }: Props) => {
  const dispatch = useDispatch();

  const onConfirmAction = (isConfirmed: boolean) => {
    console.log(isConfirmed);
    console.log(controller);
    console.log(removedItem);
    dispatch(actions.modalClosing());
  };

  return (
    <ConfirmationForm {...confirmProps} onConfirmAction={onConfirmAction}></ConfirmationForm>
  );
}

export { DeleteContainer };