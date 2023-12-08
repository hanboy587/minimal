import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Logo from 'assets/images/logo.png';

// 404 error
const ErrorPageNotFound = () => {
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
                                        <h1 className="text-error">
                                            4<i className="mdi mdi-emoticon-sad"></i>4
                                        </h1>
                                        <h4 className="text-uppercase text-danger mt-3">페이지를 찾을수없습니다.</h4>
                                        <p className="text-muted mt-3">
                                            지금입력하신 주소의 페이지는 <br />
                                            주소가 삭제 혹은 변경되어 찾을수 없습니다. <br /><br />
                                            <strong style={{ color: "#9999FF", fontSize: "18px" }}>주소를 다시 확인해주세요.</strong>
                                        </p>
                                        <p>관련 문의사항은 &nbsp;
                                            <Link to="#" onClick={()=>{window.open(url)}}>
                                                <span style={{color:"blue", fontSize:"15px",textDecorationLine:"underline"}}>고객센터</span>
                                            </Link>
                                            로<br /> 연락 부탁드립니다
                                        </p>

                                        <Link className="btn btn-primary mt-3" to="/">
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

export default ErrorPageNotFound;
