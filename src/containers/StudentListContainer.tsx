import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../modules/students/actions';
import * as selectors from '../modules/students/selectors';
import * as modalActions from '../modules/modal/actions';
import { StudentList } from '../components';
import { IStudent } from '../services/models/Student.interface';
import { IStudentParams } from '../modules/students/services';
import { useHistory } from "react-router-dom";
import { useQuery } from '../App';
import qs from 'qs';
import { Confirmations } from '../components/confirmation-form/Confirmations';
import { MODAL_COMPONENTS_TYPES } from '../components/modal-manager/ModalManager';
import { defaultPaginationState } from '../components/table-with-paginator/PaginatorConfig';


const StudentListContainer = () => {
  let history = useHistory();
  const query = useQuery();
  const { limit = defaultPaginationState.limit, page = defaultPaginationState.page }
    = qs.parse(query.toString());

  const dispatch = useDispatch();
  const students = useSelector(selectors.studentList);
  const allStudentsCount = useSelector(selectors.allStudentCount);
  const error = useSelector(selectors.studentListError);

  useEffect(() => {
    dispatch(actions.allStudentsRequest({ limit: +limit, page: +page }));
  }, [limit, page]);


  const onOpenCeratingStudent = () => {
    dispatch(modalActions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.NEW_STUDENT_CREATING,
      modalProps: null
    }));
  }

  const onOpenStudentDetails = (item: IStudent) => {
    dispatch(modalActions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.NEW_STUDENT_CREATING,
      modalProps: { student: item }
    }));
  }

  const onOpenConfirmModal = (item: IStudent) => {
    dispatch(modalActions.modalOpenning({
      modalType: MODAL_COMPONENTS_TYPES.CONFIRM_ACTION,
      modalProps: {
        confirmProps: Confirmations.studentDeleting,
        controller: 'Student',
        removedItem: item,
      }
    }));
  }

  const onSetParams = (params: IStudentParams) => {
    history.push({ search: qs.stringify(params) });
  }

  const renderContent = () => {
    if (error) {
      return error
    } else {
      return <StudentList
        students={students}
        paginatorState={{
          limit: +limit,
          page: +page,
          count: allStudentsCount
        }}
        onOpenConfirmModal={onOpenConfirmModal}
        onOpenStudentDetails={onOpenStudentDetails}
        onChangePage={p => onSetParams({ limit: +limit, page: p, })}
        onChangeLimit={l => onSetParams({ limit: l, page: defaultPaginationState.page, })} />
    }
  }

  return (
    <div className="fontSize-smaller">
      <div>StudentListContainer</div>
      <button className='Primary' onClick={onOpenCeratingStudent}>Add new student</button>
      {renderContent()}
    </div>

  );
}

export { StudentListContainer };
