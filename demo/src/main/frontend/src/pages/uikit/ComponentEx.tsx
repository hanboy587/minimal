import { Row, Col, Card, Tab, Nav, Button } from 'react-bootstrap';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';

const ComponentEx =() => {
    // toLocaleString 함수이용하기방법 
    

    const [enteredNum, setEnterdNum] = useState<string>("");
    const changeEnteredNum = (e: ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        const removedCommaValue: number = Number(value.replaceAll(",", ""));
        setEnterdNum(removedCommaValue.toLocaleString());
    };
    return (
        <>
        <Row className="mt-3">
        
        <input type="text"  value={enteredNum} onChange={changeEnteredNum}></input>
        </Row>
        </>
    )
}

export default ComponentEx;