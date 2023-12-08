import { Row, Col, Table, Card, Button, Collapse, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useToggle } from 'hooks';
import { PageTitle, FormInput, } from 'components';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState, useRef, } from 'react';
import axios from 'axios';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridCellProps } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State } from "@progress/kendo-data-query";


// 외근 승인페이지

// 임시데이터
const OegeunData = [
    {
        "yocheongil": "2022.08.08",
        "geunloname": "나이스",
        "sincheongDay": "2022.08.06",
        "sayu": "업무미팅",
        "gyeoljaeja": "결재왕",
        "gyeoljaeil": "2022.08.10",
        "cheolisangtae": "승인",
    },
    {
        "yocheongil": "2022.08.05",
        "geunloname": "나이스",
        "sincheongDay": "2022.08.01",
        "sayu": "업무미팅",
        "gyeoljaeja": "결재왕",
        "gyeoljaeil": "2022.08.10",
        "cheolisangtae": "승인",
    },
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


const Oegeun = () => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);

    //  처리상태 button
    const CommandCell = (props: GridCellProps) => {
        const onclickHandler = () => {
            if (window.confirm("승인시철회가불가능합니다")) {
                alert("승인완료");
            } else {
                alert("승인취소");
            }
        };
        const onclickHandler2 = () => {
            if (window.confirm("반려시철회가불가능합니다")) {
                alert("반려완료");
            } else {
                alert("반려취소");
            }
        };
        return (
            <>
                <td>
                    <Button className="mx-2" variant="danger" size="sm" onClick={onclickHandler}>승인</Button>
                    <Button size="sm" onClick={onclickHandler2}>반려</Button>
                </td>
            </>
        );
    };
    return (
        <>
            <Row>
                <div>
                    <Grid
                        style={{ maxHeight: "1200px", minHeight: "400px", minWidth: "150px", }}
                        pageable={true}
                        sortable={true}
                        filterable={true}
                        data={process(OegeunData, dataState)}
                        {...dataState}
                        onDataStateChange={(e: GridDataStateChangeEvent) => {
                            setDataState(e.dataState);
                        }}
                    >
                        <Column field="yocheongil" title="요청일" width="300px" />
                        <Column field="geunloname" title="요청자" width="250px" />
                        <Column field="sincheongDay" title="신청기간" width="300px" />
                        <Column field="sayu" title="내용및사유" width="600px" />
                        <Column field="gyeoljaeja" title="결재자" width="250px" />
                        <Column field="gyeoljaeil" title="결재일" width="250px" />
                        <Column field="cheolisangtae" title="처리상태" width="252px" filterable={false} cell={CommandCell} />
                    </Grid>
                </div>
            </Row>
        </>
    );
};

export default Oegeun;

// 기존 table code
{/* <div className="table-responsive text-center mt-4">
                <Table style={{ width: "100%" }} className="table-centered text-black" hover>
                    <thead className="table-primary" >
                        <tr style={{ wordBreak: "keep-all" }}>
                            <th>#</th>
                            <th>요청일</th>
                            <th className="fixed">요청자</th>
                            <th>근무일</th>
                            <th colSpan={2}>사유</th>
                            <th>결재자</th>
                            <th>결재일</th>
                            <th>처리상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"></input></td>
                            <td>2022.07.30</td>
                            <td>나이스</td>
                            <td>2022.07.25</td>
                            <td colSpan={2} className="fixed">어디로외근</td>
                            <td>결재왕</td>
                            <td>2022.08.01</td>
                            <td>
                                <Button variant="danger" size="sm" onClick={onclickHandler}>승인</Button>&nbsp;&nbsp;
                                <Button size="sm" onClick={onclickHandler2}>반려</Button>&nbsp;&nbsp;
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div> */}