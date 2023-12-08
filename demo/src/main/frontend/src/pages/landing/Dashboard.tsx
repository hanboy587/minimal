import { Row, Col, Card, Container } from 'react-bootstrap';
import { useState, useEffect, useRef } from 'react';
import { FaLaptopHouse } from "react-icons/fa";
import { MdOutlineSurfing } from "react-icons/md";
import { RiUserShared2Line } from "react-icons/ri";
import { FaHospitalUser } from "react-icons/fa";
import styled from "styled-components";
import './Dashboard.css';
import axios from 'axios';

interface Hyuga {
    Id: number;
    type: string;
    comment: string;
    username: string;
    realname: string;
    nowDate: Date;
    nowTime: Date;
    money: string;
}

interface Commute {
    idx: number;
    work: string;
    leave: string;
    realname: string;
}

interface OeChul {
    id: number;
    money: string;
    comment: string;
    username: string;
    realname: string;
    nowDate: Date;
    updateTime: string;
}

interface ApiResponse {
    hyuga?: Hyuga[] | null;
    commute?: Commute[] | null;
    oechul?: OeChul[] | null;
}



const Dashboard = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => { //실시간 초 작동
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return (() => clearInterval(id))
    }, []);
    const oneulNaljja = () => {
        let now = new Date();
        let olhaenYeondo = now.getFullYear();
        let olhaeWoldo = now.getMonth() + 1;
        let oneulNaljja = now.getDate();
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        let dayOfWeek = week[now.getDay()];
        return olhaenYeondo + '.' + olhaeWoldo + '.' + oneulNaljja + '.' + dayOfWeek + '요일'
    }
    const oneulSigan = () => {
        let now = new Date();
        let hours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
        let minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
        let seconds = now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds();
        return hours + '시' + minutes + '분' + seconds + '초';
    }

    // 출퇴근시간  왼쪽 side 
    const [data, setData] = useState(['출근완(09:00~18:00)', 2, 3, 4, 5]);
    const [result, setResult] = useState<any[]>([]);
    const [hyuga, setHyuga] = useState<Hyuga[] | null>();
    const [hyugaGaessu, setHyugaGaessu] = useState<Number>(0);
    const [commute, setCommute] = useState<Commute[] | null>();
    const [commuteGaessu, setCommuteGaessu] = useState<Number | null>(0);
    const [oechul, setOechul] = useState<OeChul[] | null>();
    const [oechulGaessu, setOechulGaessu] = useState<Number | null>(0);

    const formatSiganBunCho = (timeStr: string): string => {
        return new Date(timeStr).toLocaleTimeString('en-US', { hour12: false });
    }

    const bodeudeiteogajyeoogi = async () => {
        console.log("debug");
        const url = "/board";
        const res = await axios.get(url);
        if (res.data) {
            const { hyuga = [], commute = [], oechul = [] } = res.data as ApiResponse;

            console.log("hyuga : ", hyuga);
            console.log("commute : ", commute);
            console.log("oechul : ", oechul);
            if (hyuga) {
                setHyuga(hyuga);
                setHyugaGaessu(hyuga.length);
            }
            if (commute) {
                setCommute(commute);
                setCommuteGaessu(commute.length);
            }
            if (oechul) {
                setOechul(oechul);
                setOechulGaessu(oechul.length);
            }
        }
    }

    useEffect(() => {
        bodeudeiteogajyeoogi();
        const interval = setInterval(() => {
            bodeudeiteogajyeoogi();
        }, 60 * 1000); // 1분(60초) 마다 실행

        return () => clearInterval(interval);
    }, []);

    // 기존코드
    useEffect(() => {
        const intervalId = setInterval(() => {
            const n = data.length;
            let res = [];

            for (let i = 0; i < n; i++) {
                res.push(data[i % n]);
            }

            setResult(res);
            setData(prevData => [...prevData.slice(1), prevData[0]]);
        }, 1500); // 초단위시간 1000 = 1초

        return () => {
            clearInterval(intervalId);
        };
    }, [data]);

    // 갯수에따라 동작하는코드
    // useEffect(() => {
    //     let intervalId: NodeJS.Timeout | undefined = undefined;
    //     if (data.length >= 15) { //10이상부터 움직인다 
    //         intervalId = setInterval(() => {
    //             const n = data.length;
    //             let res = [];

    //             for (let i = 0; i < n; i++) {
    //                 res.push(data[i % n]);
    //             }

    //             setResult(res);
    //             setData(prevData => [...prevData.slice(1), prevData[0]]);
    //         }, 1500);
    //     } else {
    //         setResult(data);
    //     }

    //     return () => {
    //         if (intervalId !== undefined) {
    //             clearInterval(intervalId);
    //         }
    //     };
    // }, [data]);

    return (
        <>
            <Card>
                <Card.Body style={{ height: "100%" }}>


                    <Row style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                        <Col xl={9}>
                            <div style={{ fontSize: "40px", textAlign: "left", marginLeft: "30px" }} className="px-3 mt-3">
                                <p className="mb-0" style={{ padding: "10px" }}>
                                    {oneulNaljja()}
                                    {/* {date.toLocaleDateString().slice(0, -1)} */}
                                    <span className="mx-1">
                                        {oneulSigan().slice(0, 9)}
                                        {oneulSigan().slice(9, 12)}
                                        {oneulSigan().slice(12, 9)}
                                    </span>
                                </p>
                            </div>
                            <Row className="mt-3" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                                <Col md={12}>
                                    <Card className="widget-inline" style={{ boxShadow: "2px 1px 5px 2px #D6DCDE", border:"5px solid #FFFFFF" }}>
                                        <Card.Body className="p-0">
                                            <Row className="g-0">
                                                <Col sm={6} lg={3}> 
                                                    <Card className="shadow-none m-0 ">
                                                        <Card.Body className="text-center" >
                                                            <i className="text-muted"><FaHospitalUser style={{ fontSize: "30px", color: "#C5C5EE" }} /></i>
                                                            <p className="mt-2 mb-1" style={{ fontSize: "30px" }}>
                                                                {commuteGaessu}
                                                            </p>
                                                            <p className="mb-0" style={{ fontSize: "27px", color: "#BCBAC0" }}>출근</p>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col sm={6} lg={3}>
                                                    <Card className="shadow-none m-0 border-start">
                                                        <Card.Body className="text-center">
                                                            <i className="text-muted"><FaLaptopHouse style={{ fontSize: "30px", color: "#C5C5EE" }} /></i>
                                                            <p className="mt-2 mb-1" style={{ fontSize: "30px" }}>
                                                                0
                                                            </p>
                                                            <p className="mb-0" style={{ fontSize: "27px", color: "#BCBAC0" }}>재택</p>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col sm={6} lg={3}>
                                                    <Card className="shadow-none m-0 border-start border-end">
                                                        <Card.Body className="text-center">
                                                            <i className="text-muted "><MdOutlineSurfing style={{ fontSize: "30px", color: "#C5C5EE" }} /></i>
                                                            <p className="mt-2 mb-1" style={{ fontSize: "30px" }}>
                                                                {hyugaGaessu}
                                                            </p>
                                                            <p className="tmb-0" style={{ fontSize: "27px", color: "#BCBAC0" }}>휴가</p>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>

                                                <Col sm={6} lg={3}>
                                                    <Card className="shadow-none m-0 border-start">
                                                        <Card.Body className="text-center">
                                                            <i className="text-muted "><RiUserShared2Line style={{ fontSize: "30px", color: "#C5C5EE" }} /></i>
                                                            <p className="mt-2 mb-1" style={{ fontSize: "30px" }}>
                                                                {oechulGaessu}
                                                            </p>
                                                            <p className="mb-0" style={{ fontSize: "27px", color: "#BCBAC0" }}>외근</p>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                                <Col xs={4}>
                                    <Card style={{ boxShadow: "1px 1px 1px 2px #D6DCDE", border:"5px solid #FFFFFF" }}>
                                        <Card.Body className="rounded-3" style={{ minHeight: "300px", textAlign: "center" }}>
                                            <p style={{ fontSize: "30px", color: "#C5C5EE" }} className="mb-2">
                                                휴가 <MdOutlineSurfing />
                                            </p>
                                            {hyuga?.map((hyuga) => (
                                                <li key={hyuga.Id} style={{ fontSize: "22px" }} className="mb-2">
                                                    {hyuga.realname} <span style={{ fontSize: "18px" }}>({hyuga.type})</span>
                                                </li>
                                            ))}
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={4}>
                                    <Card style={{ boxShadow: "1px 1px 1px 2px #D6DCDE", border:"5px solid #FFFFFF" }}>
                                        <Card.Body className="rounded-3" style={{ minHeight: "300px", textAlign: "center" }}>
                                            <p style={{ fontSize: "30px", color: "#C5C5EE" }} className="mb-2">
                                                재택 <FaLaptopHouse />
                                            </p>
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={4}>
                                    <Card style={{ boxShadow: "1px 1px 1px 2px #D6DCDE", border:"5px solid #FFFFFF" }}>
                                        <Card.Body className="rounded-3" style={{ minHeight: "300px", textAlign: "center" }}>
                                            <p style={{ fontSize: "30px", color: "#C5C5EE" }} className="mb-2">
                                                외근 <RiUserShared2Line />
                                            </p>
                                            {oechul?.map((oechul) => (
                                                <li key={oechul.id} style={{ fontSize: "22px" }} className="mb-2">
                                                    {oechul.realname}
                                                </li>
                                            ))}
                                            
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className="mt-3" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                                <Col md={4}>
                                    <Card className="tilebox-one" style={{ boxShadow: "2px 1px 5px 2px #D6DCDE", border:"5px solid #FFFFFF" }}>
                                        <Card.Body>
                                            <p style={{ fontSize: "27px" }}>신계약건
                                                <span className="float-end">
                                                    <strong>0</strong> &nbsp;개
                                                </span>
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="tilebox-one" style={{ boxShadow: "2px 1px 5px 2px #D6DCDE", border:"5px solid #FFFFFF" }}>
                                        <Card.Body>
                                            <p style={{ fontSize: "27px" }}>해지건
                                                <span className="float-end">
                                                    <strong>0</strong> &nbsp;개
                                                </span>
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="tilebox-one" style={{ boxShadow: "2px 1px 5px 2px #D6DCDE", border:"5px solid #FFFFFF" }}>
                                        <Card.Body>
                                            <p style={{ fontSize: "27px" }}>보류건
                                                <span className="float-end">
                                                    <strong>0</strong> &nbsp;개
                                                </span>
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            </Row>
                            <Row className="mt-3" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                                <Col md={4}>
                                    <Card className="tilebox-one" style={{ boxShadow: "2px 1px 5px 2px #D6DCDE", border:"5px solid #FFFFFF" }}>
                                        <Card.Body>
                                            <p style={{ fontSize: "27px" }}>인사노무자문사
                                                <span className="float-end">
                                                    <strong>0</strong> &nbsp;개
                                                </span>
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={4}>
                                    <Card className="tilebox-one" style={{ boxShadow: "2px 1px 5px 2px #D6DCDE", border:"5px solid #FFFFFF" }}>
                                        <Card.Body>
                                            <p style={{ fontSize: "27px" }}>세무회계자문사
                                                <span className="float-end">
                                                    <strong>0</strong> &nbsp;개
                                                </span>
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                
                            </Row>

                        </Col>
                        <Col xl={3}>
                            <Row className="mt-4" style={{ paddingTop: "89px", minHeight: "1100px" }}>
                                <Card style={{ boxShadow: "2px 1px 5px 2px #D6DCDE", border:"5px solid #FFFFFF" }}>
                                    <Card.Body>
                                        <p style={{ fontSize: "30px", fontWeight: "bold" }}>직원출퇴근</p>

                                        <div>
                                            <ul className="list">
                                                {commute?.map((commute, index) => {
                                                    console.log(commute);
                                                    if (commute.work && commute.leave == null) {
                                                        return (
                                                            <li key={index} style={{ fontSize: "27px" }} className="mb-2">
                                                                <span style={{ fontSize: "22px" }}>인사팀</span> 
                                                                <span style={{ fontSize: "18px" }}>(7700)</span> &nbsp;
                                                                {commute.realname} : &nbsp; 
                                                                <span style={{ fontSize: "22px" }}>
                                                                    {commute.work && formatSiganBunCho(commute.work)}
                                                                </span>
                                                                {/* <span style={{ fontSize: "22px" }}>인사팀</span> 
                                                                <span style={{ fontSize: "18px" }}>(7700)</span> &nbsp; */}
                                                            </li>
                                                        )
                                                    } else {
                                                        return null;
                                                    }
                                                })}

                                                {/* {result.map((item, index) => (
                                                    <li
                                                        className={`item ${index === result.length - 1 ? 'last' : ''}`} // 클래스 조건 추가
                                                        key={index}
                                                    >
                                                        {item}
                                                    </li>
                                                ))} */}
                                            </ul>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default Dashboard;