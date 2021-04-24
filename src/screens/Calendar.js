
import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const Calendar = () => {
    return (
        <div className="calendar">
            <div className="calendar__head">
                <button><MdChevronLeft /></button>
                <span className="title">2021. 04</span>
                <button><MdChevronRight /></button>
            </div>
        </div>
    )
}
export default Calendar;
