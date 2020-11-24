import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RootModal, { MODAL_COMPONENTS_TYPES } from '../components/modal/Modal';
import Modal from 'react-modal';
import * as actions from '../modules/users/actions';
import * as selectors from '../modules/users/selectors';
import * as modalActions from '../modules/modal/actions';
import * as modalSelectors from '../modules/modal/selectors';
import { UserList } from '../components';
import { IUser } from '../services/models/User.interface';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const UserListContainer = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(modalSelectors.modalType) ? true : false;

  const users = useSelector(selectors.usersList);
  const error = useSelector(selectors.usersListError);

  const getAllUsers = useCallback(() => {
    dispatch(actions.allUsersRequest());
  }, [dispatch]);

  useEffect(() => {
    getAllUsers();
    Modal.setAppElement('body');
  }, [getAllUsers]);

  const setModalIsOpen = () => {
    dispatch(modalActions.modalClosing());
  }

  const onOpenCeratingUser = () => {
    dispatch(modalActions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.NEW_USER_CREATING,
      modalProps: null
    }));
  }

  const onDeleteUser = (event: IUser) => {
    console.log(event)
  }


  return (
    <div className="fontSize-smaller">
      <div>UserListContainer</div>
      <button className='Primary' onClick={onOpenCeratingUser}>Add new user</button>
      {!error ? <UserList users={users}  onDeleteUser={onDeleteUser}/> : error}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={setModalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >   <RootModal></RootModal></Modal>
    </div>

  );
}

export  {UserListContainer};
