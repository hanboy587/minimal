import React, { useEffect, useState, useRef, SetStateAction, useCallback } from 'react';
import { Row, Col, Card, Container, Table, Button, } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
    Grid, GridColumn as Column, GridDataStateChangeEvent,
    GridCellProps, GridItemChangeEvent, GridSelectionChangeEvent,
    GridHeaderSelectionChangeEvent, getSelectedState,
} from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State } from "@progress/kendo-data-query";
import styled from 'styled-components';
import { getter } from "@progress/kendo-react-common";
import { SlOptionsVertical } from 'react-icons/sl';
import { GiConsoleController } from 'react-icons/gi';


// 메뉴명 : 권한관리(직원권한)

// 임시데이터
const gwonhanData = [
    {
        realname: "나이스",
        sosog: "인사팀",
        Discontinued: false,
    }, {
        realname: "한동그라미",
        sosog: "생산",
        Discontinued: false,
    }, {
        realname: "이세모",
        sosog: "물류",
        Discontinued: false,
    }, {
        realname: "강네모",
        sosog: "홍보",
        Discontinued: false,
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
    Discontinued?: boolean;
}




const DATA_ITEM_KEY: string = "ProductID";
const SELECTED_FIELD: string = "selected";
const idGetter = getter(DATA_ITEM_KEY);

const Gwonhangwanli = () => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const ADJUST_PADDING: number = 4;
    const COLUMN_MIN: number = 4;

    // 파라미터용 useState
    const [ selectValue, setSelectValue ] = useState({
        value: '1'
    });
    // selectBox 출력 값
    let sv = '1';
    const [list, setList] = useState<any[]>();

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

    const columns: Array<columnInterface> = [
        { field: "approvalAuthorityLevel", title: "권한", minWidth: -150, },
        { field: "realname", title: "이름", minWidth: 50, },
        { field: "username", title: "계정", minWidth: 150, },
        { field: "realname", title: "이름", minWidth: 50, },
    ];

    useEffect(() => {
        axios.get('/users/business-number/2248167722')
            .then(res => {
                if(res.data){
                    setList(res.data.data);
                }
            })
    },[])

    interface DataItem {
        idx: number;
        username: string;
        realname: string;
        approvalAuthorityLevel: number;
    }

    const ChangeSelect = (e:any, dataItem: any) => {
        const newData = list?.map((item) => {
            if (item.idx == dataItem) {
                return {
                ...item,
                approvalAuthorityLevel: e.target.value == 0 ? null : e.target.value,
                };
            } else {
                return item;
            }
        });

        setList(newData);
        axios.patch(`/users/${dataItem}/approvalAuthorityLevel`,{
            approvalAuthorityLevel: e.target.value
        })
        .then(res => {
            console.log('patch axios :::', res);
        })
        .catch(error => {
            console.log('patch error :::', error);
        })
    }

    return (
        <>
            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="mb-2">
                                <p style={{ fontSize: "30px" }}>
                                    권한부여
                                </p>
                            </div>
                            <Grid

                                style={{ maxHeight: "1200px",fontSize:"18px",}}
                                pageable={true}
                                sortable={true}
                                filterable={true}
                                resizable={true}
                                data={list}
                                // {...dataState}
                                onDataStateChange={(e: GridDataStateChangeEvent) => {
                                    setDataState(e.dataState);
                                }}
                            >

                                <Column field='approvalAuthorityLevel' title='권한관리' width='150px' cell={(props:any) => {
                                    const dataItem = props.dataItem as DataItem;
                                    return(
                                        <td>
                                            <select
                                                className='form-select'
                                                defaultValue={dataItem.approvalAuthorityLevel}
                                                onChange={(e) => ChangeSelect(e, dataItem.idx)}
                                                style={{
                                                    fontSize: "15px",
                                                    border: "1px solid #F6F6F6", outline: "none",
                                                }}
                                            >
                                                <option value='0'>0</option>
                                                <option value='1'>1</option>
                                                <option value='2'>2</option>
                                            </select>
                                        </td>
                                    )
                                }} />

                                {columns.map((column) => {

                                        return (
                                            <Column className="text-center"

                                                field={column.field}
                                                title={column.title}
                                                width={setWidth(column.minWidth)}
                                            />
                                        );
                                    })} 
                                

                                {/* <Column

                                    field="Discontinued"
                                    filterable={false}
                                    title="조직관리"
                                   
                                    cell={() => (
                                        <td className="text-center">
                                            <input
                                                type="checkbox"
                                                style={{ width: "20px", height: "20px" }}
                                            />
                                        </td>
                                    )}
                                />
                                <Column
                                    field="Discontinued"
                                    filterable={false}
                                    title="인사관리"
                                   
                                    minResizableWidth={30}
                                    cell={() => (
                                        <td className="text-center">
                                            <input
                                                type="checkbox"
                                                style={{ width: "20px", height: "20px" }}
                                            />
                                        </td>
                                    )}
                                />
                                <Column
                                    field="Discontinued"
                                    filterable={false}
                                    title="근태관리"
                                    
                                    minResizableWidth={30}
                                    cell={() => (
                                        <td className="text-center">
                                            <input
                                                type="checkbox"
                                                style={{ width: "20px", height: "20px" }}
                                            />
                                        </td>
                                    )}
                                />
                                <Column
                                    field="Discontinued"
                                    filterable={false}
                                    title="휴가관리"
                                   
                                    minResizableWidth={30}
                                    cell={() => (
                                        <td className="text-center">
                                            <input
                                                type="checkbox"
                                                style={{ width: "20px", height: "20px" }}
                                            />
                                        </td>
                                    )}
                                /> */}
                            </Grid>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
};

export default Gwonhangwanli;