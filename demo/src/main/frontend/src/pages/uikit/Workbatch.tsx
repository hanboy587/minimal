import { Row, Col, Card, Container, Button, Modal, ButtonGroup, } from 'react-bootstrap';
import { ChipList } from "@progress/kendo-react-buttons";

// 근무일정생성 요일Multiple
interface Day {
    text: string;
    value: string;
    disabled: boolean;
}

const oneweekW: Day[] = [
    {
        text: "월",
        value: "Mon",
        disabled: true,
    },
    {
        text: "화",
        value: "Tue",
        disabled: true,
    },
    {
        text: "수",
        value: "Wed",
        disabled: true,
    },
    {
        text: "목",
        value: "Thu",
        disabled: true,
    },
    {
        text: "금",
        value: "Fri",
        disabled: true,
    },
    {
        text: "토",
        value: "Sat",
        disabled: true,
    },
    {
        text: "일",
        value: "Sun",
        disabled: true,
    },
];

const oneweekH: Day[] = [
    {
        text: "월",
        value: "Mon",
        disabled: true,
    },
    {
        text: "화",
        value: "Tue",
        disabled: true,
    },
    {
        text: "수",
        value: "Wed",
        disabled: true,
    },
    {
        text: "목",
        value: "Thu",
        disabled: true,
    },
    {
        text: "금",
        value: "Fri",
        disabled: true,
    },
    {
        text: "토",
        value: "Sat",
        disabled: true,
    },
    {
        text: "일",
        value: "Sun",
        disabled: true,
    },
];




const Workbatch = () => {
    return (
        <>
            <Row >
                <Col xl={6}>
                    <p style={{ fontSize: "20px" }}>근로일
                        <span className="px-2">
                            <ChipList defaultData={oneweekW} selection="multiple" />
                        </span>
                    </p>
                </Col>
            </Row>
            <Row >
                <Col xl={6}>
                    <p style={{ fontSize: "20px" }}>주휴일
                        <span className="px-2">
                            <ChipList defaultData={oneweekH} selection="multiple" />
                        </span>
                    </p>
                </Col>
            </Row>
            <Row>
                <p style={{ fontSize: "20px" }}>근무시간</p>
                <Col xl={6} style={{ fontSize: "20px" }} className="mb-2">
                    <div className=" border border-light rounded p-1" style={{ width: "260px", backgroundColor: "#F9F9F9" }}>
                        <span className="px-2">
                            <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "auto", color:"#929292" }}></input>
                            &nbsp; ~ &nbsp;
                            <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "auto", color:"#929292" }}></input>
                        </span>
                    </div>
                </Col>
            </Row>
            <Row>
                <p style={{ fontSize: "20px" }}>휴식시간
                    <i className="px-2"><Button size="sm" variant="light">+</Button></i>
                </p>
                <Col xl={6} style={{ fontSize: "20px" }} className="mb-2">
                    <div className=" border border-light rounded p-1" style={{ width: "260px", backgroundColor: "#F9F9F9" }}>
                        <span className="px-2">
                            <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "auto", color:"#929292" }}></input>
                            &nbsp; ~ &nbsp;
                            <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "auto", color:"#929292" }}></input>
                        </span>
                    </div>
                </Col>
                <Col xl={6} style={{ fontSize: "20px" }} className="mb-2">
                    <div className=" border border-light rounded p-1" style={{ width: "260px", backgroundColor: "#F9F9F9" }}>
                        <span className="px-2">
                            <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "auto", color:"#929292" }}></input>
                            &nbsp; ~ &nbsp;
                            <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "auto", color:"#929292" }}></input>
                        </span>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <p style={{ fontSize: "20px" }}>주 소정근로시간
                        <span className="px-2">
                            40시간
                        </span>
                    </p>
                </Col>
                <Col xl={6}>
                    <p style={{ fontSize: "20px" }}>주 연장근로시간
                        <span className="px-2">
                            5시간
                        </span>
                    </p>
                </Col>
            </Row>
            <Row>
                <table className="table table-bordered table-centered text-black text-center" style={{ width: "100%" }}>
                    <thead className="table-light">
                        <tr>
                            <th>명칭</th>
                            <th colSpan={2}>시간</th>
                            <th>자동승인</th>
                            <th>중복불가</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1
                            </td>
                            <td colSpan={2}>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none",fontSize: "20px", color:"#929292"}}></input>
                                 <span> ~ </span> 
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none",fontSize: "20px", color:"#929292" }}></input> &nbsp;&nbsp;
                            </td>
                            <td>
                                T
                            </td>
                            <td>
                                -
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Row>
        </>
    );
};

export default Workbatch;