import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import classNames from 'classnames';
import { Column } from 'react-table';
import { Table, PageTitle, CellFormatter, PageSize } from 'components';
import { Order } from './types';
import { Order2 } from './types';
import { useOrders } from './hooks';
import { orders2 } from './data';
import { useToggle } from 'hooks';
import axios from 'axios';
import {useEffect, useState} from 'react';

/* 테이블 order id 부분*/
const OrderColumn = ({ row }: CellFormatter<Order>) => {
    return (
        <></>
    );
};

/* 테이블 date(시간) 부분*/
const OrderDateColumn = ({ row }: CellFormatter<Order>) => {
    return (
        <>

        </>
    );
};

/* 테이블 payment 안의 뱃지 */
const PaymentStatusColumn = ({ row }: CellFormatter<Order>) => {
    return (
        <></>
    );
};

/* 테이블 status 안의 뱃지 */
const StatusColumn = ({ row }: CellFormatter<Order>) => {
    return (
        <></>
    );
};

/* 테이블 action 안의 아이콘 */
const ActionColumn = ({ row }: CellFormatter<Order>) => {
    return (
        <>
            
        </>
    );
};

// get all columns
const columns: ReadonlyArray<Column> = [
    {
        Header: '#',
        accessor: 'order_id',
    },
    {
        Header: '고용보험',
        accessor: 'order_date',
        defaultCanSort: false,
    },
    {
        Header: '산재보험',
        accessor: 'payment_status',
        defaultCanSort: false,
    },
    {
        Header: '국민연금',
        accessor: 'total',
        defaultCanSort: false,
    },
    {
        Header: '건강보험',
        accessor: 'payment_method',
        defaultCanSort: false,
    },
];
const columns2: ReadonlyArray<Column> = [
    {
        Header: '#',
        accessor: 'order_id',
    },
    {
        Header: '고용보험',
        accessor: 'order_date',
        defaultCanSort: false,
    },
    {
        Header: '산재보험',
        accessor: 'payment_status',
        defaultCanSort: false,
    },
    {
        Header: '국민연금',
        accessor: 'total',
        defaultCanSort: false,
    },
    {
        Header: '건강보험',
        accessor: 'payment_method',
        defaultCanSort: false,
    },
];

const sizePerPageList: PageSize[] = [
    {
        text: '10',
        value: 10,
    },
    {
        text: '20',
        value: 20,
    },
    {
        text: '50',
        value: 50,
    },
];


const Orders = () => {
    const { orderList, orderList2, changeOrderStatusGroup } = useOrders();
    const [isOpen5, toggleQnA] = useToggle();
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'가입정보조회(취득,상실 통합)'}
            />

            <Row>
                <Col>
                    <Card>
                        <div className="float-start  m-3">
                            <p className="font-18">
                                <b>취득</b>
                                <Button variant="link" className="float-end mdi mdi-progress-question text-black" onClick={toggleQnA}>
                                    설명서
                                </Button>
                            </p>
                        </div>
                        <Card.Body>
                            <Table<Order>
                                columns={columns}
                                data={orderList}
                                pageSize={10}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                theadClass="table-light"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <div className="float-start m-3">
                            <p className="font-18">
                                <b>상실</b>
                            </p>
                        </div>
                        <Card.Body>
                            <Table
                                columns={columns2}
                                data={orderList2}
                                pageSize={10}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                theadClass="table-light"
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={isOpen5} onHide={toggleQnA}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">4대보험</h5>

                </Modal.Header>
                <Modal.Body className="qna">
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>4대보험이란?</p>
                            <p className="font-15">
                                4대보험은 사회보험에 포함되는 개념입니다. <br />
                                국민연금, 건강보험, 고용보험, 산재보험 4가지로 나누어집니다. <br />
                                사회보장 목적을 갖고 있기 때문에 의무 가입이며, 주 15시간 미만 근로자는 4대보험에 가입할수 없습니다.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>고용보험이란?</p>
                            <p>
                                고용안정과 직업 능력 개발을 통해 노동시장과 연계하여 통합적으로 실시하는 제도입니다 <br />
                                1인 이상의 근로자를 고용하는 사업장에서는 의무적으로 가입해야하며 실업급여나 육아휴직 출산휴가 등을 제공합니다
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>산재보험이란?</p>
                            <p>
                                근로자의 업무상 재해를 보상하고, 재해를 당한 근로자의 재활 및 사회 복귀를 촉진하기 위해 정부가 시행하는 제도입니다.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>국민연금이란?</p>
                            <p>
                                생활의 질을 향상시키기 위한 제도로 노령연금 유족연금 장애연금 등의 급여를 지급하여 생활안정과 복지증진을 도모하는 제도입니다
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>건강보험이란?</p>
                            <p>
                                질병이나 부상으로 인해 발생하는 고액의 진료비가 부담으로 작용하는 것을 방지하기 위해 국민건강보험공단에서 보험료를 받고 관리하며,
                                필요시 보험금여를 제공하는 제도입니다
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
        </>
    );
};

export default Orders;
