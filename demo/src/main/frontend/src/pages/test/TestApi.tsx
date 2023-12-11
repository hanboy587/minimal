import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Row, Col, Table, Button, Collapse, useAccordionButton, AccordionContext } from 'react-bootstrap';
import { Grid, GridColumn as Column, GridDataStateChangeEvent, GridCellProps,GridPageChangeEvent } from "@progress/kendo-react-grid";
// import '@progress/kendo-theme-bootstrap/dist/all.css';

interface userData {
  userNo : number,
  userName : string;
}

function TestApi() {
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

  const userList = async() => {
    const res = await axios.get<userData>('/api/getUserList');
    const userData: userData = res.data;
    console.log('userData : ', userData);
    setUsers(userData);

  }

  useEffect(() => {
    userList();
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

export default TestApi;