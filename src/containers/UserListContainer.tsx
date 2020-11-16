import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserList from '../components/user-list/UserList';
import * as actions from '../modules/users/actions';
import * as selectors from '../modules/users/selectors';

const UserListContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectors.usersList);
  
  const getAllUsers = useCallback(() => {
    dispatch(actions.allUsersRequest());
  }, [dispatch]);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return (
    <div className="fontSize-smaller">
      UserListContainer
      <UserList users={users} />
    </div>

  );
}

export default UserListContainer;
