import React from 'react';
import styles from './ConfirmationForm.module.scss';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import * as actions from '../../modules/modal/actions';

type Props = {
  message: string;
  confirmBtnTitle: string;
  onConfirmAction: (value: boolean) => void
}
const ConfirmationForm = ({ message, confirmBtnTitle, onConfirmAction }: Props) => {
  const onCancel= () => {
    onConfirmAction(false)
  };

  const onConfirm = () => {
    onConfirmAction(true)
  };

  return (
    <div className={styles.FormContainer}>
      <label className={styles.FormTitle}>Confirm action</label>
      <span>
        {message}
      </span>
      <div className={styles.ActionContainer}>
        <button className='Primary' onClick={onConfirm}>
          {confirmBtnTitle}
        </button>
        <button className='Default' onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>

  );
}

export { ConfirmationForm };
