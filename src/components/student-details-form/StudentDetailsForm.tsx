import React, { useState, useEffect } from 'react';
import styles from './StudentDetailsForm.module.scss';
import { IStudent } from '../../services/models/Student.interface';
import { Button, Form, Input, Select } from 'antd';
import DatePicker from "react-datepicker";
import { FormInstance } from 'antd/lib/form';
import "react-datepicker/dist/react-datepicker.css";

const { Option } = Select;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

type Props = {
  student: IStudent;
  onSendModel: any
}
const StudentDetailsForm = ({ student, onSendModel }: Props) => {
  const [form] = Form.useForm();
  const [gender, setGender] = useState('male');
  const [startDate, setStartDate] = useState(new Date());
  const genderList = ['male', 'female'];

  useEffect(() => {
    setStartDate(new Date(student.birthdate))
    setGender(student.gender)
    form.setFieldsValue({ ...student });
  }, []);

  const onSend = (values: any) => {
    onSendModel(values)
  };
  const onGenderChange = (value: any) => {
    form.setFieldsValue({ gender: value });
    setGender(value)
  };

  return (
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
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>

  );
}

export { StudentDetailsForm };
