import { Row, Col, Table, Card, Button, } from 'react-bootstrap';
import React, { useEffect, useState, useRef, } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Tree from 'react-animated-tree'



// 조직도 사이드바
const Jojigdosidebar = () => {

    // 회사명
    const [division, setDivision] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setDivision(JSON.parse(data).division);
    }, []);

    return (
        <>
            <div>
                <p style={{fontWeight: "bolder",fontSize: "20px"}}>
                    조직도
                </p>
            </div>
            <hr />
            <div className="mt-2">
                <Tree content={division} open >
                    <Tree content="인사팀" >
                        <Tree content="나인사" />
                        <Tree content="네모" />
                        <Tree content="동글" />
                    </Tree>
                    <Tree content="홍보팀" >
                        <Tree content="나이스" />
                        <Tree content="나홍보" />
                    </Tree>
                </Tree>
            </div>

            <div className="mt-5">

            </div>
        </>
    );
};

export default Jojigdosidebar;