import Chart from 'react-apexcharts';
import { Card, Row, Col,} from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';
import { CardTitle } from 'components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

const BrowsersChartPC = () => {

    return (
        <>
            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <h4 className="page-title">업무현황
                                <Link to="/ui/extended/rangesliders" className="float-end text-black font-15   mdi mdi-chevron-double-right">
                                    더보기
                                </Link>
                            </h4>
                            <Row>
                                <Col md={3}>
                                    <Card className="my-1 shadow-none border">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <div className="col-auto text-danger">
                                                    진행중
                                                </div>
                                                <div className="col ps-0">
                                                    <p className="text-info fw-bold mb-0 text-center font-18">
                                                        이직확인서
                                                    </p>
                                                    <p className="mb-0 text-center">장가로</p>
                                                </div>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card className="my-1 shadow-none border">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <div className="col-auto text-danger">
                                                    진행중
                                                </div>
                                                <div className="col ps-0">
                                                    <p className="text-info fw-bold mb-0 text-center font-18">
                                                        4대보험 성립신고서
                                                    </p>
                                                    <p className="mb-0 text-center">이네모</p>
                                                </div>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card className="my-1 shadow-none border">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <div className="col-auto text-danger">
                                                    완료
                                                </div>
                                                <div className="col ps-0">
                                                    <p className="text-info fw-bold mb-0 text-center font-18">
                                                        4대보험 상실신고서
                                                    </p>
                                                    <p className="mb-0 text-center">전동그라미</p>
                                                </div>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className="page-title mt-5">요청현황</h4>
                            <Row>
                                <Col md={3}>
                                    <Card className="my-1 shadow-none border">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <div className="col-auto text-danger">
                                                    요청
                                                </div>
                                                <div className="col ps-0">
                                                    <p className="text-info fw-bold mb-0 text-center font-18">
                                                        이직확인서
                                                    </p>
                                                    <p className="mb-0 text-center">한세모</p>
                                                </div>
                                                {/* <div className="col-auto">
                                                한세모님
                                            </div> */}
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md={3}>
                                    <Card className="my-1 shadow-none border">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <div className="col-auto text-danger">
                                                    요청
                                                </div>
                                                <div className="col ps-0">
                                                    <p className="text-info fw-bold mb-0 text-center font-18">
                                                        4대보험 상실신고서
                                                    </p>
                                                    <p className="mb-0 text-center">장가로</p>
                                                </div>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

const BrowsersChartMobile = () => {

    return (
        <>

            <Card>
                <Card.Body>
                    <Row>
                        <Col>
                            <h4 className="page-title">업무현황
                                <Link to="/ui/extended/rangesliders" className="float-end text-black font-15   mdi mdi-chevron-double-right">
                                    더보기
                                </Link>
                            </h4>
                            <Row>
                                <Col xl={3}>
                                    <Card className="my-1 shadow-none border">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <div className="col-auto text-danger" style={{fontSize:"13px"}}>
                                                    진행중
                                                </div>
                                                <div className="col ps-0">
                                                    <p className="text-info fw-bold mb-0 text-center" style={{fontSize:"15px"}}>
                                                        이직확인서
                                                    </p>
                                                    <p className="mb-0 text-center" style={{fontSize:"13px"}}>장가로</p>
                                                </div>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col xl={3}>
                                    <Card className="my-1 shadow-none border">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <div className="col-auto text-danger" style={{fontSize:"13px"}}>
                                                    진행중
                                                </div>
                                                <div className="col ps-0">
                                                    <p className="text-info fw-bold mb-0 text-center" style={{fontSize:"15px"}}>
                                                        4대보험 성립신고서
                                                    </p>
                                                    <p className="mb-0 text-center" style={{fontSize:"13px"}}>이네모</p>
                                                </div>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col xl={3}>
                                    <Card className="my-1 shadow-none border">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <div className="col-auto text-danger" style={{fontSize:"13px"}}>
                                                    완료
                                                </div>
                                                <div className="col ps-0">
                                                    <p className="text-info fw-bold mb-0 text-center" style={{fontSize:"15px"}}>
                                                        4대보험 상실신고서
                                                    </p>
                                                    <p className="mb-0 text-center" style={{fontSize:"13px"}}>전동그라미</p>
                                                </div>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4 className="page-title mt-5">요청현황</h4>
                            <Row>
                                <Col xl={3}>
                                    <Card className="my-1 shadow-none border">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <div className="col-auto text-danger" style={{fontSize:"13px"}}>
                                                    요청
                                                </div>
                                                <div className="col ps-0">
                                                    <p className="text-info fw-bold mb-0 text-center" style={{fontSize:"15px"}}>
                                                        이직확인서
                                                    </p>
                                                    <p className="mb-0 text-center" style={{fontSize:"13px"}}>한세모</p>
                                                </div>
                                                {/* <div className="col-auto">
                                                한세모님
                                            </div> */}
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                                <Col xl={3}>
                                    <Card className="my-1 shadow-none border">
                                        <div className="p-2">
                                            <Row className="align-items-center">
                                                <div className="col-auto text-danger" style={{fontSize:"13px"}}>
                                                    요청
                                                </div>
                                                <div className="col ps-0">
                                                    <p className="text-info fw-bold mb-0 text-center" style={{fontSize:"15px"}}>
                                                        4대보험 상실신고서
                                                    </p>
                                                    <p className="mb-0 text-center"style={{fontSize:"13px"}}>장가로</p>
                                                </div>
                                            </Row>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

const BrowsersChart = () => {
     // 미디어쿼리
     const isDesktop: boolean = useMediaQuery({
        query: "(min-width:1309px) ",
    });
    const isTablet: boolean = useMediaQuery({
        query: " (max-width:1308px)",
    });
    

    return(
        <>
        <div>
                <Row>
                    {isDesktop &&
                        < BrowsersChartPC />
                    }
                </Row>
                <Row>
                    {isTablet &&
                       < BrowsersChartMobile  />
                    }
                </Row>
            </div>
        </>
    )
}

export default BrowsersChart;
