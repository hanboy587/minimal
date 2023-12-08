import { Row, Col, Card, Form, Button, Modal, Table, ProgressBar } from 'react-bootstrap';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useModal } from './hooks';
import { useToggle } from 'hooks';
import {
    TextField, RadioGroup, FormControl, styled,
    FormLabel, FormControlLabel, Radio, Select,
    InputLabel, MenuItem, createTheme,
} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';

const SettingformMiyongeob = () => {
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

    // modal
    const [isStandardOpen, toggleStandard] = useToggle();
    const { isOpen, size, className, scroll,
        toggleModal, openModalWithSize,
        openModalWithClass, openModalWithScroll
    } = useModal();

    // 다음 버튼 클릭시 사라지는 event
    const [buttonState, setButtonState] = useState<Record<string, boolean>>({});
    const handlebuttonClick = (buttonId: any) => {
        setButtonState((prevState) => ({
            ...prevState,
            [buttonId]: true,
        }));
    };

    // 교육Card
    const [gyoyugcard, setGyoyugcard] = useState(false);
    const handleGyoyugcardClick = () => {
        setGyoyugcard(!gyoyugcard);
    };

    // 교육진행여부 (yes 일시)
    const [gyoyugyeobu, setGyoyugyeobu] = useState(false);
    const handleGyoyugyeobuClick = () => {
        setGyoyugyeobu(!gyoyugyeobu);
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

    // 규정Card
    const [gyujeongcard, setGyujeongcard] = useState(false);
    const handleGyujeongcardClick = () => {
        setGyujeongcard(!gyujeongcard);
    };

    // 수수료 지급일(월기준)
    const [monthInput, setMonthInput] = useState(false);
    const handleMonthClick = () => {
        setMonthInput(!monthInput);
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

    // 카드 부가가치세 selectbox
    const [cardVAT, setCardVAT] = useState(false);
    const handlecarVATClick = () => {
        setCardVAT(!cardVAT);
    };

    // 부가가치세 card select option
    const options = [
        { value: 'option1', label: '10 %' },
        { value: 'option2', label: '9.0909' },
        { value: 'option3', label: 'Option 3' },
      ];
    
    //   card 부가가치세 event 
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [otherInputValue, setOtherInputValue] = useState('');
  
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value as string);
        setOtherInputValue('');
    };

    const handleOtherInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(null);
        setOtherInputValue(event.target.value);
    };
    // const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const selectedValue = event.target.value;
    //     setSelectedOption(selectedValue);

    //     if (selectedValue === 'option3') {
    //         setOtherInputValue(''); // Clear the input field when "Option 3" is selected
    //     }
    // };

    // const handleOtherInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSelectedOption('option3'); // Select "Option 3" when input value is changed
    //     setOtherInputValue(event.target.value);
    // };

    // 수수료card
    const [susulyocard, setSusulyocard] = useState(false);
    const handleSusulyocardClick = () => {
        setSusulyocard(!susulyocard);
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

    // 명세표card
    const [myeongsepyocard, setMyeongsepyocard] = useState(false);
    const handleMyeongsepyocardClick = () => {
        setMyeongsepyocard(!myeongsepyocard);
    };

    // 기타card
    const [gitacard, setGitacard] = useState(false);
    const handleGitacardClick = () => {
        setGitacard(!gitacard);
    };

    // input label style 주기
    const labelStyle = {
        display: 'inline-flex',
        fontSize: '20px',
        fontWeight: 300,
        marginLeft: "15px"
    }

    // 인센티브1(전체와구간 checkbox)
    // const [insentibeu1, setInsentibeu1] = useState(false);
    // const handleInsentibeu1Click = () => {
    //     setInsentibeu1(!insentibeu1);
    // };

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

    // 체크박스 1개이상 체크시 버튼활성화 (정산기준 에서 테이블 생성시)
    const [isChecked, setIsChecked] = useState<{
        checkbox1: boolean;
        checkbox2: boolean;
        checkbox3: boolean;
    }>({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false
    });
    // 체크박스 클릭 이벤트 핸들러
    const handleCheckboxChange = (checkboxName: keyof typeof isChecked) => {
        setIsChecked((prevState) => ({
            ...prevState,
            [checkboxName]: !prevState[checkboxName]
        }));
    };
    const isAnyCheckboxChecked =
        isChecked.checkbox1 || isChecked.checkbox2 || isChecked.checkbox3;



    // 인센티브 전체 구간 체크박스 disable 처리
    const [checkbox1Checked, setCheckbox1Checked] = useState(false); //전체
    const [checkbox2Checked, setCheckbox2Checked] = useState(false); //구간

    const handleCheckbox1Change = () => {
        setCheckbox1Checked(!checkbox1Checked);
        // setCheckbox2Checked(false);
    }

    const handleCheckbox2Change = () => {
        setCheckbox2Checked(!checkbox2Checked);
        // setCheckbox1Checked(false);
    }

    // 구간인센티브  체크박스 disable 처리
    const [checkbox3Checked, setCheckbox3Checked] = useState(false); //기본
    const [checkbox4Checked, setCheckbox4Checked] = useState(false); //추가

    const handleCheckbox3Change = () => {
        setCheckbox3Checked(!checkbox3Checked);
        setCheckbox4Checked(false);
    }

    const handleCheckbox4Change = () => {
        setCheckbox4Checked(!checkbox4Checked);
        setCheckbox3Checked(false);
    }

    // 전체 인센티브 화면저장
    const [savedData, setSavedData] = useState('');
    const [displayData, setDisplayData] = useState(false);
    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSavedData(event.target.value);
    };
    const handleSaveClick = () => {
        console.log('저장된 값:', savedData);
        setDisplayData(true); // 저장 버튼을 클릭하면 displayData 값을 true로 설정하여 값을 표시합니다.
        toggleModal();  // 모달닫기 같이붙여봄
    };


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
        // setRows(rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
        setRows(rows.map((row) => {
            if (row.id === id) {
                if (field === 'rangeStart') {
                    return { ...row, rangeStart: value };
                }
                if (field === 'rangeEnd') {
                    const updatedValue = value !== '' ? value : rows.find((r) => r.id === id - 1)?.rangeStart || '';
                    return { ...row, rangeEnd: updatedValue };
                }
                return { ...row, [field]: value };
            }
            return row;
        }));
        // 최댓값 100 , 100이상 적을시 자동으로 최댓값인 100입력
        if (field === 'percent') {
            const numericValue = parseFloat(value);
            const restrictedValue = numericValue > 100 ? 100 : numericValue;
            setRows(rows.map((row) => (row.id === id ? { ...row, [field]: restrictedValue.toString() } : row)));
        } else {
            setRows(rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
        }
    };
    // 기본인센티브 테이블
    const [giboninsentibeuteibeul, setGiboninsentibeuteibeul] = useState(false);
    const handleGiboninsentibeuteibeulClick = () => {
        setGiboninsentibeuteibeul(!giboninsentibeuteibeul);
    };
    // 기본인센티브 화면저장 
    const [savedRows2, setSavedRows2] = useState<{ id: number; rangeStart: string; rangeEnd: string; percent: string; }[]>([]);
    const handleSave2 = () => {
        const updatedRows2 = rows.map((row, index) => {
            if (index > 0) {
                return { ...row, rangeEnd: rows[index - 1].rangeStart };
            }
            return row;
        });
        setSavedRows2(updatedRows2);
    };


    // 추가인센티브 정산기준 checkbox disable(선택외전부 disable처리)
    const [selectedCheckbox, setSelectedCheckbox] = useState('');
    const handleCheckboxChange2 = (checkboxId: React.SetStateAction<string>) => {
        if (selectedCheckbox === checkboxId) {
            setSelectedCheckbox('');
        } else {
            setSelectedCheckbox(checkboxId);
        }
    };

    // 추가인센티브_시술매출 테이블
    const [rows3, setRows3] = useState<{ id: number; rangeStart: string; rangeEnd: string; percent: string; }[]>([{ id: 1, rangeStart: '', rangeEnd: '', percent: '' }]);
    const handleAddRow3 = () => {
        const newRow = { id: rows3.length + 1, rangeStart: '', rangeEnd: '', percent: '' };
        setRows3([...rows3, newRow]);
    };
    const handleDeleteRow3 = (id: number) => {
        setRows3(rows3.filter((row) => row.id !== id));
    };
    // const handleChange3 = (id: number, field: any, value: any) => {
    //     setRows3(rows3.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
    // };
    const handleChange3 = (id: number, field: any, value: any) => {
        setRows3(rows3.map((row) => {
            if (row.id === id) {
                if (field === 'rangeStart') {
                    return { ...row, rangeStart: value };
                }
                if (field === 'rangeEnd') {
                    const updatedValue = value !== '' ? value : rows3.find((r) => r.id === id - 1)?.rangeStart || '';
                    return { ...row, rangeEnd: updatedValue };
                }
                return { ...row, [field]: value };
            }
            return row;
        }));
        // 최댓값 100 , 100이상 적을시 자동으로 최댓값인 100입력
        if (field === 'percent') {
            const numericValue3 = parseFloat(value);
            const restrictedValue3 = numericValue3 > 100 ? 100 : numericValue3;
            setRows3(rows3.map((row) => (row.id === id ? { ...row, [field]: restrictedValue3.toString() } : row)));
        } else {
            setRows3(rows3.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
        }
    };
    // 추가인센_시술매출 checkbox 클릭시 버튼생성
    const [chugasisulBtn, setChugasisulBtn] = useState(false);
    const handlechugasisulCheckboxClick = () => {
        setChugasisulBtn(!chugasisulBtn);
    };
    // 추가인센_시술매출 테이블 
    const [chugasisulTable, setChugasisulTable] = useState(false);
    const handlechugasisulTableClick = () => {
        setChugasisulTable(!chugasisulTable);
    };
    // 추가인센_시술매출 화면저장 
    const [savedRows3, setSavedRows3] = useState<{ id: number; rangeStart: string; rangeEnd: string; percent: string; }[]>([]);
    const handleSave3 = () => {
        const updatedRows3 = rows3.map((row, index) => {
            if (index > 0) {
                return { ...row, rangeEnd: rows3[index - 1].rangeStart };
            }
            return row;
        });
        setSavedRows3(updatedRows3);
    };


    // 추가인센_회원권 checkbox 클릭시 버튼생성
    const [chugahoewonBtn, setChugahoewonBtn] = useState(false);
    const handlechugahoewonCheckboxClick = () => {
        setChugahoewonBtn(!chugahoewonBtn);
    };
    // 추가인센_회원권 테이블 
    const [chugahoewonTable, setChugahoewonTable] = useState(false);
    const handlechugahoewonTableClick = () => {
        setChugahoewonTable(!chugahoewonTable);
    };
    // 추가인센_회원권 테이블
    const [rows4, setRows4] = useState([{ id: 1, rangeStart: '', rangeEnd: '', percent: '' }]);
    const handleAddRow4 = () => {
        const newRow = { id: rows4.length + 1, rangeStart: '', rangeEnd: '', percent: '' };
        setRows4([...rows4, newRow]);
    };
    const handleDeleteRow4 = (id: number) => {
        setRows4(rows4.filter((row) => row.id !== id));
    };
    const handleChange4 = (id: number, field: any, value: any) => {
        setRows4(rows4.map((row) => {
            if (row.id === id) {
                if (field === 'rangeStart') {
                    return { ...row, rangeStart: value };
                }
                if (field === 'rangeEnd') {
                    const updatedValue = value !== '' ? value : rows4.find((r) => r.id === id - 1)?.rangeStart || '';
                    return { ...row, rangeEnd: updatedValue };
                }
                return { ...row, [field]: value };
            }
            return row;
        }));
        // 최댓값 100 , 100이상 적을시 자동으로 최댓값인 100입력
        if (field === 'percent') {
            const numericValue4 = parseFloat(value);
            const restrictedValue4 = numericValue4 > 100 ? 100 : numericValue4;
            setRows4(rows4.map((row) => (row.id === id ? { ...row, [field]: restrictedValue4.toString() } : row)));
        } else {
            setRows4(rows4.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
        }
    };
    // 추가인센_회원권 화면저장 
    const [savedRows4, setSavedRows4] = useState<{ id: number; rangeStart: string; rangeEnd: string; percent: string; }[]>([]);
    const handleSave4 = () => {
        const updatedRows4 = rows4.map((row, index) => {
            if (index > 0) {
                return { ...row, rangeEnd: rows4[index - 1].rangeStart };
            }
            return row;
        });
        setSavedRows4(updatedRows4);
    };


    // 추가인센_워킹 checkbox 클릭시 버튼생성
    const [chugawokingBtn, setChugawokingBtn] = useState(false);
    const handlechugawokingCheckboxClick = () => {
        setChugawokingBtn(!chugawokingBtn);
    };
    // 추가인센_워킹 테이블 
    const [chugawokingTable, setChugawokingTable] = useState(false);
    const handlechugawokinTableClick = () => {
        setChugawokingTable(!chugawokingTable);
    };
    // 추가인센_워킹 테이블
    const [rows5, setRows5] = useState([{ id: 1, rangeStart: '', rangeEnd: '', percent: '' }]);
    const handleAddRow5 = () => {
        const newRow = { id: rows5.length + 1, rangeStart: '', rangeEnd: '', percent: '' };
        setRows5([...rows5, newRow]);
    };
    const handleDeleteRow5 = (id: number) => {
        setRows5(rows5.filter((row) => row.id !== id));
    };
    const handleChange5 = (id: number, field: any, value: any) => {
        setRows5(rows5.map((row) => {
            if (row.id === id) {
                if (field === 'rangeStart') {
                    return { ...row, rangeStart: value };
                }
                if (field === 'rangeEnd') {
                    const updatedValue = value !== '' ? value : rows5.find((r) => r.id === id - 1)?.rangeStart || '';
                    return { ...row, rangeEnd: updatedValue };
                }
                return { ...row, [field]: value };
            }
            return row;
        }));
        // 최댓값 100 , 100이상 적을시 자동으로 최댓값인 100입력
        if (field === 'percent') {
            const numericValue5 = parseFloat(value);
            const restrictedValue5 = numericValue5 > 100 ? 100 : numericValue5;
            setRows5(rows5.map((row) => (row.id === id ? { ...row, [field]: restrictedValue5.toString() } : row)));
        } else {
            setRows5(rows5.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
        }
    };
    // 추가인센_워킹 화면저장 
    const [savedRows5, setSavedRows5] = useState<{ id: number; rangeStart: string; rangeEnd: string; percent: string; }[]>([]);
    const handleSave5 = () => {
        const updatedRows5 = rows5.map((row, index) => {
            if (index > 0) {
                return { ...row, rangeEnd: rows5[index - 1].rangeStart };
            }
            return row;
        });
        setSavedRows5(updatedRows5);
    };


    // 추가인센_기타 checkbox 클릭시 버튼생성
    const [chugagitaBtn, setChugagitaBtn] = useState(false);
    const handlechugagitaCheckboxClick = () => {
        setChugagitaBtn(!chugagitaBtn);
    };
    // 추가인센_기타 테이블
    const [chugagitaTable, setChugagitaTable] = useState(false);
    const handlechugagitaTableClick = () => {
        setChugagitaTable(!chugagitaTable);
    };
    // 추가인센_기타 테이블
    const [rows6, setRows6] = useState([{ id: 1, rangeStart: '', rangeEnd: '', percent: '' }]);
    const handleAddRow6 = () => {
        const newRow = { id: rows6.length + 1, rangeStart: '', rangeEnd: '', percent: '' };
        setRows6([...rows6, newRow]);
    };
    const handleDeleteRow6 = (id: number) => {
        setRows6(rows6.filter((row) => row.id !== id));
    };
    const handleChange6 = (id: number, field: any, value: any) => {
        setRows6(rows6.map((row) => {
            if (row.id === id) {
                if (field === 'rangeStart') {
                    return { ...row, rangeStart: value };
                }
                if (field === 'rangeEnd') {
                    const updatedValue = value !== '' ? value : rows6.find((r) => r.id === id - 1)?.rangeStart || '';
                    return { ...row, rangeEnd: updatedValue };
                }
                return { ...row, [field]: value };
            }
            return row;
        }));
        // 최댓값 100 , 100이상 적을시 자동으로 최댓값인 100입력
        if (field === 'percent') {
            const numericValue6 = parseFloat(value);
            const restrictedValue6 = numericValue6 > 100 ? 100 : numericValue6;
            setRows6(rows6.map((row) => (row.id === id ? { ...row, [field]: restrictedValue6.toString() } : row)));
        } else {
            setRows6(rows6.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
        }
    };
    // 추가인센_기타 화면저장 
    const [savedRows6, setSavedRows6] = useState<{ id: number; rangeStart: string; rangeEnd: string; percent: string; }[]>([]);
    const handleSave6 = () => {
        const updatedRows6 = rows6.map((row, index) => {
            if (index > 0) {
                return { ...row, rangeEnd: rows6[index - 1].rangeStart };
            }
            return row;
        });
        setSavedRows6(updatedRows6);
    };


    // textfieldCss
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#A0AAB4',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E0E3E7',
            },
            '&:hover fieldset': {
                borderColor: '#B2BAC2',
            },
            //   '&.Mui-focused fieldset': {
            //     borderColor: '#6F7E8C',
            //   },
        },
        fontFamily: [
            'Spoqa Han Sans Neo',
            'sans-serif',
        ],
    });



    return (
        <>
            {/*  backgroundColor: "#E9E9FF" */}
            <Row>
                <Col className="mt-3 mb-3" xl={6}>
                    <Card style={{ height: "98%", border: "3px solid #F0F0FF", boxShadow: "4px 4px 4px 4px #ECECF3" }}>
                        <Card.Body >
                            <div
                                style={{
                                    borderTopLeftRadius: 3,
                                    borderBottomLeftRadius: 3,
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: '5px',
                                    backgroundColor: '#727cf5',
                                }}
                            ></div>
                            <p className="mb-3" style={{ fontSize: "22px", marginLeft: "15px" }}>1. 사업장 정보</p>
                            <Row className="mt-3 mb-3" style={{ marginLeft: "3px", }}>
                                {saeobjang.map((field) => (
                                    <Col xs={6}
                                        className="form-floating mb-3"
                                        key={field.id}>
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
                            <ul className="list-inline wizard mt-2 mb-0">
                                <li className="next list-inline-item float-end">
                                    <Button
                                        variant="primary"
                                        onClick={() => { handleGyoyugcardClick(); handlebuttonClick('1'); }}
                                        style={{ display: buttonState['1'] ? 'none' : 'block' }}
                                    >
                                        다음
                                    </Button>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mt-3  mb-1" xl={6}>
                    {gyoyugcard &&
                        <Card style={{ marginRight: "10px", border: "3px solid #F0F0FF", boxShadow: "5px 5px 5px 5px #ECECF3" }}>
                            <Card.Body>
                                <div
                                    style={{
                                        borderTopLeftRadius: 3,
                                        borderBottomLeftRadius: 3,
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '5px',
                                        backgroundColor: '#727cf5',
                                    }}
                                ></div>
                                <p style={{ fontSize: "22px", marginLeft: "15px" }}>2. 교육</p>
                                <Row style={{ marginLeft: "3px" }}>
                                    <p className="mb-1" style={{ fontSize: "16px", color: "#CACACA" }}>교육을 진행하시나요?</p>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={gyoyugyeobu}
                                            onChange={handleGyoyugyeobuClick}
                                            row
                                        >
                                            <FormControlLabel
                                                value="yes"
                                                control={<Radio style={{ paddingTop: "5px" }} />}
                                                label="네"
                                                style={{ paddingLeft: "15px" }}
                                                checked={gyoyugyeobu}
                                            // onClick={handleGyoyugyeobuClick}
                                            />
                                            <FormControlLabel
                                                value="no"
                                                control={<Radio style={{ paddingTop: "5px" }} />}
                                                label="아니오"
                                                style={{ paddingLeft: "15px" }}
                                                checked={!gyoyugyeobu}
                                            // onClick={handleGyoyugyeobuClick}
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Row>

                                {/* 교육을 한다면 */}
                                {gyoyugyeobu &&
                                    <>
                                        <Row className="mb-1">
                                            <Col xl={5} >
                                                <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>교육비 공제 여부</FormLabel> <br />
                                                <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                                    <label style={labelStyle}>
                                                        <input
                                                            type='checkbox'
                                                            onClick={handleWonjangClick}
                                                            style={{ width: '25px', height: '25px' }}
                                                        /> &nbsp;&nbsp;&nbsp;&nbsp;여
                                                    </label>
                                                    <label style={labelStyle}>
                                                        <input
                                                            type='checkbox'
                                                            style={{ width: '25px', height: '25px', }}
                                                        /> &nbsp;&nbsp;&nbsp;&nbsp;부
                                                    </label>
                                                </span>
                                                {wonjanggyoyug &&
                                                    <Row>
                                                        <FormLabel className="mt-2" style={{ fontSize: "14px", color: "#919eab", marginLeft: "25px" }}>원장님 교육 대상</FormLabel> <br />
                                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                                            <label style={labelStyle} >
                                                                <input
                                                                    type='checkbox'
                                                                    style={{ width: '25px', height: '25px' }}
                                                                /> &nbsp;&nbsp;&nbsp;&nbsp;디자이너
                                                            </label>
                                                            <label style={labelStyle}>
                                                                <input
                                                                    type='checkbox'
                                                                    style={{ width: '25px', height: '25px', }}
                                                                /> &nbsp;&nbsp;&nbsp;&nbsp;스탭
                                                            </label>
                                                        </span>
                                                    </Row>
                                                }
                                            </Col>
                                            <Col xl={6}>
                                                <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>디자이너 교육</FormLabel> <br />
                                                <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                                    <label style={labelStyle}>
                                                        <input
                                                            type='checkbox'
                                                            onClick={handleDijaineoClick}
                                                            style={{ width: '25px', height: '25px' }}
                                                        /> &nbsp;&nbsp;&nbsp;&nbsp;디자이너
                                                    </label>
                                                    <label style={labelStyle}>
                                                        <input
                                                            type='checkbox'
                                                            style={{ width: '25px', height: '25px', }}
                                                        /> &nbsp;&nbsp;&nbsp;&nbsp;스탭
                                                    </label>
                                                </span>
                                                <Row style={{ marginLeft: "3px" }}>
                                                    {dijaineogyoyug &&
                                                        <>
                                                            <FormLabel className="mt-2" style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>강사비</FormLabel> <br />
                                                            <span style={{ display: 'inline-block' }}>
                                                                <TextField
                                                                    id=""
                                                                    label="금액"
                                                                    variant="outlined"
                                                                    type="number"
                                                                    fullWidth
                                                                />
                                                            </span>
                                                        </>
                                                    }
                                                </Row>
                                            </Col>
                                        </Row>
                                        <Row className="mt-2" style={{ marginLeft: "3px" }}>
                                            <FormLabel className="mb-1" style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>제품 사교육</FormLabel> <br />
                                            <span style={{ display: 'inline-block' }}>
                                                <TextField
                                                    id=""
                                                    label="정보입력"
                                                    variant="outlined"
                                                    type="text"
                                                    fullWidth
                                                />
                                            </span>
                                        </Row>
                                    </>
                                }
                                <ul className="list-inline wizard mt-2 mb-0">
                                    <li className="next list-inline-item float-end">
                                        <Button
                                            variant="primary"
                                            onClick={() => { handleGyujeongcardClick(); handlebuttonClick('2'); }}
                                            style={{ display: buttonState['2'] ? 'none' : 'block' }}
                                        >
                                            다음
                                        </Button>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    }
                </Col>
            </Row>
            <Row>
                {gyujeongcard &&
                    <Col xl={6}>
                        <Card style={{ border: "3px solid #F0F0FF", boxShadow: "4px 4px 4px 4px #ECECF3" }}>
                            <Card.Body >
                                <div
                                    style={{
                                        borderTopLeftRadius: 3,
                                        borderBottomLeftRadius: 3,
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '5px',
                                        backgroundColor: '#727cf5',
                                    }}
                                ></div>
                                <p className="mb-3" style={{ fontSize: "22px", marginLeft: "15px" }}>3. 규정</p>
                                <Row className="mb-3">
                                    <Col md={5}>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>상표사용</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px' }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;허용
                                            </label>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px', }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;제한
                                            </label>
                                        </span>
                                    </Col>
                                    <Col md={6}>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>고객유출</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px' }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;허용
                                            </label>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px', }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;제한
                                            </label>
                                        </span>
                                    </Col>
                                </Row>
                                <Row className="mb-1">
                                    <Col xl={5}>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>경업금지</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px' }}
                                                    onClick={handleGyeongeobClick}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;적용
                                            </label>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px', }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;미적용
                                            </label>
                                        </span>
                                        {gyeongeob &&
                                            <>
                                                <br />
                                                <Row className="mt-1">
                                                    <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                                        <label style={labelStyle} className="font-18">
                                                            <input
                                                                type='checkbox'
                                                                style={{ width: '20px', height: '20px' }}
                                                            /> &nbsp;&nbsp;&nbsp;&nbsp;1년 1km 1,000만원
                                                        </label>
                                                        <label style={labelStyle} className="font-18">
                                                            <input
                                                                type='checkbox'
                                                                style={{ width: '18px', height: '18px', }}
                                                            /> &nbsp;&nbsp;&nbsp;&nbsp;기타
                                                        </label>
                                                    </span>
                                                </Row>
                                            </>
                                        }
                                    </Col>
                                    <Col xl={6}>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab" }}>SNS 운영</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px' }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;블로그 , 인스타, 등
                                            </label>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px', }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;없음
                                            </label>
                                        </span>
                                    </Col>
                                </Row>
                                <ul className="list-inline wizard mt-2 mb-0">
                                    <li className="next list-inline-item float-end">
                                        <Button
                                            variant="primary"
                                            onClick={() => { handleMyeongsepyocardClick(); handlebuttonClick('3'); }}
                                            style={{ display: buttonState['3'] ? 'none' : 'block' }}
                                        >
                                            다음
                                        </Button>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                {myeongsepyocard &&
                    <Col xl={6}>
                        <Card style={{ height: "92%", border: "3px solid #F0F0FF", boxShadow: "4px 4px 4px 4px #ECECF3" }}>
                            <Card.Body >
                                <div
                                    style={{
                                        borderTopLeftRadius: 3,
                                        borderBottomLeftRadius: 3,
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '5px',
                                        backgroundColor: '#727cf5',
                                    }}
                                ></div>
                                <p className="mb-3" style={{ fontSize: "22px", marginLeft: "15px" }}>4. 명세서 표기 내역</p>
                                <Row className="mb-2" >
                                    <Col xl={4}>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>명세서 여부</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    onClick={handleMyeongseseoClick}
                                                    style={{ width: '25px', height: '25px' }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;여
                                            </label>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px', }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;부
                                            </label>
                                        </span>
                                    </Col>
                                    <Col xl={3}>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>스탭 여부</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    onClick={handleSeutaebClick}
                                                    style={{ width: '25px', height: '25px' }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;여
                                            </label>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px', }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;부
                                            </label>
                                        </span>
                                    </Col>
                                </Row>
                                <Row >
                                    <span style={{ display: 'inline-block', alignItems: 'center', }}>
                                        {myeongseseo &&
                                            <>
                                                <label style={labelStyle} className="font-18">
                                                    <input
                                                        type='checkbox'
                                                        style={{ width: '20px', height: '20px' }}
                                                    /> &nbsp;&nbsp;&nbsp;&nbsp;재료비
                                                </label>
                                                <label style={labelStyle} className="font-18">
                                                    <input
                                                        type='checkbox'
                                                        style={{ width: '20px', height: '20px' }}
                                                    /> &nbsp;&nbsp;&nbsp;&nbsp;관리비
                                                </label>
                                                <label style={labelStyle} className="font-18">
                                                    <input
                                                        type='checkbox'
                                                        style={{ width: '20px', height: '20px', }}
                                                    /> &nbsp;&nbsp;&nbsp;&nbsp;광고비
                                                </label>
                                                <label style={labelStyle} className="font-18">
                                                    <input
                                                        type='checkbox'
                                                        style={{ width: '20px', height: '20px', }}
                                                    /> &nbsp;&nbsp;&nbsp;&nbsp;기타
                                                </label>
                                            </>
                                        }
                                        {seutaeb &&
                                            <>
                                                <label style={labelStyle} className="font-18">
                                                    <input
                                                        type='checkbox'
                                                        style={{ width: '20px', height: '20px' }}
                                                        checked
                                                    /> &nbsp;&nbsp;&nbsp;&nbsp;인력보조비
                                                </label>
                                                {/* <label style={{ fontSize: '1.4em', fontWeight: 300 }}>인력보조비</label> */}
                                            </>
                                        }
                                    </span>
                                </Row>
                                <ul className="list-inline wizard mt-2 mb-0">
                                    <li className="next list-inline-item float-end">
                                        <Button
                                            variant="primary"
                                            onClick={() => { handleGitacardClick(); handlebuttonClick('4'); }}
                                            style={{ display: buttonState['4'] ? 'none' : 'block' }}
                                        >
                                            다음
                                        </Button>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
            <Row>
                {gitacard &&
                    <Col xl={6}>
                        <Card style={{ border: "3px solid #F0F0FF", boxShadow: "4px 4px 4px 4px #ECECF3" }}>
                            <Card.Body >
                                <div
                                    style={{
                                        borderTopLeftRadius: 3,
                                        borderBottomLeftRadius: 3,
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '5px',
                                        backgroundColor: '#727cf5',
                                    }}
                                ></div>
                                <p className="mb-3" style={{ fontSize: "22px", marginLeft: "15px" }}>5. 직원혜택</p>
                                <Row className="mb-3">
                                    <Col>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>본인 시술 시</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px' }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;제품원가
                                            </label>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px', }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;본인면제
                                            </label>
                                        </span>
                                    </Col>
                                </Row>
                                <Row style={{ marginLeft: "1px" }}>
                                    <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>가족, 지인 방문 시 할인 여부 (%)</FormLabel> <br />
                                    <span style={{ display: 'inline-block' }}>
                                        <TextField
                                            id=""
                                            label="가족"
                                            variant="outlined"
                                            type="number"
                                            style={{ marginLeft: "3px" }}
                                            className="mt-1"
                                        /> &nbsp;&nbsp;
                                        <TextField
                                            id=""
                                            label="지인"
                                            variant="outlined"
                                            type="number"
                                            style={{ marginLeft: "3px" }}
                                            className="mt-1"
                                        /> &nbsp;&nbsp;
                                        <label style={labelStyle} className="mt-3">
                                            <input
                                                type='checkbox'
                                                style={{ width: '25px', height: '25px', }}
                                            /> &nbsp;&nbsp;&nbsp;&nbsp;재량 할인 가능
                                        </label>
                                    </span>
                                </Row>
                                <ul className="list-inline wizard mt-2 mb-0">
                                    <li className="next list-inline-item float-end">
                                        <Button
                                            variant="primary"
                                            onClick={() => { handleSusulyocardClick(); handlebuttonClick('5'); }}
                                            style={{ display: buttonState['5'] ? 'none' : 'block' }}
                                        >
                                            다음
                                        </Button>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                }
                {susulyocard &&
                    <Col xl={6}>
                        <Card style={{ border: "3px solid #F0F0FF", boxShadow: "4px 4px 4px 4px #ECECF3" }}>
                            <Card.Body >
                                <div
                                    style={{
                                        borderTopLeftRadius: 3,
                                        borderBottomLeftRadius: 3,
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '5px',
                                        backgroundColor: '#727cf5',
                                    }}
                                ></div>
                                <p className="mb-3" style={{ fontSize: "22px", marginLeft: "15px" }}>6. 수수료</p>
                                <Row className="mb-3">
                                    <Col>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>수수료 지급일</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    onClick={handleMonthClick}
                                                    style={{ width: '25px', height: '25px' }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;월 기준
                                            </label>
                                            {monthInput &&
                                                <>
                                                    <span style={labelStyle}>
                                                        <label style={{ fontSize: '18px', fontWeight: 300, marginTop: "10px", }}> 1일 ~ 말일 ~ 지급일</label>
                                                        &nbsp;&nbsp;
                                                        <TextField
                                                            id=""
                                                            label="날짜"
                                                            variant="outlined"
                                                            type="number"
                                                            style={{ maxWidth: "60px" }}
                                                            size='small'
                                                        /> &nbsp;
                                                    </span>
                                                </>
                                            }
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px', }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;입사일 기준
                                            </label>
                                        </span>
                                    </Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col xl={12}>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>정산 순서</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <p style={{ fontSize: '20px', fontWeight: 300, marginLeft: "15px" }}>부가가치세 &nbsp;
                                                (&nbsp;
                                                <label style={labelStyle} >
                                                    <input
                                                        type='checkbox'
                                                        onClick={handleSeutaebClick}
                                                        style={{ width: '25px', height: '25px' }}
                                                    /> &nbsp;&nbsp;&nbsp;&nbsp;현금
                                                </label>
                                                <label style={labelStyle}>
                                                    <input
                                                        type='checkbox'
                                                        style={{ width: '25px', height: '25px', }}
                                                        onClick={handlecarVATClick}
                                                    /> &nbsp;&nbsp;&nbsp;&nbsp;카드
                                                </label> &nbsp;&nbsp;
                                                {cardVAT && (
                                                    // <TextField
                                                    //     id=""
                                                    //     label="select변경"
                                                    //     variant="outlined"
                                                    //     type="number"
                                                    //     style={{ maxWidth: "100px" }}
                                                    //     size="small"
                                                    // />
                                                    <CssTextField
                                                        select
                                                        value={selectedOption || ''}
                                                        onChange={handleOptionChange}
                                                    >
                                                        {options.map((option) => (
                                                            <MenuItem key={option.value} value={option.value}>
                                                                {option.label}
                                                            </MenuItem>
                                                        ))}
                                                    </CssTextField>
                                                     )}
                                                    {!selectedOption && cardVAT && (
                                                        <CssTextField
                                                            type='text'
                                                            value={otherInputValue}
                                                            onChange={handleOtherInputChange}
                                                        />
                                                    )}
                                                   
                                                &nbsp;),
                                                카드 수수료 &nbsp;
                                                (&nbsp;
                                                <TextField
                                                    id=""
                                                    label="숫자"
                                                    variant="outlined"
                                                    type="string"
                                                    style={{ maxWidth: "80px" }}
                                                    size="small"
                                                />&nbsp;&nbsp;
                                                % &nbsp;) ,
                                                소셜 수수료 &nbsp;
                                                (&nbsp;
                                                <TextField
                                                    id=""
                                                    label="숫자"
                                                    variant="outlined"
                                                    type="number"
                                                    style={{ maxWidth: "80px" }}
                                                    size="small"
                                                />&nbsp;
                                                % &nbsp;) ,
                                            </p>
                                        </span>
                                    </Col>
                                </Row>
                                <Row className="mb-3" >
                                    <Col md={4}>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>선불권(회원권)</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px' }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;선지급
                                            </label>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px', }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;후지급
                                            </label>
                                        </span>
                                    </Col>
                                    <Col md={8}>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>점판수당</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px' }}
                                                    onClick={handleMaechulaeggijunClick}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;매출액 기준
                                            </label>
                                            &nbsp;
                                            {maechulaeggijun &&
                                                <TextField
                                                    id=""
                                                    label="%"
                                                    variant="outlined"
                                                    type="number"
                                                    style={{ maxWidth: "80px", }}
                                                    size="small"
                                                />
                                            } &nbsp;&nbsp;
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px', }}
                                                    onClick={handleIiggeumgijunClick}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;이익금 기준
                                            </label>
                                            &nbsp;
                                            {iiggeumgijun &&
                                                <TextField
                                                    id=""
                                                    label="%"
                                                    variant="outlined"
                                                    type="number"
                                                    style={{ maxWidth: "80px", }}
                                                    size="small"
                                                />
                                            }
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>매출 기준</FormLabel> <br />
                                        <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px' }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;(세전) 매출 자체를 기준
                                            </label>
                                            <label style={labelStyle}>
                                                <input
                                                    type='checkbox'
                                                    style={{ width: '25px', height: '25px', }}
                                                /> &nbsp;&nbsp;&nbsp;&nbsp;(세후) 매출에서 부가세 공제 후 기준
                                            </label>
                                        </span>
                                    </Col>
                                </Row>
                                <ul className="list-inline wizard mt-2 mb-0">
                                    <li className="next list-inline-item float-end">
                                        <Button
                                            variant="primary"
                                            onClick={() => { handleSusulyocardClick(); handlebuttonClick('6'); }}
                                            style={{ display: buttonState['6'] ? 'none' : 'block' }}

                                        >
                                            다음
                                        </Button>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
            {/* insentibeu */}
            <Row>
                <Col xl={6}>
                    <Card style={{ border: "3px solid #F0F0FF", boxShadow: "4px 4px 4px 4px #ECECF3" }}>
                        <Card.Body >
                            <div
                                style={{
                                    borderTopLeftRadius: 3,
                                    borderBottomLeftRadius: 3,
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: '5px',
                                    backgroundColor: '#727cf5',
                                }}
                            ></div>
                            <p className="mb-3" style={{ fontSize: "22px", marginLeft: "15px" }}>7. 인센티브</p>
                            <Row className="mb-3">
                                <Col className="text-start">
                                    <Button
                                        variant="primary"
                                        onClick={() => openModalWithSize('lg')}
                                    >
                                        인센티브 추가
                                    </Button>
                                </Col>
                            </Row>
                            {/* 전체 인센티브 */}
                            {displayData &&  savedData.length > 0 && (
                                <span style={labelStyle}>
                                    • 전체인센티브 : &nbsp;&nbsp;
                                <label style={{ fontSize: '20px', fontWeight: 300, }}> 매출 X</label>
                                &nbsp;&nbsp;
                                {savedData} %
                            </span>
                                
                            )}
                            
                            {/* 기본 인센티브 */}
                            {savedRows2.length > 0 && (
                                <Row>
                                    <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed',fontSize:"16px" }}>
                                        <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                            <tr>
                                                <th colSpan={3}>기본 인센티브</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{textAlign:"center"}}>
                                            {savedRows2.map((row) => (
                                                <tr key={row.id}>
                                                    <td>{row.rangeStart} 이상</td>
                                                    <td>{row.rangeEnd} 미만</td>
                                                    <td>{row.percent} %</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Row>
                            )}
                            {/* 시술매출 추가 인센티브 */}
                            {savedRows3.length > 0 && (
                                <Row>
                                    <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed',fontSize:"16px"  }}>
                                        <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                            <tr>
                                                <th colSpan={3}>시술 매출 추가 인센티브</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{textAlign:"center"}}>
                                            {savedRows3.map((row) => (
                                                <tr key={row.id}>
                                                    <td>{row.rangeStart} 이상</td>
                                                    <td>{row.rangeEnd} 미만</td>
                                                    <td>{row.percent} %</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Row>
                            )}
                            {/* 회원권 추가 인센티브 */}
                            {savedRows4.length > 0 && (
                                <Row>
                                    <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed',fontSize:"16px"  }}>
                                        <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                            <tr>
                                                <th colSpan={3}>회원권 추가 인센티브</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{textAlign:"center"}}>
                                            {savedRows4.map((row) => (
                                                <tr key={row.id}>
                                                    <td>{row.rangeStart} 이상</td>
                                                    <td>{row.rangeEnd} 미만</td>
                                                    <td>{row.percent} %</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Row>
                            )}
                            {/* 워킹 추가 인센티브 */}
                            {savedRows5.length > 0 && (
                                <Row>
                                    <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed',fontSize:"16px"  }}>
                                        <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                            <tr>
                                                <th colSpan={3}>워킹 추가 인센티브</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{textAlign:"center"}}>
                                            {savedRows5.map((row) => (
                                                <tr key={row.id}>
                                                    <td>{row.rangeStart} 이상</td>
                                                    <td>{row.rangeEnd} 미만</td>
                                                    <td>{row.percent} %</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Row>
                            )}
                            {/* 기타 추가 인센티브 */}
                            {savedRows6.length > 0 && (
                                <Row>
                                    <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed',fontSize:"16px"  }}>
                                        <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                            <tr>
                                                <th colSpan={3}>워킹 추가 인센티브</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{textAlign:"center"}}>
                                            {savedRows6.map((row) => (
                                                <tr key={row.id}>
                                                    <td>{row.rangeStart} 이상</td>
                                                    <td>{row.rangeEnd} 미만</td>
                                                    <td>{row.percent} %</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Row>
                            )}
                            <ul className="list-inline wizard mt-2 mb-0">
                                <li className="next list-inline-item float-end">
                                    <Button
                                        variant="primary"
                                        onClick={() => { handleSusulyocardClick(); handlebuttonClick('7'); }}
                                        style={{ display: buttonState['7'] ? 'none' : 'block' }}

                                    >
                                        다음
                                    </Button>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={isOpen} onHide={toggleModal} dialogClassName={className} size={size} scrollable={scroll}>
                <Modal.Header onHide={toggleModal} closeButton>
                    <h4 className="modal-title">인센티브 생성</h4>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col sm={4} className="mt-0">
                            <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>전체/구간 설정</FormLabel> <br />
                            <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                <label style={labelStyle}>
                                    <input
                                        type='checkbox'
                                        style={{ width: '25px', height: '25px' }}
                                        checked={checkbox1Checked}
                                        // disabled={checkbox2Checked}
                                        onClick={() => { handleJeoncheinsentibeuClick(); handleCheckbox1Change(); }}
                                    /> &nbsp;&nbsp;&nbsp;&nbsp;전체
                                </label>
                                <label style={labelStyle}>
                                    <input
                                        type='checkbox'
                                        style={{ width: '25px', height: '25px', }}
                                        checked={checkbox2Checked}
                                        // disabled={checkbox1Checked}
                                        onClick={() => { handleGuganinsentibeuClick(); handleCheckbox2Change(); }}
                                    /> &nbsp;&nbsp;&nbsp;&nbsp;구간
                                </label>
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        {jeoncheinsentibeu &&
                            <Col className="mt-0">
                                <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>전체인센티브설정</FormLabel> <br />
                                <span style={labelStyle}>
                                    <label style={{ fontSize: '20px', fontWeight: 300, marginTop: "10px", }}> 매출 X</label>
                                    &nbsp;&nbsp;
                                    <TextField
                                        id=""
                                        label="%"
                                        value={savedData}
                                        onChange={handleInputChange}
                                        variant="outlined"
                                        type="number"
                                        style={{ maxWidth: "70px" }}
                                        size='small'
                                    /> &nbsp;
                                </span>
                            </Col>
                        }
                        {guganinsentibeu &&
                            <Col>
                                <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>구간 인센티브 설정</FormLabel> <br />
                                <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                    <label style={labelStyle}>
                                        <input
                                            type='checkbox'
                                            style={{ width: '25px', height: '25px' }}
                                            checked={checkbox3Checked}
                                            disabled={checkbox4Checked}
                                            onClick={() => { handleCheckbox3Change(); handleGiboninsentibeuClick(); }}
                                        /> &nbsp;&nbsp;&nbsp;&nbsp;기본인센티브
                                    </label>
                                    <label style={labelStyle}>
                                        <input
                                            type='checkbox'
                                            style={{ width: '25px', height: '25px', }}
                                            checked={checkbox4Checked}
                                            disabled={checkbox3Checked}
                                            onClick={() => { handleCheckbox4Change(); handleChugainsentibeuClick(); }}
                                        /> &nbsp;&nbsp;&nbsp;&nbsp;추가인센티브
                                    </label>
                                </span>
                            </Col>
                        }
                    </Row>
                    <Row>
                        {giboninsentibeu &&
                            <>
                                <Col>
                                    <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>정산 기준</FormLabel> <br />
                                    <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                        <label style={labelStyle}>
                                            <input
                                                type='checkbox'
                                                style={{ width: '25px', height: '25px' }}
                                                checked={isChecked.checkbox1}
                                                onChange={() => handleCheckboxChange('checkbox1')}
                                            /> &nbsp;&nbsp;&nbsp;&nbsp;시술 매출
                                        </label>
                                        <label style={labelStyle}>
                                            <input
                                                type='checkbox'
                                                style={{ width: '25px', height: '25px', }}
                                                checked={isChecked.checkbox2}
                                                onChange={() => handleCheckboxChange('checkbox2')}

                                            /> &nbsp;&nbsp;&nbsp;&nbsp;회원권
                                        </label>
                                        <label style={labelStyle}>
                                            <input
                                                type='checkbox'
                                                style={{ width: '25px', height: '25px', }}
                                                checked={isChecked.checkbox3}
                                                onChange={() => handleCheckboxChange('checkbox3')}
                                            /> &nbsp;&nbsp;&nbsp;&nbsp;기타
                                        </label> &nbsp;
                                        {/* <TextField
                                                    id=""
                                                    label="기타"
                                                    variant="outlined"
                                                    type="text"
                                                    style={{ maxWidth: "80px", }}
                                                    size="small"
                                                /> */}
                                    </span>
                                </Col>
                            </>
                        }
                    </Row>
                    <Row>
                        <Col className="text-end mb-1">
                            {isAnyCheckboxChecked ? (
                                <Button
                                    onClick={handleGiboninsentibeuteibeulClick}
                                >
                                    생성
                                </Button>) : null
                            }
                        </Col>
                    </Row>
                    <Row>
                        {giboninsentibeuteibeul &&
                            <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed' }}>
                                <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                    <tr>
                                        <th colSpan={4}>기본인센티브 &nbsp;&nbsp;
                                            {/* <Button onClick={handleAddRow}>+</Button> */}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {rows.map((row, index) => (
                                        <tr key={row.id}>
                                            <td style={{ padding: "10px" }}>
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
                                            <td style={{ padding: "10px" }}>
                                                {/* <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>미만</p> */}
                                                <TextField
                                                    id=""
                                                    // value={row.rangeEnd}
                                                    value={row.rangeEnd !== '' ? row.rangeEnd : rows[index - 1]?.rangeStart}
                                                    label="미만"
                                                    onChange={(e) => handleChange2(row.id, 'rangeEnd', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                />

                                            </td>
                                            <td style={{ padding: "10px" }}>
                                                {/* <p className="text-end mb-0 mt-0" style={{ fontSize: "10px" }}>%</p> */}
                                                <TextField
                                                    id=""
                                                    value={row.percent}
                                                    label="%"
                                                    onChange={(e) => handleChange2(row.id, 'percent', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                    inputProps={{ max: 100 }} //최댓값 100
                                                />
                                            </td> 
                                            <td className="text-center">
                                                <Button onClick={handleAddRow}>+</Button>  &nbsp;&nbsp;
                                                <Button onClick={() => handleDeleteRow(row.id)}>-</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        }
                    </Row>
                    <Row>
                        {chugainsentibeu &&
                            <Col>
                                <FormLabel style={{ fontSize: "14px", color: "#919eab", marginLeft: "15px" }}>정산 기준</FormLabel> <br />
                                <span style={{ display: 'inline-block', alignItems: 'center' }}>
                                    <label style={labelStyle}>
                                        <input
                                            type='checkbox'
                                            name="checkbox5"
                                            style={{ width: '25px', height: '25px' }}
                                            checked={selectedCheckbox === 'checkbox5'}
                                            onChange={() => {
                                                handleCheckboxChange2('checkbox5');
                                                handlechugasisulCheckboxClick();
                                            }}
                                            disabled={selectedCheckbox !== '' && selectedCheckbox !== 'checkbox5'}

                                        /> &nbsp;&nbsp;&nbsp;&nbsp;시술 매출
                                    </label>
                                    <label style={labelStyle}>
                                        <input
                                            type='checkbox'
                                            name="checkbox6"
                                            style={{ width: '25px', height: '25px', }}
                                            checked={selectedCheckbox === 'checkbox6'}
                                            onChange={() => {
                                                handleCheckboxChange2('checkbox6');
                                                handlechugahoewonCheckboxClick();
                                            }}
                                            disabled={selectedCheckbox !== '' && selectedCheckbox !== 'checkbox6'}

                                        /> &nbsp;&nbsp;&nbsp;&nbsp;회원권
                                    </label>
                                    <label style={labelStyle}>
                                        <input
                                            type='checkbox'
                                            name="checkbox7"
                                            style={{ width: '25px', height: '25px', }}
                                            checked={selectedCheckbox === 'checkbox7'}
                                            onChange={() => {
                                                handleCheckboxChange2('checkbox7');
                                                handlechugawokingCheckboxClick();
                                            }}
                                            disabled={selectedCheckbox !== '' && selectedCheckbox !== 'checkbox7'}

                                        /> &nbsp;&nbsp;&nbsp;&nbsp;워킹
                                    </label>
                                    <label style={labelStyle}>
                                        <input
                                            type='checkbox'
                                            name="checkbox8"
                                            style={{ width: '25px', height: '25px', }}
                                            checked={selectedCheckbox === 'checkbox8'}
                                            onChange={() => {
                                                handleCheckboxChange2('checkbox8');
                                                handlechugagitaCheckboxClick();
                                            }}
                                            disabled={selectedCheckbox !== '' && selectedCheckbox !== 'checkbox8'}

                                        /> &nbsp;&nbsp;&nbsp;&nbsp;기타
                                    </label> &nbsp;
                                    {/* <TextField
                                        id=""
                                        label="기타"
                                        variant="outlined"
                                        type="text"
                                        style={{ maxWidth: "80px", }}
                                        size="small"
                                    /> */}
                                </span>
                            </Col>

                        }
                    </Row>
                    <Row className="mt-2 mb-2">
                        {chugasisulBtn &&
                            <Button onClick={handlechugasisulTableClick}>
                                생성
                            </Button>
                        }
                        {chugahoewonBtn &&
                            <Button onClick={handlechugahoewonTableClick}>
                                생성
                            </Button>
                        }
                        {chugawokingBtn &&
                            <Button onClick={handlechugawokinTableClick}>
                                생성
                            </Button>
                        }
                        {chugagitaBtn &&
                            <Button onClick={handlechugagitaTableClick}>
                                생성
                            </Button>
                        }
                    </Row>
                    <Row>
                        {chugasisulTable &&
                            <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed' }}>
                                <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                    <tr>
                                        <th colSpan={4}>시술 매출 추가 인센티브 &nbsp;&nbsp;
                                            {/* <Button onClick={handleAddRow}>+</Button> */}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {rows3.map((row, index) => (
                                        <tr key={row.id}>
                                            <td style={{ padding: "10px" }}>
                                                <TextField
                                                    id=""
                                                    value={row.rangeStart}
                                                    label="이상"
                                                    onChange={(e) => handleChange3(row.id, 'rangeStart', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                />
                                            </td>
                                            <td style={{ padding: "10px" }}>
                                                <TextField
                                                    id=""
                                                    // value={row.rangeEnd}
                                                    value={row.rangeEnd !== '' ? row.rangeEnd : rows3[index - 1]?.rangeStart}
                                                    label="미만"
                                                    onChange={(e) => handleChange3(row.id, 'rangeEnd', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                />

                                            </td>
                                            <td style={{ padding: "10px" }}>
                                                <TextField
                                                    id=""
                                                    value={row.percent}
                                                    label="%"
                                                    onChange={(e) => handleChange3(row.id, 'percent', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                    inputProps={{ max: 100 }} //최댓값 100
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Button onClick={handleAddRow3}>+</Button>  &nbsp;&nbsp;
                                                <Button onClick={() => handleDeleteRow3(row.id)}>-</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        }
                    </Row>
                    <Row>
                        {chugahoewonTable &&
                            <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed' }}>
                                <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                    <tr>
                                        <th colSpan={4}>회원권 추가 인센티브 &nbsp;&nbsp;
                                            {/* <Button onClick={handleAddRow}>+</Button> */}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows4.map((row, index) => (
                                        <tr key={row.id}>
                                            <td style={{ padding: "10px" }}>
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
                                            <td style={{ padding: "10px" }}>
                                                <TextField
                                                    id=""
                                                    // value={row.rangeEnd}
                                                    value={row.rangeEnd !== '' ? row.rangeEnd : rows4[index - 1]?.rangeStart}
                                                    label="미만"
                                                    onChange={(e) => handleChange4(row.id, 'rangeEnd', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                />

                                            </td>
                                            <td style={{ padding: "10px" }}>
                                                <TextField
                                                    id=""
                                                    value={row.percent}
                                                    label="%"
                                                    onChange={(e) => handleChange4(row.id, 'percent', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                    inputProps={{ max: 100 }} //최댓값 100
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Button onClick={handleAddRow4}>+</Button>  &nbsp;&nbsp;
                                                <Button onClick={() => handleDeleteRow4(row.id)}>-</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        }
                    </Row>
                    <Row>
                        {chugawokingTable &&
                            <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed' }}>
                                <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                    <tr>
                                        <th colSpan={4}>워킹 추가 인센티브 &nbsp;&nbsp;
                                            {/* <Button onClick={handleAddRow}>+</Button> */}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows5.map((row, index) => (
                                        <tr key={row.id}>
                                            <td style={{ padding: "10px" }}>
                                                <TextField
                                                    id=""
                                                    value={row.rangeStart}
                                                    label="이상"
                                                    onChange={(e) => handleChange5(row.id, 'rangeStart', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                />
                                            </td>
                                            <td style={{ padding: "10px" }}>
                                                <TextField
                                                    id=""
                                                    // value={row.rangeEnd}
                                                    value={row.rangeEnd !== '' ? row.rangeEnd : rows5[index - 1]?.rangeStart}
                                                    label="미만"
                                                    onChange={(e) => handleChange5(row.id, 'rangeEnd', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                />

                                            </td>
                                            <td style={{ padding: "10px" }}>
                                                <TextField
                                                    id=""
                                                    value={row.percent}
                                                    label="%"
                                                    onChange={(e) => handleChange5(row.id, 'percent', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                    inputProps={{ max: 100 }} //최댓값 100
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Button onClick={handleAddRow5}>+</Button>  &nbsp;&nbsp;
                                                <Button onClick={() => handleDeleteRow5(row.id)}>-</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        }
                    </Row>
                    <Row>
                        {chugagitaTable &&
                            <Table className="table-centered table-bordered table caption-top" style={{ tableLayout: 'fixed' }}>
                                <thead className="table-madegray text-center" style={{ color: "#6c757d" }}>
                                    <tr>
                                        <th colSpan={4}>기타 추가 인센티브 &nbsp;&nbsp;
                                            {/* <Button onClick={handleAddRow}>+</Button> */}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows6.map((row, index) => (
                                        <tr key={row.id}>
                                            <td style={{ padding: "10px" }}>
                                                <TextField
                                                    id=""
                                                    value={row.rangeStart}
                                                    label="이상"
                                                    onChange={(e) => handleChange6(row.id, 'rangeStart', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                />
                                            </td>
                                            <td style={{ padding: "10px" }}>
                                                <TextField
                                                    id=""
                                                    // value={row.rangeEnd}
                                                    value={row.rangeEnd !== '' ? row.rangeEnd : rows6[index - 1]?.rangeStart}
                                                    label="미만"
                                                    onChange={(e) => handleChange6(row.id, 'rangeEnd', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                />

                                            </td>
                                            <td style={{ padding: "10px" }}>
                                                <TextField
                                                    id=""
                                                    value={row.percent}
                                                    label="%"
                                                    onChange={(e) => handleChange6(row.id, 'percent', e.target.value)}
                                                    variant="outlined"
                                                    type="number"
                                                    fullWidth
                                                    inputProps={{ max: 100 }} //최댓값 100
                                                />
                                            </td>
                                            <td className="text-center">
                                                <Button onClick={handleAddRow6}>+</Button>  &nbsp;&nbsp;
                                                <Button onClick={() => handleDeleteRow6(row.id)}>-</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        }
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={()=>{toggleModal();}}>
                        닫기
                    </Button>{' '}
                    {/* <Button onClick={()=>{toggleModal(); handleSave3();}}>저장</Button> */}
                    {jeoncheinsentibeu && (
                        <Button onClick={()=>{handleSaveClick();}}>저장 (전체 인센티브)</Button>
                    )}
                    {giboninsentibeuteibeul && (
                        <Button onClick={()=>{toggleModal();handleSave2();}}>저장 (기본 인센티브)</Button>
                    )}
                    {chugasisulTable && (
                        <Button onClick={()=>{toggleModal();handleSave3();}}>저장 (시술 매출 추가 인센티브)</Button>
                    )}
                    {chugahoewonTable && (
                        <Button onClick={()=>{toggleModal();handleSave4();}}>저장 (회원권 추가 인센티브)</Button>
                    )}
                    {chugawokingTable && (
                        <Button onClick={()=>{toggleModal();handleSave5();}}>저장 (워킹 추가 인센티브)</Button>
                    )}
                    {chugagitaTable && (
                        <Button onClick={()=>{toggleModal();handleSave6();}}>저장 (워킹 추가 인센티브)</Button>
                    )}
                </Modal.Footer>
            </Modal>


        </>
    );
};

export default SettingformMiyongeob;