import React, { useEffect, useState, useRef, SetStateAction, } from 'react';
import { Row, Col, Card, Table, Button, } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridCellProps, } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State } from "@progress/kendo-data-query";
import styled from 'styled-components';


// 임시데이터
const reportData = [
    {
        "nowDate": "2022.07.01 ~ 2022.07.07",
        "weeklyReport": "레포트",
    }, {
        "nowDate": "2022.07.08 ~ 2022.07.14",
        "weeklyReport": "레포트",
    }, {
        "nowDate": "2022.08.01 ~ 2022.08.07",
        "weeklyReport": "레포트",
    }, {
        "nowDate": "2022.09.01 ~ 2022.09.07",
        "weeklyReport": "레포트",
    },
];



// paging 및 filter 
const initialDataState: State = {
    sort: [{ field: "code", dir: "asc", }],
    take: 10,
    skip: 0
};

export interface columnInterface {
    title?: string;
    field?: string;
    show?: boolean;
    filter?: "boolean" | "numeric" | "text" | "date" | undefined;
    minWidth?: number;
    minGridWidth?: number;
    locked?: boolean;
    width?: string | number;
}

//  처리상태 button
const reportCell = (props: GridCellProps) => {
    return (
        <>
            <td>
                <Link to="#">
                    레포트
                </Link>
            </td>
        </>
    );
};

const Eobmureport = () => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    return (
        <>
            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="mb-2" style={{ textAlign: "right" }}>
                                <Link to="/ui/base-ui/Weeklyplan">
                                    <Button variant="link" style={{ fontSize: "20px" }}>
                                        주간 레포트 작성
                                    </Button>
                                </Link>
                            </div>
                            <Grid
                                style={{ maxHeight: "1200px", minHeight: "400px", minWidth: "150px", }}
                                pageable={true}
                                sortable={true}
                                filterable={true}
                                data={process(reportData, dataState)}
                                {...dataState}
                                onDataStateChange={(e: GridDataStateChangeEvent) => {
                                    setDataState(e.dataState);
                                }}
                            >
                                <Column field="nowDate" title="날짜" />
                                <Column field="weeklyReport" title="주간업무레포트" filterable={false} cell={reportCell} />
                            </Grid>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};


export default Eobmureport;


// 기존 table
{/* <div className="table-responsive text-center mt-3">
                                <Table className="table-centered text-black font-16" hover>
                                    <thead className="table-primary">
                                        <tr>
                                            <th>날짜</th>
                                            <th>주간레포트</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2022.02.02 ~ 2022.02.07</td>
                                            <td>
                                                <Link to="">
                                                    레포트
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div> */}