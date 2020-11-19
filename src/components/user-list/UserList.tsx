import React, { useState, useEffect } from 'react';
import styles from './UserList.module.scss'
import { ITableColumnItem, ITableDataSourceItem } from '../table/Table';
import { Table } from '../';
import { IUser } from '../../services/models/User.interface';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../modules/modal/actions';
import * as selectors from '../../modules/modal/selectors';
import { MODAL_COMPONENTS_TYPES } from '../modal/Modal';
import { Confirmations } from '../confirmation-form/Confirmations';

type Props = {
  users: IUser[];
  onDeleteUser: any
}

const UserList = ({ users, onDeleteUser }: Props) => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const deleteUser = useSelector(selectors.actionIsConfirmed);
  
  useEffect(() => {
    if(deleteUser){
      onDeleteUser(selectedUser)
    } 
    setSelectedUser(null);   
    dispatch(actions.modalClosing());
  },[deleteUser])

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
      title: '',
      key: 'action',
      render: (item) => { return <button onClick={() => onOpenUserDetails(item)}>edit</button> },
    },
    {
      title: '',
      key: 'actionTwo',
      render: (item) => { return <button onClick={() => onOpenConfirmModal(item)}>delete</button> },
    },
  ];

  
  const onOpenUserDetails = (item: IUser) => {
    dispatch(actions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.NEW_USER_CREATING,
      modalProps: { user: item }
    }));
  }

  const onOpenConfirmModal = (item: IUser) => {
    setSelectedUser(item)
    dispatch(actions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.CONFIRM_ACTION,
      modalProps: Confirmations.userDeleting
    }));
  }

  return (
    <div className="fontSize-smaller">
      <span className={styles.main}>UserList</span>
      {tableData.length > 0 ? <Table dataSource={tableData} columns={columns}></Table> : null}
    </div>
  );
}

export {UserList};
