import { Row, Col, Table, Card, Button, Collapse, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useToggle } from 'hooks';
import { PageTitle, FormInput, } from 'components';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState, useRef, } from 'react';
import axios from 'axios';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridCellProps, GridPageChangeEvent } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State } from "@progress/kendo-data-query";
import { getUsername } from 'utils/getUsername';
import { getRealname } from 'utils/getRealname';


// 조퇴승인페이지

// 임시데이터
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
// paging부분 
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

const JoToe = ({gyeolJaeUpdate, setGyeolJaeUpdate, gyeolJaeList} : Iprops) => {
    const [dataState, setDataState] = React.useState<State>(initialDataState);

    
    //  처리상태 button
    const CommandCell = (props: GridCellProps) => {
        const onclickHandler = async() => {
            if (window.confirm("승인시철회가불가능합니다")) {
                const index = props.dataIndex;
                joToeList[index].gyeolJaeJaRealname = getRealname();
                joToeList[index].gyeolJaeJaUsername = getUsername();
                const id = joToeList[index].idx;
                const res = await axios.post(`/gyeolJae/${id}/approval`, joToeList[index]);
                if(res.status == 200){
                    alert('승인완료');
                }else{
                    alert('정상적으로 승인 처리가 되지 않았습니다. 개발팀에 문의하시길 바랍니다.');
                }
                setGyeolJaeUpdate(gyeolJaeUpdate + 1);
            } else {
                alert("승인취소");
            }
        };
        const onclickHandler2 = async() => {
            if (window.confirm("반려시철회가불가능합니다")) {
                const index = props.dataIndex;
                joToeList[index].gyeolJaeJaRealname = getRealname();
                joToeList[index].gyeolJaeJaUsername = getUsername();
                const id = joToeList[index].idx;
                const res = await axios.patch(`/gyeolJae/${id}/rejection`, joToeList[index]);
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

    const [joToeList, setJoToeList] : any = useState([]);
    const filterJoToe = (el : any[]) => {
        if (!el) {
            // return el;
            return null;
        }
        return el.map(data => {
            if (data.type == "조퇴" && data.firstApproval != 'REJECTED') {
                return data;
            }
        }).filter(el => el);
    };

    useEffect(() => {
        setJoToeList(filterJoToe(gyeolJaeList));
    }, [gyeolJaeList]);



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
                        style={{  minWidth: "150px",}}
                        pageable={true}
                        skip={page.skip}
                        take={page.take}
                        total={joToeList?.length}
                        onPageChange={pageChange}
                        sortable={true}
                        filterable={false}
                        data={joToeList?.slice(page.skip, page.take + page.skip)}
                        // data={process(JotoeData, dataState)}
                        // {...dataState}
                        onDataStateChange={(e: GridDataStateChangeEvent) => {
                            setDataState(e.dataState);
                        }}
                    >    {/* width="250px"  */}
                        <Column field="nowDate" title="요청일" />
                        <Column field="requesterRealname" title="요청자" />
                        <Column field="updateTime" title="요청시간"/>
                        <Column field="money" title="(유급/무급)"/>
                        <Column field="comment" title="사유"/>

                        <Column field="cheolisangtae" title="처리상태"  filterable={false} cell={CommandCell} />
                    </Grid>
                </div>
            </Row>

        </>
    );
};

export default JoToe;