import { Row, Col, Card } from 'react-bootstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import MonthlyChart from './MonthlyChart';

// 월별 근로
const Widgets = () => {
    return (
        <>
            <div className="month">
                <Row>
                    <Col>
                        <MonthlyChart />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Widgets;
