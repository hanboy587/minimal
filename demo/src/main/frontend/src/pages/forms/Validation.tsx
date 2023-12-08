import React from 'react';
import { Row, Col, Card, Button, InputGroup, Form, Modal, Table } from 'react-bootstrap';
import { PageTitle } from 'components';
import { useFormValidation } from './hooks';
import { useToggle } from 'hooks';
import { Link } from 'react-router-dom';
import { useModal } from './hooks';
import { useState, SetStateAction, useEffect } from 'react';
import axios from 'axios';

// 이직확인서(사)

const IjighwaginseoTip = () => {
    const { isValidated, handleSubmit } = useFormValidation();

    return (
        <Card>
            <Card.Body>
                <h4 className=" mb-3">작성요령</h4>

                <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
                    <h5>• 이직코드 및 이직사유 작성법</h5>
                    <p> 해당 이직자의 고용보험 피보험 자격 상실신고서에 적힌 상실사유의 구분코드를 적고,
                        보다 구체적인 이직사유는 반드시 10자 이상 작성합니다.
                    </p>
                    <p> ⌜상실(이직)사유 구분코드⌟</p>
                    <p>▸ 자진퇴사 : &nbsp; 11. 개인사정으로인한 자진퇴사,  &nbsp;&nbsp; 12. 사업장 이전, 근로조건 변동, 임금체불 등으로 자진퇴사</p>
                    <p>▸ 회사사정과 근로자 귀책사유에 의한 이직 :  &nbsp; 22. 폐업 · 도산 , &nbsp;&nbsp; 23. 경영상 필요 및 회사불황으로 인한 인원감축 등에 따른 퇴사(해고,권고사직,명예퇴직 포함),
                        <br />  &nbsp;&nbsp;&nbsp;&nbsp; 26. 근로자의 귀책사유에 의한 징계해고·권고사직
                    </p>
                    <p>▸ 정년 등 기간만료에 의한 이직 : &nbsp; 31. 정년 , &nbsp;&nbsp; 32. 계약기간 만료, 공사종료</p>
                    <p>▸ 기타:  &nbsp; 41. 고용보험 비적용 ,  &nbsp; &nbsp; 42. 이중고용</p>
                    <h5>• 피보험단위기간산정대상기간 및 보수지급기초일수, 통산피보험단위기간 작성법</h5>
                    <p>▸ 피보험단위기간산정대상기간 :  &nbsp; 이직자의 이직일을 포함된 월의 1일부터 이직일까지를 작성합니다.
                        &nbsp; &nbsp;아래칸에는 1개월씩 지난 기간을 각각 작성합니다
                        <p className="font-12"> ※ 예) 12.24일 이직자의 경우 가장 윗 칸에는 12.01 ~ 12.24 작성 <br />
                            아랫칸에는 11.01 ~ 11.30 , 10.01 ~ 10.31 , ... , 통산 피보험 단위 기간이 180일이 되는 날까지 작성합니다 ( 7 ~ 8 개월 정도 작성하면 됩니다)
                        </p>
                    </p>
                    <p>▸ 보수지급 기초일수 : &nbsp; 피보험단위기간산정대상기간 칸에 작성된 기간중 실제로 보수지급의 기초가 된 날을 모두 합산하여 작성합니다.
                        <br />&nbsp;&nbsp; &nbsp; 따라서 무급휴일, 보수가 지급되지 않는 결근일 등은 제외되고 유급휴가, 유급휴일 등은 포함됩니다.
                    </p>
                    <p>▸ 통상피보험 단위기간 : &nbsp; 보수지급기초일수의 기간을 모두 합산하여 적습니다.</p>
                    <h5>• 임금계산기간 및 총일수, 임금내역, 1일 통상임금, 1일 기준보수 작성법</h5>
                    <p>▸ 임금계산기간 : &nbsp; 이직자의 이직일을 포함하여 3개월 이전까지의 기간을 적습니다. <br />
                        &nbsp; &nbsp; &nbsp;첫번째 칸에는 이직일이 포함된 월의 1일부터 이직일까지를 적고, 차례로 1개월씩 지난 기간을 적되,
                        마지막 칸에는 이직자의 이직월에서는 3개월을 빼고,<br /> &nbsp; &nbsp; &nbsp;이직일에는 1일을 더한 날부터 해당월의 말일까지 적습니다.
                    </p>
                    <Row>
                        <Col md={6}>
                            <p className="font-12 mb-0"> 예) 12.24일 이직자</p>
                            <table className="table table-bordered table-centered">
                                <thead>
                                    <tr>
                                        <th>임금계산 기간</th>
                                        <th> 12.01 ~ 12.24</th>
                                        <th> 11.01 ~ 11.30</th>
                                        <th> 10.01 ~ 10.31</th>
                                        <th> 09.25 ~ 09.30</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>임금계산 기간 총일수</td>
                                        <td> 24일</td>
                                        <td> 30일</td>
                                        <td> 31일</td>
                                        <td> 6일</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                        <Col md={6}>
                            <p className="font-12 mb-0"> 예) 01.31일 이직자</p>
                            <table className="table table-bordered table-centered">
                                <thead>
                                    <tr>
                                        <th>임금계산 기간</th>
                                        <th> 01.01 ~ 01.31</th>
                                        <th> 12.01 ~ 12.31</th>
                                        <th> 11.01 ~ 11.30</th>
                                        <th> 해당사항없음</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>임금계산 기간총일수</td>
                                        <td> 31일</td>
                                        <td> 31일</td>
                                        <td> 30일</td>
                                        <td> 해당사항없음</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Col>
                    </Row>

                    <p className="mb-0">▸ 임금내역 : 임금계산기간 에 적힌 기간에 지급된 기본급 외의 기타수당을 작성합니다.
                        상여금과 연차수당은 12개월 동안 지급된 총액의 3개월분만 작성합니다. <br />   &nbsp;&nbsp; &nbsp; 다만,  &nbsp;12개월 미만으로
                        근로했던 이직자에 대해서는 그 근로한 개월에 지급된 상여금 및 연차수당에 3을 곱하고 근로한 개월을 나눈 금액을 적습니다.
                    </p>
                    <p>예) 근로한 개월이 6개월인 경우 : &nbsp;  상여금 x 3/6 , 연차수당 x 3/6</p>
                    <p>▸ 1일 통상임금 : &nbsp; 필요한 경우에만 적되, ⌜근로기준법 시행령⌟ 제6조에 따른 통상임금을 적습니다 <br /> &nbsp;&nbsp; &nbsp;
                        다만, &nbsp;이직일을 기준으로 근무한 기간이 3개월 미만 경우에는 통상임금을 반드시 적습니다.
                    </p>
                    <p>▸ 1일 기준보수 :&nbsp; 임금계산기간 동안 고용보험료를 모두 기준보수로 낸 경우에만 작성하되,
                        이직 연도의 시간단위 기준 보수에 1일 소정근로시간수를 곱한 임금을 적습니다
                    </p>
                    <h5>• 초단시간 근로일수 작성법</h5>
                    <p>▸ 초단시간 근로일수 : &nbsp; 이직자가 이직 당시에 1주 소정 근로시간이 15시간 미만이고, 1주 소정 근로일수가 2일 이하인 근로자였던 경우에만 적습니다. <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;실제 근로시간 및 근로일수가 아닌 근로계약서 등으로 정한 소정 근로시간 및 근로일수를 기준으로 작성합니다.
                    </p>
                    <h5>• 기준기간 연장 작성법</h5>
                    <p>▸ 기준기간 연장 :  &nbsp; 기준기간 연장사유가 있는 경우에만 기재합니다. "사유코드"란에는 이직일 이전 18개월
                        (단, 초단시간 근로일수 해당하는 이직자는 24개월)간<br />   &nbsp;&nbsp;&nbsp;30일 이상 보수 지급을 받을 수 없었던 사유의 번호를 적고,
                        "연장기간"란에 보수의 지급을 받을 수 없었던 기간을 적습니다. <br />  &nbsp;&nbsp;&nbsp;이 경우 휴업 또는 휴직기간에 보수를 지급 받을수 없었다는 것을 증명할 수 있는 서류를 첨부해야 합니다.
                    </p>
                    <h5 className="mb-2 text-uppercase bg-light p-2">
                        <i className="mdi mdi-alert-circle-outline me-1"></i> 주의
                    </h5>
                    <p className="mb-1 font-15"><strong>• 유의사항 :</strong></p>
                    <p>근로자 또는 작업안정기관의 장이 사업주에게 이직확인서 발급을 요청한 경우 사업주 등이 이직확인서를&nbsp;
                        <strong>발급해주지 않거나 거짓으로 발급해 준 때에는 300만원 이하의 과태료가 부과될수 있으며</strong>&nbsp;( ⌜고용보험법⌟ 제118조1항2호 및 제3호),
                        본 이직확인서를 거짓으로 작성하여 줌으로써 이직자가 실업급여를 부정하게 받은 경우에는 해당 사업주도 연대하여 책임을 질 수 있습니다.
                    </p>
                </Form>
            </Card.Body>
        </Card>
    );
};

const Ijighwaginseo = () => {
    const { isValidated, handleSubmit } = useFormValidation();
    const [isOpen5, toggleQnA] = useToggle();
    const { isOpen100, size2, className2, scroll2, toggleModal2, openModalWithSize2, openModalWithClass2, openModalWithScroll2 } = useModal();

    // input 숫자에 "," 찍기
    const [numgibongeub1, setnumGibongeub1] = useState(0); //기본급1
    const [numgibongeub2, setnumGibongeub2] = useState(0); //기본급2
    const [numgibongeub3, setnumGibongeub3] = useState(0); //기본급3
    const [numgibongeub4, setnumGibongeub4] = useState(0); //기본급4
    const [numgitasudang1, setnumGitasudang1] = useState(0); //기타수당1
    const [numgitasudang2, setnumGitasudang2] = useState(0); //기타수당2
    const [numgitasudang3, setnumGitasudang3] = useState(0); //기타수당3
    const [numgitasudang4, setnumGitasudang4] = useState(0); //기타수당4
    const [numsangyeogeum, setnumSangyeogeum] = useState(0); //상여금
    const [numyeonchasudang, setnumYeonchasudang] = useState(0); //연차수당
    const [numonedayimgeum, setnumOnedayimgeum] = useState(0); //1일통상임금
    const [numonedaygijunbosu, setnumOnedaygijunbosu] = useState(0); //1일기준보수
    const [numtotalimgeum, setnumTotalimgeum] = useState(0); //총임금액
    const [numaverageimgeum, setnumAverageimgeum] = useState(0); //평균임금
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


    // input 값 내보내기 
    const [inputs, setInputs] = useState({
        chodansigangeunloilsu: "",
        totalilsu: "",

    });
    const { chodansigangeunloilsu, totalilsu, } = inputs;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            chodansigangeunloilsu: "",
            totalilsu: "",
        });
    };


    async function postData() {
        try {
            const response = await axios.post('url?', {
                chodansigangeunloilsu: "",
                totalilsu: "",
                numgibongeub1: "",
                numgibongeub2: "",
                numgibongeub3: "",
                numgibongeub4: "",
                numgitasudang1: "",
                numgitasudang2: "",
                numgitasudang3: "",
                numgitasudang4: "",
                numsangyeogeum: "",
                numyeonchasudang: "",
                numonedayimgeum: "",
                numonedaygijunbosu: "",
                numtotalimgeum: "",
                numaverageimgeum: "",

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
    const [phoneNum, setphoneNum] = useState('')
    const [address, setAddress] = useState('')
    const [ibsail, setIbsail] = useState('')
    const [ijigil, setIjigil] = useState('')
    const [ijigsayu, setIjigsayu] = useState('')
    const [piboheomdanwisanjeongdaesanggigan1, setPiboheomdanwisanjeongdaesanggigan1] = useState('')
    const [piboheomdanwisanjeongdaesanggigan2, setPiboheomdanwisanjeongdaesanggigan2] = useState('')
    const [piboheomdanwisanjeongdaesanggigan3, setPiboheomdanwisanjeongdaesanggigan3] = useState('')
    const [piboheomdanwisanjeongdaesanggigan4, setPiboheomdanwisanjeongdaesanggigan4] = useState('')
    const [piboheomdanwisanjeongdaesanggigan5, setPiboheomdanwisanjeongdaesanggigan5] = useState('')
    const [piboheomdanwisanjeongdaesanggigan6, setPiboheomdanwisanjeongdaesanggigan6] = useState('')
    const [bosujigeubgichoilsu1, setBosujigeubgichoilsu1] = useState('')
    const [bosujigeubgichoilsu2, setBosujigeubgichoilsu2] = useState('')
    const [bosujigeubgichoilsu3, setBosujigeubgichoilsu3] = useState('')
    const [gijungiganyeonjangsayu, setGijungiganyeonjangsayu] = useState('')
    const [gijungiganyeonjanggigan1, setGijungiganyeonjanggigan1] = useState('')
    const [gijungiganyeonjanggigan2, setGijungiganyeonjanggigan2] = useState('')
    const [imgeumgyesangigan1, setImgeumgyesangigan1] = useState('')
    const [imgeumgyesangigan2, setImgeumgyesangigan2] = useState('')
    const [imgeumgyesangigan3, setImgeumgyesangigan3] = useState('')
    const [imgeumgyesangigan4, setImgeumgyesangigan4] = useState('')
    const [imgeumgyesangigan5, setImgeumgyesangigan5] = useState('')
    const [imgeumgyesangigan6, setImgeumgyesangigan6] = useState('')
    const [imgeumgyesangigan7, setImgeumgyesangigan7] = useState('')
    const [imgeumgyesangigan8, setImgeumgyesangigan8] = useState('')
    const [imgeumgyesantotalilsu1, setImgeumgyesantotalilsu1] = useState('')
    const [imgeumgyesantotalilsu2, setImgeumgyesantotalilsu2] = useState('')
    const [imgeumgyesantotalilsu3, setImgeumgyesantotalilsu3] = useState('')
    const [imgeumgyesantotalilsu4, setImgeumgyesantotalilsu4] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('url');
                setGeunloname(res.data[0].geunloname)
                setJumin(res.data[0].jumin)
                setphoneNum(res.data[0].phoneNum)
                setAddress(res.data[0].address)
                setIbsail(res.data[0].ibsail)
                setIjigil(res.data[0].ijigil)
                setIjigsayu(res.data[0].ijigsayu)
                setPiboheomdanwisanjeongdaesanggigan1(res.data[0].piboheomdanwisanjeongdaesanggigan1)
                setPiboheomdanwisanjeongdaesanggigan2(res.data[0].piboheomdanwisanjeongdaesanggigan2)
                setPiboheomdanwisanjeongdaesanggigan3(res.data[0].piboheomdanwisanjeongdaesanggigan3)
                setPiboheomdanwisanjeongdaesanggigan4(res.data[0].piboheomdanwisanjeongdaesanggigan4)
                setPiboheomdanwisanjeongdaesanggigan5(res.data[0].piboheomdanwisanjeongdaesanggigan5)
                setPiboheomdanwisanjeongdaesanggigan6(res.data[0].piboheomdanwisanjeongdaesanggigan6)
                setBosujigeubgichoilsu1(res.data[0].bosujigeubgichoilsu1)
                setBosujigeubgichoilsu2(res.data[0].bosujigeubgichoilsu2)
                setBosujigeubgichoilsu3(res.data[0].bosujigeubgichoilsu3)
                setGijungiganyeonjangsayu(res.data[0].gijungiganyeonjangsayu)
                setGijungiganyeonjanggigan1(res.data[0].gijungiganyeonjanggigan1)
                setGijungiganyeonjanggigan2(res.data[0].gijungiganyeonjanggigan2)
                setImgeumgyesangigan1(res.data[0].imgeumgyesangigan1)
                setImgeumgyesangigan2(res.data[0].imgeumgyesangigan2)
                setImgeumgyesangigan3(res.data[0].imgeumgyesangigan3)
                setImgeumgyesangigan4(res.data[0].imgeumgyesangigan4)
                setImgeumgyesangigan5(res.data[0].imgeumgyesangigan5)
                setImgeumgyesangigan6(res.data[0].imgeumgyesangigan6)
                setImgeumgyesangigan7(res.data[0].imgeumgyesangigan7)
                setImgeumgyesangigan8(res.data[0].imgeumgyesangigan8)
                setImgeumgyesantotalilsu1(res.data[0].imgeumgyesantotalilsu1)
                setImgeumgyesantotalilsu2(res.data[0].imgeumgyesantotalilsu2)
                setImgeumgyesantotalilsu3(res.data[0].imgeumgyesantotalilsu3)
                setImgeumgyesantotalilsu4(res.data[0].imgeumgyesantotalilsu4)
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    // 1일소정근로시간 select option  db에있는 데이터를 불러와서 select 에 뿌려주고 선택값 다시 저장
    const ondayMinhselectList = ["4시간이하", "5시간", "6시간", "7시간", "8시간이상"];
    const [ondayMinhSelected, setondayMinhSelected] = useState("");

    const ondayMinhhandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setondayMinhSelected(e.target.value);
    };

    // 기준기간연장 select option  db에있는 데이터를 불러와서 select 에 뿌려주고 선택값 다시 저장
    const gijungiganyeonjangsayuselectList = ["질병·부상", "시압징휴업", "임신·출산·육아", "기타사유"];
    const [gijungiganyeonjangsayuSelected, setgijungiganyeonjangsayuSelected] = useState("");

    const gijungiganyeonjangsayuhandleSelect = (e: { target: { value: SetStateAction<string>; }; }) => {
        setgijungiganyeonjangsayuSelected(e.target.value);
    };


    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'이직확인서'}
            />

            <div>
                <h4 className="text-end mt-0 mb-1">
                    <Button variant="link" className="mdi mdi-progress-question text-black" onClick={toggleQnA}>
                        설명서
                    </Button>
                </h4>
            </div>
            <Row>
                <Card>
                    <Card.Body>
                        <div className="text-end mb-2">
                            <Button className="mb-1">발급 대상자 조회</Button>&nbsp;&nbsp;
                            <Button className="mb-1">이직 확인서 발급</Button>&nbsp;&nbsp;
                        </div>
                        <Row>
                            <Col>
                                <div className="table-responsive  text-center">
                                    <Table className="mb-0 " hover>
                                        <thead className="table-madegray">
                                            <tr>
                                                <th style={{ width: "8%" }}>
                                                    #
                                                </th>
                                                <th style={{ width: "17%" }}>이름</th>
                                                <th style={{ width: "18%" }}>주민번호</th>
                                                <th style={{ width: "19%" }}>입사일</th>
                                                <th style={{ width: "19%" }}>이직일</th>
                                                <th style={{ width: "19%" }}>상세 정보</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox"></input></td>
                                                <td>{geunloname}</td>
                                                <td>{jumin}</td>
                                                <td>{ibsail}</td>
                                                <td>{ijigil}</td>
                                                <td><Button size="sm" variant="link" onClick={() => openModalWithSize2('lg')}>상세입력</Button></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <IjighwaginseoTip />
            </Row>

            {/* 설명서 모달 */}
            <Modal show={isOpen5} onHide={toggleQnA}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">이직확인서</h5>

                </Modal.Header>
                <Modal.Body className="qna">
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>이직확인서란?</p>
                            <p className="font-15"> 실업급여를 받기 위해서 이직(퇴사)사실을 확인하는 서류입니다.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>신청기간</p>
                            <p> 근로자가 요청한 일로부터 10일 내에 발급해주어야 합니다.
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

            <Modal show={isOpen100} onHide={toggleModal2} dialogClassName={className2} size={size2} scrollable={scroll2} backdrop={"static"}>
                <Modal.Header onHide={toggleModal2} closeButton>
                    <h4 className="modal-title">상세입력</h4>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col className="mb-2">
                            <p className="mb-0" style={{fontSize: "14px", color:"#a3a3a3"}}>이름 <br />
                                <input
                                    className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", height: "100%", fontSize: "18px", width: "99%", marginTop:"7px" }} name="geunloname" value={geunloname} placeholder="나이스" readOnly>
                                </input>
                            </p>
                        </Col>
                        <Col className="mb-2">
                            <p className="mb-0" style={{fontSize: "14px", color:"#a3a3a3"}}>주민번호 <br />
                                <input
                                    className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", height: "100%", fontSize: "18px", width: "99%", marginTop:"7px" }} name="jumin" value={jumin} placeholder="9912123768594" readOnly>
                                </input>
                            </p>
                        </Col>
                        <Col className="mb-2">
                            <p className="mb-0" style={{fontSize: "14px", color:"#a3a3a3"}}>전화번호 <br />
                                <input
                                    className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", height: "100%", fontSize: "18px", width: "99%", marginTop:"7px" }} name="phoneNum" value={phoneNum} placeholder="01012345678" readOnly>
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-2">
                            <p className="mb-0" style={{fontSize: "14px", color:"#a3a3a3"}}>주소 <br />
                                <input
                                    className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", height: "100%", fontSize: "18px", width: "99%", marginTop:"7px" }} name="address" value={address} placeholder="서울시 강서구 마곡동" >
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-2">
                            <p className="mb-0" style={{fontSize: "14px", color:"#a3a3a3"}}>입사일 <br />
                                <input
                                    className="form-control" type="date" style={{ width: "99%", border: "1px solid #d5d5d5", outline: "none", height: "100%", fontSize: "18px", marginTop:"7px" }} name="ibsail" value={ibsail}>
                                </input>
                            </p>
                        </Col>
                        <Col className="mb-2">
                            <p className="mb-0" style={{fontSize: "14px", color:"#a3a3a3"}}>이직일 <br />
                                <input
                                    className="form-control" type="date" style={{ width: "99%", border: "1px solid #d5d5d5", outline: "none", height: "100%", fontSize: "18px", marginTop:"7px" }} name="ijigil" value={ijigil} >
                                </input>
                            </p>
                        </Col>
                        <Col className="mb-2">
                            <p className="mb-0" style={{fontSize: "14px", color:"#a3a3a3"}}>이직사유 <br />
                                <input
                                    className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", height: "100%", fontSize: "18px", width: "99%", marginTop:"7px" }} name="ijigsayu" value={ijigsayu} placeholder="개인사정">
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row >
                        <p className="mb-1" style={{ fontSize: "19px" }}>피보험단위기간</p>
                        <div className="table-responsive text-center">
                            <table className="table table-bordered table-centered">
                                <thead className="table-light" style={{ color:"#a3a7ad"}}>
                                    <tr>
                                        <th style={{ width: "70%" }}>피보험단위기간산정대상기간</th>
                                        <th style={{ width: "30%" }}>보수지급 기초일수(일)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th style={{ padding: "3px 3px 3px 15px", width: "70%" }}>
                                            <Row>
                                                <Col>
                                                    <input
                                                        className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "17px", maxWidth: "90%" }} name="piboheomdanwisanjeongdaesanggigan1" value={piboheomdanwisanjeongdaesanggigan1}>
                                                    </input>
                                                </Col>
                                                <Col>
                                                    <input
                                                        type="date" className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "17px", maxWidth: "90%" }} name="piboheomdanwisanjeongdaesanggigan2" value={piboheomdanwisanjeongdaesanggigan2}>
                                                    </input>
                                                </Col>
                                            </Row>
                                        </th>
                                        <th style={{ padding: "3px 15px 3px 15px", width: "30%" }}>
                                            <input className="form-control" style={{ width: "99%", border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "17px", }} name="bosujigeubgichoilsu1" value={bosujigeubgichoilsu1} placeholder="1"></input>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th style={{ padding: "3px 3px 3px 15px", width: "70%" }}>
                                            <Row>
                                                <Col>
                                                    <input
                                                        className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "17px", maxWidth: "90%" }} name="piboheomdanwisanjeongdaesanggigan3" value={piboheomdanwisanjeongdaesanggigan3}>
                                                    </input>
                                                </Col>
                                                <Col>
                                                    <input
                                                        className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "17px", maxWidth: "90%" }} name="piboheomdanwisanjeongdaesanggigan4" value={piboheomdanwisanjeongdaesanggigan4}>
                                                    </input>
                                                </Col>
                                            </Row>
                                        </th>
                                        <th style={{ padding: "3px 15px 3px 15px", width: "30%" }}>
                                            <input className="form-control" style={{ width: "99%", border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "17px", }} name="bosujigeubgichoilsu2" value={bosujigeubgichoilsu2} placeholder="1"></input>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th style={{ padding: "3px 3px 3px 15px", width: "70%" }}>
                                            <Row>
                                                <Col>
                                                    <input
                                                        className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "17px", maxWidth: "90%" }} name="piboheomdanwisanjeongdaesanggigan5" value={piboheomdanwisanjeongdaesanggigan5}>
                                                    </input>
                                                </Col>
                                                <Col>
                                                    <input
                                                        className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "17px", maxWidth: "90%" }} name="piboheomdanwisanjeongdaesanggigan6" value={piboheomdanwisanjeongdaesanggigan6}>
                                                    </input>
                                                </Col>
                                            </Row>
                                        </th>
                                        <th style={{ padding: "3px 15px 3px 15px", width: "30%" }}>
                                            <input className="form-control" style={{ width: "99%", border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "17px", }} name="bosujigeubgichoilsu3" value={bosujigeubgichoilsu3} placeholder="1"></input>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Row>
                    <Row>
                        <div className="table-responsive text-center">
                            <table className="table table-bordered table-centered">
                                <thead className="table-light" style={{ color:"#a3a7ad"}}>
                                    <tr>
                                        <th colSpan={2}>기준기간연장</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="table-light" style={{ color:"#a3a7ad"}}>
                                        <td>사유</td>
                                        <td>기간</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: "3px 15px 3px 15px", width: "30%" }}>
                                            <select className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "17px", width: "99%" }}
                                                onChange={gijungiganyeonjangsayuhandleSelect} value={gijungiganyeonjangsayuSelected}
                                            >
                                                {gijungiganyeonjangsayuselectList.map((item) => (
                                                    <option value={item} key={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                        <td style={{ padding: "3px 3px 3px 15px", width: "70%" }}>
                                            <Row>
                                                <Col>
                                                    <input
                                                        className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "17px", width: "90%" }} name="gijungiganyeonjanggigan1" value={gijungiganyeonjanggigan1}>
                                                    </input>
                                                </Col>
                                                <Col>
                                                    <input
                                                        className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "17px", width: "90%" }} name="gijungiganyeonjanggigan2" value={gijungiganyeonjanggigan2}>
                                                    </input>
                                                </Col>
                                            </Row>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Row>
                    <hr />
                    <Row>
                        <p className="mb-0" style={{ fontSize: "19px" }}>평균임금</p>
                        <div className="table-responsive mt-2 text-center">
                            <table className="table table-bordered table-centered  mb-0" >
                                <thead className="table-light" style={{ color:"#a3a7ad"}}>
                                    <tr>
                                        <th colSpan={6} style={{ maxWidth: "760px" }}>평균임금산정명세</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC", width: "12%", padding: "3px",color:"#a3a7ad" }}>임금계산기간</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesangigan1" value={imgeumgyesangigan1}></input>
                                            <br />
                                            <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesangigan2" value={imgeumgyesangigan2}></input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesangigan3" value={imgeumgyesangigan3}></input>
                                            <br />
                                            <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesangigan4" value={imgeumgyesangigan4}></input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesangigan5" value={imgeumgyesangigan5}></input>
                                            <br />
                                            <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesangigan6" value={imgeumgyesangigan6}></input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesangigan7" value={imgeumgyesangigan7}></input>
                                            <br />
                                            <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesangigan8" value={imgeumgyesangigan8}></input>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC", width: "12%", padding: "0px",color:"#a3a7ad" }}>총일수(일)</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesantotalilsu1" value={imgeumgyesantotalilsu1} placeholder="5"></input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesantotalilsu2" value={imgeumgyesantotalilsu2} placeholder="15"></input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesantotalilsu3" value={imgeumgyesantotalilsu3} placeholder="100"></input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="imgeumgyesantotalilsu4" value={imgeumgyesantotalilsu4} placeholder="42"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={4} className="table-light" style={{ border: "1px solid #DCDCDC", width: "4%", padding: "8px",color:"#a3a7ad" }}>임금내역</td>
                                        <td className="table-light" style={{ border: "1px solid #DCDCDC", width: "8%", padding: "0px",color:"#a3a7ad" }}>기본급</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="gibongeub1"
                                                value={numgibongeub1}
                                                onChange={(e) => setnumGibongeub1(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="gibongeub2"
                                                value={numgibongeub2}
                                                onChange={(e) => setnumGibongeub2(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="gibongeub3"
                                                value={numgibongeub3}
                                                onChange={(e) => setnumGibongeub3(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="gibongeub4"
                                                value={numgibongeub4}
                                                onChange={(e) => setnumGibongeub4(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className="table-light" style={{ border: "1px solid #DCDCDC", width: "8%", padding: "2px",color:"#a3a7ad" }}>기타수당</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="gitasudang1"
                                                value={numgitasudang1}
                                                onChange={(e) => setnumGitasudang1(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="gitasudang2"
                                                value={numgitasudang2}
                                                onChange={(e) => setnumGitasudang2(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="gitasudang3"
                                                value={numgitasudang3}
                                                onChange={(e) => setnumGitasudang3(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="gitasudang4"
                                                value={numgitasudang4}
                                                onChange={(e) => setnumGitasudang4(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td className="table-light" style={{ border: "1px solid #DCDCDC", width: "8%", padding: "0px",color:"#a3a7ad" }}>상여금</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="sangyeogeum"
                                                value={numsangyeogeum}
                                                onChange={(e) => setnumSangyeogeum(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                        <td colSpan={3} style={{ width: "66%", padding: "3px 3px 3px 15px" }}>이직 전 12개월간 지급된 상여금 총액 x3/12</td>
                                    </tr>
                                    <tr>
                                        <td className="table-light" style={{ border: "1px solid #DCDCDC", width: "8%", padding: "2px",color:"#a3a7ad" }}>연차수당</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="yeonchasudang"
                                                value={numyeonchasudang}
                                                onChange={(e) => setnumYeonchasudang(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                        <td colSpan={3} style={{ width: "66%", padding: "3px 3px 3px 15px" }}>이직 전 12개월간 지급된 연차수당 총액 x3/12</td>

                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC", width: "12%", padding: "4px",color:"#a3a7ad" }}>총임금액</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="totalimgeum"
                                                value={numtotalimgeum}
                                                onChange={(e) => setnumTotalimgeum(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                        <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC", width: "44%", padding: "3px 3px 3px 15px",color:"#a3a7ad" }}>총일수</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="totalilsu" value={totalilsu} onChange={onChange}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC", width: "12%", padding: "4px",color:"#a3a7ad" }}>평균임금</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="averageimgeum"
                                                value={numaverageimgeum}
                                                onChange={(e) => setnumAverageimgeum(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                        <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC", width: "44%", padding: "3px 3px 3px 15px",color:"#a3a7ad" }}>1일 통상임금</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="onedayimgeum"
                                                value={numonedayimgeum}
                                                onChange={(e) => setnumOnedayimgeum(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC", width: "12%", padding: "2px",color:"#a3a7ad" }}>1일기준보수</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                type="text" name="onedaygijunbosu"
                                                value={numonedaygijunbosu}
                                                onChange={(e) => setnumOnedaygijunbosu(inputPriceFormat(e.target.value))}>
                                            </input>
                                        </td>
                                        <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC", width: "44%", padding: "3px 3px 3px 15px",color:"#a3a7ad" }}>1일 소정 근로시간</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <select className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }}
                                                onChange={ondayMinhhandleSelect} value={ondayMinhSelected}
                                            >
                                                {ondayMinhselectList.map((item) => (
                                                    <option value={item} key={item}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC", width: "12%", padding: "4px",color:"#a3a7ad" }}>초단시간근로일수</td>
                                        <td colSpan={3} style={{ width: "66%", padding: "3px 3px 3px 15px", fontSize: "13px" }}>이직전 24개월 동안 1주 소정근로시간이 15시간 미만이고 1주 소정근로일수가 2일 이하인 날</td>
                                        <td style={{ width: "22%", padding: "3px 3px 3px 15px" }}>
                                            <input
                                                className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%" }} name="chodansigangeunloilsu" value={chodansigangeunloilsu} onChange={onChange}>
                                            </input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Row>
                    <Row>
                        <p className="text-danger">※ 1일 소정 근로시간: 소정근로시간이 일단위로 정해진 경우에는 해당 소정근로시간으로 작성 <br />
                            (1주 소정근로일 5일 또는 6일의 근로시간이 동일하게 정해진 경우를 말함)
                        </p>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggleModal2} style={{width:"99%"}} type="submit">저장</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Ijighwaginseo;

// 기존 이직확인서 
{/* <Form>
                                <div className="table-responsive mt-2 text-center">
                                    <table className="table table-bordered table-centered text-black">
                                        <thead className="table-light">
                                            <tr>
                                                <th colSpan={4}>사업장정보</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>사업장명</td>
                                                <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>사업장 전화번호</td>
                                                <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>소재지</td>
                                                <td colSpan={3} className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"90%" }} readOnly></input></td>
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>하수급 관리번호</td>
                                                <td colSpan={3} className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"90%" }} readOnly></input></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-responsive mt-2 text-center">
                                    <table className="table table-bordered table-centered text-black">
                                        <thead className="table-light">
                                            <tr>
                                                <th colSpan={4}>피보험자(이직자)정보</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>성명</td>
                                                <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>주민등록번호</td>
                                                <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>휴대전화</td>
                                                <td colSpan={3} className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none", width:"90%" }} readOnly></input></td>
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>소재지</td>
                                                <td colSpan={3} className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"90%"}} readOnly></input></td>
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>피보험자 자격취득일 *</td>
                                                <td className="text-start"><input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }} ></input></td>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>이직일자(근로제공마지막날) *</td>
                                                <td className="text-start"><input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }} ></input></td>
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>이직사유 *</td>
                                                <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>구체적 이직사유 *</td>
                                                <td className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }} readOnly></input></td>
                                            </tr>
                                        </tbody>
                                    </table>    
                                </div>
                                <div className="text-sm-end">
                                    <Button variant="primary" type="submit">
                                        피보험산정
                                    </Button>
                                </div>
                                <div className="table-responsive mt-2 text-center">
                                    <table className="table table-bordered table-centered">
                                        <thead className="table-light">
                                            <tr>
                                                <th>피보험단위기간산정대상기간</th>
                                                <th>보수지급 기초일수(일)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>2022.03.01 ~ 2022.03.31</th>
                                                <th>31</th>
                                            </tr>
                                            <tr>
                                                <th>2022.02.01 ~ 2022.02.28</th>
                                                <th>28</th>
                                            </tr>
                                            <tr>
                                                <th>2022.01.01 ~ 2022.01.31</th>
                                                <th>31</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-responsive mt-2 text-center">
                                    <table className="table table-bordered table-centered">
                                        <thead className="table-light">
                                            <tr>
                                                <th colSpan={3}>보수지급 기초일수 제외</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-light">
                                                <td>사유</td>
                                                <td>기간</td>
                                                <td>일수(일)</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <select className="textstart" style={{ border: "1px solid #EEEEEE", outline: "none" }}>
                                                        <option>선택하기</option>
                                                        <option>무급휴일</option>
                                                        <option>결근</option>
                                                    </select>
                                                </td>
                                                <td><input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                    &nbsp; &nbsp; &nbsp; ~  &nbsp; &nbsp; &nbsp;
                                                    <input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                </td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-responsive mt-2 text-center">
                                    <table className="table table-bordered table-centered">
                                        <thead className="table-light">
                                            <tr>
                                                <th colSpan={2}>기준기간연장</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="table-light">
                                                <td>사유</td>
                                                <td>기간</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <select style={{ border: "1px solid #EEEEEE", outline: "none" }}>
                                                        <option>선택하기</option>
                                                        <option>질병,부상</option>
                                                        <option>사업장 휴업</option>
                                                        <option>임신,출산,육아</option>
                                                        <option>기타사유</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                    &nbsp; &nbsp; &nbsp; ~  &nbsp; &nbsp; &nbsp;
                                                    <input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="table-responsive mt-2 text-center">
                                    <table className="table table-bordered table-centered">
                                        <thead className="table-light">
                                            <tr>
                                                <th colSpan={7}>평균임금산정명세</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC" }}>임금계산기</td>
                                                <td>
                                                    <input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                    <br /> ~ <br />
                                                    <input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                </td>
                                                <td>
                                                    <input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                    <br /> ~ <br />
                                                    <input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                </td>
                                                <td>
                                                    <input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                    <br /> ~ <br />
                                                    <input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                </td>
                                                <td>
                                                    <input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                    <br /> ~ <br />
                                                    <input type="date" style={{ border: "1px solid #EEEEEE", outline: "none" }}></input>
                                                </td>
                                                <td className="table-light">계</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC" }}>총일수</td>
                                                <td> <input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 일</td>
                                                <td> <input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 일</td>
                                                <td> <input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 일</td>
                                                <td> <input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 일</td>
                                                <td> <input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 일</td>
                                            </tr>
                                            <tr>
                                                <td rowSpan={4} className="table-light" style={{ border: "1px solid #DCDCDC" }}>임금내역</td>
                                                <td className="table-light" style={{ border: "1px solid #DCDCDC" }}>기본급</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                            </tr>
                                            <tr>
                                                <td className="table-light" style={{ border: "1px solid #DCDCDC" }}>기타수당</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                            </tr>
                                            <tr>
                                                <td className="table-light" style={{ border: "1px solid #DCDCDC" }}>상여금</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td colSpan={3}>이직 전 12개월간 지급된 상여금 총액 x3/12</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                            </tr>
                                            <tr>
                                                <td className="table-light" style={{ border: "1px solid #DCDCDC" }}>연차수당</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td colSpan={3}>이직 전 12개월간 지급된 연차수당 총액 x3/12</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC" }}>평균임금</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td className="table-light" style={{ border: "1px solid #DCDCDC" }}>총임금액</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td className="table-light" style={{ border: "1px solid #DCDCDC" }}>총일수</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 일</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC" }}>1일 통상임금</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td className="table-light" style={{ border: "1px solid #DCDCDC" }}>1일 기준보수</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 원</td>
                                                <td className="table-light" style={{ border: "1px solid #DCDCDC" }}>1일 소정 근로시간 *</td>
                                                <td>
                                                    <select style={{ border: "1px solid #EEEEEE", outline: "none" }}>
                                                        <option>선택하기</option>
                                                        <option>4시간이하</option>
                                                        <option>5시간</option>
                                                        <option>6시간</option>
                                                        <option>7시간</option>
                                                        <option>8시간 이상</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} className="table-light" style={{ border: "1px solid #DCDCDC" }}>초단시간근로일수</td>
                                                <td colSpan={4}>이직전 24개월 동안 1주 소정근로시간이 15시간 미만이고 1주 소정근로일수가 2일 이하인 날</td>
                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" , width:"100px" }}></input> 일</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-danger">※ 1일 소정 근로시간: 소정근로시간이 일단위로 정해진 경우에는 해당 소정근로시간으로 작성 <br />
                                    (1주 소정근로일 5일 또는 6일의 근로시간이 동일하게 정해진 경우를 말함, 일 단위 외에는 안내 동영상 참고)
                                </p>
                                <div className="text-end">
                                    <Button variant="primary" type="submit">
                                        접수
                                    </Button>
                                </div>
                            </Form> */}