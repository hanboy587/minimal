import React, { useEffect, useState, SetStateAction, } from 'react';
import { Row, Col, Card, Table, Button,} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Weeklyplan = () => {

    // textarea 지난주목표
    const [Lastmogpyo, setLastmogpyo] = useState("");
    const handleSetValue1 = (e: any) => {
        setLastmogpyo(e.target.value);
    };
    const handleSetTab1 = (e: any) => {
        console.log(e.keyCode);
        if (e.keyCode === 9) {
            e.preventDefault();
            let val = e.target.value;
            let start = e.target.selectionStart;
            let end = e.target.selectionEnd;
            e.target.value = val.substring(0, start) + "\t" + val.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 1;
            handleSetValue1(e);
            return false; //  prevent focus
        }
    };
    // textarea 지난주결과 
    const [Lastgyeolgwa, setLastgyeolgwa] = useState("");
    const handleSetValue2 = (e: any) => {
        setLastgyeolgwa(e.target.value);
    };
    const handleSetTab2 = (e: any) => {
        console.log(e.keyCode);
        if (e.keyCode === 9) {
            e.preventDefault();
            let val = e.target.value;
            let start = e.target.selectionStart;
            let end = e.target.selectionEnd;
            e.target.value = val.substring(0, start) + "\t" + val.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 1;
            handleSetValue2(e);
            return false; //  prevent focus
        }
    };
    // textarea 이번주목표
    const [Thisweekmogpyo, setThisweekmogpyo] = useState("");
    const handleSetValue3 = (e: any) => {
        setThisweekmogpyo(e.target.value);
    };
    const handleSetTab3 = (e: any) => {
        console.log(e.keyCode);
        if (e.keyCode === 9) {
            e.preventDefault();
            let val = e.target.value;
            let start = e.target.selectionStart;
            let end = e.target.selectionEnd;
            e.target.value = val.substring(0, start) + "\t" + val.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 1;
            handleSetValue3(e);
            return false; //  prevent focus
        }
    };
    // textarea 피드백을통한지식발견 
    const [Feedback, setFeedback] = useState("");
    const handleSetValue4 = (e: any) => {
        setFeedback(e.target.value);
    };
    const handleSetTab4 = (e: any) => {
        console.log(e.keyCode);
        if (e.keyCode === 9) {
            e.preventDefault();
            let val = e.target.value;
            let start = e.target.selectionStart;
            let end = e.target.selectionEnd;
            e.target.value = val.substring(0, start) + "\t" + val.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 1;
            handleSetValue4(e);
            return false; //  prevent focus
        }
    };
    // textarea 새로운도전아이디어
    const [Challenges, setChallenges] = useState("");
    const handleSetValue5 = (e: any) => {
        setChallenges(e.target.value);
    };
    const handleSetTab5 = (e: any) => {
        console.log(e.keyCode);
        if (e.keyCode === 9) {
            e.preventDefault();
            let val = e.target.value;
            let start = e.target.selectionStart;
            let end = e.target.selectionEnd;
            e.target.value = val.substring(0, start) + "\t" + val.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 1;
            handleSetValue5(e);
            return false; //  prevent focus
        }
    };
    // textarea 지원및요청
    const [Support, setSupport] = useState("");
    const handleSetValue6 = (e: any) => {
        setSupport(e.target.value);
    };
    const handleSetTab6 = (e: any) => {
        console.log(e.keyCode);
        if (e.keyCode === 9) {
            e.preventDefault();
            let val = e.target.value;
            let start = e.target.selectionStart;
            let end = e.target.selectionEnd;
            e.target.value = val.substring(0, start) + "\t" + val.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 1;
            handleSetValue6(e);
            return false; //  prevent focus
        }
    };

    // input 값 내보내기 
    const [inputs, setInputs] = useState({
        lastweekdate1: "",
        lastweekdate2: "",
        thisweekdate1: "",
        thisweekdate2: "",
    });
    const { lastweekdate1, lastweekdate2, thisweekdate1, thisweekdate2 } = inputs;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            lastweekdate1: "",
            lastweekdate2: "",
            thisweekdate1: "",
            thisweekdate2: "",
        });
    };


    async function postData() {
        try {
            const response = await axios.post('url?', {
                lastweekdate1: "",
                lastweekdate2: "",
                thisweekdate1: "",
                thisweekdate2: "",
            });
            console.log(response);
        } catch (error) {
            // 응답실패
            console.error(error);
        }
    };

    // useEffect

    const [geunloname, setGeunloname] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('url');
                setGeunloname(res.data[0].geunloname)
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);


    return (
        <>
            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <div>
                                <Row>
                                    <Col xl={6}>
                                        <p style={{ fontSize: "30px", color: "indigo", fontWeight: "bold" }}>
                                            주간업무 Report
                                        </p>
                                    </Col>
                                    <Col xl={6}>
                                        <p style={{ fontSize: "25px", textAlign: "right"  }}>작성자&nbsp;&nbsp;
                                            <input
                                                style={{ width: "200px", borderRadius: "15px", border: "2px solid #EEEEEE", }}name="geunloname" value={geunloname}>
                                            </input>
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mt-2">
                                <Row>
                                    <Col xl={6}>
                                        <p className="mb-3" style={{ fontSize: "20px" }}>지난주 : ⟮
                                            <input
                                                type="date" style={{ width: "150px", border: "2px solid #FFFFFF", outline: "none" }} name="lastweekdate1" value={lastweekdate1} onChange={onChange}>
                                            </input> ~
                                            <input
                                                type="date" style={{ width: "150px", border: "2px solid #FFFFFF", outline: "none" }} name="lastweekdate2" value={lastweekdate2} onChange={onChange}>
                                            </input> ⟯
                                        </p>
                                        <Row>
                                            <Col xl={5}>
                                                <Table className="lastweekmogpyo" style={{ textAlign: "center" }} bordered>
                                                    <thead className="table-primary">
                                                        <tr>
                                                            <th style={{fontSize:"20px"}}>목표</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <textarea style={{ width: "100%", height: "300px", border: "2px solid #FFFFFF", outline: "none", fontSize: "20px" }}
                                                                    placeholder="지난주 목표를 입력해 주세요"
                                                                    value={Lastmogpyo}
                                                                    onChange={(e) => handleSetValue1(e)}
                                                                    onKeyDown={(e) => handleSetTab1(e)}
                                                                ></textarea>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                            <Col xl={7}>
                                                <Table className="lastweekgyeolgwa" style={{ textAlign: "center" }} bordered>
                                                    <thead className="table-primary">
                                                        <tr>
                                                            <th style={{fontSize:"20px"}}>결과</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <textarea style={{ width: "100%", height: "300px", border: "2px solid #FFFFFF", outline: "none", fontSize: "20px" }}
                                                                    placeholder="지난주 목표 결과를 입력해 주세요"
                                                                    value={Lastgyeolgwa}
                                                                    onChange={(e) => handleSetValue2(e)}
                                                                    onKeyDown={(e) => handleSetTab2(e)}
                                                                ></textarea>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xl={6}>
                                        <p className="mb-3" style={{ fontSize: "20px" }}>이번주 : ⟮
                                            <input
                                                type="date" style={{ width: "150px", border: "2px solid #FFFFFF", outline: "none" }} name="thisweekdate1" value={thisweekdate1} onChange={onChange}>
                                            </input> ~
                                            <input
                                                type="date" style={{ width: "150px", border: "2px solid #FFFFFF", outline: "none" }} name="thisweekdate2" value={thisweekdate2} onChange={onChange}>
                                            </input> ⟯
                                        </p>
                                        <Table className="Thisweekmogpyo" style={{ textAlign: "center" }} bordered>
                                            <thead className="table-primary">
                                                <tr>
                                                    <th style={{fontSize:"20px"}}>목표</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <textarea style={{ width: "100%", height: "300px", border: "2px solid #FFFFFF", outline: "none", fontSize: "20px" }}
                                                            placeholder="이번주 목표를 입력해 주세요"
                                                            value={Thisweekmogpyo}
                                                            onChange={(e) => handleSetValue3(e)}
                                                            onKeyDown={(e) => handleSetTab3(e)}
                                                        ></textarea>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col xl={6}>
                                        <div className="border p-3 mb-3 rounded" style={{ backgroundColor: "#e3e5fd" }}>
                                            <p style={{ fontSize: "20px" }}>💡피드백을 통한 지식 발견</p>
                                            <textarea style={{ width: "100%", height: "300px", border: "0px solid #FFFFFF", outline: "none", backgroundColor: "#e3e5fd", fontSize: "20px" }}
                                                value={Feedback}
                                                onChange={(e) => handleSetValue4(e)}
                                                onKeyDown={(e) => handleSetTab4(e)}
                                            ></textarea>
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <Row>
                                            <div className="border p-1 mb-2 rounded" style={{ backgroundColor: "#EFEFF1" }}>
                                                <p style={{ fontSize: "20px" }}>📝새로운 도전 • 아이디어 & Check</p>
                                                <textarea style={{ width: "100%", height: "130px", border: "0px solid #FFFFFF", outline: "none", backgroundColor: "#EFEFF1", fontSize: "20px" }}
                                                    value={Challenges}
                                                    onChange={(e) => handleSetValue5(e)}
                                                    onKeyDown={(e) => handleSetTab5(e)}
                                                ></textarea>
                                            </div>
                                        </Row>
                                        <Row>
                                            <div className="border p-1 mb-3 rounded" style={{ backgroundColor: "#EFEFF1" }}>
                                                <p style={{ fontSize: "20px" }}>🔊지원 및 요청</p>
                                                <textarea style={{ width: "100%", height: "130px", border: "0px solid #FFFFFF", outline: "none", backgroundColor: "#EFEFF1", fontSize: "20px" }}
                                                    value={Support}
                                                    onChange={(e) => handleSetValue6(e)}
                                                    onKeyDown={(e) => handleSetTab6(e)}
                                                ></textarea>
                                            </div>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Link to="/ui/base-ui/notifications">
                                    <Button className="float-start"
                                        style={{
                                            borderRadius: "15px",
                                            padding: "1rem 2rem",
                                            background: "#8181F7",
                                            color: "white",
                                            textAlign: "right"
                                        }}>이전
                                    </Button>
                                </Link>
                                <Button type="submit"  className="float-end"
                                    style={{
                                        borderRadius: "15px",
                                        padding: "1rem 2rem",
                                        background: "#8181F7",
                                        color: "white",
                                        textAlign: "right"
                                    }}>저장
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};


export default Weeklyplan;