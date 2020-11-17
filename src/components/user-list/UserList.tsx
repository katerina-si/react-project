import React from 'react';


import styles from './UserList.module.scss'
import Table, { ITableColumnItem, ITableDataSourceItem } from '../table/Table';
import { IUser } from '../../services/models/User.interface';

type Props = {
  users: IUser[];
}

const UserList = ({ users }: Props) => {
  const tableData: ITableDataSourceItem[] = users.map((s: IUser) => {
    return {
      key: s.uuid,
      ...s
    }
  });

  const columns: ITableColumnItem[] = [
    {
      title: 'FirstName',
      key: 'firstName',
    },
    {
      title: 'SecondName',
      key: 'lastName',
    },
    {
      title: 'Role',
      key: 'role',
    },
    {
      title: 'Email',
      key: 'email',
    },
    {
      title: 'Created date',
      key: 'createdAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => <button>edit</button>,
    },
  ];

  return (
    <div className="fontSize-smaller">
      <span className={styles.main}>UserList</span>
      {tableData.length > 0 ? <Table dataSource={tableData} columns={columns}></Table> : null}
    </div>
  );
}

export default UserList;
