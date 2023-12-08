import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import notFoundImg from 'assets/images/startman.svg';
import Logo from 'assets/images/logo.png';

const ServerError = () => {
    // 채널톡링크
    const url = "https://nice.channel.io/lounge"
    return (
        <>
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5} xxl={4}>
                            <Card>
                                {/* logo */}
                                <Card.Header className="pt-4 pb-4 text-center bg-primary">
                                    <Link to="/">
                                        <span>
                                            <img src={Logo} alt="" height="18" />
                                        </span>
                                    </Link>
                                </Card.Header>

                                <Card.Body className="p-4">
                                    <div className="text-center">
                                        <img src={notFoundImg} height="120" alt="" />

                                        <h1 className="text-error mt-4">500</h1>
                                        <h4 className="text-uppercase text-danger mt-3">서비스에 접속할 수 없습니다</h4>
                                        <p className="text-muted mt-3" style={{ fontSize: "18px" }}>
                                            일시적인 현상으로 <br /> 서비스와 연결할 수 없습니다. <br />
                                            담당부서에서 확인중이며 <br /> 잠시후 다시 이용 부탁드립니다 <br />
                                            <strong style={{ color: "#9999FF", fontSize: "18px" }}>이용에 불편을 드려 사과드립니다.</strong>
                                        </p>
                                        <p>관련 문의사항은 &nbsp;
                                            <Link to="#" onClick={() => { window.open(url) }}>
                                                <span style={{ color: "blue", fontSize: "15px",textDecorationLine:"underline" }}>고객센터</span>
                                            </Link>
                                            로 연락 부탁드립니다
                                        </p>

                                        <Link className="btn btn-info mt-3" to="/">
                                            <i className="mdi mdi-reply"></i> 홈으로 돌아가기
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* <footer className="footer footer-alt">2018 - {new Date().getFullYear()} © Hyper - Coderthemes.com</footer> */}
        </>
    );
};

export default ServerError;
