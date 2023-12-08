import { Row, Col, Card, Table } from 'react-bootstrap';
import React, { useContext, useEffect, useState, useRef, } from 'react';
import axios from 'axios';


const SaeobjangseoljeongMyeonseseo = () => {
    return (
        <>
            <div className="table-responsive mt-2 text-left">
                <Table className=" table-centered table-bordered" >
                    <thead className="table-madegray" style={{ color: "#6c757d" }}>
                        <tr>
                            <th colSpan={4} style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>명세서</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>유무</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input type="radio" style={{ width: "25px", height: "15px" }}></input>유 &nbsp;
                                <input type="radio" style={{ width: "25px", height: "15px" }}></input>무
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>암호</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' ></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>지급월</td>
                            <td className="text-start" style={{ padding: "0px 3px 0px 5px", fontSize: "18px" }}>
                                <select className="form-select" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}>
                                    <option>익월</option>
                                    <option>당월</option>
                                </select>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>지급일</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <select className="form-select" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}>
                                    <option>01</option>
                                    <option>02</option>
                                    <option>03</option>
                                    <option>04</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>엑셀</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input type="checkbox" style={{ width: "25px", height: "15px" }}></input>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>휴일</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' ></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>퇴직정산</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input type="checkbox" style={{ width: "25px", height: "15px" }}></input>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>연말정산</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input type="checkbox" style={{ width: "25px", height: "15px" }}></input>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </>
    );
};

export default SaeobjangseoljeongMyeonseseo;