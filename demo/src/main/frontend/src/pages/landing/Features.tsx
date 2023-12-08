import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Feature } from './types';
import image1 from 'assets/images/features-1.svg';
import image2 from 'assets/images/features-2.svg';
import { useMediaQuery } from "react-responsive";

type FeaturesProps = {
    features: Feature[];
};

const FeaturesPc = ({ features }: FeaturesProps) => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col xl={5} lg={6} className="py-3">
                            <img src={image1} alt="" className="img-fluid" />
                        </Col>
                        <Col className="py-3 text-center" xl={{ span: 5, offset: 1 }} lg={6}>
                            <p className="mt-3 mb-3" style={{ fontSize: "33px", }}>
                                간편하고 정확한 인사노무관리, <br /> <strong style={{color: "#5920D7", fontSize:"45px",}}> 나이스노무법인</strong> 과 함께하세요
                            </p>
                            <p style={{ fontSize: "22px" }} className="text-start">
                                <strong className="text-primary">•</strong> 복잡한 4대보험 신고 물 흐르듯 쉽게 도와드립니다.
                            </p>
                            <p style={{ fontSize: "22px" }} className="text-start">
                                <strong className="text-primary">•</strong> 근무일정, 근로시간 관리를 체계적으로 만들어드립니다.
                            </p>
                            <p style={{ fontSize: "22px" }} className="text-start">
                                <strong className="text-primary">•</strong> 인사노무 관련 법을 준수하도록 안내해드립니다.
                            </p>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="mt-3">
                        <Col className="py-5 mt-2 text-center" xl={{ span: 5, offset: 1 }} lg={6}>
                            <p className="mt-3 mb-3" style={{ fontSize: "33px", }}>
                                <strong style={{color: "#5920D7", fontSize:"45px",}}> 나이스노무법인</strong> 에서만 <br/> 누릴수있는 혜택
                            </p>
                            <p style={{ fontSize: "22px" }} className="text-start">
                                <strong className="text-primary">•</strong> 근태관리 서비스 누구나 무료 이용
                            </p>
                            <p style={{ fontSize: "22px" }} className="text-start">
                                <strong className="text-primary">•</strong> 상시근로자 30인 미만 사업장 4대보험 무료 이용
                            </p>
                        </Col>
                        <Col xl={6} lg={4} className="py-3">
                            <img src={image2} alt="" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

const FeaturesMobile = ({ features }: FeaturesProps) => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col xl={5} lg={6} className="py-3">
                            <img src={image1} alt="" className="img-fluid" />
                        </Col>
                        <Col className="py-3 text-center" xl={{ span: 5, offset: 1 }} lg={6}>
                            <p className="mt-3 mb-3" style={{ fontSize: "30px", }}>
                                간편하고 정확한 인사노무관리, <br /> <strong style={{color: "#5920D7", fontSize:"40px",}}> 나이스노무법인</strong> 과 함께하세요
                            </p>
                            <p style={{ fontSize: "19px" }} className="text-start">
                                <strong className="text-primary">•</strong> 복잡한 4대보험 신고 물 흐르듯 쉽게 도와드립니다.
                            </p>
                            <p style={{ fontSize: "19px" }} className="text-start">
                                <strong className="text-primary">•</strong> 근무일정, 근로시간 관리를 체계적으로 만들어드립니다.
                            </p>
                            <p style={{ fontSize: "19px" }} className="text-start">
                                <strong className="text-primary">•</strong> 인사노무 관련 법을 준수하도록 안내해드립니다.
                            </p>
                        </Col>
                    </Row>
                    <br/>
                    <Row className="mt-3">
                        <Col className="py-5 mt-2 text-center" xl={{ span: 5, offset: 1 }} lg={6}>
                            <p className="mt-3 mb-3" style={{ fontSize: "30px", }}>
                                <strong style={{color: "#5920D7", fontSize:"40px",}}> 나이스노무법인</strong> 에서만 <br/> 누릴수있는 혜택
                            </p>
                            <p style={{ fontSize: "19px" }} className="text-start px-2">
                                <strong className="text-primary">•</strong> 근태관리 서비스 누구나 무료 이용
                            </p>
                            <p style={{ fontSize: "19px" }} className="text-start px-2">
                                <strong className="text-primary">•</strong> 상시근로자 30인 미만 사업장 4대보험 무료 이용
                            </p>
                        </Col>
                        <Col xl={6} lg={4} className="py-3">
                            <img src={image2} alt="" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

const FeaturesMobile2 = ({ features }: FeaturesProps) => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col xl={5} lg={6} className="py-3">
                            <img src={image1} alt="" className="img-fluid" />
                        </Col>
                        <Col className="py-3 text-center" xl={{ span: 5, offset: 1 }} lg={6}>
                            <p className="mt-3 mb-3" style={{ fontSize: "30px", }}>
                                간편하고 정확한 인사노무관리, <br /> <strong style={{ color: "#5920D7", fontSize: "40px", }}> 나이스노무법인</strong> 과 함께하세요
                            </p>
                            <p style={{ fontSize: "19px" }} className="text-center">
                                <strong className="text-primary">•</strong> 복잡한 4대보험 신고 물 흐르듯 쉽게 도와드립니다.
                            </p>
                            <p style={{ fontSize: "19px" }} className="text-center">
                                <strong className="text-primary">•</strong> 근무일정, 근로시간 관리를 체계적으로 만들어드립니다.
                            </p>
                            <p style={{ fontSize: "19px" }} className="text-center">
                                <strong className="text-primary">•</strong> 인사노무 관련 법을 준수하도록 안내해드립니다.
                            </p>
                        </Col>
                    </Row>
                    
                    <Row className="mt-3">
                        <Col className="py-5 mt-2 text-center" xl={{ span: 5, offset: 1 }} lg={6}>
                            <p className="mt-3 mb-3" style={{ fontSize: "30px", }}>
                                <strong style={{color: "#5920D7", fontSize:"40px",}}> 나이스노무법인</strong> 에서만 <br/> 누릴수있는 혜택
                            </p>
                            <p style={{ fontSize: "19px" }} className="text-center px-2">
                                <strong className="text-primary">•</strong> 근태관리 서비스 누구나 무료 이용
                            </p>
                            <p style={{ fontSize: "19px" }} className="text-center px-2">
                                <strong className="text-primary">•</strong> 상시근로자 30인 미만 사업장 4대보험 무료 이용
                            </p>
                        </Col>
                        <Col xl={6} lg={4} className="py-3">
                            <img src={image2} alt="" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

const FeaturesMobile3 = ({ features }: FeaturesProps) => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col xl={5} lg={6} className="py-3">
                            <img src={image1} alt="" className="img-fluid" />
                        </Col>
                        <Col className="py-3 text-center" xl={{ span: 5, offset: 1 }} lg={6}>
                            <p className="mt-3 mb-3" style={{ fontSize: "27px", }}>
                                간편하고 정확한<br /> 인사노무관리, <br /> <strong style={{ color: "#5920D7", fontSize: "31px", }}> 나이스노무법인</strong> 과<br /> 함께하세요
                            </p>
                            <p style={{ fontSize: "13px" }} className="text-start px-2">
                                <strong className="text-primary">•</strong> 복잡한 4대보험 신고 물 흐르듯 쉽게 도와드립니다.
                            </p>
                            <p style={{ fontSize: "13px" }} className="text-start px-2">
                                <strong className="text-primary">•</strong> 근무일정, 근로시간 관리를 체계적으로 만들어드립니다.
                            </p>
                            <p style={{ fontSize: "13px" }} className="text-start px-2">
                                <strong className="text-primary">•</strong> 인사노무 관련 법을 준수하도록 안내해드립니다.
                            </p>
                        </Col>
                    </Row>
                    
                    <Row className="mt-1">
                        <Col className="py-5  text-center" xl={{ span: 5, offset: 1 }} lg={6}>
                            <p className="mt-3 mb-3" style={{ fontSize: "25px", }}>
                                <strong style={{color: "#5920D7", fontSize:"30px",}}> 나이스노무법인</strong>  <br/>  에서 누릴수있는 혜택
                            </p>
                            <p style={{ fontSize: "13px" }} className="text-start px-2">
                                <strong className="text-primary">•</strong> 근태관리 서비스 누구나 무료 이용
                            </p>
                            <p style={{ fontSize: "13px" }} className="text-start px-2">
                                <strong className="text-primary">•</strong> 상시근로자 30인 미만 사업장 4대보험 무료 이용
                            </p>
                        </Col>
                        <Col xl={6} lg={4} className="py-3">
                            <img src={image2} alt="" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};


const Features = ({ features }: FeaturesProps) => {

    // 미디어쿼리
    const isDesktop: boolean = useMediaQuery({
        query: "(min-width:1400px)",
    });
    const isTablet: boolean = useMediaQuery({
        query: "(min-width:992px) and (max-width:1399px)",
    });
    const isTablet2: boolean = useMediaQuery({
        query: "(min-width:489px) and (max-width:991px)",
    });
    const isTablet3: boolean = useMediaQuery({
        query: " (max-width:488px)",
    });
    return (

        <>
            <div>
                <Row>
                    {isDesktop &&
                        < FeaturesPc features={[]} />
                    }
                </Row>
                <Row>
                    {isTablet &&
                        < FeaturesMobile features={[]} />
                    }
                </Row>
                <Row>
                    {isTablet2 &&
                        < FeaturesMobile2 features={[]} />
                    }
                </Row>
                <Row>
                    {isTablet3 &&
                        < FeaturesMobile3 features={[]} />
                    }
                </Row>
            </div>
            
        </>
    );
};


export default Features;