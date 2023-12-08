import classNames from 'classnames';
import { externalEvents } from './data';
import { GrBook } from "react-icons/gr";
import { Row } from 'react-bootstrap';

const SidePanel = () => {
    return (
        <>
        {/* darg and drop code */}
        {/* className="d-none" 으로 숨김처리 */}
            <div id="external-events" className=" d-none m-t-20">
                <br />
                <p className="text-muted">Drag and drop your event or click in the calendar</p>
                external events
                {(externalEvents || []).map((event, index) => {
                    return (
                        <div
                            key={index.toString()}
                            className={classNames('external-event', event.className + '-lighten', event.textClass)}
                            title={event.title}
                            data-class={event.className}
                        >
                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle"></i>
                            {event.title}
                        </div>
                    );
                })}
            </div>

            <Row className="d-xl-block">
                <p style={{ fontSize: "22px", color: "#6c757d" }} className=" mt-1 mb-2">
                    <GrBook />&nbsp;&nbsp; Guide
                </p>
                <br />
                <hr style={{width:"90%", marginLeft:"10px"}} />
                
                {/* <details className="mt-2" >
                    <summary className="mb-1" style={{ fontSize: "22px", listStyle: "none", cursor: "pointer",color:"#AFAFAF", }}>
                        출근신청
                        <span style={{fontSize:"20px",color:"#727cf5",paddingLeft:"20px"}}>›</span>
                    </summary>
                    <p className="mb-1" style={{ fontSize: "18px",color:"#AFAFAF" }}>
                        출근시간을 정정 또는 찍지못한경우 수정요청을 할수 있습니다
                    </p>
                    <p style={{ fontSize: "20px", color: "#66B2FF" }}>
                        출근신청이 필요한날 클릭➜ 출근신청 항목선택 ➜
                        요청시간 선택 ➜ 사유작성 ➜ 관리자에게 요청하기
                    </p>
                </details> */}
                <details className="mt-2" >
                    <summary className="mb-1" style={{ fontSize: "22px", cursor: "pointer",color:"#AFAFAF", }}>
                        출근 신청
                    </summary>
                    <p className="mb-1" style={{ fontSize: "18px", color: "#AFAFAF" }}>
                        출근시간을 정정 또는 찍지 못한 경우 수정요청을 할 수 있습니다
                    </p>
                    <p style={{ fontSize: "20px", color: "#66B2FF" }}>
                        출근 신청이 필요한 날 클릭➜ 출근 신청 항목 선택 ➜
                        요청 시간 선택 ➜ 사유 작성 ➜ 관리자에게 요청하기
                    </p>
                </details>
                <details className="mt-2">
                    <summary className="mb-1" style={{ fontSize: "22px", cursor: "pointer",color:"#AFAFAF" }}>
                        퇴근 신청
                    </summary>
                    <p className="mb-1" style={{ fontSize: "18px",color:"#AFAFAF" }}>
                        퇴근시간을 정정 또는 찍지 못한 경우 수정요청을 할 수 있습니다
                    </p>
                    <p style={{ fontSize: "20px", color: "#66B2FF" }}>
                        퇴근 신청이 필요한 날 클릭➜ 퇴근 신청 항목 선택 ➜
                        요청 시간 선택 ➜ 사유 작성 ➜ 관리자에게 요청하기
                    </p>
                </details>
                <details className="mt-2">
                    <summary className="mb-1" style={{ fontSize: "22px",color:"#AFAFAF", cursor: "pointer" }}>
                        휴가 신청
                    </summary>
                    <p className="mb-1" style={{ fontSize: "18px",color:"#AFAFAF" }}>
                        휴가 및 연차를 신청할 수 있습니다
                    </p>
                    <p style={{ fontSize: "20px", color: "#66B2FF" }}>
                        휴가 및 연차신청이 필요한 날 클릭➜ 휴가 신청 항목선택 ➜
                        유급과 무급 중 선택 ➜ 사유 작성 ➜ 관리자에게 요청하기
                    </p>
                </details>
                <details className="mt-2">
                    <summary className="mb-1" style={{ fontSize: "22px",color:"#AFAFAF", cursor: "pointer" }}>
                        외출 신청
                    </summary>
                    <p className="mb-1" style={{ fontSize: "18px",color:"#AFAFAF" }}>
                        외출을 신청할 수 있습니다
                    </p>
                    <p style={{ fontSize: "20px", color: "#66B2FF" }}>
                        외출 신청이 필요한 날 클릭➜ 외출 신청 항목 선택 ➜
                        유급과 무급 중 선택 ➜ 사유 작성 ➜ 관리자에게 요청하기
                    </p>
                </details>
                <details className="mt-2">
                    <summary className="mb-1" style={{ fontSize: "22px",color:"#AFAFAF", cursor: "pointer" }}>
                        출장 신청
                    </summary>
                    <p className="mb-1" style={{ fontSize: "18px",color:"#AFAFAF" }}>
                        출장을 신청할 수 있습니다
                    </p>
                    <p style={{ fontSize: "20px", color: "#66B2FF" }}>
                        출장 신청이 필요한 날 클릭➜ 출장 신청 항목 선택 ➜
                        요청 시간 선택 ➜ 사유 작성 ➜ 관리자에게 요청하기
                    </p>
                </details>
                <details className="mt-2">
                    <summary className="mb-1" style={{ fontSize: "22px",color:"#AFAFAF", cursor: "pointer" }}>
                        조퇴 신청
                    </summary>
                    <p className="mb-1" style={{ fontSize: "18px",color:"#AFAFAF" }}>
                        조퇴를 신청할 수 있습니다
                    </p>
                    <p style={{ fontSize: "20px", color: "#66B2FF" }}>
                        조퇴 신청이 필요한 날 클릭➜ 조퇴 신청 항목 선택 ➜
                        유급과 무급 중 선택 ➜ 사유 작성 ➜ 관리자에게 요청하기
                    </p>
                </details>
                <details className="mt-2 mb-2">
                    <summary className="mb-1" style={{ fontSize: "22px",color:"#AFAFAF", cursor: "pointer" }}>
                        연장 근무
                    </summary>
                    <p className="mb-1" style={{ fontSize: "18px",color:"#AFAFAF" }}>
                        연장 근무를 신청할 수 있습니다
                    </p>
                    <p style={{ fontSize: "20px", color: "#66B2FF" }}>
                        연장 근무 신청이 필요한 날 클릭➜ 연장 근무 항목 선택 ➜
                        연장 근무 시작 시간 선택 ➜ 연장 근무 종료 시간 선택 ➜ 
                        사유 작성 ➜ 관리자에게 요청하기
                    </p>
                </details>
            </Row >
        </>
    );
};

export default SidePanel;
