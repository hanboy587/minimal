import { Container, Row, Col, Card } from 'react-bootstrap';
import classNames from 'classnames';
import { Service } from './types';
import officecheck from 'assets/images/officecheck.png';
import peoplecheck from 'assets/images/peoplecheck.png';
import peopleloss from 'assets/images/peopleloss.png';
import peopletogether from 'assets/images/peopletogether.png';
import paper from 'assets/images/paper.png';
import paper2 from 'assets/images/paper2.png';
import { useMediaQuery } from "react-responsive";


const ServicesPc = () => {
    return (
        <>
            <section className="py-3">
                <Container>
                    <Row>
                        <Col xl={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={officecheck} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>사업장 성립신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        4대보험을 적용받기 위해 <br />공단에 사업장을 신고하는 업무
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={peoplecheck} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>근로자 취득신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        4대보험 가입(취득)신고<br />하기 위해 작성하는 업무
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={peopleloss} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>근로자 상실신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        4대보험에 자격상실 신고<br />하기 위해 작성하는 업무
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={paper2} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>근로내용확인신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        근로자의 근로 내용을 <br /> 확인하기 위하여 작성하는 문서
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={peopletogether} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>근로자고용정보</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        사업주가 고용하고 있는 각 근로자의 <br /> 개인정보 및 고용 정보에 대한 문서
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={paper} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>이직확인서 발급</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        회사를 떠난 또는 회사를 그만둔 <br /> 내용에 대한  확인서
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    );
};

const ServicesMobile = () => {
    return (
        <>
            <section className="py-3">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={officecheck} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>사업장 성립신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        4대보험을 적용받기 위해 <br />공단에 사업장을 신고하는 업무
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={peoplecheck} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>근로자 취득신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        4대보험 가입(취득)신고<br />하기 위해 작성하는 업무
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={peopleloss} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>근로자 상실신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        4대보험에 자격상실 신고<br />하기 위해 작성하는 업무
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={paper2} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>근로내용확인신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        근로자의 근로 내용을 <br /> 확인하기 위하여 작성하는 문서
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={peopletogether} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>근로자고용정보</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        사업주가 고용하고 있는 각 근로자의 <br /> 개인정보 및 고용 정보에 대한 문서
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={paper} alt="" className="img-fluid" style={{ width: "150px" }} />
                                    <p className="mt-2" style={{ fontSize: "25px" }}> <strong>이직확인서 발급</strong></p>
                                    <p className="mt-1" style={{ fontSize: "16px" }}>
                                        회사를 떠난 또는 회사를 그만둔 <br /> 내용에 대한  확인서
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    );
};

const ServicesMobile2 = () => {
    return (
        <>
            <section className="py-3">
                <Container>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={officecheck} alt="" className="img-fluid" style={{ width: "125px" }} />
                                    <p className="mt-2" style={{ fontSize: "20px" }}> <strong>사업장 성립신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "12px" }}>
                                        4대보험을 적용받기 위해 <br />공단에 사업장을 신고하는 업무
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={peoplecheck} alt="" className="img-fluid" style={{ width: "125px" }} />
                                    <p className="mt-2" style={{ fontSize: "20px" }}> <strong>근로자 취득신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "12px" }}>
                                        4대보험 가입(취득)신고<br />하기 위해 작성하는 업무
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={peopleloss} alt="" className="img-fluid" style={{ width: "125px" }} />
                                    <p className="mt-2" style={{ fontSize: "20px" }}> <strong>근로자 상실신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "12px" }}>
                                        4대보험에 자격상실 신고<br />하기 위해 작성하는 업무
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={paper2} alt="" className="img-fluid" style={{ width: "125px" }} />
                                    <p className="mt-2" style={{ fontSize: "20px" }}> <strong>근로내용확인신고</strong></p>
                                    <p className="mt-1" style={{ fontSize: "12px" }}>
                                        근로자의 근로 내용을 <br /> 확인하기 위하여 작성하는 문서
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={peopletogether} alt="" className="img-fluid" style={{ width: "125px" }} />
                                    <p className="mt-2" style={{ fontSize: "20px" }}> <strong>근로자고용정보</strong></p>
                                    <p className="mt-1" style={{ fontSize: "11px" }}>
                                        사업주가 고용하고 있는 근로자의 <br /> 개인정보 및 고용 정보 문서
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card>
                                <Card.Body className="text-center">
                                    <img src={paper} alt="" className="img-fluid" style={{ width: "125px" }} />
                                    <p className="mt-2" style={{ fontSize: "20px" }}> <strong>이직확인서 발급</strong></p>
                                    <p className="mt-1" style={{ fontSize: "12px" }}>
                                        회사를 떠난 또는 회사를 그만둔 <br /> 내용에 대한  확인서
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </section>
        </>
    );
};




const Services = () => {

    // 미디어쿼리
    const isDesktop: boolean = useMediaQuery({
        query: "(min-width:1200px)",
    });
    const isTablet: boolean = useMediaQuery({
        query: "(min-width:992px) and (max-width:1199px)",
    });
    const isTablet2: boolean = useMediaQuery({
        query: " (max-width:991px)",
    });
    
    return (

        <>
            <div>
                <Row>
                    {isDesktop &&
                        < ServicesPc />
                    }
                </Row>
                <Row>
                    {isTablet &&
                       < ServicesMobile />
                    }
                </Row>
                 <Row>
                    {isTablet2 &&
                       < ServicesMobile2 />
                    }
                </Row>
            </div>
            
        </>
    );
};

export default Services;
