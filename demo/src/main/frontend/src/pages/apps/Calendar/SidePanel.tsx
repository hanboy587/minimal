import classNames from 'classnames';
import { externalEvents, externalEvents2, externalEvents3, externalEvents4, externalEvents5 } from './data';
import { Button, } from 'react-bootstrap';
// import { eventTupleToStore } from '@fullcalendar/react';

const SidePanel = () => {
    return (
        <>
            <div id="external-events" className="m-t-20">
                <br />
                <p className="text-muted font-18 text-center">※ 원하는 날짜에 끌어당겨 쓰세요</p>
                <p className="text-muted font-18">• 출근</p>
                {/* external events */}
                {(externalEvents || []).map((event, index) => {
                    return (
                        <div
                            key={index.toString()}
                            className={classNames('external-event', event.className + '-lighten', event.textClass)}
                            title={event.title}
                            data-class={event.className}
                        >
                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle"></i>
                            {event.title}
                        </div>
                    );
                })} 
                <p className="text-muted font-18">• 퇴근</p>
                {(externalEvents2 || []).map((event, index) => {
                    return (
                        <div
                            key={index.toString()}
                            className={classNames('external-event', event.className + '-lighten', event.textClass)}
                            title={event.title}
                            data-class={event.className}
                        >
                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle"></i>
                            {event.title}
                        </div>
                    );
                })} 
                <p className="text-muted font-18">• 연차</p>
                {(externalEvents3 || []).map((event, index) => {
                    return (
                        <div
                            key={index.toString()}
                            className={classNames('external-event', event.className + '-lighten', event.textClass)}
                            title={event.title}
                            data-class={event.className}
                        >
                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle"></i>
                            {event.title}
                        </div>
                    );
                })} 
                <p className="text-muted font-18">• 반차</p>
                {(externalEvents4 || []).map((event, index) => {
                    return (
                        <div
                            key={index.toString()}
                            className={classNames('external-event', event.className + '-lighten', event.textClass)}
                            title={event.title}
                            data-class={event.className}
                        >
                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle"></i>
                            {event.title}
                        </div>
                    );
                })} 
                <p className="text-muted font-18">• 반반차</p>
                {(externalEvents5 || []).map((event, index) => {
                    return (
                        <div
                            key={index.toString()}
                            className={classNames('external-event', event.className + '-lighten', event.textClass)}
                            title={event.title}
                            data-class={event.className}
                        >
                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle"></i>
                            {event.title}
                        </div>
                    );
                })} 
            </div>
        </>
    );
};

export default SidePanel;
