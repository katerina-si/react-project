import React from 'react';
import styles from './ModalManager.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from '../../modules/modal/selectors';
import { ConfirmationForm } from '..';
import { UserDetailsContainer } from '../../containers/UserDetailsContainer';
import { StudentDetailsContainer } from '../../containers/StudentDetailsContainer';
import { DeleteContainer } from '../../containers/DeleteContainer';

export const MODAL_COMPONENTS_TYPES = {
  NEW_STUDENT_CREATING: 'NEW_STUDENT_CREATING',
  NEW_USER_CREATING: 'NEW_USER_CREATING',
  CONFIRM_ACTION: 'CONFIRM_ACTION'
};

export const MODAL_COMPONENTS = {
  [MODAL_COMPONENTS_TYPES.NEW_STUDENT_CREATING]: StudentDetailsContainer,
  [MODAL_COMPONENTS_TYPES.NEW_USER_CREATING]: UserDetailsContainer,
  [MODAL_COMPONENTS_TYPES.CONFIRM_ACTION]: DeleteContainer
};

const ModalManager = () => {
  const modalType = useSelector(selectors.modalType);
  const modalProps = useSelector(selectors.modalProps);

  if (!modalType) {
    return null;
  }
  const SpecificModal: any = MODAL_COMPONENTS[modalType];

  return (
    <div className={styles.Form}>
      <SpecificModal  {...modalProps}></SpecificModal>
    </div>

  );
}

export { ModalManager };
