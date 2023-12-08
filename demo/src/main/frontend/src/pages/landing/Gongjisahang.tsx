import { Row, Col, Table, Card, Button, } from 'react-bootstrap';


const Gongjisahang = () => {
    return (
        <>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <div>
                                <p>
                                    <strong>공지사항</strong>
                                </p>
                            </div>
                            <Row>
                                <p>
                                    다양한 정보와 새로운 소식을 만나보세요
                                </p>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Gongjisahang;