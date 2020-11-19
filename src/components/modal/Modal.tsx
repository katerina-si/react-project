import React, { useState, useEffect } from 'react';
import styles from './Modal.module.scss';
import { useSelector } from 'react-redux';
import * as selectors from '../../modules/modal/selectors';
import { ConfirmationForm } from '../';
import { StudentDetailsContainer } from '../../containers/StudentDetailsContainer';
import { UserDetailsContainer } from '../../containers/UserDetailsContainer';

export const MODAL_COMPONENTS_TYPES = {
  NEW_STUDENT_CREATING: 'NEW_STUDENT_CREATING',
  NEW_USER_CREATING: 'NEW_USER_CREATING',
  CONFIRM_ACTION: 'CONFIRM_ACTION'
};

export const MODAL_COMPONENTS = {
  [MODAL_COMPONENTS_TYPES.NEW_STUDENT_CREATING]: StudentDetailsContainer,
  [MODAL_COMPONENTS_TYPES.NEW_USER_CREATING]: UserDetailsContainer,
  [MODAL_COMPONENTS_TYPES.CONFIRM_ACTION]: ConfirmationForm
};


const RootModal = () => {
  const modalType = useSelector(selectors.modalType);
  const modalProps = useSelector(selectors.modalProps);

  if (!modalType) {
    return null;
  }
  const SpecificModal: any = MODAL_COMPONENTS[modalType];
 
  return (
    <div className={styles.Form}>
    <SpecificModal  {...modalProps}></SpecificModal></div>
  );
}

export default RootModal;
