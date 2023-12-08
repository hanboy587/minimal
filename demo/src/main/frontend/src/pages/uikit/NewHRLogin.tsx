import { Button, Modal, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm } from 'components';
import AccountLayout from 'pages/account/AccountLayout';
import { useToggle } from 'hooks';
import logodark from 'assets/images/logo-dark.png';
import { BaseSyntheticEvent } from 'react';
import { TextField, styled, } from '@mui/material';
import React from 'react';
import NewHRJoin from './NewHRJoin';
import { useLogin } from 'pages/account/hooks';


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

const NewHRLogin = () => {
    const { t } = useTranslation();

    let { loading, userLoggedIn, user, error, schemaResolver, onSubmit, redirectUrl, onCaptchaChange } = useLogin();

    // 비밀번호
    const [showPassword, setShowPassword] = React.useState(false);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    // 회원가입modal
    const [signUpModal, toggleSignUp] = useToggle();

    // textfieldCss
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#A0AAB4',
        }, //라벨색상
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E0E3E7',
            },
            '&:hover fieldset': {
                borderColor: '#B2BAC2',
            }, // 마우스 가져다 댈시 색상
            //   '&.Mui-focused fieldset': {
            //     borderColor: '#6F7E8C',
            //   },
        },
        fontFamily: [
            'Spoqa Han Sans Neo',
            'sans-serif',
        ],
    });

    return (
        <>
        <AccountLayout bottomLinks={<BottomLink />}>
            
            <VerticalForm<UserData>
                resolver={schemaResolver}
                defaultValues={{ username: '', password: ''}}
             onSubmit={function (data: Record<string, any>, event?: BaseSyntheticEvent<object, any, any> | undefined): unknown {
                    throw new Error('Function not implemented.');
                } }                // onSubmit={onSubmit}
                >
                <Link to="/account/forget-password2" className="text-muted float-end">
                    <small>아이디찾기</small>
                </Link>
                <CssTextField
                id="outlined-basic" 
                label="아이디를 입력해 주세요" 
                variant="outlined" 
                className='mb-3'
                style={{width:"99%", fontSize:"17px"}}
                />
                <Link to="/account/forget-password" className="text-muted float-end">
                    <small>비밀번호찾기</small>
                </Link>
                <CssTextField
                id="outlined-basic" 
                label="비밀번호를 입력해 주세요" 
                variant="outlined" 
                type="password"
                className='mb-3'
                style={{width:"99%", fontSize:"17px"}}
                />

                    <div className="mt-3 mb-3 text-center d-grid">
                        <Button
                            variant="primary" type="submit"
                            // disabled={loading}
                            style={{
                                borderRadius: "15px",
                                padding: "1rem 4rem",
                                color: "white",
                                fontSize: "20px"
                            }}
                        >
                            로그인
                        </Button>
                    </div>
                </VerticalForm>

                <div className="text-center ">
                    <Button variant="Link"
                        className="text-muted float-center font-15"
                        onClick={toggleSignUp}
                    >
                        회원가입
                    </Button>
                </div>
            </AccountLayout >


            {/* 회원가입 modal */}
            < Modal show={signUpModal} onHide={toggleSignUp}>
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
                                <Nav.Link href="#" eventKey="1" className="nav-link rounded-1" style={{ backgroundColor: "#E6EAF5" }}>
                                    <span style={{ fontSize: "17px", color: "#6666AA" }}>회원가입</span>
                                </Nav.Link>
                            </Nav.Item>

                            {/* <Nav.Item as="li" className="nav-item">
                                <Nav.Link href="#" eventKey="2" className="nav-link rounded-3">
                                    <span style={{ fontSize: "17px" }}>사용자</span>
                                </Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="1">
                                <NewHRJoin />
                            </Tab.Pane>
                            {/* <Tab.Pane eventKey="2">
                                <Confirm2 />
                            </Tab.Pane> */}
                        </Tab.Content>
                    </Tab.Container>
                </Modal.Body>
            </Modal >
        </>
    );
};

export default NewHRLogin;