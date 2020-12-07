import React, { useState, useEffect } from 'react';
import styles from './UserList.module.scss'
import { ITableColumnItem, ITableDataSourceItem } from '../table/Table';
import { Table } from '../';
import { IUser } from '../../services/models/User.interface';

type Props = {
  users: IUser[];
  onOpenUserDetails: (value: any) => void
  onOpenConfirmModal: (value: any) => void
}

const UserList = ({ users, onOpenConfirmModal, onOpenUserDetails }: Props) => {
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

  

  return (
    <div className="fontSize-smaller">
      <span className={styles.main}>UserList</span>
      {tableData.length > 1 && <Table dataSource={tableData} columns={columns} ></Table>}
    </div>
  );
}

export {UserList};
