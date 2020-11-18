import React, { useState } from 'react';
import styles from './Modal.module.scss';
import { IStudent } from '../../services/models/Student.interface';

import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import * as actions from '../../modules/students/actions';
import * as selectors from '../../modules/students/selectors';
import { ConfirmationForm } from '../confirmation-form/ConfirmationForm';
import { StudentDetailsContainer } from '../../containers/StudentDetailsContainer';
type Props = {
  modalType?: any;
  modalProps?: any
}

export const MODAL_COMPONENTS = {
  NEW_STUDENT_CREATING: StudentDetailsContainer,
  DELETE_STUDENT: ConfirmationForm
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

export { RootModal };
