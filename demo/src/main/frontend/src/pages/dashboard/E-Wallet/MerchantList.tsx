import classNames from 'classnames';
import { Card, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { Merchant } from './types';


const MerchantList = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title font-20  mb-2">4대보험취득조회</h4>
                <div className="table-responsive mt-2 text-center">
                    <Table className="table table-bordered table-centered text-black" hover>
                        <thead className="table-primary">
                            <tr>
                                <th>#</th>
                                <th>고용보험</th>
                                <th>산재보험</th>
                                <th>국민연금</th>
                                <th>건강보험</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>취득일</td>
                                <td>2021.04.01</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>취득사유</td>
                                <td>-</td>
                                <td>-</td>
                                <td>만18세이상</td>
                                <td>최초취득</td>
                            </tr>
                            <tr>
                                <td>직종</td>
                                <td>미용서비스원</td>
                                <td>미용서비스원</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>주소정근로시간</td>
                                <td>40</td>
                                <td>40</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>월소득액</td>
                                <td>2,000,000</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Card.Body>
        </Card>
    );
};

export default MerchantList;
