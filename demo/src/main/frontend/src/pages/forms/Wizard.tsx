import { Row, Col, Card, Form, Button, ProgressBar, Modal, Container } from 'react-bootstrap';
import { Wizard, Steps, Step } from 'react-albus';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { VerticalForm, FormInput, PageTitle } from 'components';
import { Link } from 'react-router-dom';
import { useToggle } from 'hooks';
import axios from 'axios';
import { useState, SetStateAction, useEffect } from 'react';

// 이직확인서 (노)

const WizardWithFormValidation = () => {
    /*
     * form validation schema
     */
    const validationSchema = yupResolver(
        yup.object().shape({
            birthdate: yup.string().required('생년월일을입력해주세요'),
            // checkbox: yup.bool().oneOf([true]),
        })
    );
    const [isOpen5, toggleQnA] = useToggle();

    // input 값 보내기
    const [inputs, setInputs] = useState({
        birthdate: "",
    });

    const { birthdate } = inputs;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            birthdate: "",
        });
    };

    async function postData() {
        try {
            const response = await axios.post('url?', {
                birthdate: "",
            });
            console.log(response);
        } catch (error) {
            // 응답실패
            console.error(error);
        }
    };

    // useEffect

    const [geunloname, setGeunloname] = useState('')
    const [phoneNum, setphoneNum] = useState('')
    const [sanghomyeong, setSanghomyeong] = useState('')
    const [sanghoaddress, setSanghoaddress] = useState('')
    const [ijigil, setIjigil] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('url');
                setGeunloname(res.data[0].geunloname)
                setphoneNum(res.data[0].phoneNum)
                setIjigil(res.data[0].ijigil)
                setSanghomyeong(res.data[0].sanghomyeong)
                setSanghoaddress(res.data[0].sanghoaddress)
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    return (
        <Card>
            <Card.Body>
                <p className="header-title mb-3" style={{ fontSize: "20px" }}>이직확인서 발급요청
                    <Button variant="link" className="float-end mdi mdi-progress-question text-black" onClick={toggleQnA}>
                        설명서
                    </Button>
                </p>
                <Wizard
                    render={({ step, steps }) => (
                        <>
                            <ProgressBar
                                animated
                                striped
                                variant="success"
                                now={((steps.indexOf(step) + 1) / steps.length) * 100}
                                className="mb-3 progress-sm"
                            />

                            <Steps>
                                <Step
                                    id="requester"
                                    render={({ next }) => (
                                        <VerticalForm onSubmit={(event, values) => next()} resolver={validationSchema}>
                                            <p className="mb-3 text-uppercase bg-light rounded-3" style={{ fontSize: "17px", padding: "10px" }}>
                                                <i className="mdi mdi-account-reactivate me-1" style={{ fontSize: "22px" }}></i> 이직자(요청인)
                                            </p>
                                            {/* <div>
                                                <p style={{ color: "red" }}>*필수입력항목</p>
                                            </div> */}
                                            <p className="mb-0" style={{ fontSize: "16px" }}>성명 <br />
                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%", fontSize: "18px" }} placeholder="나이스" name="geunloname" value={geunloname}></input>
                                            </p>
                                            <br />
                                            <p className="mb-0" style={{ fontSize: "16px" }}>생년월일<br />
                                                <input className="form-control" type="number" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%", fontSize: "18px" }} placeholder="19991212" name="birthdate" value={birthdate} onChange={onChange}></input>
                                            </p>
                                            <br />
                                            <p className="mb-3" style={{ fontSize: "16px" }}>(휴대)전화번호 <br />
                                                <input className="form-control" type="number" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%", fontSize: "18px" }} placeholder="01012345678" name="phoneNum" value={phoneNum}></input>
                                            </p>
                                            <p className="mb-3 text-uppercase bg-light rounded-3" style={{ fontSize: "17px", padding: "10px" }}>
                                                <i className="mdi mdi-office-building me-1" style={{ fontSize: "22px" }}></i> 이직사업장(피요청인)
                                            </p>
                                            <p className="mb-0" style={{ fontSize: "16px" }}>명칭<br />
                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%", fontSize: "18px" }} placeholder="나이스노무법인" name="sanghomyeong" value={sanghomyeong}></input>
                                            </p>
                                            <br />
                                            <p className="mb-0" style={{ fontSize: "16px" }}>소재지<br />
                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%", fontSize: "18px" }} placeholder="서울시 강서구 마곡동" name="sanghoaddress" value={sanghoaddress}></input>
                                            </p>
                                            <br />
                                            <p className="mb-0" style={{ fontSize: "16px" }}>이직일<br />
                                                <input className="form-control" type="number" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", width: "99%", fontSize: "18px" }} placeholder="20221212" name="ijigil" value={ijigil}></input>
                                            </p>
                                            <ul className="list-inline wizard mt-3">
                                                <li className="next list-inline-item float-end">
                                                    <Button onClick={next} variant="link" type="submit">
                                                        다음
                                                    </Button>
                                                </li>
                                            </ul>
                                        </VerticalForm>
                                    )}
                                />
                                <Step
                                    id="dumbledore"
                                    render={({ previous }) => (
                                        <Row>
                                            <Col sm={12}>
                                                <div className="text-center">
                                                    <p className="mt-0" style={{ fontSize: "25px" }}>이직확인서 신청이 완료되었습니다</p>

                                                    {/* <p className="mb-2">
                                                        <Link to='#'>접수증 발급받기</Link>
                                                    </p> */}
                                                    {/* <p className="mb-4">
                                                        <Link to='#'>이직확인서pdf</Link>
                                                    </p> */}
                                                </div>
                                            </Col>

                                            <Row className="justify-content-center">
                                                <Col lg={7} md={10} sm={11}>
                                                    <div className="horizontal-steps mt-4 mb-4 pb-5">
                                                        <div className="horizontal-steps-content">
                                                            <div className="step-item">
                                                                <span> 신청완료</span>
                                                            </div>
                                                            <div className="step-item current">
                                                                <span> 접수</span>
                                                            </div>
                                                            <div className="step-item">
                                                                <span>발급중</span>
                                                            </div>
                                                            <div className="step-item">
                                                                <span>발급완료</span>
                                                            </div>
                                                        </div>
                                                        <div className="process-line" style={{ width: '33%' }}></div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Col sm={12}>
                                                <ul className="list-inline wizard mb-0">
                                                    <li className="previous list-inline-item">
                                                        <Button onClick={previous} variant="link">
                                                            뒤로
                                                        </Button>
                                                    </li>

                                                    <li className="next list-inline-item float-end">
                                                        <Button variant="link">확인</Button>
                                                    </li>
                                                </ul>
                                            </Col>
                                        </Row>
                                    )}
                                />
                            </Steps>
                        </>
                    )}
                />
            </Card.Body>

            <Modal show={isOpen5} onHide={toggleQnA}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">이직확인요청서 작성법</h5>

                </Modal.Header>
                <Modal.Body className="qna">
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>이직확인서란?</p>
                            <p className="font-15"> 실업급여를 받기 위해서 이직(퇴사)사실을 확인하는 서류입니다.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>수급자격</p>
                            <p>  ① 이직일 이전 18개월간 피보험 단위기간이 180일 이상일 것, <br />
                                ② 근로의 의사와 능력이 있음에도 불구하고 취업하지 못한 상태일 것,  <br />
                                ③ 이직사유가 수급자격의 제한 사유에 해당하지 않을 것, <br />
                                ④ 재취업을 위한 적극적인 노력을 할 것,
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

        </Card>
    );
};

const BasicWizard = () => {
    return (
        <Card>
            <Card.Body>
                <p className="mb-3 text-uppercase bg-light rounded-3" style={{ fontSize: "17px", padding: "10px" }}>
                    <i className="mdi mdi-alert-circle-outline me-1" style={{ fontSize: "22px" }}></i> 주의
                </p>
                <section>
                    <Container>
                        <p className="mb-2" style={{ fontSize: "20px", fontWeight: "bolder" }}>이직확인서 허위작성시 벌칙</p>
                        <p style={{ fontSize: "17px" }}>
                            • 이직확인서를 거짓으로 발급해 준 사업주에게는 과태료가 부과될 수 있습니다.
                        </p>
                        <p style={{ fontSize: "17px" }}>
                            • 이직확인서를 거짓으로 작성하여 줌으로써 이직자가 실업급여를 부정하게 받은 경우<br />
                            해당 사업주도 연대하여 책임을 질 수 있습니다.
                        </p>
                        <p className='mb-2 mt-2' style={{ fontSize: "20px", fontWeight: "bolder" }}>실업급여 부정수급시 벌칙</p>
                        <p style={{ fontSize: "17px" }}>
                            • 실업급여 수급자가 거짓이나 부정한 방법으로 실업급여를 받은 경우에는 실업급여 지급이 제한되며,<br />
                            그간 지급받은 실업급여는 모두 반환되고 부정하게 지급받은 금액의 최대 5배가 추가 징수될 수 있습니다.
                        </p>
                        <p style={{ fontSize: "17px" }}>
                            • 또한, 최대 5년 이하의 징역 또는 5천만원 이하의 벌금이 부과될 수 있습니다.
                        </p>
                        <p className='mb-2 mt-2' style={{ fontSize: "20px", fontWeight: "bolder" }} >실업급여 부정수급 사례</p>
                        <p style={{ fontSize: "17px" }}>
                            • 피보험자격 취득 및 상실을 허위로 신고한 경우
                        </p>
                        <p style={{ fontSize: "17px" }}>
                            • 급여기초임금일액산정의 기초가 되는 임금액을 과다하게 기재한 경우
                        </p>
                        <p style={{ fontSize: "17px" }}>
                            • 이직사유를 허위로 기재한 경우
                        </p>
                        <p style={{ fontSize: "17px" }}>
                            • 취업상태에서 실업하였다고 신고하는 경우 등
                        </p>
                    </Container>
                </section>
            </Card.Body>
        </Card>
    );
};

const FormWizard = () => {
    return (
        <>
            <Row className="mt-3">
                <Col xl={6}>
                    <WizardWithFormValidation />
                </Col>
                <Col xl={6}>
                    <BasicWizard />
                </Col>
            </Row>
        </>
    );
};
export default FormWizard;


