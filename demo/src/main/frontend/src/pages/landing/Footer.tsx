import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';




const Footer = () => {

    return (
        <footer className="bg-dark py-5">
            <Container>
                <Row>
                    <Col lg={2}>
                        <img src={logo} alt="" className="logo-dark" height="18" />
                        <p className="text-muted mt-4">
                            사업자등록번호: 224-81-67722 | 사무대행번호? : ???
                            <br />고객센터: 02-6954-0840 / 02-6954-0693
                            <br />운영시간: 10:00 ~ 17:00 (주말, 공휴일 제외)
                            <br />점심시간: 12:30 ~ 13:30
                        </p>

                        {/* <ul className="social-list list-inline mt-3">
                            <li className="list-inline-item text-center">
                                <Link to="#" className="social-list-item border-primary text-primary">
                                    <i className="mdi mdi-facebook"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item text-center">
                                <Link to="#" className="social-list-item border-danger text-danger">
                                    <i className="mdi mdi-google"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item text-center">
                                <Link to="#" className="social-list-item border-info text-info">
                                    <i className="mdi mdi-twitter"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item text-center">
                                <Link to="#" className="social-list-item border-secondary text-secondary">
                                    <i className="mdi mdi-github"></i>
                                </Link>
                            </li>
                        </ul> */}
                    </Col>
                    <Col lg={2} md={4} className="mt-3 mt-lg-0">
                        <p className="text-light" style={{fontSize:"13px"}}>
                            <a className="text-light" target="_blank"
                                href="http://nicenomu.com">회사소개
                            </a> 
                        </p>

                        {/* <ul className="list-unstyled ps-0 mb-0 mt-3">
                            <li className="mt-2">
                                <Link to="#" className="text-muted">
                                    About Us
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link to="#" className="text-muted">
                                    Documentation
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link to="#" className="text-muted">
                                    Blog
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link to="#" className="text-muted">
                                    Affiliate Program
                                </Link>
                            </li>
                        </ul> */}
                    </Col>
                    <Col lg={2} md={2} className="mt-3 mt-lg-0">
                        <p style={{fontSize:"13px"}}>
                            <Link to="/Yaggwan" className="text-light">
                                이용약관
                            </Link>
                        </p>
                    </Col>
                    <Col lg={2} md={2} className="mt-3 mt-lg-0">
                        <p style={{fontSize:"13px"}}>
                            <Link to="/Gaeinjeongbocheoli" className="text-light">
                                개인정보처리방침
                            </Link>
                        </p>
                    </Col>
                    <Col lg={2} md={2} className="mt-3 mt-lg-0">
                        <p style={{fontSize:"13px"}}>
                            <Link to="/Boheomsamuwiimcheoligyuyag" className="text-light">
                                보험사무위임처리규약
                            </Link>
                        </p>
                    </Col>
                    <Col lg={2} md={2} className="mt-3 mt-lg-0">
                        <p style={{fontSize:"13px"}}>
                            <Link to="/Jeojaggwon" className="text-light">
                                저작권
                            </Link>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className="mt-5">
                            <p className="text-muted mt-4 text-center mb-0">
                                © 2022 - nicenomu
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

