import { Form } from "react-bootstrap";
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import { HiThumbUp, HiThumbDown, HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi";
import React, { useEffect, useState } from 'react'
import axios from "axios";


const GptAnswer = () => {

    const [down, setDown] = useState(false);
    const [up, setUp] = useState(false);

    // useEffect(/*async*/() => {
    //     const fetchData = async () => {
    //         const res = await axios.get('url')
    //         if (res.data.type == 'down2') setDown(true)
    //     }
    //     fetchData()
    // }, []);

    // const handsDown = async (e: any) => {
    //     const res = await axios.post('url')
    //     setDown(!down)
    // }

    return (
        <>
            <div className="mt-1">
                <Form>
                    <p style={{ fontSize: "20px", paddingLeft: "30px" }}>
                        최저시급보다 적게 지급시 처벌은?
                    </p>
                </Form>
            </div>
            <br />
            <div style={{
                borderTop: "1px solid #d5d5d5", borderBottom: "1px solid #d5d5d5",
                backgroundColor: "#EEEEEE",
            }}>
                <Form>

                    <p className="mt-3" style={{ fontSize: "18px", paddingLeft: "30px" }}>
                        최저시급보다 적게 지급하는 것은 대부분 국가의 법적으로 금지되어 있습니다. <br />
                        대부분의 국가에서는 최저시급 이상의 급여를 지급하지 않으면
                        법적인 문제가 발생할 수 있습니다. <br />
                        최저시급 이하로 급여를 지급하는 경우, <br />
                        회사나 개인은 법적인 처벌을 받을 수 있습니다.<br />
                        최저시급 이하로 급여를 지급하면, 노동자들의 생활이 어려워지고, <br />
                        경제적인 부담이 생길 수 있습니다. 또한, 이러한 행동은
                        회사나 개인의 평판에도 영향을 미칠 수 있으며, <br />
                        이는 장기적인 관점에서 회사나 개인에게 불이익을 초래할 수 있습니다.<br />
                        따라서, 최저시급 이하의 급여를 지급하는 것은 법적으로 금지되어 있으며, <br />
                        이러한 행위는 노동자들과 회사나 개인 모두에게 부정적인 영향을 미칠 수 있습니다.
                    </p>
                    <ul className="text-end" style={{ paddingRight: "30px" }}>
                        <Button variant="link"
                            style={{ boxShadow: "none", outline: "none", paddingRight: "4px" }}
                            onClick={(e) => {
                                setUp(!up)
                            }}
                        >
                            {up ?
                                <HiThumbUp style={{ fontSize: "20px" }} />
                                :
                                <HiOutlineThumbUp style={{ fontSize: "20px" }} />

                            }
                        </Button>
                        <Button variant="link"
                            style={{ boxShadow: "none", outline: "none", paddingLeft: "4px" }}
                            onClick={(e) => {
                                setDown(!down)
                            }}
                        >
                            {down ?
                                <HiThumbDown style={{ fontSize: "20px" }} />
                                :
                                <HiOutlineThumbDown style={{ fontSize: "20px" }} />

                            }
                        </Button>
                    </ul>
                </Form>
            </div>
            <br />
            <div className="mt-1">
                <Form>
                    <p style={{ fontSize: "20px", paddingLeft: "30px" }}>
                        직원해고조건
                    </p>
                </Form>
            </div>
            <br />
            <div style={{
                borderTop: "1px solid #d5d5d5", borderBottom: "1px solid #d5d5d5",
                backgroundColor: "#EEEEEE",
            }}>
                <Form >
                    <p className="mt-3" style={{ fontSize: "18px", paddingLeft: "30px" }}>
                        직원해고조건은 국가 및 지역 법령에 따라 다를 수 있으나, 대체로 다음과 같은 경우에 직원해고가 이루어집니다.<br />
                        <br />
                        1. 경제적 이유: 회사의 경제적인 이유로 인해 직원을 해고할 수 있습니다.
                        이 경우에는 경제적인 이유가 명확하게 입증되어야 하며,
                        회사는 직원의 해고 전에 충분한 공지 기간을 제공해야 합니다.<br />
                        <br />
                        2. 업무성과: 직원의 업무 성과가 회사의 요구에 부합하지 않거나,
                        직무를 충실히 수행하지 않았을 경우에는 직원을 해고할 수 있습니다.
                        이 경우에는 직원에게 충분한 경고와 기회를 제공해야 하며,
                        회사는 해고 이유를 명확히 설명해야 합니다.<br />
                        <br />
                        3. 부적합성: 직원의 능력이 부족하여 해당 직무를 수행할 수 없거나,
                        회사의 문화나 가치관과 맞지 않는 경우에는 직원을 해고할 수 있습니다.
                        이 경우에도 직원에게 충분한 경고와 기회를 제공하고,
                        이유를 명확히 설명해야 합니다.<br />
                        <br />
                        4. 법적인 이유: 직원이 법적인 문제를 일으켰거나,
                        회사의 규정을 위반하거나, 도덕적으로 부적절한 행동을 했을 경우에는
                        직원을 해고할 수 있습니다.<br />
                        <br />
                        이외에도 회사의 내부 정책이나 규정, 직원과의 계약서 등에 따라 직원해고 조건이 다를 수 있으며, 이는 회사에서 직원과의 계약 체결 전에 명확하게 알려줘야 합니다.
                    </p>
                </Form>
            </div>
        </>
    );
};

export default GptAnswer;