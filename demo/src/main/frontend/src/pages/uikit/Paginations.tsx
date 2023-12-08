import { Row, Col, Card, Button, Pagination, Modal, Table } from 'react-bootstrap';
import { PageTitle } from 'components';
import { useToggle } from 'hooks';
import { ChangeEvent, SetStateAction, useState , useEffect } from 'react';
import axios from 'axios';



const Sangsilsingo = () => {
    const [isOpen5, toggleQnA] = useToggle();
    const [isOpen22, toggleSangse] = useToggle();
    const [isOpen23, toggleSingo2] = useToggle();
    // input 숫자 "," 찍기
    const [numOlhaebosu, setnumOlhaebosu] = useState(0);
    const [numJeonnyeondobosu, setnumJeonnyeondobosu] = useState(0);
    const inputPriceFormat = (str: any) => {
        const comma = (str: any) => {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
        };
        const uncomma = (str: any) => {
            str = String(str);
            return str.replace(/[^\d]+/g, "");
        };
        return comma(uncomma(str));
    };


    // 국민연금 상실부호 select option
    const yeongeumsangsilselectList = ["사망", "사용관계 종료", "국적상실(국외이주)", "60세 도달",
        "다른 공적연금 가입", "전출(통·폐합)", "⌜국민기초생활 보장법⌟ 에 따른 수급자",
        "(조기)노령연금 수급권 취득자(조기노령연금의 지급이 정지중인 경우는 제외)",
        "협정국 연금가입", "체류기간 만료(외국인)", "적용제외 체류자격(외국인)",
    ];
    const [yeongeumsangsilSelected, setyeongeumsangsilSelected] = useState("");

    const yeongeumsangsilhandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setyeongeumsangsilSelected(e.target.value);
    };

    // 건강보험 상실부호 select option
    const geongangboheomsangsilselectList = ["퇴직", "사망", "의료급여수급권자", "유공자등 건강보험 배제신청",
        "국적상실", "이민출국", "가입제외(외국의 법령)", "가입제외(외국의 보험)", "가입제외(사용자와의 계약)",
        "무보수 대표이사", "그밖의 사유(외국인 체류기간만료 등)",
    ];
    const [geongangboheomsangsilSelected, setgeongangboheomsangsilSelected] = useState("");

    const geongangboheomsangsilhandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setgeongangboheomsangsilSelected(e.target.value);
    };

    // 산재보험 상실사유 select option
    const sanjaesangsilsayuselectList = ["11. 개인사정으로 인한 자진퇴사", "12. 사업장 이전, 근로조건변동, 임금체불 등으로 자진퇴사",
        "22. 폐업·도산", "23. 경영상 필요 및 회사불황으로 인원감축 등에 의한 퇴사(해고· 권고사직 · 명예퇴직 포함)",
        "26. 예술인· 근로자의 귀책사유 의한 징계해고 · 권고사직", "31. 정년", "32. 계약기간만료, 공사종료",
        "41. 고용보험 비적용", "42. 이중고용", "43. 노무제공자 월보수액의 소득기준 미충족",
        "45. 노무제공플랫폼을 이용한 노무제공 종료에 따른 이직",
    ];
    const [sanjaesangsilsayuSelected, setsanjaesangsilsayuSelected] = useState("");

    const sanjaesangsilsayuhandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setsanjaesangsilsayuSelected(e.target.value);
    };

    // 고용보험 상실사유 select option
    const goyongsangsilsayuselectList = ["11. 개인사정으로 인한 자진퇴사", "12. 사업장 이전, 근로조건변동, 임금체불 등으로 자진퇴사",
        "22. 폐업·도산", "23. 경영상 필요 및 회사불황으로 인원감축 등에 의한 퇴사(해고· 권고사직 · 명예퇴직 포함)",
        "26. 예술인· 근로자의 귀책사유 의한 징계해고 · 권고사직", "31. 정년", "32. 계약기간만료, 공사종료",
        "41. 고용보험 비적용", "42. 이중고용", "43. 노무제공자 월보수액의 소득기준 미충족",
        "45. 노무제공플랫폼을 이용한 노무제공 종료에 따른 이직",
    ];
    const [goyongsangsilsayuSelected, setgoyongsangsilsayuSelected] = useState("");

    const goyongsangsilsayuhandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setgoyongsangsilsayuSelected(e.target.value);
    };

    // 구체적사유 select option
    const guchejeogsayuselectList = ["다른 직장으로 옮기기 위해 이직한 경우", "본인이나 가족사업 등을 하기 위하여 이직한 경우",
        "결혼,출산,육아를 이유로 이직한 경우", "본인이 쉬고 싶어서 이직하는 경우",
        "회사사정으로 인한 휴업,휴직이 계속되어 이직하는경우", "31. 정년", "임금 등의 체불 또는 지연지급이 계속되어 이직하는 경우",
        "기타",
    ];
    const [guchejeogsayuSelected, setguchejeogsayuSelected] = useState("");

    const guchejeogsayuhandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setguchejeogsayuSelected(e.target.value);
    };



    // input 값 내보내기 
    const [inputs, setInputs] = useState({
        olhaegeunmugaewolsu: "",
        jeonnyeondogeunmugaewolsu: "",

    });
    const { olhaegeunmugaewolsu, jeonnyeondogeunmugaewolsu,
    } = inputs;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            olhaegeunmugaewolsu: "",
            jeonnyeondogeunmugaewolsu: "",
        });
    };

    async function postData() {
        try {
            const response = await axios.post('url?', {
                olhaegeunmugaewolsu: "",
                jeonnyeondogeunmugaewolsu: "",
            });
            console.log(response);
        } catch (error) {
            // 응답실패
            console.error(error);
        }
    };

    // useEffect

    const [name, setName] = useState('')
    const [jumin, setJumin] = useState('')
    const [toesail, setToesail] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('url');
                setName(res.data[0].name)
                setJumin(res.data[0].jumin)
                setToesail(res.data[0].toesail)
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
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
                            고용보험홈페이지(https://www.ei.go.kr)를 이용해주시기 바랍니다.</p>
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
                            <Table className="mb-0" hover>
                                <thead className="table-primary">
                                    <tr>
                                        <th style={{ width: "30px" }}>#</th>
                                        <th>이름</th>
                                        <th>주민번호</th>
                                        <th>퇴사일</th>
                                        <th>해당연도보수총액</th>
                                        <th>상세 정보</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ width: "30px" }}><input type="checkbox"></input></td>
                                        <td>{name}</td>
                                        <td>{jumin}</td>
                                        <td>{toesail}</td>
                                        <td>{numOlhaebosu}</td>
                                        <td><Button size="sm" variant="link" onClick={toggleSangse}>상세 입력</Button></td>
                                    </tr>
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
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>이름 <br />
                                    <input style={{ border: "1px solid #EEEEEE", outline: "none" }} value={name} readOnly></input>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>주민번호 <br />
                                    <input style={{ border: "1px solid #EEEEEE", outline: "none" }} value={jumin} readOnly></input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>퇴사일<br />
                                    <input style={{ width: "183px", border: "1px solid #EEEEEE", outline: "none" }} value={toesail} readOnly></input>
                                </p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>국민연금 상실부호<br />
                                    <select name="yeongeumbox" style={{ width: "185px", border: "1px solid #EEEEEE" }}
                                        onChange={yeongeumsangsilhandleSelect} value={yeongeumsangsilSelected}
                                    >
                                        {yeongeumsangsilselectList.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>건강보험 상실부호<br />
                                    <select name="geongangbox" style={{ width: "185px", border: "1px solid #EEEEEE" }}
                                        onChange={geongangboheomsangsilhandleSelect} value={geongangboheomsangsilSelected}
                                    >
                                        {geongangboheomsangsilselectList.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}> 산재보험 상실사유<br />
                                    <select name="sanjaesayubox" style={{ width: "185px", border: "1px solid #EEEEEE" }}
                                        onChange={sanjaesangsilsayuhandleSelect} value={sanjaesangsilsayuSelected}
                                    >
                                        {sanjaesangsilsayuselectList.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}> 고용보험 상실사유<br />
                                    <select name="goyongsayubox" style={{ width: "185px", border: "1px solid #EEEEEE" }}
                                        onChange={goyongsangsilsayuhandleSelect} value={goyongsangsilsayuSelected}
                                    >
                                        {goyongsangsilsayuselectList.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}> 구체적사유<br />
                                    <select name="guchejeogsayubox" style={{ width: "185px", border: "1px solid #EEEEEE" }}
                                        onChange={guchejeogsayuhandleSelect} value={guchejeogsayuSelected}
                                    >
                                        {guchejeogsayuselectList.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>해당연도 보수총액
                                    <input id="olhaebosu" type="text" value={numOlhaebosu}
                                        onChange={(e) => setnumOlhaebosu(inputPriceFormat(e.target.value))}
                                        style={{ border: "1px solid #EEEEEE", outline: "none" }}>
                                    </input>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}> 해당연도 근무개월수
                                    <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                        name="olhaegeunmugaewolsu" onChange={onChange} value={olhaegeunmugaewolsu}>
                                    </input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>전년도 보수총액
                                    <input id="Jeonnyeondobosu" type="text" value={numJeonnyeondobosu}
                                        onChange={(e) => setnumJeonnyeondobosu(inputPriceFormat(e.target.value))}
                                        style={{ border: "1px solid #EEEEEE", outline: "none" }}>
                                    </input>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>전년도 근무개월수
                                    <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                        name="jeonnyeondogeunmugaewolsu" onChange={onChange} value={jeonnyeondogeunmugaewolsu}>
                                    </input>
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="link" type="submit" onClick={toggleSangse} >
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
                        <Button size="sm" variant="link" type="submit" onClick={toggleSingo2}>
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
            <Row>
                <Col >
                    <Sangsilsingo />
                </Col>
            </Row>
        </>
    );
};

export default Jagyeogsangsilsingo;


// 기존에 만든것

{/* <Row>
                    <Col>
                        <div className="table-responsive mt-2 text-center">
                            <table className="table table-bordered table-centered text-black">
                                <thead className="table-light">
                                    <tr>
                                        <th colSpan={4}>사업장정보</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>사업장관리번호</td>
                                        <td colSpan={3} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>보험구분</td>
                                        <td colSpan={3} className="text-start">
                                            <input type="checkbox"></input>  고용보험 &nbsp;&nbsp; <input type="checkbox"></input> 산재보험&nbsp;&nbsp;
                                            <input type="checkbox"></input> 국민연금 &nbsp;&nbsp; <input type="checkbox"></input> 건강보험
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>사업장명칭</td>
                                        <td colSpan={1} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>사무대행기관번호</td>
                                        <td colSpan={1} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>사무대행기관명칭</td>
                                        <td colSpan={3} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>하수급인 관리번호</td>
                                        <td colSpan={3} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="table-responsive mt-2 text-center">
                            <table className="table table-bordered table-centered text-black">
                                <thead className="table-light">
                                    <tr>
                                        <th colSpan={7}>자격상실신고내역</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>연번</td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>보험구분 *</td>
                                        <td colSpan={5} className="text-start">
                                            <input type="checkbox"></input> 고용보험 &nbsp;&nbsp; <input type="checkbox"></input> 산재보험 &nbsp;&nbsp;
                                            <input type="checkbox"></input> 국민연금 &nbsp;&nbsp; <input type="checkbox"></input> 건강보험
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>1</td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>주민(외국인)등록번호 *</td>
                                        <td colSpan={2} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>성명 *</td>
                                        <td colSpan={2} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>전화번호</td>
                                        <td colSpan={6} className="text-start"><input type="number" style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2} className="table-madegray" style={{ border: "1px solid #DCDCDC" }} > 고용보험</td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>상실일 *</td>
                                        <td colSpan={1} className="text-start"><input type="date" style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>해당년도 보수총액</td>
                                        <td colSpan={1} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input> &nbsp;&nbsp;원</td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>전년도 보수총액</td>
                                        <td colSpan={1} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input> &nbsp;&nbsp;원</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>상실사유 *</td>
                                        <td colSpan={6} className="text-start">구분코드   &nbsp;&nbsp;
                                            <select name="seclctbox1" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>구분코드 선택하기</option>
                                                <option value="goyong1">11. 개인사정으로 인한 자진퇴사</option>
                                                <option value="goyong2">12. 사업장 이전, 근로조건변동, 임금체불 등으로 자진퇴사</option>
                                                <option value="goyong3">22. 폐업·도산</option>
                                                <option value="goyong4">23. 경영상 필요 및 회사불황으로 인원감축 등에 의한 퇴사(해고· 권고사직 · 명예퇴직 포함)</option>
                                                <option value="goyong5">26. 예술인· 근로자의 귀책사유 의한 징계해고 · 권고사직</option>
                                                <option value="goyong6">31. 정년</option>
                                                <option value="goyong7">32. 계약기간만료, 공사종료</option>
                                                <option value="goyong8">41. 고용보험 비적용</option>
                                                <option value="goyong9">42. 이중고용</option>
                                                <option value="goyong10">43. 노무제공자 월보수액의 소득기준 미충족</option>
                                                <option value="goyong11">45. 노무제공플랫폼을 이용한 노무제공 종료에 따른 이직</option>
                                            </select>  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                                            구체적사유 &nbsp;&nbsp;
                                            <select name="seclctbox2" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>구체적사유 선택하기</option>
                                                <option value="sangsilsayu1">다른 직장으로 옮기기 위해 이직한 경우</option>
                                                <option value="sangsilsayu2">본인이나 가족사업 등을 하기 위하여 이직한 경우</option>
                                                <option value="sangsilsayu3">결혼,출산,육아를 이유로 이직한 경우</option>
                                                <option value="sangsilsayu4">본인이 쉬고 싶어서 이직하는 경우</option>
                                                <option value="sangsilsayu5">회사사정으로 인한 휴업,휴직이 계속되어 이직하는경우</option>
                                                <option value="sangsilsayu6">임금 등의 체불 또는 지연지급이 계속되어 이직하는 경우</option>
                                                <option value="sangsilsayu7">기타</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>산재보험</td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>상실일 *</td>
                                        <td colSpan={1} className="text-start"><input type="date" style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>해당년도 보수총액</td>
                                        <td colSpan={1} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input> 원</td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>전년도 보수총액</td>
                                        <td colSpan={1} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input>원</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>상실사유</td>
                                        <td colSpan={5} className="text-start">구분코드 &nbsp;&nbsp;&nbsp;&nbsp;
                                            <select name="seclctbox3" style={{ width: "200px", border: "1px solid #EEEEEE" }} disabled>
                                                <option>구분코드 선택</option>
                                            </select> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            구체적 사유 &nbsp;&nbsp;
                                            <select name="seclctbox4" style={{ width: "200px", border: "1px solid #EEEEEE" }} disabled>
                                                <option>구체적사유 선택</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>국민연금</td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>상실일 *</td>
                                        <td colSpan={3} className="text-start"><input type="date" style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>상실부호 *</td>
                                        <td colSpan={1} className="text-start">
                                            <select name="seclctbox5" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>상실부호 선택</option>
                                                <option value="sangsilbuho1">사망</option>
                                                <option value="sangsilbuho2">사용관계 종료</option>
                                                <option value="sangsilbuho3">국적상실(국외이주)</option>
                                                <option value="sangsilbuho4">60세 도달</option>
                                                <option value="sangsilbuho5">다른 공적연금 가입</option>
                                                <option value="sangsilbuho6">전출(통·폐합)</option>
                                                <option value="sangsilbuho7">⌜국민기초생활 보장법⌟ 에 따른 수급자</option>
                                                <option value="sangsilbuho8">(조기)노령연금 수급권 취득자(조기노령연금의 지급이 정지중인 경우는 제외)</option>
                                                <option value="sangsilbuho9">협정국 연금가입</option>
                                                <option value="sangsilbuho10">체류기간 만료(외국인)</option>
                                                <option value="sangsilbuho11">적용제외 체류자격(외국인)</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>초일취득·당월상실자 납부여부</td>
                                        <td colSpan={5} className="text-start"><input type="checkbox"></input>  &nbsp;&nbsp; 희망</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>건강보험</td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>상실일 *</td>
                                        <td colSpan={3} className="text-start"><input type="date" style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>상실부호 *</td>
                                        <td colSpan={1} className="text-start">
                                            <select name="seclctbox6" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>상실부호 선택</option>
                                                <option value="gugminsangsil1">퇴직</option>
                                                <option value="gugminsangsil2">사망</option>
                                                <option value="gugminsangsil3">의료급여수급권자</option>
                                                <option value="gugminsangsil4">유공자등 건강보험 배제신청</option>
                                                <option value="gugminsangsil5">국적상실</option>
                                                <option value="gugminsangsil6">이민출국</option>
                                                <option value="gugminsangsil7">가입제외(외국의 법령)</option>
                                                <option value="gugminsangsil8">가입제외(외국의 보험)</option>
                                                <option value="gugminsangsil9">가입제외(사용자와의 계약)</option>
                                                <option value="gugminsangsil10">무보수 대표이사</option>
                                                <option value="gugminsangsil11">그밖의 사유(외국인 체류기간만료 등)</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>연간 보수총액 *</td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>당해년도 보수총액</td>
                                        <td colSpan={2} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input> 원</td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>당해년도 근무개월수</td>
                                        <td colSpan={1} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>전년도 보수총액</td>
                                        <td colSpan={2} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input> 원</td>
                                        <td colSpan={1} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>전년도 근무개월수</td>
                                        <td colSpan={1} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-start mb-1"> • 상실일은 퇴사일, 이직일, 사망일 등 사유발생일의 다음날로 입력하시기 바랍니다. (2021.12.31.에 퇴사한 경우 상실일은 2022.1.1.로 입력) </p>
                            <p className="text-start"> • 전년도 보수총액이 없는 상실자의 경우는 “전년도보수총액”에 “0”원을 입력합니다. </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-sm-end">
                        <Button variant="primary" type="submit">
                            접수하기
                        </Button>
                    </Col>
                </Row> */}