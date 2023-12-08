import { Row, Col, Card, Form, Button, Table, } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';


type jigwonjeongboInfo = {
    idx: number;
    username: string;
    buseo: string;
    ibsail: Date;
};


type jigwonjeongboList = {
    idx: number;
    username: string;
    buseo: string;
    ibsail: Date;
}

const JigwonjeongboList = () => {
    const [jigwondata, setJigwondata] = useState<jigwonjeongboInfo[]>();
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
                                        <th>부서</th>
                                        <th>입사일</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        jigwondata?.map((data, index) =>
                                            <>
                                                <tr key={index} style={{textAlign:"center"}}>
                                                    <td>{data.username}</td>
                                                    <td>{data.buseo}</td>
                                                    <td>{data.ibsail}</td>
                                                </tr>
                                            </>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Card.Body>
                </Card>
            </Row>
        </>
    );
};

export default JigwonjeongboList;