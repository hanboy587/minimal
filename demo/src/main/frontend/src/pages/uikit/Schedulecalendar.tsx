import { Row, Col, Card, Button } from 'react-bootstrap';
import '@fullcalendar/react';
import { PageTitle } from 'components';
// import FullCalendarWidget from '/FullCalendarWidget';
import FullCalendarWidget from '../../pages/apps/Calendar/FullCalendarWidget';
import AddEditEvent from '../../pages/apps/Calendar/AddEditEvent';
import { useCalendar } from '../../pages/apps/Calendar/hooks';
import SidePanel from '../../pages/apps/Calendar/SidePanel';
import { useEffect } from 'react';

const Schedulecalendar = () => {
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
  } = useCalendar();
  return (
    <>
      <PageTitle
        breadCrumbItems={[
        ]}
        title={'스케줄'}
      />
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row>
                <Col xl={3}>
                  <div className="d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      id="CalenderBtn"
                      style={{ borderRadius: "5px" }}
                    >
                      저장
                    </Button>
                    <br />
                    {/* add events */}
                    <Button
                      className="btn btn-lg font-16 btn-danger"
                      id="btn-new-event"
                      style={{ borderRadius: "5px", }}
                      onClick={onOpenModal}
                    >
                      <i className="mdi mdi-plus-circle-outline"></i> 등록
                    </Button>
                  </div>

                  <SidePanel />
                </Col>
                <Col xl={9}>
                  {/* fullcalendar control */}
                  <p>test</p>
                  <FullCalendarWidget
                    onDateClick={onDateClick}
                    onEventClick={onEventClick}
                    onDrop={onDrop}
                    onEventDrop={onEventDrop}
                    events={events}
                  />
                  <p>test2</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* add new event modal */}
      {isOpen ? (
        <>
          test
          <AddEditEvent
            isOpen={isOpen}
            onClose={onCloseModal}
            isEditable={isEditable}
            eventData={eventData}
            onUpdateEvent={onUpdateEvent}
            onRemoveEvent={onRemoveEvent}
            onAddEvent={onAddEvent}
          />
        </>
      ) : null}
    </>
  )
};

export default Schedulecalendar;
//ReactDOM.render(<App />, document.querySelector('my-app'));