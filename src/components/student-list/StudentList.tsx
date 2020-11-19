import React, { useEffect, useState } from 'react';
import styles from './StudentList.module.scss';
import { ITableColumnItem, ITableDataSourceItem } from '../table/Table';
import { Table } from '../';
import { IStudent } from '../../services/models/Student.interface';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../modules/modal/actions';
import * as selectors from '../../modules/modal/selectors';
import { MODAL_COMPONENTS_TYPES } from '../modal/Modal';
import { Confirmations } from '../confirmation-form/Confirmations';

type Props = {
  students: IStudent[];
  onDeleteStudent: any
}

const StudentList = ({ students, onDeleteStudent }: Props) => {
  const dispatch = useDispatch();
  const [selectedStudent, setSelectedStudent] = useState<IStudent | null>(null);
  const deleteStudent = useSelector(selectors.actionIsConfirmed);

  useEffect(() => {
    if(deleteStudent){
      onDeleteStudent(selectedStudent)
    } 
    setSelectedStudent(null);   
    dispatch(actions.modalClosing());
  },[deleteStudent])

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

  const onOpenStudentDetails = (item: IStudent) => {
    dispatch(actions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.NEW_STUDENT_CREATING,
      modalProps: { student: item }
    }));
  }

  const onOpenConfirmModal = (item: IStudent) => {
    setSelectedStudent(item)
    dispatch(actions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.CONFIRM_ACTION,
      modalProps: Confirmations.studentDeleting
    }));
  }

  return (
    <div className="fontSize-smaller">
      <span className={styles.main}>UserList</span>
      {tableData.length > 0 ? <Table dataSource={tableData} columns={columns}></Table> : null}
    </div>
  );
}

export { StudentList };
