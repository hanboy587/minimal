import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, OverlayTrigger, Tooltip, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import React, { useState, useEffect, } from "react";
import profileImg from 'assets/images/users/avatar-1.jpg'

//조직도 정보탭

// 타입지정
export type Client = {
    verifiedClient?: Boolean;
    name: string;
    emailId: string;
    sosog: string;
    avatar: string;
    phoneNum: string;
    jiggeub: string;
};
type ClientDetailsProps = {
    clientsData: Array<Client>;
};

const clients: Client[] = [
    {
        avatar: profileImg,
        verifiedClient: false,
        name: '나이스',
        emailId: 'nice@nicenomu.com',
        phoneNum:'01065473214',
        sosog:"인사팀",
        jiggeub:"부장"

    },
    {
        avatar: profileImg,
        name: '나인사',
        emailId: 'RobertSKent@nicenomu.com',
        phoneNum:'01066894453',
        sosog:"인사팀",
        jiggeub:"팀장"
    },
    {
        avatar: profileImg,
        name: '나네모',
        emailId: 'Arthur@nicenomu.com',
        phoneNum:'01022224444',
        sosog:"인사팀",
        jiggeub:"대리"
    },
    {
        avatar: profileImg,
        name: '나동글',
        emailId: 'MartinDJordan@nicenomu.com',
        phoneNum:'01066887799',
        sosog:"인사팀",
        jiggeub:"사원"
    },
    {
        avatar: profileImg,
        name: '나홍보',
        emailId: 'artinDJordan@nicenomu.com',
        phoneNum:'01055880036',
        sosog:"홍보팀",
        jiggeub:"팀장"
    },
    {
        avatar: profileImg,
        name: '나기획',
        emailId: 'Dewayneurphy@nicenomu.com',
        phoneNum:'01032324654',
        sosog:"홍보팀",
        jiggeub:"대리"
    },
    {
        avatar: profileImg,
        name: '나마케팅',
        emailId: 'RusselSanchez@nicenomu.com',
        phoneNum:'01087651234',
        sosog:"홍보팀",
        jiggeub:"사원"
    },
    {
        avatar: profileImg,
        name: '나전략',
        emailId: 'AlvinMiddle@nicenomu.com',
        phoneNum:'01056781234',
        sosog:"홍보팀",
        jiggeub:"사원"
    },
];
export { clients };

const Jojigdojeongbo = () => {

    const ClientDetails = ({ clientsData }: ClientDetailsProps) => {
        
        return (
            <>
                {(clientsData || []).map((client, index) => {
                    return (
                        <Col xxl={3} xl={6} key={index.toString()}>
                            <Card style={{boxShadow:"5px 5px 5px 5px gray"}}>
                                <Card.Body>
                                    {/* <Dropdown align="end" className="float-end">
                                        <Dropdown.Toggle variant="link" className="arrow-none card-drop p-0">
                                            <i className="mdi mdi-dots-horizontal"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>View Profile</Dropdown.Item>
                                            <Dropdown.Item>Project Info</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown> */}
                                    <div className="text-center">
                                        <img
                                            src={client.avatar}
                                            alt=""
                                            className="rounded-circle avatar-md img-thumbnail"
                                        />
                                        <h4 className="mt-3 my-1">
                                            {client.name}{' '}
                                            {client.verifiedClient && (
                                                <i className="mdi mdi-check-decagram text-primary"></i>
                                            )}
                                        </h4>
                                        <p className="mb-0 text-muted">
                                            <i className="mdi mdi-email-outline me-1"></i>
                                            {client.emailId}
                                        </p>
                                        <p className="mb-0 text-muted">
                                            {client.sosog}
                                        </p>
                                        <p className="mb-0 text-muted">
                                            {client.jiggeub}
                                        </p>
                                        <hr className="bg-dark-lighten my-3" />
                                        

                                        <Row className="mt-3">
                                            {/* <Col xs={4}>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Message</Tooltip>}>
                                                    <Link to="#" className="btn btn-light w-100">
                                                        <i className="mdi mdi-message-processing-outline"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                            </Col> */}
                                            <Col xs={6}>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>{client.phoneNum}</Tooltip>}>
                                                    <Link to="#" className="btn btn-light w-100">
                                                        <i className="mdi mdi-phone"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                            </Col>
                                            <Col xs={6}>
                                                <OverlayTrigger placement="top" overlay={<Tooltip> {client.emailId}</Tooltip>}>
                                                    <Link to="#" className="btn btn-light w-100">
                                                        <i className="mdi mdi-email-outline"></i>
                                                    </Link>
                                                </OverlayTrigger>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </>
        );
    };
    return (
        <>

            <Row>
                <ClientDetails clientsData={clients} />
            </Row>
            {/* <Row>
                <Col xs={12} className="text-center">
                    <i className="mdi mdi-dots-circle mdi-spin font-24 text-muted"></i>
                </Col>
            </Row> */}
        </>
    );
};

export default Jojigdojeongbo;