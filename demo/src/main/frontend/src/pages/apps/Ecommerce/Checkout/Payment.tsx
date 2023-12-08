import { useForm } from 'react-hook-form';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import { FormInput } from 'components';
import paypalImg from 'assets/images/payments/paypal.png';
import payoneerImg from 'assets/images/payments/payoneer.png';
import cashImg from 'assets/images/payments/cod.png';
import masterCardImg from 'assets/images/payments/master.png';
import discoverImg from 'assets/images/payments/discover.png';
import visaCardImg from 'assets/images/payments/visa.png';
import stripeImg from 'assets/images/payments/stripe.png';

const Payment = () => {
    const methods = useForm();
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

   
    return (
        <Row>
            <Col>
                <div className="mb-2 row">
                    <div className="col-xl-11">
                        <p className="text-muted">
                            ※ 소득 세액공제신고 항목을 체크후 담당자에게 제출합니다<br/>
                            ※ 체크한 항목에 대해  zip 파일로 제출해주세요
                        </p>
                    </div>
                    {/* <div className="col-xl-1">
                        <Button variant="outline-primary" type="submit" ms-2 >
                            저장
                        </Button>
                    </div> */}
                </div>
                <div className="border p-3 mb-3 rounded">
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="formFileMultiple01">연말정산간소화PDF업로드</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label htmlFor="formFileMultiple01">기타추가자료</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
                <p className="text-muted"> ※ 서류미제출시 공제요건을 검토할수없어 관련공제금액은 자동으로 제외됩니다
                </p>
                <div className="border p-3 mb-3 rounded">
                    <Row>
                        <Col sm={4}>
                            <Form.Group className="mb-1">
                                <Form.Label className="form-check-label" htmlFor="exampleCheckbox">
                                    추가공제 항목 리스트
                                </Form.Label>
                                <div>
                                    <Form.Check type="checkbox" id="inline-checkbox" label="시력교정을 위한 안경 및 콘택트렌즈(현금으로결제했을경우)" className="mb-1" />
                                    <Form.Check type="checkbox" id="inline-checkbox" label="보청기.휠체어 등 장애인보장구 구입임차비용" className="mb-1" />
                                    <Form.Check type="checkbox" id="inline-checkbox" label="총급여 7,000만원 이하 근로자의 산후조리원비" />
                                    <Form.Check type="checkbox" id="inline-checkbox" label="난임시술비"  className="mb-1" />
                                    <Form.Check type="checkbox" id="inline-checkbox" label="암,치매,난치성 질환 등 중증환자 장애인 증명서" className="mb-1" />
                                </div>
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-1">
                                <Form.Label className="form-check-label" htmlFor="exampleCheckbox">
                                </Form.Label>
                                <div>
                                    <Form.Check type="checkbox" id="inline-checkbox" label="중.고등학생 교복 구입비" className="mb-1" />
                                    <Form.Check type="checkbox" id="inline-checkbox" label="종교단체,사회복지단체,시민단체 등 지정기부금" className="mb-1" />
                                    <Form.Check type="checkbox" id="inline-checkbox" label="병원에 주민등록번호를 알려주지 않은 신생아 의료비" className="mb-1" />
                                    <Form.Check type="checkbox" id="inline-checkbox" label="실제 지출한 의료비보다 적게 확인되는경우(의료비신고센터이용)" className="mb-1" />
                                    <Form.Check type="checkbox" id="inline-checkbox" label="월세액공제자료" />
                                </div>
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-1">
                                <Form.Label className="form-check-label" htmlFor="exampleCheckbox">
                                </Form.Label>
                                <div>
                                    <Form.Check type="checkbox" id="inline-checkbox" label="공제 대상인 자녀나 형제자매의 해외 교육비" className="mb-1" />
                                    <Form.Check type="checkbox" id="inline-checkbox" label="(취학전)학원, 체육시설 교육비 납입 증명서" className="mb-1" />
                                    <Form.Check type="checkbox" id="inline-checkbox" label="학점인정(독학학위)교육비 납입증명서" className="mb-1" />
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>
                </div>
                <Row className="mt-4">
                    <Col md={4}>
                        <Link to="/apps/ecommerce/order/details">
                            <Button variant="outline-info" type="submit">
                                소득.세액 공제 신고 및 자료 제출하기
                            </Button>
                        </Link>
                    </Col>
                    <Col  className="text-sm-end">
                        <Button variant="primary" type="submit" ms-2 >
                            저장
                        </Button>
                    </Col>
                </Row>               
            </Col>
        </Row>
    );
};

export default Payment;
