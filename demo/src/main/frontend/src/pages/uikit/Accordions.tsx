import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Card, Tab, Nav, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useToggle } from 'hooks';
import { PageTitle, FormInput, } from 'components';
import { useForm } from 'react-hook-form';
import Geuntaesujeong from './Geuntaesujeong';
import JoToe from './JoToe';
import OeChul from './OeChul';
import Hyuga from './Hyuga';
import ChuGaGeunMu from './ChuGaGeunMu';
import GyeolJaeList from './GyeolJaeList';
import ChulJang from './ChulJang';
import Gyeoljaechwiso from './Gyeoljaechwiso';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getUsername } from 'utils/getUsername';

type TabContentItem = {
    id: string;
    title: string;
    text: any;
};

// 전자결재메뉴 
// 수정사항 생길시 AccordionsTop 파일도 수정 같이 해야함 
const Chultoegeunseungin = () => {

    const [gyeolJaeUpdate, setGyeolJaeUpdate] = useState(0);
    const [gyeolJaeList, setGyeolJaeList] = useState(0);
    const [beforeGyeolJaeList, setBeforeGyeolJaeList] = useState<any>([]);
    const [accessToken, setAccessToken] = useState(sessionStorage.getItem('accessToken'));

    const getGyeolJaeList = async() => {
        const res = await axios.post("gyeolJaeList");
        setGyeolJaeList(res.data);
        // console.log('axios 콘솔 : ' , res.data);
    };
    
    const waitGyeolJaeList = async() => {
        const res = await axios.get("/gyeoljae/pending");

        const token = sessionStorage.getItem('accessToken');
        setAccessToken(token);
        let filterData = [];

         if(accessToken){
            const jwtAccess: any = jwtDecode(accessToken);
            if(Number(jwtAccess.ApprovalAuthorityLevel) === 1){
                const filterData1 = res.data.data.filter((item: any) => (item.firstApproval == null || (item.firstApproval != null && item.secondApproval == null)) && item.gyeolJaeDay == null)
                const sortData = [...filterData1].sort((a:any, b:any) => +new Date(b.nowDate) - +new Date(a.nowDate));
                filterData = sortData;
            }else if(Number(jwtAccess.ApprovalAuthorityLevel) === 2){
                const filterData1 = res.data.data.filter((item: any) => (item.approvalStatus == "PENDING" || ((item.firstApproval != null && item.secondApproval == null) && item.approvalStatus != 'REJECTED')) && item.gyeolJaeDay == null)
                const sortData = [...filterData1].sort((a:any, b:any) => +new Date(b.nowDate) - +new Date(a.nowDate));
                filterData = sortData;
            }else{
                const filterData1 = res.data.data.filter((item: any) => item.requesterUsername == getUsername())
                const sortData = [...filterData1].sort((a:any, b:any) => +new Date(b.nowDate) - +new Date(a.nowDate));
                filterData = sortData;
            }
        }

        setBeforeGyeolJaeList(filterData);
    };

    useEffect(() => {
        waitGyeolJaeList();
        getGyeolJaeList();
    }, [gyeolJaeUpdate]);
    
    useEffect(() => {
        waitGyeolJaeList();
        getGyeolJaeList();
    }, []);


    const tabContents: TabContentItem[] = [
        {
            id: '1',
            title: '근태',
            text: <Geuntaesujeong gyeolJaeUpdate={gyeolJaeUpdate} setGyeolJaeUpdate={setGyeolJaeUpdate}/>
        },
        {
            id: '2',
            title: '휴가',
            text: <Hyuga gyeolJaeUpdate={gyeolJaeUpdate} setGyeolJaeUpdate={setGyeolJaeUpdate} gyeolJaeList={beforeGyeolJaeList} />
        },
        {
            id: '3',
            title: '외출',
            text: <OeChul gyeolJaeUpdate={gyeolJaeUpdate} setGyeolJaeUpdate={setGyeolJaeUpdate}  gyeolJaeList={beforeGyeolJaeList} />
        },
        {
            id: '4',
            title: '출장',
            text: <ChulJang gyeolJaeUpdate={gyeolJaeUpdate} setGyeolJaeUpdate={setGyeolJaeUpdate} gyeolJaeList={beforeGyeolJaeList} />
        },
        {
            id: '5',
            title: '조퇴',
            text: <JoToe gyeolJaeUpdate={gyeolJaeUpdate} setGyeolJaeUpdate={setGyeolJaeUpdate} gyeolJaeList={beforeGyeolJaeList} />
        },
        {
            id: '6',
            title: '연장근무',
            text: <ChuGaGeunMu gyeolJaeUpdate={gyeolJaeUpdate} setGyeolJaeUpdate={setGyeolJaeUpdate} gyeolJaeList={beforeGyeolJaeList} />
        },
        {
            id: '7',
            title: '결재취소',
            text: <Gyeoljaechwiso gyeolJaeUpdate={gyeolJaeUpdate} setGyeolJaeUpdate={setGyeolJaeUpdate} gyeolJaeList={beforeGyeolJaeList} />
        },
        {
            id: '8',
            title: '결재 리스트',
            text: <GyeolJaeList gyeolJaeList={gyeolJaeList} gyeolJaeUpdate={gyeolJaeUpdate} />
        },
    ];

    return (
        <>
            <PageTitle
                breadCrumbItems={[

                ]}
                title={'출퇴근 승인'}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="근태">
                                <Nav variant="tabs">
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Nav.Item key={index.toString()}>
                                                <Nav.Link as={Link} to="#" eventKey={tab.title}>
                                                    <i></i>
                                                    <span>{tab.title}</span>
                                                </Nav.Link>
                                            </Nav.Item>
                                        );
                                    })}
                                </Nav>
                                <Tab.Content>
                                    {tabContents.map((tab, index) => {
                                        return (
                                            <Tab.Pane eventKey={tab.title} id={tab.id} key={index.toString()} >
                                                <Row>
                                                    <Col sm="12">
                                                        <p className="mt-3">{tab.text}
                                                        </p>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        );
                                    })}
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Chultoegeunseungin;
