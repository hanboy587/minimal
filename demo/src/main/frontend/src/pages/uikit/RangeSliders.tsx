import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
import { PageTitle } from 'components';
import { useRangeSlider } from './hooks';

const RangeSliders = () => {
    const { selectedVals, selectedRanges, onSlide, onSlide2 } = useRangeSlider();

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'업무현황'}
            />
            <p>
                ※신고하신 업무는 1시간 이내에 확인이 가능합니다
            </p>
            <Row>
                <Card>
                    <Card.Body>
                        <h4 className="header-title font-20">신고현황</h4>
                        <p className="text-end mb-1">
                            <Button className="mdi mdi-autorenew" size="sm">조회하기</Button>
                        </p>
                        <div className="table-responsive text-center">
                            <Table className="table-centered table-bordered" hover>
                                <thead className="table-madegray">
                                    <tr style={{ color: "#a3a7ad" }}>
                                        <th>접수일</th>
                                        <th>신고종류</th>
                                        <th>대상자</th>
                                        <th>진행사항</th>
                                        <th>비고</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>20220525</td>
                                        <td>4대보험성립신고서</td>
                                        <td>이네모</td>
                                        <td>진행중</td>
                                        <td>
                                            <Button size="sm" variant="link"
                                                className=" text-black"
                                                onClick={(e) => {
                                                    window.print();
                                                }}
                                            >
                                                신고서출력<i className="mdi mdi-file-download-outline"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>20220421</td>
                                        <td>4대보험상실신고서</td>
                                        <td>전동그라미</td>
                                        <td>처리완료</td>
                                        <td>
                                            <Button size="sm" variant="link"
                                                className=" text-black"
                                                onClick={(e) => {
                                                    window.print();
                                                }}
                                            >
                                                신고서출력<i className="mdi mdi-file-download-outline"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>20220409</td>
                                        <td>4대보험취득신고서</td>
                                        <td>나취득</td>
                                        <td>반려</td>
                                        <td>
                                            <Button size="sm" variant="link" >재신고</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card>
                    <Card.Body>
                        <h4 className="header-title font-20">발급현황</h4>
                        <p className="text-end mb-1">
                            <Button className="mdi mdi-autorenew" size="sm">조회하기</Button>
                        </p>
                        <div className="table-responsive text-center">
                            <Table className="table-centered table-bordered " hover>
                                <thead className="table-madegray">
                                    <tr style={{ color: "#a3a7ad" }}>
                                        <th>접수일</th>
                                        <th>신고종류</th>
                                        <th>대상자</th>
                                        <th>진행사항</th>
                                        <th>비고</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>20220601</td>
                                        <td>이직확인서</td>
                                        <td>장가로</td>
                                        <td>진행중</td>
                                        <td>
                                            <Button size="sm" variant="link"
                                                className=" text-black"
                                                onClick={(e) => {
                                                    window.print();
                                                }}
                                            >
                                                신고서출력<i className="mdi mdi-file-download-outline"></i>
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
            {/* <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title font-20">요청현황</h4>
                            <p className="text-end mb-0">
                                <Button className="mdi mdi-autorenew text-black" size="sm" variant="link">조회하기</Button>
                            </p>
                            <div className="table-responsive text-center">
                                <Table className="table table-centered text-black " hover>
                                    <thead className="table-primary">
                                        <tr>
                                            <th>요청사항</th>
                                            <th>요청결과</th>
                                            <th>요청인</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>이직확인서</td>
                                            <td>요청중</td>
                                            <td>전동그라미</td>
                                        </tr>
                                        <tr>
                                            <td>4대보험상실신고서</td>
                                            <td>요청중</td>
                                            <td>장가로</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> */}
        </>
    );
};

export default RangeSliders;
