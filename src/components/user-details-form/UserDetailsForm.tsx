import React, { useState, useEffect } from 'react';
import styles from './UserDetailsForm.module.scss';
import { Button, Form, Input, Select } from 'antd';
import { IUser } from '../../services/models/User.interface';

const { Option } = Select;
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

type Props = {
  user?: IUser;
  onSendModel: any
}
const UserDetailsForm = ({ user, onSendModel }: Props) => {
  const [form] = Form.useForm();
  const [isNewUser, setIsNewUser] = useState(true);
  const [role, setRole] = useState();
  const roleList = ['user', 'master', 'admin'];

  useEffect(() => {
    if (user) {
      setIsNewUser(false);
      form.setFieldsValue({ ...user });
    }
  }, [user]);

  const onSend = (values: any) => {
    onSendModel(values)
  };
  const onRoleChange = (value: any) => {
    form.setFieldsValue({ role: value });
    setRole(value)
  };

  return (
    <div>
      <h2 className={styles.FormTitle}>User details</h2>
      <Form
        {...layout}
        form={form}
        className={styles.FormContainer}
        name="basic"
        onFinish={onSend}>
        <Form.Item
          className={styles.InputContainer}
          label="First name"
          name="firstName"
          rules={[{ required: true, message: 'Please input first name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Second name"
          name="lastName"
          rules={[{ required: true, message: 'Please input second name!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input email!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: 'Please input role!' }]}>
          <Select
            onChange={onRoleChange}
            value={role}
            allowClear>   {
              roleList.map(g => <Option key={g} value={g}>{g}</Option>)
            }
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary"  shape="round" htmlType="submit">
            {isNewUser ? 'Add' : 'Save'}
          </Button>
        </Form.Item>
      </Form>

    </div>

  );
}

export { UserDetailsForm };
