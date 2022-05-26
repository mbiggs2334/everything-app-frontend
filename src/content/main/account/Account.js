import React, { useContext } from 'react';

//Components
import AccountMobile from './accountMobile/AccountMobile';
import AccountMain from './accountMain/AccountMain';

//Functions & Classes & Helpers
import userContext from '../../../UserContext';

const Account = () => {
    const { user, setUser } = useContext(userContext);

    return (
        <>
        <div id='accountMobile'>
            <AccountMobile userInfo={{user, setUser}} />
        </div>
        <div id='accountMain'>
            <AccountMain userInfo={{user, setUser}} />
        </div>
        </>
    )
};

export default Account;