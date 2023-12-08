import { Row, Col, Table, Card, Button, Container, } from 'react-bootstrap';
import Footer from './Footer';
import NavBar from './NavBar';
import sahoe1 from 'assets/images/sahoeboheom1.png';
import sahoe2 from 'assets/images/sahoeboheom2.png';
import { useMediaQuery } from "react-responsive";

const SahoeboheomsingoPc = () => {
    return (
        <>
            <Row className="mt-3">
                <div>
                    <NavBar />
                </div>
                <Col>
                    <section className="py-2">
                        <Container>
                            <div className="mb-3">
                                <p style={{ fontSize:"45px" }}>
                                    <strong>사회보험 신고</strong>
                                </p>
                            </div>
                            <Row>
                                <Col xl={6} lg={4} className="py-1">
                                    <img src={sahoe1} alt="" className="img-fluid" />
                                </Col>
                                <Col xl={{ span: 5, }} lg={6}>
                                    <p style={{ fontSize:"35px" }}>
                                        보험사무대행 인가기관
                                    </p>
                                    <p style={{ fontSize:"22px" }}>
                                        <strong>나이스노무법인</strong>은<br />
                                        ⌜고용보험 및 산업재해보상보험의 보험료징수 등에 관한 법률⌟ 에 따라,
                                        근로복지공단·건강보험공단·국민연금공단에서
                                        4대보험사무대행기관으로 인가 받아 사업주의 보험사무 행정처리 부담을 덜어주고자
                                        4대 사회보험 업무를 지원합니다.
                                    </p>
                                    <br />
                                    <Row>
                                        <p style={{ fontSize:"35px" }}>
                                            신고 자동화
                                        </p>
                                        <p style={{ fontSize:"22px" }} className="mb-0">
                                            보험사무대행기관으로서 전문성을 살려  신고대상 자동 필터,
                                            신고내용 자동완성으로 복잡한 신고를 쉽게 만들어 드립니다.
                                            등록된 근로자 정보와 공단 신고 정보를 결합하여 자격신고 대상자를 추려냅니다.
                                            근로자 정보를 이용하여 신고항목을 자동으로 완성합니다.
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                            <br /><br />
                            <Row className="font-19">
                                <Col xl={{ span: 5, offset: 1 }} lg={6}>
                                    <Row>
                                        <p style={{ fontSize:"35px" }}>
                                            4대보험 공통신고
                                        </p>
                                        <p style={{ fontSize:"22px" }}>
                                            근로복지공단, 국민건강보험공단, 국민연금관리공단에
                                            공통적으로 신고해야 하는 항목들을 한 번에 처리할 수 있습니다. 사업장 성립신고, 근로자 자격 취득 및 상실신고가 가능합니다.
                                        </p>
                                    </Row>
                                    <br />
                                    <Row>
                                        <p style={{ fontSize:"35px" }}>
                                            근로복지공단 신고 및 조회
                                        </p>
                                        <p style={{ fontSize:"22px" }}>
                                            단기근로자 노무제공내용확인신고, 근로자 및 일용근로자 고용정보현황 조회,
                                            민원접수현황 조회, 이직확인서 발급을 할 수 있습니다.
                                        </p>
                                    </Row>
                                </Col>
                                <Col xl={6} lg={4} className="py-5">
                                    <img src={sahoe2} alt="" className="img-fluid" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Col>
            </Row>
            <Row>
                <div>
                    <Footer />
                </div>
            </Row>
        </>
    );
};

const SahoeboheomsingoMobile = () => {
    return (
        <>
            <Row className="mt-3">
                <div>
                    <NavBar />
                </div>
                <Col>
                    <section className="py-2">
                        <Container>
                            <div className="mb-3">
                                <p style={{ fontSize:"35px" }}>
                                    <strong>사회보험 신고</strong>
                                </p>
                            </div>
                            <Row>
                                <Col xl={6} lg={4} className="py-1">
                                    <img src={sahoe1} alt="" className="img-fluid" />
                                </Col>
                                <Col xl={{ span: 5, }} lg={6}>
                                    <p style={{ fontSize:"28px" }}>
                                        보험사무대행 인가기관
                                    </p>
                                    <p style={{ fontSize:"20px" }}>
                                        <strong>나이스노무법인</strong>은<br />
                                        ⌜고용보험 및 산업재해보상보험의 보험료징수 등에 관한 법률⌟ 에 따라,
                                        근로복지공단·건강보험공단·국민연금공단에서
                                        4대보험사무대행기관으로 인가 받아 사업주의 보험사무 행정처리 부담을 덜어주고자
                                        4대 사회보험 업무를 지원합니다.
                                    </p>
                                    <br />
                                    <Row>
                                        <p style={{ fontSize:"28px" }}>
                                            신고 자동화
                                        </p>
                                        <p style={{ fontSize:"20px" }} className="mb-0">
                                            보험사무대행기관으로서 전문성을 살려  신고대상 자동 필터,
                                            신고내용 자동완성으로 복잡한 신고를 쉽게 만들어 드립니다.
                                            등록된 근로자 정보와 공단 신고 정보를 결합하여 자격신고 대상자를 추려냅니다.
                                            근로자 정보를 이용하여 신고항목을 자동으로 완성합니다.
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                            <br /><br />
                            <Row className="font-19">
                                <Col xl={{ span: 5, offset: 1 }} lg={6}>
                                    <Row>
                                        <p style={{ fontSize:"28px" }}>
                                            4대보험 공통신고
                                        </p>
                                        <p style={{ fontSize:"20px" }}>
                                            근로복지공단, 국민건강보험공단, 국민연금관리공단에
                                            공통적으로 신고해야 하는 항목들을 한 번에 처리할 수 있습니다. 사업장 성립신고, 근로자 자격 취득 및 상실신고가 가능합니다.
                                        </p>
                                    </Row>
                                    <br />
                                    <Row>
                                        <p style={{ fontSize:"28px" }}>
                                            근로복지공단 신고 및 조회
                                        </p>
                                        <p style={{ fontSize:"20px" }}>
                                            단기근로자 노무제공내용확인신고, 근로자 및 일용근로자 고용정보현황 조회,
                                            민원접수현황 조회, 이직확인서 발급을 할 수 있습니다.
                                        </p>
                                    </Row>
                                </Col>
                                <Col xl={6} lg={4} className="py-5">
                                    <img src={sahoe2} alt="" className="img-fluid" />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Col>
            </Row>
            <Row>
                <div>
                    <Footer />
                </div>
            </Row>
        </>
    );
};


const Sahoeboheomsingo = () =>{
     
    // 미디어쿼리
     const isDesktop: boolean = useMediaQuery({
        query: "(min-width:576px) ",
    });
    const isTablet: boolean = useMediaQuery({
        query: " (max-width:575px)",
    });
    

    return(
        <>
        <div>
                <Row>
                    {isDesktop &&
                        < SahoeboheomsingoPc />
                    }
                </Row>
                <Row>
                    {isTablet &&
                       < SahoeboheomsingoMobile  />
                    }
                </Row>
            </div>
        </>
    );
};

export default Sahoeboheomsingo;