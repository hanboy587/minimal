import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { PageTitle } from 'components';
import logoImg from 'assets/images/logo-light.png';
import orderBarcodeImg from 'assets/images/barcode.png';

type Address = {
    line_1: string;
    line_2: string;
    city: string;
    state: string;
    zip: number;
    phone: string;
};

type Items = {
    id: number;
    name: string;
    unit_cost: string;
    total: string;
};
type Items2 = {
    id: number;
    name: string;
    unit_cost: string;
};
type Items3 = {
    id: number;
    name: string;
    unit_cost: string;
};
type Items4 = {
    id: number;
    name: string;
    unit_cost: string;
};
type Items5 = {
    id: number;
    name: string;
    unit_cost: string;
};

const Invoice = () => {
    const [customer] = useState<string>('Cooper Hobson');
    const [notes] = useState<string>(
        'Please find below a cost-breakdown for the recent work completed. Please make payment at your earliest convenience, and do not hesitate to contact me with any questions.'
    );
    const [order_date] = useState<string>('2,500,000');
    // 지급내역
    const [items] = useState<Items[]>([
        {
            id: 1,
            name: '강사비',
            unit_cost: '179,000',
            total: '강의시수 X 강사비(43,000원)',
        },
        {
            id: 2,
            name: '교통비',
            unit_cost: '499.000',
            total: '교통비 지급기준 및 실비 증빙내역 확인',
        },
        {
            id: 3,
            name: '도서벽지 보조금',
            unit_cost: '412.00',
            total: '도서*벽지 교육진흥법 시행규칙 [별표]',
        },
        {
            id: 4,
            name: '급식비',
            unit_cost: '80,000원',
            total: '월별 80,000원',
        },
        {
            id: 5,
            name: '기타비용',
            unit_cost: '30000원',
            total: '',
        },
        {
            id: 6,
            name: '연구비',
            unit_cost: '2500000원',
            total: '복지 수업시수 X 연구비(4,000원)',
        },
        {
            id: 7,
            name: '휴업수당',
            unit_cost: '750000원',
            total: '통상시급(or강사료+연구비)X휴업시수X70%',
        },
        {
            id: 8,
            name: '유급휴가수당',
            unit_cost: '50000원',
            total: '강사료(or강사료+연구비)X유급휴가시수',
        },
        {
            id: 9,
            name: '근로자의날',
            unit_cost: '10000원',
            total: '통상일급+(통상시급X근로자의날 시수X50%)',
        },
        {
            id: 10,
            name: '잔여시수보전수당',
            unit_cost: '121240원',
            total: '통상시급(or강사료+연구비)X보전잔여시수X70%',
        },
        {
            id: 11,
            name: '출산전후휴가급여',
            unit_cost: '454000원',
            total: '통상일급X출산전후휴가일수-지원금 수급액',
        },
        {
            id: 12,
            name: '배우자출산휴가급여',
            unit_cost: '460,000원',
            total: '통상일급X배우자출산휴가일수-지원금 수급액',
        },
    ]);
    // 원천징수
    const [items2] = useState<Items2[]>([
        {
            id: 1,
            name: '근로소득세',
            unit_cost: '179900',
        },
        {
            id: 2,
            name: '지방세',
            unit_cost: '49900',
        },
        {
            id: 3,
            name: '기타소득세',
            unit_cost: '412000',
        },
        {
            id: 4,
            name: '고용보험',
            unit_cost: '521010',
        },
        {
            id: 5,
            name: '국민연금',
            unit_cost: '868000',
        },

    ]);
    // 환수환급
    const [items3] = useState<Items3[]>([
        {
            id: 1,
            name: '국민환수급',
            unit_cost: '$1799.00',
        },
        {
            id: 2,
            name: '고용환수급',
            unit_cost: '$499.00',
        },
        {
            id: 3,
            name: '근로세환수급',
            unit_cost: '$412.00',
        },
        {
            id: 4,
            name: '지방세환수급',
            unit_cost: '$101',
        },
        {
            id: 5,
            name: '실지급환수급',
            unit_cost: '',
        },

    ]);
    // 산정근거
    const [items4] = useState<Items4[]>([
        {
            id: 1,
            name: '강의시수',
            unit_cost: '10h',
        },
        {
            id: 2,
            name: '복지시수',
            unit_cost: '5h',
        },
        {
            id: 3,
            name: '총출강시수',
            unit_cost: '42h',
        },
        {
            id: 4,
            name: '통상시급',
            unit_cost: '8,000',
        },
        {
            id: 5,
            name: '일소정근로시간',
            unit_cost: '20h',
        },
        {
            id: 6,
            name: '통상일급',
            unit_cost: '10,000',
        },
        {
            id: 7,
            name: '출산전후일수',
            unit_cost: '22',
        },
        {
            id: 8,
            name: '배우자출산일수',
            unit_cost: '10',
        },
        {
            id: 9,
            name: '지원금수급액',
            unit_cost: '1000',
        },
        {
            id: 10,
            name: '휴업시수',
            unit_cost: '33',
        },
        {
            id: 11,
            name: '유급휴가시수',
            unit_cost: '22h',
        },
        {
            id: 12,
            name: '보전잔여시수',
            unit_cost: '11',
        },
        {
            id: 13,
            name: '근로자의날시수',
            unit_cost: '4h'
        },
    ]);
     // Total
     const [items5] = useState<Items5[]>([
        {
            id: 1,
            name: '지급액계(A)',
            unit_cost: '$1799.00',
        },
        {
            id: 2,
            name: '공제액계(B+C)',
            unit_cost: '$499.00',
        },
        {
            id: 3,
            name: '실수령액(A-(B+C))',
            unit_cost: '$412.00',
        },
    ]);
    // const [sub_total] = useState<string>('$4120.00');
    // const [vat] = useState<string>('$515.00');
    // const [total] = useState<string>('$4635.00');

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'명세서 상세내역'}
            />
            <Row xs={1} md={2}>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="clearfix">
                                <div className="float-start mb-3">
                                    <img src={logoImg} alt="logo" height="18" />
                                </div>
                            </div>
                            <Row>
                                <Col sm={6}>
                                    <div className="float-start mt-3">
                                        <p className="font-18">
                                            <b>지급내역(A)</b>
                                        </p>
                                    </div>
                                </Col>

                                <Col sm={6}>
                                    <div className="mt-3 float-sm-end">
                                        <p className="font-18">
                                            <span className="float-end"><strong>________님</strong></span>
                                        </p>
                                        <br />
                                        <p className="font-18">
                                            <span className="float-end"><strong>지급액 : </strong>{order_date}<strong>원</strong></span>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="table-responsive">
                                        <table className="table mt-4">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>지급항목</th>
                                                    <th>금액</th>
                                                    <th className="text-end">산정식</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items.map((item, index) => {
                                                    return (
                                                        <tr key={index.toString()}>
                                                            <td>{index + 1}</td>
                                                            <td>
                                                                <b>{item.name}</b> <br />
                                                            </td>
                                                            <td>{item.unit_cost}</td>
                                                            <td className="text-end">{item.total}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <div>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col sm={6}>
                                        <div className="float-start mb-2">
                                            <p className="font-18">
                                                <b>원천징수(B)</b>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Col>
                                    <div className="table-responsive">
                                        <table className="table mb-4">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>공제항목</th>
                                                    <th>금액</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items2.map((item, index) => {
                                                    return (
                                                        <tr key={index.toString()}>
                                                            <td>{index + 1}</td>
                                                            <td>
                                                                <b>{item.name}</b> <br />
                                                            </td>
                                                            <td>{item.unit_cost}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <div className="float-start mb-2">
                                            <p className="font-18">
                                                <b>환수환급(C)</b>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                                <Col>
                                    <div className="table-responsive">
                                        <table className="table mb-3">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>항목</th>
                                                    <th>금액</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items3.map((item, index) => {
                                                    return (
                                                        <tr key={index.toString()}>
                                                            <td>{index + 1}</td>
                                                            <td>
                                                                <b>{item.name}</b> <br />
                                                            </td>
                                                            <td>{item.unit_cost}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </Row>
            {/* Total */}
            <Row xs={1} md={2}>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <div className="float-start mb-3">
                                        <p className="font-18">
                                            <b>산정근거</b>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Col>
                                <div className="table-responsive">
                                    <table className="table mb-3">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items4.map((item, index) => {
                                                return (
                                                    <tr key={index.toString()}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <b>{item.name}</b>
                                                        </td>
                                                        <td>{item.unit_cost}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Col>
                <div>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <div className="float-start mb-3">
                                            <p className="font-18">
                                                <b>실수령액(A-(B+C))</b>
                                            </p>
                                        </div>
                                    </Col>
                                </Row>

                                <Col>
                                    <div className="table-responsive">
                                        <table className="table mt-3">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {items5.map((item, index) => {
                                                    return (
                                                        <tr key={index.toString()}>
                                                            <td>{index + 1}</td>
                                                            <td>
                                                                <b>{item.name}</b>
                                                            </td>
                                                            <td>{item.unit_cost}</td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </Row>

            {/* <div className="d-print-none mt-4">
                <div className="text-end">
                    <button
                        className="btn btn-primary me-1"
                        onClick={(e) => {
                            window.print();
                        }}
                    >
                        <i className="mdi mdi-printer"></i> Print
                    </button>
                    <button className="btn btn-info">Submit</button>
                </div>
            </div> */}
        </>
    );
};

export default Invoice;
