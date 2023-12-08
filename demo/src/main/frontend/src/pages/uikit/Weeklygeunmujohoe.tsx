import { Row, Col, Card, Offcanvas, Button, Modal, Table } from 'react-bootstrap';
import { useToggle } from 'hooks';
import { PageTitle } from 'components';
import { useModal } from './hooks';
import SearchBox from './Search box';
import React, { useEffect, useState, useRef, } from 'react';
import axios from 'axios';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State } from "@progress/kendo-data-query";

// 전체 직원 출결조회 (주별)

// 메뉴명 : 근무기록조회(주별)


// 임시데이터
const WgeunmuData = [
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

const columns: Array<columnInterface> = [
    { field: "workingDay", title: "근무일", minWidth: 46 },
    { field: "geunloname", title: "이름", minWidth: 46 },
    { field: "buseo", title: "부서", minWidth: 46 },
    { field: "chulgeun", title: "출근시간", minWidth: 46 },
    { field: "toegeun", title: "퇴근시간", minWidth: 46 },
    { field: "workTotal", title: "실제근로(h)", minWidth: 46 },
    { field: "overTotal", title: "연장근로(h)", minWidth: 46 },
];

// 다중 정렬에서 사용할 컬럼 타입 인터페이스 선언
export interface DataInterface {
    workingDay: string;
    geunloname?: string;
    buseo?: string;
    chulgeun?: string;
    toegeun?: string;
    worktotal?: string;
    overTotal?: string;
}

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


const initialDataState: State = {
    sort: [{ field: "code", dir: "asc", }],
    take: 10,
    skip: 0
};

const Weeklygeunmujohoe = () => {


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



    const date = new Date();
    // 오늘  일 데이터
    const day = date.getDate();
    // 어제 날짜 구하기
    new Date(new Date().setDate(day - 1)).toLocaleDateString();

    // 실제근로
    const [workTotal, setWorkTotal] = useState<number>(0);
    // 연장근로
    const [overTotal, setOverTotal] = useState<number>(0);


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
                        기간 : &nbsp;&nbsp; <input type="week" style={{ border: "1px solid #FFFFFF", outline: "none" }}></input>
                    </div>
                </Col>
                <Col xl={3} className="mt-2">
                    <div style={{ fontSize: "18px" }}>
                        항목 : &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" name="weeklycheck"></input> 전체 &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" name="holidaychulgeun"></input> 휴일출근
                    </div>
                </Col>
                <Col xl={3} className="mt-2">
                    <SearchBox />
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
                        data={process(WgeunmuData, dataState)}
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
                <div className="table-responsive text-center mt-3">
                    <Table className="table-centered text-black font-16" bordered hover>
                        <thead className="table-primary">
                            <tr>
                                <th>이름</th>
                                <th>
                                    {new Date(new Date().setDate(day - 1)).toLocaleDateString()}
                                </th>
                                <th>
                                    {new Date(new Date().setDate(day - 2)).toLocaleDateString()}
                                </th>
                                <th>
                                    {new Date(new Date().setDate(day - 3)).toLocaleDateString()}
                                </th>
                                <th>
                                    {new Date(new Date().setDate(day - 4)).toLocaleDateString()}
                                </th>
                                <th>
                                    {new Date(new Date().setDate(day - 5)).toLocaleDateString()}
                                </th>
                                <th>
                                    {new Date(new Date().setDate(day - 6)).toLocaleDateString()}
                                </th>
                                <th>
                                    {new Date(new Date().setDate(day - 7)).toLocaleDateString()}
                                </th>
                                <th>실제근로</th>
                                <th>연장근로</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{geunloname}</td>
                                <td>
                                    09:00 <br />
                                    18:00
                                </td>
                                <td>
                                    09:00 <br />
                                    18:00
                                </td>
                                <td>
                                    09:00 <br />
                                    18:00
                                </td>
                                <td>
                                    09:00 <br />
                                    18:00
                                </td>
                                <td>
                                    09:00 <br />
                                    미체크
                                </td>
                                <td>
                                    - <br />
                                    -
                                </td>
                                <td>
                                    - <br />
                                    -
                                </td>
                                <td>
                                    {workTotal} 시간
                                </td>
                                <td>
                                    {overTotal} 시간
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Row> */}
        </>
    );
};

export default Weeklygeunmujohoe;
