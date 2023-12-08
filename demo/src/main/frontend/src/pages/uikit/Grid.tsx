import { Row, Col, Card, ListGroup, Badge, Tab, Nav, Table, Modal, Button } from 'react-bootstrap';
import { PageTitle } from 'components';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { useToggle } from 'hooks';
import axios from 'axios';
import { useState } from 'react';
import Goyongjeongbo from './WorkerInfo';
import Ilyongjeongbo from './IlYongJeongBo';

// 일용정보


type TabContentItem = {
    id: string;
    title: string;
    text: any;
};

const Jigwongwanli = () => {
    const tabContents: TabContentItem[] = [
        {
            id: '1',
            title: '일반근로자',
            text: <Goyongjeongbo />
        },
        {
            id: '2',
            title: '일용근로자',
            text: <Ilyongjeongbo />
        },
    ];

    return (
        <>
            <Row className="mt-3">
                <Card>
                    <Card.Body>
                        <Tab.Container defaultActiveKey="일반근로자">
                            <Nav variant="tabs">
                                {tabContents.map((tab, index) => {
                                    return (
                                        <Nav.Item key={index.toString()}>
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
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
};


export default Jigwongwanli;
