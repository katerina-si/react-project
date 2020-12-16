import React, { useState, useEffect } from 'react';
import styles from './StudentDetailsForm.module.scss';
import { IStudent } from '../../services/models/Student.interface';
import { Form, Field } from 'react-final-form'
import { Datepicker } from '..';
import { getCurrentDate } from '../../utils/date';

const required = (value: any) => (value ? undefined : 'Required');

type Props = {
  student?: IStudent;
  onSendModel: (form: IStudent) => void
}

const StudentDetailsForm = ({ student, onSendModel }: Props) => {
  const genderList = ['male', 'female'];
  const newStudent = {
    birthdate: getCurrentDate(),
    registrationDate: getCurrentDate(),
    ip: "0.0.0.0",
  }
  
  const onSend = (form: IStudent) => {
    onSendModel(form)
  };

  return (
    <div
    className={styles.FormContainer}>
      <label className={styles.FormTitle}>Student details</label>
      <Form
        onSubmit={onSend}
        initialValues={student || newStudent}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={(e) => handleSubmit(e)}>
            <Field name="firstname" validate={required}>
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

            <Field name="lastname" validate={required}>
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

            <Field name="birthdate">
              {({ input, meta }) => (
                <div>
                  <label>Birthdate</label>
                  <div className={styles.FieldContainer}>
                    <Datepicker selected={input.value} onChange={input.onChange} />
                  </div>
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
              <label>Gender</label>
              <div className={styles.FieldContainer}>
                <Field name="gender" component="select" >
                  <option />
                  {genderList.map(g => <option key={g} value={g}>{g}</option>)}
                </Field>
              </div>
            </div>

            <div className={styles.FormActions}>
              <button className='Primary'  type="submit" disabled={submitting}>
                {student?.uuid ? 'Save' : 'Add'}
              </button>
            </div>
          </form>
        )}
      />

    </div>

  );
}

export { StudentDetailsForm };
