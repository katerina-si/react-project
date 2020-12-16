import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.scss';
import { Input } from '../input/Input';
export interface ILoginForm {
  login: string,
  password: string
}
type Props = {
  onSendForm: any
}
const LoginForm = ({ onSendForm }: Props) => {
  const [form, setForm] = useState<ILoginForm>({
    login: '',
    password: ''
  });

  return (
    <form className={styles.FormContainer} onSubmit={() => onSendForm(form)}>
      <label className={styles.FormTitle}>Login</label>
      <div className={styles.FormInputContainer}>
        <label>Login</label>
        <Input type="text" name="login" value={form?.login}
          onChangeValue={(value: any) => setForm({ ...form, login: value })} /><br />
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
