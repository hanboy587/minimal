import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import MandalartFormCenter from './MandalartFormCenter';
import MandalartForm1 from './MandalartForm1';
import MandalartForm2 from './MandalartForm2';
import MandalartForm3 from './MandalartForm3';
import MandalartForm4 from './MandalartForm4';
import MandalartForm5 from './MandalartForm5';
import MandalartForm6 from './MandalartForm6';
import MandalartForm7 from './MandalartForm7';
import MandalartForm8 from './MandalartForm8';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';


const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1.2rem;
  color: #333;
`;

const Mandalart = () => {
    const [test, setTest] = useState(false);

    return (
        <>
            <Card className="mt-3">
                <Card.Body >
                    <section >
                        <Container>
                            <Row>
                                <Col lg={4}>

                                    {test && <MandalartForm1 />}
                                    {/* <MandalartForm1 /> */}
                                </Col>
                                <Col lg={4}>
                                    <MandalartForm2 />
                                </Col>
                                <Col lg={4}>
                                    <MandalartForm3 />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <IconButton onClick={() => {
                                        setTest(!test);
                                    }}>
                                        <FaArrowRight/>
                                    </IconButton>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <MandalartForm4 />
                                </Col>

                                <Col lg={4}>
                                    <MandalartFormCenter />
                                </Col>
                                <Col lg={4}>
                                    <MandalartForm5 />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4}>
                                    <MandalartForm6 />
                                </Col>
                                <Col lg={4}>
                                    <MandalartForm7 />
                                </Col>
                                <Col lg={4}>
                                    <MandalartForm8 />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Card.Body>
            </Card>
        </>
    );
};

export default Mandalart;