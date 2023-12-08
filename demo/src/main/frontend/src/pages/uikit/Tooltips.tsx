import { Link } from 'react-router-dom';
import { Row, Col, Card, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { PageTitle } from 'components';
import { PopoverDirection } from './types';
import DailyChart from './DailyChart';


// 일별 근로

const Tooltips = () => {
    return (
        <>
            <div className="oneday">
                <Row>
                    <Col>
                        <DailyChart />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Tooltips;
