import { Row, Col } from 'react-bootstrap';
import { HyperDatepicker } from 'components';
import Statistics from './Statistics';
import SessionsChart from './SessionsChart';
import CountrySessionsChart from './CountrySessionsChart';
import ViewsChart from './ViewsChart';
import BrowsersChart from './BrowsersChart';
import OsChart from './OsChart';
import Channels from './Channels';
import Social from './Social';
import Engagement from './Engagement';
import { useDatePicker } from 'hooks';


//main(사) 
const AnalyticsDashboard = () => {
    const { selectedDate, onDateChange } = useDatePicker();
    return (
        <>
            <Row>
                <Col>
                    <h4 className="page-title mt-3 mb-3"></h4>
                </Col>
            </Row>

            <Row>
                <Col>
                    <BrowsersChart />
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <Engagement />
                </Col>
            </Row>

        </>
    );
};

export { AnalyticsDashboard };
