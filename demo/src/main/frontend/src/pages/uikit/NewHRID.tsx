import { Button, Alert, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './NewHRAccountLayout';
import { useForgetPassword } from './hooks';
import ChatProfile from 'pages/apps/Chat/ChatProfile';
import { useModal } from './hooks';
import { TextField, styled,} from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2';


// 아이디찾기

type UserData = {
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



const NewHRID = () => {
    const { t } = useTranslation();
    const { loading, passwordReset, resetPasswordSuccess, error, schemaResolver, onSubmit } = useForgetPassword();
    const { isOpen, className, toggleModal, openModalWithClass } = useModal();

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

    //   Swal.fire({
    //     title: '1개의 아이디를 찾았습니다',
    //     text:'id입력',
    //     showClass: {
    //       popup: 'animate__animated animate__fadeInDown'
    //     },
    //     hideClass: {
    //       popup: 'animate__animated animate__fadeOutUp'
    //     }
    //   })
    
    
    const FindID = () => {
        Swal.fire({
            icon: 'success',                 
            title: '1개의 아이디를 찾았습니다.',
            text: 'nice@nice.com',
            confirmButtonText:'확인',
        });
    };
      
    return (
        <>
            <AccountLayout bottomLinks={<BottomLink />}>
                <div className="text-center m-auto">
                    <h4 className="text-dark-50 text-center mt-0 font-weight-bold">{t('아이디 찾기')}</h4>
                    <p className="text-muted mb-4">
                        {t("회원가입 시 등록한 정보를 입력해 주세요")}
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
                                label="이름을 입력해 주세요"
                                variant="outlined"
                                className='mb-3'
                                style={{ width: "99%", fontSize: "17px" }}
                            />
                        </Row>
                        <Row style={{paddingLeft:"10px",paddingRight:"10px"}}>
                            <CssTextField
                                id=""
                                label="이메일을 입력해 주세요"
                                variant="outlined"
                                className='mb-3'
                                type="email"
                                style={{ width: "99%", fontSize: "17px" }}
                            />
                        </Row>
                        
                        <div className="mt-2 text-center d-grid">
                            <Button 
                            variant="primary" type="submit" 
                            disabled={loading} 
                            // onClick={() => openModalWithClass('primary')}
                            onClick={FindID}
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
                        {/* <Modal show={isOpen} onHide={toggleModal}>
                            <Modal.Header
                                onHide={toggleModal}
                                closeButton
                            // className={className('modal-colored-header', 'bg-' + className)}
                            >
                                <h4 className="modal-title ">아이디찾기</h4>
                            </Modal.Header>
                            <Modal.Body>
                                <h4 className="mt-0">아이디찾기가 완료되었습니다</h4>
                                <h5 className="text-center text-black mt-3"></h5>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="light" onClick={toggleModal}>
                                    닫기
                                </Button>
                            </Modal.Footer>
                        </Modal> */}
                    </VerticalForm>
                )}
            </AccountLayout>
        </>
    );
};

export default NewHRID;