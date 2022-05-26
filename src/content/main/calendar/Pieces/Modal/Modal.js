import React from 'react';

//CSS files
import './Modal.css';

//Components
import ModalEvent from './ModalEvent';
import ModalMonth from './ModalMonth';
import ModalYear from './ModalYear';

//Helper functions && Classes
import CalendarData from '../../YearData';
import useBooleanHook from '../../../../../helperFuncs/booleanHook';

const Modal = ({modalData, closeModal, modalType, calendarData, currentMonthData, setCalData}) => {

    const [currentMonth, setCurrentMonth] = currentMonthData;

    const handleClick = (evt) => {
        if(evt.target.parentElement.id === "CalendarModalWrapper" || evt.target.dataset.name === "closemodal"){
            closeModal();
        };
        if(evt.target.dataset.month === 'true'){
            let monthIndex = parseInt(evt.target.dataset.index);
            let firstDayOfTheMonth = calendarData.getDayOfWeek(monthIndex, 1, currentMonth.year);
            let daysInMonth = calendarData.yearData[monthIndex].days;
            setCurrentMonth(data => ({
                ...data,
                month: monthIndex,
                firstDayOfTheMonth,
                daysInMonth
            }));
            closeModal();
        };
        if(evt.target.dataset.year > 0){
            let year = parseInt(evt.target.dataset.year);
            let newCal = new CalendarData(year);
            let firstDayOfTheMonth = calendarData.getDayOfWeek(currentMonth.month, 1, year);
            let daysInMonth = newCal.yearData[currentMonth.month].days;
            setCalData(data => newCal)
            setCurrentMonth(data => ({
                ...data,
                month: currentMonth.month,
                firstDayOfTheMonth,
                daysInMonth,
                year
            }));
            closeModal();
        }
    };

    return (
        <div id="CalendarModal" onClick={handleClick}>
            <div id="CalendarModalContent" >
                <div className="modalHeader">
                    <i data-name="closemodal" className="fa-solid fa-x"></i>
                </div>
                {modalType === "Year" ? <ModalYear modalData={modalData} calendarData={calendarData} /> : null}
                {modalType === "Month" ? <ModalMonth modalData={modalData} calendarData={calendarData}  /> : null}
                {modalType === "Event" ? <ModalEvent currentMonthData={currentMonthData} closeModal={closeModal} modalData={modalData} calendarData={calendarData}  /> : null}
            </div>
        </div>
    );
};

export default Modal;