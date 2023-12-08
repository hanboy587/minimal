import { Row, Col, Card, Container, Table, Modal, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import coinpig from 'assets/images/coinpig.png';
import axios from 'axios';
import geubyeopay from './geubyeolist.json';
import geubyo from './geubyo.json';
import geubyo2 from './geubyo2.json';
import { Input } from 'react-bootstrap-typeahead';
import { type } from 'os';
import { useMediaQuery } from "react-responsive";
import { number } from 'yup';
import { data } from 'jquery';


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
        if (window.prompt("비밀번호를 입력해주세요 ex)1111")== '1111') {
            alert("파일다운로드를 시작합니다")
        } else {
            alert("인증 실패")
        }
    };
    // email 버튼
    function prom2() {
        if (window.prompt("보내실 이메일을 확인해주세요",username)) {
            alert("메일이 발송되었습니다")
        } else {
            alert("취소")
        }
    };

    const [payTotal, setpayTotal] = useState(0);

    // 지급항목 loop
    const listItems = geubyo.jigeob.map((list : any, index : any) => {
        console.log("지급항목 map 실행");
        // return 전에 선언하고 처리하고 싶은데...
        // let payTotal = 0;
        // payTotal += list.pay;

        // payTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        // console.log(payTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

        if(list.name == 'jigeubhabgye' || list.name == 'silsulyeongaeg' || list.pay < 1){
            return null;
        }else{
            return(
                
                //     <ul key={index}>
        //     <li>{list.ID}</li>
        //     <li>{list.item}</li>
        // </ul>

        // <p key={index} style={{ fontSize: "18px" }}>
        //     {/* <i className="mdi mdi-square text-success"></i>  */}
        //     {list.item}
        //     <span className="float-end">
        //         <strong style={{ color: "#0acf97" }}>{list.pay}</strong> 원
        //     </span>
        // </p>

        <p key={index} style={{ fontSize: "17px" }}>
            {list.name}
            <span className="float-end">{list.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
        </p>
        )
    }
    });



    // 공제항목 loop
    const listItems2 = geubyo.공제항목.map((list : any, index : any) => {
        console.log("공제항목 map 실행");
        if(list.name == 'jigeubhabgye' || list.name == 'silsulyeongaeg' || list.pay < 1){
            return null;
        }else{
        return(
        <p key={index} style={{ fontSize: "17px" }}>
            {list.name}
            <span className="float-end">{list.pay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</span>
        </p>
        )
        }
    });

    // 산정근거
    const listItems3 = geubyo.산정근거.map((list : any, index : any) => {
        console.log("산정 근거 map 실행");
        if(list.name == 'jigeubhabgye' || list.name == 'silsulyeongaeg' || list.pay < 1){
            return null;
        }else{
        return(
        <p key={index} style={{ fontSize: "17px" }}>
            {list.name}
            <span className="float-end">{list.pay} 시간</span>
        </p>
        )
        }
    });

    // 근로시간
    const listItems4 = geubyo2.근로시간.map((list: any, index: any) => {
        console.log("근로시간 map 실행");
        if (list.time < 1) {
            return null;
        } else {
            return (
                <p key={index} style={{ fontSize: "17px" }}>
                    {list.name}
                    <span className="float-end">{list.time}</span>
                </p>
            )
        }
    })

    // 가산율
    const listItmes5 = geubyo2.가산율.map((list, index) => {
        console.log("가산율 map 실행");
        return (
            <p key={index} style={{ fontSize: "17px" }}>
                {list.name}
                <span className="float-end">{list.time}</span>
            </p>
        )
    })

    return (
        <>
                
            <div className="mt-3">
                <Card>
                    <Card.Body>
                        <section className="py-3">
                            <Container>
                                <Row>
                                    <p style={{ fontSize: "28px" }} className="mb-0">
                                        {division}

                                    </p>
                                </Row>
                                <Row>
                                    2022
                                </Row>
                                <Row>
                                    <Col xl={6}>
                                        <p style={{ fontSize: "28px" }}>
                                            <Button size="sm">
                                                ◀
                                            </Button> &nbsp;&nbsp;
                                            <span>{geubyeopay.Monthly.Month}월 급여
                                                <span> &nbsp;&nbsp;
                                                    <Button size="sm">
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
                                            <Button onClick={prom1}>
                                                pdf
                                            </Button>&nbsp;&nbsp;
                                            <span>
                                                <Button onClick={prom2}>
                                                    e-mail
                                                </Button>
                                            </span>
                                        </p>
                                    </Col>

                                </Row>
                                <br />
                                {listItems4}
                                {listItmes5}
                                <Row>
                                    <Col xl={6} className="mb-3 px-3" style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "15px", marginRight: "-15px" }}>
                                        <p style={{ fontSize: "18px" }}>
                                            <i className="mdi mdi-square text-success"></i> {geubyeopay.jigeubhabgye.item}
                                            <span className="float-end">
                                                <strong style={{ color: "#0acf97" }}>{geubyeopay.jigeubhabgye.pay}</strong> 원
                                            </span>
                                        </p>
                                        {listItems}
                                        <div className="chart-widget-list" >
                                            <p style={{ fontSize: "18px" }}>
                                                <i className="mdi mdi-square text-success"></i> {geubyeopay.jigeubhabgye.item}
                                                <span className="float-end">
                                                    <strong style={{ color: "#0acf97" }}>{geubyeopay.jigeubhabgye.pay}</strong> 원
                                                </span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                                {geubyeopay.basic.item}
                                                {/* {listItems} */}
                                                <span className="float-end"> 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                                {geubyeopay.juhyusudang.item}
                                                <span className="float-end">{geubyeopay.juhyusudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.yeonjangsudang.item}
                                                <span className="float-end">{geubyeopay.yeonjangsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.yagansudang.item}
                                                <span className="float-end">{geubyeopay.yagansudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.yeonchasudang.item}
                                                <span className="float-end">{geubyeopay.yeonchasudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.hyuilsudang.item}
                                                <span className="float-end">{geubyeopay.hyuilsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.hyueobsudang.item}
                                                <span className="float-end">{geubyeopay.hyueobsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.sigdae.item}
                                                <span className="float-end">{geubyeopay.sigdae.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.boyugsudang.item}
                                                <span className="float-end">{geubyeopay.boyugsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.unjeonbojogeum.item}
                                                <span className="float-end">{geubyeopay.unjeonbojogeum.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.myeongjeolsudang.item}
                                                <span className="float-end">{geubyeopay.myeongjeolsudang.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.Decwolchaaeg.item}
                                                <span className="float-end">{geubyeopay.Decwolchaaeg.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.geunsoggongjejigeub.item}
                                                <span className="float-end">{geubyeopay.geunsoggongjejigeub.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.sangyeo.item}
                                                <span className="float-end">{geubyeopay.sangyeo.pay} 원</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col xl={6} className="mb-3 px-3" style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "15px", marginRight: "-15px" }}>
                                    {listItems2}
                                        <div className="chart-widget-list">
                                            <p style={{ fontSize: "18px" }}>
                                                <i className="mdi mdi-square text-danger"></i> {geubyeopay.gongjenaeyeog.item}
                                                <span className="float-end"><strong style={{ color: "red" }}>{geubyeopay.gongjenaeyeog.pay} </strong> 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.gugminyeongeum.item}
                                                <span className="float-end">{geubyeopay.gugminyeongeum.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.geongangboheom.item}
                                                <span className="float-end">{geubyeopay.geongangboheom.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.goyongboheom.item}
                                                <span className="float-end">{geubyeopay.goyongboheom.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.janggiyoyangboheom.item}
                                                <span className="float-end">{geubyeopay.janggiyoyangboheom.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.sodeugse.item}
                                                <span className="float-end">{geubyeopay.sodeugse.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.jibangsodeugse.item}
                                                <span className="float-end">{geubyeopay.jibangsodeugse.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.saeobsodeugse.item}
                                                <span className="float-end">{geubyeopay.saeobsodeugse.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.jepumnaesu.item}
                                                <span className="float-end">{geubyeopay.jepumnaesu.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.jepumnaesu.item}
                                                <span className="float-end">{geubyeopay.jepumnaesu.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.yeonmaljeongsanso.item}
                                                <span className="float-end">{geubyeopay.yeonmaljeongsanso.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.yeonmaljeongsanji.item}
                                                <span className="float-end">{geubyeopay.yeonmaljeongsanji.pay} 원</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.geunsoggongje.item}
                                                <span className="float-end">{geubyeopay.geunsoggongje.pay} 원</span>
                                            </p>
                                        </div>
                                        <p className="float-end" style={{ fontSize: "25px", color: "black" }}>
                                        {geubyeopay.silsulyeongaeg.item} &nbsp;&nbsp;
                                            <span><strong style={{ color: "blue" }}>{geubyeopay.silsulyeongaeg.pay}</strong> &nbsp;원</span>
                                        </p>
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
                                            <p style={{ fontSize: "17px" }}>
                                                연장근로수당
                                                <span className="float-end"> 연장근로시간x통상시급x1 </span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                                야간근로수당
                                                <span className="float-end">야간근로시간x통상시급x1</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                                휴일근로수당
                                                <span className="float-end">휴일근로시간x통상시급x2</span>
                                            </p>
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
                                        {listItems3}
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.gongjeilsu.item}
                                                <span className="float-end"> {geubyeopay.gongjeilsu.days} </span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.chonggeunlosigansu.item}
                                                <span className="float-end">{geubyeopay.chonggeunlosigansu.timenumber}</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.yeonjanggeunlosigansu.item}
                                                <span className="float-end">1{geubyeopay.yeonjanggeunlosigansu.timenumber}</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.yagangeunlosigansu.item}
                                                <span className="float-end">{geubyeopay.yagangeunlosigansu.timenumber}</span>
                                            </p>
                                            <p style={{ fontSize: "17px" }}>
                                            {geubyeopay.hyuilgeunlosigansu.item}
                                                <span className="float-end">{geubyeopay.hyuilgeunlosigansu.timenumber}</span>
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

// 일반 핸드폰크기
const GeubyeoMobile = ()=> {

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
        if (window.prompt("비밀번호를 입력해주세요 ex)1111")== '1111') {
            alert("파일다운로드를 시작합니다")
        } else {
            alert("인증 실패")
        }
    };
    // email 버튼
    function prom2() {
        if (window.prompt("보내실 이메일을 확인해주세요",username)) {
            alert("메일이 발송되었습니다")
        } else {
            alert("취소")
        }
    };
    return(
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
                                            <hr style={{color:"#ced4da", border:"2px"}} />
                                            <p  style={{ fontSize: "15px" }}>
                                                연장근로수당 :
                                                <span className="float-end"> 연장근로시간x통상시급x1 </span>
                                            </p>
                                            <hr style={{color:"#ced4da", border:"2px"}}/>
                                            <p style={{ fontSize: "15px" }}>
                                                야간근로수당 :
                                                <span className="float-end">야간근로시간x통상시급x1</span>
                                            </p>
                                            <hr style={{color:"#ced4da", border:"2px"}}/>
                                            <p style={{ fontSize: "15px" }}>
                                                휴일근로수당 :
                                                <span className="float-end">휴일근로시간x통상시급x2</span>
                                            </p>
                                            <hr style={{color:"#ced4da", border:"2px"}}/>
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
const GeubyeoMobile2 = ()=> {
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
        if (window.prompt("비밀번호를 입력해주세요 ex)1111")== '1111') {
            alert("파일다운로드를 시작합니다")
        } else {
            alert("인증 실패")
        }
    };
    // email 버튼
    function prom2() {
        if (window.prompt("보내실 이메일을 확인해주세요",username)) {
            alert("메일이 발송되었습니다")
        } else {
            alert("취소")
        }
    };
    return(
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
                                            
                                            <p  style={{ fontSize: "13px" }}>
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



const Geubyeomyeongseseo3 = () => {

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

export default Geubyeomyeongseseo3;
