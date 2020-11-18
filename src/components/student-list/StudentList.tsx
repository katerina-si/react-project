import React from 'react';
import styles from './StudentList.module.scss';
import { ITableColumnItem, ITableDataSourceItem } from '../table/Table';
import { Table } from '../';
import { IStudent } from '../../services/models/Student.interface';

type Props = {
  students: IStudent[];
}

const StudentList = ({ students }: Props) => {
  const tableData: ITableDataSourceItem[] = students.map((s: IStudent) => {
    return {
      key: s.uuid,
      ...s
    }
  });

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
      {tableData.length > 0 ? <Table dataSource={tableData} columns={columns}></Table> : null}
    </div>
  );
}

export { StudentList };
