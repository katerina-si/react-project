import React, { useState, useEffect } from 'react';
import styles from './StudentDetailsForm.module.scss';
import { IStudent } from '../../services/models/Student.interface';
import { Button, Form, Input, Select } from 'antd';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { compareAsc, format } from 'date-fns'

const { Option } = Select;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

format(new Date(2014, 1, 11), 'yyyy-MM-dd')

type Props = {
  student?: IStudent;
  onSendModel: (form: IStudent) => void
}
const StudentDetailsForm = ({ student, onSendModel }: Props) => {
  const [form] = Form.useForm<IStudent>();
  const [gender, setGender] = useState('male');
  const [startDate, setStartDate] = useState(new Date());
  const [isNewStudent, setIsNewStudent] = useState(true);
  const genderList = ['male', 'female'];

  useEffect(() => {
    if (student) {
      setIsNewStudent(false);
      setStartDate(new Date(student.birthdate))
      setGender(student.gender)
      form.setFieldsValue({ ...student });
    } 
  }, [student]);

  const onSend = (form: IStudent) => {    
    onSendModel(form)
  };
  const onGenderChange = (value: any) => {
    form.setFieldsValue({ gender: value });
    setGender(value)
  };

  return (
    <div>
      <h2 className={styles.FormTitle}>Student details</h2>
      <Form
        {...layout}
        form={form}
        className={styles.FormContainer}
        name="basic"
        onFinish={onSend}>
        <Form.Item
          className={styles.InputContainer}
          label="First name"
          name="firstname"
          rules={[{ required: true, message: 'Please input first name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Second name"
          name="lastname"
          rules={[{ required: true, message: 'Please input second name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Birthday"
          name="birthdate"
          rules={[{ required: true }]}>
          <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} /></Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input email!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: 'Please input gender!' }]}>
          <Select
            onChange={onGenderChange}
            value={gender}
            allowClear>   {
              genderList.map(g => <Option key={g} value={g}>{g}</Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary"  shape="round" htmlType="submit">
            {isNewStudent ? 'Add' : 'Save'}
          </Button>
        </Form.Item>
      </Form>
    </div>

  );
}

export { StudentDetailsForm };
