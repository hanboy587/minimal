import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AccountLayout2 from './AccountLayout2';
import logoutIcon from 'assets/images/logout-icon.svg';
import { useLogout } from './hooks';
import { Row, Col, Card, Container, } from 'react-bootstrap';
import { PageTitle } from 'components';




// 제3자 제공에 관한 사항
const Stocks = () => {
    return (
        <div className="table-responsive mt-2 text-center">
            <table className="table table-bordered table-centered text-black">
                <thead className="table-light">
                    <tr>
                        <th>제공받는자</th>
                        <th>제공하는 개인정보 항목</th>
                        <th>제공받는 자의 이용목적</th>
                        <th>제공받는 자의 보유•이용기간</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>국세청</td>
                        <td>회사명, 담당자명, 이메일, 담당자 전화번호, 사업장소재지</td>
                        <td>전자세금계산서 서비스 이용 내역 통보</td>
                        <td>서비스가입일, 해지일 또는 제공 계약 종료일 중 먼저 도래하는 시점</td>
                    </tr>
                    <tr>
                        <td>나이스노무법인</td>
                        <td>등록인 이름, 관리책임자 이름, 전화번호, 이메일, 주소</td>
                        <td>메일 서비스 이용 시 회사 도메인 등록 기능 제공을 위한 최소정보</td>
                        <td>서비스 사용기간</td>
                    </tr>
                    <tr>
                        <td>신용카드사(KB국민, 비씨, 롯데, 삼성, 현대, 신한, 하나 등), <br /><br /> VAN사(㈜케이에스넷)</td>
                        <td>거래 정보</td>
                        <td>나이스페이 신용카드 결제 및 정산 처리</td>
                        <td>건당 1만원 이하 : 1년 <br /><br /> 건당 1만원 초과 : 5년</td>
                    </tr>
                    <tr>
                        <td>시중은행<br />
                            (KDB산업은행, 기업, 국민, KEB하나, 수협, 농협, 지역농축협, 우리, 신한, SC제일, 한국시티, <br />
                            대구, 부산, 광주, 제주, 전북, 경남, 새마을금고, 신협, 산림조합,
                            우체국, 케이뱅크, 카카오뱅크),<br /><br />
                            증권사<br />
                            (유안타, KB, 미래에셋DW, 삼성, 한국투자, NH투자, 하이투자, <br />
                            현대차, SK, 대신,
                            한화투자, 한화금융투자, 신한금융투자, 동부, 유신투자, 메리츠, 신영),
                            <br /><br />금융결제원</td>
                        <td>거래 정보</td>
                        <td>나이스페이 계좌이체 결제 시</td>
                        <td>건당 1만원 이하 : 1년 <br /><br /> 건당 1만원 초과 : 5년</td>
                    </tr>
                    <tr>
                        <td>이동통신사업자<br />(SKT, KT, LGU+, MVNO사업자)<br />㈜다날</td>
                        <td>거래 정보</td>
                        <td>나이스페이 휴대폰 간편결제</td>
                        <td>건당 1만원 이하 : 1년 <br /><br /> 건당 1만원 초과 : 5년</td>
                    </tr>
                    <tr>
                        <td>금융결제원</td>
                        <td>거래정보, 고유식별정보</td>
                        <td>나이스페이 계좌 자동이체 서비스 제공</td>
                        <td>건당 1만원 이하 : 1년 <br /><br /> 건당 1만원 초과 : 5년</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

//  개인정보 위탁 테이블
const Stocks2 = () => {
    return (
        <div className="table-responsive mt-2 text-center">
            <table className="table table-bordered table-centered text-black">
                <thead className="table-light">
                    <tr>
                        <th>수탁자</th>
                        <th>이용목적</th>
                        <th>보유•이용 기간</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>미정</td>
                        <td>고객 문의 응대 <br /><br />서비스 이용 안내</td>
                        <td>소비자의 불만<br /> 또는<br /> 분쟁처리에 관한 기록 보유 방침을 따름</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};





const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted" style={{fontSize:"20px"}}>
                    <Link to={'/account/login'} className=" ms-1">
                        <b>{t('로그인')}</b>
                    </Link>
                    {t(' 하러가기 ')}{' '}
                </p>
            </Col>
        </Row>
    );
};

const Logout2 = () => {
    const { t } = useTranslation();
    useLogout();

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <section className="py-3">
                                <Container>
                                    <div className="clearfix">
                                        <div className="float-start mb-3 text-black">
                                            <h4>나이스 노무법인 개인정보처리방침</h4>
                                        </div>
                                    </div>
                                    <Row>
                                        <Col>
                                            <p className="font-15 text-black">
                                                주식회사 나이스노무법인(이하 “회사”)은 개인정보보호법에 따라 정보주체의 개인정보 및 권익을 보호하고
                                                개인정보와 관련한 정보주체의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
                                                본 개인정보처리방침은 회사가 제공하는 ‘나이스’ 서비스(이하 “서비스”) 이용에 적용됩니다.
                                            </p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                            <div className="float-start mt-3 text-black">
                                                <p>
                                                    <h3>1. 개인정보의 처리목적</h3>
                                                </p>
                                                <p className="font-15">
                                                    회사는 개인정보를 다음의 목적을 위해 처리합니다.
                                                    처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경되는 경우에는
                                                    개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                                                </p>
                                                <p className="font-15">
                                                    ① 서비스 이용계약 체결 및 유지∙관리
                                                </p>
                                                <p className="font-15">
                                                    ② 본인 확인 : 회원가입 및 서비스 유지∙관리 등 목적
                                                </p>
                                                <p className="font-15">
                                                    ③ 서비스 제공 : 급여관리, 근태관리, 인증서 등 서비스 제공의 목적
                                                </p>
                                                <p className="font-15">
                                                    ④ 서비스 부정이용 방지
                                                </p>
                                                <p className="font-15">
                                                    ⑤ 이용요금 결제∙정산 환불
                                                </p>
                                                <p className="font-15">
                                                    ⑥ 분쟁조정을 위한 기록 보존
                                                </p>
                                                <p className="font-15">
                                                    ⑦ 서비스 이용 관련 필수사항 고지 및 통지
                                                </p>
                                                <p className="font-15">
                                                    ⑧ 마케팅 및 광고에의 활용 :
                                                    신규서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공,
                                                    인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인,
                                                    접속빈도 파악 또는 사용자의 서비스 이용에 대한 통계 등 목적
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="float-start mt-3 text-black">
                                                <p>
                                                    <h3>2. 개인정보의 항목 및 수집방법</h3>
                                                </p>
                                                <p className="font-15">
                                                    1. 회원가입 또는 서비스 이용 시 회원식별 및 최적화된 서비스 제공을 위해 수집하는 개인정보 항목은 아래와 같습니다.
                                                </p>
                                                <p className="font-15">
                                                    ① 본인 확인: 이름, 아이디, 이메일, 휴대전화번호, 점유인증 정보
                                                </p>
                                                <p className="font-15">
                                                    ② 서비스 이용계약 체결 및 유지∙관리: 이름, 아이디, 이메일, 휴대전화번호, 점유인증 정보
                                                </p>
                                                <p className=" font-15">
                                                    ③ 서비스 이용계약 체결 및 유지∙관리(사업자): 법인/개인 구분, 사업자명, 회사명, 대표자명, 사업자등록번호, 사업장 전화번호,
                                                    사업장 주소, 법인등록번호, 종사업장번호, 업종, 업태
                                                </p>
                                                <p className="font-15">
                                                    ④ 서비스 제공(급여관리): 이름, 생년월일, 성별, 내외국인 정보, 이동통신사 및 휴대전화번호, 점유인증 정보, CI/DI 값 등 본인 식별 정보
                                                </p>
                                                <p className="font-15">
                                                    ⑤ 서비스 제공(근태관리): 이용자 단말기 모델명, OS정보, 단말기 고유식별번호(UUID), 서비스 이용(정지)기록, 접속 로그, 쿠키, 접속IP정보
                                                </p>
                                                <p className="font-15">
                                                    ⑥ 서비스 제공(인증서): 이름, 성별, 생년월일, 휴대전화번호, 본인인증정보(CI,DI,통신사명,내외국인 구분), 인증서 발급 후 생성정보
                                                </p>
                                                <p className="font-15">
                                                    ⑦ 서비스 부정이용 방지: 법인/개인 구분, 사업자등록번호, 법인등록번호, 회사명, 대표자명, 종사업장번호, 업종, 업태, 회사전화번호, 주소,
                                                    서비스 이용시간/이용기록, 이용정지기록, 이용정지/해지 정보, 접속IP, 결제기록, 접속로그, 이용컨텐츠, 쿠키 등 서비스 이용정보,
                                                    단말기 정보(모델명 등)
                                                </p>
                                                <p className="font-15">
                                                    ⑧ 이용요금 결제∙정산 환불: 이메일, 접속IP, 신용카드번호, 결제기록, 은행명, 계좌번호, 예금주, 신용카드사명, 신용카드번호(일부), 통신사명,
                                                    상품 또는 용역 거래정보, 결제정보(서비스 구매를 위해 제공하는 각 결제수단 별 제반 정보로 카드사명, 카드번호(일부), 은행명, 예금주명,
                                                    통신사명, 휴대폰번호 등), 대표자명, 대표자 휴대전화번호, 담당자명, 담당자 연락처, 담당자 이메일, 아이디, 비밀번호
                                                </p>
                                                <p className="font-15">
                                                    ⑨ 분쟁조정을 위한 기록보존: 법인/개인 구분, 사업자등록번호, 법인등록번호, 회사명, 대표자명, 종사업장번호, 업종, 업태, 회사전화번호, 주소,
                                                    서비스 이용시간/이용기록, 이용정지기록, 이용정지/해지 정보, 접속IP, 결제기록, 접속로그, 이용컨텐츠, 쿠키 등 서비스 이용정보, 단말기 정보(모델명 등)
                                                </p>
                                                <p className="font-15">
                                                    ⑩ 서비스 이용 관련 필수사항 고지 및 통지: 이름, 생년월일, 아이디, 이메일, 휴대전화번호
                                                </p>
                                                <p className="font-15">
                                                    2. 서비스가 구현되는 스마트 디바이스를 이용하는 과정에서 디바이스 정보, 서비스 이용 기록 등의 정보가 자동으로 생성되어 수집될 수 있습니다
                                                </p>
                                                <p className="font-15">
                                                    3. 서비스 이용 과정에서 이용자의 별도 동의 절차를 거쳐 개인정보가 추가 수집될 수 있습니다.
                                                </p>
                                                <p className="font-15">
                                                    4. 회사는 아래와 같은 방법으로 개인정보를 수집합니다.
                                                </p>
                                                <p className="font-15">
                                                    ① 서비스 어플리케이션 실행 또는 이용
                                                </p>
                                                <p className="font-15">
                                                    ② 공식계정 메시지 등 이용자의 자발적 제공을 통한 수집
                                                </p>
                                                <p className="font-15">
                                                    ③ 제휴사로부터의 제공
                                                </p>
                                                <p className="font-15">
                                                    ④ 생성정보 수집 툴을 통한 수집
                                                </p>
                                                <p className="font-15">
                                                    ⑤ 휴대폰 본인확인시 이동통신사로부터의 결과 수집
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="float-start mt-3 text-black">
                                                <p>
                                                    <h3>3. 개인정보의 처리 및 보유기간</h3>
                                                </p>
                                                <p className="font-15">
                                                    회사는 회사와 회원 간 서비스 이용계약 종료시까지 회원의 개인정보를 처리합니다. 다만 다른 법령에서 별도의 보존기간을 정하고 있는 경우에는 그에 따릅니다.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="float-start mt-3 text-black">
                                                <p>
                                                    <h3>4. 개인정보의 제공 및 공유</h3>
                                                </p>
                                                <p className="font-15">
                                                    회사는 회원의 개인정보를 수집 및 이용목적에 한해서만 이용하며 타인 또는 타기업, 기관에 공개하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
                                                </p>
                                                <p className="font-15">
                                                    1. 회원이 사전에 동의한 경우로 정보수집 또는 정보제공 이전에 회원에게 어떤 정보가 누구에게, 왜 필요한지, 그리고 언제까지 어떻게 보호/관리되는지 알려주고
                                                    동의를 구하며, 회원이 동의하지 않는 경우에는 정보를 수집하거나 공유하지 않습니다.
                                                </p>
                                                <p className="font-15">
                                                    2. 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="float-start mt-3 text-black">
                                                <p>
                                                    <h3>5. 개인정보의 파기절차 및 파기방법</h3>
                                                </p>
                                                <p className="font-15">
                                                    1. 회사는 원칙적으로 개인정보 수집 및 이용목적이 달성되거나, 보유 및 이용기간이 경과되거나, 회원과의 서비스이용계약이 종료된 경우에는 해당 정보를 지체없이 파기합니다.
                                                </p>
                                                <p className="font-15">
                                                    2. 파기의 절차, 기한 및 방법 등은 다음과 같습니다.
                                                </p>
                                                <p className="font-15">
                                                    ① 파기절차
                                                </p>
                                                <p className="font-15">
                                                    이용자가 회원가입 등을 위해 입력한 정보는 이용목적이 달성된 후 파기됩니다. 다만, 법령에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기될 수 있습니다.
                                                    동 개인정보는 법률에 의한 경우가 아니고서는 보전되는 이외의 다른 목적으로 이용되지 않습니다.
                                                </p>
                                                <p className="font-15">
                                                    ② 파기방법
                                                </p>
                                                <p className="font-15">
                                                    회사는 처리하는 개인정보를 파기할 때에는 다음의 방법으로 파기합니다.
                                                </p>
                                                <p className="font-15">
                                                    - 전자적 파일 형태인 경우 : 복원이 불가능한 방법으로 영구 삭제
                                                </p>
                                                <p className="font-15">
                                                    - 기록물, 인쇄물, 서면, 그 밖의 기록매체인 경우 : 파쇄 또는 소각
                                                </p>
                                                <p className="font-15">
                                                    3. 개인정보의 예외적 보존근거 및 보존하는 개인정보 항목
                                                </p>
                                                <p className="font-15">
                                                    - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년(전자상거래 등에서의 소비자 보호에 관한 법률)
                                                </p>
                                                <p className="font-15">
                                                    - 전자금융 거래에 관한 기록 : 5년(전자금융거래법)
                                                </p>
                                                <p className="font-15">
                                                    - 전자서명 등 계약 진행 중요 정보 기록 : 10년(전자문서 및 전자거래기본법)
                                                </p>
                                                <p className="font-15">
                                                    - 서비스 방문 기록 : 3개월(통신비밀보호법)
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="float-start mt-3 text-black">
                                                <p>
                                                    <h3>6. 개인정보의 제3자 제공에 관한 사항</h3>
                                                </p>
                                                <p className="font-15">
                                                    회사는 다음과 같이 회원의 개인정보를 제3자에게 제공하고 있습니다.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Stocks />
                                    <Row>
                                        <Col>
                                            <div className="float-start mt-3 text-black">
                                                <p>
                                                    <h3>7. 개인정보처리 위탁</h3>
                                                </p>
                                                <p className=" font-15">
                                                    회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Stocks2 />
                                            <p className=" font-15 text-black">
                                                회사는 위탁계약 체결 시 개인정보 보호법 제25조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적, 관리적 보호조치, 재위탁 제한,
                                                수탁자에 대한 관리, 감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독
                                                하고 있습니다. <br />또한, 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보처리방침을 통하여 공개하도록 하겠습니다.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="float-start text-black mt-3">
                                                <p>
                                                    <h3>8. 개인정보 국외 이전</h3>
                                                </p>
                                                <p className="font-15">
                                                    회사는 서비스 제공을 위해 아래와 같이 개인정보를 국외로 이전하고 있습니다.
                                                </p>
                                                <p className="font-15">
                                                    - 이전되는 개인정보 항목 : 아이디, 연락처, 이름
                                                </p>
                                                <p className="font-15">
                                                    - 개인정보가 이전되는 국가 : 미정
                                                </p>
                                                <p className="font-15">
                                                    - 이전 일시 및 이전방법 : 문의 등록 시 네트워크를 통한 전송
                                                </p>
                                                <p className="font-15">
                                                    - 개인정보를 이전 받는 자의 성명 : 미정
                                                </p>
                                                <p className="font-15">
                                                    - 개인정보를 이전 받는 자의 개인정보 이용목적 : 고객문의 응대 및 서비스 이용 안내
                                                </p>
                                                <p className="font-15">
                                                    - 개인정보를 이전 받는 자의 개인정보 보유 이용 기간 : 회원 탈퇴 시까지
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="float-start text-black mt-3">
                                                <p>
                                                    <h3>9. 개인정보의 안정성 확보 조치에 관한 사항</h3>
                                                </p>
                                                <p className="font-15">
                                                    회사는 개인정보보호법 제29조에 따라 다음과 같이 안정성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
                                                </p>
                                                <p className="font-15">
                                                    ① 개인정보 취급 직원의 최소화 및 교육<br />
                                                    - 개인정보를 취급하는 직원을 지정하고 담당자에게 한정시켜 최소화하여 개인정보를 관리하는 대책을 시행하고 있습니다.
                                                </p>
                                                <p className="font-15">
                                                    ② 내부관리계획의 수립 및 시행<br />
                                                    - 개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.
                                                </p>
                                                <p className="font-15">
                                                    ③ 개인정보의 암호화<br />
                                                    - 회원의 개인정보인 비밀번호는 암호화되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송
                                                    데이터를 암호화하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
                                                </p>
                                                <p className="font-15">
                                                    ④ 해킹 등에 대비한 기술적 대책<br />
                                                    - 회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신∙점검을 하며
                                                    외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
                                                </p>
                                                <p className="font-15">
                                                    ⑤ 개인정보에 대한 접근 제한<br />
                                                    - 개인정보를 처리하는 데이터베이스 시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며
                                                    침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.
                                                </p>
                                                <p className="font-15">
                                                    ⑥ 보안을 위한 잠금장치 사용<br />
                                                    - 저장매체 및 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.
                                                </p>
                                                <p className="font-15">
                                                    ⑦ 비인가자에 대한 출입 통제<br />
                                                    - 개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="float-start mt-3 text-black">
                                                <p>
                                                    <h3>10. 정보주체와 법정대리인의 권리, 의무 및 그 행사방법</h3>
                                                </p>
                                                <p className="font-15">
                                                    1. 회원은 개인정보주체로서 회사에 대해 언제든지 다음 각 호의 권리를 행사할 수 있습니다.
                                                </p>
                                                <p className="font-15">
                                                    ① 정보주체 본인의 개인정보 열람요구
                                                </p>
                                                <p className="font-15">
                                                    ② 정보주체 본인의 개인정보 정정요구
                                                </p>
                                                <p className="font-15">
                                                    ③ 정보주체 본인의 개인정보 삭제요구
                                                </p>
                                                <p className="font-15">
                                                    ④ 정보주체 본인의 개인정보 처리정지 요구
                                                </p>
                                                <p className=" font-15">
                                                    ⑤ 기타 개인정보보호법에 따라 정보주체에 보장되어 있는 권리
                                                </p>
                                                <p className="font-15">
                                                    2. 제1항에 따른 권리는 관계법령 및 회사가 정하고 있는 양식에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 행사하실 수 있으며
                                                    회사는 이에 대해 지체없이 적절히 조치하겠습니다.
                                                </p>
                                                <p className="font-15">
                                                    3. 회원이 개인정보에 대한 정정 또는 삭제를 요구한 경우 회사는 제2항에 따라 적절한 조치를 시행할 때까지 당해 개인정보를 처리하지 않습니다.
                                                </p>
                                                <p className="font-15">
                                                    4. 제1항에 따른 권리는 회원의 법정대리인이나 회원의 위임을 받은 대리인을 통하여 행사하실 수 있습니다. 이 경우 개인정보보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="float-start mt-3 text-black">
                                                <p>
                                                    <h3>11. 개인정보 보호 책임자의 성명 또는 개인정보 보호업무 관련 고충사항을 처리하는 부서의 명칭과 전화번호 등 연락처</h3>
                                                </p>
                                                <p className="font-15">
                                                    1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호 책임자를 지정하고 있습니다.
                                                </p>
                                                <p className="font-15">
                                                    ➤  개인정보보호 책임자<br />
                                                    성 명 : 미정 <br />
                                                    직 책 : 나이스 개발 센터장 <br />
                                                    직 급 : - <br />
                                                    연락처 : 02 - 835 - 7700 <br />
                                                    이메일 : 1111@nicenomu.com
                                                </p>
                                                <p className="font-15">
                                                    ➤  개인정보보호 담당자<br />
                                                    담당자 : 미정<br />
                                                    부서명 : 정보보안Unit <br />
                                                    직 급 : - <br />
                                                    연락처 : 02 - 835 - 7700 <br />
                                                    이메일 : 2222@nicenomu.com
                                                </p>
                                                <p className="font-15">
                                                    2. 정보주체는 회사의 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
                                                    회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
                                                </p>
                                                <p className="font-15">
                                                    ※(참고) 개인정보 보호 유관기관<br />
                                                    아래는 회사와는 별개의 기관으로서 회사의 자체적인 개인정보 불만처리, 피해구제 결과에 만족하지 못하거나 보다 자세한 도움이 필요하시면 문의하여 주시기 바랍니다.
                                                </p>
                                                <p className="font-15">
                                                    ■  개인정보 침해신고센터 (한국인터넷진흥원 운영)<br />
                                                    소관업무 :  개인정보 침해사실 신고, 상담신청<br />
                                                    홈페이지 : privacy.kisa.or.kr <br />
                                                    전화 : (국번 없이) 118
                                                </p>
                                                <p className="font-15">
                                                    ■ 개인정보 분쟁조정위원회 (개인정보보호위원회 운영)<br />
                                                    소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결) <br />
                                                    홈페이지 : www.kopico.go.kr <br />
                                                    전화 : 1833-6972
                                                </p>
                                                <p className="font-15">
                                                    ■ 대검찰청 사이버범죄수사과 <br />
                                                    홈페이지 : www.spo.go.kr<br />
                                                    전화 : (국번없이) 1301
                                                </p>
                                                <p className=" font-15">
                                                    ■ 경찰청 사이버수사국  <br />
                                                    홈페이지 : www.cyberbureau.police.go.kr<br />
                                                    전화 : (국번없이) 182
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="float-start mt-3 text-black">
                                                <p>
                                                    <h3>12. 개인정보처리방침의 변경</h3>
                                                </p>
                                                <p className="font-15">
                                                    이 개인정보처리방침은 2022년 01월 17일부터 적용되며, 회사는 관계법령, 정부의 지침 및 회사의 정책 변경 등에 따라
                                                    개정(추가, 삭제, 정정)이 필요할 경우 서비스 내 공지사항 또는 약관에서 정하는 통지방법에 따라
                                                    변경사항 시행 7일 전부터 고지할 것입니다.
                                                </p>
                                                <p className=" font-15">
                                                    본 방침은 2022년 04월 28일부터 시행됩니다.
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </section>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <BottomLink />
        </>
    );
};
export default Logout2;
