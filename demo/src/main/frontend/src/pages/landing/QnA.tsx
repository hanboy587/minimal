import { Row, Col, Table, Card, Button, } from 'react-bootstrap';


const QnA = () => {
    return (
        <>
            <Row classname="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <div>
                                <p>
                                    <strong>1:1 문의하기</strong>
                                </p>
                            </div>
                            <Row>
                                <p>
                                    입력하신 정보를 토대로 전문상담원이 빠른 안내를 도와드립니다.
                                </p>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default QnA;