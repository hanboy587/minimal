import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import GptSearchBar from './GptSearchBar';
import GptAnswer from './GptAnswer';
import GptSideBar from './GptSideBar';




const Gpt = () => {


    return (
        <div className="mt-3" style={{paddingTop:"50px"}}>
            <Card>
                <Card.Body style={{ height: "100%" }}>
                    <Row>
                        <GptSearchBar />
                    </Row>
                    <Row className="mt-3">
                        <Col xl={9}>
                            <GptAnswer />
                        </Col>
                        <Col xl={3}>
                            <GptSideBar />
                        </Col>
                    </Row>
                    {/* <Row>
                        <GptSearchBar />
                    </Row> */}
                </Card.Body>
            </Card>
        </div>
    );
};


export default Gpt;