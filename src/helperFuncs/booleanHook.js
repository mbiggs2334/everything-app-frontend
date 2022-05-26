import React, { useState } from 'react';

const useBooleanHook = (value) => {

    const [boolean, setBoolean] = useState(value);

    const reverseBoolean = () => {
        setBoolean(!boolean);
    }

    return [boolean, reverseBoolean];

};

export default useBooleanHook;