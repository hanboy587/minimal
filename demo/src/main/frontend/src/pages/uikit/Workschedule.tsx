import { Row, Col, Card, Container, Button, Modal, Form, Tab, Nav } from 'react-bootstrap';
import React, { useState, SetStateAction, useEffect, } from "react";
import { useToggle } from 'hooks';
import { TextArea } from '@progress/kendo-react-inputs';
import { Outline } from 'react-pdf';
import { useModal } from './hooks';
import { ReactSortable } from 'react-sortablejs';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import Workbatch from './Workbatch';
import Weeklywork from './Weeklywork';
import { ChipList,} from "@progress/kendo-react-buttons";
import { flatChildren } from '@progress/kendo-react-layout';

// Tab 설정
type TabContentItem = {
    id: string;
    icon: string;
    title: string;
    text: any;
};

// 요일설정
interface Day {
    text: string;
    value: string;
    disabled: boolean;

}


const onedayweek: Day[] = [
    {
        text: "월",
        value: "Mon",
        disabled: true,
    },
    {
        text: "화",
        value: "Tue",
        disabled: true,
    },
    {
        text: "수",
        value: "Wed",
        disabled: true,
    },
    {
        text: "목",
        value: "Thu",
        disabled: true,
    },
    {
        text: "금",
        value: "Fri",
        disabled: true,
    },
    {
        text: "토",
        value: "Sat",
        disabled: false,
    },
    {
        text: "일",
        value: "Sun",
        disabled: false,
    },
];

const Workschedule = () => {
    // 모달크기
    const { size, className, scroll, toggleModal, openModalWithSize, openModalWithClass, openModalWithScroll } =
        useModal();
    const [isOpen, toggleBasic] = useToggle(); //
    const [isOpen1, toggleSummer] = useToggle();
    const [isOpen2, toggleSicha] = useToggle();
    const [isOpen3, toggleAdd] = useToggle(); //일정생성추가
    const [isOpen4, toggleBasicadd] = useToggle(); // 일반일정생성

    // 일정유형 select option
    const scheduletypeselectList = [
        "기본일반", "생산탄력", "연구선택1개월",
        "사무시차", "영업간주", "경호 4조3교대",
    ];
    const [scheduletypeSelected, setscheduletypeSelected] = useState("");
    const scheduletypehandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setscheduletypeSelected(e.target.value);
    };

    // 근무일정tab
    const tabContents: TabContentItem[] = [
        {
            id: '1',
            title: '일괄설정',
            icon: 'mdi mdi-home-variant',
            text: <Workbatch />
        },
        {
            id: '2',
            title: '요일별설정',
            icon: 'mdi mdi-account-circle',
            text: <Weeklywork />
        },
    ];


    return (
        <>

            <section className="py-3 mt-3">
                <Container>
                    <Row className=" mt-3 mb-2">
                        <Col sm={4}>
                            <Button variant="primary" className="rounded-pill mb-3"  onClick={toggleAdd}>
                                <i className="mdi mdi-plus"></i> 근무일정 생성
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} xxl={3}>
                            <Card>
                                <Card.Body>
                                    <p><i className="mdi mdi-circle text-success mx-1"></i>
                                        <Link to="" onClick={toggleBasic} style={{ fontSize: "20px" }}>
                                            기본근로
                                        </Link>
                                    </p>
                                    <p>
                                        근무시간 : 09:00 ~ 18:00
                                    </p>
                                    <p>
                                        휴식시간 : 12:00 ~ 13:00
                                    </p>
                                    <p>
                                        주 40시간 근무
                                    </p>
                                    <hr />
                                    <p>
                                        <span className="px-2">
                                            <ChipList defaultData={onedayweek} disabled={true} size="small"/>
                                        </span>
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>
                </Container>
            </section>
            {/* 기본근로 */}
            <Modal show={isOpen} onHide={toggleBasic} size="xl" scrollable>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">근로시간</h5>
                </Modal.Header>
                <Modal.Body className="qna mt-2">
                <Row className="mb-3">
                        <Col style={{ fontSize: "25px" }} className="px-2">
                            명칭: 기본근로
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col style={{ fontSize: "25px" }} className="px-2">
                            적용가능대상
                        </Col>
                    </Row>
                    <Row className="mb-1 px-2">
                        <Col xl={2} style={{ fontSize: "20px" }} className="px-2 mb-1">
                            조직 : 전체
                        </Col>
                        <Col xl={2} style={{ fontSize: "20px" }} className="px-2 mb-1">
                            직급 : 전체
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="d-flex" style={{ fontSize: "20px" }}>기본일정지정 &nbsp;&nbsp;
                                <Form.Check type="switch" id="custom-switch"   />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Tab.Container defaultActiveKey="일괄설정">
                            <Nav variant="tabs" className="nav-bordered" as="ul">
                                {tabContents.map((tab, index) => {
                                    return (
                                        <Nav.Item key={index.toString()} as="li">
                                            <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                <i
                                                    className={classnames(tab.icon, 'd-md-none', 'd-block', 'me-1')}
                                                ></i>
                                                <span className="d-none d-md-block">{tab.title}</span>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" variant="link" onClick={toggleBasic} className="">
                        취소
                    </Button>
                    <Button size="sm" variant="link" type="submit" onClick={toggleBasic} >
                        생성
                    </Button>
                </Modal.Footer>
            </Modal>
            
            {/* 유형추가 1 */}
            <Modal show={isOpen3} onHide={toggleAdd}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">근로시간 생성하기</h5>
                </Modal.Header>
                <Modal.Body className="qna mt-2">
                    <Row className="mb-3">
                        <Col style={{ fontSize: "25px" }} className="px-2">
                            명칭: <input type="text" style={{ width: "185px", border: "1px solid #EEEEEE" }}></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ fontSize: "25px" }} className="px-2">
                            유형:
                            <select name="typebox" style={{ width: "185px", border: "1px solid #EEEEEE" }}
                                onChange={scheduletypehandleSelect} value={scheduletypeSelected}
                            >
                                {scheduletypeselectList.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" variant="link" onClick={toggleAdd} className="">
                        취소
                    </Button>
                    <Button
                        size="sm" variant="link" type="submit"
                        onClick={() => {
                            toggleAdd();
                            toggleBasicadd();
                        }}>
                        생성
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* 일반근로유형생성 */}
            <Modal show={isOpen4} onHide={toggleBasicadd} size="xl" scrollable>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white"> 일반근로 생성하기</h5>
                </Modal.Header>
                <Modal.Body className="qna mt-2">
                    <Row className="mb-3">
                        <Col style={{ fontSize: "25px" }} className="px-2">
                            명칭:
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col style={{ fontSize: "25px" }} className="px-2">
                            적용가능대상
                        </Col>
                    </Row>
                    <Row className="mb-1 px-2">
                        <Col xl={2} style={{ fontSize: "20px" }} className="px-2 mb-1">
                            조직: &nbsp;&nbsp;
                            <select style={{ border: "1px solid #EEEEEE" }}>
                                <option>전체</option>
                                <option>인사</option>
                                <option>개발</option>
                                <option>생산</option>
                            </select>
                        </Col>
                        <Col xl={2} style={{ fontSize: "20px" }} className="px-2 mb-1">
                            직급:  &nbsp;&nbsp;
                            <select style={{ border: "1px solid #EEEEEE" }}>
                                <option>전체</option>
                                <option>팀장</option>
                                <option>대리</option>
                                <option>사원</option>
                            </select>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="d-flex" style={{ fontSize: "20px" }}>기본일정지정 &nbsp;&nbsp;
                                <Form.Check type="switch" id="custom-switch" />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Tab.Container defaultActiveKey="일괄설정">
                            <Nav variant="tabs" className="nav-bordered" as="ul">
                                {tabContents.map((tab, index) => {
                                    return (
                                        <Nav.Item key={index.toString()} as="li">
                                            <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                <i
                                                    className={classnames(tab.icon, 'd-md-none', 'd-block', 'me-1')}
                                                ></i>
                                                <span className="d-none d-md-block">{tab.title}</span>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" variant="link" onClick={toggleBasicadd} className="">
                        취소
                    </Button>
                    <Button size="sm" variant="link" type="submit" onClick={toggleBasicadd} >
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Workschedule;