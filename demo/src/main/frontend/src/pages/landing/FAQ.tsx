import { Container, Row, Col } from 'react-bootstrap';
import { FAQs, FAQItem } from 'components';
import { colors } from 'react-select/dist/declarations/src/theme';
import { useMediaQuery } from "react-responsive";

type FAQProps = {
    rawFaqs: FAQItem[];
};

const FAQPc = ({ rawFaqs }: FAQProps) => {
    return (
        <section className="py-5">
            <Container>
                <Row className="mb-2">
                    <Col>
                        <div className="text-center">
                            <h1 className="mt-0">
                                <i className="mdi mdi-frequently-asked-questions"></i>
                            </h1>
                            <p style={{fontSize:"30px"}}>자주하는질문</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={6} className="mb-3">
                        <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                            Q. 보험사무대행 서비스란 무엇인가요?
                        </p>
                        <p style={{ fontSize: "18px", color: "#C0C0C0" }}>
                            사업주의 보험사무 행정처리 부담을 덜어주고, 고용·산재보험의 가입촉진 및 보험료의 정확한 부과·징수 등을 위하여
                            공단의 인가를 받은 보험사무대행기관이 사업주의 위임을 받아 보험사무를 대행하는 서비스입니다.
                        </p>
                    </Col>
                    <Col md={6} className="mb-3">

                        <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                            Q. 보험사무 대행의 대상 업무는 무엇인가요?
                        </p>
                        <p style={{ fontSize: "18px", color: "#C0C0C0" }}>
                            보수총액 및 보험료의 신고, 피보험자의 자격 관리에 관한 사무, 보험관계의 성립ㆍ변경ㆍ소멸의 신고,
                            그 밖에 사업주가 지방노동관서 또는 공단에 대하여 하여야 할 보험에 관한 사무입니다.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={6} className="mb-3">
                        <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                            Q. 4대보험 서비스 이용 비용은 얼마인가요?
                        </p>
                        <p style={{ fontSize: "18px", color: "#C0C0C0" }}>
                            나이스노무법인은 「고용노동부고시 제2021-51호」에 따라,
                            고용 ∙ 산재 ∙ 건강보험 ∙ 국민연금에 가입되어 있는 상시근로자 30인 미만, 전전년도 과세소득 3억원 미만 사업주에게
                            고용 ∙ 산재 ∙ 건강보험 ∙ 국민연금에 관련된 각종 신고 및 보고 업무를 무료로 대행해주고
                            근로복지공단 ∙ 건강보험공단으로부터 교부금을 받아 운영되고 있습니다.
                        </p>
                    </Col>
                    <Col md={6} className="mb-3">
                        <p style={{ fontSize: "22px", fontWeight: "bold" }}>
                            Q. 4대보험 서비스 이용 하는 방법은?
                        </p>
                        <p style={{ fontSize: "18px",  color:"#C0C0C0"  }}>
                        회원가입 -{'>'}사업장 정보 입력 -{'>'} 사무위탁
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const FAQMobile = ({ rawFaqs }: FAQProps) => {
    return (
        <section className="py-5">
            <Container>
                <Row className="mb-2">
                    <Col>
                        <div className="text-center">
                            <h1 className="mt-0">
                                <i className="mdi mdi-frequently-asked-questions"></i>
                            </h1>
                            <p style={{fontSize:"30px"}}>자주하는질문</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={6} className="mb-3">
                        <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                            Q. 보험사무대행 서비스란 무엇인가요?
                        </p>
                        <p style={{ fontSize: "16px", color: "#C0C0C0" }}>
                            사업주의 보험사무 행정처리 부담을 덜어주고, <br /> 고용·산재보험의 가입촉진 및 보험료의 정확한 부과·징수 등을 위하여
                            공단의 인가를 받은 보험사무대행기관이 사업주의 위임을 받아 보험사무를 대행하는 서비스입니다.
                        </p>
                    </Col>
                    <Col md={6} className="mb-3">

                        <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                            Q. 보험사무 대행의 대상 업무는 무엇인가요?
                        </p>
                        <p style={{ fontSize: "16px", color: "#C0C0C0" }}>
                            보수총액 및 보험료의 신고, 피보험자의 자격 관리에 관한 사무, 보험관계의 성립ㆍ변경ㆍ소멸의 신고,
                            그 밖에 사업주가 지방노동관서 또는 공단에 대하여 하여야 할 보험에 관한 사무입니다.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={6} className="mb-3">
                        <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                            Q. 4대보험 서비스 이용 비용은 얼마인가요?
                        </p>
                        <p style={{ fontSize: "16px", color: "#C0C0C0" }}>
                            나이스노무법인은 「고용노동부고시 제2021-51호」에 따라,
                            고용 ∙ 산재 ∙ 건강보험 ∙ 국민연금에 가입되어 있는 상시근로자 30인 미만, 전전년도 과세소득 3억원 미만 사업주에게
                            고용 ∙ 산재 ∙ 건강보험 ∙ 국민연금에 관련된 각종 신고 및 보고 업무를 무료로 대행해주고
                            근로복지공단 ∙ 건강보험공단으로부터 교부금을 받아 운영되고 있습니다.
                        </p>
                    </Col>
                    <Col md={6} className="mb-3">
                        <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                            Q. 4대보험 서비스를 이용하는 방법은?
                        </p>
                        <p style={{ fontSize: "16px",  color:"#C0C0C0"  }}>
                        회원가입 -{'>'}사업장 정보 입력 -{'>'} 사무위탁
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};



const FAQ = ({ rawFaqs }: FAQProps) =>{
     
    // 미디어쿼리
     const isDesktop: boolean = useMediaQuery({
        query: "(min-width:992px) ",
    });
    const isTablet: boolean = useMediaQuery({
        query: " (max-width:991px)",
    });
    

    return(
        <>
        <div>
                <Row>
                    {isDesktop &&
                        < FAQPc rawFaqs={[]} />
                    }
                </Row>
                <Row>
                    {isTablet &&
                       < FAQMobile rawFaqs={[]} />
                    }
                </Row>
            </div>
        </>
    );
};

export default FAQ;