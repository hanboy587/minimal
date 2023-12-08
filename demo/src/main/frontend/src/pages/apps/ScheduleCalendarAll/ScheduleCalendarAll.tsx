import { Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import '@fullcalendar/react';
import { PageTitle } from 'components';
import FullCalendarWidget from './FullCalendarWidget';
import AddEditEvent from './AddEditEvent';
import { useCalendar } from './hooks';
import SidePanel from './SidePanel';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ScheduleCalendarAll = () => {
    const {
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
    } = useCalendar();

    useEffect(() => {
    }, [events]);

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'스케줄 선택 조회'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xl={0}>
                                    
                                    <SidePanel />
                                </Col>
                                <Col xl={12}>
                                    {/* fullcalendar control */}
                                    <FullCalendarWidget
                                        onDateClick={onDateClick}
                                        onEventClick={onEventClick}
                                        onDrop={onDrop}
                                        onEventDrop={onEventDrop}
                                        events={events}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* add new event modal */}
            {isOpen ? (
                <AddEditEvent
                    isOpen={isOpen}
                    onClose={onCloseModal}
                    isEditable={isEditable}
                    eventData={eventData}
                    onUpdateEvent={onUpdateEvent}
                    onRemoveEvent={onRemoveEvent}
                    onAddEvent={onAddEvent}
                    dateInfo={dateInfo}
                    clickDateInfo={clickDateInfo}
                    setClickDateInfo={setClickDateInfo}
                    clickNowDateInfo={clickNowDateInfo}
                />
            ) : null}
        </>
    );
};

export { ScheduleCalendarAll };
