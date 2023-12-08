import { Card, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { CardTitle } from 'components';
import { MoneyRecord } from './types';
import { Link } from 'react-router-dom';

const MoneyHistory = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="page-title">업무현황
                    <Link to="/ui/extended/ratings" className="float-end text-black font-15   mdi mdi-chevron-double-right">
                        더보기
                    </Link>
                </h4>
                <Row>
                    <Col md={3}>
                        <Card className="my-1 shadow-none border">
                            <div className="p-2">
                                <Row className="align-items-center">
                                    <div className="col-auto text-danger">
                                        진행중
                                    </div>
                                    <div className="col ps-0">
                                        <p className="text-info fw-bold mb-0 text-center font-18">
                                            이직확인서
                                        </p>
                                        <p className="mb-0 text-center">나이스</p>
                                    </div>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="my-1 shadow-none border">
                            <div className="p-2">
                                <Row className="align-items-center">
                                    <div className="col-auto text-danger">
                                        완료
                                    </div>
                                    <div className="col ps-0">
                                        <p className="text-info fw-bold mb-0 text-center font-18">
                                            4대보험 상실신고서
                                        </p>
                                        <p className="mb-0 text-center">나이스</p>
                                    </div>
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default MoneyHistory;
