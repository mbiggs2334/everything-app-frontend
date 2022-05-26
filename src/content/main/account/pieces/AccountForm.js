import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//Functions & Classes & Helpers
import Users from '../../../../APIs/UsersApi';
import handleFormChange from '../../../../helperFuncs/handleFormChange';

const AccountForm = ({formInfo, resetState, userInfo}) => {
    const history = useHistory();
    const {user, setUser} = userInfo;

    const [formData, setFormData] = useState({username: user.username});
    const [errorMessage, setErrorMessage] = useState([]);

    const handleUsernameChange = async() => {
       let res = await Users.changeUsername(user.username, formData.username);
       if(typeof(res) === 'string') {setErrorMessage([res]); return false};
       setUser(Users.getLocalUser());
       return true;
    }

    const handlePasswordChange = async () => {
        let newPassword = formData.newPassword;
        let confirmNewPassword = formData.confirmNewPassword;
        let errorMessageArray = [];
        let response = await Users.authenticateUserPassword(user.username, formData.currentPassword);

        if(response.verified === false) errorMessageArray.push('Password Incorrect.');
        if(newPassword !== confirmNewPassword) errorMessageArray.push('Passwords must match.');
        if(errorMessageArray.length > 0) {setErrorMessage([...errorMessageArray]); return false};
        let passResponse = await Users.changePassword(user.username, newPassword, user.id);
        return true;
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if(formInfo[0][0] === 'username'){
            if(!await handleUsernameChange()) return;
        };
        if(formInfo[0][0] === 'currentPassword'){
            if(!await handlePasswordChange()) return;
        }
        resetState();
    };


    const handleChange = (evt) => {
        handleFormChange(setFormData, evt);
    };

    const handleCancel = evt => {
        evt.preventDefault();
        resetState();
    };

    return (
        <form id='accountMobileForm' onSubmit={handleSubmit} >
            {formInfo.map( ([name, label]) => 
                <>
                <label htmlFor={name} >{label}</label>
                <input
                    name={name}
                    id={name}
                    type={name.indexOf('Password') !== -1 ? 'password' : 'text'}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={label.toLowerCase().replace(/: /, '...')}
                    required
                />
                </>
                )}
            {errorMessage.length > 0 ? <p id='accountMobileErrorMessage'>{errorMessage.map(val => <span>{val}</span>)}</p> : null}
            <button>Save Changes</button>
            <button id='accountMobileCancelButton' onClick={handleCancel}>Cancel</button>
        </form>
    )
};

export default AccountForm;