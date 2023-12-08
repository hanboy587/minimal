import { Row, Col, Card, Form, Button, Modal, Table } from 'react-bootstrap';
import { useToggle } from 'hooks';
import { PageTitle } from 'components';
import { useModal } from './hooks';
import { Wizard, Steps, Step } from 'react-albus';
import SearchBox from './Search box';
import { useEffect, useState, useRef, } from 'react';
import axios from 'axios';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State } from "@progress/kendo-data-query";
import React from 'react';

// 전체 직원 출결조회


// 임시데이터
const MgeunmuData = [
    {
        "workingDay": "2022.08.08",
        "geunloname": "나이스",
        "buseo": "인사",
        "chulgeun": "08:00",
        "toegeun": "18:00",
        "workTotal": "9",
        "overTotal": "0",
    },
    {
        "workingDay": "2022.08.08",
        "geunloname": "나출석",
        "buseo": "인사",
        "chulgeun": "08:00",
        "toegeun": "18:00",
        "workTotal": "9",
        "overTotal": "0",
    },
    {
        "workingDay": "2022.08.07",
        "geunloname": "나이스",
        "buseo": "인사",
        "chulgeun": "08:00",
        "toegeun": "18:00",
        "workTotal": "9",
        "overTotal": "0",
    },
    {
        "workingDay": "2022.08.09",
        "geunloname": "나이스",
        "buseo": "인사",
        "chulgeun": "08:00",
        "toegeun": "18:00",
        "workTotal": "9",
        "overTotal": "0",
    },
];


// grid 
const columns: Array<columnInterface> = [
    { field: "workingDay", title: "근무일", minWidth: 46 },
    { field: "geunloname", title: "이름", minWidth: 46 },
    { field: "buseo", title: "부서", minWidth: 46 },
    { field: "chulgeun", title: "출근시간", minWidth: 46 },
    { field: "toegeun", title: "퇴근시간", minWidth: 46 },
    { field: "workTotal", title: "실제근로(h)", minWidth: 46 },
    { field: "overTotal", title: "연장근로(h)", minWidth: 46 },
];


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

// mobile 테이블조정가능
const ADJUST_PADDING: number = 4;
const COLUMN_MIN: number = 1;

// paging부분
const initialDataState: State = {
    sort: [{ field: "code", dir: "asc", }],
    take: 10,
    skip: 0
};


const Monthlygeunmujohoe = () => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);

    // 스크롤 기능
    // table 넓이
    const minGridWidth = useRef<number>(0);
    const grid = useRef<any>(null);
    // const [gridData, setGridData] = useState<Array<commuteAllList>>(table);
    const [applyMinWidth, setApplyMinWidth] = useState(false);
    const [gridCurrent, setGridCurrent] = useState(0);
    useEffect(() => {
        grid.current = document.querySelector(".k-grid");
        window.addEventListener("resize", handleResize);
        columns.map((item: columnInterface) =>
            item.minWidth !== undefined
                ? (minGridWidth.current += item.minWidth)
                : minGridWidth.current
        );
        setGridCurrent(grid.current.offsetWidth);
        setApplyMinWidth(grid.current.offsetWidth < minGridWidth.current);
    }, []);

    const handleResize = () => {
        if (grid.current.offsetWidth < minGridWidth && !applyMinWidth) {
            setApplyMinWidth(true);
        } else if (grid.current.offsetWidth > minGridWidth) {
            setGridCurrent(grid.current.offsetWidth);
            setApplyMinWidth(false);
        }
    };

    const setWidth = (minWidth: number | undefined) => {
        if (minGridWidth === undefined) {
            minWidth = 0;
        }
        let width;
        if (applyMinWidth || minWidth == undefined) {
            width = minWidth;
        } else {
            width = minWidth + (gridCurrent - minGridWidth.current) / columns.length;
        }
        if (width && width >= COLUMN_MIN) {
            width -= ADJUST_PADDING;
        }
        return width;
    };



    // useEffect
    const [geunloname, setGeunloname] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('url');
                setGeunloname(res.data[0].geunloname)

            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {/* <Row className="mt-3 text-center">
                <Col xl={3} className="mt-2">
                    <div style={{ fontSize: "18px" }}>
                        기간 : &nbsp;&nbsp; <input type="month" style={{ border: "1px solid #FFFFFF", outline: "none" }}></input>
                    </div>
                </Col>
                <Col xl={3} className="mt-2">
                    <div style={{ fontSize: "18px" }}>
                        항목 : &nbsp;&nbsp;
                        <input type="checkbox" name="weeklycheck"></input> 전체 &nbsp;&nbsp;
                        <input type="checkbox" name="holidaychulgeun"></input> 휴일출근
                    </div>
                </Col>
                <Col xl={3} className="mt-2">
                    <div>
                        <SearchBox />
                    </div>
                </Col>
                <Col xl={3} className="mt-2">
                    <p><Button>조회하기</Button></p>
                </Col>
            </Row> */}

            <Row>
                <div>
                    <Grid
                        pageable={true}
                        sortable={true}
                        filterable={true}
                        style={{ }}
                        data={process(MgeunmuData, dataState)}
                        {...dataState}
                        onDataStateChange={(e: GridDataStateChangeEvent) => {
                            setDataState(e.dataState);
                        }}
                    >
                        {columns.map((column) => {
                            return (
                                <Column
                                    field={column.field}
                                    title={column.title}
                                    width={setWidth(column.minWidth)}
                                />
                            );
                        })}
                    </Grid>
                </div>
            </Row>
            {/* <Row>
                <Wizard>
                    <Steps>
                        <Step
                            id="wolgeuntae1"
                            render={({ next }) => (

                                <Form>
                                    <div className="table-responsive text-center mt-3">
                                        <ul className="list-inline wizard">
                                            <li className="next list-inline-item float-end mb-2">
                                                <Button onClick={next} variant="outline-primary">
                                                    {'>'}
                                                </Button>
                                            </li>
                                        </ul>
                                        <Table className="table-centered text-black font-16 " bordered hover>
                                            <thead className="table-primary">
                                                <tr>
                                                    <th>이름</th>
                                                    <th>부서</th>
                                                    <th>01 일</th>
                                                    <th>02 일</th>
                                                    <th>03 일</th>
                                                    <th>04 일</th>
                                                    <th>05 일</th>
                                                    <th>06 일</th>
                                                    <th>07 일</th>
                                                    <th>08 일</th>
                                                    <th>09 일</th>
                                                    <th>10 일</th>
                                                    <th>11 일</th>
                                                    <th>12 일</th>
                                                    <th>13 일</th>
                                                    <th>14 일</th>
                                                    <th>15 일</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{geunloname}</td>
                                                    <td>인사팀</td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>- <br />
                                                        -
                                                    </td>
                                                    <td>- <br />
                                                        -
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>미체크 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        미체크
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Form>
                            )}
                        />
                        <Step
                            id="wolgeuntae2"
                            render={({ previous }) => (
                                <Form>
                                    <div className="table-responsive text-center mt-3">
                                        <ul className="list-inline wizard">
                                            <li className="previous list-inline-item float-end mb-2">
                                                <Button onClick={previous} variant="outline-primary">
                                                    {'<'}
                                                </Button>
                                            </li>
                                        </ul>
                                        <Table className="table-centered text-black font-16 " bordered hover>
                                            <thead className="table-primary">
                                                <tr>
                                                    <th>이름</th>
                                                    <th>부서</th>
                                                    <th>16 일</th>
                                                    <th>17 일</th>
                                                    <th>18 일</th>
                                                    <th>19 일</th>
                                                    <th>20 일</th>
                                                    <th>21 일</th>
                                                    <th>22 일</th>
                                                    <th>23 일</th>
                                                    <th>24 일</th>
                                                    <th>25 일</th>
                                                    <th>26 일</th>
                                                    <th>27 일</th>
                                                    <th>28 일</th>
                                                    <th>29 일</th>
                                                    <th>30 일</th>
                                                    <th>31 일</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{geunloname}</td>
                                                    <td>인사팀</td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>미체크 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>- <br />
                                                        -
                                                    </td>
                                                    <td>- <br />
                                                        -
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>미체크 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>07:00 <br />
                                                        17:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        미체크
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>09:00 <br />
                                                        18:00
                                                    </td>
                                                    <td>11:00 <br />
                                                        18:00
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Form>
                            )}
                        />
                    </Steps>
                </Wizard>
            </Row> */}
        </>
    );
};

export default Monthlygeunmujohoe;
