import { Button, Alert, Modal, Tab, Nav, Row, Col } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import { useLogin } from './hooks';
import { useToggle } from 'hooks';
import logodark from 'assets/images/logo-dark.png';
import classnames from 'classnames';
import Login2 from './Login2';
import Confirm2 from './Confirm2';
import google from 'assets/images/btn_google.png';
import kakao from 'assets/images/kakaologo.png';
import github from 'assets/images/github-mark.png';

export type UserData = {
    username: string;
    password: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <>
		</>
    );
};

type TabContentItem = {
    id: string;
    icon: string;
    title: string;
    text: string;
};

/*
 notification TEST
*/

const Example = () => {
    
};

const Login = () => {
    const { t } = useTranslation();

    let { loading, userLoggedIn, user, error, schemaResolver, onSubmit, redirectUrl, onCaptchaChange } = useLogin();

    // 세션 종료시 생기는 문제 해결
    user = sessionStorage.getItem("hyper_user");

    const [signUpModal, toggleSignUp] = useToggle();
    // const [cookies, setCookie, removeCookie] = useCookies(['rememberUsername']);
    const onTest = (formData: UserData) => {
            console.log(formData);
    };
    // useEffect(() => {
    //     onTest(formData);
    // }, []);
    // };

    // 로그인 form 을 input으로 변경시 로그인 error 동작안함  
    return (
        <>
            {(userLoggedIn || user) && <Navigate to={redirectUrl} replace />}
            <AccountLayout bottomLinks={<BottomLink />}>
                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm<UserData>
                    onSubmit={onSubmit}
                    resolver={schemaResolver}
                    defaultValues={{ username: '', password: ''}}
                >
                    <Link to="/account/forget-password2" className="text-muted float-end">
                        <small>{t('아이디찾기')}</small>
                    </Link>
                    <p className="mb-1">아이디</p>
                    <FormInput 
                        type="text"
                        name="username"
                        placeholder='아이디를 입력해 주세요'
                        className='mb-3'
                        // style={{width:"99%", fontSize:"17px"}}
                    />
                    {/* <input className="mb-3 form-control"
                        style={{width:"99%", fontSize:"17px"}}
                        type="text"
                        name="username"
                        placeholder={t('아이디를 입력해주세요')}
                    /> */}
                    <Link to="/account/forget-password" className="text-muted float-end">
                        <small>{t('비밀번호찾기')}</small>
                    </Link>
                    <p className="mb-1">비밀번호</p>
                    <FormInput
                        type="password"
                        name="password"
                        placeholder='비밀번호를 입력해 주세요'
                        // className="mb-3"
                        style={{width:"99%", fontSize:"17px"}}
                    />
                    {/* 
                    <input className="mb-3 form-control"
                        type="password"
                        name="password"
                        placeholder={t('비밀번호를 입력해주세요')}
                        style={{width:"99%", fontSize:"17px"}}
                    /> */}

                    <div className="mt-3 mb-3 text-center d-grid">
                        <Button
                            variant="primary" type="submit"
                            disabled={loading}
                            style={{
                                borderRadius: "15px",
                                // padding: "1rem 5rem",
                                color: "white",
                                fontSize: "20px"
                            }}
                        >
                            로그인
                        </Button>
                    </div>
				</VerticalForm>
			 {/* Row 태그에 버튼이 3개일시 style={{paddingLeft:"15%"}} */}
                {/* <div>
                    <p className="text-muted text-center ">다른계정으로 로그인</p>
                    <Row>
                       
                        <Col xs={3}>
                            <Button variant='link' style={{boxShadow:"none",outline:"none"}}>
                                <img src={google} style={{ width: "50px", height: "50px" }} />
                            </Button>
                        </Col>
                        <Col xs={3}>
                            <Button variant='link' style={{boxShadow:"none",outline:"none"}}>
                                <img src={kakao} style={{ width: "50px", height: "50px" }} />
                            </Button>
                        </Col>
                        <Col xs={3}>
                            <Button variant='link' style={{boxShadow:"none",outline:"none"}}>
                                <img src={github} style={{ width: "50px", height: "50px" }} />
                            </Button>
                        </Col>
                        <Col xs={3}>
                            <Button
                                onClick={() => window.open('http://auth.rba.kr/oauth2/authorize?response_type=code&client_id=helpfrontend&scope=openid&redirect_uri=http://127.0.0.1:4000/code')}
                                style={{ width: "55px", height: "55px" }}>
                                HR
                            </Button>
                        </Col>
                    </Row>
                   
                </div> */}
                <div className="text-center ">
                    <Button variant="Link" className="text-muted float-center font-15" onClick={toggleSignUp}>
                        회원가입
                    </Button>
                </div>
            </AccountLayout>


            {/* 회원가입 modal */}
            <Modal show={signUpModal} onHide={toggleSignUp}>
                <Modal.Body>
                    <div className="text-center mt-2 mb-4">
                        <Link to="#">
                            <span>
                                <img src={logodark} alt="" height="28" />
                            </span>
                        </Link>
                    </div>
                    <Tab.Container defaultActiveKey="1">
                        <Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link href="#" eventKey="1" className="nav-link rounded-3">
                                    <span style={{fontSize:"17px"}}>근로자</span>
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item as="li" className="nav-item">
                                <Nav.Link href="#" eventKey="2" className="nav-link rounded-3">
                                    <span style={{fontSize:"17px"}}>사용자</span>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="1">
                                <Login2 />
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                                <Confirm2 />
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Login;
