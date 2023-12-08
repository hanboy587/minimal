import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import { FileUploader, PageTitle } from 'components';
import '@progress/kendo-theme-default/dist/all.css'
import { useMediaQuery } from "react-responsive";
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { testPdf } from 'utils/testPdf';
import { VscAdd } from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import Select from 'react-select';

const FaxForm = () => {
    // 미디어쿼리
    const isPc: boolean = useMediaQuery({
        query: "(min-width:520px) ",
    });
    const isMobile: boolean = useMediaQuery({
        query: " (max-width:519px)",
    });

    // 최근발송 list (미완성)
    const [balsinlist, setBalsinlist] = useState(
        JSON.parse(localStorage.getItem('balsinlist') || '[]'),
    )
    useEffect(() => {
        localStorage.setItem('balsinlist', JSON.stringify(balsinlist))
    }, [balsinlist])

    // mobile fax번호 등록input
    const [inputFaxNum, setInputFaxNum] = useState("");
    const [nextId, setNextId] = useState(2);
    const [numberItem, setNumberItem] = useState([{ id: 1, number: '00' },]);

    // fax번호 등록 표시 
    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setInputFaxNum(e.target.value);
    const hadleClick = () => {
        const newList = numberItem.concat({
            id: nextId,
            number: inputFaxNum
        });
        setNextId(nextId + 1);
        setNumberItem(newList);
        setInputFaxNum('');
    }
    // fax번호 삭제
    const handleDelete = (id: number) => {
        const newList = numberItem.filter(numberItem => numberItem.id !== id);
        setNumberItem(newList);
    };
    const numberItemList = numberItem.map((numberItem) =>
        <div key={numberItem.id}>
            <p>{numberItem.number}<Button size="sm" onClick={() => handleDelete(numberItem.id)}>✖</Button></p>
        </div>
    )

    const [ params, setParams ] = useState({

        base64PdfFile : [
            testPdf
        ],
        fromNumber: "0261904279",
        toNumber: "0261904279"
    })

    const sendFax = () => {
        axios.post("https://fax.rba.kr/faxSend", params)
            .then((res) => {
                console.log(res);
            })
    }


    return (
        <>
            {isPc &&
                <Row className="mt-3" style={{ margin: "0px", maxWidth: "590px" }}>
                    {/* <Card.Header style={{ background: "#727cf5", textAlign: "center" }} className="rounded-3">
                        <p style={{ fontSize: "22px", color: "white", margin: "0px" }}>팩스보내기</p>
                    </Card.Header> */}
                    <Card.Body style={{ backgroundColor: "#F0F0F0" }} className="mb-3 rounded-3">
                        <div className="faxform mb-3">
                            <p className="mb-0" style={{ fontSize: "18px" }}>제목</p>
                            <input className="form-control" type="text" placeholder="나이스자료" style={{ fontSize: "18px", }}>
                            </input>
                        </div>
                        <div className="faxform mb-3">
                            <p className="mb-0" style={{ fontSize: "18px" }}>발신</p>
                            <input className="form-control" type="number" min={0} placeholder="0212345678" style={{ fontSize: "18px", }} disabled>
                            </input>
                        </div>
                        <div className="faxform mb-3">
                            <p className="mb-1" style={{ fontSize: "18px" }}>수신 &nbsp;&nbsp;&nbsp;&nbsp;
                             <span>
                                <Button onClick={hadleClick} >추가</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button >최근발송</Button>
                             </span>
                            </p>
                            <input className="form-control" type="number" min={0} value={inputFaxNum} onChange={handleChange}
                                placeholder="02 1234 5678"
                                style={{ fontSize: "18px", }}
                            >
                            </input>
                        </div>
                        <Row style={{ paddingLeft: "13px",paddingRight:"8px" }} className="mb-2 mt-1">
                            <div className="border rounded-3" style={{ padding: "25px", height: "100%", fontSize: "15px", backgroundColor: "#f7f9fb", width: "99%" }}>
                                {numberItemList}
                            </div>
                        </Row>
                        <div className="faxform  mb-3">
                            <p className="mb-0" style={{ fontSize: "18px" }}>파일</p>
                            {/* <input className="form-control" type="text" style={{fontSize:"18px"}}>
                            </input> */}
                            <FileUploader
                                onFileUpload={(files) => {
                                    console.log(files);
                                }}
                            />
                        </div>
                        <div>
                            <p style={{ color: "#adb5bd" }}>⁕예약전송시 날짜와시간을 입력해주세요</p>
                            <input className="form-control" type="datetime-local">
                            </input>
                        </div>
                        <div className="mt-3" style={{ textAlign: "center" }}>
                            <Button
                                style={{
                                    borderRadius: "15px",
                                    padding: "1rem 6rem",
                                    color: "white",
                                    fontSize: "18px",
                                    width:"99%"
                                }}
                                onClick={sendFax}
                            >
                                발송
                            </Button>
                        </div>
                    </Card.Body>
                </Row>
            }
            {isMobile &&
                <Row>
                    {/* <div className="border rounded-3 mb-3"
                        style={{
                            backgroundColor: "#727cf5", fontSize: "20px",
                            color: "white", padding: "10px"
                        }}
                    >
                        팩스보내기
                    </div> */}
                    <Row>
                        <p style={{ fontSize: "18px", textAlign: "start", paddingTop: "10px" }}>제목
                            <input className="form-control" type="text" style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "18px", width: "99%" }} placeholder="안내문"></input>
                        </p>
                    </Row>
                    <Row>
                        <p style={{ fontSize: "18px", textAlign: "start", paddingTop: "10px" }}>발신
                            <input
                                className="form-control" type="text" disabled placeholder='각회사의fax번호'
                                style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "18px", width: "99%" }}>
                            </input>
                        </p>
                    </Row>
                    <Row>
                        <p className="mb-1" style={{ fontSize: "18px", textAlign: "start", paddingTop: "10px" }}>수신
                            <input className="form-control" value={inputFaxNum} onChange={handleChange}
                                style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "18px", width: "99%" }} >
                            </input>
                        </p>
                        {/* <Button size="sm" onClick={hadleClick}>add</Button> */}
                    </Row>
                    <Row className="mb-1">
                        <Col style={{paddingLeft:"10px",paddingRight:"0px"}}>
                            <Button onClick={hadleClick} style={{width:"99%"}}>추가</Button>&nbsp;&nbsp;
                            {/* <Button style={{width:"99%"}}>최근발송</Button> */}
                        </Col>
                        <Col style={{paddingLeft:"0px",paddingRight:"10px"}}>
                        <Button style={{width:"99%"}}>최근발송</Button>
                        </Col>
                    </Row>
                    <Row style={{ paddingLeft: "25px" }} className="mb-2 mt-1">
                        <div className="border rounded-3" style={{ padding: "25px", height: "100%", fontSize: "15px", backgroundColor: "#f7f9fb", width: "95%" }}>
                            {numberItemList}
                        </div>
                    </Row>
                    <hr />
                    <Row className='mt-2'>
                        <p className="mb-0" style={{ fontSize: "18px" }}>파일</p>
                        {/* <input className="form-control" type="text" style={{fontSize:"18px"}}>
                            </input> */}
                        <FileUploader
                            onFileUpload={(files) => {
                                console.log(files);
                            }}
                        />
                    </Row>
                    <Row className='mt-3'>
                        <Col md={6}>
                            <p style={{ color: "#dee2e6" }}>⁕예약전송시 날짜와시간을 입력해주세요</p>
                            <input className="form-control" type="datetime-local">
                            </input>
                        </Col>
                    </Row>
                    <Row className="mt-1 mb-2">
                        <Col>
                            <Button
                                style={{
                                    color: "white",
                                    fontSize: "15px",
                                    width: "100%",
                                }}
                            >
                                보내기
                            </Button>
                        </Col>
                    </Row>
                </Row>
            }
        </>
    );
};

export default FaxForm;