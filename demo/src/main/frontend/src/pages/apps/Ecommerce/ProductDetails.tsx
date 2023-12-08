import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, ProgressBar, Form } from 'react-bootstrap';
import { PageTitle, Rating,  } from 'components';
import productImg1 from 'assets/images/products/product-5.jpg';
import productImg2 from 'assets/images/products/product-1.jpg';
import productImg3 from 'assets/images/products/product-6.jpg';
import productImg4 from 'assets/images/products/product-3.jpg';
import { useProductDetails } from './hooks';

const Stocks = () => {
    return (
        <div className="table-responsive mt-4">
            <table className="table table-bordered table-centered mb-0">
                <thead className="table-light">
                    <tr>
                        <th></th>
                        <th>고용보험</th>
                        <th>산재보험</th>
                        <th>국민연금</th>
                        <th>건강보험</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>고지횟수</td>
                        <td>22</td>
                        <td>22</td>
                        <td>22</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>납부횟수</td>
                        <td>22</td>
                        <td>22</td>
                        <td>22</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <td>완납율</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                        <td>100%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};



    const ProductDetails = () => {
        return (
            <>
                <PageTitle
                    breadCrumbItems={[
                    ]}
                    title={'보험료납부조회'}
                />
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <div className="font-18">
                                    <p>요약정보</p>
                                </div>
                                {/* 요약정보에 월별조회 할수있으면 좋을듯 */}
                                <Stocks />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
        );
    };


export default ProductDetails;
