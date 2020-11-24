import React from 'react';
import styles from './ConfirmationForm.module.scss';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import * as actions from '../../modules/modal/actions';

type Props = {
  message: string;
  confirmBtnTitle: string;
}
const ConfirmationForm = ({ message, confirmBtnTitle }: Props) => {
  const dispatch = useDispatch();

  const onConfirmAction = () => {
    dispatch(actions.modalClosing({ actionIsConfirmed: true }));
  };

  const onCancelAction = () => {
    dispatch(actions.modalClosing({ actionIsConfirmed: false }));
  };


  return (
    <div  className={styles.FormContainer}>
      <label className={styles.FormTitle}>Confirm action</label>
      <span>
        {message}
      </span>
      <div className={styles.ActionContainer}>
      <button className='Primary' onClick={onConfirmAction}>
        {confirmBtnTitle}
      </button>
      <button  className='Default' onClick={onCancelAction}>
        Cancel
        </button></div></div>

  );
}

export { ConfirmationForm };
