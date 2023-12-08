import { Card, Row, Col, Button, Navbar, Nav, NavDropdown, Form, FormControl, } from 'react-bootstrap';
import TotaltimeGraph from './TotaltimeGraph';
import { Link } from 'react-router-dom';
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Scheduler,
    AgendaView,
    TimelineView,
    DayView,
    WeekView,
    MonthView,
} from "@progress/kendo-react-scheduler";
import { useRedux, useToggle, useViewport } from 'hooks';
import { showRightSidebar, changeSidebarType } from 'redux/actions';
import * as layoutConstants from 'appConstants';
import classNames from 'classnames';
import BottomNav from './BottomNav';
import { useEffect, useState, } from 'react';
import axios from 'axios';
import { useMediaQuery } from "react-responsive";


const ManagerBoard = () => {
    const tabs = [{
        route: "/home",
        icon: 'dri dripicons-thumbs-up',
        label: 'home'
    }, {
        route: "/search",
        icon: 'dri dripicons-thumbs-up',
        label: 'Search'
    }, {
        route: "/login",
        icon: 'dri dripicons-thumbs-up',
        label: 'Login'
    }]

    // useEffect
    const [chulgeun, setChulgeun] = useState('0')
    const [yeoncha, setYeoncha] = useState('0')
    const [hyuga, setHyuga] = useState('0')
    const [jigag, setJigag] = useState('0')
    const [geuntaeyocheong, setGeuntaeyocheong] = useState('')
    const [yeonchayocheong, setYeonchayocheong] = useState('')
    const [hyugayocheong, setHyugayocheong] = useState('')
    const [jotoeyocheong, setJotoeyocheong] = useState('')
    const [chuljangyocheong, setChuljangyocheong] = useState('')
    const [oegeunyocheong, setOegeunyocheong] = useState('100')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('url');
                setChulgeun(res.data[0].chulgeun)
                setYeoncha(res.data[0].yeoncha)
                setHyuga(res.data[0].hyuga)
                setJigag(res.data[0].jigag)
                setGeuntaeyocheong(res.data[0].geuntaeyocheong)
                setYeonchayocheong(res.data[0].yeonchayocheong)
                setHyugayocheong(res.data[0].hyugayocheong)
                setJotoeyocheong(res.data[0].jotoeyocheong)
                setChuljangyocheong(res.data[0].chuljangyocheong)
                setOegeunyocheong(res.data[0].oegeunyocheong)

            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    // 요청현황부분 미디어쿼리
    const isPC: boolean = useMediaQuery({
        query: "(min-width:335px)",
    });
    const isfold: boolean = useMediaQuery({
        query: "(max-width:334px)",
    });
    return (
        <>
            {/* <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar> */}
            <Row className="mt-3">
                <Col xs={12}>
                    <Card className="widget-inline">
                        <Card.Body className="p-0">
                            <Row className="g-0">
                                <Col sm={6} lg={3}>
                                    <Card className="shadow-none m-0 ">
                                        <Card.Body className="text-center">
                                            <i className="dripicons-user-group text-muted font-24"></i>
                                            <h3>
                                                <span>100</span>
                                            </h3>
                                            <p className="text-info font-15 mb-0">전체직원</p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col sm={6} lg={3}>
                                    <Card className="shadow-none m-0 border-start">
                                        <Card.Body className="text-center">
                                            <i className="dripicons-clock text-muted font-24"></i>
                                            <h3>
                                                <span>{chulgeun}</span>
                                            </h3>
                                            <p className="text-info font-15 mb-0">출근자</p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col sm={6} lg={3}>
                                    <Card className="shadow-none m-0 border-start">
                                        <Card.Body className="text-center">
                                            <i className=" dripicons-brightness-max text-muted font-24"></i>
                                            <h3>
                                                <span>{yeoncha} / {hyuga} </span>
                                            </h3>
                                            <p className="text-info font-15 mb-0">연차 / 휴가</p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col sm={6} lg={3}>
                                    <Card className="shadow-none m-0 border-start">
                                        <Card.Body className="text-center">
                                            <i className=" dripicons-stopwatch text-muted font-24"></i>
                                            <h3>
                                                <span>{jigag}</span>
                                            </h3>
                                            <p className="text-info font-15 mb-0">지각</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={4}>
                    <Card>
                        <Card.Body className="rounded-3" style={{minHeight:"300px"}}>
                            <p style={{fontSize:"22px",color:"skyblue"}} className="mb-2">
                                연차
                            </p>
                            <li style={{fontSize:"16px"}} className="mb-2">
                                명단1
                            </li>
                            <li style={{fontSize:"16px"}} className="mb-2">
                                명단2
                            </li>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <Card.Body className="rounded-3" style={{minHeight:"300px"}}>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <Card.Body className="rounded-3" style={{minHeight:"300px"}}>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* {isPC &&
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <div>
                                    <p style={{ fontSize: "18px" }}>요청 현황
                                        <a href="/ui/base-ui/accordions" className="float-end">전자결재 바로가기</a>
                                    </p>
                                </div>
                                <Row>
                                    <Col xl={4}>
                                        <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                            <div className="flex-shrink-0 me-2">
                                                <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="fw-semibold my-0" style={{ fontSize: "20px" }}>근태수정</p>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "25px", color: "blue", fontWeight: "bold" }}>{geuntaeyocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                            <div className="flex-shrink-0 me-2">
                                                <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3 className="fw-semibold my-0">연차신청</h3>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>{yeonchayocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                            <div className="flex-shrink-0 me-2">
                                                <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3 className="fw-semibold my-0">휴가신청</h3>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>{hyugayocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={4}>
                                        <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                            <div className="flex-shrink-0 me-2">
                                                <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3 className="fw-semibold my-0">조퇴</h3>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>{jotoeyocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                            <div className="flex-shrink-0 me-2">
                                                <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3 className="fw-semibold my-0">출장신청</h3>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>{chuljangyocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                            <div className="flex-shrink-0 me-2">
                                                <i className="mdi mdi-draw-pen widget-icon rounded-circle bg-warning-lighten text-danger"></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3 className="fw-semibold my-0">외근신청</h3>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>{oegeunyocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            }
            {isfold &&
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <div>
                                    <p style={{ fontSize: "18px" }}>요청 현황</p>
                                    <p className="text-end">
                                        <a href="/ui/base-ui/accordions" >전자결재 바로가기</a>
                                    </p>
                                </div>
                                <Row className="mt-1">
                                    <Col>
                                        <div className="d-flex align-items-center border border-light rounded  p-3 mb-2">
                                            <div className="flex-shrink-0 me-1">
                                                <i className="mdi mdi-checkbox-blank-circle text-warning" style={{ fontSize: "10px" }}></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="fw-semibold my-0" style={{ fontSize: "15px" }}>근태수정</p>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "25px", color: "blue", fontWeight: "bold" }}>{geuntaeyocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                        <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                            <div className="flex-shrink-0 me-1">
                                                <i className="mdi mdi-checkbox-blank-circle text-warning" style={{ fontSize: "10px" }}></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="fw-semibold my-0" style={{ fontSize: "15px" }}>연차신청</p>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>{yeonchayocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                            <div className="flex-shrink-0 me-1">
                                                <i className="mdi mdi-checkbox-blank-circle text-warning" style={{ fontSize: "10px" }}></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="fw-semibold my-0" style={{ fontSize: "15px" }}>휴가신청</p>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>{hyugayocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                            <div className="flex-shrink-0 me-1">
                                                <i className="mdi mdi-checkbox-blank-circle text-warning" style={{ fontSize: "10px" }}></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="fw-semibold my-0" style={{ fontSize: "15px" }}>조퇴신청</p>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>{jotoeyocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                            <div className="flex-shrink-0 me-1">
                                                <i className="mdi mdi-checkbox-blank-circle text-warning" style={{ fontSize: "10px" }}></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="fw-semibold my-0" style={{ fontSize: "15px" }}>출장신청</p>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>{chuljangyocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="d-flex align-items-center border border-light rounded p-3 mb-2">
                                            <div className="flex-shrink-0 me-1">
                                                <i className="mdi mdi-checkbox-blank-circle text-warning" style={{ fontSize: "10px" }}></i>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="fw-semibold my-0" style={{ fontSize: "15px" }}>외근신청</p>
                                            </div>
                                            <p className="mb-0" style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>{oegeunyocheong}</p>&nbsp; 건
                                        </div>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            } */}
            <Row>
                <TotaltimeGraph />
            </Row>
            <Row>
                <BottomNav />
            </Row>

        </>
    );
};

export default ManagerBoard;