import { Button, Alert, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import { useForgetPassword } from './hooks';
import ChatProfile from 'pages/apps/Chat/ChatProfile';
import { useModal } from './hooks';

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

const ForgetPassword2 = () => {
    const { t } = useTranslation();
    const { loading, passwordReset, resetPasswordSuccess, error, schemaResolver, onSubmit } = useForgetPassword();
    const { isOpen, className, toggleModal, openModalWithClass } = useModal();
    return (
        <AccountLayout bottomLinks={<BottomLink />}>
            <div className="text-center m-auto">
                <h4 className="text-dark-50 text-center mt-0 font-weight-bold">{t('아이디찾기')}</h4>
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
                <VerticalForm<UserData> onSubmit={onSubmit}>
                    <Row style={{paddingLeft:"10px"}}>
                        <p className="mb-0" style={{paddingLeft:"0px",color:"#a3a3a3"}}>이름 *</p>
                            <input className="form-control"
                                type="text"
                                name="userName"
                                placeholder='나이스'
                                style={{width:"99%", fontSize:"17px"}}
                                // containerClass={'mb-3'}
                            />
                    </Row>
                    <br />
                    <Row style={{paddingLeft:"10px"}}>
                        <p className="mb-0" style={{paddingLeft:"0px",color:"#a3a3a3"}}>이메일 *</p>
                        <input className="form-control"
                        type="email"
                        name="emails"
                        placeholder='nice@nicenomu.com'
                        style={{width:"99%", fontSize:"17px"}}
                        
                        />
                    </Row>
                    <br />
                    {/* <Row style={{paddingLeft:"10px"}}>
                        <p className="mb-0" style={{paddingLeft:"0px",color:"#a3a3a3"}}>전화번호</p>
                        <input className="form-control"
                            type="text"
                            name="phoneNum"
                            placeholder='01012345678'
                            style={{width:"99%", fontSize:"17px"}}
                        />
                    </Row>
                    <br /> */}
                    <div className="mt-2 text-center d-grid">
                        <Button variant="primary" type="submit" disabled={loading} onClick={() => openModalWithClass('primary')}
                            style={{
                                borderRadius: "15px",
                                padding: "1rem 5rem",
                                color: "white",
                                fontSize: "18px"
                            }}
                        >
                            조회
                        </Button>
                    </div>
                    <Modal show={isOpen} onHide={toggleModal}>
                        <Modal.Header
                            onHide={toggleModal}
                            closeButton
                        // className={className('modal-colored-header', 'bg-' + className)}
                        >
                            <h4 className="modal-title text-black">아이디찾기</h4>
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
                    </Modal>
                </VerticalForm>
            )}
        </AccountLayout>
    );
};

export default ForgetPassword2;
