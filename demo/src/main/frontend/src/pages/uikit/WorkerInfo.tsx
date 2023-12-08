import { Row, Col, Card, ListGroup, Table, Modal, Button, Form, } from 'react-bootstrap';
import { PageTitle } from 'components';
import { useToggle } from 'hooks';
import React, { useEffect, useState } from 'react';
import { getUsername } from 'utils/getUsername';
import axios from 'axios';



// 기존 근로자 정보 조회및 추가수정 페이지 

type GoYongJeongBo = {
    DsOutList: Array<string>;
}

type UserInfo = {
    geunrojanm: string;
    jumin: string;
    phonenumber: string;
    email: string;
    address: string;
    ibsail: string;
    toesail: string;
    jiggeub: string;
    buseo: string;
    gyeyagtype: string;
    gyeyagend: string;
    jaejigsangtae: string;
    jigmu: string;
    weekMinh: number;
    basicbosu: number;
    fixsudang: number;
    sigdae: number;
    caryujibi: number;
    othersudang1: number;
    othersudang2: number;
    boyugsudang: number;
    naeseonnumber: number;
}

type LookupUserInfo = {
    lookupGeunrojanm: string;
    lookupJumin: string;
    lookupPhonenumber: string;
    lookupEmail: string;
    lookupAddress: string;
    lookupIbsail: string;
    lookupToesail: string;
    lookupJiggeub: string;
    lookupBuseo: string;
    lookupGyeyagtype: string;
    lookupGyeyagend: string;
    lookupJigmu: string;
    lookupWeekMinh: number;
    lookupBasicbosu: number;
    lookupFixsudang: number;
    lookupSigdae: number;
    lookupCaryujibi: number;
    lookupOthersudang1: number;
    lookupOthersudang2: number;
    lookupBoyugsudang: number;
    lookupNaeseonnumber: number;
}

const WorkerInfo = () => {
    const [isOpen6, toggleplus] = useToggle();
    const [isOpen7, toggleplus3] = useToggle();
    const [dataTable, setDataTable] = useState<UserInfo[]>();
    const [clickIndex, setClickIndex] = useState(0);

    // --- input 숫자에 , 찍기 
    const [basicbosu, setBasicbosu] = useState();
    const [fixsudang, setFixsudang] = useState();
    const [sigdae, setSigdae] = useState();
    const [caryujibi, setCaryujibi] = useState();
    const [othersudang1, setOthersudang1] = useState();
    const [othersudang2, setOthersudang2] = useState();
    const [boyugsudang, setBoyugsudang] = useState();
    //  ----

    const [inputs, setInputs] = useState({
        geunrojanm: "", 
        usergeunlo: "", 
        jumin: "", 
        phonenumber: "", 
        email: "", 
        address: "", 
        ibsail: "", 
        toesail: "", 
        jiggeub: "", 
        buseo: "", 
        gyeyagtype: "jeonggyu", 
        gyeyagend: "", 
        jaejigsangtae: "", 
        jigmu: "", 
        weekMinh: "",
        basicbosu: "", 
        fixsudang: "", 
        sigdae: "", 
        caryujibi: "", 
        othersudang1: "", 
        othersudang2: "", 
        boyugsudang: "",
        naeseonnumber:"",
    });

    const {
        geunrojanm, 
        jumin, 
        phonenumber, 
        email, 
        address, 
        ibsail, 
        toesail, 
        jiggeub, 
        buseo, 
        gyeyagtype, 
        jaejigsangtae, 
        gyeyagend, 
        jigmu, 
        weekMinh,
        naeseonnumber,
    } = inputs;

    const [lookupInputs, setLookupInputs] = useState<LookupUserInfo>({
        lookupGeunrojanm: "", 
        lookupJumin: "", 
        lookupPhonenumber: "", 
        lookupEmail: "", 
        lookupAddress: "", 
        lookupIbsail: "", 
        lookupToesail: "", 
        lookupJiggeub: "", 
        lookupBuseo: "", 
        lookupGyeyagtype: "jeonggyu", 
        lookupGyeyagend: "", 
        lookupJigmu: "", 
        lookupWeekMinh: 0, 
        lookupBasicbosu: 0, 
        lookupFixsudang: 0, 
        lookupSigdae: 0, 
        lookupCaryujibi: 0, 
        lookupOthersudang1: 0, 
        lookupOthersudang2: 0, 
        lookupBoyugsudang: 0,
        lookupNaeseonnumber:0,
    });

    const { 
        lookupGeunrojanm, 
        lookupJumin, 
        lookupPhonenumber, 
        lookupEmail, 
        lookupAddress, 
        lookupIbsail, 
        lookupToesail, 
        lookupJiggeub, 
        lookupBuseo, 
        lookupGyeyagtype, 
        lookupGyeyagend,
        lookupJigmu, 
        lookupWeekMinh, 
        lookupBasicbosu, 
        lookupFixsudang, 
        lookupSigdae, 
        lookupCaryujibi, 
        lookupOthersudang1, 
        lookupOthersudang2, 
        lookupBoyugsudang, 
        lookupNaeseonnumber,
    } = lookupInputs;


    useEffect(() => {
        if (dataTable?.length) {
            lookupDataMove(dataTable[clickIndex]);
        }
    }, [dataTable, clickIndex]);

    const lookupDataMove = (data: UserInfo) => {
        console.log("data.gyeyagtype :  ", data.gyeyagtype);
        setLookupInputs({ 
            lookupGeunrojanm: data.geunrojanm, 
            lookupJumin: data.jumin, 
            lookupPhonenumber: data.phonenumber, 
            lookupEmail: data.email, 
            lookupAddress: data.address, 
            lookupIbsail: data.ibsail, 
            lookupToesail: data.toesail, 
            lookupJiggeub: data.jiggeub, 
            lookupBuseo: data.buseo, 
            lookupGyeyagtype: data.gyeyagtype, 
            lookupGyeyagend: data.gyeyagend, 
            lookupJigmu: data.jigmu, 
            lookupWeekMinh: data.weekMinh, 
            lookupBasicbosu: data.basicbosu, 
            lookupFixsudang: data.fixsudang, 
            lookupSigdae: data.sigdae, 
            lookupCaryujibi: data.caryujibi, 
            lookupOthersudang1: data.othersudang1, 
            lookupOthersudang2: data.othersudang2, 
            lookupBoyugsudang: data.boyugsudang,
            lookupNaeseonnumber: data.naeseonnumber,
        });
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onChangeLookup = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setLookupInputs({
            ...lookupInputs,
            [name]: value,
        });
    };

    const resetUserInfo = () => {
        setInputs({
            geunrojanm: "", 
            usergeunlo: "", 
            jumin: "", 
            phonenumber: "", 
            email: "", 
            address: "", 
            ibsail: "", 
            toesail: "", 
            jiggeub: "", 
            buseo: "", 
            gyeyagtype: "", 
            gyeyagend: "", 
            jigmu: "", 
            jaejigsangtae: "", 
            weekMinh: "", 
            basicbosu: "", 
            fixsudang: "", 
            sigdae: "", 
            caryujibi: "", 
            othersudang1: "", 
            othersudang2: "", 
            boyugsudang: "",
            naeseonnumber: "",
        });
    };

    const UpdateUserInfo = async () => {
        console.log("gyeyagtype : ", gyeyagtype);
        console.log("lookupGyeyagtype : ", lookupGyeyagtype);

        if (!checkValidLookup()) {
            return;
        }

        if (!window.confirm("수정하시겠습니까?")) {
            return;
        }

        const data = await axios.post("updateWorkerInfo", {
            geunrojanm: lookupGeunrojanm, 
            jumin: lookupJumin, 
            phonenumber: lookupPhonenumber, 
            email: lookupEmail, 
            address: lookupAddress, 
            ibsail: lookupIbsail, 
            toesail: lookupToesail, 
            jiggeub: lookupJiggeub, 
            buseo: lookupBuseo, 
            gyeyagtype: lookupGyeyagtype, 
            gyeyagend: lookupGyeyagend, 
            jigmu: lookupJigmu, 
            weekMinh: lookupWeekMinh, 
            basicbosu: lookupBasicbosu, 
            fixsudang: lookupFixsudang, 
            sigdae: lookupSigdae, 
            caryujibi: lookupCaryujibi, 
            othersudang1: lookupOthersudang1, 
            othersudang2: lookupOthersudang2,
            naeseonnumber: lookupNaeseonnumber,
        });

        if (data.data === "SUCCESS") {
            alert("수정에 성공했습니다.");
            toggleplus();
            getUserInfoList();
        } else {
            alert("수정에 실패했습니다.");
        }
    };

    const AddUserInfo = async () => {

        if (!checkValid()) {
            return;
        }

        if (!window.confirm("저장하시겠습니까?")) {
            return;
        }
        console.log(inputs);
        let usernameObject = { username: getUsername() };
        const data = await axios.post("saveWorkerInfo", Object.assign(inputs, usernameObject));

        if (data.data === "SUCCESS") {
            alert("저장에 성공했습니다.");
            toggleplus3();
            getUserInfoList();
            resetUserInfo();
        } else {
            alert("저장에 실패했습니다.");
        }

    };

    const onChangeSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const onChangeLookupSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setLookupInputs({
            ...lookupInputs,
            [name]: value,
        });
    }

    const getUserInfoList = async () => {
        const data = await axios.post("workerInfoList", {
            username: getUsername(),
        });
        setDataTable(data.data);
    };

    const checkValidLookup = () => {
        if (!lookupGeunrojanm) {
            alert("이름을 입력해주세요.");
            return 0;
        }

        if (!lookupJumin) {
            alert("주민번호 양식을 맞춰주세요.");
            return 0;
        }

        if (!lookupPhonenumber) {
            alert("전화번호를 입력해주세요.");
            return 0;
        }

        if (!lookupAddress) {
            alert("주소를 입력해주세요.");
            return 0;
        }

        if (!lookupIbsail) {
            alert("입사일을 입력해주세요.");
            return 0;
        }

        if (!lookupGyeyagtype) {
            alert("계약종류를 입력해주세요.");
            return 0;
        }

        if (!lookupWeekMinh) {
            alert("주소정근로시간을 입력해주세요.");
            return 0;
        }

        if (!lookupBasicbosu) {
            alert("기본급을 입력해주세요.");
            return 0;
        }

        return 1;
    }

    const checkValid = () => {
        if (!geunrojanm) {
            alert("이름을 입력해주세요.");
            return 0;
        }

        if (!jumin) {
            alert("주민번호를 입력해주세요.");
            return 0;
        }

        if (!phonenumber) {
            alert("전화번호를 입력해주세요.");
            return 0;
        }

        if (!address) {
            alert("주소를 입력해주세요.");
            return 0;
        }

        if (!ibsail) {
            alert("입사일을 입력해주세요.");
            return 0;
        }

        if (!gyeyagtype) {
            alert("계약종류를 입력해주세요.");
            return 0;
        }

        if (!weekMinh) {
            alert("주소정근로시간을 입력해주세요.");
            return 0;
        }

        if (!basicbosu) {
            alert("기본급을 입력해주세요.");
            return 0;
        }

        return 1;
    }

    useEffect(() => {
        console.log(dataTable);
    }, [dataTable]);

    useEffect(() => {
        getUserInfoList();
    }, []);

    // 숫자 , 찍기
    const inputPriceFormat = (str: any) => {
        console.log("s", str);
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


    return (
        <div>
            <Row>
                <Col>
                    <Button className="float-end" variant="link" onClick={toggleplus3}>직원추가</Button>
                </Col>
            </Row>

            <div className="table-responsive mt-2 text-center">
                <Table className="table table-bordered table-centered" hover>
                    <thead className="table-madegray" style={{ color: "#a3a7ad" }}>
                        <tr>
                            <th>이름</th>
                            <th>부서</th>
                            <th>직급</th>
                            <th>입사일</th>
                            <th>상세조회</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataTable?.map((data, index) =>
                                <>
                                    <tr key={index}>
                                        <td>{data.geunrojanm}</td>
                                        <td>{data.buseo}</td>
                                        <td>{data.jiggeub}</td>
                                        <td>{data.ibsail}</td>
                                        <td><Button variant="link" size="sm" onClick={() => { toggleplus(); setClickIndex(index); }}>➕</Button></td>
                                    </tr>
                                </>
                            )
                        }
                    </tbody>
                </Table>
            </div>
            {/*상세조회버튼 추후삭제요망  */}
            <Button variant="link" size="sm" onClick={() => { toggleplus(); }}>➕</Button>
            {/* 근로자정보 상세보기 */}

            <Modal show={isOpen6} onHide={toggleplus} backdrop={"static"}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <p className="text-white  mb-0" style={{ fontSize: "22px" }}>상세조회</p>

                </Modal.Header>
                <Modal.Body className="plus">
                    <p className="mb-2" style={{ fontSize: "19px" }}>• 개인정보</p>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>이름 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="나이스"
                                    name="lookupGeunrojanm"
                                    onChange={onChangeLookup}
                                    value={lookupGeunrojanm}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주민번호 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="9902092669985"
                                    name="lookupJumin"
                                    onChange={onChangeLookup}
                                    value={lookupJumin}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>연락처 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="01012345678"
                                    name="lookupPhonenumber"
                                    onChange={onChangeLookup}
                                    value={lookupPhonenumber}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>이메일 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="jj@nicenomu.com"
                                    name="lookupEmail"
                                    onChange={onChangeLookup}
                                    value={lookupEmail}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주소 <br />
                            <input
                                className="form-control"
                                style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                placeholder="서울시 강서구 마곡동"
                                name="lookupAdress"
                                onChange={onChangeLookup}
                                value={lookupAddress}
                            />
                        </p>
                    </Row>
                    <hr />
                    <p className="mb-2" style={{ fontSize: "19px" }}>• 인사정보</p>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>입사일 <br />
                                <input
                                    className="form-control"
                                    type="date"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    name="lookupIbsail"
                                    onChange={onChangeLookup}
                                    value={lookupIbsail}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>퇴사일 <br />
                                <input
                                    className="form-control"
                                    type="date"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    name="lookupToesail"
                                    onChange={onChangeLookup}
                                    value={lookupToesail}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>직급 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="사원"
                                    name="lookupJiggeub"
                                    onChange={onChangeLookup}
                                    value={lookupJiggeub}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>부서 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="생산"
                                    name="lookupBuseo"
                                    onChange={onChangeLookup}
                                    value={lookupBuseo}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>계약종류 <br />
                                <select className="form-select" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} name="lookupGyeyagtype" onChange={onChangeLookupSelectBox} value={lookupGyeyagtype}>
                                    <option>-- 선택 --</option>
                                    <option value="jeonggyu">정규직</option>
                                    <option value="giganje">기간제</option>
                                </select>
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>계약종료일 <br />
                                <input
                                    className="form-control"
                                    type="date"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    name="lookupGyeyagend"
                                    onChange={onChangeLookup}
                                    value={lookupGyeyagend}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>직무 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="사무보조,단순제조·생산 등"
                                    name="lookupJigmu"
                                    onChange={onChangeLookup}
                                    value={lookupJigmu}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주소정근로시간(최대40h) <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="8"
                                    name="lookupWeekMinh"
                                    onChange={onChangeLookup}
                                    value={lookupWeekMinh}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>내선번호 <br />
                                <input
                                    className="form-control"
                                    type="number"
                                    min={0}
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="7700"
                                    name="lookupNaeseonnumber"
                                    onChange={onChangeLookup}
                                    value={lookupNaeseonnumber}
                                />
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <p className="mb-2" style={{ fontSize: "19px" }}>• 임금정보</p>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0 " style={{ fontSize: "14px", color: "#a3a3a3" }}>기본급 <br />
                                <input className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    type="text"
                                    name="lookupBasicbosu"
                                    onChange={onChangeLookup}
                                    value={lookupBasicbosu}
                                >
                                </input>
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>고정수당 <br />
                                <input className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    type="text"
                                    name="fixsudang"
                                    onChange={onChangeLookup}
                                    value={lookupFixsudang}
                                >
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0 " style={{ fontSize: "14px", color: "#a3a3a3" }}>식대 <br />
                                <input className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    type="text"
                                    name="sigdae"
                                    onChange={onChangeLookup}
                                    value={lookupSigdae}
                                >
                                </input>
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>차량유지비 <br />
                                <input className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    type="text"
                                    name="caryujibi"
                                    onChange={onChangeLookup}
                                    value={lookupCaryujibi}
                                >
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>기타수당1 <br />
                                <input className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    type="text"
                                    name="othersudang1"
                                    onChange={onChangeLookup}
                                    value={lookupOthersudang1}
                                >
                                </input>
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>기타수당2 <br />
                                <input className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    type="text"
                                    name="othersudang2"
                                    onChange={onChangeLookup}
                                    value={lookupOthersudang2}
                                >
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>보육수당 <br />
                                <input className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    type="text"
                                    name="caryujibi"
                                    onChange={onChangeLookup}
                                    value={lookupBoyugsudang}
                                >
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" style={{ width: "99%" }} type="button" onClick={UpdateUserInfo} >
                        수정
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* 직원추가 모달 */}
            <Modal show={isOpen7} onHide={toggleplus3} backdrop={"static"}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton>
                    <p className="text-white mb-0" style={{ fontSize: "22px" }}>직원추가</p>
                </Modal.Header>
                <Modal.Body className="plus3">
                    {/* <p className="mb-0"style={{fontSize:"13px"}}> *필수입력항목</p> */}
                    <p className="mb-2" style={{ fontSize: "19px" }}>• 개인정보</p>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>이름 * <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="나이스"
                                    name="geunrojanm"
                                    onChange={onChange}
                                    value={geunrojanm}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주민번호 *<br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="890209-2669985"
                                    name="jumin"
                                    onChange={onChange}
                                    value={jumin}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>연락처 *<br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="010-1234-5678"
                                    name="phonenumber"
                                    onChange={onChange}
                                    value={phonenumber}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>이메일 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="nice7700@nicenomu.com"
                                    name="email"
                                    onChange={onChange}
                                    value={email}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주소 *<br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "100%", marginTop: "7px" }}
                                    placeholder="서울시 강서구 마곡중앙로165"
                                    name="address"
                                    onChange={onChange}
                                    value={address}
                                />
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <p className="mb-2" style={{ fontSize: "19px" }}>• 인사정보</p>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>입사일 *<br />
                                <input
                                    className="form-control"
                                    type="date"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    name="ibsail"
                                    onChange={onChange}
                                    value={ibsail}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>계약종료일<br />
                                <input
                                    className="form-control"
                                    type="date"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    name="gyeyagend"
                                    onChange={onChange}
                                    value={gyeyagend}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>계약종류 *<br />
                                <select className="form-select" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}>
                                    <option>-- 선택 --</option>
                                    <option value="jeonggyu">정규직</option>
                                    <option value="giganje">기간제</option>
                                </select>
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>재직상태<br />
                                <input
                                    className="form-control"
                                    type="date"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    name="jaejigsangtae"
                                    onChange={onChange}
                                    value={jaejigsangtae}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>부서 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="생산"
                                    name="buseo"
                                    onChange={onChange}
                                    value={buseo}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>직급 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="사원"
                                    name="jiggeub"
                                    onChange={onChange}
                                    value={jiggeub}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>직무 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="사무보조"
                                    name="jigmu"
                                    onChange={onChange}
                                    value={jigmu}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주소정근로시간(최대40h) *<br />
                                <input
                                    className="form-control"
                                    type="number"
                                    min={0}
                                    max={40}
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="8"
                                    name="weekMinh"
                                    onChange={onChange}
                                    value={weekMinh}
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>내선번호 <br />
                                <input
                                    className="form-control"
                                    type="number"
                                    min={0}
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="7700"
                                    name="naeseonnumber"
                                    onChange={onChange}
                                    value={naeseonnumber}
                                />
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <p className="mb-2" style={{ fontSize: "19px" }}>• 임금정보</p>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>기본급 *<br />
                                <input className="form-control" placeholder='3,000,000'
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px", textAlign: "right" }}
                                    type="text"
                                    name="basicbosu"
                                    onChange={(e) => setBasicbosu(inputPriceFormat(e.target.value))}
                                    value={basicbosu}
                                />

                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>고정수당 <br />
                                <input className="form-control" placeholder='0'
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px", textAlign: "right" }}
                                    type="text"
                                    name="fixsudang"
                                    value={fixsudang}
                                    onChange={(e) => setFixsudang(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>식대 <br />
                                <input className="form-control" placeholder='200,000'
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px", textAlign: "right" }}
                                    type="text"
                                    name="sigdae"
                                    value={sigdae}
                                    onChange={(e) => setSigdae(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>차량유지비 <br />
                                <input className="form-control" placeholder='350,000'
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px", textAlign: "right" }}
                                    type="text"
                                    name="caryujibi"
                                    value={caryujibi}
                                    onChange={(e) => setCaryujibi(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>보육수당 <br />
                                <input className="form-control" placeholder='0'
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px", textAlign: "right" }}
                                    type="text"
                                    name="boyugsudang"
                                    onChange={(e) => setBoyugsudang(inputPriceFormat(e.target.value))}
                                    value={boyugsudang}
                                >
                                </input>
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>기타수당1 <br />
                                <input className="form-control" placeholder='50,000'
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px", textAlign: "right" }}
                                    type="text"
                                    name="othersudang1"
                                    value={othersudang1}
                                    onChange={(e) => setOthersudang1(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>기타수당2 <br />
                                <input className="form-control" placeholder='0'
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px", textAlign: "right" }}
                                    type="text"
                                    name="othersudang2"
                                    value={othersudang2}
                                    onChange={(e) => setOthersudang2(inputPriceFormat(e.target.value))}>
                                </input>
                            </p>
                        </Col>
                    </Row>
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" type="button" style={{ width: "99%" }} onClick={AddUserInfo} >
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default WorkerInfo;