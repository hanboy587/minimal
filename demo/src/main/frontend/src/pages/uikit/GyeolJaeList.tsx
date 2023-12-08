import React, { useContext, useEffect, useState, useRef, } from 'react';
import { Row, Col, Table, Button, Collapse, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridCellProps,GridPageChangeEvent } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State } from "@progress/kendo-data-query";
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { authLevel } from 'utils/authLevel';
import { getUsername } from 'utils/getUsername';

const initialDataState: State = {
    sort: [{ field: "code", dir: "asc", }],
    take: 10,
    skip: 0
};

interface Iprops {
    gyeolJaeUpdate : number;
    gyeolJaeList : any;
}

const GyeolJaeList = ({gyeolJaeUpdate} : Iprops) => {
    const [gyeolJaeList, setGyeolJaeList] = useState<any[]>([]);
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem('accessToken'));
    const [forceRender, setForceRender] = useState(false);


    useEffect(() => {
        getGyeolJaeList();
    }, [gyeolJaeUpdate]);

    useEffect(() => {
        getGyeolJaeList();
    }, []);
    const timeFilter = (el : any) => {
        if (el.updatedWork) 
            el.updatedWork = el.updatedWork.substring(19, -1);
        if (el.updatedLeave)
            el.updatedLeave = el.updatedLeave.substring(19, -1);
        if (el.gyeolJaeDay)
            el.gyeolJaeDay = el.gyeolJaeDay.substring(10, -1);
        return el; 
    };


    const getGyeolJaeList = async() => {
        const res = await axios.post("gyeolJaeList");
        const accessToken: any = sessionStorage.getItem('accessToken');
        const token = sessionStorage.getItem('accessToken');
        setAccessToken(token);
        console.log('결재리스트 ::: ', res);
        let filterData = [];

        if(accessToken){
            const jwtAccess: any = jwtDecode(accessToken);
            if(Number(jwtAccess.ApprovalAuthorityLevel) === 1){
                const filterData1 = res.data.filter((item: any) => item.firstApproval == null || (item.firstApproval != null && item.secondApproval == null) || item.type != '취소')
                const sortData = [...filterData1].sort((a:any, b:any) => +new Date(b.nowDate) - +new Date(a.nowDate));
                filterData = sortData;
                
            }else if(Number(jwtAccess.ApprovalAuthorityLevel) === 2){
                const filterData1 = res.data.filter((item: any) => item.approvalStatus == "PENDING" || (item.firstApproval != null && item.secondApproval == null) || (item.firstApproval != null && item.secondApproval != null) && item.type != '취소')
                const sortData = [...filterData1].sort((a:any, b:any) => +new Date(b.nowDate) - +new Date(a.nowDate));
                filterData = sortData;
            }else{
                const filterData1 = res.data.filter((item: any) => item.requesterUsername == getUsername())
                console.log('aaaaaaaaaaaaaa ', filterData1);
                const sortData = [...filterData1].sort((a:any, b:any) => +new Date(b.nowDate) - +new Date(a.nowDate));
                filterData = sortData;
            }
        }


        const data = filterData?.map((el : any) => {
            
            // 출력 값 수정
            if(el.hasOwnProperty("firstApproval") && el['firstApproval'] != null){
                el.firstApproval = el.firstApproval ? el.firstApproval + ' - 1차 결재자' : "";
            }
            if(el.hasOwnProperty("secondApproval") && el['secondApproval'] != null){
                el.secondApproval = el.secondApproval ? el.secondApproval + ' - 2차 결재자' : "";
            }

            if(el['approvalStatus'] == 'REJECTED'){
                el.approvalStatus = '반려';
            }
            if(el['approvalStatus'] == 'APPROVED'){
                el.approvalStatus = '승인';
            }
            if(el['approvalStatus'] == 'PREPARED'){
                el.approvalStatus = '결재대기';
            }
            if(el['approvalStatus'] == 'PENDING'){
                el.approvalStatus = '1차승인';
            }
            if(el['approvalStatus'] == 'APPROVED_CANCEL'){
                el.approvalStatus = '결재취소';
            }

            return timeFilter(el);
        })
        // console.log(data);
        setGyeolJaeList(data);
    };

    
    // 페이징
    interface PageState {
        skip: number;
        take: number;
      }
      
    const initialDataState2: PageState = { skip: 0, take: 10 };
    const [page, setPage] = React.useState<PageState>(initialDataState2);
    const pageChange = (event: GridPageChangeEvent) => {
        setPage(event.page);
    };

    return (
        <>
            <Row>
                <div>  
                    <Grid
                        style={{ minWidth:"150px",}}
                        pageable={true}
                        skip={page.skip}
                        take={page.take}
                        total={gyeolJaeList?.length}
                        onPageChange={pageChange}
                        sortable={true}
                        filterable={false}
                        data={gyeolJaeList?.slice(page.skip, page.take + page.skip)}
                        
                    >   {/* width="250px"  */}
                        <Column field="nowDate" title="요청일" />
                        <Column field="type" title="타입" width="70px"/>
                        <Column field="requesterRealname" title="요청자" width="80px" />
                        {/* <Column field="updatedWork" title="출근시간" width="300px"/>
                        <Column field="updateWork" title="출근수정시간" width="300px"/>
                        <Column field="updatedLeave" title="퇴근시간" width="300px"/>
                        <Column field="updateLeave" title="퇴근수정시간" width="300px"/> */}
                        {/* {
                            gyeolJaeList?.map((item) => {
                                if(item.firstApproval != null && item.secondApproval == null){
                                    return <Column field="firstApproval" title="결재자" width="250px"/>
                                }else if(item.firstApproval != null && item.secondApproval != null){
                                    return <Column field="secondApproval" title="결재자" width="250px"/>

                                }
                            })
                        } */}
                        <Column field='firstApproval' title="1차 결재자" width="170px"/>
                        <Column field='secondApproval' title="2차 결재자" width="170px"/>
                        {/* <Column field="firstApproval" title="결재자" width="250px"/> */}
                        <Column field="gyeolJaeDay" title="결재일" width="250px"/>
                        <Column field="approvalStatus" title="처리상태" width="252px" filterable={true} />
                    </Grid>

                </div>
            </Row>
        </>
    );
};

export default GyeolJaeList;
