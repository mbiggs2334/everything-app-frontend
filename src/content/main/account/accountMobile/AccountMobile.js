import React, { useState } from 'react';

//CSS files
import './AccountMobile.css';

//Components
import AccountForm from '../pieces/AccountForm';

//Functions & Classes & Helpers
import useBooleanHook from '../../../../helperFuncs/booleanHook';

const AccountMobile = ({userInfo}) => {
    const {user, setUser} = userInfo;

    const usernameFormInfo = [['username', 'Username: ']];
    const passwordFormInfo = [['currentPassword', 'Current Password: '], ['newPassword', 'New Password: '], ['confirmNewPassword', 'Confirm New Password: ']];

    const [isEditingProfile, setIsEditingProfile] = useBooleanHook(false);
    const [isChangingPass, setIsChangingPass] = useBooleanHook(false);

    const handleEditNameClick = () => {
        setIsEditingProfile();
    };

    const handleEditPassClick = () => {
        setIsChangingPass();
    };

    return (
        <>
            <h1 id='accountMobileHeader'>Account Settings</h1>
            <hr />
            <div id='accountMobileMain'>
            {isEditingProfile || isChangingPass
                ?   (isEditingProfile   ? <AccountForm formInfo={usernameFormInfo} resetState={setIsEditingProfile} userInfo={userInfo} /> 
                                        : <AccountForm formInfo={passwordFormInfo} resetState={setIsChangingPass} userInfo={userInfo} />)
                :   <div id='accountMobileInfo'>
                        <div><strong>Username: </strong>{user.username} <button onClick={handleEditNameClick} id='editUsernameButton'><i className="fa-solid fa-pen-to-square"></i></button></div>  
                        <div><strong>Email: </strong>{user.email}</div>  
                        <div><strong>Password: </strong>●●●●●●●●</div>  
                        <button id='accountMobileChngPassBtn' onClick={handleEditPassClick}>Change Password</button>
                    </div>
            }
            </div>
        </>
    )
};

export default AccountMobile;