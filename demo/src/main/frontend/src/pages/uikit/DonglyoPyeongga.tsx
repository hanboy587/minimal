import { Row, Col, Card, Tab, Nav,Button, } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaTimes } from "react-icons/fa";
import DonglyoPyeonggaSeongGwa from './DonglyoPyeonggaSeongGwa';

const DonglyoPyeongga = () => {

    type TabContentItem = {
        id: string;
        title: string;
        text: any;
    };

    const [tabContents, setTabContents] = useState<TabContentItem[]>([
        {
            id: '1',
            title: '동료평가',
            text: <DonglyoPyeonggaSeongGwa />
        },
    ]);
    const addTab = () => {
        const newId = (tabContents.length + 1).toString();
        const newTitle = `동료평가 ${newId}`;
        const newTab = {
            id: newId,
            title: newTitle,
            text: <DonglyoPyeonggaSeongGwa />
        };
        setTabContents([...tabContents, newTab]);
    };
    const deleteTab = (id: string) => {
        const newTabContents = tabContents.filter((tab) => tab.id !== id);
        setTabContents(newTabContents);
      };

    return (
        <>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="동료평가">
                                <Nav variant="tabs">
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Nav.Item key={index.toString()}>
                                                <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                    <i></i>
                                                    <span>{tab.title}</span>
                                                    <FaTimes
                                                        className="ms-2"
                                                        onClick={() => deleteTab(tab.id)}
                                                    />
                                                </Nav.Link>
                                            </Nav.Item>
                                        );
                                    })}
                                    <Nav.Item>
                                        <Button onClick={addTab}>추가</Button>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Tab.Pane eventKey={tab.title} id={tab.id} key={index.toString()} >
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mt-3">{tab.text}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        );
                                    })}
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default DonglyoPyeongga;