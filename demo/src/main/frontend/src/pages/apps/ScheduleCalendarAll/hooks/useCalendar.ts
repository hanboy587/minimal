import { useEffect, useState } from 'react';
import { DateClickArg, Draggable, DropArg } from '@fullcalendar/interaction';
import { DateInput, EventClickArg, EventDropArg, EventInput } from '@fullcalendar/react';
import { useToggle } from 'hooks';
import { Event } from '../types';
import { defaultEvents } from '../data';
import axios from 'axios';
import { getUsername } from 'utils/getUsername';
import moment from 'moment';
import axiosCompo  from './axiosCompo';

interface commuteAllList {
    idx: number,
    nowDate: string,
    username: string,
    work: string
    workIp: string,
    workDistance: string,
    workLatitude: string,
    workLongitude: string,
    workDeviceType: string,
    correctionWork: Date,
    correctionWorkComment: Date,
    leave: string,
    leaveIp: string,
    leaveDistance: string,
    leaveLatitude: string,
    leaveLongitude: string,
    leaveDeviceType: string,
    correctionLeave: string,
    correctionLeaveComment: string,
}

interface hyugaAllList {
    id: number,
    type: string,
    comment: string,
    money: string,
    username: string,
    realname: string,
    nowDate: string,
}

interface goingAllList {
    id: number,
    type: string,
    comment: string,
    username: string,
    nowDate: string,
    money: string,
    updateTime: string,
}


export default function useCalendar() {
    /*
     * modal handling
     */
    const [isOpen, , show, hide] = useToggle();
    const onCloseModal = () => {
        hide();
        setEventData({});
        setDateInfo({} as DateClickArg);
    };
    const onOpenModal = () => show();
    const [isEditable, setIsEditable] = useState<boolean>(false);

    // is, title, start, end, classname
    // 
    /*
     * event data
     */


    const [events, setEvents] = useState<EventInput[]>([...defaultEvents]);
    const [eventData, setEventData] = useState<EventInput>({});
    const [dateInfo, setDateInfo] = useState<DateClickArg>({} as DateClickArg);
    const [clickDateInfo, setClickDateInfo] = useState<Date>();
    const [clickNowDateInfo, setClickNowDateInfo] = useState<string>();
    // 이부분 start = work 에서 start = nowDate로 바꾸기
    const getCommuteList = async() => {
        const username = getUsername();
        const res = await axios.post("commuteList", {
            "username": username
        })
        const res2 = await axios.post("/hyuga/findByUsername", {
            "username": "qwerty"
        })

        const res3 = await axios.post("/going/findByUsername", {
            "username": username
        })

        const res4 = await axios.post("/businessTrip/findUsername", {
            "username": username
        })
        const commuteList : commuteAllList[] = res.data;
        const hyugaList : hyugaAllList[] = res2.data;
        const goingList : goingAllList[] = res3.data;
        const businessTripList : goingAllList[] = res4.data;
        const calendarList : any[] = [];

        businessTripList.map((data) => {
            let temp : any = {};
            const start = new Date(data.nowDate);
            temp["start"] = start;
            temp["title"] = "출장 ";
            temp["className"] = "bg-warning";
            calendarList.push(temp);
        })
        // 컴포넌트 만들어보기  
        // goingList.map((data) => {
        //     let temp : any = {};
        //     const start = new Date(data.nowDate);
        //     console.log('외출', data)
        //     temp["start"] = start;
        //     temp["title"] = "외출 ";
        //     temp["className"] = "bg-warning";
        //     calendarList.push(temp);
        // })


        hyugaList.map((data) => {
            let temp : any = {};
            const start = new Date(data.nowDate);
            temp["start"] = start;
            temp["title"] = data.money + data.type;
            temp["className"] = "bg-warning";
            calendarList.push(temp);
        });
        commuteList.map((data) => {
            let temp : any = {};
            if (data.work) {
                const start = new Date(data.work);
                temp["start"] = start; 
                let hours = start.getHours().toString();
                let minutes = start.getMinutes().toString();
                if (hours.length == 1) {
                    hours = "0" + hours;
                }
                if (minutes.length == 1) {
                    minutes = "0" + minutes;
                }
                
                // temp["title"] = {date : "2022-10-29",};
                temp["title"] = "출근";
                temp["className"] = "bg-success";
                calendarList.push(temp);

            }
            temp = {};
            if (data.leave) {
                const start = new Date(data.leave);
                temp["start"] = start;
                let hours = start.getHours().toString();
                let minutes = start.getMinutes().toString();
                if (hours.length == 1) {
                    hours = "0" + hours;
                }
                if (minutes.length == 1) {
                    minutes = "0" + minutes;
                }
                
                temp["title"] = "퇴근";
                // temp["title"] = hours + ":" + minutes;
                temp["className"] = "bg-warning";
                calendarList.push(temp);
            }
        });
        
        setEvents(calendarList);
    };
    

    useEffect(() => {
        getCommuteList();
    }, []);

    useEffect(() => {
        // create dragable events
        let draggableEl = document.getElementById('external-events');
        new Draggable(draggableEl!, {
            itemSelector: '.external-event',
        });
    }, []);

    /*
    calendar events
    */

    // on date click
    const onDateClick = (arg: DateClickArg) => {
        setDateInfo(arg);
        onOpenModal();
        setIsEditable(false);
    };

    // on event click
    const onEventClick = (arg: EventClickArg) => {
        if (arg.event._instance) {
            let dateInfo = arg.event._instance.range.start;
            setClickDateInfo(dateInfo);
            dateInfo = new Date(dateInfo);
            dateInfo.setHours(dateInfo.getHours() - 9);
            events.map((data : any) => {
                if (moment(dateInfo).isSame(data.start)) {
                    setClickNowDateInfo(data.nowDate);
                }
            });
        }
        const event = {
            id: String(arg.event.id),
            title: arg.event.title,
            className: arg.event.classNames[0],
        };
        setEventData(event);
        onOpenModal();
        setIsEditable(true);
    };

    // on drop
    const onDrop = (arg: DropArg) => {
        const dropEventData = arg;
        const title = dropEventData.draggedEl.title;
        if (title == null) {
        } else {
            let newEvent = {
                id: String(events.length + 1),
                title: title,
                start: dropEventData ? dropEventData.dateStr : new Date(),
                className: dropEventData.draggedEl.attributes.getNamedItem('data-class')?.value,
            };
            const modifiedEvents = [...events];
            modifiedEvents.push(newEvent);
            setEvents(modifiedEvents);
        }
    };

    // on add event
    const onAddEvent = (data: Event) => {
        let modifiedEvents = [...events];
        const event = {
            id: String(modifiedEvents.length + 1),
            title: data.title,
            start: Object.keys(dateInfo).length !== 0 ? dateInfo.date : new Date(),
            className: data.className,
        };
        modifiedEvents = [...modifiedEvents, event];
        setEvents(modifiedEvents);
        onCloseModal();
    };

    //  on update event
    const onUpdateEvent = (data: Event) => {
        const modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e) => e['id'] === eventData.id);
        modifiedEvents[idx]['title'] = data.title;
        modifiedEvents[idx]['className'] = data.className;
        setEvents(modifiedEvents);
        onCloseModal();
    };

    // on remove event
    const onRemoveEvent = () => {
        var modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e) => e['id'] === eventData.id);
        modifiedEvents.splice(idx, 1);
        setEvents(modifiedEvents);
        onCloseModal();
    };

    // on event drop
    const onEventDrop = (arg: EventDropArg) => {
        const modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e) => e['id'] === String(arg.event.id!));
        if (arg.event.title) {
            modifiedEvents[idx]['title'] = arg.event.title;
        }
        modifiedEvents[idx]['className'] = arg.event.classNames;
        modifiedEvents[idx]['start'] = arg.event.start as DateInput;
        modifiedEvents[idx]['end'] = arg.event.end as DateInput;
        setEvents(modifiedEvents);
        setIsEditable(false);
    };

    return {
        isOpen,
        onOpenModal,
        onCloseModal,
        isEditable,
        eventData,
        events,
        onDateClick,
        onEventClick,
        onDrop,
        onEventDrop,
        onUpdateEvent,
        onRemoveEvent,
        onAddEvent,
        dateInfo,
        clickDateInfo,
        setClickDateInfo,
        clickNowDateInfo,
    };
}
