import { Row, Col, Card, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { PageTitle } from 'components';
import { Billing, DeliveryInfoItem, OrderDetailsItem2, OrderItem, OrderItem2, ShippingAddress } from './types';
import { Link } from 'react-router-dom';




const Items = ({ items }: { items: OrderItem2[] }) => {
    return (
        <div className="table-responsive">
            <table className="table mb-0">
                <thead className="table-light">
                    <tr>
                        <th>구분</th>
                        <th>소득세</th>
                        <th>지방소득세</th>
                        <th>농어촌특별세</th>
                    </tr>
                </thead>
                <tbody>
                    {(items || []).map((item, index) => {
                        return (
                            <tr key={index.toString()}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.total}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};


const OrderDetails = () => {
    const order: OrderDetailsItem2 = {
        id: '#BM31',
        order_status: 'Packed',
        items: [
            {
                id: 1,
                name: '결정세액',
                quantity: '0',
                price: '0',
                total: '0',
            },
            {
                id: 2,
                name: '기납부세액',
                quantity: '900,000',
                price: '-900,000',
                total: '0',
            },
            {
                id: 3,
                name: '차감징수세액',
                quantity: '100,000',
                price: '-100,000',
                total: '0',
            },

        ],

    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'연말정산 예상세액결과'}
            />
            <Row>
                <Col>

                    <Row className="justify-content-center" >
                        <Col lg={7} md={10} sm={11}>
                            <div className="horizontal-steps mt-4 mb-4 pb-5">
                                <div className="horizontal-steps-content">
                                    <div className="step-item">
                                            <span> 작성중 </span>
                                    </div>
                                    <div className="step-item current">
                                            <span> 제출완료</span>
                                    </div>
                                    <div className="step-item">
                                        <span>확인중</span>
                                    </div>
                                    <div className="step-item">
                                        <span>완료</span>
                                    </div>
                                </div>

                                <div className="process-line" style={{ width: '33%' }}></div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h5 className="mt-3 text-uppercase bg-light p-2">
                                ※ 유의사항
                                <h6> 연말정산 실제 차감징수세액은 이후에 발급되는 근로소득 원천징수에서 확인할 수 있으며
                                    입력한 공제 항목의 공제 요건에 따라 예상 결과와 다를 수 있습니다
                                </h6>
                            </h5>
                            
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col md={3}>
                                            <div className="float-center">
                                                <p className="font-18" >
                                                    <b>차감징수세액</b>
                                                </p>
                                            </div>
                                        </Col>
                                        <Col md={9}>
                                            <div className="float-end">
                                                <p className="font-18">
                                                    <span className="float-end">- 1,000,000원</span>
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <div className="float-center">
                                                <p className="font-16">
                                                    <b>소득세</b>
                                                </p>
                                            </div>
                                        </Col>
                                        <Col md={9}>
                                            <div className="float-end">
                                                <p className="font-16">
                                                    <span className="float-end">- 900,000원</span>
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={3}>
                                            <div className="float-center">
                                                <p className="font-16">
                                                    <b>지방소득세</b>
                                                </p>
                                            </div>
                                        </Col>
                                        <Col md={9}>
                                            <div className="float-end">
                                                <p className="font-16">
                                                    <span className="float-end">- 100,000원</span>
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <h4 className="header-title mb-3"></h4>
                                        <Items items={order.items} />
                                    </Row>
                                    <Row className="mt-4">
                                        {/* <Col>
                                            <Link
                                             
                                                to="/apps/ecommerce/checkout"
                                                
                                            >
                                                <Button variant="outline-primary" type="submit">
                                                이전
                                                </Button>
                                            </Link>
                                        </Col> */}
                                        <Col className="text-end">
                                            <Link
                                                to= "/dashboard/ecommerce"
                                            >
                                                <Button variant="outline-primary" type="submit">
                                                    확인
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default OrderDetails;