import { Row, Col, Card, Table } from 'react-bootstrap';
import React, { useContext, useEffect, useState, useRef, } from 'react';
import axios from 'axios';


const SaeobjangseoljeongEtc = () => {
    return (
        <>
            <div className="table-responsive mt-2 text-left">
                <Table className=" table-centered table-bordered ">
                    <thead className="table-madegray" style={{ color: "#6c757d" }}>
                        <tr>
                            <th colSpan={4} style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>근로소득세</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>세액조정</td>
                            <td colSpan={3} className="text-start" style={{ padding: "0px 5px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "100%" }} name='' >
                                </input>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={4} className="table-madegray" style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC", color: "#6c757d"  }}>근무시간</th>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>필수근무시간</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >
                                </input>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>일소정근무시간</td>
                            <td className="text-start" style={{ padding: "0px 2px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >
                                </input>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>일평균근무시간</td>
                            <td colSpan={3} className="text-start" style={{ padding: "0px 5px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "100%" }} name='' >
                                </input>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={4} className="table-madegray" style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC", color: "#6c757d"  }}>4대보험</th>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>사무수임</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <select className="form-select" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}>
                                    <option>고용,정상</option>
                                    <option>-</option>
                                </select>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>부과내역</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input type="checkbox" style={{ width: "25px", height: "15px" }}></input>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={4} className="table-madegray" style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC", color: "#6c757d" }}>권한부여설정</th>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center" }}>최대권한레벨</td>
                            <td colSpan={3} className="text-start" style={{ padding: "0px 5px 0px 5px", fontSize: "18px" }}>
                                <select className="form-select" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "100%" }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th colSpan={4} className="table-madegray" style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC", color: "#6c757d" }}>평가관리설정</th>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center" }}>분기설정</td>
                            <td colSpan={3} className="text-start" style={{ padding: "0px 5px 0px 5px", fontSize: "18px" }}>
                                <select className="form-select" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "100%" }}>
                                    <option value="1">월별</option>
                                    <option value="2">분기별</option>
                                    <option value="3">반기별</option>
                                    <option value="4">년별</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default SaeobjangseoljeongEtc;