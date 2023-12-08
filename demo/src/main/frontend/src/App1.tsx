import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Row, Col, Table, Button, Collapse, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridCellProps,GridPageChangeEvent } from "@progress/kendo-react-grid";
// import '@progress/kendo-theme-bootstrap/dist/all.css';

interface userData {
  userNo : number,
  userName : string;
}

function App() {
  const [hello, setHello] = useState('');
  const [usernames, setUsernames] : any = useState([]);
  const [users, setUsers] : any = useState([]);
  // 페이징
  interface PageState {
    skip: number;
    take: number;
  }
  
  
  const initialDataState2: PageState = { skip: 0, take: 10 };
  const [page, setPage] = React.useState<PageState>(initialDataState2);
  const pageChange = (event: GridPageChangeEvent) => {
      setPage(event.page);
  };

  useEffect(() => {
    axios.get('/api/hello')
      .then(res => setHello(res.data))
      .catch(err => console.log(err))
  }, [])

  const userNameList = async() => {
    const res = await axios.get('/api/getusernames');
    console.log('userNameList 반환 : ', res.data);
    setUsernames(res.data);
  }

  const userList = async() => {
    const res = await axios.get<userData>('/api/getUserList');
    const userData: userData = res.data;
    console.log('userData : ', userData);
    setUsers(userData);

  }

  useEffect(() => {
    userList();
    userNameList();
    console.log('userList useEffect : ', users);
  }, [])

  return (
    <>
      <Row>
        <div>
            <Grid
                style={{ minWidth:"150px",}}
                pageable={true}
                skip={page.skip}
                take={page.take}
                total={users?.length}
                onPageChange={pageChange}
                sortable={true}
                filterable={false}
                data={users}
                
            >   {/* width="250px"  */}
                <Column field="userNo" title="번호" />
                <Column field="userName" title="이름" width="70px"/>
            </Grid>

        </div>
      </Row>
    </>
  )
}

export default App;