import { Row, Col, Card, Tab, Nav, Button, Modal, Table } from 'react-bootstrap';
import { useToggle } from 'hooks';
import { PageTitle } from 'components';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { useModal } from './hooks';
import SearchBox from './Search box';
import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import Dailygeunmujohoe from './Dailygeunmujohoe';
import Monthlygeunmujohoe from './Monthlygeunmujohoe';
import Weeklygeunmujohoe from './Weeklygeunmujohoe';

// 전체 직원 출결조회

type TabContentItem = {
    id: string;
    title: string;
    text: any;
};


const Jigwongeuntaejohoe = () => {
    const tabContents: TabContentItem[] = [
        {
            id: '1',
            title: '일별',
            text: <Dailygeunmujohoe />
        },
        {
            id: '2',
            title: '주별',
            text: <Weeklygeunmujohoe />
        },
        {
            id: '3',
            title: '월별',
            text: <Monthlygeunmujohoe />
        },
    ];

    return (
        <>
            <PageTitle
                breadCrumbItems={[

                ]}
                title={'근무기록'}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="일별">
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
                                {/* <Nav variant="tabs">
                                    <Nav.Item className="daygeunmu">
                                        <Nav.Link eventKey="1" className="daygeunmu1">
                                            <p className="daygeunmuTab">일별</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="weekgeunmu">
                                        <Nav.Link eventKey="2" className="weekgeunmu1">
                                            <p className="weekgeunmuTab">주별</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="monthgeunmu">
                                        <Nav.Link eventKey="3" className="monthgeunmu1">
                                            <p className="monthgeunmuTab">월별</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav> */}
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
                                {/* <Tab.Content>
                                    <Tab.Pane eventKey="1">
                                        <Dailygeunmujohoe />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2">
                                        <Weeklygeunmujohoe />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="3">
                                        <Monthlygeunmujohoe />
                                    </Tab.Pane>
                                </Tab.Content> */}
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Jigwongeuntaejohoe;
