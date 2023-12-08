import { Row, Col, Card, ListGroup, Badge, Table, Modal, Button } from 'react-bootstrap';
import { PageTitle } from 'components';
import { Link } from 'react-router-dom';
import { useToggle } from 'hooks';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

// 일용정보



const IlYongJeongBo = () => {
    const [isOpen7, toggleQnA2] = useToggle();
    const [isOpen8, toggleplus2] = useToggle();
    const [isOpen9, toggleplus4] = useToggle();

    // 숫자뒤에 , 찍기
    const [ilgeub, setIlgeub] = useState();
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

    // post방식

    const [inputs, setInputs] = useState({
        userilyong: "",
        jumin: "",
        phonNum: "",
        email: "",
        address: "",
        ibsail: "",
        jiggeub: "",
        buseo: "",
    });
    const { userilyong, jumin, phonNum, email, address, ibsail,
        jiggeub, buseo,
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
            userilyong: "",
            jumin: "",
            phonNum: "",
            email: "",
            address: "",
            ibsail: "",
            jiggeub: "",
            buseo: "",
        });
    };

    async function postData() {
        try {
            const response = await axios.post('url?', {
                userilyong: "",
                jumin: "",
                phonNum: "",
                email: "",
                address: "",
                ibsail: "",
                jiggeub: "",
                buseo: "",
            });
            console.log(response);
        } catch (error) {
            // 응답실패
            console.error(error);
        }
    }

    const format = "MM/DD/YYYY";

    // multiple datepicker
    const [dates, setDates] = useState([
        new DateObject().set({ format })
    ]);


    const users = [
        { id: 1, name: "나이스", buseo: "인사", jiggeub: "사원", ibsail: "2023-01-01" },
        { id: 2, name: "나이스2", buseo: "물류", jiggeub: "팀장", ibsail: "2001-03-15" },
        { id: 3, name: "나이스3", buseo: "홍보", jiggeub: "대리", ibsail: "2022-07-01" },
    ];



    return (
        <div>
            <Row className="mt-3">
                <Col>
                    <Button variant="link" className="mdi mdi-progress-question text-black" onClick={toggleQnA2}>
                        설명서
                    </Button>
                </Col>
                <Col>
                    <Button className="float-end" variant="link" onClick={toggleplus4}>직원추가</Button>
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
                            <th>더보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.buseo}</td>
                                <td>{user.jiggeub}</td>
                                <td>{user.ibsail}</td>
                                <td>
                                    <Button variant="link" size="sm" onClick={toggleplus2}>
                                        ➕
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {/* QnA 모달 */}
            <Modal show={isOpen7} onHide={toggleQnA2}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <p className="text-white">일용근로자</p>

                </Modal.Header>
                <Modal.Body className="qna">
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>일용근로자란?</p>
                            <p className="font-15">
                                1월 미만의 기간 동안 고용되는 근로자로 근로계약기간이 1일단위 또는 1월 미만인 경우에 해당됩니다 <br />
                                ※ 1개월 미만 고용이란 1개월 미만으로 고용된 경우가 아니며, <br />
                                근로계약기간이 1일단위, 또는 1월 미만인 경우에 해당됩니다 <br />
                                (일용근로자는 국민연금과 건강보험 납부의무가 없습니다)
                            </p>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" variant="link" type="submit" onClick={toggleQnA2} >
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* 근로자정보 상세보기 */}
            <Modal show={isOpen8} onHide={toggleplus2} backdrop={"static"}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <p className="text-white mb-0" style={{ fontSize: "22px" }}>상세조회</p>

                </Modal.Header>
                <Modal.Body className="plus2">
                    <p className="mb-2" style={{ fontSize: "19px" }}>• 개인정보</p>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>이름 * <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="나이스"
                                    readOnly
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주민번호 * <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="890209-2669985"
                                    readOnly
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
                                    placeholder="010-1234-5678"
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>이메일 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="ro@sin.com"
                                    name="email"
                                    onChange={onChange}
                                    value={email}
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
                            />
                        </p>
                    </Row>
                    <hr />
                    <h4 className="mb-2" style={{ fontSize: "19px" }}>• 인사정보</h4>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>입사일 *<br />
                                <DatePicker
                                    className="form-control"
                                    style={{ width: "99%", padding: "18px" }}
                                    value={dates}
                                    onChange={(setDates) => console.log(setDates)}
                                    multiple
                                    sort
                                    format={format}
                                    calendarPosition="bottom-center"
                                    plugins={[<DatePanel />]}
                                />
                            </p>
                        </Col>
                        <Col sm={6}>
                            <p style={{ fontSize: "14px" }}>
                                {dates.map((date, index) => (
                                    <li key={index}>{date.format()}</li>
                                ))}
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
                                    name="buseo"
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>고용 이력 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    name="jiggeub"
                                />
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <p className="mb-2" style={{ fontSize: "19px" }}>• 임금정보</p>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>일급 <br />
                                <input className="form-control" placeholder='100,000'
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px", textAlign: "right" }}
                                    name="ilgeub"
                                    value={ilgeub}
                                    onChange={(e) => (setIlgeub(inputPriceFormat(e.target.value)))}
                                />
                            </p>
                        </Col>
                    </Row>
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" style={{ width: "99%" }}
                        type="submit"
                        onClick={toggleplus2} >
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* 직원추가 */}
            <Modal show={isOpen9} onHide={toggleplus4} backdrop={"static"}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <p className="text-white mb-0" style={{ fontSize: "22px" }}>직원추가</p>

                </Modal.Header>
                <Modal.Body className="plus4">
                    {/* <p className="mb-0 font-13"> *필수입력항목</p> */}
                    <p className="mb-2" style={{ fontSize: "19px" }}>• 개인정보</p>
                    <Row>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>이름 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="나이스"
                                    name="userilyong"
                                    onChange={onChange}
                                    value={userilyong}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주민번호<br />
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
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>연락처<br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="010-1234-5678"
                                    name="phonNum"
                                    onChange={onChange}
                                    value={phonNum}
                                />
                            </p>
                        </Col>
                        <Col sm={6} className="mb-2">
                            <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>이메일 <br />
                                <input
                                    className="form-control"
                                    style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                    placeholder="nice@nicenomu.com" name="email" onChange={onChange} value={email}></input>
                            </p>
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주소 *<br />
                            <input
                                className="form-control"
                                style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                placeholder="서울시 강서구 마곡동"
                                name="address"
                                onChange={onChange}
                                value={address}
                            />
                        </p>
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
                    </Row>
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" style={{ width: "99%" }} type="submit" onClick={toggleplus4} >
                        저장
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default IlYongJeongBo;