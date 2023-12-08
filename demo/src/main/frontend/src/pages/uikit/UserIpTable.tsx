import { Row, Col, Card, Form, Button, Table, } from 'react-bootstrap';
import { SetStateAction, useEffect, useRef, useState } from 'react';


type jigwonjeongboInfo = {
    idx: number;
    username: string;
    Ip: string;
};


type jigwonjeongboList = {
    idx: number;
    username: string;
    Ip: string;
}
const UserIpTable = () => {
    const [userIpdata, setUserIpdata] = useState<jigwonjeongboInfo[]>();
    const [newIp, setNewIp] = useState('');

    const handleIpChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setNewIp(event.target.value);
    };

    return (
        <>
            <Row className="mt-3">
                <Card>
                    <Card.Body>
                        <div className="table-responsive mt-2 text-center">
                            <Table className="table table-bordered table-centered" hover>
                                <thead className="table-madegray" style={{ color: "#a3a7ad" }}>
                                    <tr>
                                        <th>이름</th>
                                        <th>Ip</th>
                                        {/* <th>Ip2</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {
                                        userIpdata?.map((data, index) =>
                                            <>
                                                <tr key={index} style={{textAlign:"center"}}>
                                                    <td>{data.username}</td>
                                                    <td>{data.Ip}</td>
                                                </tr>
                                            </>
                                        )
                                    } */}
                                    {userIpdata?.map((data, index) => (
                                        <tr key={index} style={{ textAlign: "center" }}>
                                            <td>{data.username}</td>
                                            <td>{data.Ip}</td>
                                            {/* <td>{data.Ip2}</td> */}
                                        </tr>
                                    ))}
                                    <tr>
                                        <td>
                                            {/* username */}
                                        </td>
                                        <td>
                                            <Row>
                                            <Col xs={11}>
                                           
                                            <input
                                                type="text"
                                                value={newIp}
                                                onChange={handleIpChange}
                                                className="form-control"
                                                style={{
                                                    border: "1px solid #EEEEEE",
                                                    outline: "none", height: "100%", 
                                                    fontSize: "18px", width: "99%",
                                                }}
                                            />
                                             </Col>
                                             <Col xs={1}>
                                             <Button >추가</Button>
                                             </Col>
                                             </Row>
                                            
                                            
                                        </td>
                                        {/* <td>
                                            <Button >추가</Button>
                                        </td> */}
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
};

export default UserIpTable;