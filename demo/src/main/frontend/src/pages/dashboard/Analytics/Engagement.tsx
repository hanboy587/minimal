import { Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Engagement = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title font-20  mb-2">근로자 정보
                    <Link to="/ui/base-ui/grid" className="float-end text-black font-15   mdi mdi-chevron-double-right">
                        상세보기
                    </Link>
                </h4>
                <div className="table-responsive mt-2 text-center">
                    <Table className="table table-bordered table-centered text-black" hover>
                        <thead className="table-primary" style={{ color: "#6c757d" }}>
                            <tr>
                                <th>이름</th>
                                <th>부서</th>
                                <th>직급</th>
                                <th>입사일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>전동그라미</td>
                                <td>생산</td>
                                <td>사원</td>
                                <td>2020.10.11</td>
                            </tr>
                            <tr>
                                <td>김이응</td>
                                <td>인사</td>
                                <td>사원</td>
                                <td>2022.05.01</td>
                            </tr>
                            <tr>
                                <td>장네모</td>
                                <td>마케팅</td>
                                <td>부장</td>
                                <td>2012.06.08</td>
                            </tr>
                            <tr>
                                <td>한세모</td>
                                <td>생산</td>
                                <td>팀장</td>
                                <td>2018.02.01</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <h4 className="header-title font-20 mt-2 mb-2">일용근로자 정보
                    {/* <Link to="/ui/base-ui/grid" className="float-end text-black font-15   mdi mdi-chevron-double-right">
                        상세보기
                    </Link> */}
                </h4>
                <div className="table-responsive mt-2 text-center">
                    <Table className="table table-bordered table-centered text-black" hover>
                        <thead className="table-primary" style={{ color: "#6c757d" }}>
                            <tr>
                                <th>이름</th>
                                <th>부서</th>
                                <th>직급</th>
                                <th>입사일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>신세로</td>
                                <td>배송</td>
                                <td>사원</td>
                                <td>2022.04.20</td>
                            </tr>
                            <tr>
                                <td>장가로</td>
                                <td>생산</td>
                                <td>사원</td>
                                <td>2022.04.01</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Engagement;
