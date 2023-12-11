import { EventInput } from '@fullcalendar/react';

//  className="d-none" 으로 data숨김처리 함
// 기존코드는 className="bg-danger" 등 배경 bg- + '색상' 임
const defaultEvents: EventInput[] = [
    {
        id: '1',
        title: 'Interview - Backend Engineer',
        start: new Date(),
        className: 'd-none',
    },
    {
        id: '2',
        title: 'Phone Screen - Frontend Engineer',
        start: new Date().setDate(new Date().getDate() + 2),
        className: 'd-none',
    },
    {
        id: '3',
        title: 'Meeting with John Deo',
        start: new Date().setDate(new Date().getDate() + 2),
        end: new Date().setDate(new Date().getDate() + 4),
        className: 'd-none',
    },
    {
        id: '4',
        title: 'Buy a Theme',
        start: new Date().setDate(new Date().getDate() + 4),
        end: new Date().setDate(new Date().getDate() + 5),
        className: 'd-none',
    },
];

// external events
const externalEvents = [
    {
        id: 1,
        textClass: 'text-success',
        className: 'd-none',
        title: 'New Theme Release',
    },
    {
        id: 2,
        textClass: 'text-info',
        className: 'd-none',
        title: 'My Event',
    },
    {
        id: 3,
        textClass: 'text-warning',
        className: 'd-none',
        title: 'Meet manager',
    },
    {
        id: 4,
        textClass: 'text-danger',
        className: 'd-none',
        title: 'Create New theme',
    },
];

export { defaultEvents, externalEvents };
