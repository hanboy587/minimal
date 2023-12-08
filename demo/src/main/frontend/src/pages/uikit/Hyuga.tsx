import { Row, Col, Table, Card, Button, Collapse, useAccordionButton, AccordionContext } from 'react-bootstrap';
import React, { useEffect, useState, useRef, } from 'react';
import axios from 'axios';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridCellProps, GridPageChangeEvent } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State } from "@progress/kendo-data-query";
import { getUsername } from 'utils/getUsername';
import GyeolJaeList from './GyeolJaeList';
import { getRealname } from 'utils/getRealname';

// 임시데이터

export interface columnInterface {
    Id?: number;
    type?: string;
    comment?: string;
    gyeolJaeJaUsername? : string;
    gyeolJaeJaRealname? : string;
}



const initialDataState: State = {
    sort: [{ field: "code", dir: "asc", }],
    take: 10,
    skip: 0
};

interface Iprops {
    gyeolJaeUpdate : number;
    setGyeolJaeUpdate : React.Dispatch<React.SetStateAction<number>>;
    gyeolJaeList : any;
};


const Hyuga = ({ gyeolJaeUpdate, setGyeolJaeUpdate, gyeolJaeList} : Iprops) => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    //  처리상태 button
    const CommandCell = (props: GridCellProps) => {
        const onclickHandler = async() => {
            if (window.confirm("승인시철회가불가능합니다")) {
                const index = props.dataIndex;
                hyugaList[index].gyeolJaeJaRealname = getRealname();
                hyugaList[index].gyeolJaeJaUsername = getUsername();
                const id = hyugaList[index].idx;
                const res = await axios.post(`/gyeolJae/${id}/approval`, hyugaList[index]);
                setGyeolJaeUpdate(gyeolJaeUpdate + 1);
                if(res.status == 200){
                    alert('승인완료');
                }else{
                    alert('정상적으로 승인 처리가 되지 않았습니다. 개발팀에 문의하시길 바랍니다.');
                }
            } else {

                alert("승인취소");
            }
        };
        const onclickHandler2 = async() => {
            // rejectGyeolJae
            if (window.confirm("반려시철회가불가능합니다")) {
                const index = props.dataIndex;
                hyugaList[index].gyeolJaeJaRealname = getRealname();
                hyugaList[index].gyeolJaeJaUsername = getUsername();
                const id = hyugaList[index].idx;
                const res = await axios.patch(`/gyeolJae/${id}/rejection`, hyugaList[index]);
                if(res.status == 200){
                    alert('반려완료');
                }else{
                    alert('정상적으로 반려 처리가 되지 않았습니다. 개발팀에 문의하시길 바랍니다.');
                }
                setGyeolJaeUpdate(gyeolJaeUpdate + 1);
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

    const timeFilter = (el : any) => {
        if (el.nowTime) 
            el.nowTime = el.nowTime.substring(10, -1);
        if (el.updateWork) 
            el.updateWork = el.updateWork.substring(16, 11);
        if (el.updatLeave)
            el.updatLeave = el.updatLeave.substring(16, 11);
        if (el.gyeolJaeDay)
            el.gyeolJaeDay = el.gyeolJaeDay.substring(10, -1);
        return el;
    };
    
    const [hyugaList, setHyugaList] : any = useState([]);

    const filterHyuga = (el : any[]) => {
        if (!el)
            return null;
        return el.map(data => {
            if (data.type.trim() == "휴가" && data.firstApproval != 'REJECTED') {
                return timeFilter(data);
            }
        }).filter(el => el);
    };

    useEffect(() => {
        setHyugaList(filterHyuga(gyeolJaeList));
    }, [gyeolJaeList]);
    useEffect(() => {
        // console.log("hyugaList : ", hyugaList);
    }, [hyugaList]);


    // 페이징
    interface PageState {
        skip: number;
        take: number;
      }
      
    const initialDataState2: PageState = { skip: 0, take: 5 };
    const [page, setPage] = React.useState<PageState>(initialDataState2);
    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };
    return (
        <>
            <Row>
                <div>
                    <Grid
                        style={{  minWidth: "150px", }}
                        pageable={true}
                        skip={page.skip}
                        take={page.take}
                        total={hyugaList?.length}
                        onPageChange={pageChange}
                        sortable={true}
                        filterable={false}
                        data={hyugaList?.slice(page.skip, page.take + page.skip)}
                        // {...dataState}
                        onDataStateChange={(e: GridDataStateChangeEvent) => {
                            setDataState(e.dataState);
                        }}
                    >    {/* width="250px"  */}
                        <Column field="nowTime" title="요청일" />
                        <Column field="nowDate" title="휴가희망일" />
                        <Column field="vacationSelectItem" title="휴가종류"/>
                        <Column field="requesterRealname" title="요청자"/>
                        <Column field="money" title="(유급/무급)"/>
                        <Column field="comment" title="사유" />

                        <Column field="cheolisangtae" title="처리상태"  filterable={false} cell={CommandCell} />
                    </Grid>
                </div>
            </Row>
        </>
    );
};

export default Hyuga;