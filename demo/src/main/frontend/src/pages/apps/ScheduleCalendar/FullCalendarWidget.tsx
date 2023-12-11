import FullCalendar, { EventClickArg, EventDropArg, render } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg, DropArg } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import BootstrapTheme from '@fullcalendar/bootstrap';
import { EventInput } from '@fullcalendar/core';

type FullCalendarWidgetProps = {
    onDateClick: (value: DateClickArg) => void;
    onEventClick: (value: EventClickArg) => void;
    onEventDrop: (value: EventDropArg) => void;
    onDrop: (value: DropArg) => void;
    events: Array<EventInput>;
};

const FullCalendarWidget = ({ onDateClick, onEventClick, onDrop, onEventDrop, events }: FullCalendarWidgetProps) => {
    return (
        <>
            {/* full calendar control */}
            <div id="calendar">
                <FullCalendar
                    initialView="dayGridMonth"
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, BootstrapTheme]}
                    handleWindowResize={false}
                    themeSystem="bootstrap"
                    buttonText={{
                        today: '오늘',
                        month: '달',
                        week: '주',
                        day: '일',
                        list: '목록',
                        prev: '이전달',
                        next: '다음달',
                    }}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                    }}
                    eventContent={renderEventContent}
                    editable={false}
                    selectable={false}
                    droppable={false}
                    events={events}
                    dateClick={(arg: DateClickArg) => onDateClick(arg)}
                    eventClick={(arg: EventClickArg) => onEventClick(arg)}
                    drop={(arg: DropArg) => onDrop(arg)}
                    eventDrop={(arg: EventDropArg) => onEventDrop(arg)}
                />
            </div>
        </>
    );
};

export default FullCalendarWidget;

const renderEventContent = (eventInfo: any) => {
    let time : Date = new Date(eventInfo.event._instance.range.start);
    time.setHours(time.getHours() - 9);

    // console.log('eventInfo : ', eventInfo.event);

    // console.log('휴가 시간 없애기 테스트 : ', eventInfo.event._def.title);

    let hours;
    let minutes;
    if(eventInfo.event._def.title.includes('휴가')){

        hours = ' ';
        minutes = ' ';
    }else{

        hours = time.getHours().toString();
        if (hours.length == 1) {
            hours = "0" + hours;
        }
        minutes = time.getMinutes().toString();
        if (minutes.length == 1) {
            minutes = "0" + minutes;
        }
    }
    if(eventInfo.event._def.title.includes('휴가')){

        return (
            <>
            <div style={{width: "100%", display:"flex",justifyContent : "space-between"}}>
                <div>{eventInfo.event.title}</div>
                <div>{hours + minutes}</div>
            </div>
        </>
        )
    }else{
        return (
            <>
            <div style={{width: "100%", display:"flex",justifyContent : "space-between"}}>
                <div>{eventInfo.event.title}</div>
                <div>{hours + ":" + minutes}</div>
            </div>
        </>
        )
    }
};