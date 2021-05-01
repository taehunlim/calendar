
import React, {useState} from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import moment from 'moment';
import 'moment/locale/ko'


const Calendar = () => {
    const [Moment, setMoment] = useState(moment())
    const [selectedDate, setSelectedDate] = useState((
        Moment.format('YYYYMMDD')
    ))

    const days = [
        "일", "월", "화", "수", "목", "금", "토"
    ]

    const calendar = () => {
        const today = Moment;
        const startWeek = today.clone().startOf('month').week();
        const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
        let calendar = [];
        for (let week = startWeek; week <= endWeek; week++) {
            calendar.push(
                <div className="row" key={week}>
                    {
                        Array(7).fill(0).map((n, i) => {
                            let current = today.clone().week(week).startOf('week').add(i, 'day')
                            let isSelected = current.format('YYYYMMDD') === selectedDate ? 'selected' : '';

                            let isGrayed = current.format('MM') === today.format('MM') ? '' : 'grayed';
                            return (
                                <div className={`box ${isSelected} ${isGrayed}`} key={i}>
                                    <button
                                        className="text"
                                        onClick={() => setSelectedDate(current.format('YYYYMMDD'))}
                                    >
                                        {current.format('D')}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
        return calendar;
    }
    return (
        <div
            className="calendar"
            style={{
                maxWidth: "500px"
            }}
        >
            <div className="calendar__head">
                <button
                    onClick={()=>{
                        setMoment(Moment.clone().subtract(1, 'month'))
                    }}
                >
                    <MdChevronLeft />
                </button>
                <span className="title">
                    {Moment.format("YYYY MMMM")}
                </span>
                <button
                    onClick={()=>{
                        setMoment(Moment.clone().add(1, 'month'))
                    }}
                >
                    <MdChevronRight />
                </button>
            </div>

            <div className="calendar__body">
                <div className="row">

                    {days.map(day =>
                        <div className="box">
                            <div className="text">
                                {day}
                            </div>
                        </div>
                    )}

                </div>

                {calendar()}

            </div>
        </div>
    )
}
export default Calendar;
