import { Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import GeubyeoReportOlhaeGeubyeo from './GeubyeoReportOlhaeGeubyeo';
import GeubyeoReportOlhaeGeubSangyeo from './GeubyeoReportOlhaeGeubSangyeo';
import GeubyeoReportYesangYeonBong from './GeubyeoReportYesangYeonBong';
import GeubyeoReportLastYearsYeonBong from './GeubyeoReportLastYearsYeonBong';
import GeubyeoReportbuseoyeonbong from './GeubyeoReportbuseoyeonbong';

const GeubyeoReport = () => {

    return (
        <>
            <Row className="mt-3">
                <Card>
                    <Card.Body>
                        <Row className="mt-3">
                            <GeubyeoReportLastYearsYeonBong />
                        </Row>
                        <Row className="mt-4">
                            <GeubyeoReportYesangYeonBong />
                        </Row>
                        <Row className="mt-3 ">
                            <Col xs={6}>
                                <GeubyeoReportOlhaeGeubyeo />
                            </Col>
                            <Col xs={6}>
                                <GeubyeoReportOlhaeGeubSangyeo />
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <GeubyeoReportbuseoyeonbong />
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
};

export default GeubyeoReport;