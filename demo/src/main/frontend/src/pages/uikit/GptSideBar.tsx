import { Form } from "react-bootstrap";
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const GptSideBar = () => {
    const data = [
        { id: 1, content: '최저시급보다 적게 지급시 처벌은?' },
        { id: 2, content: '직원해고조건?' },
        { id: 3, content: '데이터' },
        // ...
    ];
    return (
        <>
            <p className="mt-2" style={{ fontSize: "20px", paddingBottom: "13px" }}>
                최근검색 list
            </p>
            <div style={{
                paddingTop: "15px",
                backgroundColor: "#EEEEEE", height: "830px",
                fontSize: "18px", paddingLeft: "20px", overflow: 'auto'
            }}>
                {data.map((item) => (
                    <Link to="/ui/base-ui/GptSearchlist">
                        <div key={item.id}>{item.content}</div>
                    </Link>
                ))}
                {/* <Form style={{
                    backgroundColor: "#EEEEEE",minHeight:"780px",
                    fontSize: "18px", paddingLeft: "20px",
                    
                }}>

                </Form> */}
            </div>
        </>
    );
};

export default GptSideBar;