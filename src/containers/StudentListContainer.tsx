import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../modules/students/actions';
import * as selectors from '../modules/students/selectors';
import * as modalActions from '../modules/modal/actions';
import * as modalSelectors from '../modules/modal/selectors';
import { StudentList } from '../components';
import Modal from 'react-modal';
import RootModal, { MODAL_COMPONENTS_TYPES } from '../components/modal/Modal';
import { IStudent } from '../services/models/Student.interface';

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

const StudentListContainer = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(modalSelectors.modalType) ? true : false;

  const students = useSelector(selectors.studentList);
  const error = useSelector(selectors.studentListError);

  const getAllStudents = useCallback(() => {
    dispatch(actions.allStudentsRequest());
  }, [dispatch]);

  useEffect(() => {
    getAllStudents();
    Modal.setAppElement('body');
  }, [getAllStudents]);

  const setModalIsOpen = () => {
    dispatch(modalActions.modalClosing());
  }

  const onOpenCeratingStudent = () => {
    dispatch(modalActions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.NEW_STUDENT_CREATING,
      modalProps: null
    }));
  }

  const onDeleteStudent = (event: IStudent) => {
    console.log(event)
  }

  return (
    <div className="fontSize-smaller">
      <div>StudentsListContainer</div>
      <button className='Primary' onClick={onOpenCeratingStudent}>Add new student</button>
      {!error ? <StudentList students={students} onDeleteStudent={onDeleteStudent} /> : error}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={setModalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >   <RootModal></RootModal></Modal>
    </div>

  );
}

export { StudentListContainer };
