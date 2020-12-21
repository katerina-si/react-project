import React, { useState } from 'react';
import { emailPattern, passwordPattern } from './PatternConfig';
import styles from './Input.module.scss';

type Props = {
  type: string,
  name: string,
  value: string,
  onChangeValue: (val: string) => void
}
const Input = ({ type, name, value, onChangeValue }: Props) => {
  const [error, setError] = useState<null | string>(null)
  const validateField = (_value: string) => {
    let valid = true;
    switch (name) {
      case 'email':
        valid = _value.match(emailPattern) ? true : false;
        valid ? setError(null) : setError('Incorrect email');
        break;
      case 'password':
        valid = _value.match(passwordPattern) ? true : false;
        valid ? setError(null) : setError('Incorrect password');
        break;
      default:
        break;
    }
  }

  const onChange = (value: string) => {
    validateField(value);
    onChangeValue(value);
  }

  return (
    <>
      <input type={type} name={name} value={value} required
        onChange={(value: any) => onChange(value.target.value)} />
      <span className={styles.Error}>{error}</span>
    </>
  );
}

export { Input };
