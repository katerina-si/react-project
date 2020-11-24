import React, { useState, useEffect } from 'react';
import styles from './UserDetailsForm.module.scss';
import { IUser } from '../../services/models/User.interface';
import { Form, Field } from 'react-final-form'

const required = (value: any) => (value ? undefined : 'Required');

type Props = {
  user?: IUser;
  onSendModel: (form: IUser) => void
}
const UserDetailsForm = ({ user, onSendModel }: Props) => {
  const [isNewUser, setIsNewUser] = useState(true);
  const roleList = ['user', 'master', 'admin'];
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    role: "",
    lastName: ""
  });


  useEffect(() => {
    if (user) {
      setForm({ ...user });
      setIsNewUser(false)
    }
  }, [user]);

  const onSend = (form: IUser) => {
    onSendModel(form)
  };

  return (

    <div
      className={styles.FormContainer}>
      <label className={styles.FormTitle}>Student details</label>
      <Form
        onSubmit={onSend}
        initialValues={form}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={(e) => handleSubmit(e)}>
            <Field name="firstName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>First Name</label>
                  <div className={styles.FieldContainer}>
                    <input {...input} type="text" placeholder="First Name" />
                    {meta.error && meta.touched && <span
                      className={styles.Error}>{meta.error}</span>}</div>
                </div>
              )}
            </Field>

            <Field name="lastName" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Last </label>
                  <div className={styles.FieldContainer}>
                    <input {...input} type="text" placeholder="Last Name" />
                    {meta.error && meta.touched && <span
                      className={styles.Error}>{meta.error}</span>}</div>
                </div>
              )}
            </Field>


            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div>
                  <label>Email</label>
                  <div className={styles.FieldContainer}>
                    <input {...input} type="text" placeholder="Email" />
                    {meta.error && meta.touched && <span
                      className={styles.Error}>{meta.error}</span>}</div>
                </div>
              )}
            </Field>

            <div>
              <label>Role</label>
              <div className={styles.FieldContainer}>
                <Field name="role" component="select" >
                  <option />
                  {roleList.map(g => <option key={g} value={g}>{g}</option>)}
                </Field>
              </div>
            </div>

            <div className={styles.FormActions}>
              <button className='Primary' type="submit" disabled={submitting}>
                {isNewUser ? 'Add' : 'Save'}
              </button>
            </div>
          </form>
        )}
      />

    </div>


  );
}

export { UserDetailsForm };
