import FullCalendar from '@fullcalendar/react';
import { EventClickArg, EventDropArg } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg, DropArg } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import BootstrapTheme from '@fullcalendar/bootstrap';
import { EventInput } from '@fullcalendar/core/index.js';
import axios from 'axios';
import { useEffect, useState } from 'react';


import Select from 'react-select';


// hook 호출
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type FullCalendarWidgetProps = {
    onDateClick: (value: DateClickArg) => void;
    onEventClick: (value: EventClickArg) => void;
    onEventDrop: (value: EventDropArg) => void;
    onDrop: (value: DropArg) => void;
    events: Array<EventInput>;
};


const changeSelectName = (e: any) => {
    // axios 일정 조회 파라미터 실어주기
    axios.post('aaaa',{
        // select value 값
    })
  };

const useSelectList = () => {
        const [ userList, setUserList ] = useState({
            label: 0,
            value: '',
        });
        let testList = [{
            label: '',
            value: '',
        }]
        axios.get('/users',
            {params:{businessNumber:'2248167722'}})
            .then(res => {
                for(let i = 0; i < 20; i++){
                    testList.push({
                        label: res.data[i].realname,
                        value: res.data[i].realname,
                    })
                }
        })
        return (
            <Select
                placeholder="직원명"
                options={testList}
                onChange={changeSelectName}
                className="react-select"
                classNamePrefix="react-select"
            ></Select>
        )
         

    }
        
        


// function treeViewitem() {
//     return TreeViewitem();  
// } 

const FullCalendarWidget = ({ onDateClick, onEventClick, onDrop, onEventDrop, events }: FullCalendarWidgetProps) => {
    return (
        <>
            {/* full calendar control */}
            <div id="calendar">
                {/* {SelectUser()} */}
                {useSelectList()}
                <Select
                            placeholder="직원명"
                            isMulti={true}
                            options={[
                                {
                                    label: '개발팀',
                                    options: [
                                        { value: 'AD', label: 'Andrea' },
                                        { value: 'DL', label: 'Danielle' },
                                        { value: 'JH', label: 'John' },
                                    ],
                                },
                                {
                                    label: '사무팀',
                                    options: [
                                        { value: 'ST', label: 'Steven' },
                                        { value: 'MC', label: 'Michael' },
                                    ],
                                },
                                {
                                    label: '관리팀',
                                    options: [
                                        { value: 'SR', label: 'Sharon' },
                                        { value: 'TM', label: 'Timothy' },
                                        { value: 'FD', label: 'Frederick' },
                                        { value: 'HN', label: 'Henry' },
                                    ],
                                },
                            ]}
                            className="react-select"
                            classNamePrefix="react-select"
                        ></Select>

                <br/>
                <br/>
                <p>aaa</p>


                <Dropdown>
                    <Dropdown.Toggle as={Link} to="#" className="btn btn-link" id="dropdown-basic" style={{color:"#C6C6C6",fontWeight:"bolder", outline: "none" }}>
                                            서비스안내
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/Seobiseusogae" >서비스소개</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/Samudaehaengjedo">사무대행제도</Dropdown.Item>
                    </Dropdown.Menu>                        
                    </Dropdown>

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

    let hours = time.getHours().toString();
    if (hours.length == 1) {
        hours = "0" + hours;
    }
    let minutes = time.getMinutes().toString();
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }
    return (
        <>
            <div style={{width: "100%", display:"flex",justifyContent : "space-between"}}>
                <div>{eventInfo.event.title}</div>
                <div>{hours + ":" + minutes}</div>
            </div>
        </>
    )
};
