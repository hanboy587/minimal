import { Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import { PageTitle } from 'components';
import { useToggle } from 'hooks';
import { useMediaQuery } from "react-responsive";
import axios from 'axios';
import { process, filterBy, CompositeFilterDescriptor, } from "@progress/kendo-data-query";
import { SetStateAction, useEffect, useRef, useState, useCallback } from 'react';
import { Grid, GridColumn as Column, GridPageChangeEvent, GridFilterChangeEvent, GridCellProps, GridToolbar } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import { ExcelExport } from '@progress/kendo-react-excel-export';
import excelIcon from 'assets/images/free-icon-excel-732220.png';
import { SiMicrosoftexcel } from "react-icons/si";
import { nextWoldoBtn } from 'utils/nextWoldoBtn';
import { makeTime } from 'utils/makeTime';



interface commuteInfo {
    idx: number,
    work: string,
    leave: string,
    nowDate: string
};

interface commuteAllList {
    idx: number,
    nowDate: string,
    username: string,
    work: string,
    workIp: string,
    workDistance: string,
    workLatitude: string,
    workLongitude: string,
    workDeviceType: string,
    correctionWork: Date,
    correctionWorkComment: Date,
    leave: string,
    leaveIp: string,
    leaveDistance: string,
    leaveLatitude: string,
    leaveLongitude: string,
    leaveDeviceType: string,
    correctionLeave: string,
    correctionLeaveComment: string,
}

// table 넓이
interface columnInterface {
    title?: string;
    field?: string;
    show?: boolean;
    filter?: "boolean" | "numeric" | "text" | "date" | undefined;
    minWidth?: number;
    minGridWidth?: number;
    locked?: boolean;
    width?: string | number;
}

const columns: Array<columnInterface> = [
    { field: "id", title: "번호", },
    { field: "realname", title: "이름", },
    { field: "money", title: "유/무급", },
    { field: "type", title: "종류", },
    { field: "comment", title: "사유", },
    { field: "nowDate", title: "휴가사용일", },        
];
const ADJUST_PADDING: number = 4;
const COLUMN_MIN: number = 4;

// table 검색기능부분
const initialFilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [{ field: "realname", operator: "contains", value: "", }],
};

// table 페이징 처리 부분
interface PageState {
    skip: number;
    take: number;
}
const initialDataState: PageState = { skip: 0, take: 10 };

const HyugasayongList = () => {

    const [isOpen35, togglechultoegeun] = useToggle();
    const [realname, setRealname] = useState("");
    const [table, setTable] = useState([]);
    const [detailInfo, setDetailInfo] = useState<commuteAllList | null>();
    const [division, setDivision] = useState("");

    // table 페이징처리 부분
    const [page, setPage] = useState<PageState>(initialDataState);
    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    // table 검색기능부분
    const [filter, setFilter] = useState(initialFilter);

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

    const [commuteDataList, setCommuteDataList] = useState<any[]>();
    const [ipsaDt, SetIpsaDt] = useState<any>('');
    const [url, setUrl] = useState<any>('');
    const today = {
        year: new Date().getFullYear(), //오늘 연도
        month: new Date().getMonth() + 1, //오늘 월
        date: new Date().getDate(), //오늘 날짜
        day: new Date().getDay(), //오늘 요일
    };
    let refYear = useRef(today.year);
    let refMonth = useRef(today.month);


    const nextWoldoDis =  nextWoldoBtn(refMonth.current, refYear.current);
    const beforeWoldoDis = new Date(ipsaDt) >= new Date(refYear.current+ '-' + refMonth.current + '-01');

    // 연도 선택 selectBox
    const yearControl = useCallback(() => {
        let yearArr = [];
        const startYear = today.year - 3;
        const endYear = new Date().getFullYear();
        for (let i = startYear; i < endYear + 1; i++) {
            yearArr.push(
                <option key={i} value={i}>
                    {i}년
                </option>
            );
        }
        return (
            <>
                <select
                    className='form-select'
                    onChange={changeSelectYear}
                    value={refYear.current}
                    style={{
                        width: "150px", fontSize: "18px",
                        border: "1px solid #F6F6F6", outline: "none",
                    }}
                >
                    {yearArr}
                </select>
            </>
        );
    }, []);



    useEffect(() => {
        setUrl('/hyuga/' + refYear.current + '/' + refMonth.current);

    }, [])

    // 이전 달 버튼
    const beforeDate = useCallback(() => {
        // 월도 변경 버튼으로 연도 바꾸기
        if (refMonth.current === 1) {
            refMonth.current = 12;
            refYear.current = refYear.current - 1;
        } else {
            refMonth.current = refMonth.current - 1;
        }
        setUrl('/hyuga/' + refYear.current + '/' + refMonth.current);
    }, []);

    // 다음 달 버튼
    const afterDate = useCallback(() => {
        // 월도 변경 버튼으로 연도 바꾸기
        if (refMonth.current === 12) {
            refMonth.current = 1;
            refYear.current = Number(refYear.current) + 1;
        } else {
            refMonth.current = Number(refMonth.current) + 1;
        }
        setUrl('/hyuga/' + refYear.current + '/' + refMonth.current);
    }, []);


    const changeSelectYear = (e: any) => {
        refYear.current = e.target.value;
        setUrl('/hyuga/' + refYear.current + '/' + refMonth.current);
    };

    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log('aaaaaaaaa : ', res);
                if (res.data) {
                    // const newData = res.data.data.map((item: any) => {
                    //     return {
                    //         ...item,
                    //         work: makeTime(item.work),
                    //         leave: makeTime(item.leave)
                    //     }
                    // })
                    setCommuteDataList(res.data.data);
                }
            })
            .catch(error => {
                console.log('axios /payroll/search 실패 ! ', error);
                setCommuteDataList([]);
            })
    }, [url])

// grid 엑셀 다운로드
const gridRef = useRef<any>(null);

const exportExcel = () => {
    if (gridRef && gridRef.current) {
        gridRef.current.save();
    }
};

const excelName = refYear.current + "년 " + refMonth.current+ "월 휴가현황";
    

 // 상단 년월 부분 미디어쿼리
 const isPC: boolean = useMediaQuery({
    query: "(min-width:800px)",
});
const isMobile: boolean = useMediaQuery({
    query: "(max-width:799px)",
});

    return (
        <>
            <Row className="mt-3">
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={3}>
                                {yearControl()}
                            </Col>
                            <Col md={6} style={{ textAlign: "center" }}>
                                <p style={{ fontSize: "28px" }}>
                                    <Button size="sm" onClick={beforeDate} disabled={beforeWoldoDis}>
                                        ◀
                                    </Button>&nbsp;&nbsp;
                                    <span>{refMonth.current}월&nbsp;&nbsp;
                                        <span>
                                            <Button id='next' size="sm" onClick={afterDate} disabled={nextWoldoDis}>
                                                ▶
                                            </Button>
                                        </span>
                                    </span>
                                </p>
                            </Col>
                            <Col md={3} style={{ textAlign: "end" }}>
                                <Button onClick={exportExcel} variant='link' style={{boxShadow:"none",outline:"none"}}> <img width='30px' height='30px' src={excelIcon} /> </Button>
                            </Col>
                        </Row>
                        <ExcelExport
                                data={commuteDataList}
                                fileName={excelName}
                                ref={gridRef}
                        >
                            
                            <Grid
                                style={{
                                    height: "553px"
                                }}
                                data={commuteDataList?.slice(page.skip, page.take + page.skip)}
                                // data={table}
                                pageable={true}
                                skip={page.skip}
                                take={page.take}
                                onPageChange={pageChange}
                                total={commuteDataList?.length}
                                // filterable={true}
                                // filter={filter}
                                onFilterChange={(e: GridFilterChangeEvent) => setFilter(e.filter)}
                            >

                                {columns.map((column) => {
                                    return (
                                        <Column
                                            field={column.field}
                                            title={column.title}
                                            // key={index}
                                            width={setWidth(column.minWidth)}
                                            />
                                            );
                                        })}

                            </Grid>
                            </ExcelExport>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
};

export default HyugasayongList;