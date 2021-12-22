import React, { useState, useEffect } from 'react';
import styles from './LoginForm.module.scss';
import { Input } from '../input/Input';
import { useHistory } from 'react-router-dom';
export interface ILoginForm {
  email: string,
  password: string
}
type Props = {
  onSendForm: (e: any, form: ILoginForm) => void
}
const LoginForm = ({ onSendForm }: Props) => {
  let history = useHistory();
  const [form, setForm] = useState<ILoginForm>({
    email: '',
    password: ''
  });

  const onSignup = () => {
    history.push('/signup');
  }

  return (
    <div>
      <form className={styles.FormContainer} onSubmit={(e) => onSendForm(e, form)}>
        <label className={styles.FormTitle}>Login</label>
        <div className={styles.FormInputContainer}>
          <label>Email</label>
          <Input type="text" name="email" value={form?.email}
            onChangeValue={(value: string) => setForm({ ...form, email: value })} /><br />
        </div>
        <div className={styles.FormInputContainer}>
          <label>Password</label>
          <Input type="password" name="password" value={form?.password}
            onChangeValue={(value: string) => setForm({ ...form, password: value })} /><br />
        </div>

        <div className={styles.FormActions}>
          <button className='Primary' type="submit">
            Login
         </button>

          <button type="button" onClick={(e) => onSignup()}>
            Sign up
      </button>
        </div>
      </form>

    </div>

  );
}

export { LoginForm };
