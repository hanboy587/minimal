import { Row, Col, Card, Table } from 'react-bootstrap';
import React, { useContext, useEffect, useState, useRef, } from 'react';
import axios from 'axios';


const SaeobjangseoljeongHyuga = () => {
    return (
        <>
            <div>
                <Table className=" table-centered table-bordered" >
                    <thead className="table-madegray" style={{ color: "#6c757d" }}>
                        <tr>
                            <th colSpan={4} style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>휴가정책</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>외근</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >

                                </input>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>출장</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >

                                </input>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>기본근무</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >

                            </input>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>원격근무</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >

                                </input>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>연장근무</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >

                                </input>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>야간근무</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >

                                </input>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>휴일근무</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >

                                </input>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>연차사용단위</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <select className="form-select" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}>
                                    <option>전일</option>
                                    <option>반차</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>포괄임금</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >

                            </input>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>포상</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >

                                </input>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>군소집훈련</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='' >

                                </input>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" ,textAlign:"center" }}>보건</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <select className="form-select" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}>
                                    <option>일 무급, 반차유급</option>
                                    <option>일유급</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>배우자출산</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <select className="form-select" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}>
                                    <option>무급, 일부유급, 유급</option>
                                    <option>유급, 무급, 일부유급</option>
                                </select>
                            </td>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>산전후(본인)</td>
                            <td className="text-start" style={{ padding: "0px 0px 0px 5px", fontSize: "18px" }}>
                                <select className="form-select" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}>
                                    <option>반차무급</option>
                                    <option>일 무급</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad",textAlign:"center"  }}>산전후(다태아)</td>
                            <td colSpan={3} className="text-start" style={{ padding: "0px 5px 0px 5px", fontSize: "18px" }}>
                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "100%" }} name='' >

                                </input>
                            </td>

                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default SaeobjangseoljeongHyuga;