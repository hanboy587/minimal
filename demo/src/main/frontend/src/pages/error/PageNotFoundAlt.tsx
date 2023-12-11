import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { PageTitle } from 'components';
import notFoundImg from 'assets/images/file-searching.svg';

const ErrorPageNotFoundAlt = () => {
    // 채널톡링크
    const url = "https://naver.com"
    return (
        <>
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5 mt-3">
                <div className="container">
                    <Row className="justify-content-center mt-3">
                        <Col lg={4}>
                            <div className="text-center  mt-3">
                                <img src={notFoundImg} height="150" alt="" className="mb-3" />
                                <h1 className="text-error mt-4 mb-3" style={{fontSize:"130px"}}>404</h1>
                                <br />
                                <p className="text-uppercase text-danger mt-4" style={{fontSize:"25px" }}>
                                    페이지를 찾을수없습니다.
                                </p>
                                <p className="text-muted mt-3" style={{fontSize:"18px" }}>
                                    지금입력하신 주소의 페이지는 <br />
                                    주소가 삭제 혹은 변경되어 찾을수 없습니다. <br />
                                    <strong style={{ color: "#9999FF", fontSize: "18px" }}>주소를 다시 확인해주세요.</strong>
                                </p>
                                <p>관련 문의사항은 &nbsp;
                                    <Link to="#" onClick={() => { window.open(url) }}>
                                        <span style={{ color: "blue", fontSize: "15px",textDecorationLine:"underline" }}>고객센터</span>
                                    </Link>
                                    로 연락 부탁드립니다
                                </p>

                                <Link className="btn btn-primary mt-3" to="/">
                                    <i className="mdi mdi-reply"></i> 홈으로 돌아가기
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default ErrorPageNotFoundAlt;
