import { Row, Col, Card, Table } from 'react-bootstrap';
import React, { useContext, useEffect, useState, useRef, } from 'react';
import axios from 'axios';
import SaeobjangseoljeongMyeonseseo from './SaeobjangseoljeongMyeonseseo';
import SaeobjangseoljeongHyuga from './SaeobjangseoljeongHyuga';
import SaeobjangseoljeongEtc from './SaeobjangseoljeongEtc';

const Saeobjangseoljeong = () => {


    return (
        <>
            <Card className="mt-3">
                <Card.Body>
                    <div className="mt-3">
                        <Row>
                            <Col xxl={6} xl={6}>
                                <SaeobjangseoljeongMyeonseseo />
                                <SaeobjangseoljeongHyuga />
                            </Col>
                            <Col xxl={6} xl={6}>
                                <SaeobjangseoljeongEtc />
                            </Col>
                        </Row>
                    </div>
                    {/* <div className="mt-3">
                        <Row>
                            <Col xl={6}>
                                <SaeobjangseoljeongHyuga />
                            </Col>
                        </Row>
                    </div> */}
                </Card.Body>
            </Card>
        </>
    );
};

export default Saeobjangseoljeong;