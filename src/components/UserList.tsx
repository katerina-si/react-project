import React, { useState, useEffect } from 'react';
import students from './Students';

import styles from './UserList.module.scss'
import Table, { ITableColumnItem, ITableDataSourceItem } from './table/Table';
import { IStudent } from './Student.interface';

type Props = {
  users: IStudent[];
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
        tableData: students.map((s: any) => {
          return {
            key: s.id,
            firstName: s.firstName,
            secondName: s.secondName,
            bday: s.birthday,
            email: s.email
          } as ITableDataSourceItem
        })
      }
    });

  }, [])
  const columns: ITableColumnItem[] = [
    {
      title: 'FirstName',
      key: 'firstName',
    },
    {
      title: 'SecondName',
      key: 'secondName',
    },
    {
      title: 'Birthday',
      key: 'bday',
    },
    {
      title: 'Email',
      key: 'email',
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
