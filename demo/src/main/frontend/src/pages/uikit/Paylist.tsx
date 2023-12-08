import React, { useEffect, useState, useRef, SetStateAction, } from 'react';
import { Row, Col, Card, Container, Table, Button, } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridCellProps, } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State } from "@progress/kendo-data-query";
import styled from 'styled-components';






// 임시데이터
const reportData = [
    {
        "nowDate": "2022.06",
        "paymyeongseseo": "명세서",
    }, {
        "nowDate": "2022.07",
        "paymyeongseseo": "명세서",
    }, {
        "nowDate": "2022.08",
        "paymyeongseseo": "명세서",
    }, {
        "nowDate": "2022.09",
        "paymyeongseseo": "명세서",
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
                <Link to="/ui/base-ui/Geubyeomyeongseseo">
                    명세서
                </Link>
            </td>
        </>
    );
};


const Paylist = () => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    return (
        <>
            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="mb-2">
                                <p style={{ fontSize: "30px" }}>
                                    급여명세서
                                </p>
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
                                <Column field="paymyeongseseo" title="명세서" filterable={false} cell={reportCell} />
                            </Grid>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Paylist;