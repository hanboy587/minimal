import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from 'assets/images/startup.svg';
import { useMediaQuery } from "react-responsive";

const HeroPc = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        <div className="mt-md-4">
                            {/* <div>
                                <span className="text-white" style={{ fontSize: "25px" }}>상시직원<strong style={{ color: "#FFDBA7" }}>30인미만</strong> 기업은 <strong style={{ color: "#FFDBA7" }}>4대보험 무료</strong> 관리</span>
                            </div> */}
                            <p className="text-white fw-normal mb-3 mt-2 hero-title" style={{fontSize:"60px",lineHeight:"75px",fontWeight:"bold" }}>
                                나이스노무법인 <strong style={{fontSize:"40px"}}>과</strong>
                            </p>
                            <p className="text-white fw-normal mb-3  mt-1 hero-title" style={{ fontSize: "50px" }}>
                                함께하는 <strong style={{ color: "#FFDBA7" }}>전문적</strong> 인
                            </p>
                            <p className="text-white fw-normal text-end " style={{fontSize:"60px" }}>
                                인사노무관리
                            </p>
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }}>
                        <div className="text-md-end mt-3 mt-md-0">
                            <img src={image1} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const HeroMobile = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        <div className="mt-md-4">
                            {/* <div>
                                <span className="text-white" style={{ fontSize: "25px" }}>상시직원<strong style={{ color: "#FFDBA7" }}>30인미만</strong> 기업은 <strong style={{ color: "#FFDBA7" }}>4대보험 무료</strong> 관리</span>
                            </div> */}
                            <p className="text-white fw-normal mb-1 mt-2 hero-title" style={{fontSize:"50px",lineHeight:"75px",fontWeight:"bold" }}>
                                나이스노무법인 <strong style={{fontSize:"35px"}}>과</strong>
                            </p>
                            <p className="text-white fw-normal mb-0  mt-1 hero-title" style={{ fontSize: "40px" }}>
                                함께하는 <strong style={{ color: "#FFDBA7" }}>전문적</strong>인
                            </p>
                            <p className="text-white fw-normal text-end " style={{fontSize:"50px" }}>
                                인사노무관리
                            </p>
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }}>
                        <div className="text-md-end mt-3 mt-md-0">
                            <img src={image1} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const HeroMobile2 = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        <div className="mt-md-4">
                            {/* <div>
                                <span className="text-white" style={{ fontSize: "25px" }}>상시직원<strong style={{ color: "#FFDBA7" }}>30인미만</strong> 기업은 <strong style={{ color: "#FFDBA7" }}>4대보험 무료</strong> 관리</span>
                            </div> */}
                            <p className="text-white fw-normal mb-1 mt-2 hero-title" style={{fontSize:"36px",lineHeight:"40px",fontWeight:"bold" }}>
                                나이스노무법인 <strong style={{fontSize:"25px"}}>과</strong>
                            </p>
                            <p className="text-white fw-normal mb-0  mt-1 hero-title" style={{ fontSize: "35px" }}>
                                함께하는 <strong style={{ color: "#FFDBA7" }}>전문적</strong>인
                            </p>
                            <p className="text-white fw-normal text-end " style={{fontSize:"35px" }}>
                                인사노무관리
                            </p>
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }}>
                        <div className="text-md-end mt-3 mt-md-0">
                            <img src={image1} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const HeroMobile3 = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        <div className="mt-md-4">
                            {/* <div>
                                <span className="text-white" style={{ fontSize: "25px" }}>상시직원<strong style={{ color: "#FFDBA7" }}>30인미만</strong> 기업은 <strong style={{ color: "#FFDBA7" }}>4대보험 무료</strong> 관리</span>
                            </div> */}
                            <p className="text-white fw-normal mb-1 mt-2 hero-title" style={{fontSize:"45px",lineHeight:"40px",fontWeight:"bold" }}>
                                나이스노무법인 <strong style={{fontSize:"25px"}}>과</strong>
                            </p>
                            <p className="text-white fw-normal mb-0  mt-1 hero-title" style={{ fontSize: "40px" }}>
                                함께하는 <strong style={{ color: "#FFDBA7" }}>전문적</strong>인
                            </p>
                            <p className="text-white fw-normal hero-title" style={{fontSize:"40px" }}>
                                인사노무관리
                            </p>
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }}>
                        <div className="text-md-end mt-3 mt-md-0">
                            <img src={image1} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

const HeroMobile4 = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col md={5}>
                        <div className="mt-md-4">
                            {/* <div>
                                <span className="text-white" style={{ fontSize: "25px" }}>상시직원<strong style={{ color: "#FFDBA7" }}>30인미만</strong> 기업은 <strong style={{ color: "#FFDBA7" }}>4대보험 무료</strong> 관리</span>
                            </div> */}
                            <p className="text-white fw-normal mb-1 mt-2 hero-title" style={{fontSize:"35px",lineHeight:"40px",fontWeight:"bold" }}>
                                나이스노무법인 <strong style={{fontSize:"20px"}}>과</strong>
                            </p>
                            <p className="text-white fw-normal mb-0  mt-1 hero-title" style={{ fontSize: "30px" }}>
                                함께하는 <strong style={{ color: "#FFDBA7" }}>전문적</strong>인
                            </p>
                            <p className="text-white fw-normal hero-title" style={{fontSize:"40px" }}>
                                인사노무관리
                            </p>
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }}>
                        <div className="text-md-end mt-3 mt-md-0">
                            <img src={image1} alt="" className="img-fluid" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};



const Hero = () => {

    // 미디어쿼리
    const isDesktop: boolean = useMediaQuery({
        query: "(min-width:1200px)",
    });
    const isTablet: boolean = useMediaQuery({
        query: "(min-width:992px) and (max-width:1199px)",
    });
    const isTablet2: boolean = useMediaQuery({
        query: "(min-width:768px) and (max-width:991px)",
    });
    const isTablet3: boolean = useMediaQuery({
        query: "(min-width:347px) and (max-width:767px)",
    });
    const isPhone: boolean = useMediaQuery({
        query: "(max-width:346px)",
    });
    return (

        <>
            <div>
                <Row>
                    {isDesktop &&
                        < HeroPc />
                    }
                </Row>
                <Row>
                    {isTablet &&
                       < HeroMobile />
                    }
                </Row>
                <Row>
                    {isTablet2 &&
                       < HeroMobile2 />
                    }
                </Row>
                <Row>
                    {isTablet3 &&
                       < HeroMobile3 />
                    }
                </Row>
                <Row>
                    {
                        isPhone &&
                        <HeroMobile4 />
                    }
                </Row>
            </div>
            
        </>
    );
};


export default Hero;
