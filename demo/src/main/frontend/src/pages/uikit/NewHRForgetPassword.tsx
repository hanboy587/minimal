import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './NewHRAccountLayout';
import { useForgetPassword } from './hooks';
import { TextField, styled, } from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2';

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

const NewHRForgetPassword = () => {
    const { t } = useTranslation();
    const {
        loading, passwordReset, resetPasswordSuccess,
        error, schemaResolver, onSubmit
    } = useForgetPassword();

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

    const FindPassword = () => {
        Swal.fire({
            icon: 'success', 
            html: "가입하신 이메일로 임시 비밀번호를 보내드립니다 <br/>로그인 후 비밀번호를 다시 설정해 주세요",                
            title: '완료!',
            confirmButtonText:'확인',
        });
    };

    return (
        <>
            <AccountLayout bottomLinks={<BottomLink />}>
                <div className="text-center m-auto">
                    <h4 className="text-dark-50 text-center mt-0 font-weight-bold">{t('비밀번호 찾기')}</h4>
                    <p className="text-muted mb-4">
                        가입하신 이메일로 임시 비밀번호를 보내드립니다 <br />
                        로그인 후 비밀번호를 다시 설정해 주세요
                    </p>
                </div>

                {resetPasswordSuccess && <Alert variant="success">{resetPasswordSuccess.message}</Alert>}

                {error && !resetPasswordSuccess && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                {!passwordReset && (
                    <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
                        <Row style={{paddingLeft:"10px",paddingRight:"10px"}}>
                            <CssTextField
                                id=""
                                label="아이디를 입력해 주세요"
                                name="realname"
                                type="text"
                                style={{ width: "99%", fontSize: "17px" }}
                                className='mb-3'
                            />
                        </Row>
                        <Row style={{paddingLeft:"10px",paddingRight:"10px"}}>
                            <CssTextField
                                id=""
                                label="이메일을 입력해 주세요"
                                name="email"
                                type="email"
                                style={{ width: "99%", fontSize: "17px" }}
                                className='mb-3'
                            />
                        </Row>
                        <Row style={{paddingLeft:"10px",paddingRight:"10px"}}>
                            <CssTextField
                                id=""
                                label="이름을 입력해 주세요"
                                name="username"
                                type="text"
                                style={{ width: "99%", fontSize: "17px" }}
                                className='mb-3'
                            />
                        </Row>
                        <div className="mb-3 mb-0 text-center d-grid">
                            <Button variant="primary" 
                            type="submit" 
                            // disabled={loading}
                            onClick={FindPassword}
                                style={{
                                    borderRadius: "15px",
                                    padding: "1rem 4rem",
                                    color: "white",
                                    fontSize: "18px"
                                }}
                            >
                                조회
                            </Button>
                        </div>
                    </VerticalForm>
                )}
            </AccountLayout>
        </>
    );
};

export default NewHRForgetPassword;