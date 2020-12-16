import React from 'react';
import styles from './Datepicker.module.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDateFromString, getCurrentDate } from '../../utils/date';

type Props = {
  selected: string | Date;
  onChange: (date: Date) => void
}

const Datepicker = ({ selected, onChange }: Props) => {
  const date = selected ? getDateFromString(selected) : getCurrentDate();
  return (
    <DatePicker selected={date} onChange={onChange} />
  );
}

export {Datepicker};
