import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { PageTitle } from 'components';
import React, { useEffect, useState, useRef, } from 'react';
import axios from 'axios';
import {
    Grid, GridColumn as Column, GridDataStateChangeEvent,
    GridPageChangeEvent, GridItemChangeEvent, GridRowClickEvent, GridSortChangeEvent,
} from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State, orderBy, SortDescriptor } from "@progress/kendo-data-query";

// 업무현황 페이지

// 임시데이터
const eobmuhyeonhwangData = [
    {
        ID: 1,
        yocheongil: "2022.08.08",
        geunloname: "나이스",
        singoseojonglyu: "이직확인서",
        cheolisangtae: "승인",
        bigo: "신고서출력",
    },
    {
        ID: 2,
        yocheongil: "2022.08.05",
        geunloname: "나이스",
        singoseojonglyu: "4대보험상실신고서",
        cheolisangtae: "반려",
        bigo: "신고서출력",
    },
];

// data 에대한 type지정
export interface SampleType {
    ID?: number;
    yocheongil?: string;
    geunloname?: string;
    singoseojonglyu?: string;
    cheolisangtae?: string;
    bigo?: string;
}

// grid 
const columns: Array<columnInterface> = [
    { field: "yocheongil", title: "요청일", minWidth: 46 },
    { field: "geunloname", title: "요청자", minWidth: 46 },
    { field: "singoseojonglyu", title: "신고서종류", minWidth: 46 },
    { field: "cheolisangtae", title: "처리상태", minWidth: 46 },
    { field: "bigo", title: "비고", minWidth: 46 },
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
const initialDataState: PageState = { skip: 0, take: 10 };
interface PageState {
    skip: number;
    take: number;
}

const Ratings = () => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    // data
    const [data, setData] = React.useState<Array<SampleType>>(eobmuhyeonhwangData);
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
    // paging
    const [page, setPage] = React.useState<PageState>(initialDataState);
    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    const [editID, setEditID] = React.useState<number | null>(null);
    const rowClick = (event: GridRowClickEvent) => {
        setEditID(event.dataItem.id);
    };

    return (
        <>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title font-20  mb-2">업무요청현황</h4>
                            <p className="text-end mb-1">
                                <Button className="mdi mdi-autorenew text-black" size="sm" variant="link">조회하기</Button>
                            </p>
                            <div>
                                <Grid
                                    sortable={true}
                                    filterable={true}
                                    // paging
                                    skip={page.skip}
                                    take={page.take}
                                    total={eobmuhyeonhwangData.length}
                                    pageable={true}
                                    onPageChange={pageChange}
                                    // --- 
                                    style={{ maxHeight: "600px", padding: "0px", maxWidth:"99%" }}
                                    data={data.map((item: SampleType) => ({
                                        ...item,
                                        inEdit: item.ID === editID,
                                    })).slice(page.skip, page.take + page.skip)} 
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Ratings;

// 기존 table code
{/* <div className="table-responsive text-center">
                                <Table className="table-centered text-black" hover>
                                    <thead className="table-primary">
                                        <tr>
                                            <th>접수일</th>
                                            <th>신고종류</th>
                                            <th>요청인</th>
                                            <th>진행사항</th>
                                            <th>비고</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2022.06.20</td>
                                            <td>이직확인서</td>
                                            <td>나이스</td>
                                            <td>처리중</td>
                                            <td>
                                                <Button size="sm" variant="link"
                                                    className=" text-black"
                                                    onClick={(e) => {
                                                        window.print();
                                                    }}
                                                >
                                                    신고서출력<i className="mdi mdi-file-download-outline"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2022.06.20</td>
                                            <td>4대보험상실신고서</td>
                                            <td>나이스</td>
                                            <td>승인</td>
                                            <td>
                                                <Button size="sm" variant="link"
                                                    className=" text-black"
                                                    onClick={(e) => {
                                                        window.print();
                                                    }}
                                                >
                                                    신고서출력<i className="mdi mdi-file-download-outline"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div> */}