import { Row, Col, Card, Tab, Nav, Button, Modal } from 'react-bootstrap';
import classnames from 'classnames';
import { PageTitle } from 'components';
import Billing from './Billing';
import Shipping from './Shipping';
import Payment from './Payment';
import Summary from './Summary';
import { useCheckout } from '../hooks';
import { useToggle } from 'hooks';


const Checkout = () => {
    const { cart, updateShipping } = useCheckout();
    const [isOpen5, toggleQnA] = useToggle();

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'연말정산'}
            />
            <Tab.Container defaultActiveKey="1">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <div className="mb-5">
                                    <Button variant="link" className="float-end mdi mdi-progress-question text-black" onClick={toggleQnA}>
                                        설명서
                                    </Button>
                                </div>
                                {/* <h4 className="mt-2 mb-4"> 2022년</h4> */}
                                <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="1" className="nav-link rounded-0">
                                            <span className={classnames('font-15')}>기본정보입력</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item as="li" className="nav-item">
                                        <Nav.Link href="#" eventKey="2" className="nav-link rounded-0">
                                            <span className={classnames('font-15')}>전근무지 소득 추가</span>
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link href="#" eventKey="3" className="nav-link rounded-0">
                                            <span className={classnames('font-15')}>연말정산자료입력 </span>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Row>
                                    <Col lg={12}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="1">
                                                <Billing />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2">
                                                <Shipping updateShipping={updateShipping} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3">
                                                <Payment />
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                    {/* <Col lg={4}>
                                        <Summary cart={cart} />
                                    </Col> */}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Tab.Container>
            {/* QnA 모달 */}
            <Modal show={isOpen5} onHide={toggleQnA}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">연말정산</h5>

                </Modal.Header>
                <Modal.Body className="qna">
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>연말정산이란?</p>
                            <p className="font-15">
                            1년간의 총근로소득에 대한 납부세액을 확정하는 것으로 근로자가 한해 동안 납부한 근로소득세를 정산하는 절차입니다.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>연말정산 간소화 서비스란?</p>
                            <p className="font-15">
                                은행, 학교, 병원 등 영수증 발급기관에서
                                전산파일로 제출한 소득, 세액공제 증명서류를
                                국세청에서 전산구축하여 홈택스를 통해 근로자에게 제공하는 서비스 입니다.
                                제출이 필요한 다수의 연말 정산 서류를 이 서비스로 간편하게 확인할 수 있습니다.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>소득공제란?</p>
                            <p className="font-15">
                            소득이 발생하기 위해서는 비용이 들어감을 인정하여  ‘세금 부과 대상이 되는 소득을 줄여주는 것’ 을 말합니다. <br />
                            대표적으로 근로소득공제, 인적공제, 신용카드공제 등이 여기에 속하며 소득에서 이러한 항목들을 조항에 맞추어 계산하여 뺀 값이 과세표준이 됩니다
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>세액공제란?</p>
                            <p className="font-15">
                                ‘계산된 세액에서 또 한번 빼주는 항목’ 으로 소득에 상관없이 해당하는 항목에 대해서는 동일하게 감면받게 됩니다.
                                대표적으로 자녀세액공제, 월세세액공제 등이 있습니다.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>세액감면이란?</p>
                            <p className="font-15">
                                세액공제와는 구분되는 항목으로 세액의 일정부분의 납부의무를 감소해 주는 것을 의미합니다.
                                정부에서 정책으로 시행하는 경우가 많으며, 연말정산의 대표적인 세액감면은
                                중소기업 취업자에 대하여 소득세 90% 감면정책이 있습니다.
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

export { Checkout };
