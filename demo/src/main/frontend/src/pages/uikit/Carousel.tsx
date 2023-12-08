import { useState } from 'react';
import { Row, Col, Card, Button, Form, Carousel, Modal } from 'react-bootstrap';
import { PageTitle } from 'components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Wizard, Steps, Step } from 'react-albus';
import avatar1 from 'assets/images/users/avatar-3.png';
import { useToggle } from 'hooks';

const Yeongseyulwisutag = () => {
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
        <div>
            <Wizard>
                <Steps>
                    <Step
                        id="information"
                        render={({ next }) => (
                            <Form>
                                <span className="text-start  mb-0">
                                    <Button variant="link" className="mdi mdi-progress-question " style={{ color: "#6c757d" }} onClick={toggleQnA}>
                                        설명서
                                    </Button>
                                </span>
                                <span className="float-end  mb-0" style={{ fontSize: "18px" }}>
                                    공급자 구분 * &nbsp;&nbsp;
                                    <input type="radio" name="radio"></input> 기업 &nbsp;
                                    <input type="radio" name="radio"></input> 개인 &nbsp;
                                    <input type="radio" name="radio"></input> 외국인
                                </span>
                                <div className="table-responsive text-center">
                                    <table className="table table-bordered table-centered text-black mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th colSpan={10}>전자세금계산서(공급자보관용)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="table-danger" rowSpan={4} style={{ width: "1%", padding: "5px" }}>
                                                    공<br />급<br />자
                                                </td>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }} >
                                                    등록번호 *
                                                </td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }} >
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", }}
                                                        placeholder="1112233444">
                                                    </input>
                                                </td>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }} >종사업장번호</td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }} >
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", }}>
                                                    </input>
                                                </td>
                                                <td className="table-blue" rowSpan={4} style={{ width: "1%", padding: "5px" }}>
                                                    공급받는자
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>
                                                    등록번호 *
                                                </td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }} >
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}>
                                                    </input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>
                                                    종사업장번호
                                                </td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>상호(법인명) *</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="나이스노무법인">
                                                    </input>
                                                </td>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>성명(대표자) *</td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="나이스">
                                                    </input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>상호(법인명) *</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="나이스헤어">
                                                    </input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>성명(대표자) *</td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="나헤어">
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>주소</td>
                                                <td colSpan={3} style={{ width: "42%", padding: "3px 6px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%" }}
                                                        placeholder="서울시 강서구 마곡동">
                                                    </input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>주소</td>
                                                <td colSpan={3} style={{ width: "42%", padding: "3px 6px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%" }}
                                                        placeholder="서울시 강서구 마곡동">
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>업태</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="공인노무사업">
                                                    </input>
                                                </td>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>종목</td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="서비스업">
                                                    </input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>업태</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="미용업">
                                                    </input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>종목</td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="서비스업">
                                                    </input>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td className="table-madegreen" colSpan={10}>수탁사업자</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} className="table-madegreen" style={{ width: "8%", padding: "5px" }}>등록번호 *</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="11122354">
                                                    </input>
                                                </td>
                                                <td className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    종사업장번호
                                                </td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="서비스업">
                                                    </input>
                                                </td>
                                                <td colSpan={2} className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    사업장
                                                </td>
                                                <td colSpan={3} style={{ width: "42%", padding: "3px 6px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%" }}
                                                        placeholder="서울시 강서구 마곡동">
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    상호 *
                                                </td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="사업장테스트">
                                                    </input>
                                                </td>
                                                <td className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    성명 *
                                                </td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="나이스">
                                                    </input>
                                                </td>
                                                <td colSpan={2} className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    업태
                                                </td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="판매">
                                                    </input>
                                                </td>
                                                <td className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    종목
                                                </td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="소프트">
                                                    </input>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <th className="table-light" colSpan={2}>작성일자 *</th>
                                                <th className="table-light" colSpan={3}>공급가격 *</th>
                                                <th className="table-light" colSpan={3}>세액 *</th>
                                                <th className="table-light" colSpan={2}>합계금액</th>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} style={{ padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        type="date"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}>
                                                    </input>
                                                </td>
                                                <td colSpan={3} style={{ padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ width: "99%", border: "1px solid #EEEEEE", outline: "none", textAlign: "right" }}>
                                                    </input>
                                                </td>
                                                <td colSpan={3} style={{ padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ width: "99%", border: "1px solid #EEEEEE", outline: "none", textAlign: "right" }}>
                                                    </input>
                                                </td>
                                                <td colSpan={2} style={{ padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ width: "99%", border: "1px solid #EEEEEE", outline: "none", textAlign: "right" }}>
                                                    </input>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table table-bordered table-centered mt-0">
                                        <tbody>
                                            <tr>
                                                <th className="table-light" style={{ width: "15%", }}>월/일</th>
                                                <th className="table-light" style={{ width: "15%", }}>품목</th>
                                                <th className="table-light" style={{ width: "10%", }}>규격</th>
                                                <th className="table-light" style={{ width: "10%", }}>수량</th>
                                                <th className="table-light" style={{ width: "10%", }}>단가</th>
                                                <th className="table-light" style={{ width: "10%", }}>공급가액</th>
                                                <th className="table-light" style={{ width: "10%", }}>세액</th>
                                                <th className="table-light" colSpan={2} style={{ width: "15%", padding: "5px" }}>
                                                    비고
                                                </th>
                                                <th className="table-light" style={{ width: "5%", }}>
                                                    <button
                                                        style={{ width: "30px", border: "1px solid gray", outline: "none" }}>
                                                        +
                                                    </button>
                                                </th>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "15%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ width: "20%", border: "1px solid #EEEEEE", outline: "none", display: "inline-block" }}>
                                                    </input>
                                                    /
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ width: "20%", border: "1px solid #EEEEEE", outline: "none", display: "inline-block" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "15%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}>
                                                    </input>
                                                </td>
                                                <td colSpan={2} style={{ width: "15%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "5%", }}>
                                                    <button style={{ width: "30px", border: "1px solid gray", outline: "none" }}>
                                                        -
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="table-light" style={{ width: "10%", }}>합계금액</th>
                                                <th className="table-light" style={{ width: "10%", }}>현금</th>
                                                <th className="table-light" style={{ width: "10%", }}>수표</th>
                                                <th className="table-light" style={{ width: "10%", }}>어음</th>
                                                <th className="table-light" style={{ width: "10%", }}>외상무수금</th>
                                                <td rowSpan={2} colSpan={5} style={{ width: "50%", fontSize: "18px" }}>이 금액을 <br />
                                                    <input
                                                        id=''
                                                        value=''
                                                        type="radio"
                                                        name="radio">
                                                    </input> 영수 &nbsp;
                                                    <input
                                                        id=''
                                                        value=''
                                                        type="radio"
                                                        name="radio">
                                                    </input> 청구 &nbsp; 함
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id=''
                                                        name=''
                                                        value=''
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}>
                                                    </input>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="table-responsive mt-2 text-center">
                                    <table className="table table-bordered table-centered text-black">
                                        <thead className="table-light">
                                            <tr>
                                                <th></th>
                                                <th>발급담당자</th>
                                                <th>수신담당자1</th>
                                                <th>수신담당자2</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th style={{ width: "13%", }}>담당자 부서명</th>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{ width: "13%", }}>담당자 명 *</th>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{ width: "13%", }}>이메일 주소 *</th>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{ width: "13%", }}>연락처</th>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <ul className="list-inline wizard mb-0">
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
                                    <h3 className="header-title mb-3 font-18"> 미리보기</h3>
                                </div>
                                <div className="table-responsive mt-2 text-center">
                                    <table className="table table-bordered table-centered text-black mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th colSpan={10}>전자세금계산서(공급자보관용)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="table-danger" rowSpan={4} style={{ width: "1%", padding: "5px" }}>
                                                    공급자
                                                </td>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>
                                                    등록번호 *
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }} >

                                                </td>
                                                <td className="table-danger" style={{ width: "10%", padding: "5px" }} >
                                                    종사업장번호
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }} >

                                                </td>
                                                <td className="table-blue" rowSpan={4} style={{ width: "1%", padding: "5px" }}>
                                                    공급받는자
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }} >
                                                    등록번호 *
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }} >

                                                </td>
                                                <td className="table-blue" style={{ width: "10%", padding: "5px" }}>
                                                    종사업장번호
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>
                                                    상호(법인명) *
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td className="table-danger" style={{ width: "10%", padding: "5px" }}>
                                                    성명(대표자) *
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>
                                                    상호(법인명) *
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td className="table-blue" style={{ width: "10%", padding: "5px" }}>
                                                    성명(대표자) *
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>
                                                    주소
                                                </td>
                                                <td colSpan={3} style={{ width: "43%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>
                                                    주소
                                                </td>
                                                <td colSpan={3} style={{ width: "43%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>
                                                    업태
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td className="table-danger" style={{ width: "10%", padding: "5px" }}>
                                                    종목
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>
                                                    업태
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td className="table-blue" style={{ width: "10%", padding: "5px" }}>
                                                    종목
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td className="table-madegreen" colSpan={10}>수탁사업자</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} className="table-madegreen" style={{ width: "8%", padding: "5px" }}>등록번호 *</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    종사업장번호
                                                </td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td colSpan={2} className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    사업장
                                                </td>
                                                <td colSpan={3} style={{ width: "42%", padding: "3px 6px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    상호 *
                                                </td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    성명 *
                                                </td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td colSpan={2} className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    업태
                                                </td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td className="table-madegreen" style={{ width: "8%", padding: "5px" }}>
                                                    종목
                                                </td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <th className="table-light" colSpan={2}>작성일자 *</th>
                                                <th className="table-light" colSpan={3}>공급가격 *</th>
                                                <th className="table-light" colSpan={3}>세액 *</th>
                                                <th className="table-light" colSpan={2}>합계금액</th>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} style={{ padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td colSpan={3} style={{ padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td colSpan={3} style={{ padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td colSpan={2} style={{ padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table table-bordered table-centered mt-0">
                                        <tbody>
                                            <tr>
                                                <th className="table-light" style={{ width: "15%", }}>월/일</th>
                                                <th className="table-light" style={{ width: "15%", }}>품목</th>
                                                <th className="table-light" style={{ width: "10%", }}>규격</th>
                                                <th className="table-light" style={{ width: "10%", }}>수량</th>
                                                <th className="table-light" style={{ width: "10%", }}>단가</th>
                                                <th className="table-light" style={{ width: "10%", }}>공급가액</th>
                                                <th className="table-light" style={{ width: "10%", }}>세액</th>
                                                <th className="table-light" colSpan={2} style={{ width: "15%", padding: "5px" }}>
                                                    비고
                                                </th>
                                                <th className="table-light" style={{ width: "5%", }}>
                                                    <button
                                                        style={{ width: "30px", border: "1px solid gray", outline: "none" }}>
                                                        +
                                                    </button>
                                                </th>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "15%", padding: "3px 3px 3px 9px" }}>

                                                </td>
                                                <td style={{ width: "15%", padding: "3px 3px 3px 9px" }}>

                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>

                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>

                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>

                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>

                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>

                                                </td>
                                                <td colSpan={2} style={{ width: "15%", padding: "3px 3px 3px 9px" }}>

                                                </td>
                                                <td style={{ width: "5%", }}>
                                                    <button style={{ width: "30px", border: "1px solid gray", outline: "none" }}>
                                                        -
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th className="table-light" style={{ width: "10%", }}>합계금액</th>
                                                <th className="table-light" style={{ width: "10%", }}>현금</th>
                                                <th className="table-light" style={{ width: "10%", }}>수표</th>
                                                <th className="table-light" style={{ width: "10%", }}>어음</th>
                                                <th className="table-light" style={{ width: "10%", }}>외상무수금</th>
                                                <td rowSpan={2} colSpan={5} style={{ width: "50%", fontSize: "18px" }}>이 금액을 <br />
                                                    청구 &nbsp; 함
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}>
                                                    <p></p>
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
                                        <h3 className="mt-0">세금계산서(영세율위수탁) 발급을 완료했습니다</h3>

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
            {/* QnA 모달 */}
            <Modal show={isOpen5} onHide={toggleQnA}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">전자세금계산서(영세율위수탁)</h5>
                </Modal.Header>
                <Modal.Body className="qna">
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>위수탁이란?</p>
                            <p className="font-15">
                                공급자를 대신해서 제3자(수탁자 또는 대리인)가 전자세금계산서를 발행할수 있는 서비스를 말합니다
                                수탁자 작성란에는 사업자번호, 사업장주소, 업태 등이 작성됩니다
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>영세율이란</p>
                            <p className="font-15">
                                세율이 0 인 경우를 영세율이라고 합니다
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
        </div >
    );
};



const Completelistyeongseyulwisutag = () => {


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
        </>
    );
};

const Yeongseyulwisutagpage = () => {
    return (
        <>
            <Row>
                <Col>
                    <Yeongseyulwisutag />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Completelistyeongseyulwisutag />
                </Col>
            </Row>
        </>
    );
};

export default Yeongseyulwisutagpage;
