import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../modules/modal/selectors';
import * as actions from '../modules/modal/actions';
import Modal from 'react-modal';
import { ModalManager } from '../components/modal-manager/ModalManager';
import { customStyles } from '../configs/ModalConfig';

const ModalContainer = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectors.modalIsOpen);

  const setModalIsOpen = () => {
    dispatch(actions.modalClosing());
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={setModalIsOpen}
      style={customStyles}
      contentLabel="Example Modal"
    > <ModalManager /></Modal>
  );
}

export {ModalContainer};
