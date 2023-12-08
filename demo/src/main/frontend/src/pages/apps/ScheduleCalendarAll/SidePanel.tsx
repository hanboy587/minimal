import classNames from 'classnames';
import { externalEvents } from './data';
import { FaVolumeUp } from "react-icons/fa";
import { Row } from 'react-bootstrap';

const SidePanel = () => {
    return (
        <>
        {/* darg and drop code */}
        {/* className="d-none" 으로 숨김처리 */}
            <div id="external-events" className=" d-none m-t-20">
                <br />
                <p className="text-muted">Drag and drop your event or click in the calendar</p>
                external events
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
            </div>

            
        </>
    );
};

export default SidePanel;
