import { Row, Col, Card, Placeholder, Button, Modal,Form } from 'react-bootstrap';
import { PageTitle } from 'components';
import { useToggle } from 'hooks';

//  사업장 정보조회
// 보류
const Companyinformation = () => {
    const [isOpen5, toggleQnA] = useToggle();
    return (
        <Card>
            <Card.Body>
                <div className="mb-4">
                    <Button variant="link" className="float-end mdi mdi-progress-question text-black" onClick={toggleQnA}>
                        설명서
                    </Button>
                </div>
                <div>
                    <h5 className="mb-3 text-uppercase bg-light p-2">
                        <p>① 고용보험법 개정에 따라 2020.8.28.부터 이직확인서 제출기관이 근로복지공단에서 고용노동부 고용복지플러스센터로 변경됩니다. 제도 개편에 따른 변경 작업으로 이직확인서 제출이 어려운 경우,
                            고용보험홈페이지(https://www.ei.go.kr)를 이용해주시기 바랍니다.</p>
                        <p>② 고용보험의 상실(이직)신고를 사실과 다르게 신고할 경우 과태료 부과됩니다.(신고 후 정정하는 경우 포함) 어떠한 사유에 해당하는지 혼동된다면
                            고용센터(국번없이 1350 상담①)에 미리 연락하여 문의 후 신고하여 주시기 바랍니다.
                        </p>
                        <p>③ 2019년(귀속) 보수총액은‘보수총액신고서’로 보험료를 정산하므로 근로자 자격상실신고서의 전년도 보수총액은 근로자의 상실일이 2021.1.2.인 경우부터 입력가능합니다.</p>
                        <p>④ 근로자의 보험료 부과구분부호가 착오 신고되어 ‘고용종료근로자 보수총액 구분신고서’가 연계되는 경우 근로자고용 정보정정신청에서 보험료 부과구분부호 정정 후 자격상실신고하시기 바랍니다.</p>
                        <p>⑤ 보수총액신고된 퇴직근로자의 보수 수정은 『고용종료근로자 보수총액 수정신고서』를 제출하시기 바랍니다.</p>
                    </h5>
                </div>
                <Row>
                    <Col>
                        <div className="table-responsive mt-2 text-left">
                            <table className="table table-bordered table-centered">
                                <thead className="table-madegray" style={{ color: "#a3a7ad" }}>
                                    <tr>
                                        <th colSpan={4} style={{ fontSize: "20px",textAlign:"center" }}>사업장정보</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "25%", fontSize: "18px", color: "#a3a7ad" }}>사업장관리번호</td>
                                        <td className="text-start" style={{ padding: "0px 15px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} placeholder="335120135941"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "25%", fontSize: "18px", color: "#a3a7ad" }}>보험구분</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input type="checkbox" value="goyongboheom"></input>  고용보험 &nbsp;&nbsp; <input type="checkbox" value="sanjaeboheom"></input> 산재보험&nbsp;&nbsp;
                                            <input type="checkbox" value="gugminyeongeum"></input> 국민연금 &nbsp;&nbsp; <input type="checkbox" value="geongangboheom"></input> 건강보험
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "25%", fontSize: "18px" , color: "#a3a7ad"}}>사업장명칭</td>
                                        <td className="text-start" style={{ padding: "0px 15px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} placeholder="나이스헤어"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "25%", fontSize: "18px", color: "#a3a7ad" }}>사무대행기관번호</td>
                                        <td className="text-start" style={{ padding: "0px 15px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} placeholder="22499452512"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "25%", fontSize: "18px", color: "#a3a7ad" }}>사무대행기관명칭</td>
                                        <td className="text-start" style={{ padding: "0px 15px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} placeholder="OOO"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "25%", fontSize: "18px", color: "#a3a7ad" }}>하수급인 관리번호</td>
                                        <td className="text-start" style={{ padding: "0px 15px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} placeholder="1691261"></input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <div className="table-responsive mt-2 text-left">
                            <table className="table table-bordered table-centered">
                                <thead className="table-primary">
                                    <tr>
                                        <th colSpan={5} style={{ fontSize: "20px",textAlign:"center" }}>자격상실신고내역</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "5%", fontSize: "18px" }}>연번</td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>보험구분 *</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input type="checkbox"></input> 고용보험 &nbsp;&nbsp; <input type="checkbox"></input> 산재보험 &nbsp;&nbsp;
                                            <input type="checkbox"></input> 국민연금 &nbsp;&nbsp; <input type="checkbox"></input> 건강보험
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3} className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "5%", fontSize: "18px" }}>1</td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>주민(외국인)등록번호 *</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}placeholder="9912051356678"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>성명 *</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} placeholder="나이스"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>전화번호</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" type="number" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} placeholder="01012346789"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={4} className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "5%", fontSize: "18px" }} > 고용보험</td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>상실일 *</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>해당년도 보수총액</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "90%" }}></input> &nbsp;&nbsp;원
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>전년도 보수총액</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "90%" }}></input> &nbsp;&nbsp;원
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>상실사유 *</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>&nbsp; 구분코드   &nbsp;&nbsp;
                                            <Form.Select style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", fontSize: "18px" }}>
                                                <option>구분코드 선택하기</option>
                                                <option value="goyong1">11. 개인사정으로 인한 자진퇴사</option>
                                                <option value="goyong2">12. 사업장 이전, 근로조건변동, 임금체불 등으로 자진퇴사</option>
                                                <option value="goyong3">22. 폐업·도산</option>
                                                <option value="goyong4">23. 경영상 필요 및 회사불황으로 인원감축 등에 의한 퇴사(해고· 권고사직 · 명예퇴직 포함)</option>
                                                <option value="goyong5">26. 예술인· 근로자의 귀책사유 의한 징계해고 · 권고사직</option>
                                                <option value="goyong6">31. 정년</option>
                                                <option value="goyong7">32. 계약기간만료, 공사종료</option>
                                                <option value="goyong8">41. 고용보험 비적용</option>
                                                <option value="goyong9">42. 이중고용</option>
                                                <option value="goyong10">43. 노무제공자 월보수액의 소득기준 미충족</option>
                                                <option value="goyong11">45. 노무제공플랫폼을 이용한 노무제공 종료에 따른 이직</option>
                                            </Form.Select>
                                            구체적사유 &nbsp;&nbsp;
                                            <Form.Select name="seclctbox2" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", fontSize: "18px" }}>
                                                <option>구체적사유 선택하기</option>
                                                <option value="sangsilsayu1">다른 직장으로 옮기기 위해 이직한 경우</option>
                                                <option value="sangsilsayu2">본인이나 가족사업 등을 하기 위하여 이직한 경우</option>
                                                <option value="sangsilsayu3">결혼,출산,육아를 이유로 이직한 경우</option>
                                                <option value="sangsilsayu4">본인이 쉬고 싶어서 이직하는 경우</option>
                                                <option value="sangsilsayu5">회사사정으로 인한 휴업,휴직이 계속되어 이직하는경우</option>
                                                <option value="sangsilsayu6">임금 등의 체불 또는 지연지급이 계속되어 이직하는 경우</option>
                                                <option value="sangsilsayu7">기타</option>
                                            </Form.Select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={4} className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "5%", fontSize: "18px" }}>산재보험</td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>상실일 *</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>해당년도 보수총액</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "90%" }}></input> 원
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>전년도 보수총액</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "90%" }}></input>원
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>상실사유</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>구분코드 &nbsp;&nbsp;&nbsp;&nbsp;
                                            <Form.Select name="seclctbox3" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", fontSize: "18px" }}>
                                                <option>구분코드 선택</option>
                                            </Form.Select>
                                            구체적 사유 &nbsp;&nbsp;
                                            <Form.Select name="seclctbox4" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", fontSize: "18px" }}>
                                                <option>구분코드 선택</option>
                                            </Form.Select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={3} className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "5%", fontSize: "18px" }}>국민연금</td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>상실일 *</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" type="date" style={{border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>상실부호 *</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <Form.Select name="seclctbox5" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", fontSize: "18px" }}>
                                                <option>상실부호 선택</option>
                                                <option value="sangsilbuho1">사망</option>
                                                <option value="sangsilbuho2">사용관계 종료</option>
                                                <option value="sangsilbuho3">국적상실(국외이주)</option>
                                                <option value="sangsilbuho4">60세 도달</option>
                                                <option value="sangsilbuho5">다른 공적연금 가입</option>
                                                <option value="sangsilbuho6">전출(통·폐합)</option>
                                                <option value="sangsilbuho7">⌜국민기초생활 보장법⌟ 에 따른 수급자</option>
                                                <option value="sangsilbuho8">(조기)노령연금 수급권 취득자(조기노령연금의 지급이 정지중인 경우는 제외)</option>
                                                <option value="sangsilbuho9">협정국 연금가입</option>
                                                <option value="sangsilbuho10">체류기간 만료(외국인)</option>
                                                <option value="sangsilbuho11">적용제외 체류자격(외국인)</option>
                                            </Form.Select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>초일취득·당월상실자 납부여부</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input type="checkbox"></input> 희망
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={6} className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "5%", fontSize: "18px" }}>건강보험</td>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>상실일 *</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }}></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>상실부호 *</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <Form.Select name="seclctbox6" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", fontSize: "18px" }}>
                                                <option>상실부호 선택</option>
                                                <option value="gugminsangsil1">퇴직</option>
                                                <option value="gugminsangsil2">사망</option>
                                                <option value="gugminsangsil3">의료급여수급권자</option>
                                                <option value="gugminsangsil4">유공자등 건강보험 배제신청</option>
                                                <option value="gugminsangsil5">국적상실</option>
                                                <option value="gugminsangsil6">이민출국</option>
                                                <option value="gugminsangsil7">가입제외(외국의 법령)</option>
                                                <option value="gugminsangsil8">가입제외(외국의 보험)</option>
                                                <option value="gugminsangsil9">가입제외(사용자와의 계약)</option>
                                                <option value="gugminsangsil10">무보수 대표이사</option>
                                                <option value="gugminsangsil11">그밖의 사유(외국인 체류기간만료 등)</option>
                                            </Form.Select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px" }}>당해년도 보수총액</td>
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                            <input className="form-control" style={{border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "90%" }}></input> 원
                                        </td>
                                    </tr>
                                    <tr>
                                        <td 
                                        className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>당해년도 근무개월수</td>
                                        <td colSpan={2} className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>전년도 보수총액</td>
                                        <td colSpan={2} className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input> 원</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="table-madegray" style={{ border: "1px solid #DCDCDC" }}>전년도 근무개월수</td>
                                        <td colSpan={2} className="text-start"><input style={{ border: "1px solid #EEEEEE", outline: "none" }}></input></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="text-start mb-1"> • 상실일은 퇴사일, 이직일, 사망일 등 사유발생일의 다음날로 입력하시기 바랍니다. (2021.12.31.에 퇴사한 경우 상실일은 2022.1.1.로 입력) </p>
                            <p className="text-start"> • 전년도 보수총액이 없는 상실자의 경우는 “전년도보수총액”에 “0”원을 입력합니다. </p>
                        </div>
                    </Col>
                </Row> */}
                <Col className="text-sm-end">
                    <Button variant="primary" type="submit">
                        접수하기
                    </Button>
                </Col>
                {/* QnA 모달 */}
                <Modal show={isOpen5} onHide={toggleQnA}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <h5 className="text-white">4대보험 상실신고</h5>

                    </Modal.Header>
                    <Modal.Body className="qna">
                        <Row>
                            <Col>
                                <p className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>4대보험취득신고란?</p>
                                <p className="font-15">
                                    직원이 퇴사할 때 해야 하는 신고입니다.
                                    퇴사일을 기준으로 다음 달 15일까지 상실 신고를 진행해야 합니다
                                    < br />
                                    4대 보험 상실 신고기한 < br />
                                    - 퇴사일 기준 다음 달 15일까지
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="link" type="submit" onClick={toggleQnA} >
                            확인
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};



const Companyinformations = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[

                ]}
                title={'사업장정보조회'}
            />
            <Row>
                <Col>
                    <Companyinformation />
                </Col>
            </Row>
        </>
    );
};

export default Companyinformations;
