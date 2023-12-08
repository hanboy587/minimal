import { Row, Col, Card, Container, Table, Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState, useCallback, useRef, Component } from 'react';
import coinpig from 'assets/images/coinpig.png';
import axios, { Axios } from 'axios';
import geubyeopay from './geubyeolist.json';
import geubyeopay2 from './geubyeolist2.json';
import { useMediaQuery } from "react-responsive";
import { useAsync } from 'react-bootstrap-typeahead';


import Select from 'react-select';
import JigeobList from './JigeobList';
import { TbTestPipe2 } from 'react-icons/tb';
import { select } from 'redux-saga/effects';
import { makeWoldo } from 'utils/makeWoldo';
import { nextWoldoBtn } from 'utils/nextWoldoBtn';
import { beforeWoldoBtn } from 'utils/beforeWoldoBtn';
import { styles2 } from 'utils/geubyeostyle2';
import { styles3 } from 'utils/geubyeostyle3';
import { styles4 } from 'utils/geubyeostyle4';
import { styles5 } from 'utils/geubyeostyle5';

import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF, {
    Document,
    Page,
    Text, View,
    PDFDownloadLink,
    Font
} from '@react-pdf/renderer';
import NanumGothic from 'assets/fonts/NanumGothic.ttf';
import NanumSquareRoundB from 'assets/fonts/NanumSquareRoundB.ttf';
import { redo } from 'easymde';
import { getUsername } from 'utils/getUsername';



const GeubyeoPC = () => {
    // 이름
    const [realname, setRealname] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setRealname(JSON.parse(data).realname);
    }, []);

    // 회사명
    const [division, setDivision] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setDivision(JSON.parse(data).division);
    }, []);

    // ID겸이메일
    const [username, setUsername] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setUsername(JSON.parse(data).username);
    }, []);


    // pdf버튼
    function prom1() {
        if (window.prompt("비밀번호를 입력해주세요 ex)1111") == '1111') {
            alert("파일다운로드를 시작합니다")
        } else {
            alert("인증 실패")
        }
    };






    const [users, setUsers] = useState<any[]>();
    const [gongjae, setGongjae] = useState<any[]>();
    const [sanjunggengeo, setSanjunggengeo] = useState<any[]>();
    const [sanjunggengeosik, setSanjunggengeosik] = useState<any[]>();
    const [isError, setIsError] = useState(false);
    const [ipsaDt, SetIpsaDt] = useState<any>('');



    // email 버튼
    function prom2() {
        axios.post('https://email.rba.kr/mail', {
            title: '테스트',
            message: '',
            email: 'hanboy587@naver.com',
        })
            .then(res => {
                console.log(res.data);
            })
    };
    // const [jigeobMap, setJigeobMap] = useState<any[]>();

    // const postData = async () => {
    //     const data = await axios.post('https://kjh.rba.kr/payroll/search',{
    //         yearMonth:'2022-12'
    //     })
    //     setJigeobMap(data.data);
    //     return(
    //         <>
    //             {jigeobMap?.map((inf) => {
    //                 <p>
    //                     {inf.data}
    //                 </p>
    //             })}
    //         </>
    //     )
    // }
    // useEffect(() => {
    //         console.log('새로 구현하는 axios res : ', jigeobMap);
    // },[jigeobMap]);
    // useEffect(() => {
    //     postData();
    // }, []);



    // function GetList(gubun: number) {

    //     const [users, setUsers] = useState<any[]>();
    //     const [gongjae, setGongjae] = useState<any[]>();
    //     const [sanjunggengeo, setSanjunggengeo] = useState<any[]>();
    //     const [sanjunggengeosik, setSanjunggengeosik] = useState<any[]>();

    //     const nowYear = new Date();
    //     let useMonth:any;

    //     const afterDate = () => {
    //         alert('다음 버튼');
    //         setGetYearMonth({
    //             yearMonth:'2023-01',
    //         })
    //     }
    //     const beforeDate = () => {
    //         alert('이전 버튼');
    //         setGetYearMonth({
    //             yearMonth:'2022-12',
    //         })
    //         // nowYear.setMonth(nowYear.getMonth()-1)
    //         // console.log(':::', useMonth);/
    //     }   

    //     if(nowYear.getMonth() < 10){
    //         useMonth = '0' + (nowYear.getMonth()+1);
    //     }else{
    //         useMonth = nowYear.getMonth()+1;
    //     }
    //     console.log(':::::',useMonth);

    //     const useYear = nowYear.getFullYear() + '-' + useMonth;
    //     console.log(':::', useYear);
    //     const [getYearMonth, setGetYearMonth] = useState({
    //         yearMonth: '2022-12',
    //     });
    //     // const useYear = useDate();
    //     // console.log('useYear : : : : : : ', useYear);

    //     useEffect(() => {
    //     },[nowYear])
    //     useEffect(() => {
    //         console.log(getYearMonth);
    //     },[getYearMonth])

    //     // const buttonClick = () => {
    //     //     setGetYearMonth('2023-01');
    //     // }

    //     useEffect(() => {
    //     // axios.get('/geubyeolist2.json')
    //         console.log('aaaaaaaaaaaaaaaaaaaaaa', getYearMonth);
    //         // axios.get('http://localhost:3000/geubyeolist3.json')
    //         console.log(getYearMonth)
    //         axios.post('https://kjh.rba.kr/payroll/search',getYearMonth)
    //         .then(res => {
    //             // console.log('급여명세서 res', res.data)
    //             // console.log('aaaaaaa', res.data[0].jiGeubList)
    //             // console.log('bbbbbbb', res.data[0].jiGeubList[0].suDang.name)
    //             // console.log('ccccccc', res.data[0].gongJaeList[0].pay)
    //             // console.log('ddddddd', res.data[0].worktime)
    //             if (gubun == 1) {
    //                 setUsers(res.data[0].jiGeubList);
    //             }else if (gubun == 2) {
    //                 setGongjae(res.data[0].gongJaeList);
    //             }
    //             // else if (gubun == 3) {
    //             //     setSanjunggengeo(res.data[0].worktime);
    //             // }
    //             else if (gubun == 4) {
    //                 setSanjunggengeosik(res.data[0].gaSanRate.hyuIl);
    //             }

    //             // else{

    //             //     setUsers(res.data.b[0].jigeob);
    //             // }
    //         })
    //     },[getYearMonth])

    //     if (users && gubun == 1) {
    //         // let item = users.splice(13, 1)[0];
    //         // users.splice(3, 0, item);
    //         const test2 = (Object.values(users.map((inf) => (
    //             (inf.pay != 0 && inf.suDang.name != '실수령액') ? (
    //                 (inf.suDang.name != 'sudang1') ? (
    //                     <>

    //                         <Button onClick={beforeDate}>이전</Button>
    //                         <Button onClick={afterDate}>다음</Button>
    //                     <p key={inf.ID} style={{ fontSize: "17px" }}>
    //                         {inf.suDang.name}
    //                         <span className="float-end">{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
    //                     </p>
    //                     </>
    //                 )
    //                     : <p key={inf.ID} style={{ fontSize: "18px" }}>
    //                         <i className="mdi mdi-square text-success"></i> {inf.suDang.name}
    //                         <span className="float-end">
    //                             <strong style={{ color: "#0acf97" }}>{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> 원
    //                         </span>
    //                     </p>
    //             )
    //                 : null
    //         ))
    //         ))
    //         return test2;
    //     } else if (gongjae && gubun == 2) {
    //         // let item = gongjae.splice(13, 1);
    //         // gongjae.splice(0, 0, item[0]);
    //         const test2 = (Object.values(gongjae.map((inf) => (
    // (inf.pay != 0) ? (
    //     (inf.gongJae.name != 'gongjae1') ? (
    //         <p key={inf.ID} style={{ fontSize: "17px" }}>
    //             {inf.gongJae.name}
    //             <span className="float-end">{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
    //         </p>
    //     )
    //         : <p key={inf.ID} style={{ fontSize: "18px" }}>
    //             <i className="mdi mdi-square text-danger"></i> {inf.gongJae.name}
    //             <span className="float-end">
    //                 <strong style={{ color: "#0acf97" }}>{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> 원
    //             </span>
    //         </p>
    // )
    //     : null
    //         ))
    //         ))
    //         return test2;
    //     } else if (sanjunggengeo && gubun == 3) {
    //         const test2 = (Object.values(sanjunggengeo.map((inf) =>
    //             (inf.giBon != 0) ? (
    //                 <p key={inf.ID} style={{ fontSize: "17px" }}>
    //                     기본근무
    //                     <span className="float-end">{inf.giBon} 시간</span>
    //                 </p>
    //             )
    //                 : null
    //         )))

    //         return test2;
    //     } else if (sanjunggengeosik && gubun == 4) {
    //         console.log('산정식 map');
    //         // const test2 = (Object.values(sanjunggengeosik.map((inf) =>
    //         //     (inf.hyuIl != 0) ? (
    //         //         <p key={inf.ID} style={{ fontSize: "17px" }}>
    //         //             연장근로수당
    //         //             <span className="float-end">연장근로시간x통상시급x{inf.hyuIl}</span>
    //         //         </p>
    //         //     )
    //         //         : null
    //         // )))
    //         const test2 = <p style={{ fontSize: "17px" }}>
    //                          연장근로수당
    //                          <span className="float-end">연장근로시간x통상시급x{sanjunggengeosik}</span>
    //                      </p>
    //         return test2;
    //     }

    // }



    // function 지급리스트() {
    //     const item = GetList(1);

    //     return (<>
    //         {item}
    //     </>)
    // }
    // function 공제리스트() {
    //     const item = GetList(2);

    //     return (<>
    //         {item}
    //     </>)
    // }
    // function 산정근거() {
    //     const item = GetList(3);

    //     return (<>
    //         {item}
    //     </>)
    // }
    // function 산출식() {
    //     const item = GetList(4);

    //     return (<>
    //         {item}
    //     </>)
    // }

    // function 지급리스트2() {
    //     GetList(2);
    // }




    const today = {
        year: new Date().getFullYear(), //오늘 연도
        month: new Date().getMonth() + 1, //오늘 월
        date: new Date().getDate(), //오늘 날짜
        day: new Date().getDay(), //오늘 요일
    };
    let refYear = useRef(today.year);
    let refMonth = useRef(today.month);

    let finalYear = '';
    if (refMonth.current < 10) {
        let oneMonth = '0' + refMonth.current;
        finalYear = refYear.current + '-' + oneMonth;
    } else {
        finalYear = refYear.current + '-' + refMonth.current;
    }


    const [getYearMonth, setGetYearMonth] = useState({
        employeeId: '1',
        yearMonth: finalYear,
    });

    // 이전 달 버튼
    const beforeDate = useCallback(() => {
        // 월도 변경 버튼으로 연도 바꾸기
        if (refMonth.current === 1) {
            refMonth.current = 12;
            refYear.current = refYear.current - 1;
        } else {
            refMonth.current = refMonth.current - 1;
        }

        // getDate hook 분리
        finalYear = makeWoldo(refYear.current, refMonth.current);

        setGetYearMonth({
            employeeId: '1',
            yearMonth: finalYear,
        })
    }, []);

    // 다음 달 버튼
    const afterDate = useCallback(() => {
        // 월도 변경 버튼으로 연도 바꾸기
        if (refMonth.current === 12) {
            refMonth.current = 1;
            refYear.current = Number(refYear.current) + 1;
        } else {
            refMonth.current = Number(refMonth.current) + 1;
        }

        // getDate hook 분리
        finalYear = makeWoldo(refYear.current, refMonth.current);
        if (isError == false) {
            setGetYearMonth({
                employeeId: '1',
                yearMonth: finalYear,
            })
        }
    }, []);

    const nextWoldoDis = nextWoldoBtn(refMonth.current, refYear.current);
    const beforeWoldoDis = new Date(ipsaDt) >= new Date(refYear.current + '-' + refMonth.current + '-01');
    // const beforeWoldoDis = beforeWoldoBtn(ipsaDt, refMonth.current, refYear.current);


    const changeSelectYear = (e: any) => {
        refYear.current = e.target.value;
        finalYear = makeWoldo(refYear.current, refMonth.current);
        setGetYearMonth({
            employeeId: '1',
            yearMonth: finalYear,
        })
    };

    // 연도 선택 selectBox
    const yearControl = useCallback(() => {
        let yearArr = [];
        const startYear = today.year - 5;
        const endYear = new Date().getFullYear();
        for (let i = startYear; i < endYear + 1; i++) {
            yearArr.push(
                <option key={i} value={i}>
                    {i}년
                </option>
            );
        }
        return (
            <>
                <select
                    onChange={changeSelectYear}
                    value={refYear.current}
                    className='form-select'
                    style={{
                        fontSize: "25px",
                        border: "1px solid #F6F6F6", outline: "none",
                    }}
                >
                    {yearArr}
                </select>
            </>
        );
    }, []);


    // jwt 토큰 header에 심어주는 axios.create 로직
    // let authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsInJvbGUiOiJ1c2VyIiwiZW1wbG95ZWVJZEluVXNlIjoyLCJpZCI6MSwiZXhwIjoxNjc2ODcxOTM1fQ.UxEaLox26MZICALXyf8-1BVgIlnRkYA2SOXSiGz8NYrlV13X3Y05IGCUNdShv39yctq8GoYeZIKxfiidDBEWRg';
    // // let authToken = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJleHAiOjE2NzY5MTE2MzJ9.tLWO0lsKWJvg8SM3bOm-nehGmGjHIcuLpnZA0kEgPwJh7SOQx87_6ptDiuI8HDlC5XGClgiya8VInYhDVFo06w`;
    // const url = 'https://kjh.rba.kr';

    // const httpInstance = axios.create({
    //     baseURL: url,
    //     headers: {
    //     'Accept' : 'application/json',
    //     'content-type': 'application/json;charset=UTF-8',
    //     },
    //     withCredentials: true,
    // });

    // httpInstance.defaults.headers.common.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsInJvbGUiOiJ1c2VyIiwiZW1wbG95ZWVJZEluVXNlIjoyLCJpZCI6MSwiZXhwIjoxNjc2ODcxOTM1fQ.UxEaLox26MZICALXyf8-1BVgIlnRkYA2SOXSiGz8NYrlV13X3Y05IGCUNdShv39yctq8GoYeZIKxfiidDBEWRg`;

    // const headers = {
    //     'content-type': 'application/json;charset=UTF-8',
    //     'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMSIsInJvbGUiOiJ1c2VyIiwiZW1wbG95ZWVJZEluVXNlIjoyLCJpZCI6MSwiZXhwIjoxNjc2ODcxOTM1fQ.UxEaLox26MZICALXyf8-1BVgIlnRkYA2SOXSiGz8NYrlV13X3Y05IGCUNdShv39yctq8GoYeZIKxfiidDBEWRg`,
    // }

    useEffect(() => {
        console.log('axios 파라미터 변경 : ', getYearMonth);
        axios.post('https://kjh.rba.kr/payroll/search', getYearMonth)
            .then(res => {
                if (res.data[0].ipsaDt) {
                    SetIpsaDt(res.data[0].ipsaDt);
                }
                setUsers(res.data[0].jiGeubList);
                setGongjae(res.data[0].gongJaeList);
                if (res.data[0].worktime.hyuIl != 0) {
                    setSanjunggengeosik(res.data[0].gaSanRate.hyuIl);
                    setSanjunggengeo(res.data[0].worktime.hyuIl)
                }
            })
            .catch(error => {
                console.log('axios /payroll/search 실패 ! ', error);
                // alert('해당 월도에 조회 가능한 명세서가 없습니다.');
                setUsers([]);
                setGongjae([]);
                setSanjunggengeosik([]);
                setSanjunggengeo([]);
                SetIpsaDt([]);

                setIsError(true);
            })
    }, [getYearMonth])


    Font.register({
        family: 'NanumSquareRoundB',
        src: NanumSquareRoundB
    });

    // ReactPDF.registerFont({
    //     family: 'Nanum Gothic',
    //     src: nanumGothic,
    //   });
    
    const pdfFileName = getUsername() +'_' + refYear.current + '년 ' + refMonth.current + '월 명세서';


    const PdfTest2 = () => (
        <Document>
            <Page size="A4" style={[styles3.pageWraper,]}>
                <Year />
                <Header />
                <View style={[
                    {
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    },
                ]}>
                    <View style={{ flexDirection: 'column' }}>
                        <MyeongseseoItem />
                        <MyeongseseoItem3 />
                    </View>
                    <MyeongseseoItem2 />
                </View>
            </Page>
        </Document>
    );

    const Year = () => (
        <View style={[styles4.universalPad,styles4.leftPadding]}>
            <View>
                <Text style={[styles3.header]}>{refYear.current}년</Text>
            </View>
        </View>
    );

    const Header = () => (
        <View style={[styles3.twoSides, styles4.universalPad,styles4.leftPadding]}>
            <View>
                <Text style={[styles3.header]}>{refMonth.current}월</Text>
            </View>
            <View>
                <Text style={[styles3.header]}>{geubyeopay.silsulyeongaeg.pay} 원</Text>
            </View>
        </View>
    );

    // 지급항목
    const MyeongseseoItem = () => (
        <View>
            <View
                style={[
                    styles3.twoSides,
                    styles4.universalPad,
                    {
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    },
                ]}
            >
            </View>
            {
                users?.map((inf) => ( // 상우하좌
                    (inf.suDang.name == 'sudang1-1') ? (
                        <View style={[styles3.twoSides, styles3.BottomLine]}>
                            <Text style={styles2.Gbox}></Text>
                            <View style={styles5.leftColumn}>
                                <Text style={[styles5.title, styles3.textsize]}>{inf.suDang.name + ' '}</Text>
                            </View>
                            <View style={styles5.rightColumn}>
                                <Text style={styles5.date}>{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</Text>
                            </View>
                        </View>
                    )
                        :
                        <View style={[styles3.twoSides, styles3.BottomLine]}>
                            <View style={styles5.leftColumn}>
                                <Text style={[styles5.title, styles3.textsize]}>{inf.suDang.name + ' '}</Text>
                            </View>
                            <View style={styles5.rightColumn}>
                                <Text style={styles5.date}>{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</Text>
                            </View>
                        </View>
                ))
            }
        </View>
    );

    // 공제항목
    const MyeongseseoItem2 = () => (
        <View>
            <View
                style={[
                    styles3.twoSides,
                    styles4.universalPad,
                    {
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    },
                ]}
            >
            </View>
            {
                gongjae?.map((inf) => ( // 상우하좌
                    (inf.gongJae.name == 'gongjae1-1') ? (
                        <View style={[styles3.twoSides, styles3.BottomLine]}>
                            <Text style={styles2.Rbox}></Text>
                            <View style={styles5.leftColumn}>
                                <Text style={[styles5.title, styles3.textsize]}>{inf.gongJae.name + ' '}</Text>
                            </View>
                            <View style={styles5.rightColumn}>
                                <Text style={styles5.date}>{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</Text>
                            </View>
                        </View>
                    )
                        :
                        <View style={[styles3.twoSides, styles3.BottomLine]}>
                            <View style={styles5.leftColumn}>
                                <Text style={[styles5.title, styles3.textsize]}>{inf.gongJae.name + ' '}</Text>
                            </View>
                            <View style={styles5.rightColumn}>
                                <Text style={styles5.date}>{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</Text>
                            </View>
                        </View>
                ))
            }
        </View>
    );

    // 산정식
    const MyeongseseoItem3 = () => (
        <View>
            <View
                style={[
                    styles3.twoSides,
                    styles4.universalPad,
                    {
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    },
                ]}
            >
            </View>
            {
                sanjunggengeosik
                    ?
                    <View style={[styles3.twoSides, styles3.BottomLine]}>
                        <View style={styles5.leftColumn}>
                            <Text style={[styles5.title, styles3.textsize]}>산정식</Text>
                        </View>
                        <View style={styles5.rightColumn}>
                            <Text style={styles5.date}>연장근로시간x통상시급x{sanjunggengeosik}</Text>
                        </View>
                    </View>
                    :
                    null
            }
        </View>
    );

    return (
        <>
            <div className="mt-3">
                <Card>
                    <Card.Body>
                        <section className="py-3">
                            <Container>
                                <Row>
                                    <PDFViewer style={{height:'1000px'}}>
                                        <PdfTest2/>
                                    </PDFViewer>
                                </Row>
                                {/* <Row>
                                    <Col>
                                        <p style={{fontSize:"28px"}}>
                                            {refYear.current}년
                                        </p>
                                    </Col>
                                    <Col xl={6}>
                                        <p style={{ fontSize: "28px",width:"30%" }}>
                                            {yearControl()}
                                        </p>
                                    </Col>
                                </Row> */}
                                <Row>
                                    <Col xl={6}>
                                        <p style={{ fontSize: "28px", width: "30%" }}>
                                            {yearControl()}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                        <p style={{ fontSize: "28px" }}>
                                            {/* <Button size="sm" onClick={beforeDate} disabled={isError}> */}
                                            <Button size="sm" onClick={beforeDate} disabled={beforeWoldoDis}>
                                                ◀
                                            </Button>&nbsp;&nbsp;
                                            <span>{refMonth.current}월 급여&nbsp;&nbsp;
                                                <span>
                                                    <Button id='next' size="sm" onClick={afterDate} disabled={nextWoldoDis}>
                                                        ▶
                                                    </Button>
                                                </span>
                                            </span>
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                        <p style={{ fontSize: "28px" }} className="float-end">
                                            <span>
                                                <img src={coinpig} alt="" className="img-fluid" style={{ width: "95px" }} />
                                                <strong style={{ color: "blue" }}>{geubyeopay.silsulyeongaeg.pay}</strong> 원
                                            </span>
                                        </p>
                                    </Col>
                                    <Col xl={6}>
                                        <p className="float-end">
                                        <PDFDownloadLink document={<PdfTest2 />} fileName={pdfFileName}>
                                            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <Button>PDF</Button>)}
                                        </PDFDownloadLink>&nbsp;&nbsp;

                                            <span>
                                                <Button onClick={prom2}>
                                                    E-MAIL
                                                </Button>
                                            </span>
                                        </p>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col xl={6} className="mb-3 px-3" style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "15px", marginRight: "-15px" }}>
                                        <div className="chart-widget-list">
                                            {
                                                users
                                                    ?
                                                    <>
                                                        {users.map((inf) => (
                                                            (inf.pay != 0 && inf.suDang.name != '실수령액') ? (
                                                                (inf.suDang.name != 'sudang1-1') ? (
                                                                    <>
                                                                        <p key={inf.ID} style={{ fontSize: "17px" }}>
                                                                            {inf.suDang.name}
                                                                            <span className="float-end">{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
                                                                        </p>
                                                                    </>
                                                                )
                                                                    : <p key={inf.ID} style={{ fontSize: "18px" }}>
                                                                        <i className="mdi mdi-square text-success"></i> {inf.suDang.name}
                                                                        <span className="float-end">
                                                                            <strong style={{ color: "#0acf97" }}>{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> 원
                                                                        </span>
                                                                    </p>
                                                            )
                                                                : null
                                                        ))
                                                        }
                                                    </>
                                                    :
                                                    null
                                            }
                                        </div>
                                        {/* {jigeobMap?.map((data) => {
                                            <>
                                            aaaaaaaaaaa
                                                <p>
                                                    <p>{data.jiGeubList}</p>
                                                </p>
                                            </>
                                        })} */}
                                    </Col>
                                    <Col xl={6} className="mb-3 px-3" style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "15px", marginRight: "-15px" }}>

                                        <div className="chart-widget-list">
                                            {
                                                gongjae
                                                    ?
                                                    <>
                                                        {gongjae.map((inf) => (
                                                            (inf.pay != 0) ? (
                                                                (inf.gongJae.name != 'gongjae1-1') ? (
                                                                    <p key={inf.ID} style={{ fontSize: "17px" }}>
                                                                        {inf.gongJae.name}
                                                                        <span className="float-end">{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
                                                                    </p>
                                                                )
                                                                    : <p key={inf.ID} style={{ fontSize: "18px" }}>
                                                                        <i className="mdi mdi-square text-danger"></i> {inf.gongJae.name}
                                                                        <span className="float-end">
                                                                            <strong style={{ color: "#0acf97" }}>{inf.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong> 원
                                                                        </span>
                                                                    </p>
                                                            )
                                                                : null
                                                        ))}
                                                    </>
                                                    : null
                                            }
                                        </div>
                                    </Col>
                                </Row>

                                <br />
                                <Row>
                                    <Col xl={6} className="mb-3 mt-3" style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "25px", marginRight: "-15px" }}>
                                        <p style={{ fontSize: "28px" }}>법정수당 산출식</p>
                                        <div className="chart-widget-list">
                                            <p style={{ fontSize: "17px" }}>
                                                항목
                                                <span className="float-end"> 산출방법 </span>
                                            </p>
                                            <div>
                                                {
                                                    sanjunggengeosik
                                                        ?
                                                        <>
                                                            <p style={{ fontSize: "17px" }}>
                                                                연장근로수당
                                                                <span className="float-end">연장근로시간x통상시급x{sanjunggengeosik}</span>
                                                            </p>
                                                        </>
                                                        : null
                                                }
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={6} className="mb-3 mt-3" style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "25px", marginRight: "-15px" }}>
                                        <p style={{ fontSize: "28px" }}>제세공과금 산출식</p>
                                        <div className="chart-widget-list">
                                            <p style={{ fontSize: "17px" }}>
                                                항목
                                                <span className="float-end"> 산출방법 </span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                                근로소득세
                                                <span className="float-end"> 간이세액표 기준 </span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                                사업소득세
                                                <span className="float-end">3.3%</span>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <Row className="mb-3">
                                    <Col xl={6} style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "15px", marginRight: "-15px" }}>
                                        <p style={{ fontSize: "28px" }}>산정근거</p>
                                        <div className="chart-widget-list">
                                            <div>
                                                {
                                                    sanjunggengeo
                                                        ?
                                                        <>
                                                            <p style={{ fontSize: "17px" }}>
                                                                휴일근무
                                                                <span className="float-end">{sanjunggengeo} 시간</span>
                                                            </p>
                                                        </>
                                                        : null
                                                }
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                            </Container>
                        </section>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

// 일반 핸드폰크기
const GeubyeoMobile = () => {

    // 이름
    const [realname, setRealname] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setRealname(JSON.parse(data).realname);
    }, []);

    // 회사명
    const [division, setDivision] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setDivision(JSON.parse(data).division);
    }, []);

    // ID겸이메일
    const [username, setUsername] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setUsername(JSON.parse(data).username);
    }, []);

    // pdf 버튼
    function prom1() {
        if (window.prompt("비밀번호를 입력해주세요 ex)1111") == '1111') {
            alert("파일다운로드를 시작합니다")
        } else {
            alert("인증 실패")
        }
    };
    // email 버튼
    function prom2() {
        if (window.prompt("보내실 이메일을 확인해주세요", username)) {
            alert("메일이 발송되었습니다")
        } else {
            alert("취소")
        }
    };
    return (
        <>
            <div className="mt-3">
                <Card>
                    <Card.Body>
                        <section className="py-3">
                            <Container>
                                <Row>
                                    <p style={{ fontSize: "25px" }} className="mb-0">
                                        {division}
                                    </p>
                                </Row>
                                <Row>
                                    <p style={{ fontSize: "25px" }}>
                                        {geubyeopay.Monthly.Month}월 급여
                                    </p>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                        <p style={{ fontSize: "25px" }} className="float-end">
                                            <span>
                                                <img src={coinpig} alt="" className="img-fluid" style={{ width: "80px" }} />
                                                <strong style={{ color: "blue" }}>{geubyeopay.silsulyeongaeg.pay}</strong> 원
                                            </span>
                                        </p>
                                    </Col>
                                    <Col xl={6}>
                                        <p className="float-end">
                                            <Button onClick={prom1} size="sm">
                                                pdf
                                            </Button>&nbsp;&nbsp;
                                            <span>
                                                <Button onClick={prom2} size="sm">
                                                    e-mail
                                                </Button>
                                            </span>
                                        </p>
                                    </Col>

                                </Row>
                                <br />
                                <Row>
                                    <Col xl={6} className="mb-3" >
                                        <div className="chart-widget-list" >
                                            <p style={{ fontSize: "15px" }}>
                                                <i className="mdi mdi-square text-success font-10"></i> {geubyeopay.jigeubhabgye.item}
                                                <span className="float-end">
                                                    <strong style={{ color: "#0acf97" }}>{geubyeopay.jigeubhabgye.pay}</strong> 원
                                                </span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.basic.item}
                                                <span className="float-end">{geubyeopay.basic.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.juhyusudang.item}
                                                <span className="float-end">{geubyeopay.juhyusudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.yeonjangsudang.item}
                                                <span className="float-end">{geubyeopay.yeonjangsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.yagansudang.item}
                                                <span className="float-end">{geubyeopay.yagansudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.yeonchasudang.item}
                                                <span className="float-end">{geubyeopay.yeonchasudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.hyuilsudang.item}
                                                <span className="float-end">{geubyeopay.hyuilsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.hyueobsudang.item}
                                                <span className="float-end">{geubyeopay.hyueobsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.sigdae.item}
                                                <span className="float-end">{geubyeopay.sigdae.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.boyugsudang.item}
                                                <span className="float-end">{geubyeopay.boyugsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.unjeonbojogeum.item}
                                                <span className="float-end">{geubyeopay.unjeonbojogeum.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.myeongjeolsudang.item}
                                                <span className="float-end">{geubyeopay.myeongjeolsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.Decwolchaaeg.item}
                                                <span className="float-end">{geubyeopay.Decwolchaaeg.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.geunsoggongjejigeub.item}
                                                <span className="float-end">{geubyeopay.geunsoggongjejigeub.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.sangyeo.item}
                                                <span className="float-end">{geubyeopay.sangyeo.pay} 원</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6} className="mb-3" >
                                        <div className="chart-widget-list">
                                            <p style={{ fontSize: "15px" }}>
                                                <i className="mdi mdi-square text-danger font-10"></i> {geubyeopay.gongjenaeyeog.item}
                                                <span className="float-end"><strong style={{ color: "red" }}>{geubyeopay.gongjenaeyeog.pay} </strong> 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.gugminyeongeum.item}
                                                <span className="float-end">{geubyeopay.gugminyeongeum.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.geongangboheom.item}
                                                <span className="float-end">{geubyeopay.geongangboheom.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.goyongboheom.item}
                                                <span className="float-end">{geubyeopay.goyongboheom.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.janggiyoyangboheom.item}
                                                <span className="float-end">{geubyeopay.janggiyoyangboheom.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.sodeugse.item}
                                                <span className="float-end">{geubyeopay.sodeugse.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.jibangsodeugse.item}
                                                <span className="float-end">{geubyeopay.jibangsodeugse.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.saeobsodeugse.item}
                                                <span className="float-end">{geubyeopay.saeobsodeugse.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.jepumnaesu.item}
                                                <span className="float-end">{geubyeopay.jepumnaesu.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.byeongga.item}
                                                <span className="float-end">{geubyeopay.byeongga.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.yeonmaljeongsanso.item}
                                                <span className="float-end">{geubyeopay.yeonmaljeongsanso.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.yeonmaljeongsanji.item}
                                                <span className="float-end">{geubyeopay.yeonmaljeongsanji.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.geunsoggongje.item}
                                                <span className="float-end">{geubyeopay.geunsoggongje.pay} 원</span>
                                            </p>
                                        </div>
                                        <p className="float-end" style={{ fontSize: "16px", color: "black" }}>
                                            {geubyeopay.silsulyeongaeg.item} &nbsp;
                                            <span><strong style={{ color: "blue" }}>{geubyeopay.silsulyeongaeg.pay}</strong> &nbsp;원</span>
                                        </p>
                                    </Col>
                                </Row>
                                <br />
                                <Row className="mb-3">
                                    <Col xl={6}>
                                        <p style={{ fontSize: "20px" }}>산정근거</p>
                                        <div className="chart-widget-list">
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.gongjeilsu.item}
                                                <span className="float-end"> {geubyeopay.gongjeilsu.days} </span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.chonggeunlosigansu.item}
                                                <span className="float-end">{geubyeopay.chonggeunlosigansu.timenumber}</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.yeonjanggeunlosigansu.item}
                                                <span className="float-end">{geubyeopay.yeonjanggeunlosigansu.timenumber}</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.yagangeunlosigansu.item}
                                                <span className="float-end">{geubyeopay.yagangeunlosigansu.timenumber}</span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                {geubyeopay.hyuilgeunlosigansu.item}
                                                <span className="float-end">{geubyeopay.hyuilgeunlosigansu.timenumber}</span>
                                            </p>

                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col xl={6} className="mb-3 mt-3" >
                                        <p style={{ fontSize: "20px" }}>법정수당 산출식</p>
                                        <div>
                                            <p style={{ fontSize: "15px" }}>
                                                항목
                                                <span className="float-end"> 산출방법 </span>
                                            </p>
                                            <hr style={{ color: "#ced4da", border: "2px" }} />
                                            <p style={{ fontSize: "15px" }}>
                                                연장근로수당 :
                                                <span className="float-end"> 연장근로시간x통상시급x1 </span>
                                            </p>
                                            <hr style={{ color: "#ced4da", border: "2px" }} />
                                            <p style={{ fontSize: "15px" }}>
                                                야간근로수당 :
                                                <span className="float-end">야간근로시간x통상시급x1</span>
                                            </p>
                                            <hr style={{ color: "#ced4da", border: "2px" }} />
                                            <p style={{ fontSize: "15px" }}>
                                                휴일근로수당 :
                                                <span className="float-end">휴일근로시간x통상시급x2</span>
                                            </p>
                                            <hr style={{ color: "#ced4da", border: "2px" }} />
                                        </div>
                                    </Col>
                                    <Col xl={6} className="mb-3 mt-3" >
                                        <p style={{ fontSize: "20px" }}>제세공과금 산출식</p>
                                        <div className="chart-widget-list">
                                            <p style={{ fontSize: "15px" }}>
                                                항목
                                                <span className="float-end"> 산출방법 </span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                근로소득 :
                                                <span className="float-end">간이세액표기준 </span>
                                            </p>
                                            <p style={{ fontSize: "15px" }}>
                                                사업소득:
                                                <span className="float-end">3.3%</span>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                            </Container>
                        </section>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

// 갤럭시fold 위주크기(최소값 202)
const GeubyeoMobile2 = () => {
    // 이름
    const [realname, setRealname] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setRealname(JSON.parse(data).realname);
    }, []);

    // 회사명
    const [division, setDivision] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setDivision(JSON.parse(data).division);
    }, []);

    // ID겸이메일
    const [username, setUsername] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setUsername(JSON.parse(data).username);
    }, []);

    // pdf 버튼
    function prom1() {
        if (window.prompt("비밀번호를 입력해주세요 ex)1111") == '1111') {
            alert("파일다운로드를 시작합니다")
        } else {
            alert("인증 실패")
        }
    };
    // email 버튼
    function prom2() {
        if (window.prompt("보내실 이메일을 확인해주세요", username)) {
            alert("메일이 발송되었습니다")
        } else {
            alert("취소")
        }
    };
    return (
        <>
            <div className="mt-3">
                <Card>
                    <Card.Body>
                        <section className="py-3">
                            <Container>
                                <Row>
                                    <p style={{ fontSize: "20px" }} className="mb-0">
                                        {division}
                                    </p>
                                </Row>
                                <Row>
                                    <p style={{ fontSize: "20px" }}>
                                        {geubyeopay.Monthly.Month}월 급여
                                    </p>
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                        <p style={{ fontSize: "20px" }} className="float-end">
                                            <span>
                                                <img src={coinpig} alt="" className="img-fluid" style={{ width: "70px" }} />
                                                <strong style={{ color: "blue" }}>{geubyeopay.silsulyeongaeg.pay}</strong> 원
                                            </span>
                                        </p>
                                    </Col>
                                    <Col xl={6}>
                                        <p className="float-end">
                                            <Button onClick={prom1} size="sm">
                                                pdf
                                            </Button>&nbsp;&nbsp;
                                            <span>
                                                <Button onClick={prom2} size="sm">
                                                    e-mail
                                                </Button>
                                            </span>
                                        </p>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col xl={6} className="mb-3" >
                                        <div className="chart-widget-list" >
                                            <p style={{ fontSize: "13px" }}>
                                                <i className="mdi mdi-square text-success font-10"></i> {geubyeopay.jigeubhabgye.item}
                                                <span className="float-end">
                                                    <strong style={{ color: "#0acf97" }}>{geubyeopay.jigeubhabgye.pay}</strong> 원
                                                </span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.basic.item}
                                                <span className="float-end">{geubyeopay.basic.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.juhyusudang.item}
                                                <span className="float-end">{geubyeopay.juhyusudang.pay}원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.yeonjangsudang.item}
                                                <span className="float-end">{geubyeopay.yeonjangsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.yagansudang.item}
                                                <span className="float-end">{geubyeopay.yagansudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.yeonchasudang.item}
                                                <span className="float-end">{geubyeopay.yeonchasudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.hyuilsudang.item}
                                                <span className="float-end">{geubyeopay.hyuilsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.hyueobsudang.item}
                                                <span className="float-end">{geubyeopay.hyueobsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.sigdae.item}
                                                <span className="float-end">{geubyeopay.sigdae.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.boyugsudang.item}
                                                <span className="float-end">{geubyeopay.boyugsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.unjeonbojogeum.item}
                                                <span className="float-end">{geubyeopay.unjeonbojogeum.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.myeongjeolsudang.item}
                                                <span className="float-end">{geubyeopay.myeongjeolsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.Decwolchaaeg.item}
                                                <span className="float-end">{geubyeopay.Decwolchaaeg.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.geunsoggongjejigeub.item}
                                                <span className="float-end">{geubyeopay.geunsoggongjejigeub.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.sangyeo.item}
                                                <span className="float-end">{geubyeopay.sangyeo.pay} 원</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6} className="mb-3" >
                                        <div className="chart-widget-list">
                                            <p style={{ fontSize: "13px" }}>
                                                <i className="mdi mdi-square text-danger font-10"></i> {geubyeopay.gongjenaeyeog.item}
                                                <span className="float-end"><strong style={{ color: "red" }}>{geubyeopay.gongjenaeyeog.pay} </strong> 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.gugminyeongeum.item}
                                                <span className="float-end">{geubyeopay.gugminyeongeum.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.geongangboheom.item}
                                                <span className="float-end">{geubyeopay.geongangboheom.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.goyongboheom.item}
                                                <span className="float-end">{geubyeopay.goyongboheom.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.janggiyoyangboheom.item}
                                                <span className="float-end">{geubyeopay.janggiyoyangboheom.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.sodeugse.item}
                                                <span className="float-end">{geubyeopay.sodeugse.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.jibangsodeugse.item}
                                                <span className="float-end">{geubyeopay.jibangsodeugse.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.saeobsodeugse.item}
                                                <span className="float-end">{geubyeopay.saeobsodeugse.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.jepumnaesu.item}
                                                <span className="float-end">{geubyeopay.jepumnaesu.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.byeongga.item}
                                                <span className="float-end">{geubyeopay.byeongga.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.yeonmaljeongsanso.item}
                                                <span className="float-end">{geubyeopay.yeonmaljeongsanso.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.yeonmaljeongsanji.item}
                                                <span className="float-end">{geubyeopay.yeonmaljeongsanji.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.geunsoggongje.item}
                                                <span className="float-end">{geubyeopay.geunsoggongje.pay} 원</span>
                                            </p>
                                        </div>
                                        <p className="float-end" style={{ fontSize: "13px", color: "black" }}>
                                            {geubyeopay.silsulyeongaeg.item} &nbsp;
                                            <span><strong style={{ color: "blue" }}>{geubyeopay.silsulyeongaeg.pay}</strong> &nbsp;원</span>
                                        </p>
                                    </Col>
                                </Row>
                                <br />
                                <Row className="mb-3">
                                    <Col xl={6}>
                                        <p style={{ fontSize: "18px" }}>산정근거</p>
                                        <div className="chart-widget-list">
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.gongjeilsu.item}
                                                <span className="float-end"> {geubyeopay.gongjeilsu.days} </span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.chonggeunlosigansu.item}
                                                <span className="float-end">{geubyeopay.chonggeunlosigansu.timenumber}</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.yeonjanggeunlosigansu.item}
                                                <span className="float-end">1{geubyeopay.yeonjanggeunlosigansu.timenumber}</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.yagangeunlosigansu.item}
                                                <span className="float-end">{geubyeopay.yagangeunlosigansu.timenumber}</span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                {geubyeopay.hyuilgeunlosigansu.item}
                                                <span className="float-end">{geubyeopay.hyuilgeunlosigansu.timenumber}</span>
                                            </p>

                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col xl={6} className="mb-3 mt-3" >
                                        <p style={{ fontSize: "18px" }}>법정수당 산출식</p>
                                        <div className="chart-widget-list">
                                            <p style={{ fontSize: "13px" }}>
                                                항목
                                                <span className="float-end"> 산출방법 </span>
                                            </p>

                                            <p style={{ fontSize: "13px" }}>
                                                연장근로수당 :
                                                <span style={{ fontSize: "12px" }} className="float-end"> 연장근로시간x통상시급x1 </span>
                                            </p>

                                            <p style={{ fontSize: "13px" }}>
                                                야간근로수당 :
                                                <span style={{ fontSize: "12px" }} className="float-end">야간근로시간x통상시급x1</span>
                                            </p>

                                            <p style={{ fontSize: "13px" }}>
                                                휴일근로수당 :
                                                <span style={{ fontSize: "12px" }} className="float-end">휴일근로시간x통상시급x2</span>
                                            </p>

                                        </div>
                                    </Col>
                                    <Col xl={6} className="mb-3 mt-3" >
                                        <p style={{ fontSize: "18px" }}>제세공과금 산출식</p>
                                        <div className="chart-widget-list">
                                            <p style={{ fontSize: "13px" }}>
                                                항목
                                                <span className="float-end"> 산출방법 </span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                근로소득 :
                                                <span style={{ fontSize: "12px" }} className="float-end">간이세액표기준 </span>
                                            </p>
                                            <p style={{ fontSize: "13px" }}>
                                                사업소득:
                                                <span style={{ fontSize: "12px" }} className="float-end">3.3%</span>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                            </Container>
                        </section>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};



const Geubyeomyeongseseo = () => {

    // 미디어쿼리
    const isDesktop: boolean = useMediaQuery({
        query: "(min-width:450px)",
    });
    const isTablet: boolean = useMediaQuery({
        query: "(min-width:402px) and (max-width:449px)",
    });
    const isPhone: boolean = useMediaQuery({
        query: "(min-width:202px) and (max-width:401px)",
    });
    return (

        <>
            <div>
                <Row>
                    {isDesktop &&
                        < GeubyeoPC />
                    }
                </Row>
                <Row>
                    {isTablet &&
                        < GeubyeoMobile />
                    }
                </Row>
                <Row>
                    {
                        isPhone &&
                        <GeubyeoMobile2 />
                    }
                </Row>
            </div>

        </>
    );
};

export default Geubyeomyeongseseo;
