import React from 'react';
import styles from './StudentList.module.scss';
import { ITableColumnItem, ITableDataSourceItem } from '../table/Table';
import { TableWithPaginator } from '../';
import { IStudent } from '../../services/models/Student.interface';
import { Paginator } from '../table-with-paginator/PaginatorConfig';

type Props = {
  students: IStudent[];
  paginatorState: Paginator;
  onOpenStudentDetails: (value: any) => void
  onOpenConfirmModal: (value: any) => void
  onChangePage: (value: any) => void
  onChangeLimit: (value: any) => void
}

const StudentList = ({ students, onOpenStudentDetails, onOpenConfirmModal, onChangePage, onChangeLimit, paginatorState }: Props) => {
  const tableData: ITableDataSourceItem[] = students.map((student: IStudent) => {
    return {
      key: student.uuid,
      ...student
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
      title: '',
      key: 'action',
      render: (item) => { return <button onClick={() => onOpenStudentDetails(item)}>edit</button> },
    },
    {
      title: '',
      key: 'actionTwo',
      render: (item) => { return <button onClick={() => onOpenConfirmModal(item)}>delete</button> },
    },
  ];

  return (
    <div className="fontSize-smaller">
      <span className={styles.main}>StudentList</span>
      {tableData.length > 1 &&
        <TableWithPaginator
          dataSource={tableData}
          columns={columns}
          paginatorState={paginatorState}
          onChangePage={onChangePage}
          onChangeLimit={onChangeLimit}/>
      }
    </div>
  );
}

export { StudentList };
