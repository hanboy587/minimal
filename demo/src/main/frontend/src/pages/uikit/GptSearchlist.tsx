import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Form } from "react-bootstrap";


const GptSearchlist = () => {
    return (
        <>
            <Row className="mt-3">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col xl={6} className="mb-3 mt-1" style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "25px", marginRight: "-15px" }}>
                                <p style={{ fontSize: "28px" }}>Gpt</p>
                                <div>
                                    <p style={{ fontSize: "18px" }}>
                                        최저시급보다 적게 지급하는 것은 대부분 국가의 법적으로 금지되어 있습니다. <br />
                                        대부분의 국가에서는 최저시급 이상의 급여를 지급하지 않으면
                                        법적인 문제가 발생할 수 있습니다. <br />
                                    </p>
                                </div>

                            </Col>
                            <Col xl={6} className="mb-3 mt-1" style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "25px", marginRight: "-15px" }}>
                                <p style={{ fontSize: "28px" }}>Mis</p>
                                <div>
                                    <p style={{ fontSize: "18px" }}>
                                        최저시급보다 적게 지급하는 것은 대부분 국가의 법적으로 금지되어 있습니다. <br />
                                        대부분의 국가에서는 최저시급 이상의 급여를 지급하지 않으면
                                        법적인 문제가 발생할 수 있습니다. <br />
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
};

export default GptSearchlist;