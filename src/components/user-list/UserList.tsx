import React, { useState, useEffect } from 'react';


import styles from './UserList.module.scss'
import Table, { ITableColumnItem, ITableDataSourceItem } from '../table/Table';
import students from '../students';
import { IUser } from '../../services/models/User.interface';

type Props = {
  users: IUser[];
}

interface State {
  tableData: ITableDataSourceItem[]
}

const UserList = ({ users }: Props) => {
  const [state, setState] = useState<State>({ tableData: [] });

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        tableData: users.map((s: IUser) => {
          return {
            key: s.uuid,
            ...s
          } as ITableDataSourceItem
        })
      }
    });

  }, [users])

  const columns: ITableColumnItem[] = [
    {
      title: 'FirstName',
      key: 'firstname',
    },
    {
      title: 'SecondName',
      key: 'lastname',
    },
    {
      title: 'Birthday',
      key: 'birthdate',
    },
    {
      title: 'Email',
      key: 'email',
    },
    {
      title: 'Registration date',
      key: 'registrationDate',
    },
    {
      title: 'Gender',
      key: 'gender',
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
      {state.tableData.length > 0 ? <Table dataSource={state.tableData} columns={columns}></Table> : null}
    </div>
  );
}

export default UserList;
