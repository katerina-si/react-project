import React from 'react';

import styles from './UserList.module.scss'

type Props = {
  users: any[];
}

const UserList = ({ users }: Props) => {
  return (
    <div className="fontSize-smaller">
      <span className={styles.main}>UserList</span>
        {/* Need to implement */}
    </div>
  );
}

export default UserList;
