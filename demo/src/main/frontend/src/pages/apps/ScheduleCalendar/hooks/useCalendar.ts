import { useEffect, useState } from 'react';
import { DateClickArg, Draggable, DropArg } from '@fullcalendar/interaction';
import { DateInput, EventClickArg, EventDropArg, EventInput } from '@fullcalendar/react';
import { useToggle } from 'hooks';
import { Event } from '../types';
import { defaultEvents } from '../data';
import axios from 'axios';
import { getUsername } from 'utils/getUsername';
import moment from 'moment';
import { Modal, Row, Col, Button } from 'react-bootstrap';

// 출근
interface commuteAllList {
    idx: number;
    nowDate: string;
    username: string;
    work: string;
    workIp: string;
    workDistance: string;
    workLatitude: string;
    workLongitude: string;
    workDeviceType: string;
    correctionWork: Date;
    correctionWorkComment: Date;
    leave: string;
    leaveIp: string;
    leaveDistance: string;
    leaveLatitude: string;
    leaveLongitude: string;
    leaveDeviceType: string;
    correctionLeave: string;
    correctionLeaveComment: string;
    useflag: any;
}

// 휴가
interface hyugaAllList {
    id: number;
    type: string;
    comment: string;
    money: string;
    username: string;
    realname: string;
    nowDate: string;
    useflag: any;
}

// 추가 근무
interface overTiemAllList {
    id: number;
    type: string;
    comment: string;
    username: string;
    nowDate: string;
    updateTime: string;
    overTimeEnd: string;
    overTimeStart: string;
    useflag: any;
}

// 외출
interface goingAllList {
    id: number;
    type: string;
    comment: string;
    money: string;
    username: string;
    nowDate: string;
    updateTime: string;
    useflag: any;
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

    // /hyuga/findByUsername

    const [realData, setRealData] = useState<EventInput[]>([]);
    const [events, setEvents] = useState<EventInput[]>([...defaultEvents]);
    const [eventData, setEventData] = useState<EventInput>({});
    const [dateInfo, setDateInfo] = useState<DateClickArg>({} as DateClickArg);
    const [clickDateInfo, setClickDateInfo] = useState<Date>();
    const [clickNowDateInfo, setClickNowDateInfo] = useState<string>();

    const [selectDate, setSelectDate] = useState<any>();
    const [cancelId, setCancelId] = useState<any>(0);
    const [cancelType, setCancelType] = useState<any>('');

    const getKoreaTime = (clickDateInfo: Date) => {
        // deep copy issue
        let tempDateInfo: Date = new Date(clickDateInfo);
        tempDateInfo.setHours(tempDateInfo.getHours() - 9);
        let Hours: string = tempDateInfo.getHours().toString();
        if (Hours.length == 1) {
            Hours = '0' + Hours;
        }
        let Minutes: string = tempDateInfo.getMinutes().toString();
        if (Minutes.length == 1) {
            Minutes = '0' + Minutes;
        }
        const time = Hours + ':' + Minutes;
        let year = tempDateInfo.getFullYear().toString();
        let month = (tempDateInfo.getMonth() + 1).toString();
        let day = tempDateInfo.getDate().toString();
        if (year.length == 1) {
            year = '0' + year;
        }
        if (month.length == 1) {
            month = '0' + month;
        }
        if (day.length == 1) {
            day = '0' + day;
        }
        const date = year + '-' + month + '-' + day;
        return [date, time];
    };
    // 이부분 start = work 에서 start = nowDate로 바꾸기
    const getCommuteList = async (selectDate: any) => {
        const username = getUsername();
        // 출근
        const res = await axios.post('commuteList', {
            username: username,
        });
        // 휴가
        const res2 = await axios.post('/hyuga/findByUsername', {
            username: username,
        });
        // 외출
        const res3 = await axios.post('/going/findByUsername', {
            username: username,
        });
        // 출장
        const res4 = await axios.post('/businessTrip/findUsername', {
            username: username,
        });
        // 조퇴

        const res5 = await axios.post('/earlyLeave/findByUsername', {
            username: username,
        });


        const commuteList: commuteAllList[] = res.data;
        const hyugaList: hyugaAllList[] = res2.data;
        const goingList: goingAllList[] = res3.data;
        const businessTripList: goingAllList[] = res4.data;
        const earlyLeaveTripList: goingAllList[] = res5.data;
        const calendarList: any[] = [];
        // 추가 근무
        try {
            const res6 = await axios.post('/chugageunmu', {
                username: username,
            });
            const overTimeTripList: overTiemAllList[] = res6.data.data;

            const useData = overTimeTripList.filter((item:any) => item.useFlag == true);
            console.log('이거 쓰면 됨 :: ', useData);
            useData.map((data) => {
                let temp: any = {};
                const start = new Date(data.overTimeStart);
                const end = new Date(data.overTimeEnd);
                temp['start'] = start;
                temp['end'] = end;
                temp['title'] = '연장근무 ';
                temp['className'] = 'bg-success';
                calendarList.push(temp);
            });
            if(selectDate){
                const [date] = getKoreaTime(selectDate);
                if(eventData.title?.includes('연장')){
                    const filterList = overTimeTripList?.filter(
                        (item: any) => item.nowDate == date && item.username == getUsername() && item.useFlag == true
                    );
                    // console.log('filterList 출력 : ', filterList);
                    setCancelId(filterList[0].id);
                    setCancelType('추가근무');
                }
            }
            // console.log('cccccccc ::: ', overTimeTripList);
        } catch (error) {
            console.log(error);
        }

        const useEarlyList = earlyLeaveTripList.filter((item:any) => item.useFlag == true);

        useEarlyList?.map((data) => {
            let temp: any = {};
            const start = data.updateTime;
            const start2 = data.nowDate;
            const makeStart = start2 + 'T' + start;
            // console.log('조퇴', data)
            temp['start'] = makeStart;
            temp['title'] = '조퇴 ';
            temp['className'] = 'bg-warning';
            calendarList.push(temp);
        });

        const useBusinessList = businessTripList.filter((item:any) => item.useFlag == true);

        useBusinessList?.map((data) => {
            let temp: any = {};
            // updateTime 값 확인
            const start = data.updateTime;
            const start2 = data.nowDate;
            const makeStart = start2 + 'T' + start;
            temp['start'] = makeStart;
            temp['title'] = '출장퇴근 ';
            temp['className'] = 'bg-success';
            calendarList.push(temp);
        });

        const useGoingList = goingList.filter((item:any) => item.useFlag == true);

        useGoingList?.map((data) => {
            let temp: any = {};
            // updateTime 값 확인
            const start = data.updateTime;
            const start2 = data.nowDate;
            // 스케줄 달력 temp start가 요구하는 dateTime 형식으로 가공하여 전달
            const makeStart = start2 + 'T' + start;
            temp['start'] = makeStart;
            temp['title'] = '외출 ';
            temp['className'] = 'bg-warning';
            calendarList.push(temp);
        });
        
        const useHyugaList = hyugaList.filter((item:any) => item.useFlag == true);

        useHyugaList?.map((data) => {
            let temp: any = {};
            const start = new Date(data.nowDate);
            temp['start'] = start;
            temp['title'] = data.money + data.type;
            if (data.money == '유급') {
                temp['className'] = 'bg-success';
            } else {
                temp['className'] = 'bg-light';
            }
            calendarList.push(temp);
        });

        console.log('캘린터 출근 data : ', commuteList);
        commuteList?.map((data) => {
            let temp: any = {};
            let tempNowDate;
            if (data.work) {
                const start = new Date(data.work);
                temp['start'] = start;
                let hours = start.getHours().toString();
                let minutes = start.getMinutes().toString();
                if (hours.length == 1) {
                    hours = '0' + hours;
                }
                if (minutes.length == 1) {
                    minutes = '0' + minutes;
                }

                // temp["title"] = {date : "2022-10-29",};
                temp['title'] = '출근';
                temp['className'] = 'bg-success';
                const nowDate = moment(start);
                temp['nowDate'] = nowDate.format().substring(0, 10);
                tempNowDate = nowDate.format().substring(0, 10);
                calendarList.push(temp);
            }
            temp = {};
            if (data.leave) {
                const start = new Date(data.leave);
                temp['start'] = start;
                let hours = start.getHours().toString();
                let minutes = start.getMinutes().toString();
                if (hours.length == 1) {
                    hours = '0' + hours;
                }
                if (minutes.length == 1) {
                    minutes = '0' + minutes;
                }

                temp['title'] = '퇴근';
                // temp["title"] = hours + ":" + minutes;
                temp['className'] = 'bg-warning';
                temp['nowDate'] = tempNowDate;
                calendarList.push(temp);
            }
        });
        console.log('matchDate : ', selectDate);
        if (selectDate) {
            const [date] = getKoreaTime(selectDate);
            console.log('selectDate 인식 : ', date);
            if (eventData.title?.includes('연차')
                || eventData.title?.includes('반차')
                || eventData.title?.includes('반반차')
                || eventData.title?.includes('국방')
                || eventData.title?.includes('탄력휴무')) {
                const filterList = hyugaList?.filter(
                    (item: any) => item.nowDate == date && item.username == getUsername()
                );
                console.log('filterList 출력 : ', filterList);
                setCancelId(filterList[0].id);
                setCancelType('휴가');

            } else if(eventData.title?.includes('외출')){
                const filterList = goingList?.filter(
                    (item: any) => item.nowDate == date && item.username == getUsername()
                );
                console.log('filterList 출력 : ', filterList);
                setCancelId(filterList[0].id);
                setCancelType('외출');
            }else if(eventData.title?.includes('조퇴')){
                const filterList = earlyLeaveTripList?.filter(
                    (item: any) => item.nowDate == date && item.username == getUsername()
                );
                console.log('filterList 출력 : ', filterList);
                setCancelId(filterList[0].id);
                setCancelType('조퇴');
            }else if(eventData.title?.includes('출장')){
                const filterList = businessTripList?.filter(
                    (item: any) => item.nowDate == date && item.username == getUsername()
                );
                console.log('filterList 출력 : ', filterList);
                setCancelId(filterList[0].id);
                setCancelType('출장');
            }
        } else {
            console.log('selectDate 인식 못함');
        }

        setEvents(calendarList);
    };


    const cancelData = () => {
        const data = {
            'id': cancelId,
            'type': cancelType,
        };
        console.log('cancelData 실행 ::: ', data);

        // axios.patch('/gyeolJae/cancel', data).then((res) => {
        //     console.log('cancelData 취소 생성 요청 성공');
        // });
        return data
    };


    useEffect(() => {
        console.log('cancel params : ', cancelId);
        console.log('cancel params : ', cancelType);
        if (selectDate) {
            console.log('selectDate useEffect : ', selectDate);
            getCommuteList(selectDate);
        }
    }, [selectDate, cancelId, cancelType]);

    useEffect(() => {
        // getHyugaList();
        getCommuteList(selectDate);
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
            events.map((data: any) => {
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
        const selectModalDate = arg.event._instance?.range.start.toISOString().substring(0, 10);
        setEventData(event);
        onOpenModal();
        setIsEditable(true);
        setSelectDate(selectModalDate);
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
        selectDate,
        cancelData,
        cancelId,
        cancelType
    };
}
