import { Row, Col, Card, Table, Button, Modal, } from 'react-bootstrap';
import { Column } from 'react-table';
import { PageTitle, } from 'components';
import { Employee } from './types';
import { records as data, expandableRecords } from './data';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getUsername } from 'utils/getUsername';
import { useToggle } from 'hooks';



const Piboheomjailyeog = () => {

    const [table, setTable] = useState([]);

    const getGoYongJeongBo = async () => {
        const username = getUsername();
        if (username) {
            console.log(username);
            const res = await axios.post("getgoyongjeongbo", {
                username: username,
            });
            console.log(res);
            if (res.data !== '') {
                setTable(res.data);
            }
        } else {
            alert("사업장에서 4대보험 관리번호를 입력해주세요");
            alert("에러가 발생했습니다 관리자에게 문의 해주세요");
        }
    };

    const updateGoYongJeongBo = async () => {
        const username = getUsername();
        if (username) {
            const res = await axios.post("updateggyongjeongbo", {
                username: username,
            });
            if (res.data !== '') {
                setTable(res.data);
            }
        } else {
            alert("사업장에서 4대보험 관리번호를 입력해주세요");
            alert("에러가 발생했습니다 관리자에게 문의 해주세요");
        }
    };

    useEffect(() => {
        getUsername();
    }, []);

    // qna
    const [isOpen, toggleQnA] = useToggle();

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'피보험자 이력'}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="text-end mb-1">
                                <Row>
                                    <Col style={{ textAlign: "left" }}>
                                        <Button variant="link" className="mdi mdi-progress-question text-black" onClick={toggleQnA}>
                                            설명서
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button className="mdi mdi-autorenew text-black text-black" variant="link" onClick={getGoYongJeongBo}>조회하기</Button>
                                        <Button className="mdi mdi-autorenew text-black text-black" variant="link" onClick={updateGoYongJeongBo}>갱신하기</Button>
                                    </Col>
                                </Row>

                            </div>
                            <div className="table-responsive text-center">
                                <Table className="table-bordered  mb-0" hover>
                                    <thead className="table-madegray"style={{ color: "#a3a7ad" }}>
                                        <tr>
                                            <th>이름</th>
                                            <th>주민번호</th>
                                            <th>고용상태</th>
                                            <th>고용일</th>
                                            <th>고용종료일</th>
                                            <th>월평균보수</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {table?.map((data: any) => (
                                            <tr>
                                                <th>{data.geunrojanm}</th>
                                                <th>{data.geunrojargno}</th>
                                                <th>{data.gystatusnm}</th>
                                                <th>{data.gybjagyeokchwideukdt}</th>
                                                <th>{data.gybjagyeoksangsildt}</th>
                                                <th>{data.gymmavgbosuprc}</th>
                                                {/* gymmavgbosuprc */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>


                            {/* QnA 모달 */}
                            <Modal show={isOpen} onHide={toggleQnA}>
                                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                                >
                                    <h5 className="text-white">일반근로자</h5>

                                </Modal.Header>
                                <Modal.Body className="qna">
                                    <Row>
                                        <Col>
                                            <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>고용정보란?</p>
                                            <p className="font-15">
                                                사업주가 고용하고 있는 근로자의 성명, 주민등록번호, 고용한 날, 고용관계의 종료일, 월평균보수액, 휴직·전보 사항에 대한 정보를 말합니다 <br />
                                                근로자 고용정보가 신고기한 내에 신고 되지 않거나 누락되는 경우 월별 산재보험료가 적기에 산정·부과되지 않습니다 <br />
                                                또한, 근로자 고용정보를 제대로 신고하지 않을 경우 과태료가 부과될 수 있습니다
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Piboheomjailyeog;
