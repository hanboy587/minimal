import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';


const MandalartForm7 = () => {
    const TopBox = styled.div`
        width: 220px;
        height: 240px;
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
    `;

    const MandalartBox = styled.div`
        width: 80px;
        height: 80px;
        background: white;
        border-radius: 1px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
    `;

    return (
        <>
            <div>
                <TopBox>
                    <Row>
                        <Col xs={4}>
                            <MandalartBox>
                                <textarea
                                    style={{ //backgroundColor: "#D4E9FD",
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px"
                                    }}

                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox>
                                <textarea
                                    style={{
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px"
                                    }}

                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox>
                                <textarea
                                    style={{
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none",
                                        fontSize: "20px"
                                    }}

                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <MandalartBox>
                                <textarea
                                    style={{
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none",
                                        fontSize: "20px"
                                    }}

                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox>
                                <textarea placeholder='7'
                                    style={{ //backgroundColor: "#8BC6FF",
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px"
                                    }}

                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox>
                                <textarea
                                    style={{
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none",
                                        fontSize: "20px"
                                    }}

                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <MandalartBox>
                                <textarea
                                    style={{
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px"
                                    }}

                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox>
                                <textarea
                                    style={{
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px"
                                    }}

                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox>
                                <textarea
                                    style={{
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none",
                                        fontSize: "20px"
                                    }}

                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                    </Row>
                </TopBox>
            </div>
        </>
    );
};

export default MandalartForm7;