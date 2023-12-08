import { State } from '@progress/kendo-data-query';
import { Grid, GridCellProps, GridColumn as Column, GridDataStateChangeEvent, GridPageChangeEvent } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-bootstrap/dist/all.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { GiConsoleController } from 'react-icons/gi';
import { getRealname } from 'utils/getRealname';
import { getUsername } from 'utils/getUsername';
import { timeFilter } from 'utils/timeFilter';
import jwtDecode from 'jwt-decode';

export interface columnInterface {
    title?: string;
    field?: string;
    show?: boolean;
    filter?: 'boolean' | 'numeric' | 'text' | 'date' | undefined;
    minWidth?: number;
    minGridWidth?: number;
    locked?: boolean;
    width?: string | number;
    approver?: string;
    gyeolJaeJaUsername?: string;
    gyeolJaeJaRealname?: string;
}

const initialDataState: State = {
    sort: [{ field: 'code', dir: 'asc' }],
    take: 10,
    skip: 0,
};

interface Iprops {
    gyeolJaeUpdate: number;
    setGyeolJaeUpdate: React.Dispatch<React.SetStateAction<number>>;
}

// 근태수정요청및 처리결과
const Geuntaesujeong = ({ gyeolJaeUpdate, setGyeolJaeUpdate }: Iprops) => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);
    const [commuteList, setCommuteList] = useState<any[]>([]);
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem('accessToken'));

    // const timeFilter = (el : any) => {
    //     if (el.updateWork) 
    //         el.updateWork = el.updateWork.substring(16, 11);
    //     if (el.updateLeave)
    //         el.updateLeave = el.updateLeave.substring(16, 11);
    //     if (el.gyeolJaeDay)
    //         el.gyeolJaeDay = el.gyeolJaeDay.substring(10, -1);
    //     return el;
    // };


    useEffect(() => {
        getCommuteList();
        // console.log('username : ', getUsername());
    }, []);

    const getCommuteList = async () => {
        console.log('getCommute 시작');
        const res = await axios.get('/gyeoljae/pending');
        const token = sessionStorage.getItem('accessToken');
        setAccessToken(token);
        console.log('getCommute 첫 인식 토큰 :::', token);
        let filterData = [];

        if(accessToken){
            const jwtAccess: any = jwtDecode(accessToken);
            if(Number(jwtAccess.ApprovalAuthorityLevel) === 1){
                const filterData1 = res.data.data.filter((item: any) => item.type == '근태' && (item.firstApproval == null || (item.firstApproval != null && item.secondApproval == null)) && item.gyeolJaeDay == null)
                const sortData = [...filterData1].sort((a:any, b:any) => +new Date(b.nowDate) - +new Date(a.nowDate));
                console.log(filterData1);
                filterData = sortData;
            }else if(Number(jwtAccess.ApprovalAuthorityLevel) === 2){
                const filterData1 = res.data.data.filter((item: any) => item.type == '근태' && (item.approvalStatus == "PENDING" || ((item.firstApproval != null && item.secondApproval == null) && item.approvalStatus != 'REJECTED')) && item.gyeolJaeDay == null)
                // console.log('근태 2차 데이터', filterData1);
                const sortData = [...filterData1].sort((a:any, b:any) => +new Date(b.nowDate) - +new Date(a.nowDate));
                filterData = sortData;
            }
        }

        // const setData = filterData.filter((el:any) => el.type == '근태' && el.approvalStatus == 'PREPARED');
        const data = filterData.map((el:any) => {
            return timeFilter(el);
        })

        setCommuteList(data);
    }

   

    //  처리상태 button
    const CommandCell = (props: GridCellProps) => {
        const onclickHandler = async () => {
            if (window.confirm('승인시철회가불가능합니다')) {
                const index = props.dataIndex;
                // console.log(commuteList[index]);
                let commute: columnInterface = commuteList[index];
                commute.gyeolJaeJaRealname = getRealname();
                commute.gyeolJaeJaUsername = getUsername();
                const id = commuteList[index]?.idx;
                const res = await axios.post(`/gyeolJae/${id}/approval`, commute);
                console.log(res);
                console.log(res.status);
                if(res.status == 200){
                    alert('승인완료');
                }else{
                    alert('정상적으로 승인 처리가 되지 않았습니다. 개발팀에 문의하시길 바랍니다.');
                }
                getCommuteList();
                setGyeolJaeUpdate(gyeolJaeUpdate + 1);
            } else {
                alert('승인취소');
            }
        };
        
        const onclickHandler2 = async () => {
            if (window.confirm('반려시철회가불가능합니다')) {
                const index = props.dataIndex;
                // console.log(commuteList[index]);
                let commute: columnInterface = commuteList[index];
                commute.gyeolJaeJaRealname = getRealname();
                commute.gyeolJaeJaUsername = getUsername();
                const id = commuteList[index].idx;
                const res = await axios.patch(`/gyeolJae/${id}/rejection`, commute);
                if(res.status == 200){
                    alert('반려완료');
                }else{
                    alert('정상적으로 반려 처리가 되지 않았습니다. 개발팀에 문의하시길 바랍니다.');
                }
                getCommuteList();
                setGyeolJaeUpdate(gyeolJaeUpdate + 1);
            } else {
                alert('반려취소');
            }
        };

        return (
            <>
                <td>
                    <Button  variant="danger" size="sm" onClick={onclickHandler}>
                        승인
                    </Button> &nbsp;
                    <Button size="sm" onClick={onclickHandler2}>
                        반려
                    </Button>
                </td>
            </>
        );
    };

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
                        style={{minWidth: '150px' }}
                        pageable={true}
                        skip={page.skip}
                        take={page.take}
                        total={commuteList.length}
                        onPageChange={pageChange}
                        sortable={true}
                        filterable={false}
                        // data={GeuntaeData}
                        data={commuteList.slice(page.skip, page.take + page.skip)}
                        // data={process(GeuntaeData, dataState)}
                        // {...dataState}
                        onDataStateChange={(e: GridDataStateChangeEvent) => {
                            setDataState(e.dataState);
                        }}>
                        <Column field="nowDate" title="요청일" width="110px"/>
                        <Column field="requesterRealname" title="요청자" width="78px"  />
                        <Column field="updatedWork" title="출근시간" width="100px" />
                        <Column field="updateWork" title="출근수정시간" width="125px" />
                        <Column field="updateWorkComment" title="출근수정사유"  />
                        <Column field="updatedLeave" title="퇴근시간" width="100px"  />
                        <Column field="updateLeave" title="퇴근수정시간" width="125px"  />
                        <Column field="updateLeaveComment" title="퇴근수정사유"  />
                        <Column field="gyeolJaeJaRealname" title="결재자" width="78px" />
                        <Column field="gyeolJaeDay" title="결재일" width="110px" />
                        <Column
                            field="approvalStatus"
                            title="처리상태"
                            filterable={true}
                            cell={CommandCell}
                            width="140px"
                        />
                    </Grid>
                </div>
            </Row>
        </>
    );
};

export default Geuntaesujeong;
