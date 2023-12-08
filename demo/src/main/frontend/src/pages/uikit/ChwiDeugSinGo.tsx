import { Row, Col, Card, Button, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useToggle } from 'hooks';
import { PageTitle } from 'components';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { getUsername } from 'utils/getUsername';
import { useLocation } from 'react-router-dom';

type ChwiDeugSinGoType = {
    index: number;
    geunrojanm: string;
    geunrojargno: string;
    gukjeok: string;
    cheryujakyeok: string;
    chwideukdt: string;
    gyeyaktodt: string;
    jusojeonggeunrotm: string;
    npschwideukbuho: string;
    mmavgbosu: string;
    chwideukmmnapbuyn: string;
    nhicchwideukbuho: string;
    jiggeub: string;
    jikjongcd: string;
    gyeyakjikyn: string;
    daepyojayeobu: string;
    gugminyeongeum: string;
    geongangboheom: string;
    gybyn: string;
    nhicyn: string;
    npsyn: string;
    sjbyn: string;
    iljariyn: string;
    gwanrino: string;
};

const Chwideugsingoseo = () => {
    const [isOpen5, toggleQnA] = useToggle();
    const [isOpen21, toggleSangse] = useToggle();
    const [isOpen30, toggleSingo] = useToggle();
    const [isOpen31, toggleSingo3] = useToggle();

    // input 값 내보내기 
    const [inputs, setInputs] = useState({
        index: 0,
        geunrojanm: "",
        geunrojargno: "",
        gukjeok: "",
        cheryujakyeok: "",
        chwideukdt: "",
        gyeyaktodt: "",
        jusojeonggeunrotm: "",
        npschwideukbuho: "0",
        mmavgbosu: "",
        chwideukmmnapbuyn: "",
        nhicchwideukbuho: "0",
        jiggeub: "",
        jikjongcd: "",
        gyeyakjikyn: "N",
        daepyojayeobu: "N",
        gugminyeongeum: "",
        geongangboheom: "",
        gybyn: "Y",
        nhicyn: "Y",
        npsyn: "Y",
        sjbyn: "Y",
        iljariyn: "Y",
        gwanrino: "",
    });

    const { geunrojanm, geunrojargno, gukjeok, cheryujakyeok, chwideukdt, gyeyaktodt, jusojeonggeunrotm, mmavgbosu, chwideukmmnapbuyn, jiggeub, jikjongcd, gyeyakjikyn, daepyojayeobu, gugminyeongeum, geongangboheom, npschwideukbuho, nhicchwideukbuho, gybyn, nhicyn, npsyn, sjbyn, iljariyn, gwanrino } = inputs;

    const onChangeSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });

    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const sendSelectCwhiDeugSinGo = async () => {
        if (checkedItems.length === 0) {
            alert("1개 이상 선택해주세요.");
            return;
        }
        setCheckedItems(checkedItems.sort());
        const sendData = chwiDeugList.map((data) => {
            for (let i = 0; i < checkedItems.length; i++) {
                if (data.index === checkedItems[i]) {
                    data.chwideukdt = data.chwideukdt.split("-").join("");
                    data.gyeyaktodt = data.gyeyaktodt.split("-").join("");
                    data.geunrojargno = data.geunrojargno.split("-").join("");
                    return data;
                }
            }
        }).filter(el => el);
        const res = await axios.post("chwideugsingo-test", sendData);
        console.log(res);
    };

    const [clickIndex, setClickIndex] = useState(0);
    const [checkedItems, setCheckedItems] = useState<number[]>([]);
    const [chwiDeugList, setChwiDeugList] = useState<ChwiDeugSinGoType[]>([]);

    const inputToList = () => {
        setChwiDeugList(chwiDeugList.map((data) => data.index === clickIndex ? {
            ...data,
            geunrojanm: geunrojanm,
            geunrojargno: geunrojargno,
            gukjeok: gukjeok,
            cheryujakyeok: cheryujakyeok,
            chwideukdt: chwideukdt,
            gyeyaktodt: gyeyaktodt,
            jusojeonggeunrotm: jusojeonggeunrotm,
            npschwideukbuho: npschwideukbuho,
            mmavgbosu: mmavgbosu,
            chwideukmmnapbuyn: chwideukmmnapbuyn,
            nhicchwideukbuho: nhicchwideukbuho,
            jiggeub: jiggeub,
            jikjongcd: jikjongcd,
            gyeyakjikyn: gyeyakjikyn,
            daepyojayeobu: daepyojayeobu,
            gugminyeongeum: gugminyeongeum,
            geongangboheom: geongangboheom,
            gybyn: gybyn,
            nhicyn: nhicyn,
            npsyn: npsyn,
            sjbyn: sjbyn,
            iljariyn: iljariyn,
            gwanrino: gwanrino,
        } : data));
    };


    const onChangeCheckBox = (checked: boolean, id: number) => {
        if (checked) {
            setCheckedItems(prev => [...prev, id])
        } else {
            setCheckedItems(checkedItems.filter((el) => el !== id));
        }
    };

    const listToInput = (data: ChwiDeugSinGoType) => {
        console.log("debug : ", data);
        setInputs({
            index: data.index,
            geunrojanm: data.geunrojanm,
            geunrojargno: data.geunrojargno,
            gukjeok: data.gukjeok,
            cheryujakyeok: data.cheryujakyeok,
            chwideukdt: data.chwideukdt,
            gyeyaktodt: data.gyeyaktodt,
            jusojeonggeunrotm: data.jusojeonggeunrotm,
            npschwideukbuho: data.npschwideukbuho,
            mmavgbosu: data.mmavgbosu,
            chwideukmmnapbuyn: data.chwideukmmnapbuyn,
            nhicchwideukbuho: data.nhicchwideukbuho,
            jiggeub: data.jiggeub,
            jikjongcd: data.jikjongcd,
            gyeyakjikyn: data.gyeyakjikyn,
            daepyojayeobu: data.daepyojayeobu,
            gugminyeongeum: data.gugminyeongeum,
            geongangboheom: data.geongangboheom,
            gybyn: data.gybyn,
            nhicyn: data.nhicyn,
            npsyn: data.npsyn,
            sjbyn: data.sjbyn,
            iljariyn: data.iljariyn,
            gwanrino: data.gwanrino,
        });
    }

    // const location = useLocation();

    // useEffect(() => {
    // console.log(location);
    // }, [ location ])

    useEffect(() => {
        console.log("checkedItems : ", checkedItems);
    }, [checkedItems]);

    useEffect(() => {
        console.log(inputs);
    }, [inputs]);

    useEffect(() => {
        console.log(chwiDeugList);
    }, [chwiDeugList]);

    const workerInfoList = async () => {
    };

    useEffect(() => {
        workerInfoList();
    }, []);

    const chwiDeugReportTargetInquiry = async () => {
        const username = getUsername();
        if (username) {
            const res = await axios.post("chwideug-reporttargetinquiry", {
                username: username,
            });
            console.log(Object.values(res.data));
            setChwiDeugList(Object.values(res.data));
            // console.log("res", res.data);
            // setChwiDeugList();
        } else {
            alert("사업장에서 4대보험 관리번호를 입력해주세요");
            alert("에러가 발생했습니다 관리자에게 문의 해주세요");
        }
    };

    return (
        <Card>
            <Card.Body>
                <div className="mb-4">
                    <Button variant="link" className="float-end mdi mdi-progress-question text-black" onClick={toggleQnA}>
                        설명서
                    </Button>
                </div>
                <div>
                    <h5 className="mb-3 text-uppercase bg-light p-2">
                        <p>① 건설업 및 벌목업 등 자진신고 사업장은 산재보험 적용사업장이나 근로자 고용정보 신고 대상이 아닙니다.</p>
                        <p>② 근로기준법상 근로자가 아니라면 고용보험,산재보험 취득대상이 아닙니다. 사업주와 동거친족, 임원(법인이사)
                            등은 근로자라고 보기 어려운 면이 있으므로 근로자성 여부는 근로복지공단(1588-0075)으로 문의하시기 바랍니다
                        </p>
                        <p>③ 자활근로종사자,현장실습생, 항운노조원, 선원법 적용 근로자 등은 보험료부과 구분부호 확인후 부호 및 사유를
                            선택해 주시기 바랍니다. (현장실습생은「산업재해보상보험법」제123조제1항에 따른 "고용노동부장관이 정하는 현장실습생"을 말함 )
                        </p>
                        <p>④ 1개월 미만 고용되는 근로자는 일용근로자로 근로자 자격취득신고 대상이 아니므로
                            근로내용확인신고서를 제출하여 주시기 바랍니다.
                        </p>
                        <p>⑤ 자격 취득 및 상실신고 신고 기한 내 신고하여야 합니다 <br />
                            ※ 고용•산재보험, 국민연금: 사유발생일이 속하는 달의 다음달 15일까지,
                            건강보험:사유발생일로부터 14일 이내
                        </p>
                    </h5>
                </div>
                <div>
                    <Row>
                        <Col>
                            <p className="text-start">
                                <Button className="mb-1" variant="link">숨기기</Button>
                                <Button className="mb-1" variant="link" href="/ui/extended/rangesliders">업무현황바로가기 <i className="mdi mdi-chevron-double-right"></i></Button>
                            </p>
                        </Col>
                        <Col>
                            <p className="text-end">
                                <Button className="mb-1" onClick={chwiDeugReportTargetInquiry}>신고 대상자 조회</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button className="mb-1" onClick={toggleSingo}>선택 근로자 신고</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <div>
                            <div className="table-responsive  text-center">
                                <Table className="mb-0 table-bordered " hover>
                                    <thead className="table-madegray" style={{ color: "#a3a7ad" }}>
                                        <tr>
                                            <th style={{ width: "7%" }}>#</th>
                                            <th style={{ width: "14%" }}>이 름</th>
                                            <th style={{ width: "16%" }}>주민번호</th>
                                            <th style={{ width: "14%" }}>입사일</th>
                                            <th style={{ width: "14%" }}>직 급</th>
                                            <th style={{ width: "16%" }}>월평균보수</th>
                                            <th style={{ width: "19%" }}>상세 정보</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {chwiDeugList.map((data: ChwiDeugSinGoType, index: number) => (
                                            <tr key={index}>
                                                <td ><input type="checkbox" name={`${data.index}`} checked={checkedItems.includes(data.index) ? true : false} onChange={(e) => onChangeCheckBox(e.target.checked, index)}></input></td>
                                                <td>{data.geunrojanm}</td>
                                                <td>{data.geunrojargno}</td>
                                                <td>{data.chwideukdt}</td>
                                                <td>{data.jiggeub}</td>
                                                <td>{data.mmavgbosu}</td>
                                                <td style={{ width: "100px" }}>
                                                    <Button size="sm" variant="link" onClick={() => { toggleSangse(); listToInput(chwiDeugList[index]); setClickIndex(index) }}>상세입력</Button>
                                                </td>
                                            </tr>
                                        )
                                        )
                                        }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>



                {/* QnA 모달 */}
                <Modal show={isOpen5} onHide={toggleQnA}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <h5 className="text-white">4대보험 취득신고</h5>

                    </Modal.Header>
                    <Modal.Body className="qna">
                        <Row>
                            <Col>
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>4대보험취득신고란?</p>
                                <p className="font-15">
                                    4대 사회보험에 가입할 자격을 취득했음을 신고한다는 뜻으로 사업장에 신규 입사자가 생기면 입사일이 자격을 취득한 날입니다
                                    < br />
                                    4대 보험 취득일 : 신규입사자 입사일을 기준으로 합니다. < br />
                                    4대 보험 자격 취득 신고 기한 <br />
                                    - 건강보험 : 입사일 기준 14일 이내 <br />
                                    - 국민연금, 고용보험, 산재보험 : 입사일 기준 다음 달 15일까지
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="link" type="submit" onClick={toggleQnA} >
                            확인
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* 상세입력 모달 */}
                <Modal show={isOpen21} onHide={toggleSangse} backdrop={"static"}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <p className="text-white mb-0" style={{ fontSize: "22px" }}>상세입력</p>

                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>이름 <br />
                                    <input className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="나취득" name='geunrojanm' onChange={onChange} value={geunrojanm}></input>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주민번호 <br />
                                    <input className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="900404-1116655" name='geunrojargno' onChange={onChange} value={geunrojargno}></input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>국적 <br />
                                    <select className="form-select" name="gukjeok" onChange={onChangeSelectBox} style={{ width: "99%", border: "1px solid #d5d5d5", outline: "none", marginTop: "7px" }} value={gukjeok}>
                                        <option>국적 선택하기</option>
                                        <option value="0">0 - 미상</option>
                                        <option value="1">1 - 한국</option>
                                        <option value="2">2 - 아프가니스탄</option>
                                        <option value="3">3 - 바레인</option>
                                        <option value="4">4 - 방글라데시</option>
                                        <option value="5">5 - 부탄</option>
                                        <option value="6">6 - 브루나이</option>
                                        <option value="7">7 - 미얀마</option>
                                        <option value="8">8 - 영령인도양섬</option>
                                        <option value="9">9 - 캄보디아</option>
                                        <option value="10">10 - 스리랑카</option>
                                        <option value="11">11 - 중국</option>
                                        <option value="12">12 - 타이완</option>
                                        <option value="13">13 - 키프로스</option>
                                        <option value="14">14 - 북한</option>
                                        <option value="15">15 - 홍콩</option>
                                        <option value="16">16 - 홍콩거주난민</option>
                                        <option value="17">17 - 한국계중국인</option>
                                        <option value="18">18 - 인도</option>
                                        <option value="19">19 - 인도네시아</option>
                                        <option value="20">20 - 이란</option>
                                        <option value="21">21 - 이라크</option>
                                        <option value="22">22 - 이스라엘</option>
                                        <option value="23">23 - 일본</option>
                                        <option value="24">24 - 요르단</option>
                                        <option value="25">25 - 카자흐스탄</option>
                                        <option value="26">26 - 키르기스스탄</option>
                                        <option value="27">27 - 쿠웨이트</option>
                                        <option value="28">28 - 라오스</option>
                                        <option value="29">29 - 레바논</option>
                                        <option value="30">30 - 마카오</option>
                                        <option value="31">31 - 말레이시아</option>
                                        <option value="32">32 - 몰디브</option>
                                        <option value="33">33 - 몽골</option>
                                        <option value="34">34 - 마요트</option>
                                        <option value="35">35 - 네팔</option>
                                        <option value="36">36 - 오만</option>
                                        <option value="37">37 - 파키스탄</option>
                                        <option value="38">38 - 팔레스타인</option>
                                        <option value="39">39 - 필리핀</option>
                                        <option value="40">40 - 티모르</option>
                                        <option value="41">41 - 카타르</option>
                                        <option value="42">42 - 사우디아라비아</option>
                                        <option value="43">43 - 시킴왕국</option>
                                        <option value="44">44 - 싱가포르</option>
                                        <option value="45">45 - 시리아</option>
                                        <option value="46">46 - 타이</option>
                                        <option value="47">47 - 터키</option>
                                        <option value="48">48 - 투르크메이스탄</option>
                                        <option value="49">49 - 아랍에미리트연합</option>
                                        <option value="50">50 - 우즈베키스탄</option>
                                        <option value="51">51 - 베트남</option>
                                        <option value="52">52 - 예멘공화국</option>
                                        <option value="53">53 - 예멘인민민주공화국</option>
                                        <option value="54">54 - 앵귈라</option>
                                        <option value="55">55 - 앤티가바부다</option>
                                        <option value="56">56 - 아르헨티나</option>
                                        <option value="57">57 - 아루바</option>
                                        <option value="58">58 - 바하마</option>
                                        <option value="59">59 - 바에이도스</option>
                                        <option value="60">60 - 벨리즈</option>
                                        <option value="61">61 - 볼리비아</option>
                                        <option value="62">62 - 브라질</option>
                                        <option value="63">63 - 버뮤다</option>
                                        <option value="64">64 - 부베트</option>
                                        <option value="65">65 - 케이맨제도</option>
                                        <option value="66">66 - 캐나다</option>
                                        <option value="67">67 - 칠레</option>
                                        <option value="68">68 - 콜롬비아</option>
                                        <option value="69">69 - 코스타리카</option>
                                        <option value="70">70 - 쿠바</option>
                                        <option value="71">71 - 도미니카연방</option>
                                        <option value="72">72 - 도미니카공화국</option>
                                        <option value="73">73 - 이스터제도</option>
                                        <option value="74">74 - 에콰도르</option>
                                        <option value="75">75 - 엘살바도르</option>
                                        <option value="76">76 - 포클랜드</option>
                                        <option value="77">77 - 불령가이아나</option>
                                        <option value="78">78 - 그레나다</option>
                                        <option value="79">79 - 과들루프</option>
                                        <option value="80">80 - 과테말라</option>
                                        <option value="81">81 - 가이아나</option>
                                        <option value="82">82 - 아이티</option>
                                        <option value="83">83 - 온두라스</option>
                                        <option value="84">84 - 자메이카</option>
                                        <option value="85">85 - 마르티니크</option>
                                        <option value="86">86 - 멕시코</option>
                                        <option value="87">87 - 몬서래트</option>
                                        <option value="88">88 - 네덜란드령앤틸리스</option>
                                        <option value="89">89 - 니카라과</option>
                                        <option value="90">90 - 파나마</option>
                                        <option value="91">91 - 파라과이</option>
                                        <option value="92">92 - 페루</option>
                                        <option value="93">93 - 푸에르토리코</option>
                                        <option value="94">94 - 남조지아남샌드위치군도</option>
                                        <option value="95">95 - 상피에르미클롱</option>
                                        <option value="96">96 - 세인트크리스토퍼네비스</option>
                                        <option value="97">97 - 세인트루시아</option>
                                        <option value="98">98 - 세인트빈센트그레나딘</option>
                                        <option value="99">99 - 수리남</option>
                                        <option value="100">100 - 트리니다드토바고</option>
                                        <option value="101">101 - 터크스케이커스</option>
                                        <option value="102">102 - 우루과이</option>
                                        <option value="103">103 - 미국</option>
                                        <option value="104">104 - 미국인근섬</option>
                                        <option value="105">105 - 베네수엘라</option>
                                        <option value="106">106 - 미령버진아일랜드</option>
                                        <option value="107">107 - 영령버진아일랜드</option>
                                        <option value="108">108 - 알바니아</option>
                                        <option value="109">109 - 안도라</option>
                                        <option value="110">110 - 아르메니아</option>
                                        <option value="111">111 - 아제르바이잔</option>
                                        <option value="112">112 - 벨기에</option>
                                        <option value="113">113 - 불가리아</option>
                                        <option value="114">114 - 벨로루시</option>
                                        <option value="115">115 - 보스니아헤르체고비나</option>
                                        <option value="116">116 - 체코</option>
                                        <option value="117">117 - 페로섬</option>
                                        <option value="118">118 - 에스토니아</option>
                                        <option value="119">119 - 덴마크</option>
                                        <option value="120">120 - 영국보호민</option>
                                        <option value="121">121 - 영국속국민</option>
                                        <option value="122">122 - 영국</option>
                                        <option value="123">123 - 영국속령지시민</option>
                                        <option value="124">124 - 영국외지민</option>
                                        <option value="125">125 - 영국외지시민</option>
                                        <option value="126">126 - 핀란드</option>
                                        <option value="127">127 - 프랑스</option>
                                        <option value="128">128 - 한국계러시아인</option>
                                        <option value="129">129 - 그루지야</option>
                                        <option value="130">130 - 독일</option>
                                        <option value="131">131 - 동독</option>
                                        <option value="132">132 - 그리스</option>
                                        <option value="133">133 - 지브롤터</option>
                                        <option value="134">134 - 그린란드</option>
                                        <option value="135">135 - 헝가리</option>
                                        <option value="136">136 - 아이슬란드</option>
                                        <option value="137">137 - 아일랜드</option>
                                        <option value="138">138 - 이탈리아</option>
                                        <option value="139">139 - 코소보</option>
                                        <option value="140">140 - 라트비아</option>
                                        <option value="141">141 - 리히텐슈타인</option>
                                        <option value="142">142 - 룩셈부르크</option>
                                        <option value="143">143 - 리투아니아</option>
                                        <option value="144">144 - 마케도니아</option>
                                        <option value="145">145 - 몰타</option>
                                        <option value="146">146 - 모나코</option>
                                        <option value="147">147 - 몰도바</option>
                                        <option value="148">148 - 몬테네그로</option>
                                        <option value="149">149 - 네덜란드</option>
                                        <option value="150">150 - 노르웨이</option>
                                        <option value="151">151 - 폴란드</option>
                                        <option value="152">152 - 포르투갈</option>
                                        <option value="153">153 - 루마니아</option>
                                        <option value="154">154 - 러시아연방</option>
                                        <option value="155">155 - 세르비아</option>
                                        <option value="156">156 - 슬로바크</option>
                                        <option value="157">157 - 슬로베니아</option>
                                        <option value="158">158 - 산마리노</option>
                                        <option value="159">159 - 스페인</option>
                                        <option value="160">160 - 스웨덴</option>
                                        <option value="161">161 - 스위스</option>
                                        <option value="162">162 - 스발바르</option>
                                        <option value="163">163 - 우크라이나</option>
                                        <option value="164">164 - 독립국가연합</option>
                                        <option value="165">165 - 바티칸</option>
                                        <option value="166">166 - 유고슬라비아</option>
                                        <option value="167">167 - 세르비아몬테네그로</option>
                                        <option value="168">168 - 오스트레일리아</option>
                                        <option value="169">169 - 캐롤라인군도</option>
                                        <option value="170">170 - 쿡아일랜드</option>
                                        <option value="171">171 - 크리스마스</option>
                                        <option value="172">172 - 코코스</option>
                                        <option value="173">173 - 피지</option>
                                        <option value="174">174 - 불령폴리네시아</option>
                                        <option value="175">175 - 불령남태평양섬</option>
                                        <option value="176">176 - 괌</option>
                                        <option value="177">177 - 허드맥도날드</option>
                                        <option value="178">178 - 키리바시</option>
                                        <option value="179">179 - 북마리아나군도</option>
                                        <option value="180">180 - 미크로네시아</option>
                                        <option value="181">181 - 마라아나군도</option>
                                        <option value="182">182 - 마샬군도</option>
                                        <option value="183">183 - 미드웨이</option>
                                        <option value="184">184 - 나우루</option>
                                        <option value="185">185 - 뉴칼레도니아</option>
                                        <option value="186">186 - 뉴질랜드</option>
                                        <option value="187">187 - 니우에</option>
                                        <option value="188">188 - 노퍽</option>
                                        <option value="189">189 - 팔라우</option>
                                        <option value="190">190 - 파푸아뉴기니</option>
                                        <option value="191">191 - 핏캐론</option>
                                        <option value="192">192 - 사모아</option>
                                        <option value="193">193 - 미령사모아</option>
                                        <option value="194">194 - 솔로몬군도</option>
                                        <option value="195">195 - 호주령솔로몬군도</option>
                                        <option value="196">196 - 통가</option>
                                        <option value="197">197 - 토켈라우</option>
                                        <option value="198">198 - 투발루</option>
                                        <option value="199">199 - 비누아투</option>
                                        <option value="200">200 - 웨이크아일랜드</option>
                                        <option value="201">201 - 월리스푸투나</option>
                                        <option value="202">202 - 알제리</option>
                                        <option value="203">203 - 앙골라</option>
                                        <option value="204">204 - 보츠와나</option>
                                        <option value="205">205 - 부룬디</option>
                                        <option value="206">206 - 카메론</option>
                                        <option value="207">207 - 카나리아군도</option>
                                        <option value="208">208 - 카보베르데</option>
                                        <option value="209">209 - 중앙아프리카공화국</option>
                                        <option value="210">210 - 차드</option>
                                        <option value="211">211 - 코모로</option>
                                        <option value="212">212 - 콩고</option>
                                        <option value="213">213 - 콩고민주공화국</option>
                                        <option value="214">214 - 베냉</option>
                                        <option value="215">215 - 지부티</option>
                                        <option value="216">216 - 이집트</option>
                                        <option value="217">217 - 적도기니</option>
                                        <option value="218">218 - 에티오피아</option>
                                        <option value="219">219 - 에리트레아</option>
                                        <option value="220">220 - 가봉</option>
                                        <option value="221">221 - 감비아</option>
                                        <option value="222">222 - 가나</option>
                                        <option value="223">223 - 기니</option>
                                        <option value="224">224 - 기니비사우</option>
                                        <option value="225">225 - 코트디부아르</option>
                                        <option value="226">226 - 케냐</option>
                                        <option value="227">227 - 레소토</option>
                                        <option value="228">228 - 라이베리아</option>
                                        <option value="229">229 - 리비아</option>
                                        <option value="230">230 - 마다가스카르</option>
                                        <option value="231">231 - 말라위</option>
                                        <option value="232">232 - 말리</option>
                                        <option value="233">233 - 모리타니</option>
                                        <option value="234">234 - 모리셔스</option>
                                        <option value="235">235 - 모로코</option>
                                        <option value="236">236 - 모잠비크</option>
                                        <option value="237">237 - 나미비아</option>
                                        <option value="238">238 - 니제르</option>
                                        <option value="239">239 - 나이지리아</option>
                                        <option value="240">240 - 레위니옹</option>
                                        <option value="241">241 - 짐바브웨</option>
                                        <option value="242">242 - 르완다</option>
                                        <option value="243">243 - 상투메프린시페</option>
                                        <option value="244">244 - 세네갈</option>
                                        <option value="245">245 - 세이셸</option>
                                        <option value="246">246 - 시에라리온</option>
                                        <option value="247">247 - 소말리아</option>
                                        <option value="248">248 - 남아프리카공화국</option>
                                        <option value="249">249 - 세인트헬레나</option>
                                        <option value="250">250 - 수단</option>
                                        <option value="251">251 - 스와질란드</option>
                                        <option value="252">252 - 탄자니아</option>
                                        <option value="253">253 - 토고</option>
                                        <option value="254">254 - 튀니지</option>
                                        <option value="255">255 - 우간다</option>
                                        <option value="256">256 - 부르키나파소</option>
                                        <option value="257">257 - 서사하라</option>
                                        <option value="258">258 - 자이르</option>
                                        <option value="259">259 - 잠비아</option>
                                        <option value="260">260 - 무국적</option>
                                        <option value="261">261 - 남극대륙</option>
                                        <option value="262">262 - 공해</option>
                                        <option value="263">263 - 이중국적</option>
                                        <option value="264">264 - 한국재외국민</option>
                                        <option value="265">265 - 난민</option>
                                        <option value="266">266 - 국제연합</option>
                                    </select>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>체류자격<br />
                                    <select className="form-control" name="cheryujakyeok" onChange={onChangeSelectBox} style={{ width: "99%", border: "1px solid #d5d5d5", outline: "none", marginTop: "7px" }} value={cheryujakyeok}>
                                        <option value="0">0 - 선택안함</option>
                                        <option value="1">1 - 체류자격없음</option>
                                        <option value="2">2 - 외교</option>
                                        <option value="3">3 - 공무</option>
                                        <option value="4">4 - 미군현역</option>
                                        <option value="5">5 - 미군군속</option>
                                        <option value="6">6 - 기타협정</option>
                                        <option value="7">7 - 사증면제</option>
                                        <option value="8">8 - 일무사증</option>
                                        <option value="9">9 - 제주무사증</option>
                                        <option value="10">10 - 일시취재</option>
                                        <option value="11">11 - 단기상용</option>
                                        <option value="12">12 - 우대기업</option>
                                        <option value="13">13 - FTA상용</option>
                                        <option value="14">14 - 단기종합</option>
                                        <option value="15">15 - 단기반</option>
                                        <option value="16">16 - 단체관광등</option>
                                        <option value="17">17 - 의료관광</option>
                                        <option value="18">18 - 일반상용</option>
                                        <option value="19">19 - 협정단기상용</option>
                                        <option value="20">20 - 단기상용C36</option>
                                        <option value="20">20 - 도착관광</option>
                                        <option value="22">22 - 동포방문</option>
                                        <option value="23">23 - 일반관광</option>
                                        <option value="24">24 - 의료관광C3M</option>
                                        <option value="25">25 - 단기취업</option>
                                        <option value="26">26 - 문화예술</option>
                                        <option value="27">27 - 구직</option>
                                        <option value="28">28 - 구직활동</option>
                                        <option value="29">29 - 기술창업활동</option>
                                        <option value="30">30 - 유학</option>
                                        <option value="31">31 - 전문학사</option>
                                        <option value="32">32 - 학사유학</option>
                                        <option value="33">33 - 석사유학</option>
                                        <option value="34">34 - 박사유학</option>
                                        <option value="35">35 - 연구유학</option>
                                        <option value="36">36 - 교학생</option>
                                        <option value="37">37 - 교환학생D2F</option>
                                        <option value="38">38 - 시간취업</option>
                                        <option value="39">39 - 해투기술연수</option>
                                        <option value="40">40 - 해외직접</option>
                                        <option value="41">41 - 기술수출</option>
                                        <option value="42">42 - 플랜트수출</option>
                                        <option value="43">43 - 중기협</option>
                                        <option value="44">44 - 수산협</option>
                                        <option value="45">45 - 각부처</option>
                                        <option value="46">46 - 건설협</option>
                                        <option value="47">47 - 농협</option>
                                        <option value="48">48 - 일반연수</option>
                                        <option value="49">49 - 대학부설어학원연수</option>
                                        <option value="50">50 - 기타기관연수</option>
                                        <option value="51">51 - 초중고생</option>
                                        <option value="52">52 - 동포연수</option>
                                        <option value="53">53 - 한식조리연수</option>
                                        <option value="54">54 - 사설기관연수</option>
                                        <option value="55">55 - 외국어연수</option>
                                        <option value="56">56 - 취재</option>
                                        <option value="57">57 - 종교</option>
                                        <option value="58">58 - 상사주재</option>
                                        <option value="59">59 - 외국기업</option>
                                        <option value="60">60 - 내국기업</option>
                                        <option value="61">61 - FTA전근</option>
                                        <option value="62">62 - FTA계약</option>
                                        <option value="63">63 - 기업투자</option>
                                        <option value="64">64 - 법인에투자</option>
                                        <option value="65">65 - 벤처투자</option>
                                        <option value="66">66 - 개인기업투자</option>
                                        <option value="67">67 - 기술창업</option>
                                        <option value="68">68 - FTA전근D891</option>
                                        <option value="69">69 - 무역경영</option>
                                        <option value="70">70 - 무고유거래</option>
                                        <option value="71">71 - 수출설비</option>
                                        <option value="72">72 - 선박설비</option>
                                        <option value="73">73 - 경영영리사업</option>
                                        <option value="74">74 - 교수</option>
                                        <option value="75">75 - 내항선원</option>
                                        <option value="76">76 - 어선원</option>
                                        <option value="77">77 - 순항원</option>
                                        <option value="78">78 - 회화지도</option>
                                        <option value="79">79 - 일반회화강사</option>
                                        <option value="80">80 - 학교보조교사</option>
                                        <option value="81">81 - FTA영어</option>
                                        <option value="82">82 - 연구</option>
                                        <option value="83">83 - 기술지도</option>
                                        <option value="84">84 - 전직업</option>
                                        <option value="85">85 - 예술흥행</option>
                                        <option value="86">86 - 예술연예</option>
                                        <option value="87">87 - 호텔유흥</option>
                                        <option value="88">88 - 운동</option>
                                        <option value="89">89 - 특정활동</option>
                                        <option value="90">90 - 특정활동E71</option>
                                        <option value="91">91 - 의료디</option>
                                        <option value="92">92 - 해삼양식</option>
                                        <option value="93">93 - 숙련기능인력</option>
                                        <option value="94">94 - FTA독립</option>
                                        <option value="95">95 - 제조업</option>
                                        <option value="96">96 - 건설업</option>
                                        <option value="97">97 - 농업</option>
                                        <option value="98">98 - 어업</option>
                                        <option value="99">99 - 서비스업</option>
                                        <option value="100">100 - 재료수집</option>
                                        <option value="101">101 - 관광호텔</option>
                                        <option value="102">102 - 축산업</option>
                                        <option value="103">103 - 과거추천연수</option>
                                        <option value="104">104 - 과거연수취업</option>
                                        <option value="105">105 - 과거례고용</option>
                                        <option value="106">106 - 과거합법조치</option>
                                        <option value="107">107 - 음식업</option>
                                        <option value="108">108 - 청소업</option>
                                        <option value="109">109 - 간병가사</option>
                                        <option value="110">110 - 건설업E9D</option>
                                        <option value="111">111 - 자차수</option>
                                        <option value="112">112 - 제조업E9F</option>
                                        <option value="113">113 - 농축산업</option>
                                        <option value="114">114 - 연근해업</option>
                                        <option value="115">115 - 욕탕업</option>
                                        <option value="116">116 - 재료수집E9J</option>
                                        <option value="117">117 - 냉장냉동</option>
                                        <option value="118">118 - 비전문취업</option>
                                        <option value="119">119 - 방문동거</option>
                                        <option value="120">120 - 방문동거F11</option>
                                        <option value="121">121 - 동포고령</option>
                                        <option value="122">122 - 방문취업자녀</option>
                                        <option value="123">123 - 거주배우자</option>
                                        <option value="124">124 - 유학생부모</option>
                                        <option value="125">125 - 입양외국인</option>
                                        <option value="126">126 - 가사보조</option>
                                        <option value="127">127 - 외교가사보조</option>
                                        <option value="128">128 - 고액가사보조</option>
                                        <option value="129">129 - 첨단가보조</option>
                                        <option value="130">130 - 전문가사보조</option>
                                        <option value="131">131 - 외교동거</option>
                                        <option value="132">132 - 결혼이민가족</option>
                                        <option value="133">133 - 결혼가사정리</option>
                                        <option value="134">134 - 국적신청</option>
                                        <option value="135">135 - 국적신청가족</option>
                                        <option value="136">136 - 영주신청가족</option>
                                        <option value="137">137 - 합법출생자녀</option>
                                        <option value="138">138 - 동포배우자등</option>
                                        <option value="139">139 - 기타동거</option>
                                        <option value="140">140 - 거주</option>
                                        <option value="141">141 - 국민배우자</option>
                                        <option value="142">142 - 자녀양육</option>
                                        <option value="143">143 - 공무임용</option>
                                        <option value="144">144 - 공익사업투자</option>
                                        <option value="145">145 - 공익은퇴가족</option>
                                        <option value="146">146 - 은퇴이민투자</option>
                                        <option value="147">147 - 국민자녀</option>
                                        <option value="148">148 - 영주자가족</option>
                                        <option value="149">149 - 난민</option>
                                        <option value="150">150 - 고액투자</option>
                                        <option value="151">151 - 숙련기능</option>
                                        <option value="152">152 - 점수우수인력</option>
                                        <option value="153">153 - 점수가족</option>
                                        <option value="154">154 - 부동산투자</option>
                                        <option value="155">155 - 부동가족</option>
                                        <option value="156">156 - 영주상실</option>
                                        <option value="157">157 - 기타장기</option>
                                        <option value="158">158 - 동반</option>
                                        <option value="159">159 - FTA동반159</option>
                                        <option value="160">160 - 기여동포</option>
                                        <option value="161">161 - 재외동포본인</option>
                                        <option value="162">162 - 재외동포직계가족</option>
                                        <option value="163">163 - DE계열6개월이상체류자</option>
                                        <option value="164">164 - 대학졸업자164</option>
                                        <option value="165">165 - OECD영주자</option>
                                        <option value="166">166 - 법인대표등</option>
                                        <option value="167">167 - 십만불기업가</option>
                                        <option value="168">168 - 다국적기업</option>
                                        <option value="169">169 - 동포단체대표</option>
                                        <option value="170">170 - 일반동포</option>
                                        <option value="171">171 - 공무원등</option>
                                        <option value="172">172 - 교원</option>
                                        <option value="173">173 - 개인사업가</option>
                                        <option value="174">174 - 빈번출입자</option>
                                        <option value="175">175 - 제조등근속자</option>
                                        <option value="176">176 - 육십이상자</option>
                                        <option value="177">177 - 수교전입국자</option>
                                        <option value="178">178 - 자격증소지자</option>
                                        <option value="179">179 - 사회통합프로그램4단계이수자</option>
                                        <option value="180">180 - 재외동포기타</option>
                                        <option value="181">181 - 영주</option>
                                        <option value="182">182 - 장기체류</option>
                                        <option value="183">183 - 첨단학사</option>
                                        <option value="184">184 - 특정능력</option>
                                        <option value="185">185 - 특별공로</option>
                                        <option value="186">186 - 연금수혜</option>
                                        <option value="187">187 - 방문취업년</option>
                                        <option value="188">188 - 국내박사</option>
                                        <option value="189">189 - 점수제</option>
                                        <option value="190">190 - 부동산투자F517</option>
                                        <option value="191">191 - 점수가족F518</option>
                                        <option value="190">190 - 부동가족F519</option>
                                        <option value="193">193 - 국민배우자F52</option>
                                        <option value="194">194 - 영주출생</option>
                                        <option value="195">195 - 공익사업투자F521</option>
                                        <option value="196">196 - 공익은퇴가족F522</option>
                                        <option value="197">197 - 은퇴이민투자523</option>
                                        <option value="198">198 - 법인창업영주</option>
                                        <option value="199">199 - 고액투자조건부영주</option>
                                        <option value="200">200 - 국민자녀F53</option>
                                        <option value="201">201 - 영주가족</option>
                                        <option value="202">202 - 고액투자F5</option>
                                        <option value="203">203 - 재외동포2년</option>
                                        <option value="204">204 - 동포국적요건</option>
                                        <option value="205">205 - 재한화교</option>
                                        <option value="206">206 - 첨단박사</option>
                                        <option value="207">207 - 결혼이민</option>
                                        <option value="208">208 - 국민배우F61</option>
                                        <option value="209">209 - 자녀양육F62</option>
                                        <option value="210">210 - 혼인단절</option>
                                        <option value="211">211 - 기타</option>
                                        <option value="212">212 - 산재보상</option>
                                        <option value="213">213 - 치료요양</option>
                                        <option value="214">214 - 성매매피해</option>
                                        <option value="215">215 - 질병사고</option>
                                        <option value="216">216 - 소송진행</option>
                                        <option value="217">217 - 체임중재</option>
                                        <option value="218">218 - 난민신청</option>
                                        <option value="219">219 - 난민인허</option>
                                        <option value="220">220 - 가족사망</option>
                                        <option value="221">221 - 임신출산</option>
                                        <option value="222">222 - 기타G199</option>
                                        <option value="223">223 - 의료관광G1M</option>
                                        <option value="224">224 - 관광취업</option>
                                        <option value="225">225 - 연고방취</option>
                                        <option value="226">226 - 유학방취</option>
                                        <option value="227">227 - 자진방취</option>
                                        <option value="228">228 - 연수방취</option>
                                        <option value="229">229 - 추첨방취</option>
                                        <option value="230">230 - 변경방취</option>
                                        <option value="231">231 - 만기방취</option>
                                        <option value="232">232 - 기타방취</option>
                                        <option value="233">233 - 관광상륙</option>
                                    </select>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>취득일자 <br />
                                    <input type="date" className="form-control" style={{ width: "99%", border: "1px solid #d5d5d5", outline: "none", marginTop: "7px", height: "100%" }} name="chwideukdt" onChange={onChange} value={chwideukdt}></input>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>계약종료일 <br />
                                    <input type="date" className="form-control" style={{ width: "99%", border: "1px solid #d5d5d5", outline: "none", marginTop: "7px", height: "100%" }} name="gyeyaktodt" onChange={onChange} value={gyeyaktodt}></input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>1주소정근로시간 <br />
                                    <input className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", marginTop: "7px" }} placeholder="20" name="jusojeonggeunrotm" onChange={onChange} value={jusojeonggeunrotm}></input>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>월평균보수 <br />
                                    <input style={{ border: "1px solid #d5d5d5", outline: "none", marginTop: "7px" }}
                                        className="form-control"
                                        type="text" name="mmavgbosu" placeholder="500000"
                                        value={mmavgbosu}
                                        onChange={onChange}>
                                    </input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>직급 <br />
                                    <input className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} name="jiggeub" onChange={onChange} value={jiggeub}></input>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>직종코드<br />
                                    <select className="form-control" name="jikjongcd" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} onChange={onChangeSelectBox} value={jikjongcd}>
                                        <option value="">직종코드 선택</option>
                                        <option value="0">0 - 의회의원고위공무원및기업고위임원</option>
                                        <option value="1">1 - 행정경영금융보험관리자</option>
                                        <option value="2">2 - 전문서비스관리자</option>
                                        <option value="3">3 - 미용여행숙박음식경비청소관리자</option>
                                        <option value="4">4 - 영업판매운송관리자</option>
                                        <option value="5">5 - 건설채굴제조생산관리자</option>
                                        <option value="6">6 - 정부공공행정전문가</option>
                                        <option value="7">7 - 경영인사전문가</option>
                                        <option value="8">8 - 회계세무감정전문가</option>
                                        <option value="9">9 - 광고조사상품기획행사기획전문가</option>
                                        <option value="10">10 - 정부공공행정사무원</option>
                                        <option value="11">11 - 경영지원사무원</option>
                                        <option value="12">12 - 회계경리사무원</option>
                                        <option value="13">13 - 무역운송생산품질사무원</option>
                                        <option value="14">14 - 안내고객상담통계비서사무보조및기타사무원</option>
                                        <option value="15">15 - 금융보험전문가</option>
                                        <option value="16">16 - 금융보험사무원</option>
                                        <option value="17">17 - 금융보험영업원</option>
                                        <option value="18">18 - 인문사회과학연구원</option>
                                        <option value="19">19 - 자연과학연구원및시험원</option>
                                        <option value="20">20 - 생명과학연구원및시험원</option>
                                        <option value="21">21 - 컴퓨터하드웨어통신공학기술자</option>
                                        <option value="22">22 - 컴퓨터시스템전문가</option>
                                        <option value="23">23 - 소프트웨어개발자</option>
                                        <option value="24">24 - 데이터네트워크및시스템운영전문가</option>
                                        <option value="25">25 - 정보보안전문가</option>
                                        <option value="26">26 - 통신방송송출장비기사</option>
                                        <option value="27">27 - 건축토목공학기술자및시험원</option>
                                        <option value="28">28 - 기계로봇공학기술자및시험원</option>
                                        <option value="29">29 - 금속재료공학기술자및시험원</option>
                                        <option value="30">30 - 전기전자공학기술자및시험원</option>
                                        <option value="31">31 - 화학공학기술자및시험원</option>
                                        <option value="32">32 - 에너지환경공학기술자및시험원</option>
                                        <option value="33">33 - 섬유공학기술자및시험원</option>
                                        <option value="34">34 - 식품공학기술자및시험원</option>
                                        <option value="35">35 - 소방방재산업안전비파괴기술자</option>
                                        <option value="36">36 - 제도사및기타인쇄목재등공학기술자및시험원</option>
                                        <option value="37">37 - 대학교수및강사</option>
                                        <option value="38">38 - 학교교사</option>
                                        <option value="39">39 - 유치원교사</option>
                                        <option value="40">40 - 문리기술예능강사</option>
                                        <option value="41">41 - 장학관및기타교육종사자</option>
                                        <option value="42">42 - 법률전문가</option>
                                        <option value="43">43 - 법률사무원</option>
                                        <option value="44">44 - 사회복지사및상담사</option>
                                        <option value="45">45 - 보육교사및기타사회복지종사자</option>
                                        <option value="46">46 - 성직자및기타종교종사자</option>
                                        <option value="47">47 - 경찰관소방관및교도관</option>
                                        <option value="48">48 - 군인</option>
                                        <option value="49">49 - 의사한의사및치과의사</option>
                                        <option value="50">50 - 수의사</option>
                                        <option value="51">51 - 약사및한약사</option>
                                        <option value="52">52 - 간호사</option>
                                        <option value="53">53 - 영양사</option>
                                        <option value="54">54 - 의료기사치료사재활사</option>
                                        <option value="55">55 - 보건의료종사자</option>
                                        <option value="56">56 - 작가통번역가</option>
                                        <option value="57">57 - 기자및언론전문가</option>
                                        <option value="58">58 - 학예사사서기록물관리사</option>
                                        <option value="59">59 - 창작공연전문가작가연극제외</option>
                                        <option value="60">60 - 디자이너</option>
                                        <option value="61">61 - 연극영화방송전문가</option>
                                        <option value="62">62 - 문화예술기획자및매니저</option>
                                        <option value="63">63 - 스포츠레크리에이션종사자</option>
                                        <option value="64">64 - 창작문학</option>
                                        <option value="65">65 - 창작미술</option>
                                        <option value="66">66 - 창작사진</option>
                                        <option value="67">67 - 창작건축</option>
                                        <option value="68">68 - 창작음악</option>
                                        <option value="69">69 - 창작국악</option>
                                        <option value="70">70 - 창작무용</option>
                                        <option value="71">71 - 창작연극</option>
                                        <option value="72">72 - 창작영화</option>
                                        <option value="73">73 - 창작연예</option>
                                        <option value="74">74 - 창작만화</option>
                                        <option value="75">75 - 창작기타</option>
                                        <option value="76">76 - 실연문학</option>
                                        <option value="77">77 - 실연미술</option>
                                        <option value="78">78 - 실연사진</option>
                                        <option value="79">79 - 실연건축</option>
                                        <option value="80">80 - 실연음악</option>
                                        <option value="81">81 - 실연국악</option>
                                        <option value="82">82 - 실연무용</option>
                                        <option value="83">83 - 실연연극</option>
                                        <option value="84">84 - 실연영화</option>
                                        <option value="85">85 - 실연연예</option>
                                        <option value="86">86 - 실연만화</option>
                                        <option value="87">87 - 실연기타</option>
                                        <option value="88">88 - 기술지원문학</option>
                                        <option value="89">89 - 기술지원미술</option>
                                        <option value="90">90 - 기술지원사진</option>
                                        <option value="91">91 - 기술지원건축</option>
                                        <option value="92">92 - 기술지원음악</option>
                                        <option value="93">93 - 기술지원국악</option>
                                        <option value="94">94 - 기술지원무용</option>
                                        <option value="95">95 - 기술지원연극</option>
                                        <option value="96">96 - 기술지원영화</option>
                                        <option value="97">97 - 기술지원연예</option>
                                        <option value="98">98 - 기술지원만화</option>
                                        <option value="99">99 - 기술지원기타</option>
                                        <option value="100">100 - 미용서비스원</option>
                                        <option value="101">101 - 결혼장례등예식서비스원</option>
                                        <option value="102">102 - 여행서비스원</option>
                                        <option value="103">103 - 항공기선박열차객실승무원</option>
                                        <option value="104">104 - 숙박시설서비스원</option>
                                        <option value="105">105 - 오락시설서비스원</option>
                                        <option value="106">106 - 주방장및조리사</option>
                                        <option value="107">107 - 식당서비스원</option>
                                        <option value="108">108 - 경호보안종사자</option>
                                        <option value="109">109 - 경비원</option>
                                        <option value="110">110 - 돌봄서비스종사자</option>
                                        <option value="111">111 - 청소방역및가사서비스원</option>
                                        <option value="112">112 - 검침주차관리및기타서비스단순종사자</option>
                                        <option value="113">113 - 부동산컨설턴트및중개인</option>
                                        <option value="114">114 - 영업원및상품중개인</option>
                                        <option value="115">115 - 텔레마케터</option>
                                        <option value="116">116 - 소규모상점경영및일선관리종사자</option>
                                        <option value="117">117 - 판매종사자</option>
                                        <option value="118">118 - 매장계산원및매표원</option>
                                        <option value="119">119 - 판촉및기타판매단순종사자</option>
                                        <option value="120">120 - 항공기선박철도조종사및관제사</option>
                                        <option value="121">121 - 자동차운전원</option>
                                        <option value="122">122 - 물품이동장비조작원크레인호이스트지게차</option>
                                        <option value="123">123 - 택배원및기타운송종사자</option>
                                        <option value="124">124 - 건설구조기능원</option>
                                        <option value="125">125 - 건축마감기능원</option>
                                        <option value="126">126 - 배관공</option>
                                        <option value="127">127 - 건설채굴기계운전원</option>
                                        <option value="128">128 - 기타건설기능원채굴포함</option>
                                        <option value="129">129 - 건설채굴단순종사자</option>
                                        <option value="130">130 - 기계정비설치정비원운송장비제외</option>
                                        <option value="131">131 - 운송장비정비원</option>
                                        <option value="132">132 - 금형원및공작기계조작원</option>
                                        <option value="133">133 - 냉난방설비조작원</option>
                                        <option value="134">134 - 자동조립라인산업용로봇조작원</option>
                                        <option value="135">135 - 기계조립원운송장비제외</option>
                                        <option value="136">136 - 운송장비조립원</option>
                                        <option value="137">137 - 금속관련기계설비조작원</option>
                                        <option value="138">138 - 판금원및제관원</option>
                                        <option value="139">139 - 단조원및주조원</option>
                                        <option value="140">140 - 용접원</option>
                                        <option value="141">141 - 동장원및도금원</option>
                                        <option value="142">142 - 비금속제품생산기계조작원</option>
                                        <option value="143">143 - 전기공</option>
                                        <option value="144">144 - 전기전자기기설치수리원</option>
                                        <option value="145">145 - 발전배전장치조작원</option>
                                        <option value="146">146 - 전기전자설비조작원</option>
                                        <option value="147">147 - 전기전자부품제품생산기계조작원</option>
                                        <option value="148">148 - 전기전자부품제품조립원</option>
                                        <option value="149">149 - 정보통신기기설치수리원</option>
                                        <option value="150">150 - 방송통신장비설치수리원</option>
                                        <option value="151">151 - 석유화학물가공장치조작원</option>
                                        <option value="152">152 - 고무플라스틱및화학제품생산기계조작원및조립원</option>
                                        <option value="153">153 - 환경관련장치조작원</option>
                                        <option value="154">154 - 섬유제조가공기계조작원</option>
                                        <option value="155">155 - 패턴사재단사및재봉사</option>
                                        <option value="156">156 - 의복제조원및수선원</option>
                                        <option value="157">157 - 제화원기타섬유의복기계조작원및조립원</option>
                                        <option value="158">158 - 제과제빵원및떡제조원</option>
                                        <option value="159">159 - 식품가공기능원</option>
                                        <option value="160">160 - 식품가공기계조작원</option>
                                        <option value="161">161 - 인쇄기계사진현상기조작원</option>
                                        <option value="162">162 - 목재펄프종이생산기계조작원</option>
                                        <option value="163">163 - 가구목제품제조수리원</option>
                                        <option value="164">164 - 공예원및귀금속세공원</option>
                                        <option value="165">165 - 악기간판및시타제조종사자</option>
                                        <option value="166">166 - 제조단순종사자</option>
                                        <option value="167">167 - 작물재배종사자</option>
                                        <option value="168">168 - 낙농사육종사자</option>
                                        <option value="169">169 - 임업종사자</option>
                                        <option value="170">170 - 어업종사자</option>
                                        <option value="171">171 - 농림어업단순종사자</option>
                                        <option value="172">172 - 보험설계사생명보험사소속</option>
                                        <option value="173">173 - 보험설계사생명보험사외소속</option>
                                        <option value="174">174 - 학습지방문강사교육교구강사</option>
                                        <option value="175">175 - 택배기사</option>
                                        <option value="176">176 - 대출모집인대출여신금융기관소속</option>
                                        <option value="177">177 - 대출모집인대출모집법인소속</option>
                                        <option value="178">178 - 신용카드회원모집인</option>
                                        <option value="179">179 - 방문판매원후원방문판매원</option>
                                        <option value="180">180 - 대여제품방문점검원</option>
                                        <option value="181">181 - 가전제품배송기사</option>
                                        <option value="182">182 - 방과후강사</option>
                                        <option value="183">183 - 건설기계조종사</option>
                                        <option value="184">184 - 화물차주시멘트운송</option>
                                        <option value="185">185 - 화물차주철강재운송</option>
                                        <option value="186">186 - 화물차주위험물질운송</option>
                                        <option value="187">187 - 화물차주수출입컨테이너</option>
                                    </select>
                                </p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-1" style={{ fontSize: "16px" }}>취득월납여부 <br />
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="chwideukmmnapbuyn" value="Y" checked={chwideukmmnapbuyn == "Y"} onChange={onChange}></input> 예 &nbsp;&nbsp;
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="chwideukmmnapbuyn" value="N" checked={chwideukmmnapbuyn == "N"} onChange={onChange}></input> 아니오
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-1" style={{ fontSize: "16px" }}>계약직여부 <br />
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="gyeyakjikyn" value="Y" checked={gyeyakjikyn == "Y"} onChange={onChange}></input> 예 &nbsp;&nbsp;
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="gyeyakjikyn" value="N" checked={gyeyakjikyn == "N"} onChange={onChange}></input> 아니오
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-1" style={{ fontSize: "16px" }}> 고용보험 여부<br />
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="gybyn" value="Y" checked={gybyn == "Y"} onChange={onChange}></input> 예 &nbsp;&nbsp;
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="gybyn" value="N" checked={gybyn == "N"} onChange={onChange}></input> 아니오
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-1" style={{ fontSize: "16px" }}> 건강보험 여부<br />
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="nhicyn" value="Y" checked={nhicyn == "Y"} onChange={onChange}></input> 예 &nbsp;&nbsp;
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="nhicyn" value="N" checked={nhicyn == "N"} onChange={onChange}></input> 아니오
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-1" style={{ fontSize: "16px" }}> 국민연금 여부<br />
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="npsyn" value="Y" checked={npsyn == "Y"} onChange={onChange}></input> 예 &nbsp;&nbsp;
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="npsyn" value="N" checked={npsyn == "N"} onChange={onChange}></input> 아니오
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-1" style={{ fontSize: "16px" }}> 산재보험 여부<br />
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="sjbyn" value="Y" checked={sjbyn == "Y"} onChange={onChange}></input> 예 &nbsp;&nbsp;
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="sjbyn" value="N" checked={sjbyn == "N"} onChange={onChange}></input> 아니오
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            {/* iljariyn */}
                            <Col className="mb-2">
                                <p className="mb-1" style={{ fontSize: "16px" }}> 일자리신청 여부<br />
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="iljariyn" value="Y" checked={iljariyn == "Y"} onChange={onChange}></input> 예 &nbsp;&nbsp;
                                    <input style={{ width: "15px", height: "13px" }} type="radio" name="iljariyn" value="N" checked={iljariyn == "N"} onChange={onChange}></input> 아니오
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>관리 번호<br />
                                    <input className="form-control" type="text" name='gwanrino' style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} value={gwanrino} onChange={onChange}></input>
                                </p>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <p className="mb-2" style={{ fontSize: "19px" }}>취득부호</p>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}> 국민연금 <br />
                                    <select className="form-control" name="npschwideukbuho" onChange={onChangeSelectBox} style={{ width: "99%", border: "1px solid #d5d5d5", outline: "none", marginTop: "7px" }} value={npschwideukbuho}>
                                        <option value="0">0 - 18세이상당연취득</option>
                                        <option value="1">1 - 18세미만취득</option>
                                        <option value="2">2 - 전입사업장통폐합</option>
                                        <option value="3">3 - 대학강사</option>
                                        <option value="4">4 - 육십시간미만신청취득</option>
                                    </select>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}> 건강보험<br />
                                    <select className="form-control" name="nhicchwideukbuho" onChange={onChangeSelectBox} style={{ width: "99%", border: "1px solid #d5d5d5", outline: "none", marginTop: "7px" }} value={nhicchwideukbuho}>
                                        <option value="0">0 - 최초취득</option>
                                        <option value="1">1 - 의료급여수급권자해제</option>
                                        <option value="2">2 - 직장가입자변경</option>
                                        <option value="3">3 - 직장피부양자상실</option>
                                        <option value="4">4 - 지역가입자에서변경</option>
                                        <option value="5">5 - 국가유공자상실</option>
                                        <option value="6">6 - 기타</option>
                                        <option value="7">7 - 직권말소후재등록</option>
                                        <option value="8">8 - 직장가입자이중가입</option>
                                    </select>
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="link" type="submit" onClick={() => { toggleSangse(); inputToList(); }} >
                            저장
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* 선택근로자 신고 버튼 */}
                <Modal show={isOpen30} onHide={toggleSingo}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <h5 className="text-white">4대보험 취득신고</h5>

                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <p className="font-12 mt-0" style={{ color: "blue" }}>※진행사항은 업무현황 에서 확인하실수 있습니다
                                (소요시간 최대60분)
                            </p>
                        </div>
                        <Row>
                            <Col>
                                <p className="font-18 text-center mt-2" style={{ fontWeight: 'bold' }}>
                                    신청 하시겠습니까?
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="link" type="submit" onClick={() => { toggleSingo(); sendSelectCwhiDeugSinGo(); }}>
                            예
                        </Button>
                        <Button size="sm" variant="link" type="submit" onClick={toggleSingo} >
                            취소
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* 1시간뒤 재확인 모달 */}
                <Modal show={isOpen31} onHide={toggleSingo3}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <h5 className="text-white">4대보험 취득신고</h5>

                    </Modal.Header>
                    <Modal.Body className="qna">
                        <Row>
                            <Col>
                                <p className="font-18 text-center mt-2" style={{ fontWeight: 'bold' }}>
                                    1시간뒤 다시 확인해주세요
                                </p>
                            </Col>
                        </Row>
                        <div>
                            <p>
                                <Link to="">업무현황 바로가기</Link>
                            </p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="link" type="submit" onClick={toggleSingo3} >
                            예
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const Chwideugsingo = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[

                ]}
                title={'4대보험 취득신고'}
            />
            <Chwideugsingoseo />
        </>
    );
};

export default Chwideugsingo;