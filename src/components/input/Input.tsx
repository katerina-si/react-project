import React from 'react';

type Props = {
  type: string,
  name: string,
  value: string,
  onChangeValue: (val: string) => void
}
const Input = ({ type, name, value, onChangeValue }: Props) => {
  return (
    <input type={type} name={name} value={value} required
      onChange={(value: any) => onChangeValue(value.target.value)} />
  );
}

export { Input };
