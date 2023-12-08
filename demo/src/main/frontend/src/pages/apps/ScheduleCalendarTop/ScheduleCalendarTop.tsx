import { Row, Col, Card, Button } from 'react-bootstrap';
import '@fullcalendar/react';
import { PageTitle } from 'components';
import FullCalendarWidget from './FullCalendarWidget';
import AddEditEvent from './AddEditEvent';
import { useCalendar } from './hooks';
import SidePanel from './SidePanel';
import { useEffect } from 'react';


// topbar 인사용 근태결재 부분 수정사항생길시 기존 ScheduleCalendar 와 같이 수정요망
const ScheduleCalendarTop = () => {
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
        selectDate,
        cancelId,
        cancelType
    } = useCalendar();

    useEffect(() => {
        // console.log("---------------------------events : ", events);
    }, [events]);

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'스케줄 달력'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xl={3}>
                                    <div className="d-grid">
                                    </div>
                                    <SidePanel />
                                </Col>
                                <Col xl={9}>
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
                    cancelId={cancelId}
                    cancelType={cancelType}
                    selectDate={selectDate}
                />
            ) : null}
        </>
    );
};

export { ScheduleCalendarTop };
