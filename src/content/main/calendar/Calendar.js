import React, { useState, useContext } from 'react';

//CSS files
import './calendarMain/Calendar.css';
import './Calendar.css';

//Components
import CalendarMain from './calendarMain/Calendar';
import Modal from './Pieces/Modal/Modal';

//Helper Functions && Classes
import CalendarData from './YearData';
import useBooleanHook from '../../../helperFuncs/booleanHook';
import userContext from '../../../UserContext';

const Calendar = ({monthData, yearData}) => {
    const [showModal, setShowModal] = useBooleanHook(false);
    const [modalData, setModalData] = useState({});
    const [modalType, setModalType] = useState();
    const [calendarData, setCalendarData] = yearData;
    const [currentMonth, setCurrentMonth] = monthData;

    const {user, setUser} = useContext(userContext);

    const changeMonth = direction => {
        let year, month, firstDayOfTheMonth, daysInMonth;
        if(direction === 'minus'){
            year = currentMonth.month === 0 ? currentMonth.year - 1 : currentMonth.year;
            month = currentMonth.month === 0 ? 11 : currentMonth.month - 1;
            setCalendarData(() => new CalendarData(year));
            firstDayOfTheMonth = calendarData.getDayOfWeek(month, 1, year);
            daysInMonth = calendarData.yearData[month].days;
            setCurrentMonth(data => ({
                ...data,
                year,
                month,
                firstDayOfTheMonth,
                daysInMonth
            }));
        };
        if(direction === 'plus'){
            year = currentMonth.month === 11 ? currentMonth.year + 1 : currentMonth.year;
            month = currentMonth.month === 11 ? 0 : currentMonth.month + 1;
            setCalendarData(() => new CalendarData(year));
            firstDayOfTheMonth = calendarData.getDayOfWeek(month, 1, year);
            daysInMonth = calendarData.yearData[month].days;
            setCurrentMonth(data => ({
                ...data,
                year,
                month,
                firstDayOfTheMonth,
                daysInMonth
            }));
        };
    };
    
    const handleClick = (evt) => {
        if(evt.target.parentElement.dataset.number > 0){
            if(!user) return;
            setModalType("Event");
            setModalData(data => ({
                month: evt.target.parentElement.dataset.month,
                day: evt.target.parentElement.dataset.number,
                year: evt.target.parentElement.dataset.year
            }))
            setShowModal();
        } else if(evt.target.dataset.number > 0){
            if(!user) return;
            setModalType("Event");
            setModalData(data => ({
                month: evt.target.dataset.month,
                day: evt.target.dataset.number,
                year: evt.target.dataset.year
            }))
            setShowModal();
        }
        if(evt.target.id === "CalendarMonthHeader"){
            setModalType("Month");
            setModalData(data => ({
                month: currentMonth.month
            }))
            setShowModal();
        };
        if(evt.target.id === "CalendarYearHeader"){
            setModalType("Year");
            setModalData(data => ({
                year: currentMonth.year
            }))
            setShowModal();
        };
    };

    if(showModal){
        document.getElementsByTagName('body')[0].classList.add('noscroll');
    } else {
        document.getElementsByTagName('body')[0].classList.remove('noscroll');
    };

    const closeModal = () => {
        setShowModal();
    };

    return (
        <>
        {user ? null : <p id="NotLoggedInCalendar">WARNING: You are not logged in, you will not be able to add and save events.</p>}
        <div id="CalendarModalWrapper">
            {showModal ? <Modal calendarData={calendarData} modalType={modalType} 
                    modalData={modalData} closeModal={closeModal} currentMonthData={monthData} 
                    setCalData={setCalendarData}
            /> : null}
        </div>
        <div onClick={handleClick} id="CalendarMain">
            <h1>Calendar</h1>
            <CalendarMain changeMonth={changeMonth} currentMonth={currentMonth}
            calendarData={calendarData}
            />
        </div>
        </>
    )
};

export default Calendar;