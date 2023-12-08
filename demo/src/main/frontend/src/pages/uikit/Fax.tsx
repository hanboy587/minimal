import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import FaxForm from './FaxForm';
import FaxList from './FaxList';

const Fax = () => {
    return (
        <>
            <Card className="mt-3">
                <Card.Body>
                    <Row>
                        <p style={{fontSize:"18px"}}>FAX 전송 횟수 :&nbsp;
                            <span style={{color:"skyblue"}}>1000</span> p
                        </p>
                    </Row>
                    <Row>
                        <Col xl={4}>
                            <FaxForm />
                        </Col>
                        <Col xl={8}>
                            <FaxList />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </>
    );
};

export default Fax;