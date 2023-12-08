import { Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import { PageTitle } from 'components';
import { useToggle } from 'hooks';
import axios from 'axios';
import { process, filterBy, CompositeFilterDescriptor, } from "@progress/kendo-data-query";
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { Grid, GridColumn as Column, GridPageChangeEvent, GridFilterChangeEvent, GridCellProps } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-bootstrap/dist/all.css";
import { countColumn } from 'codemirror';

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
    { field: "nowDate", title: "날짜", minWidth: 100, },
    { field: "nowDate", title: "소정근로시작", minWidth: 100 },
    { field: "nowDate", title: "소정근로종료", minWidth: 100 },
    { field: "work", title: "출근", minWidth: 200 },
    { field: "leave", title: "퇴근", minWidth: 200 },
];
const ADJUST_PADDING: number = 4;
const COLUMN_MIN: number = 4;

// table 검색기능부분
const initialFilter: CompositeFilterDescriptor = {
    logic: "and",
    filters: [{ field: "nowDate", operator: "contains", value: "", }],
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
        console.log(scrollHeight - clientHeight);
        console.log("scrollHeight : ", scrollHeight);
        console.log("scrollTop : ", scrollTop);
        console.log("clienHeight : ", clientHeight);
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
            width =  minWidth + (gridCurrent - minGridWidth.current) / columns.length;
        }
        if (width && width >= COLUMN_MIN) {
            width -= ADJUST_PADDING;
        }
        return width;
    };
    return (
        <>
            <PageTitle
                breadCrumbItems={[

                ]}
                title={'출퇴근조회'}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Grid
                                style={{
                                    height: "553px"
                                }}
                                data={filterBy(table.slice(page.skip, page.take + page.skip), filter,)}
                                // data={table}
                                pageable={true}
                                skip={page.skip}
                                take={page.take}
                                onPageChange={pageChange}
                                total={table.length}
                                filterable={true}
                                filter={filter}
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