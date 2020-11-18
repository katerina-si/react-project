import React from 'react';
import styles from './ConfirmationForm.module.scss';
import { Button } from 'antd';
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  message: string;
  confirmBtnTitle: string;
}
const ConfirmationForm = ({ message, confirmBtnTitle }: Props) => {
  return (
    <div>
      <span>
        {message}
      </span>
      <Button type="primary" htmlType="submit">
        {confirmBtnTitle}
      </Button>
      <Button type="primary" htmlType="submit">
        Cancel
        </Button></div>

  );
}

export { ConfirmationForm };
