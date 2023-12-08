import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import { useForgetPassword } from './hooks';


// 비밀번호찾기

export type UserData = {
    username: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted">
                    <Link to={'/account/login'} className="text-muted ms-1">
                        <b>{t('로그인')}</b>
                    </Link>
                    {t(' 하러가기')}{' '}
                </p>
            </Col>
        </Row>
    );
};

const ForgetPassword = () => {
    const { t } = useTranslation();
    const { loading, passwordReset, resetPasswordSuccess, error, schemaResolver, onSubmit } = useForgetPassword();

    return (
        <AccountLayout bottomLinks={<BottomLink />}>
            <div className="text-center m-auto">
                <h4 className="text-dark-50 text-center mt-0 font-weight-bold">{t('비밀번호찾기')}</h4>
                <p className="text-muted mb-4">
                    가입하신 이메일로 임시비밀번호를 보내드립니다. <br />
                    로그인후 비밀번호를 다시설정해주세요
                </p>
            </div>

            {resetPasswordSuccess && <Alert variant="success">{resetPasswordSuccess.message}</Alert>}

            {error && !resetPasswordSuccess && (
                <Alert variant="danger" className="my-2">
                    {error}
                </Alert>
            )}

            {!passwordReset && (
                <VerticalForm<UserData> onSubmit={onSubmit}>
                    <Row style={{ paddingLeft: "10px" }}>
                        <p className="mb-0" style={{ paddingLeft: "0px", color: "#a3a3a3" }}>아이디</p>
                        <input className="form-control"
                            type="text"
                            name="realname"
                            placeholder='아이디를입력해주세요'
                            style={{ width: "99%", fontSize: "17px" }}
                        // containerClass={'mb-3'}
                        />
                    </Row>
                    <br />
                    <Row style={{ paddingLeft: "10px" }}>
                        <p className="mb-0" style={{ paddingLeft: "0px", color: "#a3a3a3" }}>이메일</p>
                        <input className="form-control"
                            type="email"
                            name="email"
                            placeholder="nice@nicenomu.com"
                            style={{ width: "99%", fontSize: "17px" }}
                        />
                    </Row>
                    <br />
                    <Row style={{ paddingLeft: "10px" }}>
                        <p className="mb-0" style={{ paddingLeft: "0px", color: "#a3a3a3" }}>이름</p>
                        <input className="form-control"
                            type="text"
                            name="username"
                            placeholder="나이스"
                            style={{ width: "99%", fontSize: "17px" }}
                        />
                    </Row>
                    <br />
                    {/* <Row style={{paddingLeft:"10px"}}>
                        <p className="mb-0" style={{paddingLeft:"0px",color:"#a3a3a3"}}>전화번호</p>
                        <input className="form-control"
                            type="number"
                            name="phoneNum"
                            placeholder='01012345678' 
                            style={{width:"99%", fontSize:"17px"}}
                        />
                    </Row>
                    <br /> */}
                    <div className="mb-3 mb-0 text-center d-grid">
                        <Button variant="primary" type="submit" disabled={loading}
                            style={{
                                borderRadius: "15px",
                                padding: "1rem 5rem",
                                color: "white",
                                fontSize: "18px"
                            }}
                        >
                            이메일 전송
                        </Button>
                    </div>
                </VerticalForm>
            )}
        </AccountLayout>
    );
};

export default ForgetPassword;
