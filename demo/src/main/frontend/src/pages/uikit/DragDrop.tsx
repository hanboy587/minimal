import { useState } from 'react';
import { Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { PageTitle } from 'components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Wizard, Steps, Step } from 'react-albus';
import avatar1 from 'assets/images/users/avatar-3.png';
import { useToggle } from 'hooks';


// 전자세금계산서 (영세율) 모바일ver

const YeongseyulgyesanseoM = () => {
    const [isOpen5, toggleQnA] = useToggle();
    const methods = useForm({
        defaultValues: {
            password: '12345',
            statictext: 'email@example.com',
            color: '#727cf5',
        },
    });

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    const [order_date] = useState<string>('10,000,000');
    const [order_date2] = useState<string>('OX주식회사');
    const [order_date3] = useState<string>('10,000,000');

    return (
        <>
           
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Button variant="link" className="float-end mdi mdi-progress-question text-black" onClick={toggleQnA}>
                                설명서
                            </Button>
                            <Wizard>
                                <Steps>
                                    <Step
                                        id="Add Certificate"
                                        render={({ next }) => (
                                            <Form>
                                                <div>
                                                    <h3 className="header-title mb-2 font-18"> 인증서를 선택해주세요</h3>
                                                    <h6 className="mb-3 text-uppercase bg-light p-2">
                                                        <i className=" mdi mdi-alert-circle-outline me-1"></i> 세금계산서 발급용 인증서만 선택 가능합니다. 발급용 인증서가 없다면 인증서를 발급해주세요
                                                    </h6>
                                                </div>
                                                <br />
                                                <Col md={2}>
                                                    <Card className="my-1 shadow-none border">
                                                        <div className="p-2">
                                                            <Row className="align-items-center">
                                                                <div className="col-auto">
                                                                    <img src={avatar1} className="rounded-circle" alt="" />
                                                                </div>
                                                                <div className="col ps-0">
                                                                    <p className="text-info fw-bold mb-0">
                                                                        나이스(나이스 노무법인)00224547
                                                                    </p>
                                                                    <p className="mb-0">금융결제원(전자세금용)</p>
                                                                    <p className="mb-0">2022.12.30 완료</p>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <input className="form-check-input me-1" type="Radio" value="" aria-label="..." />
                                                                </div>
                                                            </Row>
                                                        </div>
                                                    </Card>
                                                </Col>
                                                <ul className="text-center">
                                                    <Link to="#" className="btn btn-outline-info  mt-3 mb-2">
                                                        <i className="mdi mdi-plus-circle me-2"></i> 전자세금용 인증서 추가
                                                    </Link>
                                                </ul>

                                                <ul className="list-inline wizard mt-2 mb-0">
                                                    <li className="next list-inline-item float-end">
                                                        <Button onClick={next} variant="link">
                                                            다음
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    />
                                    <Step
                                        id="information"
                                        render={({ next, previous }) => (
                                            <Form>
                                                <div>
                                                    <h3 className="header-title mb-5 font-18"> 거래처 정보를 입력해주세요</h3>
                                                </div>
                                                <div className="text-end text-black">공급자 구분 * &nbsp;&nbsp; <input type="radio" name="radio"></input> 기업 &nbsp; <input type="radio" name="radio"></input> 개인 &nbsp; <input type="radio" name="radio"></input> 외국인</div>
                                                <div className="table-responsive mt-3 mb-0 text-center">
                                                    <table className="table table-bordered table-centered text-black" style={{ width: "100%" }}>
                                                        <thead className="table-light">
                                                            <tr>
                                                                <th colSpan={3}>전자세금계산서(공급자보관용)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="table-danger" rowSpan={7}>공급자</td>
                                                                <td className="table-danger">등록번호 *</td>
                                                                <td>111-22-33344</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">종사업장번호</td>
                                                                <td>00000000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">상호(법인명) *</td>
                                                                <td>사업장테스트</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">성명(대표자) *</td>
                                                                <td>나이스</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">주소</td>
                                                                <td>서울시 강서구 마곡동</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">업태</td>
                                                                <td>판매</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">종목</td>
                                                                <td>소프트</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue" rowSpan={7}>공급받는자</td>
                                                                <td className="table-blue">등록번호 *</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">종사업장번호</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">상호(법인명) *</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">성명(대표자) *</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">주소</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">업태</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">종목</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>작성일자 *</td>
                                                                <td><input type="date" style={{ width: "180px", border: "1px solid #EEEEEE", outline: "none", }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>공급가격 *</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input ></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>세액 *</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>비고</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>월 / 일</td>
                                                                <td><input style={{ width: "35px", border: "1px solid #EEEEEE", outline: "none" }}></input> / <input style={{ width: "35px", border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>품목</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>규격</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>수량</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>단가</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>공급가액</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>세액</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>비고</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>합계금액</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>현금</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>수표</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>어음</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>외상무수금</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="font-20" colSpan={3}>이 금액을  &nbsp; &nbsp; <input type="radio" name="radio"></input> 영수 &nbsp;
                                                                    <input type="radio" name="radio"></input> 청구 &nbsp; 함
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="table-responsive mt-3 text-center">
                                                    <table className="table table-bordered table-centered text-black" style={{ width: "100%" }}>
                                                        <thead className="table-light">
                                                            <tr>
                                                                <th></th>
                                                                <th>발급담당자</th>
                                                                <th> 수신담당자1</th>
                                                                <th>수신담당자2</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>담당부서명</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td>담당자 명*</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td>이메일 *</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                            <tr>
                                                                <td> 연락처</td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                                <td><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <ul className="list-inline wizard mb-0">
                                                    <li className="previous list-inline-item">
                                                        <Button onClick={previous} variant="link">
                                                            뒤로
                                                        </Button>
                                                    </li>
                                                    <li className="next list-inline-item float-end">
                                                        <Button onClick={next} variant="link">
                                                            다음
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    />
                                    <Step
                                        id="Issued"
                                        render={({ next, previous }) => (
                                            <Form>
                                                <div>
                                                    <h3 className="header-title mb-5 font-18"> 미리보기</h3>
                                                </div>
                                                <div className="table-responsive mt-3 mb-0 text-center">
                                                    <table className="table table-bordered table-centered text-black" style={{ width: "100%" }}>
                                                        <thead className="table-light">
                                                            <tr>
                                                                <th colSpan={3}>전자세금계산서(공급자보관용)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="table-danger" rowSpan={7}>공급자</td>
                                                                <td className="table-danger">등록번호 *</td>
                                                                <td>111-22-33344</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">종사업장번호</td>
                                                                <td>00000000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">상호(법인명) *</td>
                                                                <td>사업장테스트</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">성명(대표자) *</td>
                                                                <td>나이스</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">주소</td>
                                                                <td>서울시 강서구 마곡동</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">업태</td>
                                                                <td>판매</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-danger">종목</td>
                                                                <td>소프트</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue" rowSpan={7}>공급받는자</td>
                                                                <td className="table-blue">등록번호 *</td>
                                                                <td>0001144552</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">종사업장번호</td>
                                                                <td>1111111</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">상호(법인명) *</td>
                                                                <td>MM주식회사</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">성명(대표자) *</td>
                                                                <td>MMS</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">주소</td>
                                                                <td>서울시</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">업태</td>
                                                                <td>판매</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-blue">종목</td>
                                                                <td>소프트</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>작성일자 *</td>
                                                                <td>2022.05.01</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>공급가격 *</td>
                                                                <td>1,000,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>세액 *</td>
                                                                <td>100,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>비고</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>월 / 일</td>
                                                                <td>04/21</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>품목</td>
                                                                <td>키보드</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>규격</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>수량</td>
                                                                <td>100</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>단가</td>
                                                                <td>1,000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>공급가액</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>세액</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>비고</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>합계금액</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>현금</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>수표</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>어음</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="table-light" style={{ border: "1px solid #FFFFFF" }} colSpan={2}>외상무수금</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="font-20" colSpan={3}>이 금액을  &nbsp; &nbsp;청구 &nbsp; 함
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <ul className="list-inline wizard mb-0">
                                                    <li className="previous list-inline-item">
                                                        <Button onClick={previous} variant="link">
                                                            뒤로
                                                        </Button>
                                                    </li>
                                                    <li className="next list-inline-item float-end">
                                                        <Button onClick={next} variant="link">
                                                            발급하기
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    />
                                    <Step
                                        id="completed"
                                        render={({ previous }) => (
                                            <Row>
                                                <Col sm={12}>
                                                    <div className="text-center">
                                                        <h2 className="mt-0">
                                                            <i className="mdi mdi-check-all"></i>
                                                        </h2>
                                                        <h3 className="mt-0">세금계산서(영세율) 발급을 완료했습니다</h3>

                                                        <p className="w-75 mt-2 mb-4 mx-auto">
                                                            완료된 계산서는 목록에서 확인이 가능하며<br />
                                                            홈택스에 요청한 작업이 완료까지 시간이 소요될수 있습니다.
                                                        </p>

                                                        {/* <div className="mb-3">
                                                
                                            </div> */}
                                                    </div>
                                                </Col>

                                                <Col sm={12}>
                                                    <ul className="list-inline wizard mb-0">
                                                        <li className="previous list-inline-item">
                                                            <Button onClick={previous} variant="link">
                                                                뒤로
                                                            </Button>
                                                        </li>

                                                        <li className="next list-inline-item float-end">
                                                            <Button variant="link">완료</Button>
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        )}
                                    />
                                </Steps>
                            </Wizard>
                        </Card.Body>
                        {/* QnA 모달 */}
                        <Modal show={isOpen5} onHide={toggleQnA}>
                            <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                            >
                                <h5 className="text-white">전자세금계산서(영세율)</h5>

                            </Modal.Header>
                            <Modal.Body className="qna">
                                <Row>
                                    <Col>
                                        <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>영세율이란?</p>
                                        <p className="font-15">
                                            세율이 0 인 경우를 영세율이라고 합니다
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>영세율 세금계산서란?</p>
                                        <p className="font-15">
                                            부가가치세 매출 세액을 0% 의 세율을 적용하는 세금계산서를 말합니다 영세율 적용대상 사업자는 부가세 신고 및 납부 의무가 있으며
                                            물품을 구입하면서 수취한 세금계산서의 매입세액을 공제받을수 있습니다
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>영세율 적용대상 사업자</p>
                                        <p className="font-15">
                                            수출업자, 내국신용장에 의해 수출물품을 생산하는 수출품생산업자/ 기타 외화획득사업 입니다
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
                </Col>
            </Row>
        </>
    );
};


const CompletelistyeongseyulM = () => {

    const [order_date2] = useState<string>('2022.05.01');
    const [order_date3] = useState<string>('ox주식회사');
    const [order_date4] = useState<string>('100,000');
    const [order_date5] = useState<string>('10,000');
    const [order_date6] = useState<string>('2022.04.22');
    const [order_date7] = useState<string>('MM주식회사');
    const [order_date8] = useState<string>('5,000');
    const [order_date9] = useState<string>('500');
    const [order_date10] = useState<string>('2022.04.22');
    const [order_date11] = useState<string>('CC주식회사');
    const [order_date12] = useState<string>('1500');
    const [order_date13] = useState<string>('150');
    const [order_date14] = useState<string>('-');


    return (
        <>
            <Card>
                <Card.Body>
                    <h3>최근 발급한 세금계산서</h3>
                    <p>나이스에서 발급하여 홈택스에 등록이 완료된 세금계산서만 조회됩니다</p>

                    <div className="table-responsive mt-3 text-center">
                        <table className="table table-bordered table-centered text-black">
                            <thead className="table-light">
                                <tr>
                                    <th>작성일자</th>
                                    <th>공급받는자</th>
                                    <th>공급가격</th>
                                    <th>세액</th>
                                    <th>비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{order_date2}</td>
                                    <td>{order_date3}</td>
                                    <td>{order_date4}</td>
                                    <td>{order_date5}</td>
                                    <td>{order_date14}</td>
                                </tr>
                                <tr>
                                    <td>{order_date6}</td>
                                    <td>{order_date7}</td>
                                    <td>{order_date8}</td>
                                    <td>{order_date9}</td>
                                    <td>{order_date14}</td>
                                </tr>
                                <tr>
                                    <td>{order_date10}</td>
                                    <td>{order_date11}</td>
                                    <td>{order_date12}</td>
                                    <td>{order_date13}</td>
                                    <td>{order_date14}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};



const YeongseyulMpage = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[

                ]}
                title={'세금계산서(영세율)'}
            />

            <Row>
                <Col>
                    <YeongseyulgyesanseoM />
                </Col>
            </Row>
            <Row>
                <Col>
                    <CompletelistyeongseyulM />
                </Col>
            </Row>
        </>
    );
};
export default YeongseyulMpage;
