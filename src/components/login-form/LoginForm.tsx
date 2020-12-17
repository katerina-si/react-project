import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.scss';
import { Input } from '../input/Input';
export interface ILoginForm {
  email: string,
  password: string
}
type Props = {
  onSendForm: any
}
const LoginForm = ({ onSendForm }: Props) => {
  const [form, setForm] = useState<ILoginForm>({
    email: '',
    password: ''
  });

  return (
    <form className={styles.FormContainer} onSubmit={(e) => onSendForm(e,form)}>
      <label className={styles.FormTitle}>Login</label>
      <div className={styles.FormInputContainer}>
        <label>Email</label>
        <Input type="text" name="email" value={form?.email}
          onChangeValue={(value: any) => setForm({ ...form, email: value })} /><br />
      </div>
      <div className={styles.FormInputContainer}>
        <label>Password</label>
        <Input type="password" name="password" value={form?.password}
          onChangeValue={(value: any) => setForm({ ...form, password: value })} /><br />
      </div>

      <div className={styles.FormActions}>
        <button className='Primary' type="submit">
          Login
         </button>
      </div>
    </form>
  );
}

export { LoginForm };
