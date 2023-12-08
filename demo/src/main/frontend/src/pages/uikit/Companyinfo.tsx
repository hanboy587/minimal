import { Row, Col, Card, Button, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react'; 

const Companyinfo = () => {

    // 회사명
    const [division, setDivision] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setDivision(JSON.parse(data).division);
    }, []);

    // 사업자등록번호
    const [businessNumber, setBusinessNumber] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setBusinessNumber(JSON.parse(data).businessNumber);
    }, []);

    return (
        <>
            <Row>
                <Card className="text-center">
                    <Card.Body>
                        <p style={{ fontSize: "20px" }} className="bg-light mb-3"> <strong>회사정보</strong></p>
                        <div className="text-start mt-2" >
                            <Row>
                                <Col>
                                    <p className="text-muted mb-2" style={{ fontSize: "18px" }}>
                                        <strong>회사명 :</strong>
                                        <span className="ms-2">{division}</span>
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="text-muted mb-2 " style={{ fontSize: "18px" }}>
                                        <strong>사업자번호 : </strong>
                                        <span className="ms-2 ">{businessNumber}</span>
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p className="text-muted mb-2" style={{ fontSize: "18px" }}>
                                        <strong>주소 :</strong>
                                        <span className="ms-2">서울시 강서구 마곡동</span>
                                    </p>
                                </Col>
                            </Row>
                            {/* <Row>
                                <Col md={6}>
                                    <p className="text-muted mb-2" style={{ fontSize: "18px" }}>
                                        <strong>부서 :</strong>
                                        <span className="ms-2">인사</span>
                                    </p>
                                </Col>
                                <Col md={6}>
                                    <p className="text-muted mb-2 " style={{ fontSize: "18px" }}>
                                        <strong>직급 / 직책 :</strong>
                                        <span className="ms-2">사원</span>
                                    </p>
                                </Col>
                            </Row> */}
                            {/* <p className="text-muted mb-2" style={{fontSize:"18px"}}>
                                <strong>회사명 :</strong>
                                <span className="ms-2">나이스</span>
                            </p>

                            <p className="text-muted mb-2" style={{fontSize:"18px"}}>
                                <strong>주소 :</strong>
                                <span className="ms-2">서울기 강서구 마곡동</span>
                            </p>

                            <p className="text-muted mb-2 " style={{fontSize:"18px"}}>
                                <strong>사업자번호 : </strong>
                                <span className="ms-2 ">224-81-67722</span>
                            </p>

                            <p className="text-muted mb-2"  style={{fontSize:"18px"}}>
                                <strong>부서 :</strong>
                                <span className="ms-2">인사</span>
                            </p>

                            <p className="text-muted mb-2 "  style={{fontSize:"18px"}}>
                                <strong>직급 / 직책 :</strong>
                                <span className="ms-2">사원</span>
                            </p> */}
                        </div>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
};

export default Companyinfo;