import React from 'react';
import { StudentListContainer } from '../containers';
import { Redirect } from 'react-router-dom';
import { getTokenInfo } from '../services/tokenStorage';

const Students = () => {
  const isAvailable = getTokenInfo();
  const content = () => {
    if (isAvailable) {
      return <StudentListContainer />
    } else return <Redirect to={{ pathname: '/login' }} />
  }
  return (
    <div>
      Student page
      {content()}
    </div>
  );
}

export default Students;
