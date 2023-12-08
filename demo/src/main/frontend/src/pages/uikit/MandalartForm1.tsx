import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import MandalartFormCenter from './MandalartFormCenter';



 // 기존 : w - 375 h-396 , 
 const TopBox = styled.div`
 width: 220px;
 height: 240px;
 margin-top: 10px;
 margin-bottom: 10px;
 display: flex;
 flex-direction: column;
`;
// 기존 : w,h =132 
const MandalartBox = styled.div`
 width: 80px;
 height: 80px;
 background: white;
 border-radius: 1px;
 box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
 display: flex;
 flex-direction: column;
`;

const MandalartForm1 = () => {
    
    return (
        <>
            <div>
                <TopBox>
                    <Row>
                        <Col xs={4}>
                            <MandalartBox>
                                <textarea
                                    style={{  //backgroundColor: "#FDF8D3",
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
                                    style={{ //backgroundColor: "#FDF8D3",
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
                                    style={{ //backgroundColor: "#FDF8D3",
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
                                    style={{ //backgroundColor: "#FDF8D3",
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
                                <textarea placeholder='1'
                                    style={{ //backgroundColor: "#FEDD00",
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
                                    style={{ //backgroundColor: "#FDF8D3",
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
                                    style={{ //backgroundColor: "#FDF8D3",
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
                                    style={{ //backgroundColor: "#FDF8D3",
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
                                    style={{ //backgroundColor: "#FDF8D3",
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

export default MandalartForm1;