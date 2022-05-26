import React from 'react';
import {v4 as uuid} from 'uuid';

const ModalYear = ({modalData}) => {
    const yearSelection = [];
    let fiveYearsPrev = modalData.year - 5;

    for(let i = fiveYearsPrev; i <= modalData.year + 5; i++){
        yearSelection.push(i);
    }

    return (
        <div id="YearSelector">
            {yearSelection.map(year => <div data-year={year} key={uuid()}>{year}</div>)}
        </div>
    );
};

export default ModalYear;