import { Row, Col, Card, Button, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useToggle } from 'hooks';
import { PageTitle } from 'components';
import { useModal } from './hooks';
import Select from 'react-select';
import LayoutWidth from 'components/ThemeCustomizer/LayoutWidth';
import React, { useEffect } from 'react';
import { useState,  SetStateAction, } from 'react';
import axios from 'axios';

const Chwideugsingoseo = () => {
    const [isOpen5, toggleQnA] = useToggle();
    const [isOpen21, toggleSangse] = useToggle();
    const [isOpen30, toggleSingo] = useToggle();
    const [isOpen31, toggleSingo3] = useToggle();

    const [numMonthlybosu, setnumMonthlybosu] = useState(0);
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

    // 국민연금 취득부호 select option
    const yeongeumchwideugselectList = ["18세 이상 당연취득", "18세 미만 취득", "전입(사업장 통•폐합)",
        "대학강사", "60시간 미만 신청 취득", "일용근로자, 단시간근로자 등",
    ];
    const [yeongeumchwideugSelected, setyeongeumchwideugSelected] = useState("");

    const yeongeumchwideughandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setyeongeumchwideugSelected(e.target.value);
    };
    // 건강보험 취득부호 select option
    const geongangchwideugselectList = ["최초취득", "의료급여수급권자 해제", "직장가입자 변경",
        "직장피부양자 상실", "지역가입자에서 변경", "국가유공자 상실", "기타", "직권말소후 재등록",
        "직장가입자 이중가입",
    ];
    const [geongangchwideugSelected, setgeongangchwideugSelected] = useState("");

    const geongangchwideughandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setgeongangchwideugSelected(e.target.value);
    };

    // 직종 select option  db에있는 데이터를 불러와서 select 에 뿌려주고 선택값 다시 저장
    const jigjongselectList = [""];
    const [jigjongSelected, setjigjongSelected] = useState("");

    const jigjonghandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setjigjongSelected(e.target.value);
    };

    // 국적 select option  db에있는 데이터를 불러와서 select 에 뿌려주고 선택값 다시 저장
    const gukjeokselectList = [""];
    const [gukjeokSelected, setgukjeokSelected] = useState("");

    const gukjeokhandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setgukjeokSelected(e.target.value);
    };


    // 체류자격 select option  db에있는 데이터를 불러와서 select 에 뿌려주고 선택값 다시 저장
    const chelyujagyeogselectList = [""];
    const [chelyujagyeogSelected, setchelyujagyeogSelected] = useState("");

    const chelyujagyeoghandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setchelyujagyeogSelected(e.target.value);
    };



    // input 값 내보내기 
    const [inputs, setInputs] = useState({
        gyeyagjigyeobu: "",
        daepyoyeobu: "",
    });
    const { gyeyagjigyeobu, daepyoyeobu, } = inputs;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            gyeyagjigyeobu: "",
            daepyoyeobu: "",
        });
    };


    async function postData() {
        try {
            const response = await axios.post('url?', {
                gyeyagjigyeobu: "",
                numMonthlybosu: "",
                daepyoyeobu: "",
            });
            console.log(response);
        } catch (error) {
            // 응답실패
            console.error(error);
        }
    };


    // useEffect

    const [geunloname, setGeunloname] = useState('')
    const [jumin, setJumin] = useState('')
    const [ibsail, setIbsail] = useState('')
    const [gyeyagend, setGyeyagend] = useState('')
    const [weekMinh, setWeekMinh] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('url');
                setGeunloname(res.data[0].geunloname)
                setJumin(res.data[0].jumin)
                setIbsail(res.data[0].ibsail)
                setGyeyagend(res.data[0].gyeyagend)
                setWeekMinh(res.data[0].weekMinh)
                setjigjongSelected(res.data[0].jigjongSelected)
                setgukjeokSelected(res.data[0].gukjeokSelected)
                setchelyujagyeogSelected(res.data[0].chelyujagyeogSelected)
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
                                <Button className="mb-1">신고 대상자 조회</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <Button className="mb-1" onClick={toggleSingo}>선택 근로자 신고</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <div>
                            <div className="table-responsive  text-center">
                                <Table className="mb-0 " hover>
                                    <thead className="table-primary">
                                        <tr>
                                            <th style={{ width: "30px" }}>#</th>
                                            <th style={{ width: "100px" }}>이 름</th>
                                            <th style={{ width: "150px" }}>주민번호</th>
                                            <th style={{ width: "150px" }}>입사일</th>
                                            <th style={{ width: "100px" }}>직 종</th>
                                            <th style={{ width: "150px" }}>월평균보수</th>
                                            <th style={{ width: "100px" }}>상세 정보</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "30px" }}><input type="checkbox"></input></td>
                                            <td style={{ width: "100px" }}>{geunloname}</td>
                                            <td style={{ width: "150px" }}>{jumin}</td>
                                            <td style={{ width: "150px" }}>{ibsail}</td>
                                            <td style={{ width: "100px" }}></td>
                                            <td style={{ width: "150px" }}>{numMonthlybosu}</td>
                                            <td style={{ width: "100px" }}>
                                                <Button size="sm" variant="link" onClick={toggleSangse}>상세입력</Button>
                                            </td>
                                        </tr> 
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
                        <h5 className="text-white">상세입력</h5>

                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>이름 <br />
                                    <input style={{ border: "1px solid #EEEEEE", outline: "none" }} value={geunloname} readOnly></input>
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
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>국적 <br />
                                    <select name="gukjeokbox" style={{ width: "183px", border: "1px solid #EEEEEE", outline: "none" }}
                                        onChange={gukjeokhandleSelect} value={gukjeokSelected}
                                    >
                                        {gukjeokselectList.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}> 체류자격<br />
                                    <select name="chelyujagyeogbox" style={{ width: "183px", border: "1px solid #EEEEEE", outline: "none" }}
                                        onChange={chelyujagyeoghandleSelect} value={chelyujagyeogSelected}
                                    >
                                        {chelyujagyeogselectList.map((item) => (
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
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>입사일 <br />
                                    <input style={{ width: "183px", border: "1px solid #EEEEEE", outline: "none" }} value={ibsail}></input>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>계약종료일 <br />
                                    <input style={{ width: "183px", border: "1px solid #EEEEEE", outline: "none" }}name="gyeyagend" value={gyeyagend}></input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>주소정근로시간(최대40h) <br />
                                    <input style={{ border: "1px solid #EEEEEE", outline: "none" }} name="weekMinh" value={weekMinh}></input>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>월평균보수 <br />
                                    <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                        type="text" name="monthlybosu1"
                                        value={numMonthlybosu}
                                        onChange={(e) => setnumMonthlybosu(inputPriceFormat(e.target.value))}>
                                    </input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>직종 <br />
                                    <select name="sgeongangchwideugbox" style={{ width: "183px", border: "1px solid #EEEEEE", outline: "none" }}
                                        onChange={jigjonghandleSelect} value={jigjongSelected}
                                    >
                                        {jigjongselectList.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>계약직여부 <br />
                                    <input type="radio" name="gyeyagjig-yeobu" value={gyeyagjigyeobu} id="gyeyagjig_y" onChange={onChange}></input> 예 &nbsp;&nbsp;
                                    <input type="radio" name="gyeyagjig-yeobu" value={gyeyagjigyeobu} id="gyeyagjig_n" onChange={onChange}></input> 아니오
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>대표자여부<br />
                                    <input type="radio" name="daepyoyeobu" value={daepyoyeobu} id="daepyo_y" onChange={onChange}></input> 예 &nbsp;&nbsp;
                                    <input type="radio" name="daepyoyeobu" value={daepyoyeobu} id="daepyo_n" onChange={onChange}></input> 아니오
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <p className="mb-1 text-black font-16" style={{ fontWeight: 'bold' }}>취득부호</p>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16"> 국민연금 <br />
                                    <select name="yeongeumchwideugbox" style={{ width: "183px", border: "1px solid #EEEEEE", outline: "none" }}
                                        onChange={yeongeumchwideughandleSelect} value={yeongeumchwideugSelected}
                                    >
                                        {yeongeumchwideugselectList.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </p>
                            </Col>
                            <Col className="mb-2">
                                <p className="mb-0 text-black font-16"> 건강보험<br />
                                    <select name="geongangchwideugbox" style={{ width: "183px", border: "1px solid #EEEEEE", outline: "none" }}
                                        onChange={geongangchwideughandleSelect} value={geongangchwideugSelected}
                                    >
                                        {geongangchwideugselectList.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
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
                        <Button size="sm" variant="link" type="submit" onClick={toggleSingo}>
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

            <Row>
                <Col>
                    <Chwideugsingoseo />
                </Col>
            </Row>




        </>
    );
};

export default Chwideugsingo;



{/* 기존에만든것 */ }

{/* <Row>
                    <Col>
                        <div className="table-responsive mt-2 text-center">
                            <table className="table table-bordered table-centered text-black">
                                <thead className="table-light">
                                    <tr>
                                        <th colSpan={8}>사업장정보</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={2} className="table-madegray" style={{ width: "20%", border: "1px solid #DCDCDC" }}>사업장관리번호 *</td>
                                        <td colSpan={6} className="text-start"><input style={{ width: "300px", border: "1px solid #EEEEEE", outline: "none" }}></input> &nbsp;&nbsp;
                                            <button type="submit" className="btn btn-link text-black">확인</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="table-madegray" style={{ width: "20%", border: "1px solid #DCDCDC" }}>보험구분 *</td>
                                        <td colSpan={6} className="text-start"><input type="checkbox"></input> 고용보험 &nbsp;&nbsp; <input type="checkbox"></input> 산재보험 &nbsp;&nbsp;
                                            <input type="checkbox"></input> 국민연금 &nbsp;&nbsp; <input type="checkbox"></input> 건강보험</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={1} className="table-madegray" style={{ width: "20%", border: "1px solid #DCDCDC" }}>사업장명칭</td>
                                        <td colSpan={3} style={{ width: "300px" }} className="text-start"><input style={{ width: "300px",  border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
                                        <td colSpan={1} className="table-madegray" style={{ width: "20%", }}>사무대행기관번호</td>
                                        <td colSpan={3} className="text-start"><input style={{ width: "300px",  border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="table-madegray" style={{ width: "20%", border: "1px solid #DCDCDC" }}>사무대행기관명칭</td>
                                        <td colSpan={6} className="text-start"><input style={{ width: "300px",  border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="table-madegray" style={{ width: "20%", border: "1px solid #DCDCDC" }}>하수급인 관리번호</td>
                                        <td colSpan={6} className="text-start"><input style={{ width: "300px",  border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
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
                                        <th colSpan={5}>자격취득신고내역</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-madegray" style={{ width: "10px", border: "1px solid #DCDCDC" }}>연번</td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>신청구분 *</td>
                                        <td colSpan={3} className="text-start"><input type="checkbox"></input> 고용보험 &nbsp;&nbsp; <input type="checkbox"></input> 산재보험 &nbsp;&nbsp;
                                            <input type="checkbox"></input> 국민연금 &nbsp;&nbsp; <input type="checkbox"></input> 건강보험</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3} className="table-madegray" style={{ width: "10px" }}><input style={{ width: "20px" }} disabled></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>주민(외국인)등록번호 *</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                            <button type="submit" className="btn btn-link text-black">확인</button>
                                        </td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>성명 *</td>
                                        <td className="text-start"><input style={{ width: "300px",  border: "1px solid #EEEEEE", outline: "none" }} readOnly ></input></td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>체류자격</td>
                                        <td className="text-start"><input style={{ width: "300px",  border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>국적</td>
                                        <td className="text-start"><input style={{ width: "300px",  border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>대표자여부</td>
                                        <td colSpan={3} className="text-start"><input type="checkbox"></input> 대표자</td>
                                    </tr>

                                </tbody>
                            </table>
                            <p className="text-start"> • 이미 취득정보가 있는 근로자는 신청구분에서 해당보험 체크를 해지하신후 입력하시기 바랍니다.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="table-responsive mt-2 text-center">
                            <table className="table table-bordered table-centered text-black">
                                <thead className="table-light">
                                    <tr>
                                        <th colSpan={6}>고용보험</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>월평균보수(원) *</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>취득일 *</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} type="date"></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>직종부호 *</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} readOnly></input> &nbsp;&nbsp;
                                            <Button variant="link" onClick={() => openModalWithClass('modal-dialog-centered')}>
                                                <i className="dripicons-search"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>1주소정근로시간 *</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>계약종료년월</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} type="date"></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>계약직여부 *</td>
                                        <td className="text-start"><input type="radio" name="yeobu"></input> 예 &nbsp;&nbsp; <input type="radio" name="yeobu"></input> 아니오</td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>보험료부과구분</td>
                                        <td colSpan={5} className="text-start">
                                            부호 &nbsp;&nbsp;
                                            <select name="seclctbox1" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>선택하기</option>
                                                <option value="buho1">실직 고직 산재부과</option>
                                                <option value="buho2">산재 고직 부과</option>
                                            </select> &nbsp;&nbsp;
                                            사유 &nbsp;&nbsp;
                                            <select name="seclctbox2" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>선택하기</option>
                                                <option value="sayu1">자활근로종사자(급여특례,차상위,생계급여 외 수급자)</option>
                                                <option value="sayu2">자활근로종사자(생계급여수급자)</option>
                                            </select>
                                        </td>
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
                                        <th colSpan={6}>산재보험</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>월평균보수(원) *</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>취득일 *</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} type="date"></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>직종부호 *</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} readOnly></input> &nbsp;&nbsp;
                                            <Button variant="link" onClick={() => openModalWithClass('modal-dialog-centered')}>
                                                <i className="dripicons-search"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>1주소정근로시간 *</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>계약종료년월</td>
                                        <td colSpan={3} className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} type="date"></input></td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>보험료부과구분</td>
                                        <td colSpan={5} className="text-start">
                                            부호 &nbsp;&nbsp;
                                            <select name="seclctbox3" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>선택하기</option>
                                                <option value="buho1">실직 고직 산재부과</option>
                                                <option value="buho2">산재 고직 부과</option>
                                            </select> &nbsp;&nbsp;
                                            사유 &nbsp;&nbsp;
                                            <select name="seclctbox4" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>선택하기</option>
                                                <option value="sayu1">자활근로종사자(급여특례,차상위,생계급여 외 수급자)</option>
                                                <option value="sayu2">자활근로종사자(생계급여수급자)</option>
                                            </select>
                                        </td>
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
                                        <th colSpan={6}>국민연금</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>소득월액(원) *</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>취득일 *</td>
                                        <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} type="date"></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>취득월 납부여부 *</td>
                                        <td className="text-start">
                                            <select name="seclctbox5" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>선택하기</option>
                                                <option value="chwideug1">희망</option>
                                                <option value="chwideug2">미희망</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>취득부호 *</td>
                                        <td className="text-start">
                                            <select name="seclctbox6" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>선택하기</option>
                                                <option value="chwibuho1">18세 이상 당연취득</option>
                                                <option value="chwibuho2">18세 미만 취득</option>
                                                <option value="chwibuho3">전입(사업장 통•폐합) </option>
                                                <option value="chwibuho4">대학강사</option>
                                                <option value="chwibuho5">60시간 미만 신청 취득</option>
                                                <option value="chwibuho6">일용근로자, 단시간근로자 등</option>
                                            </select>
                                        </td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>특수직종</td>
                                        <td colSpan={3} className="text-start">
                                            <select name="seclctbox7" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>선택하기</option>
                                                <option value="teugsujig1">광원</option>
                                                <option value="teugsujig2">부원</option>
                                                <option value="teugsujig3">없음</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>직역연금 부호</td>
                                        <td colSpan={5} className="text-start">
                                            <select name="seclctbox8" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option value="yeongeum1">없음</option>
                                                <option value="yeongeum2">직역연금가입자</option>
                                                <option value="yeongeum3">직역연금수급권자</option>
                                            </select>
                                        </td>
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
                                        <th colSpan={6}> 건강보험 </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>소득월액(원) *</td>
                                        <td  className="text-start"><input style={{ width: "200px", border: "1px solid #EEEEEE" }}></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>취득일 *</td>
                                        <td  className="text-start"><input style={{ width: "200px", border: "1px solid #EEEEEE" }} type="date"></input></td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>취득부호 *</td>
                                        <td className="text-start">
                                            <select name="seclctbox9" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>선택하기</option>
                                                <option value="chwibuho1">최초취득</option>
                                                <option value="chwibuho2">의료급여수급권자 해제</option>
                                                <option value="chwibuho3">직장가입자 변경</option>
                                                <option value="chwibuho4">직장피부양자 상실</option>
                                                <option value="chwibuho5">지역가입자에서 변경</option>
                                                <option value="chwibuho6">국가유공자 상실</option>
                                                <option value="chwibuho7">기타</option>
                                                <option value="chwibuho8">직권말소후 재등록</option>
                                                <option value="chwibuho9">직장가입자 이중가입</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>보험료감면부호</td>
                                        <td  className="text-start">
                                            <select name="seclctbox10" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>선택하기</option>
                                                <option value="boheomgammyeon1">해외근무 (전액)</option>
                                                <option value="boheomgammyeon2">해외근무 (반액)</option>
                                                <option value="boheomgammyeon3">현역 군 입대</option>
                                                <option value="boheomgammyeon4">상근예비역 (현역 입대)</option>
                                                <option value="boheomgammyeon5">상근예비역 (근무)</option>
                                                <option value="boheomgammyeon6">시설수용 (교도소)</option>
                                                <option value="boheomgammyeon7">시설수용 (기타)</option>
                                                <option value="boheomgammyeon8">섬 • 벽지 (사업장)</option>
                                                <option value="boheomgammyeon9">섬 • 벽지 (거주지)</option>
                                                <option value="boheomgammyeon10">휴직</option>
                                            </select>
                                        </td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>피부양자신청 *</td>
                                        <td colSpan={3} className="text-start"><input type="radio" name="pibuyangja"></input> 예 <input type="radio" name="pibuyangja"></input> 아니오</td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>공무원/교직원</td>
                                        <td colSpan={5} className="text-start">
                                            회계부호 &nbsp;&nbsp;
                                            <select name="seclctbox11" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>선택하기</option>
                                                <option value="hoegyebuho1">사립학교경영자부담</option>
                                                <option value="hoegyebuho2">국가일반</option>
                                                <option value="hoegyebuho3">지방공무원</option>
                                                <option value="hoegyebuho4">군인</option>
                                                <option value="hoegyebuho5">국제협력의사</option>
                                                <option value="hoegyebuho6">국군홍보관리사업</option>
                                                <option value="hoegyebuho7">국립영상간행물제작사업</option>
                                                <option value="hoegyebuho8">국유재산관리</option>
                                                <option value="hoegyebuho9">국립중앙과학관사업</option>
                                                <option value="hoegyebuho10">국립중앙극장사업</option>
                                            </select> &nbsp;&nbsp;
                                            직종부호 &nbsp;&nbsp;
                                            <select name="seclctbox12" style={{ width: "200px", border: "1px solid #EEEEEE" }}>
                                                <option>선택하기</option>
                                                <option value="jigjongbuho1">정무직</option>
                                                <option value="jigjongbuho2">일반직</option>
                                                <option value="jigjongbuho3">기능직</option>
                                                <option value="jigjongbuho4">공안직</option>
                                                <option value="jigjongbuho5">경찰,소방직</option>
                                                <option value="jigjongbuho6">1,2종 고용직</option>
                                                <option value="jigjongbuho7">경노무 고용직</option>
                                                <option value="jigjongbuho8">교육직</option>
                                                <option value="jigjongbuho9">법관, 검사</option>
                                                <option value="jigjongbuho10">일용직</option>
                                                <option value="jigjongbuho11">군인</option>
                                                <option value="jigjongbuho11">연구직</option>
                                                <option value="jigjongbuho11">공중보건의</option>
                                                <option value="jigjongbuho11">전임전문직</option>
                                                <option value="jigjongbuho11">청원경찰</option>
                                                <option value="jigjongbuho11">지도직</option>
                                                <option value="jigjongbuho11">원어민 영어교사</option>
                                                <option value="jigjongbuho11">계약직</option>
                                                <option value="jigjongbuho11">공익수의사</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Modal show={isOpen} onHide={toggleModal} dialogClassName={className}>
                            <Modal.Header onHide={toggleModal} closeButton>
                                <h4 className="modal-title">직종부호검색</h4>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="table-responsive mt-2 text-center">
                                    <table className="table table-bordered table-centered text-black">
                                        <thead className="table-light">
                                            <tr>
                                                <th>직업명</th>
                                                <th colSpan={2}><input></input> <button>조회</button></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>선택</td>
                                                <td>부호</td>
                                                <td>소분류직업명</td>
                                            </tr>
                                            <tr>
                                                <td><button>선택</button></td>
                                                <td>011</td>
                                                <td>의회의원 고위공무원 및 기업 고위임원</td>
                                            </tr>
                                            <tr>
                                                <td><button>선택</button></td>
                                                <td>012</td>
                                                <td>행정ㆍ경영ㆍ금융ㆍ보험 관리자</td>
                                            </tr>
                                            <tr>
                                                <td><button>선택</button></td>
                                                <td>013</td>
                                                <td>전문서비스 관리자</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-sm-end">
                        <Button variant="primary" type="submit">
                            접수하기
                        </Button>
                    </Col>
                </Row> */}