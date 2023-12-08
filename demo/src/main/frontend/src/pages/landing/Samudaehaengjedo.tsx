import { Row, Col, Table, Card, Button, Container, } from 'react-bootstrap';
import Footer from './Footer';
import NavBar from './NavBar';
import jedo from 'assets/images/jedo.png';
import jedo2 from 'assets/images/jedo2.png';
import { useMediaQuery } from "react-responsive";


// 사무대행제도
const SamudaehaengjedoPc = () => {
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
                                <p style={{ fontSize: "45px" }}>
                                    <strong>사무대행 제도</strong>
                                </p>
                            </div>
                            <Row>
                                <Col xl={6} lg={4} className="py-3">
                                <img src={jedo2} alt="" className="img-fluid"  />
                                </Col>
                                <Col xl={{ span: 5, }} lg={6}>
                                    <p style={{ fontSize: "35px" }}>
                                        나이스 서비스
                                    </p>
                                    <p style={{ fontSize: "22px" }}>
                                        사업주의 보험사무 행정처리 부담을 덜어주고,<br/> 고용 ∙ 산재 ∙ 건강보험의 가입 촉진 및 보험료의 정확한 부과 징수등을 위하여
                                        공단의 인가를 받은 보험사무대행기관이 사업주의 위임을 받아 보험 사무 대행 서비스를 제공하는 것을 말합니다.
                                    </p>

                                    <br />
                                    <Row>
                                        <p style={{ fontSize: "35px" }}>
                                            회원가입대상
                                        </p>
                                        <p style={{ fontSize: "22px" }} className="mb-0">
                                            • 상시근로자 수 30인 미만 사업장
                                        </p>
                                        <p style={{ fontSize: "22px" }}>
                                            • 지원금 산정 기준년도의 전전년도 과세소득 3억원 미만인 사업장 <br />
                                            &nbsp;&nbsp;1. 법인사업자: 법인세법 제4조에 따라 과세소득의 기본이 되는 당기순이익 <br />
                                            &nbsp;&nbsp;2. 개인사업자: 소득세법 제3보 및 제2조에 따른 과세소득 범위 중 사업소득금액
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={{ span: 5, offset: 1 }} lg={6}>
                                    <Row>
                                        <p style={{ fontSize: "35px" }}>
                                            보험사무위탁 범위
                                        </p>
                                        <p style={{ fontSize: "22px" }}>
                                            • 보험관계의 성립·변경·소멸 신고에 관한 업무
                                        </p>
                                        <p style={{ fontSize: "22px" }}>
                                            • 보수총액 및 보험료 신고에 관한 업무
                                        </p>
                                        <p style={{ fontSize: "22px" }}>
                                            • 근로자 고용정보 및 피보험자격 신고에 관한 업무
                                        </p>
                                        <p style={{ fontSize: "22px" }}>
                                            • 그밖에 사업주가 근로복지공단 ∙ 건강보험공단이나 지방고용노동관에 신고 또는 보고해야 할 보험 사무
                                        </p>
                                    </Row>
                                    <br />
                                    <Row>
                                        <p style={{ fontSize: "35px" }}>
                                            보험사무위탁업무무료
                                        </p>
                                        <p style={{ fontSize: "22px" }}>
                                            나이스 는「고용노동부고시 제2021-51호」에 따라, <br />
                                            고용 ∙ 산재 ∙ 건강보험에 가입되어 있는 상시근로자 30인 미만, 전전년도 과세소득 3억원 미만 사업주는 보험사무대행기관에 업무를 위탁하게 되며, <br />
                                            보험사무대행기관에서는 고용 ∙ 산재 ∙ 건강보험에 관련된 각종 신고 및 보고 업무를 무료로 대행해주고 근로복지공단 ∙ 건강보험공단으로부터 교부금을 받아 운영되고 있습니다.
                                        </p>
                                    </Row>
                                </Col>
                                <Col xl={6} lg={4} className="py-5">
                                    <img src={jedo} alt="" className="img-fluid"  />
                                </Col>
                            </Row>
                    </Container>
                </section>
            </Col>
            <div className="mt-3">
                <Footer />
            </div>
        </Row>

        </>
    );
};

const SamudaehaengjedoMobile = () => {
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
                                <p style={{ fontSize: "40px" }}>
                                    <strong>사무대행 제도</strong>
                                </p>
                            </div>
                            <Row>
                                <Col xl={6} lg={4} className="py-3">
                                <img src={jedo2} alt="" className="img-fluid"  />
                                </Col>
                                <Col xl={{ span: 5, }} lg={6}>
                                    <p style={{ fontSize: "25px" }}>
                                        나이스 서비스
                                    </p>
                                    <p style={{ fontSize: "19px" }}>
                                        사업주의 보험사무 행정처리 부담을 덜어주고,<br/> 고용 ∙ 산재 ∙ 건강보험의 가입 촉진 및 보험료의 정확한 부과 징수등을 위하여
                                        공단의 인가를 받은 보험사무대행기관이 사업주의 위임을 받아 보험 사무 대행 서비스를 제공하는 것을 말합니다.
                                    </p>

                                    <br />
                                    <Row>
                                        <p style={{ fontSize: "25px" }}>
                                            회원가입대상
                                        </p>
                                        <p style={{ fontSize: "18px" }} className="mb-0">
                                            • 상시근로자 수 30인 미만 사업장
                                        </p>
                                        <p style={{ fontSize: "18px" }}>
                                            • 지원금 산정 기준년도의 전전년도 과세소득 3억원 미만인 사업장 <br />
                                            <span className="px-1"style={{ fontSize: "16px" }}>1. 법인사업자: 법인세법 제4조에 따라 과세소득의 기본이 되는 당기순이익 <br />
                                           2. 개인사업자: 소득세법 제3보 및 제2조에 따른 과세소득 범위 중 사업소득금액
                                            </span>
                                        </p>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={{ span: 5, offset: 1 }} lg={6}>
                                    <Row>
                                        <p style={{fontSize:"25px"}}>
                                            보험사무위탁 범위
                                        </p>
                                        <p style={{fontSize:"16px"}} className="mb-0">
                                            • 보험관계의 성립·변경·소멸 신고에 관한 업무
                                        </p>
                                        <p style={{fontSize:"16px"}} className="mb-0">
                                            • 보수총액 및 보험료 신고에 관한 업무
                                        </p>
                                        <p style={{fontSize:"16px"}} className="mb-0">
                                            • 근로자 고용정보 및 피보험자격 신고에 관한 업무
                                        </p>
                                        <p style={{fontSize:"16px"}} className="mb-0">
                                            • 그밖에 사업주가 근로복지공단 ∙ 건강보험공단이나 지방고용노동관에 신고 또는 보고해야 할 보험 사무
                                        </p>
                                    </Row>
                                    <br />
                                    <Row>
                                        <p style={{ fontSize: "25px" }}>
                                            보험사무위탁업무 무료
                                        </p>
                                        <p style={{ fontSize: "18px" }}>
                                            나이스 는「고용노동부고시 제2021-51호」에 따라, <br />
                                            고용 ∙ 산재 ∙ 건강보험에 가입되어 있는 상시근로자 30인 미만, 전전년도 과세소득 3억원 미만 사업주는 보험사무대행기관에 업무를 위탁하게 되며, <br />
                                            보험사무대행기관에서는 고용 ∙ 산재 ∙ 건강보험에 관련된 각종 신고 및 보고 업무를 무료로 대행해주고 근로복지공단 ∙ 건강보험공단으로부터 교부금을 받아 운영되고 있습니다.
                                        </p>
                                    </Row>
                                </Col>
                                <Col xl={6} lg={4} className="py-5">
                                    <img src={jedo} alt="" className="img-fluid"  />
                                </Col>
                            </Row>
                    </Container>
                </section>
            </Col>
            <div className="mt-3">
                <Footer />
            </div>
        </Row>

        </>
    );
};



const Samudaehaengjedo = () =>{
     
    // 미디어쿼리
     const isDesktop: boolean = useMediaQuery({
        query: "(min-width:481px) ",
    });
    const isTablet: boolean = useMediaQuery({
        query: " (max-width:480px)",
    });
    

    return(
        <>
        <div>
                <Row>
                    {isDesktop &&
                        < SamudaehaengjedoPc />
                    }
                </Row>
                <Row>
                    {isTablet &&
                       < SamudaehaengjedoMobile  />
                    }
                </Row>
            </div>
        </>
    );
};


export default Samudaehaengjedo;