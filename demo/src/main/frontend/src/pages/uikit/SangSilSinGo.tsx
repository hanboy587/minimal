import { Row, Col, Card, Button, Pagination, Modal, Table, Form } from 'react-bootstrap';
import { PageTitle } from 'components';
import { useToggle } from 'hooks';
import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

type SangSilSinGoType = {
    index: number;
    username: string;
    geunrojargno: string;
    sangsildt: string;
    npssangsilbuhocd: string;
    nhicsangsilbuhocd: string;
    sangsilsayudetail: string;
    dbosuchongak: string;
    dsanjengmm: string;
    jbosuchongak: string;
    jsanjengmm: string;
    gwanrino: string;
};

const SangSilSinGo = () => {
    const [isOpen5, toggleQnA] = useToggle();
    const [isOpen22, toggleSangse] = useToggle();
    const [isOpen23, toggleSingo2] = useToggle();
    const [sangSilList, setSangSilList] = useState<SangSilSinGoType[]>([]);
    const [maxIndex, setMaxIndex] = useState(0);
    const [clickIndex, setClickIndex] = useState(0);
    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    useEffect(() => {
        console.log("checkedItems : ", checkedItems);
    }, [checkedItems]);

    const [inputs, setInputs] = useState<SangSilSinGoType>({
        index: 0,
        username: '',
        geunrojargno: '',
        sangsildt: '',
        npssangsilbuhocd: '',
        nhicsangsilbuhocd: '',
        sangsilsayudetail: '',
        dbosuchongak: '',
        dsanjengmm: '',
        jbosuchongak: '',
        jsanjengmm: '',
        gwanrino: '',
    });

    const listToInput = (data: SangSilSinGoType) => {
        setInputs({
            index: data.index,
            username: data.username,
            geunrojargno: data.geunrojargno,
            sangsildt: data.sangsildt,
            npssangsilbuhocd: data.npssangsilbuhocd,
            nhicsangsilbuhocd: data.nhicsangsilbuhocd,
            sangsilsayudetail: data.sangsilsayudetail,
            dbosuchongak: data.dbosuchongak,
            dsanjengmm: data.dsanjengmm,
            jbosuchongak: data.jbosuchongak,
            jsanjengmm: data.jsanjengmm,
            gwanrino: data.gwanrino,
        });
    }

    const { username, geunrojargno, sangsildt, npssangsilbuhocd, nhicsangsilbuhocd, sangsilsayudetail, dsanjengmm, dbosuchongak, jbosuchongak, jsanjengmm, gwanrino } = inputs;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onCreate = () => {
        let list = {
            index: maxIndex,
            username: '',
            geunrojargno: '',
            sangsildt: '',
            npssangsilbuhocd: '',
            nhicsangsilbuhocd: '',
            sangsilsayudetail: '',
            dbosuchongak: '',
            dsanjengmm: '',
            jbosuchongak: '',
            jsanjengmm: '',
            gwanrino: '',
        };
        setMaxIndex(maxIndex + 1);
        setSangSilList(sangSilList.concat(list));
    }

    const onChangeSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    useEffect(() => {
        if (maxIndex > 0) {
            listToInput(sangSilList[clickIndex]);
        }
    }, [clickIndex]);

    const sendSelectSangSilSinGo = async () => {
        if (checkedItems.length === 0) {
            alert("1개 이상 선택해주세요.");
            return;
        }
        setCheckedItems(checkedItems.sort());
        const sendData = sangSilList.map((data) => {
            for (let i = 0; i < checkedItems.length; i++) {
                if (data.index === checkedItems[i]) {
                    data.sangsildt = data.sangsildt.split("-").join("");
                    data.geunrojargno = data.geunrojargno.split("-").join("");
                    return data;
                }
            }
        }).filter(el => el);
        const res = await axios.post("SangSilSinGoTest", sendData);
        console.log(res);

        // 초기화
        setSangSilList([]);
        setCheckedItems([]);
    }

    const inputToList = () => {
        setSangSilList(
            sangSilList.map((data) => data.index === clickIndex ? {
                ...data,
                username: username,
                sangsildt: sangsildt,
                npssangsilbuhocd: npssangsilbuhocd,
                nhicsangsilbuhocd: nhicsangsilbuhocd,
                sangsilsayudetail: sangsilsayudetail,
                dbosuchongak: dbosuchongak,
                dsanjengmm: dsanjengmm,
                jbosuchongak: jbosuchongak,
                jsanjengmm: jsanjengmm,
                geunrojargno: geunrojargno,
                gwanrino: gwanrino
            }
                :
                data
            ));
    };

    const onChangeCheckBox = (checked: boolean, id: number) => {
        if (checked) {
            setCheckedItems(prev => [...prev, id])
        } else {
            setCheckedItems(checkedItems.filter((el) => el !== id));
        }
    };

    useEffect(() => {
        console.log("SangSilSinGo");
        console.log("debug");
    }, []);

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
                        <p>① 고용보험법 개정에 따라 2020.8.28.부터 이직확인서 제출기관이 근로복지공단에서 고용노동부 고용복지플러스센터로 변경됩니다. 제도 개편에 따른 변경 작업으로 이직확인서 제출이 어려운 경우,
                            <a href="https://www.ei.go.kr">고용보험홈페이지</a>를 이용해주시기 바랍니다.</p>
                        <p>② 고용보험의 상실(이직)신고를 사실과 다르게 신고할 경우 과태료 부과됩니다.(신고 후 정정하는 경우 포함) 어떠한 사유에 해당하는지 혼동된다면
                            고용센터(국번없이 1350 상담①)에 미리 연락하여 문의 후 신고하여 주시기 바랍니다.
                        </p>
                        <p>③ 2019년(귀속) 보수총액은‘보수총액신고서’로 보험료를 정산하므로 근로자 자격상실신고서의 전년도 보수총액은 근로자의 상실일이 2021.1.2.인 경우부터 입력가능합니다.</p>
                        <p>④ 근로자의 보험료 부과구분부호가 착오 신고되어 ‘고용종료근로자 보수총액 구분신고서’가 연계되는 경우 근로자고용 정보정정신청에서 보험료 부과구분부호 정정 후 자격상실신고하시기 바랍니다.</p>
                        <p>⑤ 보수총액신고된 퇴직근로자의 보수 수정은 『고용종료근로자 보수총액 수정신고서』를 제출하시기 바랍니다.</p>
                    </h5>
                </div>
                <div>
                    <Row>
                        <Col>
                            <p className="text-start">
                                <Button className="mb-1" variant="link" href="/ui/extended/rangesliders">업무현황바로가기 <i className="mdi mdi-chevron-double-right"></i></Button>
                            </p>
                            <Button onClick={onCreate}>testAdd</Button>
                        </Col>
                        <Col>
                            <p className="text-end">
                                <Button className="mb-1">신고 대상자 조회</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button className="mb-1" onClick={toggleSingo2} >선택 근로자 신고</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <div className="table-responsive text-center">
                            <Table className="table-bordered" hover>
                                <thead className="table-madegray" style={{ color: "#a3a7ad" }}>
                                    <tr>
                                        <th style={{ width: "8%" }}>#</th>
                                        <th style={{ width: "17%" }}>이름</th>
                                        <th style={{ width: "18%" }}>주민번호</th>
                                        <th style={{ width: "18%" }}>퇴사일</th>
                                        <th style={{ width: "19%" }}>해당연도보수총액</th>
                                        <th style={{ width: "20%" }}>상세 정보</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sangSilList.map((data: SangSilSinGoType, index: number) => (
                                        <tr key={index}>
                                            <td ><input type="checkbox" name={`${data.index}`} checked={checkedItems.includes(data.index) ? true : false} onChange={(e) => onChangeCheckBox(e.target.checked, index)}></input></td>
                                            <td>{data.username}</td>
                                            <td>{data.geunrojargno}</td>
                                            <td>{data.sangsildt}</td>
                                            <td>{data.dbosuchongak}</td>
                                            <td><Button size="sm" variant="link" onClick={() => { toggleSangse(); setClickIndex(index); }}>상세 입력</Button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>

                {/* QnA 모달 */}
                <Modal show={isOpen5} onHide={toggleQnA}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <h5 className="text-white">4대보험 상실신고</h5>

                    </Modal.Header>
                    <Modal.Body className="qna">
                        <Row>
                            <Col>
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>4대보험취득신고란?</p>
                                <p className="font-15">
                                    직원이 퇴사할 때 해야 하는 신고입니다.
                                    퇴사일을 기준으로 다음 달 15일까지 상실 신고를 진행해야 합니다
                                    < br />
                                    4대 보험 상실 신고기한 < br />
                                    - 퇴사일 기준 다음 달 15일까지
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
                <Modal show={isOpen22} onHide={toggleSangse} backdrop={"static"}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <h5 className="text-white">상세입력</h5>

                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>이름 <br />
                                    <input className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="나이스" name='username' onChange={onChange} value={username}></input>
                                </p>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주민번호 <br />
                                    <input className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="8912151685545" name='geunrojargno' onChange={onChange} value={geunrojargno}></input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>퇴사일<br />
                                    <input className="form-control" type="date" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} name='sangsildt' onChange={onChange} value={sangsildt}></input>
                                </p>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>관리번호<br />
                                    <input className="form-control" type="number" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} name='gwanrino' onChange={onChange} value={gwanrino} placeholder="35212089641"></input>
                                </p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0 " style={{ fontSize: "14px", color: "#a3a3a3" }}>국민연금 상실부호<br />
                                    <select className="form-select" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} name='npssangsilbuhocd' onChange={onChangeSelectBox} value={npssangsilbuhocd}>
                                        <option>-- 상실부호 선택 --</option>
                                        <option value="0">0 - 국민연금 상실 부호 - 사망</option>
                                        <option value="1">1 - 사용관계종료</option>
                                        <option value="2">2 - 국적상실국외이주</option>
                                        <option value="3">3 - 육십세도달</option>
                                        <option value="4">4 - 다른공적연금가입</option>
                                        <option value="5">5 - 전출통폐합</option>
                                        <option value="6">6 - 국민기초생활보장법에따른수급자</option>
                                        <option value="7">7 - 노령연금수급권취득자중특수직종60세미만</option>
                                        <option value="8">8 - 협정국연금가입</option>
                                        <option value="9">9 - 체류기간만료외국인</option>
                                        <option value="10">10 - 적용제외체류자격외국인</option>
                                    </select>
                                </p>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>건강보험 상실부호<br />
                                    <select className="form-select" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} name="nhicsangsilbuhocd" onChange={onChangeSelectBox} value={nhicsangsilbuhocd}>
                                        <option>-- 상실부호 선택 --</option>
                                        <option value="0">0 - 건강보험 상실 부호 - 퇴직</option>
                                        <option value="1">1 - 사망</option>
                                        <option value="2">2 - 의료급여수급권자</option>
                                        <option value="3">3 - 유공자등건강보험배제신청</option>
                                        <option value="4">4 - 기타외국인당연적용제외등</option>
                                    </select>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}> 구체적사유<br />
                                    <input
                                        className="form-control" name="sangsilsayudetail" type="text" value={sangsilsayudetail} onChange={onChange} style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="퇴사">
                                    </input>
                                </p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>해당연도 보수총액
                                    <input
                                        className="form-control" name="dbosuchongak" type="text" value={dbosuchongak} onChange={onChange} style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="5000">
                                    </input>
                                </p>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}> 해당연도 근무개월수
                                    <input
                                        className="form-control" name="dsanjengmm" type="number" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} value={dsanjengmm} onChange={onChange} placeholder="10">
                                    </input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>전년도 보수총액
                                    <input
                                        className="form-control" name="jbosuchongak" type="text" value={jbosuchongak} onChange={onChange} style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="5000">
                                    </input>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>전년도 근무개월수
                                    <input
                                        className="form-control" name="jsanjengmm" type="number" value={jsanjengmm} onChange={onChange} style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="12">
                                    </input>
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button size="sm" variant="link" type="submit" onClick={sendSangSilSinGo} >
                            신고
                        </Button> */}
                        <Button size="sm" variant="link" type="submit" onClick={() => { toggleSangse(); inputToList(); }} >
                            저장
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* 선택근로자 신고 버튼 */}
                <Modal show={isOpen23} onHide={toggleSingo2}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <h5 className="text-white">4대보험 상실신고</h5>

                    </Modal.Header>
                    <Modal.Body className="qna">
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
                        <Button size="sm" variant="link" type="submit" onClick={() => { toggleSingo2(); sendSelectSangSilSinGo(); }}>
                            예
                        </Button>
                        <Button size="sm" variant="link" type="submit" onClick={toggleSingo2} >
                            취소
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const Jagyeogsangsilsingo = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'근로자 자격상실신고'}
            />
            <SangSilSinGo />
        </>
    );
};

export default Jagyeogsangsilsingo;