import { Row, Col, Card, Offcanvas, Button, Modal, Table } from 'react-bootstrap';
import { useToggle } from 'hooks';
import { PageTitle } from 'components';
import { useModal } from './hooks';
import SearchBox from './Search box';
import React, { useEffect, useState,  useRef, } from 'react';
import axios from 'axios';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridSortChangeEvent, } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State, orderBy, SortDescriptor } from "@progress/kendo-data-query";
// 임시 데이터
import  DgeunmuData  from "./DgeunmuData.json"
import { setFlagsFromString } from 'v8';

// 전체 직원 출결조회Page
// 메뉴명 : 근무기록조회

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


// paging 및 filter 
const initialDataState: State = {
    sort: [{ field: "code",  dir: "asc", }],
    take: 10,
    skip: 0
};

// 정렬 기능
// const initialSort: Array<SortDescriptor> = [
//     { field: "geunloname", dir: "asc" },
//   ];

// const [sort, setSort] = React.useState(initialSort);


const Dailygeunmujohoe = () => {
    // 다중 정렬에서 사용할 data set
    const [data, setData] = React.useState<DataInterface[]>(DgeunmuData);
    const [sort, setSort] = React.useState<Array<SortDescriptor>>([
        {field:"geunloname", dir: "desc"},
    ])

    // 다중 정렬 체크 박스
    const [allowUnsort, setAllowUnsort] = React.useState<boolean>(true);
    const [multiple, setMultiple] = React.useState<boolean>(false);

    // 정렬에 사용할 
    const sortChange = (event: GridSortChangeEvent) => {
        setData(getDgeunmuData(event.sort));
        setSort(event.sort);
    }

    const getDgeunmuData = (sort: SortDescriptor[]): DataInterface[] => {
        return orderBy(DgeunmuData, sort);
    }

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


    // 사용하지 않는 코드
    // // 오늘날짜구하기
    // const date = new Date();
    // // 실제근로
    // const [workTotal, setWorkTotal] = useState<number>(0);
    // // 연장근로
    // const [overTotal, setOverTotal] = useState<number>(0);


    // // useEffect

    // const [geunloname, setGeunloname] = useState('')
    // const [buseo, setBuseo] = useState('')


    // api 통신 시 사용 될 axios
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get('url');
    //             setGeunloname(res.data[0].geunloname)
    //             setBuseo(res.data[0].buseo)

    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }
    //     fetchData();
    // }, []);
    
    
    return (
        <>
            <Row>
                <div>
                <input
          type="checkbox"
          className="k-checkbox k-checkbox-md k-rounded-md"
          id="unsort"
          checked={allowUnsort}
          onChange={(event) => {
            setAllowUnsort(event.target.checked);
          }}
        />
        <label
          htmlFor="unsort"
          className="k-checkbox-label"
          style={{ lineHeight: "1.2", marginBottom: "1em" }}
        >
          정렬 해제 활성화
        </label>
        <br />
        <input
          type="checkbox"
          className="k-checkbox k-checkbox-md k-rounded-md"
          id="multiSort"
          checked={multiple}
          onChange={(event) => {
            setMultiple(event.target.checked);
          }}
        />
        <label
          htmlFor="multiSort"
          className="k-checkbox-label"
          style={{ lineHeight: "1.2" }}
        >
          다중 정렬 사용
        </label>
                    <Grid
                        pageable={true}
                        sortable={{
                            allowUnsort: allowUnsort,
                            mode: multiple ? "multiple" : "single",
                          }}
                        sort={sort}
                        filterable={true}
                        style={{ }}
                        // 상단에서 이미 정의된 data로 사용하기 때문에 process 삭제
                        // data={process(DgeunmuData, dataState)}
                        data={data}
                        // 상단에서 이미 정의된 펑션을 사용하기 때문에 코드 삭제
                        // {...dataState}
                        // onDataStateChange={(e: GridDataStateChangeEvent) => {
                        //     setDataState(e.dataState);
                        // }}
                        onSortChange={sortChange}
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
        </>
    );
};

export default Dailygeunmujohoe;

// 기존 table
{/* <Row className="mt-3 text-center">
                <Col xl={3} className="mt-2">
                    <div style={{ fontSize: "18px" }}>
                        날짜 : &nbsp;&nbsp; <input type="date" style={{ border: "1px solid #FFFFFF", outline: "none" }}></input>
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
{/* <div className="table-responsive text-center mt-3">
                    <Table className="table-centered text-black font-16" bordered hover>
                        <thead className="table-primary">
                            <tr>
                                <th>근무일</th>
                                <th>이름</th>
                                <th>부서</th>
                                <th>출근시간</th>
                                <th>퇴근시간</th>
                                <th>실제근로</th>
                                <th>연장근로</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{date.toLocaleDateString()}</td>
                                <td>{geunloname}</td>
                                <td>{buseo}</td>
                                <td>09:00</td>
                                <td>18:00</td>
                                <td>{workTotal} 시간</td>
                                <td>{overTotal} 시간</td>
                            </tr>
                        </tbody>
                    </Table>
                </div> */}