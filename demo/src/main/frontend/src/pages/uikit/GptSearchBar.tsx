import { Row, Col, Card, Button, Table, Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { FormInput } from 'components';

const GptSearchBar = () => {

  const InputBox = styled.div`
      display: flex;
      flex-direction: row;
      padding: 16px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 16px ;
      z-index: 3;
    
      &:focus-within {
        box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
      }
    `

  const Input = styled.input`
        flex: 1 0 0;
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 16px;
      `

  const DeleteButton = styled.div`
        cursor: pointer;
      `
  // style={{position:"fixed", top:"140px",left:"13%",
  //             backgroundColor:"white", padding:"10px", zIndex:"1", width:"50%"  
  //           }}
  return (
    <>
      {/* &times; =>엔티티로 X 표시를 뜻함 */}
      <Row className="mt-3" style={{ paddingRight: "30px", paddingLeft: "30px" }}>
        <InputBox >
          <Input
            type='text'
          />
          <DeleteButton>&times;</DeleteButton>
        </InputBox>
      </Row>
      {/* nav bar 하단으로 하고싶으면 top,left지우고 navbar fixed-bottom으로 변경*/}
      {/* <Row>
        <Navbar variant="light" style={{top:"75px", left:"240px",backgroundColor:"white"}} className='navbar fixed-top'>
          <Container>
            <InputBox >
              <FormInput type='text' name='' style={{flex:"1 0 0", margin:"0", padding:"0",backgroundColor:"transparent",
            border:"none", outline:"none", fontSize:"18px"}}/>
              <DeleteButton>&times;</DeleteButton>
            </InputBox>
          </Container>
        </Navbar>
      </Row> */}
    </>
  );
};

export default GptSearchBar;