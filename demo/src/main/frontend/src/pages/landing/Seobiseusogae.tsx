import { Row, Col, Table, Card, Button, Container, } from 'react-bootstrap';
import Solution from 'assets/images/Solution.png';
import Footer from './Footer';
import NavBar from './NavBar';


const Seobiseusogae = () => {
    return (
        <>
            <div>
                <Row className="mt-3">
                    <div>
                        <NavBar />
                    </div>
                    <section className="py-5">
                        <Container>
                            <div>
                                <Row>
                                    <Col xl={{ span: 6, offset: 1 }}>
                                        <h2 style={{ color: "gray" }}>서비스 소개</h2>
                                        <br />
                                        <p style={{ fontSize: "22px" }} className="mb-2">
                                            나이스는 <strong>⌜고용노동부고시 제2021-51호⌟ </strong> 에 따라, <br />
                                            근로 복지공단·건강보험공단에서 4대보험사무대행기관으로 <br />
                                            인가 받아 사업주의 보험사무 행정처리 부담을 덜어주고자 <br />
                                            4대 사회보험 업무를 제공합니다.
                                        </p>
                                        <br /><br />
                                        <p style={{ fontSize: "20px" }}>
                                            근로자가 1명이라도 있을 경우 4대사회보험에 의무로
                                            가입해야하며, <br /> 각종 신고 의무가 발생합니다.
                                        </p>
                                        <p style={{ fontSize: "20px" }}>
                                            상시 근로자 수 30인 미만, 전전년도 과세소득 3억원 미만의 사업장의 경우 <br />
                                            고용·산재·건강보험에 가입되어 있거나, 가입신청을 원하는 모든 사업주는 <br />
                                            나이스 노무법인에서 관련 신고 업무를 무료로 대행해드립니다.
                                        </p>
                                        <p style={{ fontSize: "20px" }}>
                                            또한 전문 상담원을 통해 쉽고 빠르게 업무를 처리하고 <br />
                                            궁금한 점을 해결할 수 있도록 1:1 상담을 지원합니다. <br />
                                        </p>
                                        <p style={{ fontSize: "20px" }}>
                                            어렵고 복잡한 4대사회보험신고를 나이스 노무법인에서 체계적으로 <br />
                                            관리하여 업무의 효율을 높일 수 있습니다. <br />
                                        </p>
                                    </Col>
                                    <Col xl={5}>
                                        <img src={Solution} alt="" className="img-fluid" />
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </section>
                    {/* <hr /> */}
                    {/* <div className="mb-3 mt-3">
                        <Row className="mb-3  px-3">
                            <Col xl={2} className="mb-3">
                                <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                    </div>
                                    <p className="mb-0" style={{ fontSize: "17px", }}> 사업장 관련신고</p>
                                </div>
                            </Col>
                            <Col xl={2} className="mb-3">
                                <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                    <div className="flex-shrink-0 me-2">
                                        <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                    </div>
                                    <p className="mb-0" style={{ fontSize: "17px", }}> 근로자 관련신고 </p>
                                </div>
                            </Col>
                            <Col xl={2} className="mb-3">
                                <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                    <div className="flex-shrink-0 me-3">
                                        <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                    </div>
                                    <p className="mb-0" style={{ fontSize: "17px", }}> 보수총액신고 및 안내 </p>
                                </div>
                            </Col>
                            <Col xl={2} className="mb-3">
                                <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                    <div className="flex-shrink-0 me-3">
                                        <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                    </div>
                                    <p className="mb-0" style={{ fontSize: "17px", }}>고용∙산재∙건강보험료 조회 및 납부확인</p>
                                </div>
                            </Col>
                            <Col xl={2} className="mb-3">
                                <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                    <div className="flex-shrink-0 me-3">
                                        <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                    </div>
                                    <p className="mb-0" style={{ fontSize: "17px", }}> 각종 신고내역 관리</p>
                                </div>
                            </Col>
                            <Col xl={2} className="mb-3">
                                <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                    <div className="flex-shrink-0 me-3">
                                        <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                    </div>
                                    <p className="mb-0" style={{ fontSize: "17px", }}> 기업지원금 신청 및 안내</p>
                                </div>
                            </Col>
                        </Row>
                    </div> */}
                    <div className="mt-3">
                        <Footer />
                    </div>
                </Row >
            </div>
        </>
    );
};

export default Seobiseusogae;