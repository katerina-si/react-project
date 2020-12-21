import React, { useState, useEffect } from 'react';
import styles from './SignUpForm.module.scss';
import { IUser } from '../../services/models/User.interface';
import Select from 'react-select';
import { Input } from '../input/Input';

const roles = [
  { value: 'user', label: 'User', },
  { value: 'master', label: 'Master', },
  { value: 'admin', label: 'Admin', },
];
type Props = {
  onSendForm: (e: any,form: IUser) => void
}
const SignUpForm = ({ onSendForm }: Props) => {
  const [form, setForm] = useState<IUser>({
    firstName: '',
    lastName: '',
    password: '',
    role: '',
    createdAt: '',
    updatedAt: '',
    uuid: '',
    email: '',
  });

  return (
    <form className={styles.FormContainer} onSubmit={(e) => onSendForm(e,form)}>
      <label className={styles.FormTitle}>Sign up</label>
      <div className={styles.FormInputContainer}>
        <label>First Name</label>
        <Input type="firstName" name="firstName" value={form?.firstName}
          onChangeValue={(value: string) => setForm({ ...form, firstName: value })} /> <br />
      </div>
      <div className={styles.FormInputContainer}>
        <label>Last Name</label>
        <Input type="lastName" name="lastName" value={form?.lastName}
          onChangeValue={(value: string) => setForm({ ...form, lastName: value })} /><br />
      </div>
      <div className={styles.FormInputContainer}>
        <label>Password</label>
        <Input type="password" name="password" value={form?.password}
          onChangeValue={(value: string) => setForm({ ...form, password: value })} /> <br />
      </div>
      <div className={styles.FormInputContainer}>
        <label>Role</label>
        <Select className={styles.Selector}
          name="role"
          label="role"
          placeholder=""
          onChange={(e: any) => setForm({ ...form, role: e.value })}
          options={roles}
        />
      </div>
      <div className={styles.FormInputContainer}>
        <label>Email</label>
        <Input type="email" name="email" value={form?.email}
          onChangeValue={(value: string) => setForm({ ...form, email: value })} /><br />
      </div>

      <div className={styles.FormActions}>
        <button className='Primary' type="submit" >
          sign up
         </button>
      </div>
    </form>
  );
}

export { SignUpForm };
