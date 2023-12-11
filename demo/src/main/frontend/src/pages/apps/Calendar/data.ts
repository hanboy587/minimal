import { EventInput } from '@fullcalendar/react';

const defaultEvents: EventInput[] = [
    // 달력안에 았는 임시데이터들
    // {
    //     id: '1',
    //     title: 'Interview - Backend Engineer',
    //     start: new Date(),
    //     className: 'bg-success',
    // },
    // {
    //     id: '2',
    //     title: 'Phone Screen - Frontend Engineer',
    //     start: new Date().setDate(new Date().getDate() + 2),
    //     className: 'bg-info',
    // },
    // {
    //     id: '3',
    //     title: 'Meeting with John Deo',
    //     start: new Date().setDate(new Date().getDate() + 2),
    //     end: new Date().setDate(new Date().getDate() + 4),
    //     className: 'bg-warning',
    // },
    // {
    //     id: '4',
    //     title: 'Buy a Theme',
    //     start: new Date().setDate(new Date().getDate() + 4),
    //     end: new Date().setDate(new Date().getDate() + 5),
    //     className: 'bg-primary',
    // },
];

// external events
// 출근
const externalEvents = [
    {
        id: 1,
        textClass: 'text-white',
        className: 'bg-warning chulgeun1',
        title: '08:00',
    },
    {
        id: 2,
        textClass: 'text-white',
        className: 'bg-warning chulgeun2',
        title: '08:30',
    },
    {
        id: 3,
        textClass: 'text-white',
        className: 'bg-warning chulgeun3',
        title: '09:00',
    },
    {
        id: 4,
        textClass: 'text-white',
        className: 'bg-warning chulgeun4',
        title: '09:30',
    },
];

// 퇴근
const externalEvents2 = [

    {
        id: 5,
        textClass: 'text-white',
        className: 'bg-success toegeun1',
        title: '16:30',
    },
    {
        id: 6,
        textClass: 'text-white',
        className: 'bg-success toegeun2',
        title: '17:00',
    },
    {
        id: 7,
        textClass: 'text-white',
        className: 'bg-success toegeun3',
        title: '17:30',
    },
    {
        id: 8,
        textClass: 'text-white',
        className: 'bg-success toegeun4',
        title: '18:00',
    },
];

// 연차
const externalEvents3 = [

    {
        id: 9,
        textClass: 'text-white',
        className: 'bg-madegreen yeoncha1',
        title: '08:30 ~ 18:00',
    },
    
];

// 반차
const externalEvents4 = [

    {
        id: 10,
        textClass: 'text-white',
        className: 'bg-madeblue bancha1',
        title: '08:30',
    },
    {
        id: 11,
        textClass: 'text-white',
        className: 'bg-madeblue bancha2',
        title: '13:30',
    },
    
];

// 반반차
const externalEvents5 = [

    {
        id: 12,
        textClass: 'text-white',
        className: 'bg-madepink banbancha1',
        title: '02:00',
    },
    
];
export { defaultEvents, externalEvents, externalEvents2, externalEvents3, externalEvents4, externalEvents5 };
