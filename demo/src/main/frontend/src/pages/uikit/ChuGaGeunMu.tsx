import { Row, Button } from 'react-bootstrap';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridCellProps} from "@progress/kendo-react-grid";
import '@progress/kendo-theme-bootstrap/dist/all.css';
import { process, State } from "@progress/kendo-data-query";
import { useEffect, useState } from 'react';
import { getUsername } from 'utils/getUsername';
import { getRealname } from 'utils/getRealname';
import axios from 'axios';

// 연차 승인페이지

// 임시데이터
const YeonchaData = [{}];

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

const timeFilter = (el : any) => {
        if (el.updatedWork) 
            el.updatedWork = el.updatedWork.substring(19, -1);
        if (el.updatedLeave)
            el.updatedLeave = el.updatedLeave.substring(19, -1);
        if (el.gyeolJaeDay)
            el.gyeolJaeDay = el.gyeolJaeDay.substring(10, -1);
        return el;
    };

const ChuGaGeunMu = ({gyeolJaeUpdate, setGyeolJaeUpdate, gyeolJaeList} : Iprops) => {
    const [dataState, setDataState] = useState<State>(initialDataState);
    const [chuGaGeunMuList, setChuGaGeunMuList] = useState<any[]>([]);

    //  처리상태 button
    const CommandCell = (props: GridCellProps) => {
        const onclickHandler = async() => {
            if (window.confirm("승인시철회가불가능합니다")) {
                const index = props.dataIndex;
                chuGaGeunMuList[index].gyeolJaeJaRealname = getRealname();
                chuGaGeunMuList[index].gyeolJaeJaUsername = getUsername();
                const id = chuGaGeunMuList[index].idx;
                const res = await axios.post(`/gyeolJae/${id}/approval`, chuGaGeunMuList[index]);
                const msg = res.data;
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
                chuGaGeunMuList[index].gyeolJaeJaRealname = getRealname();
                chuGaGeunMuList[index].gyeolJaeJaUsername = getUsername();
                const id = chuGaGeunMuList[index].idx;
                const res = await axios.patch(`/gyeolJae/${id}/rejection`, chuGaGeunMuList[index]);
                const msg = res.data;
                console.log("data : ", res.data);
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
        if (el.overTimeEnd) 
            el.overTimeEnd = el.overTimeEnd.substring(16, 11);
        if (el.overTimeStart)
            el.overTimeStart = el.overTimeStart.substring(16, 11);
        if (el.updateOverTimeStart)
            el.updateOverTimeStart = el.updateOverTimeStart.substring(16, 11);
        if (el.updateOverTimeEnd)
            el.updateOverTimeEnd = el.updateOverTimeEnd.substring(16, 11);
        if (el.gyeolJaeDay)
            el.gyeolJaeDay = el.gyeolJaeDay.substring(10, -1);
        return el;
    };

    const filterChuGaGeunMu = (el : any[]) => {
        if (!el) {
            return el;
        }
        // console.log(':::::::::::', el);
        return el.map(data => {
            if (data.type.trim() == "추가근무" || data.type.trim() == "추가근무-수정" && data.firstApproval != 'REJECTED') {
                return timeFilter(data);
            }
        }).filter(el => el);
    };

    useEffect(() => {
        setChuGaGeunMuList(filterChuGaGeunMu(gyeolJaeList));
    }, [gyeolJaeList]);

    return (
        <>
            <Row>
                <div>
                    <Grid style={{ minWidth: "150px", }}
                        pageable={true}
                        sortable={true}
                        filterable={false}
                        data={chuGaGeunMuList}
                        // data={process(YeonchaData, dataState)}
                        {...dataState}
                        onDataStateChange={(e: GridDataStateChangeEvent) => {
                            setDataState(e.dataState);
                        }}
                    >   {/* width="250px"  */}
                        <Column field="nowDate" title="요청일" /> 
                        <Column field="requesterRealname" title="요청자" />
                        <Column field="overTimeStart" title="연장근무시작" />
                        <Column field="overTimeEnd" title="연장근무종료" />
                        <Column field="updateOverTimeStart" title="수정연장근무시작" />
                        <Column field="updateOverTimeEnd" title="수정연장근무종료" />
                        <Column field="comment" title="사유" />
                        <Column field="cheolisangtae" title="처리상태" filterable={false} cell={CommandCell} />
                    </Grid>
                </div>
            </Row>
        </>
    );
};

export default ChuGaGeunMu;