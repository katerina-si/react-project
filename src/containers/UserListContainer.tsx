import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../modules/users/actions';
import * as selectors from '../modules/users/selectors';
import * as modalActions from '../modules/modal/actions';
import * as modalSelectors from '../modules/modal/selectors';
import { UserList } from '../components';
import { IUser } from '../services/models/User.interface';
import { MODAL_COMPONENTS_TYPES } from '../components/modal-manager/ModalManager';
import { Confirmations } from '../components/confirmation-form/Confirmations';

const UserListContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectors.usersList);
  const error = useSelector(selectors.usersListError); 

  useEffect(() => {
    dispatch(actions.allUsersRequest());
  }, [dispatch]);

  const onOpenCeratingUser = () => {
    dispatch(modalActions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.NEW_USER_CREATING,
      modalProps: null
    }));
  }

  const onOpenUserDetails = (item: IUser) => {
    dispatch(modalActions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.NEW_USER_CREATING,
      modalProps: { user: item }
    }));
  }

  const onOpenConfirmModal = (item: IUser) => {
    dispatch(modalActions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.CONFIRM_ACTION,
      modalProps: {
        confirmProps: Confirmations.userDeleting,
        controller: 'User',
        removedItem: item,
      }
    }));
  }

  const renderContent = () => {
    if (error) {
      return error
    } else {
      return <UserList users={users}
        onOpenConfirmModal={onOpenConfirmModal}
        onOpenUserDetails={onOpenUserDetails} />
    }
  }

  return (
    <div className="fontSize-smaller">
      <div>UserListContainer</div>
      <button className='Primary' onClick={onOpenCeratingUser}>Add new user</button>
      {renderContent()}
    </div>

  );
}

export { UserListContainer };
