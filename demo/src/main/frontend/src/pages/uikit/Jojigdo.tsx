import { Link } from 'react-router-dom';
import { Row, Col, Card, Tab, Nav, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useToggle } from 'hooks';
import React, { useState, useEffect, } from "react";
import { PageTitle } from 'components';
import Jojigdosidebar from './Jojigdosidebar';
import classnames from 'classnames';
import Jojigdojeongbo from './Jojigdojeongbo';



type TabContentItem = {
    id: string;
    title: string;
    text: any;
};


const Jojigdo = () => {
    const tabContents: TabContentItem[] = [
        {
            id: '1',
            title: '정보',
            text: <Jojigdojeongbo />
        },
        // {
        //     id: '2',
        //     title: '부서원',
        //     text: <></>
        // },
        // {
        //     id: '3',
        //     title: '부서자료',
        //     text: <></>
        // },
    ];

    // 회사명
    const [division, setDivision] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setDivision(JSON.parse(data).division);
    }, []);


    return (
        <>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="page-aside-left">
                                <Jojigdosidebar />
                            </div>
                            <div className="page-aside-right">
                                <Row>
                                    <p style={{ fontSize: "20px" }}>
                                        {division}
                                    </p>
                                </Row>
                                <Row>
                                    <Tab.Container defaultActiveKey="정보">
                                        <Nav variant="tabs" className="nav-bordered" as="ul">
                                            {tabContents.map((tab, index) => {
                                                return (
                                                    <Nav.Item key={index.toString()} as="li">
                                                        <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                            <i
                                                                className={classnames(tab.title)}
                                                            ></i>
                                                            <span>{tab.title}</span>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                );
                                            })}
                                        </Nav>
                                        <Tab.Content>
                                            {tabContents.map((tab, index) => {
                                                return (
                                                    <Tab.Pane eventKey={tab.title} id={tab.id} key={index.toString()}>
                                                        <Row>
                                                            <Col sm="12">
                                                                <p className="mt-3">{tab.text}</p>
                                                            </Col>
                                                        </Row>
                                                    </Tab.Pane>
                                                );
                                            })}
                                        </Tab.Content>
                                    </Tab.Container>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Jojigdo;