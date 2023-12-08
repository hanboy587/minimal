import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';



const MandalartFormCenter = () => {

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
        border-radius: 3px;
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
                            <MandalartBox id="Mandalart1">
                                <textarea
                                    style={{ //backgroundColor: "#FEDD00",
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px"
                                    }}
                                    placeholder="1"
                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox id="Mandalart2">
                                <textarea
                                    style={{ //backgroundColor: "#F9A6A3",
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px"
                                    }}
                                    placeholder="2"
                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox id="Mandalart3">
                            <textarea
                                    style={{ // backgroundColor: "#FFD6E8",
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none",
                                        fontSize: "20px"
                                    }}
                                    placeholder="3"
                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <MandalartBox id="Mandalart8">
                            <textarea
                                    style={{ //backgroundColor: "#C4B0E8",
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px"
                                    }}
                                    placeholder="4"
                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox id="MandalartTarget">
                            <textarea
                                    style={{
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none",
                                        fontSize: "20px",
                                    }}
                                    placeholder="목표💡"
                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox id="Mandalart4">
                            <textarea
                                    style={{ //backgroundColor: "#8BC747",
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px",
                                    }}
                                    placeholder="5"
                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={4}>
                            <MandalartBox id="Mandalart7">
                            <textarea
                                    style={{ //backgroundColor: "#8BC6FF",
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px"
                                    }}
                                    placeholder="6"
                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox id="Mandalart6">
                            <textarea
                                    style={{ //backgroundColor: "#9AB3F6",
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px"
                                    }}
                                    placeholder="7"
                                >
                                </textarea>
                            </MandalartBox>
                        </Col>
                        <Col xs={4}>
                            <MandalartBox id="Mandalart5">
                            <textarea
                                    style={{ //backgroundColor: "#89E4C8",
                                        minHeight: "80px", border: "1px solid #DCDCDC",
                                        outline: "none", 
                                        fontSize: "20px"
                                    }}
                                    placeholder="8"
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

export default MandalartFormCenter;