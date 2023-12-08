import { Row, Col, Card, Button, Table } from 'react-bootstrap';
import { Grid, GridColumn as Column, GridPageChangeEvent,
    GridItemChangeEvent, GridRowClickEvent,GridSortChangeEvent,
} from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import React, { useEffect, useState, useRef, SetStateAction, } from 'react';
import { orderBy, SortDescriptor } from "@progress/kendo-data-query";


// 임시 data
const samplelist = [
    {
      ProductID: 1,
      Balsinja: "나이스",
      Susinja: "헤어",
      Jeonsongilsi: new Date(2022, 12, 20),
      Sangtae: "성공",
      TotalPage: 1,
      SuccessPage: 1,
      FailPage: 0,
      SaveFile: "첨부파일필요"
    },
    {
      ProductID: 2,
      Balsinja: "나이스",
      Susinja: "식당",
      Jeonsongilsi: new Date(2022, 12, 21),
      Sangtae: "실패",
      TotalPage: 2,
      SuccessPage: 0,
      FailPage: 2,
      SaveFile: "첨부파일필요"
    },
    {
        ProductID: 3,
        Balsinja: "나이스2",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 4,
        Balsinja: "나이스3",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 5,
        Balsinja: "나이스3",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 6,
        Balsinja: "나이스3",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 7,
        Balsinja: "나이스3",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 8,
        Balsinja: "나이스3",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 9,
        Balsinja: "나이스3",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 10,
        Balsinja: "나이스3",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 11,
        Balsinja: "나이스35",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 12,
        Balsinja: "나이스376",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 13,
        Balsinja: "나이스983",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 14,
        Balsinja: "나이스873",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 15,
        Balsinja: "나이스453",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 16,
        Balsinja: "나이스873",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 17,
        Balsinja: "나이스243",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 18,
        Balsinja: "나이스23",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 19,
        Balsinja: "나이스32",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
      {
        ProductID: 20,
        Balsinja: "나이스31",
        Susinja: "식당",
        Jeonsongilsi: new Date(2022, 12, 21),
        Sangtae: "실패",
        TotalPage: 2,
        SuccessPage: 0,
        FailPage: 2,
        SaveFile: "첨부파일필요"
      },
];
// data 에대한 type지정
export interface SampleType {
  ProductID?: number;
  Balsinja?: string;
  Susinja?: string;
  Jeonsongilsi?: Date;
  Sangtae?: string;
  TotalPage?: number;
  SuccessPage?: number;
  FailPage?: number;
  SaveFile?: string;

}
// paging
interface PageState {
    skip: number;
    take: number;
}
const initialDataState: PageState = { skip: 0, take: 18 };

const FaxList = () =>{
    // data
    const [data, setData] = React.useState<Array<SampleType>>(samplelist);
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

      const getGeunlotimelist = (sort: SortDescriptor[]): SampleType[] => {
        return orderBy(samplelist, sort);
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
            item.ProductID === inEditID ? { ...item, [field]: event.value } : item
        );
        setData(newData);
    };

    const closeEdit = (event: { target: any; currentTarget: any; }) => {
        if (event.target === event.currentTarget) {
            setEditID(null);
        }
    };

    const addRecord = () => {
        const newRecord = { ProductID: data.length + 1 };

        setData([newRecord, ...data]);
        setEditID(newRecord.ProductID);
    };
    // paging
    const [page, setPage] = React.useState<PageState>(initialDataState);
    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };
    
    return(
        <>
            <Row className="mt-3" style={{ margin: "0px", width:"100%" }}>
                <Grid resizable={true}
                    style={{ padding: "0px",}}
                    data={data.map((item: SampleType) => ({
                        ...item,
                        inEdit: item.ProductID === editID,
                    })).slice(page.skip, page.take + page.skip)}
                     editField="inEdit"
                     onRowClick={rowClick}
                     onItemChange={itemChange}
                     skip={page.skip}
                     take={page.take}
                     total={samplelist.length}
                     pageable={true}
                     onPageChange={pageChange}
                     sortable={{
                         allowUnsort: allowUnsort,
                         mode: multiple ? "multiple" : "single",
                     }}
                     sort={sort}
                     onSortChange={sortChange}
                    >
                    <Column field="ProductID" title="순번" width="55%"  className='text-center'/>
                    <Column field="Balsinja" title="발신자" width="100px"  />
                    <Column field="Susinja" title="수신자" width="150%" />
                    <Column field="Jeonsongilsi" title="전송일시" format="{0:yyyy/MM/dd}" width="130%" />
                    <Column field="Sangtae" title="상태" width="80%"  />
                    <Column field="TotalPage" title="전체(장)" width="80%" className='text-center' />
                    <Column field="SuccessPage" title="성공(장)" width="80%" className='text-center' />
                    <Column field="FailPage" title="실패(장)" width="80%" className='text-center' />
                    <Column field="SaveFile" title="파일" width="700%" />
                </Grid>
            </Row>
        </>
    );
};

export default FaxList;