import React from 'react';
import { UserListContainer } from '../containers';
import { Redirect } from 'react-router-dom';
import { getTokenInfo } from '../services/tokenStorage';

const Users = () => {
  const isAvailable = getTokenInfo();
  const content = () => {
    if (isAvailable) {
      return <UserListContainer />
    } else return <Redirect to={{ pathname: '/login' }} />
  }
  return (
    <div>
      Users page
      {content()}
    </div>
  );
}

export default Users;
