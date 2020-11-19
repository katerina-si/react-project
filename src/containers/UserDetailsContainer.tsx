import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import { UserDetailsForm } from '../components';
import { useDispatch } from 'react-redux';
import * as actions from '../modules/modal/actions';
import { IUser } from '../services/models/User.interface';

type Props = {
    user?: IUser;
}
const UserDetailsContainer = ({ user }: Props) => {
    const dispatch = useDispatch();

    const onSave = (model: IUser) => {
        console.log(model);
        dispatch(actions.modalClosing());
    };

    return (
        <UserDetailsForm user={user} onSendModel={onSave}></UserDetailsForm>
    );
}

export { UserDetailsContainer };
