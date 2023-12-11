import { Link } from 'react-router-dom';
import { Row, Col, Card, Button, Modal } from 'react-bootstrap';
import classNames from 'classnames';
import { Column } from 'react-table';
import { Table, PageTitle, CellFormatter, PageSize } from 'components';
import { Customer, Customer2 } from './types';
import { customers, customers2 } from './data';
import { useToggle } from 'hooks';

/* name column render */
// const NameColumn = ({ row }: CellFormatter<Customer>) => {
//     return (
//         <div className="table-user">
//             {/* <img src={row.original.avatar} alt="" className="me-2 rounded-circle" /> */}
//             <Link to="#" className="text-body fw-semibold">
//                 {row.original.gubun}
//             </Link>
//         </div>
//     );
// };

/* status column render */
// const StatusColumn = ({ row }: CellFormatter<Customer>) => {
//     return (
//         <>

//         </>
//     );
// };

/* 영수증 아이콘*/
const ActionColumn = ({ row }: CellFormatter<Customer>) => {
    return (
        <>
            <Link to="#" className="action-icon">
                <i className="uil uil-file-search-alt"></i>
            </Link>
        </>
    );
};

// 영수부 아이콘
const ActionColumn2 = ({ row }: CellFormatter<Customer2>) => {
    return (
        <>
            <Link to="#" className="action-icon">
                <i className="uil uil-file-search-alt"></i>
            </Link>
        </>
    );
};

const columns: ReadonlyArray<Column> = [
    {
        Header: '구분',
        accessor: 'gubun',
        defaultCanSort: false,
    },
    {
        Header: '성함',
        accessor: 'name',
        defaultCanSort: false,
    },
    {
        Header: '핸드폰번호',
        accessor: 'phone',
        defaultCanSort: false,
    },
    {
        Header: '귀속년도',
        accessor: 'gwisognyeondo',
        defaultCanSort: false,
    },
    {
        Header: '명세서보기',
        accessor: 'action',
        defaultCanSort: false,
        Cell: ActionColumn,
    },

];

const columns2: ReadonlyArray<Column> = [
    {
        Header: '구분',
        accessor: 'gubun',
        defaultCanSort: false,
    },
    {
        Header: '성함',
        accessor: 'name',
        defaultCanSort: false,
    },
    {
        Header: '핸드폰번호',
        accessor: 'phone',
        defaultCanSort: false,
    },
    {
        Header: '귀속연월',
        accessor: 'gwisogyeonwol',
        defaultCanSort: false,
    },
    {
        Header: '명세서보기',
        accessor: 'action',
        defaultCanSort: false,
        Cell: ActionColumn2,
    },

];


const Customers = () => {
    const [isOpen5, toggleQnA] = useToggle();
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'원천징수 조회'}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <h4 className="mb-3">원천징수 영수증
                                    <Button variant="link" className="float-end mdi mdi-progress-question text-black" onClick={toggleQnA}>
                                        설명서
                                    </Button>
                                </h4>
                            </Row>

                            <Table<Customer>
                                columns={columns}
                                data={customers}
                                pageSize={10}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                isSearchable={true}
                                tableClass="table-striped"

                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <h4 className="mb-3">원천징수 영수부</h4>
                            </Row>
                            <Table<Customer2>
                                columns={columns2}
                                data={customers2}
                                pageSize={10}
                                isSortable={true}
                                pagination={true}
                                isSelectable={true}
                                isSearchable={true}
                                tableClass="table-striped"
                            />

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* QnA 모달 */}
            <Modal show={isOpen5} onHide={toggleQnA}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">원천징수</h5>

                </Modal.Header>
                <Modal.Body className="qna">
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>원천징수란?</p>
                            <p className="font-15">
                                소득금액 또는 수입금액을 일정비율의 세금을 회사가 미리 떼어가는것을 의미한다 직장인이 국가에 내야할 급여에 대한 세금을
                                회사가 국가를 대신해서 미리 징수하는것
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>원천징수 영수증이란?</p>
                            <p className="font-15">
                                원천징수한 금액에 대해 확인해주는 영수증으로 얼마를 벌었는지 세금을 얼마나 냈는지 알려주는 문서 입니다
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>원천징수 영수부란?</p>
                            <p className="font-15">
                                회사가 근로자별로 지급한 급여 및 상여금 등 징수한 소득세 등 을 월별로 작성하여 보관하는 문서로 회사에 요청시에만 발급받으실수있습니다
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>영수증과 영수부의 차이점</p>
                            <p className="font-15">
                                원천징수 영수증은 연말정산이 완료된후 발급 받을수 있으며 영수부는 언제든지 회사에 요청시 발급받으실수 있습니다
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

export default Customers;
