import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../modules/students/actions';
import * as selectors from '../modules/students/selectors';
import { StudentList } from '../components';
import Modal from 'react-modal';
import { RootModal } from '../components/modal/Modal';

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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const students = useSelector(selectors.studentList);
  const error = useSelector(selectors.studentListError);

  const getAllStudents = useCallback(() => {
    dispatch(actions.allStudentsRequest());
  }, [dispatch]);

  useEffect(() => {
    getAllStudents();
  }, [getAllStudents]);


  function openModal() {
    dispatch(actions.showModal({ modalType: 'DELETE_POST', modalProps: { student: students[0] } }));
    setModalIsOpen(true);
  }

  function onOpenDeletingStudent() {
    dispatch(actions.showModal({
      modalType: 'DELETE_STUDENT', modalProps: {
        message: 'Are you sure that you want to delete the student?',
        confirmBtnTitle: 'Delete'
      }
    }));
    setModalIsOpen(true);
  }

  return (
    <div className="fontSize-smaller">
      StudentsListContainer
      {!error ? <StudentList students={students} /> : error}
      <button onClick={openModal}>Open Modal</button>
      <button onClick={onOpenDeletingStudent}>Delete Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >   <RootModal></RootModal></Modal>
    </div>

  );
}

export { StudentListContainer };
