import { Row, Col, Card, ListGroup, Badge, Table, Modal, Button } from 'react-bootstrap';
import { PageTitle } from 'components';
import { Link } from 'react-router-dom';
import { useToggle } from 'hooks';
import { useModal } from './hooks';
import { SetStateAction, useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

// 고용정보 


type GoYongJeongBo = {
    DsOutList: Array<string>;
}

const LinksButtons = () => {
    const [goYongData, setGoYongData] = useState<GoYongJeongBo>();
    const [geunrojaNm, setGeunrojaNm] = useState("");
    const url = "http://localhost:8080/goyongjeongbo";

    const getGoYongJeongBo = async () => {
        const data = await axios.get(url);
        console.log("data.data.Result[0].DsOutList[0] : ", data.data.Result[0].DsOutList[0]);
        console.log("GeunrojaNm : ", data.data.Result[0].DsOutList[0].GeunrojaNm);
        setGoYongData(data.data.Result);
        setGeunrojaNm(data.data.Result[0].DsOutList[0].GeunrojaNm);
        //console.log("goYongData[0] : ", goYongData[0]);
    };

    useEffect(() => {
        getGoYongJeongBo();
    }, []);

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title font-20  mb-4">직원리스트</h4>


                <ListGroup className="text-center">
                    <ListGroup.Item as="button" action>
                        나이스123
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item as="button" action>
                        세모
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item as="button" action>
                        네모
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item as="button" action>
                        동그라미
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item as="button" action>
                        마름모
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item as="button" action>
                        사다리
                    </ListGroup.Item>
                    <br />
                    <ListGroup.Item as="button" action>
                        직각
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

const GoyongGeunloja = () => {
    const [isOpen5, toggleQnA] = useToggle();
    const [isOpen6, toggleplus] = useToggle();
    const [isOpen7, toggleplus3] = useToggle();

    const [numbasicbosu, setnumbasicbosu] = useState(0);
    const [numfixsudang, setnumfixsudang] = useState(0);
    const [numsigdae, setnumsigdae] = useState(0);
    const [numcaryujibi, setnumcaryujibi] = useState(0);
    const [numothersudang1, setnumothersudang1] = useState(0);
    const [numothersudang2, setnumothersudang2] = useState(0);

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


    // post방식 
    const [inputs, setInputs] = useState({
        geunloname: "",
        jumin: "",
        phoneNum: "",
        email: "",
        address: "",
        ibsail: "",
        toesail: "",
        jiggeub: "",
        buseo: "",
        gyeyagtype: "",
        gyeyagend: "",
        jigmu: "",
        weekMinh: "",
        numbasicbosu: "",
        numfixsudang: "",
        numsigdae: "",
        numcaryujibi: "",
        numothersudang1: "",
        numothersudang2: "",
    });
    const { geunloname, jumin, phoneNum, email, address, ibsail, toesail,
        jiggeub, buseo, gyeyagend, jigmu, weekMinh,
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
            geunloname: "",
            jumin: "",
            phoneNum: "",
            email: "",
            address: "",
            ibsail: "",
            toesail: "",
            jiggeub: "",
            buseo: "",
            gyeyagtype: "",
            gyeyagend: "",
            jigmu: "",
            weekMinh: "",
            numbasicbosu: "",
            numfixsudang: "",
            numsigdae: "",
            numcaryujibi: "",
            numothersudang1: "",
            numothersudang2: "",
        });
    };


    const postData = async () => {
        try {
            const response = await axios.post('url?', {
                geunloname: "",
                jumin: "",
                phoneNum: "",
                email: "",
                address: "",
                ibsail: "",
                toesail: "",
                jiggeub: "",
                buseo: "",
                gyeyagtype: "",
                gyeyagend: "",
                jigmu: "",
                weekMinh: "",
                numbasicbosu: "",
                numfixsudang: "",
                numsigdae: "",
                numcaryujibi: "",
                numothersudang1: "",
                numothersudang2: "",

            });
            console.log(response);
        } catch (error) {
            // 응답실패
            console.error(error);
        }
    }

    // select 

    const [gyeyagtype, selectGyeyag] = useState("jeonggyu")
    const handleChangeGyeyag = (e: { target: { value: SetStateAction<string>; }; }) => {
        selectGyeyag(e.target.value)
    }
    useEffect(() => {

    }, [gyeyagtype])

    return (
        <div className="mt-3">
            <Row>
                <Col>
                    <Button variant="link" className="mdi mdi-progress-question text-black" onClick={toggleQnA}>
                        설명서
                    </Button>
                </Col>
                <Col>
                    <Button className="float-end" variant="link" onClick={toggleplus3}>직원추가</Button>
                </Col>
            </Row>

            <div className="table-responsive mt-2 text-center">
                <Table className="table table-bordered table-centered text-black" hover>
                    <thead className="table-primary" style={{ color: "#6c757d" }}>
                        <tr>
                            <th>이름</th>
                            <th>부서</th>
                            <th>직급</th>
                            <th>입사일</th>
                            <th>인사기록카드</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{geunloname}</td>
                            <td>{buseo}</td>
                            <td>{jiggeub}</td>
                            <td>{ibsail}</td>
                            <td><Button variant="link" size="sm" onClick={toggleplus}>➕</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            {/* QnA 모달 */}
            <Modal show={isOpen5} onHide={toggleQnA}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">일반근로자</h5>

                </Modal.Header>
                <Modal.Body className="qna">
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>고용정보란?</p>
                            <p className="font-15">
                                사업주가 고용하고 있는 근로자의 성명, 주민등록번호, 고용한 날, 고용관계의 종료일, 월평균보수액, 휴직·전보 사항에 대한 정보를 말합니다 <br />
                                근로자 고용정보가 신고기한 내에 신고 되지 않거나 누락되는 경우 월별 산재보험료가 적기에 산정·부과되지 않습니다 <br />
                                또한, 근로자 고용정보를 제대로 신고하지 않을 경우 과태료가 부과될 수 있습니다
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

            {/* 근로자정보 상세보기 */}
            <Modal show={isOpen6} onHide={toggleplus} backdrop={"static"}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">상세조회</h5>

                </Modal.Header>
                <Modal.Body className="plus">
                    <h4 className="mb-2">• 개인정보</h4>
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
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>연락처 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} value={phoneNum} onChange={onChange}></input>
                            </p>
                        </Col>
                        <Col className="mb-2">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>이메일 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="jj@round.com" name="email" onChange={onChange} value={email}></input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-2">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>주소 <br />
                                <input style={{ width: "100%", border: "1px solid #EEEEEE", outline: "none" }} placeholder="서울시 강남구 NI빌 202호" value={address} onChange={onChange}></input>
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <h4 className="mb-2">• 인사정보</h4>
                    <Row>
                        <Col className="mb-2">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>입사일 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} value={ibsail}></input>
                            </p>
                        </Col>
                        <Col className="mb-2">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>퇴사일 <br />
                                <input type="date" style={{ width: "185px", border: "1px solid #EEEEEE", outline: "none" }} name="toesail" onChange={onChange} value={toesail} ></input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>직급 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="사원" name="jiggeub" onChange={onChange} value={jiggeub} ></input>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>부서 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="생산" name="buseo" onChange={onChange} value={buseo} ></input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>계약종류 <br />
                                <select style={{ width: "183px", border: "1px solid #EEEEEE", outline: "none" }} name="gyeyagtype" onChange={handleChangeGyeyag}>
                                    <option value="jeonggyu">정규직</option>
                                    <option value="giganje">기간제</option>
                                </select>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>계약종료일 <br />
                                <input type="date" style={{ width: "185px", border: "1px solid #EEEEEE", outline: "none" }} name="gyeyagend" onChange={onChange} value={gyeyagend}></input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>직무 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="사무보조,단순제조·생산 등" name="jigmu" onChange={onChange} value={jigmu}></input>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>주소정근로시간(최대40h) <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="8시간" value={weekMinh} onChange={onChange}></input>
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <h4 className="mb-2">• 임금정보</h4>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>기본급 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="basicbosu"
                                    value={numbasicbosu}
                                    onChange={(e) => setnumbasicbosu(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>고정수당 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="fixsudang"
                                    value={numfixsudang}
                                    onChange={(e) => setnumfixsudang(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>식대 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="sigdae"
                                    value={numsigdae}
                                    onChange={(e) => setnumsigdae(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>차량유지비 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="caryujibi"
                                    value={numcaryujibi}
                                    onChange={(e) => setnumcaryujibi(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>기타수당1 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="othersudang1"
                                    value={numothersudang1}
                                    onChange={(e) => setnumothersudang1(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>기타수당2 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="othersudang2"
                                    value={numothersudang2}
                                    onChange={(e) => setnumothersudang2(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" variant="link" type="submit" onClick={toggleplus} >
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* 직원추가 모달 */}
            <Modal show={isOpen7} onHide={toggleplus3} backdrop={"static"}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">직원추가</h5>

                </Modal.Header>
                <Modal.Body className="plus3">
                    <p className="mb-0 font-13"> *필수입력항목</p>
                    <h4 className="mb-2">• 개인정보</h4>
                    <Row>
                        <Col className="mb-2">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>이름 * <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="나이스" name="geunloname" onChange={onChange} value={geunloname}></input>
                            </p>
                        </Col>
                        <Col className="mb-2">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>주민번호 *<br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="890209-2669985" name="jumin" onChange={onChange} value={jumin}></input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-2">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>연락처 *<br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="010-1234-5678" name="phonNum" onChange={onChange} value={phoneNum}></input>
                            </p>
                        </Col>
                        <Col className="mb-2">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>이메일 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="nc@nice.com" name="email" onChange={onChange} value={email}></input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-2">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>주소 *<br />
                                <input style={{ width: "100%", border: "1px solid #EEEEEE", outline: "none" }} placeholder="서울시 강남구 NI빌라 202호" name="adress" onChange={onChange} value={address}></input>
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <h4 className="mb-2">• 인사정보</h4>
                    <Row>
                        <Col className="mb-2">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>입사일 *<br />
                                <input type="date" style={{ width: "185px", border: "1px solid #EEEEEE", outline: "none" }} name="ibsail" onChange={onChange} value={ibsail}></input>
                            </p>
                        </Col>
                        <Col className="mb-2">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>퇴사일 <br />
                                <input type="date" style={{ width: "185px", border: "1px solid #EEEEEE", outline: "none" }} name="toesail" onChange={onChange} value={toesail}></input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>직급 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="사원" name="jiggeub" onChange={onChange} value={jiggeub} ></input>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>부서 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="생산" name="buseo" onChange={onChange} value={buseo}></input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>계약종류 *<br />
                                <select style={{ width: "183px", border: "1px solid #EEEEEE", outline: "none" }} name="gyeyagtype" onChange={handleChangeGyeyag}>
                                    <option value="jeonggyu">정규직</option>
                                    <option value="giganje">기간제</option>
                                </select>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>계약종료일<br />
                                <input type="date" style={{ width: "185px", border: "1px solid #EEEEEE", outline: "none" }} name="gyeyagend" onChange={onChange} value={gyeyagend}></input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>직무 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="사무보조,단순제조·생산 등" name="jigmu" onChange={onChange} value={jigmu}></input>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>주소정근로시간(최대40h) *<br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }} placeholder="8시간" name="weekMinh" onChange={onChange} value={weekMinh}></input>
                            </p>
                        </Col>
                    </Row>
                    <br />
                    <h4 className="mb-2">• 임금정보</h4>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>기본급 *<br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="basicbosu"
                                    value={numbasicbosu}
                                    onChange={(e) => setnumbasicbosu(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>고정수당 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="fixsudang"
                                    value={numfixsudang}
                                    onChange={(e) => setnumfixsudang(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>식대 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="sigdae"
                                    value={numsigdae}
                                    onChange={(e) => setnumsigdae(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>차량유지비 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="caryujibi"
                                    value={numcaryujibi}
                                    onChange={(e) => setnumcaryujibi(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>기타수당1 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="othersudang1"
                                    value={numothersudang1}
                                    onChange={(e) => setnumothersudang1(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                        <Col className="mb-1">
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>기타수당2 <br />
                                <input style={{ border: "1px solid #EEEEEE", outline: "none" }}
                                    type="text" name="othersudang2"
                                    value={numothersudang2}
                                    onChange={(e) => setnumothersudang2(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" variant="link" type="submit" onClick={toggleplus3} >
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default GoyongGeunloja;
