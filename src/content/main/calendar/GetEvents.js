import React, { useContext } from 'react';

import userContext from '../../../UserContext';

function useGetEvents(yearData, dayNumber){
    const {user} = useContext(userContext);

    if(!user) return [];

    const todayEvents = [];
    if(user.events[yearData.month]){
        for(let event of Object.values(user.events[yearData.month])){
            if(`${yearData.month}/${dayNumber}/${yearData.year}` === event[0].day_of_event){
                todayEvents.push(event);
            };
        };
    };
    
    return todayEvents.flat(1);
}

export default useGetEvents;