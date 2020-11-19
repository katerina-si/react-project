import React from 'react';
import styles from './ConfirmationForm.module.scss';
import { Button } from 'antd';
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import * as actions from '../../modules/modal/actions';

type Props = {
  message: string;
  confirmBtnTitle: string;
  actionIsConfirmed: any
}
const ConfirmationForm = ({ message, confirmBtnTitle, actionIsConfirmed }: Props) => {
  const dispatch = useDispatch();

  const onConfirmAction = () => {
    dispatch(actions.modalClosing({ actionIsConfirmed: true }));
  };

  const onCancelAction = () => {
    dispatch(actions.modalClosing({ actionIsConfirmed: false }));
  };


  return (
    <div  className={styles.FormContainer}>
      <h2 className={styles.FormTitle}>Confirm action</h2>
      <span>
        {message}
      </span>
      <div className={styles.ActionContainer}>
      <Button type="primary" shape="round" onClick={onConfirmAction}>
        {confirmBtnTitle}
      </Button>
      <Button shape="round" onClick={onCancelAction}>
        Cancel
        </Button></div></div>

  );
}

export { ConfirmationForm };
