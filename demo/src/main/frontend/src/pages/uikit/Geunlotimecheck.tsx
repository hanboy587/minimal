import React, { useEffect, useState, useRef, SetStateAction, } from 'react';
import { Row, Col, Card, Container, Table, Button, } from 'react-bootstrap';
import axios from 'axios';
import {
    Grid, GridColumn as Column, GridPageChangeEvent,
    GridCellProps, GridColumn, GridToolbar,GridSortChangeEvent,
    GridItemChangeEvent, GridRowClickEvent,
} from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { geunlotimelist } from './geunlotimelist'; //json
import { orderBy, SortDescriptor } from "@progress/kendo-data-query";

// data 에대한 type지정
export interface Check {
    id?: number;
    geunloName?: string;
    sojeonggeunlo?: number;
    chonggeunlo?: number;
    gibongeunlo?: number;
    yeonjanggeunlo?: number;
    hyuilgeunlo?: number;
    hyuilyeonjanggeunlo?: number;
    yagangeunlo?: number;
    juhyuil?: number;
    Discontinued?: number;
    gonghyuil?: number;
    yeoncha?: number;
    gyeolgeun?: number;
}

// paging
interface PageState {
    skip: number;
    take: number;
}
const initialDataState: PageState = { skip: 0, take: 10 };

// 

const Geunlotimecheck = () => {
    // data
    const [data, setData] = React.useState<Array<Check>>(geunlotimelist);

    //sort
    const [sort, setSort] = React.useState<Array<SortDescriptor>>([
        { field: "id", dir: "desc" },
      ]);
    const [allowUnsort, setAllowUnsort] = React.useState<boolean>(true);
    const [multiple, setMultiple] = React.useState<boolean>(false);

    const sortChange = (event: GridSortChangeEvent) => {
        setData(getGeunlotimelist(event.sort));
        setSort(event.sort);
      };

      const getGeunlotimelist = (sort: SortDescriptor[]): Check[] => {
        return orderBy(geunlotimelist, sort);
      };
    // sort 끝

    const [editID, setEditID] = React.useState<number | null>(null);
    const rowClick = (event: GridRowClickEvent) => {
        setEditID(event.dataItem.id);
    };

    const itemChange = (event: GridItemChangeEvent) => {
        const inEditID = event.dataItem.id;
        const field = event.field || "";
        const newData = data.map((item) =>
            item.id === inEditID ? { ...item, [field]: event.value } : item
        );
        setData(newData);
    };

    const closeEdit = (event: { target: any; currentTarget: any; }) => {
        if (event.target === event.currentTarget) {
            setEditID(null);
        }
    };

    const addRecord = () => {
        const newRecord = { id: data.length + 1 };

        setData([newRecord, ...data]);
        setEditID(newRecord.id);
    };
    // paging
    const [page, setPage] = React.useState<PageState>(initialDataState);
    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };
    return (
        <>
            <Row className="mt-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <div>
                                <p style={{ fontSize: "35px" }}>
                                    근로시간확인
                                </p>
                            </div>
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
                                    다중 정렬
                                </label>
                            <Grid style={{ height: "400px" }}
                                // data={orderBy(geunlotimelist, sort)}
                                data={data.map((item: Check) => ({
                                    ...item,
                                    inEdit: item.id === editID,
                                })).slice(page.skip, page.take + page.skip)}
                                // -----------------------Edit
                                editField="inEdit"
                                onRowClick={rowClick}
                                onItemChange={itemChange}
                                // -----------------------EndEdit
                                // -----------------------paging
                                skip={page.skip}
                                take={page.take}
                                total={geunlotimelist.length}
                                pageable={true}
                                onPageChange={pageChange}
                                // -----------------------Endpaging
                                // -----------------------Sorting
                                sortable={{
                                    allowUnsort: allowUnsort,
                                    mode: multiple ? "multiple" : "single",
                                }}
                                sort={sort}
                                onSortChange={sortChange}
                                // -----------------------Endsorting
                            >
                                {/* grid생성버튼 */}
                                {/* <GridToolbar>
                                    <div onClick={closeEdit}>
                                        <button
                                            title="Add new"
                                            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                                            onClick={addRecord}
                                        >
                                            Add new
                                        </button>
                                    </div>
                                </GridToolbar> */}

                                <Column field="geunloName" title="이름" />
                                <Column field="sojeonggeunlo" title="소정근로" />
                                <Column field="chonggeunlo" title="총근로" />
                                <Column field="gibongeunlo" title="기본근로" />
                                <Column field="yeonjanggeunlo" title="연장근로" />
                                <Column field="hyuilgeunlo" title="휴일근로" />
                                <Column field="hyuilyeonjanggeunlo" title="휴일연장근로" />
                                <Column field="yagangeunlo" title="야간근로" />
                                <Column field="juhyuil" title="주휴" />
                                <Column field="gonghyuil" title="공휴" />
                                <Column field="yeoncha" title="연차" />
                                <Column field="gyeolgeun" title="결근" />

                            </Grid>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Geunlotimecheck;