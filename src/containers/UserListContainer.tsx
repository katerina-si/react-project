import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../modules/users/actions';
import * as selectors from '../modules/users/selectors';
import { UserList } from '../components';

const UserListContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectors.usersList);
  const error = useSelector(selectors.usersListError);

  const getAllUsers = useCallback(() => {
    dispatch(actions.allUsersRequest());
  }, [dispatch]);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  return (
    <div className="fontSize-smaller">
      UserListContainer
      {!error ? <UserList users={users} /> : error}
    </div>

  );
}

export  {UserListContainer};
