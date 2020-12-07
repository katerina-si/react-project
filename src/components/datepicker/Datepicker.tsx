import React from 'react';
import styles from './Datepicker.module.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Datetime } from '../../utils/date';

type Props = {
  selected?: Date;
  onChange: (date: Date) => void
}

const Datepicker = ({ selected, onChange }: Props) => {
  selected = selected ? Datetime.getDate(selected) : Datetime.getCurrentDate();
  return (
    <DatePicker selected={selected} onChange={onChange} />
  );
}

export {Datepicker};
