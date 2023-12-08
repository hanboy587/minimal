import { Row, Col, Card } from 'react-bootstrap';
import { PageTitle } from 'components';
import WeeklyChart from './WeeklyChart';

const Typography = () => {
    // 주별 근로
    return (
        <>
            <div className="week">
                <Row>
                    <Col>
                        <WeeklyChart />
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Typography;
