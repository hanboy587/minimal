import { SetStateAction, useState } from 'react';
import { Row, Col, Card, Alert, Button, Form, Modal, Tab, Nav } from 'react-bootstrap';
import { PageTitle, FormInput, } from 'components';
import { Wizard, Steps, Step } from 'react-albus';
import { useForm } from 'react-hook-form';
import { useToggle } from 'hooks';
import Yeongseyulpage from './Buttons';
import Ilbanpage from './Alerts';
import Wisutagpage from './Cards';
import Yeongseyulwisutagpage from './Carousel';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

type TabContentItem = {
    id: string;
    title: string;
    text: any;
};

const Jeonjasegeumgyesanseo = () => {
    // radio 
    // const [selectedValue, setSelectedValue] = useState('ilban');
    // const handleRadioChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    //     setSelectedValue(e.target.value);
    // };

    // tab
    const tabContents: TabContentItem[] = [
        {
            id: '1',
            title: '일반',
            text: <Ilbanpage />,
        },
        {
            id: '2',
            title: '영세율',
            text: <Yeongseyulpage />,
        },
        {
            id: '3',
            title: '위수탁',
            text: <Wisutagpage />,
        },
        {
            id: '4',
            title: '영세율위수탁',
            text: <Yeongseyulwisutagpage />,
        },
    ];

    return (
        <>
            <div className="mt-3">
                <Card>
                    <Card.Body>
                        <div>
                            <span className="header-title mb-5" style={{ fontSize: "22px" }}> 거래처 정보를 입력해주세요</span>
                        </div>
                        {/* <span className="float-end  mb-0" style={{ fontSize: "18px" }}>
                            공급자 구분 * &nbsp;&nbsp;
                            <input type="radio" name="radio"></input> 기업 &nbsp;
                            <input type="radio" name="radio"></input> 개인 &nbsp;
                            <input type="radio" name="radio"></input> 외국인
                        </span> */}
                        <Tab.Container defaultActiveKey="일반">
                            <Nav variant="tabs" justify className="nav-bordered" as="ul">
                                {tabContents.map((tab, index) => {
                                    return (
                                        <Nav.Item key={index.toString()} as="li">
                                            <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                <i></i>
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
                                                    <span className="mt-3">{tab.text}</span>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    );
                                })}
                            </Tab.Content>
                        </Tab.Container>
                    </Card.Body>
                </Card>
                {/* <Card>
                    <Card.Body>
                        <div>
                            <p className="header-title mb-5" style={{ fontSize: "22px" }}> 거래처 정보를 입력해주세요</p>
                        </div>
                        <div className=" text-black mb-0">공급자 구분 * &nbsp;&nbsp;
                            <input type="radio" value="ilban" name="gubun" checked={selectedValue === 'ilban'} onChange={handleRadioChange} /> 일반 &nbsp;
                            <input type="radio" value="yeongseyul" name="gubun" checked={selectedValue === 'yeongseyul'} onChange={handleRadioChange} /> 영세율 &nbsp;
                            <input type="radio" value="wisutag" name="gubun" checked={selectedValue === 'wisutag'} onChange={handleRadioChange} /> 위수탁 &nbsp;
                            <input type="radio" value="yeongseyulwisutag" name="gubun" checked={selectedValue === 'yeongseyulwisutag'} onChange={handleRadioChange} /> 영세율위수탁 &nbsp;
                            <span className="float-end text-black mb-0">
                                공급자 구분 * &nbsp;&nbsp;
                                <input type="radio" name="radio"></input> 기업 &nbsp;
                                <input type="radio" name="radio"></input> 개인 &nbsp;
                                <input type="radio" name="radio"></input> 외국인
                            </span>
                        </div>
                        <div className="mt-3">
                            {selectedValue === 'ilban' && <Ilbanpage />}
                            {selectedValue === 'yeongseyul' && <Yeongseyulpage />}
                            {selectedValue === 'wisutag' && <Wisutagpage />}
                            {selectedValue === 'yeongseyulwisutag' && <Yeongseyulwisutagpage />}
                        </div>

                    </Card.Body>
                </Card> */}
            </div>
        </>
    );
};

export default Jeonjasegeumgyesanseo;