import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import moment from 'moment';

//Components
import useBooleanHook from '../../../../helperFuncs/booleanHook';

const SavingMessage = forwardRef(({note}, ref) => {

    const [isSaving, setIsSaving] = useBooleanHook(false);
    const [date, setDate] = useState(note.lastModified);

    useImperativeHandle(ref, () => ({
        setIsSaving: () => setIsSaving()
    }));

    useEffect(()=>{
        let timeout;
        if(isSaving) timeout = setTimeout(()=>{
            setDate(new Date().toUTCString());
            setIsSaving();
        }, 1000);
        return function cleanup(){
            clearInterval(timeout);
        };
    }, [isSaving]);

    return (
        <span>{isSaving ? 'Saving...' : (date !== undefined ? `Saved: ${moment(date).local(true).format('MM/DD - hh:mm:ssA')}` : null)}</span>
    )
});

export default SavingMessage;