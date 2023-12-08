import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { FormInput } from 'components';
import axios from 'axios';
import {AUTH, ROLE_ADMIN, ROLE_USER, ROLE_WORKER, ROLE_GADMIN}from 'utils/Auth';


// 권한수정버튼 

// AUTH.ROLE_ADMIN = 3;
// AUTH.ROLE_GADMIN = 4;

// interface ButtonProps {
//     userRole: number; // userRole 변수의 타입을 명시적으로 지정합니다.
// }
// const RoleButton: React.FC<ButtonProps> = ({userRole}) => {
//     // const isAdmin = userRole >= AUTH.ROLE_ADMIN;
//     // const isAdmin = userRole == AUTH["ROLE_ADMIN"];
//     const isAdmin = userRole === ROLE_ADMIN || userRole === ROLE_GADMIN;
//     return(
//         <>
//         {isAdmin && <Button size='lg'>수정</Button>   }
//         </>
//     );
// };


const DonglyoPyeonggaSeongGwa = () => {

    // 5점
    const [score5, setScore5] = useState(0);

    function handleCheckboxChange5(event: { target: { value: string; checked: any; }; }) {
        const value5 = parseInt(event.target.value);
        const checked5 = event.target.checked;
        setScore5(score5 + (checked5 ? value5 : -value5));
    }

    // 4점
    const [score4, setScore4] = useState(0);
    function handleCheckboxChange4(event: { target: { value: string; checked: any; }; }) {
        const value4 = parseInt(event.target.value);
        const checked4 = event.target.checked;
        setScore4(score4 + (checked4 ? value4 : -value4));
    }

    // 3점
    const [score3, setScore3] = useState(0);
    function handleCheckboxChange3(event: { target: { value: string; checked: any; }; }) {
        const value3 = parseInt(event.target.value);
        const checked3 = event.target.checked;
        setScore3(score3 + (checked3 ? value3 : -value3));
    }

    // 2점
    const [score2, setScore2] = useState(0);
    function handleCheckboxChange2(event: { target: { value: string; checked: any; }; }) {
        const value2 = parseInt(event.target.value);
        const checked2 = event.target.checked;
        setScore2(score2 + (checked2 ? value2 : -value2));
    }

    // 1점
    const [score1, setScore1] = useState(0);
    function handleCheckboxChange1(event: { target: { value: string; checked: any; }; }) {
        const value1 = parseInt(event.target.value);
        const checked1 = event.target.checked;
        setScore1(score1 + (checked1 ? value1 : -value1));
    }

    // 0점
    const [score0, setScore0] = useState(0);
    function handleCheckboxChange0(event: { target: { value: string; checked: any; }; }) {
        const value0 = parseInt(event.target.value);
        const checked0 = event.target.checked;
        setScore0(score0 + (checked0 ? value0 : -value0));
    }

    // chckbox 클릭시 나머지 disable
    const [selectedCheckboxId1, setSelectedCheckboxId1] = useState<number | null>(null);
    function handleCheckboxClick1(id: number) {
        if (selectedCheckboxId1 === id) {
            setSelectedCheckboxId1(null);
        } else {
            setSelectedCheckboxId1(id);
        }
    };
    const [selectedCheckboxId2, setSelectedCheckboxId2] = useState<number | null>(null);
    function handleCheckboxClick2(id: number) {
        if (selectedCheckboxId2 === id) {
            setSelectedCheckboxId2(null);
        } else {
            setSelectedCheckboxId2(id);
        }
    };
    const [selectedCheckboxId3, setSelectedCheckboxId3] = useState<number | null>(null);
    function handleCheckboxClick3(id: number) {
        if (selectedCheckboxId3 === id) {
            setSelectedCheckboxId3(null);
        } else {
            setSelectedCheckboxId3(id);
        }
    };
    const [selectedCheckboxId4, setSelectedCheckboxId4] = useState<number | null>(null);
    function handleCheckboxClick4(id: number) {
        if (selectedCheckboxId4 === id) {
            setSelectedCheckboxId4(null);
        } else {
            setSelectedCheckboxId4(id);
        }
    };
    const [selectedCheckboxId5, setSelectedCheckboxId5] = useState<number | null>(null);
    function handleCheckboxClick5(id: number) {
        if (selectedCheckboxId5 === id) {
            setSelectedCheckboxId5(null);
        } else {
            setSelectedCheckboxId5(id);
        }
    };
    const [selectedCheckboxId6, setSelectedCheckboxId6] = useState<number | null>(null);
    function handleCheckboxClick6(id: number) {
        if (selectedCheckboxId6 === id) {
            setSelectedCheckboxId6(null);
        } else {
            setSelectedCheckboxId6(id);
        }
    };
    const [selectedCheckboxId7, setSelectedCheckboxId7] = useState<number | null>(null);
    function handleCheckboxClick7(id: number) {
        if (selectedCheckboxId7 === id) {
            setSelectedCheckboxId7(null);
        } else {
            setSelectedCheckboxId7(id);
        }
    };
    const [selectedCheckboxId8, setSelectedCheckboxId8] = useState<number | null>(null);
    function handleCheckboxClick8(id: number) {
        if (selectedCheckboxId8 === id) {
            setSelectedCheckboxId8(null);
        } else {
            setSelectedCheckboxId8(id);
        }
    };
    const [selectedCheckboxId9, setSelectedCheckboxId9] = useState<number | null>(null);
    function handleCheckboxClick9(id: number) {
        if (selectedCheckboxId9 === id) {
            setSelectedCheckboxId9(null);
        } else {
            setSelectedCheckboxId9(id);
        }
    };
    const [selectedCheckboxId10, setSelectedCheckboxId10] = useState<number | null>(null);
    function handleCheckboxClick10(id: number) {
        if (selectedCheckboxId10 === id) {
            setSelectedCheckboxId10(null);
        } else {
            setSelectedCheckboxId10(id);
        }
    };
    const [selectedCheckboxId11, setSelectedCheckboxId11] = useState<number | null>(null);
    function handleCheckboxClick11(id: number) {
        if (selectedCheckboxId11 === id) {
            setSelectedCheckboxId11(null);
        } else {
            setSelectedCheckboxId11(id);
        }
    };
    const [selectedCheckboxId12, setSelectedCheckboxId12] = useState<number | null>(null);
    function handleCheckboxClick12(id: number) {
        if (selectedCheckboxId12 === id) {
            setSelectedCheckboxId12(null);
        } else {
            setSelectedCheckboxId12(id);
        }
    };
    const [selectedCheckboxId13, setSelectedCheckboxId13] = useState<number | null>(null);
    function handleCheckboxClick13(id: number) {
        if (selectedCheckboxId13 === id) {
            setSelectedCheckboxId13(null);
        } else {
            setSelectedCheckboxId13(id);
        }
    };
    const [selectedCheckboxId14, setSelectedCheckboxId14] = useState<number | null>(null);
    function handleCheckboxClick14(id: number) {
        if (selectedCheckboxId14 === id) {
            setSelectedCheckboxId14(null);
        } else {
            setSelectedCheckboxId14(id);
        }
    };
    const [selectedCheckboxId15, setSelectedCheckboxId15] = useState<number | null>(null);
    function handleCheckboxClick15(id: number) {
        if (selectedCheckboxId15 === id) {
            setSelectedCheckboxId15(null);
        } else {
            setSelectedCheckboxId15(id);
        }
    };

    // map 
    const [questions, setQuestions] = useState([
        {
            question: '회사의 사명, 비전 및 가치와 일치하는 방식으로 행동합니다.',
        },
        {
            question: '동료들에게 청렴한 사람으로 여겨진다.',
        },
        {
            question: '동료들에게 청렴한 사람으로 여겨진다.',
        },
    ]);

    const [scores, setScores] = useState([
        { id: 5, score: 0 },
        { id: 4, score: 0 },
        { id: 3, score: 0 },
        { id: 2, score: 0 },
        { id: 1, score: 0 },
        { id: 0, score: 0 },
    ]);

    const [selectedCheckboxIds, setSelectedCheckboxIds] = useState([null, null, null]);

    const handleCheckboxChange = (event: { target: { value: any; checked: any; }; }) => {
        const { value, checked } = event.target;
        const index = scores.findIndex((score) => score.id === parseInt(value));
        setScores((prevScores) => {
            const newScores = [...prevScores];
            newScores[index].score += checked ? newScores[index].id : -newScores[index].id;
            return newScores;
        });
    };

    const handleCheckboxClick = (id: number | any, index: number) => {
        setSelectedCheckboxIds((prevIds) => {
            const newIds = [...prevIds];
            if (newIds[index] === id) {
                newIds[index] = null;
            } else {
                newIds[index] = id;
            }
            return newIds;
        });
    };

    // const userRole = ROLE_ADMIN;
    return (
        <>
            <Row>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p className='text-start'
                        style={{ flexBasis: "0", flexGrow: "1", fontSize: "25px" }}
                    >
                        동료 검토 설문지 &nbsp;&nbsp;
                        <span>하반기</span>
                    </p>
                    
                    <strong style={{ fontSize: "20px" }}>성명:</strong> &nbsp;
                    <span>
                        <FormInput
                            className="form-control"
                            name=""
                            style={{ fontSize: "20px" }}
                        />
                    </span>
                </div>
            </Row>
            <Row className="mt-2">
                <Card className="tilebox-one" style={{ boxShadow: "1px 2px 1px 5px #fafbfe" }}>
                    <Card.Body>
                        <p style={{ fontSize: "18px" }}>
                            상대평가 : 상대 평가는 점수를 성적의 높은 순으로 배열하기 때문에
                            집단 내에서의 개인의 변별력 확보는 쉽게 비교할 수 있으며,
                            평가자의 주관적 입장이 결여되지 못하기 때문에 형평성으로는
                            공정하다는 장점이 있으나,
                            과도한 경쟁심으로 인해 해를 주는 등의 악영향을 준다는 단점이 있다.
                        </p>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Table className="table table-bordered table-centered" style={{border: '2px solid #eff0f2'}}>
                    <thead className="table-madegray" style={{ color: "#a3a7ad" }}>
                        <tr>
                            <th colSpan={6}>질문에 철저하고 진실되게 답변해 주십시오.
                                귀하의 응답은 다른 직원이 제공한 응답과 함께 수집됩니다.
                                검토 중인 개인에게는 설문지 작성을 요청한 동료가 누구인지 알려주지 않습니다.
                                귀하의 참여에 감사드립니다.</th>
                            <th colSpan={6}>1개를 선택후 "1"을 넣어주세요</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td colSpan={6}>
                                5. 성능은 지속적으로 우수하며 요구 사항을 훨씬 능가합니다.
                            </td>
                            <td rowSpan={6} style={{ paddingTop: "280px", }}>
                                5
                            </td>
                            <td rowSpan={6} style={{ paddingTop: "280px" }}>
                                4
                            </td>
                            <td rowSpan={6} style={{ paddingTop: "280px" }}>
                                3
                            </td>
                            <td rowSpan={6} style={{ paddingTop: "280px" }}>
                                2
                            </td>
                            <td rowSpan={6} style={{ paddingTop: "280px" }}>
                                1
                            </td>
                            <td rowSpan={6} style={{ paddingTop: "280px" }}>
                                N
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                4. 성과는 요구 사항을 초과하는 경우가 많습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                3. 성과는 지속적으로 요구 사항을 충족합니다.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                2.  성성능은 일부를 충족하지만 모든 요구 사항을 충족하지는 않습니다.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                1. 성능이 지속적으로 최소 요구 사항을 충족하지 못합니다.
                                직원이 필요한 기술이 부족하거나 필요한 기술을 활용하지 못합니다.
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                N/A. 직원이 해당 직위의 필수 요소를 입증할 만큼
                                충분히 오랫동안 직책에 있지 않았으며
                                나중에 합의된 날짜에 검토될 것입니다.
                            </td>
                        </tr>
                        {questions.map((question, index) => (
                            <tr style={{ borderTop: '4px solid #eff0f2' }} key={index}>
                                <td style={{width:"4%",textAlign:"center"}}>{index+1}</td>
                                <td colSpan={5}>{question.question}</td>
                                {scores.map((score,) => (
                                    <td style={{ padding: '1px 1px 1px 1px' }} key={score.id}>
                                        <FormInput
                                            checked={selectedCheckboxIds[index] === score.id}
                                            onClick={() => handleCheckboxClick(score.id, index)}
                                            disabled={
                                                selectedCheckboxIds[index] !== null && selectedCheckboxIds[index] !== score.id
                                            }
                                            name=""
                                            type="checkbox"
                                            value={score.id}
                                            onChange={handleCheckboxChange}
                                            style={{ fontSize: '20px', textAlign: 'center', border: 'none' }}
                                        />

                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr style={{ borderTop: '4px solid #eff0f2' }}>
                            <td colSpan={6}>합계</td>
                            {scores.map((score) => (
                                <React.Fragment key={score.id}>
                                    <td className="text-center">{score.score}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <Row>

                <Col className="text-end">
                    {/* <RoleButton userRole={userRole} /> &nbsp;&nbsp; */}
                    <Button size='lg'>저장</Button>
                </Col>
            </Row>
        </>
    );
};

export default DonglyoPyeonggaSeongGwa;


{/*========= 기존코드 =========== */ }
{/*
                        <Row>
                            <Table className="table table-bordered table-centered" >
                                <thead className="table-madegray" style={{ color: "#a3a7ad" }}>
                                    <tr>
                                        <th colSpan={6}>질문에 철저하고 진실되게 답변해 주십시오.
                                            귀하의 응답은 다른 직원이 제공한 응답과 함께 수집됩니다.
                                            검토 중인 개인에게는 설문지 작성을 요청한 동료가 누구인지 알려주지 않습니다.
                                            귀하의 참여에 감사드립니다.</th>
                                        <th colSpan={6}>1개를 선택후 "1"을 넣어주세요</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr style={{ borderTop: "4px solid #eff0f2" }}>
                            <td colSpan={6}>
                                1. 회사의 사명, 비전 및 가치와 일치하는 방식으로 행동합니다.
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId1 === 5}
                                    onClick={() => handleCheckboxClick1(5)}
                                    disabled={selectedCheckboxId1 !== null && selectedCheckboxId1 !== 5}
                                    name="Q1"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId1 === 4}
                                    onClick={() => handleCheckboxClick1(4)}
                                    disabled={selectedCheckboxId1 !== null && selectedCheckboxId1 !== 4}
                                    name="Q1"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId1 === 3}
                                    onClick={() => handleCheckboxClick1(3)}
                                    disabled={selectedCheckboxId1 !== null && selectedCheckboxId1 !== 3}
                                    name="Q1"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId1 === 2}
                                    onClick={() => handleCheckboxClick1(2)}
                                    disabled={selectedCheckboxId1 !== null && selectedCheckboxId1 !== 2}
                                    name="Q1"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId1 === 1}
                                    onClick={() => handleCheckboxClick1(1)}
                                    disabled={selectedCheckboxId1 !== null && selectedCheckboxId1 !== 1}
                                    name="Q1"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId1 === 0}
                                    onClick={() => handleCheckboxClick1(0)}
                                    disabled={selectedCheckboxId1 !== null && selectedCheckboxId1 !== 0}
                                    name="Q1"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                2. 동료들에게 청렴한 사람으로 여겨진다.
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId2 === 5}
                                    onClick={() => handleCheckboxClick2(5)}
                                    disabled={selectedCheckboxId2 !== null && selectedCheckboxId2 !== 5}
                                    name="Q2"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId2 === 4}
                                    onClick={() => handleCheckboxClick2(4)}
                                    disabled={selectedCheckboxId2 !== null && selectedCheckboxId2 !== 4}
                                    name="Q2"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId2 === 3}
                                    onClick={() => handleCheckboxClick2(3)}
                                    disabled={selectedCheckboxId2 !== null && selectedCheckboxId2 !== 3}
                                    name="Q2"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId2 === 2}
                                    onClick={() => handleCheckboxClick2(2)}
                                    disabled={selectedCheckboxId2 !== null && selectedCheckboxId2 !== 2}
                                    name="Q2"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId2 === 1}
                                    onClick={() => handleCheckboxClick2(1)}
                                    disabled={selectedCheckboxId2 !== null && selectedCheckboxId2 !== 1}
                                    name="Q2"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId2 === 0}
                                    onClick={() => handleCheckboxClick2(0)}
                                    disabled={selectedCheckboxId2 !== null && selectedCheckboxId2 !== 0}
                                    name="Q2"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                3. 동료에게 도움이 되는 태도를 가진다.
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId3 === 5}
                                    onClick={() => handleCheckboxClick3(5)}
                                    disabled={selectedCheckboxId3 !== null && selectedCheckboxId3 !== 5}
                                    name="Q3"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId3 === 4}
                                    onClick={() => handleCheckboxClick3(4)}
                                    disabled={selectedCheckboxId3 !== null && selectedCheckboxId3 !== 4}
                                    name="Q3"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId3 === 3}
                                    onClick={() => handleCheckboxClick3(3)}
                                    disabled={selectedCheckboxId3 !== null && selectedCheckboxId3 !== 3}
                                    name="Q3"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId3 === 2}
                                    onClick={() => handleCheckboxClick3(2)}
                                    disabled={selectedCheckboxId3 !== null && selectedCheckboxId3 !== 2}
                                    name="Q3"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId3 === 1}
                                    onClick={() => handleCheckboxClick3(1)}
                                    disabled={selectedCheckboxId3 !== null && selectedCheckboxId3 !== 1}
                                    name="Q3"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId3 === 0}
                                    onClick={() => handleCheckboxClick3(0)}
                                    disabled={selectedCheckboxId3 !== null && selectedCheckboxId3 !== 0}
                                    name="Q3"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                4. 회사 정책 및 절차 준수
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId4 === 5}
                                    onClick={() => handleCheckboxClick4(5)}
                                    disabled={selectedCheckboxId4 !== null && selectedCheckboxId4 !== 5}
                                    name="Q3"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId4 === 4}
                                    onClick={() => handleCheckboxClick4(4)}
                                    disabled={selectedCheckboxId4 !== null && selectedCheckboxId4 !== 4}
                                    name="Q4"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId4 === 3}
                                    onClick={() => handleCheckboxClick4(3)}
                                    disabled={selectedCheckboxId4 !== null && selectedCheckboxId4 !== 3}
                                    name="Q4"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId4 === 2}
                                    onClick={() => handleCheckboxClick4(2)}
                                    disabled={selectedCheckboxId4 !== null && selectedCheckboxId4 !== 2}
                                    name="Q4"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId4 === 1}
                                    onClick={() => handleCheckboxClick4(1)}
                                    disabled={selectedCheckboxId4 !== null && selectedCheckboxId4 !== 1}
                                    name="Q4"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId4 === 0}
                                    onClick={() => handleCheckboxClick4(0)}
                                    disabled={selectedCheckboxId4 !== null && selectedCheckboxId4 !== 0}
                                    name="Q4"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                5. 동료와 의사소통할 때 프로페셔널하고 예의 바르다
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId5 === 5}
                                    onClick={() => handleCheckboxClick5(5)}
                                    disabled={selectedCheckboxId5 !== null && selectedCheckboxId5 !== 5}
                                    name="Q5"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId5 === 4}
                                    onClick={() => handleCheckboxClick5(4)}
                                    disabled={selectedCheckboxId5 !== null && selectedCheckboxId5 !== 4}
                                    name="Q5"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId5 === 3}
                                    onClick={() => handleCheckboxClick5(3)}
                                    disabled={selectedCheckboxId5 !== null && selectedCheckboxId5 !== 3}
                                    name="Q5"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId5 === 2}
                                    onClick={() => handleCheckboxClick5(2)}
                                    disabled={selectedCheckboxId5 !== null && selectedCheckboxId5 !== 2}
                                    name="Q5"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId5 === 1}
                                    onClick={() => handleCheckboxClick5(1)}
                                    disabled={selectedCheckboxId5 !== null && selectedCheckboxId5 !== 1}
                                    name="Q5"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId5 === 0}
                                    onClick={() => handleCheckboxClick5(0)}
                                    disabled={selectedCheckboxId5 !== null && selectedCheckboxId5 !== 0}
                                    name="Q5"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                6. 고객 또는 동료와 상호 작용할 때 긍정적인 방식으로 회사를 대표합니다.
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId6 === 5}
                                    onClick={() => handleCheckboxClick6(5)}
                                    disabled={selectedCheckboxId6 !== null && selectedCheckboxId6 !== 5}
                                    name="Q6"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId6 === 4}
                                    onClick={() => handleCheckboxClick6(4)}
                                    disabled={selectedCheckboxId6 !== null && selectedCheckboxId6 !== 4}
                                    name="Q6"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId6 === 3}
                                    onClick={() => handleCheckboxClick6(3)}
                                    disabled={selectedCheckboxId6 !== null && selectedCheckboxId6 !== 3}
                                    name="Q6"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId6 === 2}
                                    onClick={() => handleCheckboxClick6(2)}
                                    disabled={selectedCheckboxId6 !== null && selectedCheckboxId6 !== 2}
                                    name="Q6"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId6 === 1}
                                    onClick={() => handleCheckboxClick6(1)}
                                    disabled={selectedCheckboxId6 !== null && selectedCheckboxId6 !== 1}
                                    name="Q6"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId6 === 0}
                                    onClick={() => handleCheckboxClick6(0)}
                                    disabled={selectedCheckboxId6 !== null && selectedCheckboxId6 !== 0}
                                    name="Q6"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                7. 새로운 기술을 지속적으로 개발하고 전문가로 성장하는 데 관심이 있습니다.
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId7 === 5}
                                    onClick={() => handleCheckboxClick7(5)}
                                    disabled={selectedCheckboxId7 !== null && selectedCheckboxId7 !== 5}
                                    name="Q7"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId7 === 4}
                                    onClick={() => handleCheckboxClick7(4)}
                                    disabled={selectedCheckboxId7 !== null && selectedCheckboxId7 !== 4}
                                    name="Q7"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId7 === 3}
                                    onClick={() => handleCheckboxClick7(3)}
                                    disabled={selectedCheckboxId7 !== null && selectedCheckboxId7 !== 3}
                                    name="Q7"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId7 === 2}
                                    onClick={() => handleCheckboxClick7(2)}
                                    disabled={selectedCheckboxId7 !== null && selectedCheckboxId7 !== 2}
                                    name="Q7"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId7 === 1}
                                    onClick={() => handleCheckboxClick7(1)}
                                    disabled={selectedCheckboxId7 !== null && selectedCheckboxId7 !== 1}
                                    name="Q7"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId7 === 0}
                                    onClick={() => handleCheckboxClick7(0)}
                                    disabled={selectedCheckboxId7 !== null && selectedCheckboxId7 !== 0}
                                    name="Q7"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                8. 적절하고 시기적절한 방식으로 작업과 책임을 수행합니다.
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId8 === 5}
                                    onClick={() => handleCheckboxClick8(5)}
                                    disabled={selectedCheckboxId8 !== null && selectedCheckboxId8 !== 5}
                                    name="Q8"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId8 === 4}
                                    onClick={() => handleCheckboxClick8(4)}
                                    disabled={selectedCheckboxId8 !== null && selectedCheckboxId8 !== 4}
                                    name="Q8"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId8 === 3}
                                    onClick={() => handleCheckboxClick8(3)}
                                    disabled={selectedCheckboxId8 !== null && selectedCheckboxId8 !== 3}
                                    name="Q8"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId8 === 2}
                                    onClick={() => handleCheckboxClick8(2)}
                                    disabled={selectedCheckboxId8 !== null && selectedCheckboxId8 !== 2}
                                    name="Q8"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId8 === 1}
                                    onClick={() => handleCheckboxClick8(1)}
                                    disabled={selectedCheckboxId8 !== null && selectedCheckboxId8 !== 1}
                                    name="Q8"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId8 === 0}
                                    onClick={() => handleCheckboxClick8(0)}
                                    disabled={selectedCheckboxId8 !== null && selectedCheckboxId8 !== 0}
                                    name="Q8"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                9. 다른 사람의 작업과 아이디어에 대한 존중을 보여줍니다.
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId9 === 5}
                                    onClick={() => handleCheckboxClick9(5)}
                                    disabled={selectedCheckboxId9 !== null && selectedCheckboxId9 !== 5}
                                    name="Q9"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId9 === 4}
                                    onClick={() => handleCheckboxClick9(4)}
                                    disabled={selectedCheckboxId9 !== null && selectedCheckboxId9 !== 4}
                                    name="Q9"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId9 === 3}
                                    onClick={() => handleCheckboxClick9(3)}
                                    disabled={selectedCheckboxId9 !== null && selectedCheckboxId9 !== 3}
                                    name="Q9"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId9 === 2}
                                    onClick={() => handleCheckboxClick9(2)}
                                    disabled={selectedCheckboxId9 !== null && selectedCheckboxId9 !== 2}
                                    name="Q9"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId9 === 1}
                                    onClick={() => handleCheckboxClick9(1)}
                                    disabled={selectedCheckboxId9 !== null && selectedCheckboxId9 !== 1}
                                    name="Q9"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId9 === 0}
                                    onClick={() => handleCheckboxClick9(0)}
                                    disabled={selectedCheckboxId9 !== null && selectedCheckboxId9 !== 0}
                                    name="Q9"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                10. 다른 사람의 필요를 배려한다
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId10 === 5}
                                    onClick={() => handleCheckboxClick10(5)}
                                    disabled={selectedCheckboxId10 !== null && selectedCheckboxId10 !== 5}
                                    name="Q10"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId10 === 4}
                                    onClick={() => handleCheckboxClick10(4)}
                                    disabled={selectedCheckboxId10 !== null && selectedCheckboxId10 !== 4}
                                    name="Q10"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId10 === 3}
                                    onClick={() => handleCheckboxClick10(3)}
                                    disabled={selectedCheckboxId10 !== null && selectedCheckboxId10 !== 3}
                                    name="Q10"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId10 === 2}
                                    onClick={() => handleCheckboxClick10(2)}
                                    disabled={selectedCheckboxId10 !== null && selectedCheckboxId10 !== 2}
                                    name="Q10"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId10 === 1}
                                    onClick={() => handleCheckboxClick10(1)}
                                    disabled={selectedCheckboxId10 !== null && selectedCheckboxId10 !== 1}
                                    name="Q10"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId10 === 0}
                                    onClick={() => handleCheckboxClick10(0)}
                                    disabled={selectedCheckboxId10 !== null && selectedCheckboxId10 !== 0}
                                    name="Q10"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                11. 자신의 행동에 대한 책임을 기꺼이 받아들입니다.
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId11 === 5}
                                    onClick={() => handleCheckboxClick11(5)}
                                    disabled={selectedCheckboxId11 !== null && selectedCheckboxId11 !== 5}
                                    name="Q11"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId11 === 4}
                                    onClick={() => handleCheckboxClick11(4)}
                                    disabled={selectedCheckboxId11 !== null && selectedCheckboxId11 !== 4}
                                    name="Q11"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId11 === 3}
                                    onClick={() => handleCheckboxClick11(3)}
                                    disabled={selectedCheckboxId11 !== null && selectedCheckboxId11 !== 3}
                                    name="Q11"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId11 === 2}
                                    onClick={() => handleCheckboxClick11(2)}
                                    disabled={selectedCheckboxId11 !== null && selectedCheckboxId11 !== 2}
                                    name="Q11"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId11 === 1}
                                    onClick={() => handleCheckboxClick11(1)}
                                    disabled={selectedCheckboxId11 !== null && selectedCheckboxId11 !== 1}
                                    name="Q11"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId11 === 0}
                                    onClick={() => handleCheckboxClick11(0)}
                                    disabled={selectedCheckboxId11 !== null && selectedCheckboxId11 !== 0}
                                    name="Q11"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                12. 효과적인 감독자가 될 것이라고 생각하는 사람입니까?
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId12 === 5}
                                    onClick={() => handleCheckboxClick12(5)}
                                    disabled={selectedCheckboxId12 !== null && selectedCheckboxId12 !== 5}
                                    name="Q12"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId12 === 4}
                                    onClick={() => handleCheckboxClick12(4)}
                                    disabled={selectedCheckboxId12 !== null && selectedCheckboxId12 !== 4}
                                    name="Q12"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId12 === 3}
                                    onClick={() => handleCheckboxClick12(3)}
                                    disabled={selectedCheckboxId12 !== null && selectedCheckboxId12 !== 3}
                                    name="Q12"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId12 === 2}
                                    onClick={() => handleCheckboxClick12(2)}
                                    disabled={selectedCheckboxId12 !== null && selectedCheckboxId12 !== 2}
                                    name="Q12"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId12 === 1}
                                    onClick={() => handleCheckboxClick12(1)}
                                    disabled={selectedCheckboxId12 !== null && selectedCheckboxId12 !== 1}
                                    name="Q12"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId12 === 0}
                                    onClick={() => handleCheckboxClick12(0)}
                                    disabled={selectedCheckboxId12 !== null && selectedCheckboxId12 !== 0}
                                    name="Q12"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                13. 도움이나 조언을 구하기 위해 다가가는 것이 편하다고 느끼는 사람입니까?
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId13 === 5}
                                    onClick={() => handleCheckboxClick13(5)}
                                    disabled={selectedCheckboxId13 !== null && selectedCheckboxId13 !== 5}
                                    name="Q13"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId13 === 4}
                                    onClick={() => handleCheckboxClick13(4)}
                                    disabled={selectedCheckboxId13 !== null && selectedCheckboxId13 !== 4}
                                    name="Q13"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId13 === 3}
                                    onClick={() => handleCheckboxClick13(3)}
                                    disabled={selectedCheckboxId13 !== null && selectedCheckboxId13 !== 3}
                                    name="Q13"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId13 === 2}
                                    onClick={() => handleCheckboxClick13(2)}
                                    disabled={selectedCheckboxId13 !== null && selectedCheckboxId13 !== 2}
                                    name="Q13"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId13 === 1}
                                    onClick={() => handleCheckboxClick13(1)}
                                    disabled={selectedCheckboxId13 !== null && selectedCheckboxId13 !== 1}
                                    name="Q13"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId13 === 0}
                                    onClick={() => handleCheckboxClick13(0)}
                                    disabled={selectedCheckboxId13 !== null && selectedCheckboxId13 !== 0}
                                    name="Q13"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                14. 내부 및 외부 고객 지원에 집중
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId14 === 5}
                                    onClick={() => handleCheckboxClick14(5)}
                                    disabled={selectedCheckboxId14 !== null && selectedCheckboxId14 !== 5}
                                    name="Q14"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId14 === 4}
                                    onClick={() => handleCheckboxClick14(4)}
                                    disabled={selectedCheckboxId14 !== null && selectedCheckboxId14 !== 4}
                                    name="Q14"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId14 === 3}
                                    onClick={() => handleCheckboxClick14(3)}
                                    disabled={selectedCheckboxId14 !== null && selectedCheckboxId14 !== 3}
                                    name="Q14"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId14 === 2}
                                    onClick={() => handleCheckboxClick14(2)}
                                    disabled={selectedCheckboxId14 !== null && selectedCheckboxId14 !== 2}
                                    name="Q14"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId14 === 1}
                                    onClick={() => handleCheckboxClick14(1)}
                                    disabled={selectedCheckboxId14 !== null && selectedCheckboxId14 !== 1}
                                    name="Q14"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId14 === 0}
                                    onClick={() => handleCheckboxClick14(0)}
                                    disabled={selectedCheckboxId14 !== null && selectedCheckboxId14 !== 0}
                                    name="Q14"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                15. 다른 사람의 말에 귀를 기울이려는 의지를 보여줍니다.
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId15 === 5}
                                    onClick={() => handleCheckboxClick15(5)}
                                    disabled={selectedCheckboxId15 !== null && selectedCheckboxId15 !== 5}
                                    name="Q15"
                                    type='checkbox'
                                    value="5"
                                    onChange={handleCheckboxChange5}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId15 === 4}
                                    onClick={() => handleCheckboxClick15(4)}
                                    disabled={selectedCheckboxId15 !== null && selectedCheckboxId15 !== 4}
                                    name="Q15"
                                    type='checkbox'
                                    value="4"
                                    onChange={handleCheckboxChange4}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId15 === 3}
                                    onClick={() => handleCheckboxClick15(3)}
                                    disabled={selectedCheckboxId15 !== null && selectedCheckboxId15 !== 3}
                                    name="Q15"
                                    type='checkbox'
                                    value="3"
                                    onChange={handleCheckboxChange3}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId15 === 2}
                                    onClick={() => handleCheckboxClick15(2)}
                                    disabled={selectedCheckboxId15 !== null && selectedCheckboxId15 !== 2}
                                    name="Q15"
                                    type='checkbox'
                                    value="2"
                                    onChange={handleCheckboxChange2}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId15 === 1}
                                    onClick={() => handleCheckboxClick15(1)}
                                    disabled={selectedCheckboxId15 !== null && selectedCheckboxId15 !== 1}
                                    name="Q15"
                                    type='checkbox'
                                    value="1"
                                    onChange={handleCheckboxChange1}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                            <td style={{ padding: "1px 1px 1px 1px" }}>
                                <FormInput
                                    checked={selectedCheckboxId15 === 0}
                                    onClick={() => handleCheckboxClick15(0)}
                                    disabled={selectedCheckboxId15 !== null && selectedCheckboxId15 !== 0}
                                    name="Q15"
                                    type='checkbox'
                                    value="0"
                                    onChange={handleCheckboxChange0}
                                    style={{ fontSize: "20px", textAlign: "center", border: "none" }}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                합계
                            </td>
                            <td style={{ padding: "15px 1px 1px 1px" }}>
                                <p className="text-center">
                                    {score5}
                                </p>

                            </td>
                            <td style={{ padding: "15px 1px 1px 1px" }}>
                                <p className="text-center">
                                    {score4}
                                </p>
                            </td>
                            <td style={{ padding: "15px 1px 1px 1px" }}>
                                <p className="text-center">
                                    {score3}
                                </p>
                            </td>
                            <td style={{ padding: "15px 1px 1px 1px" }}>
                                <p className="text-center">
                                    {score2}
                                </p>
                            </td>
                            <td style={{ padding: "15px 1px 1px 1px" }}>
                                <p className="text-center">
                                    {score1}
                                </p>
                            </td>
                            <td style={{ padding: "15px 1px 1px 1px" }}>
                                <p className="text-center">
                                    {score0}
                                </p>
                            </td>
                        </tr> 
                     </tbody>
                </Table>
            </Row>
                    */}