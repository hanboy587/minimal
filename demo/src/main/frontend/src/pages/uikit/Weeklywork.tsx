import { Row, Col, Card, Container, Button, Modal, Form, Tab, Nav } from 'react-bootstrap';


const Weeklywork = () => {
    return (
        <>
            <Row>
                <table className="table table-bordered table-centered text-black text-center" style={{ width: "100%" }}>
                    <thead className="table-light">
                        <tr>
                            <th></th>
                            <th>월</th>
                            <th>화</th>
                            <th>수</th>
                            <th>목</th>
                            <th>금</th>
                            <th>토</th>
                            <th>일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >
                                근로시간
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%" , color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292"}}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                휴게시간
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                            <td>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                                ~
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%", color:"#929292" }}></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "20px", color:"#929292" }}></input>
                                <span> ~ </span>
                                <input type="time" style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "20px", color:"#929292" }}></input> &nbsp;&nbsp;
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

export default Weeklywork;