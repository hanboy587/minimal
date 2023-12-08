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

const Gyeoljaechwiso = ({gyeolJaeUpdate, setGyeolJaeUpdate, gyeolJaeList} : Iprops) => {
    const [dataState, setDataState] = useState<State>(initialDataState);
    const [gyeoljaechwisoList, setGyeoljaechwisoList] = useState<any[]>([]);

    //  처리상태 button
    const CommandCell = (props: GridCellProps) => {
        const onclickHandler = async() => {
            if (window.confirm("승인 시 철회가 불가능합니다.")) {
                const index = props.dataIndex;
                cancelList[index].gyeolJaeJaRealname = getRealname();
                cancelList[index].gyeolJaeJaUsername = getUsername();
                const id = cancelList[index].idx;
                const res = await axios.post(`/gyeolJae/${id}/approval`, cancelList[index]);
                const msg = res.data;
                console.log(res);
                if(res.status == 200){
                    alert('승인완료');
                }else{
                    alert('정상적으로 승인 처리가 되지 않았습니다. 개발팀에 문의하시길 바랍니다.');
                }
                setGyeolJaeUpdate(gyeolJaeUpdate + 1);
            } else {
                alert("결재취소");
            }
        };
        const onclickHandler2 = async() => {
            // rejectGyeolJae
            if (window.confirm("반려시철회가불가능합니다")) {
                const index = props.dataIndex;
                cancelList[index].gyeolJaeJaRealname = getRealname();
                cancelList[index].gyeolJaeJaUsername = getUsername();
                const id = cancelList[index].idx;
                const res = await axios.patch(`/gyeolJae/${id}/rejection`, cancelList[index]);
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
        if (el.createdAt)
            el.createdAt = el.createdAt.substring(10, -1);
        return el;
    };

    const [cancelList, setCancelList] : any = useState([]);

    const filterCancel = (el : any[]) => {
        if (!el)
            return null;
        return el.map(data => {
            if (data.type.trim() == "취소" && data.firstApproval != 'REJECTED') {
                return timeFilter(data);
            }
        }).filter(el => el);
    };

            

    useEffect(() => {
        setCancelList(filterCancel(gyeolJaeList));
        console.log('취소리스트 :::', cancelList)
    }, [gyeolJaeList]);
    useEffect(() => {

    },[cancelList]);
    return (
        <>
            <Row>
                <div>
                    <Grid style={{ minWidth: "150px", }}
                        pageable={true}
                        sortable={true}
                        filterable={false}
                        data={cancelList}
                        // data={process(YeonchaData, dataState)}
                        {...dataState}
                        onDataStateChange={(e: GridDataStateChangeEvent) => {
                            setDataState(e.dataState);
                        }}
                    >   {/* width="250px"  */}
                        <Column field="createdAt" title="취소요청일" /> 
                        <Column field="nowDate" title="해당일" /> 
                        <Column field="requesterRealname" title="요청자" />
                        <Column field="cancelType" title="결재타입" />
                        <Column field="comment" title="사유" />
                        <Column field="cheolisangtae" title="처리상태" filterable={false} cell={CommandCell} />
                    </Grid>
                </div>
            </Row>
        </>
    );
};

export default Gyeoljaechwiso;