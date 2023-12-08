import { Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import { PageTitle } from 'components';
import { useToggle } from 'hooks';
import axios from 'axios';
import { process, filterBy, CompositeFilterDescriptor, } from "@progress/kendo-data-query";
import { SetStateAction, useEffect, useRef, useState, useCallback } from 'react';
import { Grid, GridColumn as Column, GridPageChangeEvent, GridFilterChangeEvent, GridCellProps, GridToolbar } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import { ExcelExport } from '@progress/kendo-react-excel-export';
import { countColumn } from 'codemirror';
import { makeWoldo } from 'utils/makeWoldo';
import { makeTime } from 'utils/makeTime';
import { nextWoldoBtn } from 'utils/nextWoldoBtn';
import { useMediaQuery } from "react-responsive";
import { SiMicrosoftexcel } from "react-icons/si";
import excelIcon from 'assets/images/free-icon-excel-732220.png';

// 근태관리 페이지

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
// 1월3주
const columns: Array<columnInterface> = [
    { field: "idx", title: "번호", minWidth: 100, },
    { field: "realname", title: "이름", minWidth: 100, },
    { field: "nowDate", title: "날짜", minWidth: 100, },
    { field: "work", title: "출근", minWidth: 200, },
    { field: "leave", title: "퇴근", minWidth: 200 },
    // { field: "realOverTimeStart", title: "연장시작", minWidth: 200 },
    // { field: "realOverTimeEnd", title: "연장종료", minWidth: 200 },
    { field: "workIp", title: "출근요청IP", minWidth: 100 },
    { field: "leaveIp", title: "퇴근요청IP", minWidth: 100 },
    // { field: "workDeviceType", title: "출근요청기기", minWidth: 100 },
    // { field: "leaveDeviceType", title: "퇴근요청기기", minWidth: 100 },
    
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


const TabsExample = () => {
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


    // 1월3주
    const getCommuteList = async () => {
        var data: any = sessionStorage.getItem("hyper_user");
        if (JSON.parse(data).username) {
            const res = await axios.post("commuteList", {
                "username": JSON.parse(data).username
            });
            if (res.data) {
                setTable(res.data);
            }
        }
    }
    const getDetailInfo = (index: number) => {
        const info = table.find((v: commuteAllList) => v.idx === index);
        setDetailInfo(info);
    };

    const getInfo = () => {
        const ret: any = sessionStorage.getItem("hyper_user");
        if (ret) {
            setDivision(JSON.parse(ret).division);
            setRealname(JSON.parse(ret).realname);
        }
    }

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        getCommuteList();
        getInfo();
    }, []);

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
        setUrl('/commute/' + refYear.current + '/' + refMonth.current);

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
        setUrl('/commute/' + refYear.current + '/' + refMonth.current);
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
        setUrl('/commute/' + refYear.current + '/' + refMonth.current);
    }, []);


    const changeSelectYear = (e: any) => {
        refYear.current = e.target.value;
        setUrl('/commute/' + refYear.current + '/' + refMonth.current);
    };



    useEffect(() => {
        axios.get(url)
            .then(res => {
                console.log('aaaaaaaaaaaaa ', res);
                if (res.data) {
                    const newData = res.data.data.map((item: any) => {
                        return {
                            ...item,
                            work: makeTime(item.work),
                            leave: makeTime(item.leave),
                            realOverTimeStart: makeTime(item.realOverTimeStart),
                            realOverTimeEnd: makeTime(item.realOverTimeEnd)
                        }
                    })
                    setCommuteDataList(newData);
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

    // 상단 년월 부분 미디어쿼리
    const isPC: boolean = useMediaQuery({
        query: "(min-width:800px)",
    });
    const isMobile: boolean = useMediaQuery({
        query: "(max-width:799px)",
    });

    const excelName = refYear.current + "년 " + refMonth.current+ "월 근태현황";


    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'근태현황'}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            {isPC &&
                                <Row>
                                    <Col md={3}>
                                        {yearControl()}
                                    </Col>
                                    <Col md={6} style={{ textAlign: "center" }}>
                                        <p style={{ fontSize: "28px" }}>
                                            {/* <Button size="sm" onClick={beforeDate} disabled={isError}> */}
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
                            }
                            {isMobile &&
                                <>
                                    <Row style={{ justifyContent: "center" }}>
                                        {yearControl()}
                                    </Row>
                                    <Row style={{ textAlign: "center" }}>
                                        <p style={{ fontSize: "28px" }}>
                                            {/* <Button size="sm" onClick={beforeDate} disabled={isError}> */}
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
                                    </Row>
                                    <Row>
                                        <Col md={3} style={{ textAlign: "end" }}>
                                            <Button  onClick={exportExcel}> <SiMicrosoftexcel style={{ fontSize: "25px" }} /> </Button>
                                        </Col>
                                    </Row>
                                </>
                            }
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
                                    {/* <GridColumn field="nowDate" title="날짜" />
                                <GridColumn field="nowDate" title="소정근로시작" />
                                <GridColumn field="nowDate" title="소정근로종료" />
                                <GridColumn field="work" title="출근" />
                            <GridColumn field="leave" title="퇴근" /> */}
                                    {/* <GridColumn field="popup" title="상세"
                                    cell={(props: GridCellProps) => (
                                        <td>
                                            <Button variant="link" onClick={() => {
                                                togglechultoegeun()
                                            }}>
                                            ➕
                                            </Button>
                                            </td>
                                            )}
                                        /> */}
                                </Grid>
                            </ExcelExport>

                            {/* 상세 모달 */}
                            <Modal show={isOpen35} onHide={togglechultoegeun}>
                                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                                >
                                    <h5 className="text-white">상세조회</h5>
                                </Modal.Header>
                                <Modal.Body className="chultoegeun01">
                                    <h4> • 기본정보</h4>
                                    <Row>
                                        <Col>
                                            <p className="font-18">
                                                이름 : {realname}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="font-18">
                                                소속 : {division}
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="font-18">
                                                날짜 : {detailInfo?.nowDate}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="font-18">
                                                근무유형 : 정규직
                                            </p>
                                        </Col>
                                    </Row>
                                    <h4> • 소정근로</h4>
                                    <Row>
                                        <Col>
                                            <p className="font-18">
                                                시작 : 09:30
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="font-18">
                                                종료 : 18:00
                                            </p>
                                        </Col>
                                    </Row>
                                    <h4> • 출근</h4>
                                    <Row>
                                        <Col>
                                            <p className="font-18">
                                                확정 :
                                                {/* 확정 : {detailInfo ? detailInfo.work.substring(11, 19) : null} */}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="font-18">
                                                최초 : {detailInfo ? detailInfo.work.substring(11, 19) : null}
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <p className="font-18">
                                            수정사유 : {detailInfo?.correctionWorkComment ? detailInfo.correctionLeaveComment : "없음"}
                                        </p>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="font-18">
                                                디바이스 : {detailInfo?.leaveDeviceType}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="font-18">
                                                IP : {detailInfo?.workIp ? detailInfo.workIp : null}
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="font-18">
                                                위도 : {detailInfo?.workLatitude ? detailInfo.workLatitude.substring(0, 6) : null}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="font-18">
                                                경도 : {detailInfo?.workLongitude ? detailInfo.workLongitude.substring(0, 6) : null}
                                            </p>
                                        </Col>
                                    </Row>
                                    <h4> • 퇴근</h4>
                                    <Row>
                                        <Col>
                                            <p className="font-18">
                                                확정 :
                                                {/* 확정 : {detailInfo?.leave ? detailInfo.leave.substring(11, 19) : null} */}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="font-18">
                                                최초 : {detailInfo?.leave ? detailInfo.leave.substring(11, 19) : null}
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <p className="font-18">
                                            수정사유 : {detailInfo?.correctionLeaveComment ? detailInfo.correctionLeaveComment : "없음"}
                                        </p>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="font-18">
                                                디바이스 : {detailInfo?.leaveDeviceType}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="font-18">
                                                IP : {detailInfo?.leaveIp ? detailInfo.leaveIp : null}
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="font-18">
                                                위도 : {detailInfo?.leaveLatitude ? detailInfo.leaveLatitude.substring(0, 6) : null}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="font-18">
                                                경도 : {detailInfo?.leaveLongitude ? detailInfo.leaveLongitude.substring(0, 6) : null}
                                            </p>
                                        </Col>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button size="sm" variant="link" type="submit" onClick={togglechultoegeun} >
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

export default TabsExample;

// 기존 table

{/* <div className="table-responsive text-center">
        <Table className="table-centered text-black font-16" hover>
            <thead className="table-primary">
                <tr>
                    <th style={{width:"17%"}}>날짜</th>
                    <th style={{width:"17%"}}>소정근로시작</th>
                    <th style={{width:"17%"}}>소정근로종료</th>
                    <th style={{width:"17%"}}>출근</th>
                    <th style={{width:"17%"}}>퇴근</th>
                    <th style={{width:"15%"}}>상세</th>
                </tr>
            </thead>
            {
                table.map((data : commuteInfo, key : number) => (
                    <>
                        <tbody>
                            <tr key={key}>
                                <td style={{width:"17%"}}>{data.nowDate.substring(5, 10)}</td>
                                <td style={{width:"17%"}}>09:30</td>
                                <td style={{width:"17%"}}>18:00</td>
                                <td style={{width:"17%"}}>{ data.work ?data.work.substring(11, 19) : null}</td>
                                <td style={{width:"17%"}}>{ data.leave ? data.leave.substring(11, 19) : null}</td>
                                <td style={{width:"15%"}}>
                                    <Button variant="link" onClick={() => {togglechultoegeun()
                                        getDetailInfo(data.idx)}}>
                                        ➕
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </>
                ))
            }
        </Table>
    </div> */}