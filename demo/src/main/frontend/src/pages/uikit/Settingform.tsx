import { Row, Col, Card, Form, Button, Modal, FloatingLabel, Table, ProgressBar } from 'react-bootstrap';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useModal } from './hooks';
import { useToggle } from 'hooks';
import { Wizard, Steps, Step } from 'react-albus';
import { TextField, RadioGroup, FormControl, 
    FormLabel, FormControlLabel, Radio, InputLabel, MenuItem,  createTheme, 
} from '@mui/material';
import { ChangeEvent } from 'react';
import { useMediaQuery } from "react-responsive";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import styled from "styled-components";

const Settingform = () => {

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch('')
    //     .then((response) => response.json())
    //     .then((data) => setData(data));
    // }, []);

    // radio(부가가치세)
    const [vat, setVat] = useState("");
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setVat(event.target.value);
    };
    const VATOptions = [
        { label: "10%", value: "10" },
        { label: "9.09", value: "9.09" },
        { label: "없음", value: "없음" },
    ];
    // radio(교육)
    const [gyoyug, setGyoyug] = useState("");
    const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
        setGyoyug(event.target.value);
    };
    const GyoyugOptions = [

        { label: "예", value: "yes", },
        { label: "아니오", value: "no" },

    ];


    // table(기본인센티브)
    const [rows, setRows] = useState([{ id: 1, rangeStart: '', rangeEnd: '', percent: '' }]);
    const handleAddRow = () => {
        const newRow = { id: rows.length + 1, rangeStart: '', rangeEnd: '', percent: '' };
        setRows([...rows, newRow]);
    };
    const handleDeleteRow = (id: number) => {
        setRows(rows.filter((row) => row.id !== id));
    };
    const handleChange2 = (id: number, field: any, value: any) => {
        setRows(rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
    };

    // table(추가인센티브)
    const [rows2, setRows2] = useState([{ id: 1, rangeStart: '', rangeEnd: '', percent: '' }]);
    const handleAddRow2 = () => {
        const newRow2 = { id: rows2.length + 1, rangeStart: '', rangeEnd: '', percent: '' };
        setRows2([...rows2, newRow2]);
    };
    const handleDeleteRow2 = (id: number) => {
        setRows2(rows2.filter((row) => row.id !== id));
    };
    const handleChange4 = (id: number, field: any, value: any) => {
        setRows2(rows2.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
    };

    // 수수료 지급일(월기준)
    const [monthInput, setMonthInput] = useState(false);
    const handleMonthClick = () => {
        setMonthInput(!monthInput);
    };

    // 원장 교육대상(교육비공제 여)
    const [wonjanggyoyug, setWonjanggyoyug] = useState(false);
    const handleWonjangClick = () => {
        setWonjanggyoyug(!wonjanggyoyug);
    };

    // 디자이너 교육
    const [dijaineogyoyug, setDijaineogyoyug] = useState(false);
    const handleDijaineoClick = () => {
        setDijaineogyoyug(!dijaineogyoyug);
    };

    //  경업금지
    const [gyeongeob, setGyeongeob] = useState(false);
    const handleGyeongeobClick = () => {
        setGyeongeob(!gyeongeob);
    };

    // 명세서 여부
    const [myeongseseo, setMyeongseseo] = useState(false);
    const handleMyeongseseoClick = () => {
        setMyeongseseo(!myeongseseo);
    };

    // 스탭유무
    const [seutaeb, setSeutaeb] = useState(false);
    const handleSeutaebClick = () => {
        setSeutaeb(!seutaeb);
    };

    // 교육 step
    const [gyoyugseoljeong, setGyoyugseoljeong] = useState(false);
    const handleGyoyugseoljeongClick = () => {
        setGyoyugseoljeong(!gyoyugseoljeong);
    };

    // 인센티브1(전체와구간 checkbox)
    const [insentibeu1, setInsentibeu1] = useState(false);
    const handleInsentibeu1Click = () => {
        setInsentibeu1(!insentibeu1);
    };

    // 전체 인센티브
    const [jeoncheinsentibeu, setJeoncheinsentibeu] = useState(false);
    const handleJeoncheinsentibeuClick = () => {
        setJeoncheinsentibeu(!jeoncheinsentibeu);
    };

    // 구간 인센티브 
    const [guganinsentibeu, setGuganinsentibeu] = useState(false);
    const handleGuganinsentibeuClick = () => {
        setGuganinsentibeu(!guganinsentibeu);
    };

    // 기본 인센티브
    const [giboninsentibeu, setGiboninsentibeu] = useState(false);
    const handleGiboninsentibeuClick = () => {
        setGiboninsentibeu(!giboninsentibeu);
    };

    // 추가 인센티브
    const [chugainsentibeu, setChugainsentibeu] = useState(false);
    const handleChugainsentibeuClick = () => {
        setChugainsentibeu(!chugainsentibeu);
    };

    // 매출액 기준
    const [maechulaeggijun, setMaechulaeggijun] = useState(false);
    const handleMaechulaeggijunClick = () => {
        setMaechulaeggijun(!maechulaeggijun);
    };

    // 이익금 기준
    const [iiggeumgijun, setIiggeumgijun] = useState(false);
    const handleIiggeumgijunClick = () => {
        setIiggeumgijun(!iiggeumgijun);
    };

    // 미디어쿼리
    const isPC: boolean = useMediaQuery({
        query: "(min-width:1024px)", //1024보다 크다면
    });
    const isTab: boolean = useMediaQuery({
        query: "(min-width:769px) and (max-width:1023px)" //769q보다크다면
    });
    const isMobile: boolean = useMediaQuery({
        query: "(max-width:768px)", //768보다 작으면
    });

    // data
    const saeobjang = [
        {
            id: "businessName",
            label: "사업장명",
            variant: "outlined",
            type: "text",
            fullWidth: true,
        },
        {
            id: "businessNumber",
            label: "사업자번호",
            variant: "outlined",
            type: "number",
            fullWidth: true,
        },
        {
            id: "address",
            label: "주소",
            variant: "outlined",
            type: "text",
            fullWidth: true,
        },

    ];
    const saeobjang2 = [
        {
            id: "birthday",
            label: "생년월일",
            variant: "outlined",
            // type: "date",
            fullWidth: true,
        },
        {
            id: "phoneNumber",
            label: "전화번호",
            variant: "outlined",
            type: "number",
            fullWidth: true,
        },
        {
            id: "email",
            label: "이메일",
            variant: "outlined",
            type: "email",
            fullWidth: true,
        },
    ];

    // 업장선택
    const [eobjang, setEobjang] = React.useState('');
    const handleChange5 = (event: SelectChangeEvent) => {
      setEobjang(event.target.value);
    };


    // modal
    const [isStandardOpen, toggleStandard] = useToggle();
    const { isOpen, size, className, scroll, 
        toggleModal, openModalWithSize, 
        openModalWithClass, openModalWithScroll 
    } = useModal();

    return (
        <>
            <Row className="mt-3">
                <Card>
                    <Card.Body style={{ marginRight:"30px",marginLeft:"30px" }}>
                        <div >
                            <Wizard
                                render={({ step, steps }) => (
                                    <>
                                        <p className="header-title mb-1" style={{ fontSize: "20px" }}>text 입력 예정</p>
                                        <ProgressBar
                                            animated
                                            striped
                                            variant="success"
                                            now={((steps.indexOf(step) + 1) / steps.length) * 100}
                                            className="mb-3 progress-sm"
                                        />
                                        <Steps>
                                            <Step

                                                id="saeobjangjohoe"
                                                render={({ next }) => (
                                                    <Form>
                                                        <p className="mb-0" style={{ fontSize: "22px" }}>업장을선택해주세요</p>
                                                        <Row className="mb-3">
                                                            <FormControl variant="standard" sx={{ m: 2, }}>
                                                                <InputLabel id="demo-simple-select-standard-label"style={{fontSize:"18px"}}>사업장종류</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-standard-label"
                                                                    id="demo-simple-select-standard"
                                                                    value={eobjang}
                                                                    onChange={handleChange5}
                                                                    label="사업장종류"
                                                                    style={{maxWidth:"150px",fontSize:"20px"}}
                                                                >
                                                                    <MenuItem value="miyong">미용업</MenuItem>
                                                                    <MenuItem value="cheyug">체육업</MenuItem>
                                                                    <MenuItem value="gita">기타</MenuItem>
                                                                </Select>
                                                            </FormControl>                                                
                                                        </Row>
                                                        <p style={{ fontSize: "22px" }}>1. 사업장 정보</p>
                                                        <Row>
                                                            {saeobjang.map((field) => (
                                                                <Col xs={6} className="form-floating mb-3" key={field.id}>
                                                                    <TextField
                                                                        style={{ borderColor: "#98a6ad" }}
                                                                        id={field.id}
                                                                        label={field.label}
                                                                        // variant={field.variant}
                                                                        type={field.type}
                                                                        fullWidth={field.fullWidth}
                                                                    />
                                                                </Col>
                                                            ))}
                                                            {saeobjang2.map((field) => (
                                                                <Col xs={6} className="form-floating mb-3" key={field.id}>
                                                                    <TextField
                                                                        style={{ borderColor: "#98a6ad" }}
                                                                        id={field.id}
                                                                        label={field.label}
                                                                        // variant={field.variant}
                                                                        type={field.type}
                                                                        fullWidth={field.fullWidth}
                                                                    />
                                                                </Col>
                                                            ))}
                                                        </Row>
                                                        <Row>
                                                            <p className="mb-1" style={{ fontSize: "16px", color: "#CACACA" }}>교육을 진행하시나요? &nbsp;&nbsp;
                                                                <span>
                                                                    <FormControl>
                                                                        {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
                                                                        <RadioGroup
                                                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                                                            name="controlled-radio-buttons-group"
                                                                            value={gyoyug}
                                                                            onChange={handleChange3}
                                                                            row
                                                                        >
                                                                            {GyoyugOptions.map((option) => (
                                                                                <FormControlLabel
                                                                                    key={option.value}
                                                                                    value={option.value}
                                                                                    control={<Radio style={{ paddingTop: "5px" }} />}
                                                                                    label={option.label}
                                                                                    style={{ paddingLeft: "30px" }}
                                                                                />
                                                                            ))}
                                                                        </RadioGroup>
                                                                    </FormControl>
                                                                </span>
                                                            </p>
                                                        </Row>
                                                        <ul className="list-inline wizard mt-2 mb-0">
                                                            <li className="next list-inline-item float-end">
                                                                <Button onClick={next} variant="primary">
                                                                    다음
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </Form>
                                                )}
                                            />

                                            <Step
                                                id="gyoyug"
                                                render={({ next, previous }) => (
                                                    <Form >
                                                        <p className="mb-3" style={{ fontSize: "22px" }}>2. 교육</p>
                                                        <Row className="mb-1">
                                                            <Col md={3}>
                                                                <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>교육비 공제 여부</FormLabel> <br />
                                                                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                                    <input
                                                                        type='checkbox'
                                                                        style={{ width: '25px', height: '25px', }}
                                                                        onClick={handleWonjangClick}
                                                                    /> &nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <label style={{ fontSize: '20px', fontWeight: 'lighter' }}>여</label>
                                                                    <input
                                                                        type='checkbox'
                                                                        style={{ width: '25px', height: '25px', marginLeft: "15px" }}
                                                                    /> &nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <label style={{ fontSize: '20px', fontWeight: 'lighter' }}>부</label>
                                                                </span>
                                                                {wonjanggyoyug &&
                                                                <Row xl={12}>
                                                                <Col >
                                                                    <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>원장님 교육 대상</FormLabel> <br />
                                                                    <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                                        <input
                                                                            type='checkbox'
                                                                            style={{ width: '25px', height: '25px', }}
                                                                        /> &nbsp;&nbsp;&nbsp;&nbsp;
                                                                        <label style={{ fontSize: '20px', fontWeight: 'lighter' }}>디자이너</label>
                                                                        <input
                                                                            type='checkbox'
                                                                            style={{ width: '25px', height: '25px', marginLeft: "15px" }}
                                                                        /> &nbsp;&nbsp;&nbsp;&nbsp;
                                                                        <label style={{ fontSize: '20px', fontWeight: 'lighter' }}>스탭</label>
                                                                    </span>
                                                                </Col>
                                                                </Row>
                                                            }
                                                            </Col>
                                                            <Col xl={3}>
                                                                <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>디자이너 교육</FormLabel> <br />
                                                                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                                                                    <input
                                                                        type='checkbox'
                                                                        style={{ width: '25px', height: '25px', }}
                                                                        onClick={handleDijaineoClick}
                                                                    /> &nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <label style={{ fontSize: '20px', fontWeight: 'lighter' }}>디자이너</label>
                                                                    <input
                                                                        type='checkbox'
                                                                        style={{ width: '25px', height: '25px', marginLeft: "15px" }}
                                                                    /> &nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <label style={{ fontSize: '20px', fontWeight: 'lighter' }}>스탭</label>

                                                                </span>
                                                                <Row className="mb-2 ,mt-0">
                                                           
                                                            {dijaineogyoyug &&
                                                                <Col md={12}>
                                                                    <FormLabel className="mb-1" style={{ fontSize: "14px", color: "#919eab" }}>강사비</FormLabel> <br />
                                                                    <span>
                                                                        <TextField
                                                                            id=""
                                                                            label="금액"
                                                                            variant="outlined"
                                                                            type="number"
                                                                            
                                                                        />
                                                                    </span>
                                                                </Col>
                                                            }
                                                        </Row>
                                                            </Col>
                                                            <Col xl={6}>
                                                                <FormLabel className="mb-1" style={{ fontSize: "14px", color: "#919eab" }}>제품 사교육</FormLabel> <br />
                                                                <TextField
                                                                    id=""
                                                                    label="정보입력"
                                                                    variant="outlined"
                                                                    type="text"
                                                                    fullWidth
                                                                />
                                                            </Col>
                                                        </Row>
                                                        {/* <Row className="mb-2 ,mt-0">
                                                           
                                                            {dijaineogyoyug &&
                                                                <Col md={3}>
                                                                    <FormLabel className="mb-1" style={{ fontSize: "14px", color: "#919eab" }}>강사비</FormLabel> <br />
                                                                    <span>
                                                                        <TextField
                                                                            id=""
                                                                            label="금액"
                                                                            variant="outlined"
                                                                            type="number"

                                                                        />
                                                                    </span>
                                                                </Col>
                                                            }
                                                        </Row> */}
                                                        
                                                        <ul className="list-inline wizard mt-2 mb-0">
                                                            <li className="previous list-inline-item">
                                                                <Button onClick={previous} variant="primary">
                                                                    이전
                                                                </Button>
                                                            </li>
                                                            <li className="next list-inline-item float-end">
                                                                <Button onClick={next} variant="primary">
                                                                    다음
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </Form>
                                                )}
                                            />

                                            <Step
                                                id="gyujeong"
                                                render={({ next, previous }) => (
                                                    <Form >
                                                        <p className="mb-3" style={{ fontSize: "22px" }}>3. 규정</p>
                                                        <Row className="mb-3">
                                                            <Col xl={2}>
                                                            <FormLabel style={{  color: "#919eab" }}>상표사용</FormLabel> <br />
                                                                <span>
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="허용"
                                                                    />
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="제한"
                                                                    />
                                                                </span>

                                                            </Col>
                                                            <Col xl={3}>
                                                            <FormLabel style={{  color: "#919eab" }}>고객유출</FormLabel> <br />
                                                                <span>
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="허용"
                                                                    />
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="제한"
                                                                    />
                                                                </span>

                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-0">
                                                            <Col  xl={2}>
                                                            <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>경업금지</FormLabel> <br />
                                                                <span className="mb-0">
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="적용"
                                                                        onClick={handleGyeongeobClick}
                                                                    />
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="미적용"
                                                                    />
                                                                </span>
                                                                {gyeongeob &&
                                                                    <>
                                                                        <br />
                                                                        <span>
                                                                            (&nbsp;
                                                                            <FormControlLabel
                                                                                control={<Checkbox />}
                                                                                label="1년 1km 1,000만원" />
                                                                            <FormControlLabel
                                                                                control={<Checkbox />}
                                                                                label="기타" />
                                                                            )
                                                                        </span>
                                                                    </>
                                                                }
                                                            </Col>
                                                            <Col  xl={3}>
                                                            <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>SNS 운영</FormLabel> <br />
                                                                <span>
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="블로그 , 인스타, 등"
                                                                    />
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="없음"
                                                                    />
                                                                </span>

                                                            </Col>
                                                        </Row>
                                                        <ul className="list-inline wizard mt-4 mb-1">
                                                            <li className="previous list-inline-item">
                                                                <Button onClick={previous} variant="primary">
                                                                    이전
                                                                </Button>
                                                            </li>
                                                            <li className="next list-inline-item float-end">
                                                                <Button onClick={next} variant="primary">
                                                                    다음
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </Form>
                                                )}
                                            />
                                            <Step
                                                id="susulyo"
                                                render={({ next, previous }) => (
                                                    <Form >
                                                        <p className="mb-3" style={{ fontSize: "22px" }}>4. 수수료</p>
                                                        <Row>
                                                            <Col md={3}>
                                                            <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>수수료 지급일</FormLabel> <br />
                                                                <FormGroup row  >
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="월 기준"
                                                                        onClick={handleMonthClick}
                                                                    />
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="입사일 기준"
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md={9}>
                                                            <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>정산 순서</FormLabel> <br />
                                                                <p style={{ fontSize: "16px" }}>부가가치세 &nbsp;&nbsp;
                                                                    <span> (
                                                                        <FormControlLabel
                                                                            control={<Checkbox />}
                                                                            label="현금,"
                                                                        />
                                                                        <FormControlLabel
                                                                            control={<Checkbox />}
                                                                            label="카드"
                                                                        />
                                                                        <TextField
                                                                            id=""
                                                                            label="숫자"
                                                                            variant="outlined"
                                                                            type="number"
                                                                            style={{ maxWidth: "60px" }}
                                                                            size="small"
                                                                        />&nbsp;&nbsp;
                                                                        %) ,
                                                                        카드 수수료 &nbsp;&nbsp;
                                                                        <span> (
                                                                            <TextField
                                                                                id=""
                                                                                label="숫자"
                                                                                variant="outlined"
                                                                                type="number"
                                                                                style={{ maxWidth: "60px" }}
                                                                                size="small"
                                                                            />&nbsp;&nbsp;
                                                                            %) ,
                                                                            소셜 수수료 &nbsp;&nbsp;
                                                                            <span> (
                                                                                <TextField
                                                                                    id=""
                                                                                    label="숫자"
                                                                                    variant="outlined"
                                                                                    type="number"
                                                                                    style={{ maxWidth: "60px" }}
                                                                                    size="small"

                                                                                />&nbsp;&nbsp;
                                                                                %) ,
                                                                            </span>
                                                                        </span>
                                                                    </span>
                                                                </p>
                                                            </Col>
                                                        </Row>
                                                        {monthInput &&
                                                            <Row>

                                                                <Col xs={6} className="mt-0">
                                                                    <span>
                                                                        <p style={{fontSize:"16px"}}> 1일 ~ 말일 ~ &nbsp;
                                                                        <TextField
                                                                            id=""
                                                                            label="날짜"
                                                                            variant="outlined"
                                                                            type="number"
                                                                            style={{ maxWidth: "60px",marginBottom:"10px" }}
                                                                            size="small"
                                                                        /> &nbsp;
                                                                        지급일
                                                                        </p>
                                                                    </span>
                                                                </Col>
                                                            </Row>
                                                        }
                                                        <Row className="mb-3">
                                                            <Col md={3}>
                                                            <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>선불권(회원권)</FormLabel> <br />
                                                                <span>
                                                                    <FormControlLabel
                                                                        control={<Checkbox style={{ fontSize: "18px" }} />}
                                                                        label="선지급"
                                                                    />
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="후지급"
                                                                    />
                                                                </span>

                                                            </Col>
                                                            <Col md={4}>
                                                            <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>점판수당</FormLabel> <br />
                                                                <span>
                                                                    <FormControlLabel
                                                                        control={<Checkbox style={{ fontSize: "18px" }} />}
                                                                        label="매출액 기준"
                                                                        onClick={handleMaechulaeggijunClick}
                                                                    /> &nbsp;
                                                                    {maechulaeggijun &&
                                                                        <TextField
                                                                            id=""
                                                                            label="%"
                                                                            variant="outlined"
                                                                            type="number"
                                                                            style={{ maxWidth: "60px", marginBottom: "10px" }}
                                                                            size="small"
                                                                        />
                                                                    } &nbsp;&nbsp;
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="이익금 기준"
                                                                        onClick={handleIiggeumgijunClick}
                                                                    />
                                                                    {iiggeumgijun &&
                                                                        <TextField
                                                                            id=""
                                                                            label="%"
                                                                            variant="outlined"
                                                                            type="number"
                                                                            style={{ maxWidth: "60px", marginBottom: "10px" }}
                                                                            size="small"
                                                                        />
                                                                    }
                                                                </span>
                                                                

                                                            </Col>
                                                        </Row>
                                                        <Row className="mb-3">
                                                            <Col>
                                                                <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>매출 기준</FormLabel> <br />
                                                                <span>
                                                                    <FormControlLabel
                                                                        control={<Checkbox style={{ fontSize: "18px" }} />}
                                                                        label="(세전) 매출 자체를 기준"
                                                                    />
                                                                    <FormControlLabel
                                                                        control={<Checkbox style={{ fontSize: "18px" }} />}
                                                                        label="(세후) 매출에서 부가세 공제 후 기준"
                                                                    />
                                                                </span>
                                                            </Col>
                                                        </Row>
                                                        <ul className="list-inline wizard mt-2 mb-0">
                                                            <li className="previous list-inline-item">
                                                                <Button onClick={previous} variant="primary">
                                                                    이전
                                                                </Button>
                                                            </li>
                                                            <li className="next list-inline-item float-end">
                                                                <Button onClick={next} variant="primary">
                                                                    다음
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </Form>
                                                )}
                                            />
                                            <Step
                                                id="myeongseseo"
                                                render={({ next, previous }) => (
                                                    <Form >
                                                        <p className="mb-3" style={{ fontSize: "22px" }}>5. 명세서 표기내역</p>
                                                        <Row className="mb-3">
                                                            <Col md={2}>
                                                                <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>명세서 여부</FormLabel> <br />
                                                                <span>
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="여"
                                                                        onClick={handleMyeongseseoClick}
                                                                    />
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="부"
                                                                    />
                                                                </span>
                                                            </Col>
                                                            <Col md={3}>
                                                                <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>스탭 여부</FormLabel> <br />
                                                                <span>
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="여"
                                                                        onClick={handleSeutaebClick}
                                                                    />
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="부"
                                                                    />
                                                                </span>
                                                            </Col>
                                                        </Row>
                                                        <Row>
                                                            <Col>
                                                                <span>
                                                                    {myeongseseo &&
                                                                        <>
                                                                            <FormControlLabel
                                                                                control={<Checkbox />}
                                                                                label="재료비"
                                                                            />
                                                                            <FormControlLabel
                                                                                control={<Checkbox />}
                                                                                label="관리비"
                                                                            />
                                                                            <FormControlLabel
                                                                                control={<Checkbox />}
                                                                                label="광고비"
                                                                            />
                                                                            <FormControlLabel
                                                                                control={<Checkbox />}
                                                                                label="기타"
                                                                            />
                                                                        </>
                                                                    }
                                                                    {seutaeb &&
                                                                        <FormControlLabel
                                                                            control={<Checkbox />}
                                                                            label="인력보조비"
                                                                        />
                                                                    }
                                                                </span>
                                                            </Col>
                                                        </Row>

                                                        <ul className="list-inline wizard mt-2 mb-0">
                                                            <li className="previous list-inline-item">
                                                                <Button onClick={previous} variant="primary">
                                                                    이전
                                                                </Button>
                                                            </li>
                                                            <li className="next list-inline-item float-end">
                                                                <Button onClick={next} variant="primary">
                                                                    다음
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </Form>
                                                )}
                                            />
                                            <Step
                                                id="etc"
                                                render={({ next, previous }) => (
                                                    <Form >
                                                        <p className="mb-3" style={{ fontSize: "22px" }}>6. 직원혜택</p>
                                                        <Row className="mb-3">
                                                            <Col md={3}>
                                                            <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>본인 시술 시</FormLabel> <br />
                                                                <span>
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="제품원가"
                                                                    />
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="본인면제"
                                                                    />
                                                                </span>
                                                            </Col>
                                                            <Col md={4}>
                                                            <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>가족, 지인 방문 시 할인 여부 (%)</FormLabel> <br />
                                                                <span >
                                                                    <TextField
                                                                        id=""
                                                                        label="가족"
                                                                        variant="outlined"
                                                                        type="number"
                                                                        style={{ maxWidth: "60px", marginBottom: "10px" }}
                                                                        size="small"
                                                                        className="mt-1"
                                                                    /> &nbsp;&nbsp;
                                                                    <TextField
                                                                        id=""
                                                                        label="지인"
                                                                        variant="outlined"
                                                                        type="number"
                                                                        style={{ maxWidth: "60px", marginBottom: "10px" }}
                                                                        size="small"
                                                                        className="mt-1"
                                                                    /> &nbsp;&nbsp;
                                                                    <FormControlLabel
                                                                        control={<Checkbox />}
                                                                        label="재량 할인 가능"
                                                                        className="mt-1"
                                                                    />
                                                                </span>
                                                            </Col>
                                                        </Row>
                                                        <ul className="list-inline wizard mt-2 mb-0">
                                                            <li className="previous list-inline-item">
                                                                <Button onClick={previous} variant="primary">
                                                                    이전
                                                                </Button>
                                                            </li>
                                                            <li className="next list-inline-item float-end">
                                                                <Button onClick={next} variant="primary">
                                                                    다음
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                    </Form>
                                                )}
                                            />
                                            <Step
                                                id="insentibeu"
                                                render={({ next, previous }) => (
                                                    <Form >
                                                        <p className="mb-3" style={{ fontSize: "22px" }}>7. 인센티브 타입
                                                        <span>
                                                        <Button className="float-end" onClick={() => openModalWithSize('lg')}>인센티브 등록</Button>
                                                        </span>
                                                        </p>
                                                        <Row>
                                                            <div className="table-responsive mt-2 text-left">
                                                                
                                                                <Table className=" table-centered table-bordered" >
                                                                    <thead className="table-madegray" style={{ color: "#6c757d" }}>
                                                                        <tr>
                                                                            <th style={{ fontSize: "18px", textAlign: "center", border: "1px solid #DCDCDC" }}>
                                                                                타입
                                                                            </th>
                                                                            <th style={{ fontSize: "18px", textAlign: "center", border: "1px solid #DCDCDC" }}>
                                                                                등록일
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="text-start" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px", color: "#a3a7ad" }}>
                                                                                A
                                                                            </td>
                                                                            <td className="text-start" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px", color: "#a3a7ad" }}>
                                                                                
                                                                            </td>
                                                                            
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-start" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px", color: "#a3a7ad" }}>
                                                                                B
                                                                            </td>
                                                                            <td className="text-start" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px", color: "#a3a7ad" }}>
                                                                                
                                                                            </td>
                                                                             
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-start" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px", color: "#a3a7ad" }}>
                                                                                C
                                                                            </td>
                                                                            <td className="text-start" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px", color: "#a3a7ad" }}>
                                                                                
                                                                            </td>
                                                                            
                                                                        </tr>
                                                                    </tbody>
                                                                </Table>
                                                            </div>
                                                        </Row>
                                                        <ul className="list-inline wizard mt-2 mb-0">
                                                            <li className="previous list-inline-item">
                                                                <Button onClick={previous} variant="primary">
                                                                    이전
                                                                </Button>
                                                            </li>
                                                            <li className="next list-inline-item float-end">
                                                                <Button onClick={next} variant="primary">
                                                                    다음
                                                                </Button>
                                                            </li>
                                                        </ul>
                                                        <Modal show={isOpen} onHide={toggleModal} dialogClassName={className} size={size} scrollable={scroll}>
                                                            <Modal.Header onHide={toggleModal} closeButton>
                                                                <h4 className="modal-title">인센티브 생성</h4>
                                                            </Modal.Header>
                                                            <Modal.Body>
                                                                <Row>
                                                                    <Col sm={4} className="mb-0">
                                                                    <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>인센티브</FormLabel> <br />
                                                                        <span>
                                                                            <FormControlLabel
                                                                                control={<Checkbox />}
                                                                                label="인센티브"
                                                                                onClick={handleInsentibeu1Click}
                                                                            />
                                                                        </span>
                                                                    </Col>
                                                                    {/* {insentibeu1 &&
                                                                        <Col sm={4} className="mt-0">
                                                                            <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>전체/구간 설정</FormLabel> <br />
                                                                            <span>
                                                                                <FormControlLabel
                                                                                    control={<Checkbox />}
                                                                                    label="전체"
                                                                                    onClick={handleJeoncheinsentibeuClick}
                                                                                />
                                                                                <FormControlLabel
                                                                                    control={<Checkbox />}
                                                                                    label="구간"
                                                                                    onClick={handleGuganinsentibeuClick}
                                                                                />

                                                                            </span>
                                                                        </Col>
                                                                    } */}
                                                                </Row>
                                                                {insentibeu1 &&
                                                                    <Row>
                                                                        <Col sm={4} className="mt-0">
                                                                        <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>전체/구간 설정</FormLabel> <br />
                                                                            <span>
                                                                                <FormControlLabel
                                                                                    control={<Checkbox />}
                                                                                    label="전체"
                                                                                    onClick={handleJeoncheinsentibeuClick}
                                                                                />
                                                                                <FormControlLabel
                                                                                    control={<Checkbox />}
                                                                                    label="구간"
                                                                                    onClick={handleGuganinsentibeuClick}
                                                                                />

                                                                            </span>
                                                                        </Col>
                                                                    </Row>
                                                                }
                                                                <Row>
                                                                    {jeoncheinsentibeu &&
                                                                        <Col className="mt-0">
                                                                            <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>전체인센티브설정</FormLabel> <br />
                                                                            <p>
                                                                                <span style={{ fontSize: "30px",color: "#919eab",fontWeight:"300" }}>매출 X 
                                                                                <TextField
                                                                                    id=""
                                                                                    label="%"
                                                                                    variant="outlined"
                                                                                    type="number"
                                                                                    style={{ maxWidth: "60px", marginTop: "5px", marginLeft:"5px" }}
                                                                                    size="small"
                                                                                    
                                                                                />
                                                                                </span>
                                                                            </p>
                                                                        </Col>
                                                                    }
                                                                    </Row>
                                                                    <Row>
                                                                    {guganinsentibeu &&
                                                                        <>
                                                                            <Col md={6}>
                                                                                <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>정산 기준</FormLabel> <br />
                                                                                <span>
                                                                                    <FormControlLabel
                                                                                        control={<Checkbox />}
                                                                                        label="시술 매출"
                                                                                    />
                                                                                    <FormControlLabel
                                                                                        control={<Checkbox />}
                                                                                        label="회원권"
                                                                                    />
                                                                                    <FormControlLabel
                                                                                        control={<Checkbox />}
                                                                                        label="기타"
                                                                                    />
                                                                                    <TextField
                                                                                    id=""
                                                                                    label="기타"
                                                                                    variant="outlined"
                                                                                    type="text"
                                                                                    style={{ maxWidth: "80px", marginTop: "5px", }}
                                                                                    size="small"
                                                                                    
                                                                                />
                                                                                </span>
                                                                            </Col>
                                                                            <Col md={6}>
                                                                                <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>구간 인센티브 설정</FormLabel> <br />
                                                                                <span>
                                                                                    <FormControlLabel
                                                                                        control={<Checkbox />}
                                                                                        label="기본인센티브"
                                                                                        onClick={handleGiboninsentibeuClick} />
                                                                                    <FormControlLabel
                                                                                        control={<Checkbox />}
                                                                                        label="추가인센티브"
                                                                                        onClick={handleChugainsentibeuClick} />

                                                                                </span>
                                                                            </Col>
                                                                        </>
                                                                    }
                                                                </Row>
                                                                {giboninsentibeu &&
                                                                    <Row>
                                                                        <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed' }}>
                                                                            <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                                                                <tr>
                                                                                    <th colSpan={4}>기본인센티브 &nbsp;&nbsp;
                                                                                    <Button onClick={handleAddRow}>+</Button>
                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                
                                                                                {rows.map((row) => (
                                                                                    <tr key={row.id}>
                                                                                        <td style={{ padding: "0px" }}>
                                                                                            {/* <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>이상</p> */}
                                                                                            <TextField
                                                                                                id=""
                                                                                                value={row.rangeStart}
                                                                                                label="이상"
                                                                                                onChange={(e) => handleChange2(row.id, 'rangeStart', e.target.value)}
                                                                                                variant="outlined"
                                                                                                type="number"
                                                                                                fullWidth
                                                                                            />

                                                                                        </td>
                                                                                        <td style={{ padding: "0px" }}>
                                                                                            {/* <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>미만</p> */}
                                                                                            <TextField
                                                                                                id=""
                                                                                                value={row.rangeEnd}
                                                                                                label="미만"
                                                                                                onChange={(e) => handleChange2(row.id, 'rangeEnd', e.target.value)}
                                                                                                variant="outlined"
                                                                                                type="number"
                                                                                                fullWidth
                                                                                            />

                                                                                        </td>
                                                                                        <td style={{ padding: "0px" }}>
                                                                                            {/* <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>%</p> */}
                                                                                            <TextField
                                                                                                id=""
                                                                                                value={row.percent}
                                                                                                label="%"
                                                                                                onChange={(e) => handleChange2(row.id, 'percent', e.target.value)}
                                                                                                variant="outlined"
                                                                                                type="number"
                                                                                                fullWidth
                                                                                            />

                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            <Button onClick={() => handleDeleteRow(row.id)}>-</Button>
                                                                                        </td>
                                                                                    </tr>
                                                                                ))}
                                                                            </tbody>
                                                                        </Table>

                                                                    </Row>
                                                                }
                                                                {chugainsentibeu &&
                                                                <Row>
                                                                    <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed' }}>
                                                                            <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                                                                <tr>
                                                                                    <th colSpan={4}>추가인센티브 &nbsp;&nbsp;
                                                                                    <Button onClick={handleAddRow2}>+</Button>
                                                                                    </th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                
                                                                                {rows2.map((row) => (
                                                                                    <tr key={row.id}>
                                                                                        <td style={{ padding: "0px" }}>
                                                                                            {/* <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>이상</p> */}
                                                                                            <TextField
                                                                                                id=""
                                                                                                value={row.rangeStart}
                                                                                                label="이상"
                                                                                                onChange={(e) => handleChange4(row.id, 'rangeStart', e.target.value)}
                                                                                                variant="outlined"
                                                                                                type="number"
                                                                                                fullWidth
                                                                                            />

                                                                                        </td>
                                                                                        <td style={{ padding: "0px" }}>
                                                                                            {/* <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>미만</p> */}
                                                                                            <TextField
                                                                                                id=""
                                                                                                value={row.rangeEnd}
                                                                                                label="미만"
                                                                                                onChange={(e) => handleChange4(row.id, 'rangeEnd', e.target.value)}
                                                                                                variant="outlined"
                                                                                                type="number"
                                                                                                fullWidth
                                                                                            />

                                                                                        </td>
                                                                                        <td style={{ padding: "0px" }}>
                                                                                            {/* <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>%</p> */}
                                                                                            <TextField
                                                                                                id=""
                                                                                                value={row.percent}
                                                                                                label="%"
                                                                                                onChange={(e) => handleChange4(row.id, 'percent', e.target.value)}
                                                                                                variant="outlined"
                                                                                                type="number"
                                                                                                fullWidth
                                                                                            />

                                                                                        </td>
                                                                                        <td className="text-center">
                                                                                            <Button onClick={() => handleDeleteRow2(row.id)}>-</Button>
                                                                                        </td>
                                                                                    </tr>
                                                                                ))}
                                                                            </tbody>
                                                                        </Table>
                                                                </Row>
                                                                }
                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                                <Button variant="light" onClick={toggleModal}>
                                                                    닫기
                                                                </Button>{' '}
                                                                <Button onClick={toggleModal}>저장</Button>
                                                            </Modal.Footer>
                                                        </Modal>
                                                    </Form>
                                                )}
                                                
                                            />
                                            <Step
                                                id="tax"
                                                render={({ previous }) => (
                                                    <Form >
                                                        <p className="mb-3" style={{ fontSize: "22px" }}>3. 세금과세여부 및 비율 입력</p>
                                                        <Row className="mt-2 mb-2">
                                                            <Col xl={4} className="mt-2 mb-2">
                                                                <li className="mb-2" style={{ fontSize: "16px", color: "#CACACA" }}>부가가치세를 사업소득자에게 어떻게 적용 하세요?</li>

                                                                <span>
                                                                    <FormControl>
                                                                        {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
                                                                        <RadioGroup
                                                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                                                            name="controlled-radio-buttons-group"
                                                                            value={vat}
                                                                            onChange={handleChange}
                                                                            row
                                                                        >
                                                                            {VATOptions.map((option) => (
                                                                                <FormControlLabel
                                                                                    key={option.value}
                                                                                    value={option.value}
                                                                                    control={<Radio style={{ paddingTop: "5px" }} />}
                                                                                    label={option.label}
                                                                                    style={{ paddingLeft: "30px" }}
                                                                                />
                                                                            ))}
                                                                        </RadioGroup>
                                                                    </FormControl>
                                                                </span>


                                                            </Col>
                                                            <Col xl={4} className="mt-2 mb-2">
                                                                <li className="mb-2" style={{ fontSize: "16px", color: "#CACACA" }}>금융수수료를 사업소득자에게 어떻게 적용하세요?</li>

                                                                <TextField
                                                                    id="outlined-basic"
                                                                    label="%"
                                                                    variant="outlined"
                                                                    type="number"
                                                                    helperText="소셜수수료"
                                                                    fullWidth
                                                                    style={{ width: "70%" }}
                                                                />


                                                            </Col>
                                                            <Col xl={4}>
                                                                <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed' }}>
                                                                    <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                                                        <tr>
                                                                            <th colSpan={4}>자율직업소득자 매출정산 내역</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <th style={{ padding: "0px" }}>
                                                                                <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>이상</p>
                                                                                <TextField
                                                                                    id=""
                                                                                    label="숫자만 입력해 주세요"
                                                                                    variant="outlined"
                                                                                    type="number"
                                                                                    fullWidth
                                                                                />

                                                                            </th>
                                                                            <th style={{ padding: "0px" }}>
                                                                                <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>미만</p>
                                                                                <TextField
                                                                                    id=""
                                                                                    label="숫자만 입력해 주세요"
                                                                                    variant="outlined"
                                                                                    type="number"
                                                                                    fullWidth
                                                                                />

                                                                            </th>
                                                                            <th style={{ padding: "0px" }}>
                                                                                <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>%</p>
                                                                                <TextField
                                                                                    id=""
                                                                                    label="숫자만 입력해 주세요"
                                                                                    variant="outlined"
                                                                                    type="number"
                                                                                    fullWidth
                                                                                />

                                                                            </th>
                                                                            <th>
                                                                                <Button onClick={handleAddRow}>+</Button>
                                                                            </th>
                                                                        </tr>
                                                                        {rows.map((row) => (
                                                                            <tr key={row.id}>
                                                                                <td style={{ padding: "0px" }}>
                                                                                    <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>이상</p>
                                                                                    <TextField
                                                                                        id=""
                                                                                        value={row.rangeStart}
                                                                                        label="숫자만 입력해 주세요"
                                                                                        onChange={(e) => handleChange2(row.id, 'rangeStart', e.target.value)}
                                                                                        variant="outlined"
                                                                                        type="number"
                                                                                        fullWidth
                                                                                    />

                                                                                </td>
                                                                                <td style={{ padding: "0px" }}>
                                                                                    <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>미만</p>
                                                                                    <TextField
                                                                                        id=""
                                                                                        value={row.rangeEnd}
                                                                                        label="숫자만 입력해 주세요"
                                                                                        onChange={(e) => handleChange2(row.id, 'rangeEnd', e.target.value)}
                                                                                        variant="outlined"
                                                                                        type="number"
                                                                                        fullWidth
                                                                                    />

                                                                                </td>
                                                                                <td style={{ padding: "0px" }}>
                                                                                    <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>%</p>
                                                                                    <TextField
                                                                                        id=""
                                                                                        value={row.percent}
                                                                                        label="숫자만 입력해 주세요"
                                                                                        onChange={(e) => handleChange2(row.id, 'percent', e.target.value)}
                                                                                        variant="outlined"
                                                                                        type="number"
                                                                                        fullWidth
                                                                                    />

                                                                                </td>
                                                                                <td>
                                                                                    <Button onClick={() => handleDeleteRow(row.id)}>-</Button>
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </Table>
                                                            </Col>
                                                        </Row>

                                                        <Row className="mt-3 mb-2">

                                                            <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed' }}>
                                                                <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                                                    <tr>
                                                                        <th colSpan={4}>자율직업소득자 매출정산 내역</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th style={{ padding: "0px" }}>
                                                                            <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>이상</p>
                                                                            <TextField
                                                                                id=""
                                                                                label="숫자만 입력해 주세요"
                                                                                variant="outlined"
                                                                                type="number"
                                                                                fullWidth
                                                                            />
                                                                        </th>
                                                                        <th style={{ padding: "0px" }}>
                                                                            <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>미만</p>
                                                                            <TextField
                                                                                id=""
                                                                                label="숫자만 입력해 주세요"
                                                                                variant="outlined"
                                                                                type="number"
                                                                                fullWidth
                                                                            />
                                                                        </th>
                                                                        <th style={{ padding: "0px" }}>
                                                                            <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>%</p>
                                                                            <TextField
                                                                                id=""
                                                                                label="숫자만 입력해 주세요"
                                                                                variant="outlined"
                                                                                type="number"
                                                                                fullWidth
                                                                            />
                                                                        </th>
                                                                        <th className="text-center">
                                                                            <Button onClick={handleAddRow}>+</Button>
                                                                        </th>
                                                                    </tr>
                                                                    {rows.map((row) => (
                                                                        <tr key={row.id}>
                                                                            <td style={{ padding: "0px" }}>
                                                                                <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>이상</p>
                                                                                <TextField
                                                                                    id=""
                                                                                    value={row.rangeStart}
                                                                                    label="숫자만 입력해 주세요"
                                                                                    onChange={(e) => handleChange2(row.id, 'rangeStart', e.target.value)}
                                                                                    variant="outlined"
                                                                                    type="number"
                                                                                    fullWidth
                                                                                />

                                                                            </td>
                                                                            <td style={{ padding: "0px" }}>
                                                                                <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>미만</p>
                                                                                <TextField
                                                                                    id=""
                                                                                    value={row.rangeEnd}
                                                                                    label="숫자만 입력해 주세요"
                                                                                    onChange={(e) => handleChange2(row.id, 'rangeEnd', e.target.value)}
                                                                                    variant="outlined"
                                                                                    type="number"
                                                                                    fullWidth
                                                                                />

                                                                            </td>
                                                                            <td style={{ padding: "0px" }}>
                                                                                <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>%</p>
                                                                                <TextField
                                                                                    id=""
                                                                                    value={row.percent}
                                                                                    label="숫자만 입력해 주세요"
                                                                                    onChange={(e) => handleChange2(row.id, 'percent', e.target.value)}
                                                                                    variant="outlined"
                                                                                    type="number"
                                                                                    fullWidth
                                                                                />

                                                                            </td>
                                                                            <td className="text-center">
                                                                                <Button onClick={() => handleDeleteRow(row.id)}>-</Button>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </Table>

                                                            <Col xl={6}>

                                                                {/* <Table className=" table-centered table-bordered table caption-top " style={{tableLayout:"fixed"}}>
                                                            <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                                                <tr>
                                                                    <th colSpan={4}>자율직업소득자 매출정산 내역</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                
                                                                    <tr key=''>
                                                                        <td>이상</td>
                                                                        <td>미만</td>
                                                                        <td>%</td>
                                                                        <td>
                                                                            <Button>+</Button>
                                                                        </td>
                                                                    </tr>
                                                               
                                                            </tbody>
                                                        </Table> */}
                                                            </Col>
                                                        </Row>
                                                        <ul className="list-inline wizard mb-0 ">
                                                            <li className="previous list-inline-item">
                                                                <Button onClick={previous} variant="primary">
                                                                    뒤로
                                                                </Button>
                                                            </li>
                                                            <li className="next list-inline-item float-end">
                                                                <Button variant="primary">완료</Button>
                                                            </li>
                                                        </ul>
                                                    </Form>
                                                )}
                                            />
                                        </Steps>
                                    </>
                                )}
                            />

                        </div>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
};

export default Settingform;

