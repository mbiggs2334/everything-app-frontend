import React, { useState } from 'react';

const useErrorMessageHook = () => {

    const [errorMessage, setErrorMessage] = useState(null);

    const setMessage = (message) => {
        setErrorMessage(() => message);
    };

    return [errorMessage, setMessage];

};

export default useErrorMessageHook