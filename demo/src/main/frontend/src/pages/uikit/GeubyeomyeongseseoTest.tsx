import { Row, Col, Card, Container, Table, Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState, useCallback, useRef, Component } from 'react';
import coinpig from 'assets/images/coinpig.png';
import axios, { Axios } from 'axios';
import { useMediaQuery } from "react-responsive";
import { useAsync } from 'react-bootstrap-typeahead';
import { makeWoldo } from 'utils/makeWoldo';

const GeubyeomyeongseseoTest = () => {
    
    

    return (
        <>
            <Card className="mt-3">
                <Card.Body>
                    <Row>
                        <Col xl={6} className="mb-3 px-3" style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "15px", marginRight: "-15px" }}>
                            <p> 수당</p>
                        </Col>
                        <Col xl={6} className="mb-3 px-3" style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "15px", marginRight: "-15px" }}>
                            <p>공제</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default GeubyeomyeongseseoTest;