import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Toast, ToastContainer, Form, Button, ToastContainerProps, ListGroup, FloatingLabel, Modal,} from 'react-bootstrap';
import { useToggle } from 'hooks';
import { PageTitle, FormInput, FileUploader2, } from 'components';
import { useForm } from 'react-hook-form';
import MaskedInput from 'react-text-mask';


type Stack = {
    time: string;
    desc: string;
};



const DefaultToasts = () => {
    const [isOpen, , , hide] = useToggle(true);
    const [isOpenTranslucent, , , hideTranslucent] = useToggle(true);
    const [isOpenPlacement, , , hidePlacement] = useToggle(true);

    const [stacked, setStacked] = useState<Stack[]>([
        {
            time: 'just now',
            desc: 'See? Just like this.',
        },
        {
            time: '2 seconds ago',
            desc: 'Heads up, toasts will stack automatically',
        },
    ]);


    const methods = useForm({
        defaultValues: {
            password: '12345',
            statictext: 'email@example.com',
            color: '#727cf5',
        },
    });

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    /*
     * handle close
     */
    const handleClose = (index: number) => {
        const list = [...stacked];
        list.splice(index, 1);
        setStacked(list);
    };

    return (
        <Card>
            <Card.Body>
                <p className="text-gray mb-3">
                    <strong className="font-18">1. 기본정보</strong>
                    <span className="ms-2 font-11">*필수입력항목</span>
                </p>
                <Row>
                    <Col xl={6}>
                        <form onSubmit={handleSubmit(() => { })}>
                            <FormInput
                                label="이름 *"
                                type="text"
                                name="name"
                                containerClass={'mb-3'}
                                register={register}
                                key="text"
                                errors={errors}
                                control={control}
                            />
                        </form>
                    </Col>
                    <Col xl={6}>
                        <FormInput
                            name="gugjeog"
                            label="국적 *"
                            type="select"
                            containerClass="mb-3"
                            className="form-select"
                            register={register}
                            key="select"
                            errors={errors}
                            control={control}
                        >
                            <option>내국인</option>
                            <option>외국인</option>
                        </FormInput>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <FormInput
                            label="핸드폰번호 *"
                            type="number"
                            name="phoneNum"
                            containerClass={'mb-3'}
                            register={register}
                            key="number"
                            errors={errors}
                            control={control}
                        />
                    </Col>
                    <Col xl={6}>
                        <FormInput
                            label="주민등록번호 *"
                            type="number"
                            name="juminNum"
                            containerClass={'mb-3'}
                            register={register}
                            key="number"
                            errors={errors}
                            control={control}
                        />
                    </Col>
                    <Col md={3}>
                        <div className="mb-3">
                            <label className="form-label">주민등록번호</label>
                            <MaskedInput
                                mask={[
                                    /[0-9]/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    '-',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                ]}
                                placeholder="130505-3******"
                                className="form-control"
                            />
                        </div>
                    </Col>
                    <Col md={3}>
                        <FormInput
                            label="이메일"
                            type="email"
                            name="email"
                            containerClass={'mb-3'}
                            register={register}
                            key="email"
                            errors={errors}
                            control={control}
                        />

                    </Col>
                </Row>
                <Row>

                    <Col xl={9}>
                        <Row>
                            <Col xl={4}>
                                <FormInput labelClassName="mt-1"
                                    name="Bank"
                                    label="은행선택"
                                    type="select"
                                    containerClass="mb-3"
                                    className="form-select"
                                    register={register}
                                    key="select"
                                    errors={errors}
                                    control={control}
                                >
                                    <option>KB국민은행</option>
                                    <option>우리은행</option>
                                    <option>신한은행</option>
                                    <option>하나은행</option>
                                    <option>SC제일은행</option>
                                    <option>한국씨티은행</option>
                                    <option>농협</option>
                                    <option>수협</option>
                                    <option>신협</option>
                                    <option>새마을금고</option>
                                    <option>케이뱅크</option>
                                    <option>카카오뱅크</option>
                                    <option>토스뱅크</option>
                                    <option>BNK부산은행</option>
                                    <option>BNK경남은행</option>
                                    <option>DGB대구은행</option>
                                    <option>전북은행</option>
                                    <option>광주은행</option>
                                    <option>제주은행</option>
                                    <option>우체국</option>
                                    <option>새마을금고</option>
                                </FormInput>
                            </Col>
                            <Col xl={4}>
                                <FormInput labelClassName="mt-1"
                                    label="계좌번호"
                                    type="number"
                                    name="gyejwaNum"
                                    containerClass={'mb-3'}
                                    register={register}
                                    key="number"
                                    errors={errors}
                                    control={control}
                                />
                            </Col>
                            <Col xl={4}>
                                <Button className="mt-4" variant="primary" type="submit">
                                    예금주 조회
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

const CustomToast = () => {
    const [isOpenCustom1, , , hideCustom1] = useToggle(true);
    const [isOpenCustom2, , , hideCustom2] = useToggle(true);
    const [isOpenCustom3, , , hideCustom3] = useToggle(true);
    const [isOpenCustom4, , , hideCustom4] = useToggle(true);
    const [sigdaeModal, togglesigdae] = useToggle();
    const [chayujibiModal, togglechayujibi] = useToggle();


    const methods = useForm({
        defaultValues: {
            password: '12345',
            statictext: 'email@example.com',
            color: '#727cf5',
        },
    });

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;


    return (
        <Card>
            <Card.Body>
                <p className="text-gray mb-3">
                    <strong className="font-18">2. 계약형태</strong>
                    <span className="ms-2 font-11">*필수입력항목</span>
                </p>
                <Row>
                    <Col xl={6}>
                        
                        {/* <div className="d-grid">
                            <label htmlFor="username" className="form-label">
                                계약형태
                            </label>
                            <Button variant="outline-light">계약형태에따른 근로자 선택하기</Button>
                        </div> */}
                        
                        <FormInput
                            name="geunlohyeongtae"
                            label="계약형태 *"
                            type="select"
                            containerClass="mb-3"
                            className="form-select"
                            register={register}
                            key="select"
                            errors={errors}
                            control={control}
                        >
                            <option>정규직</option>
                            <option>계약직</option>
                            <option>일용직/아르바이트</option>
                            <option>사업소득</option>
                            <option>기타소득</option>
                        </FormInput>
                    </Col>
                    <Col xl={6}>
                        <FormInput
                            label="재직상태 *"
                            type="select"
                            name="jaejig"
                            containerClass={'mb-3'}
                            register={register}
                            key="select"
                            errors={errors}
                            control={control}
                        >
                            <option>재직</option>
                            <option>퇴사</option>
                            <option>휴직</option>
                        </FormInput>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <FormInput
                            label="입사일 *"
                            type="date"
                            name="date"
                            containerClass={'mb-3'}
                            register={register}
                            key="date"
                            errors={errors}
                            control={control}
                        />
                    </Col>
                    <Col xl={6}>
                        <FormInput
                            label="퇴사일"
                            type="date"
                            name="date"
                            containerClass={'mb-3'}
                            register={register}
                            key="date"
                            errors={errors}
                            control={control}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <FormInput
                            label="월급여액"
                            type="number"
                            name="wolgeubyeo"
                            containerClass={'mb-3'}
                            register={register}
                            key="number"
                            errors={errors}
                            control={control}
                            placeholder="식대, 차량유지비, 4대보험 포함"
                        />
                    </Col>
                    <Col xl={6}>
                        <strong>식대</strong>
                        <span className="ms-1 text-muted font-11 ">(월 10만원 비과세 가능)</span>
                        <Button className="float-end " variant="link" size="sm"  onClick={togglesigdae}>
                            입력
                        </Button>
                        <FormInput
                            name="sigdae"
                            type="select"
                            containerClass="mb-3"
                            className="form-select"
                            register={register}
                            key="select"
                            errors={errors}
                            control={control}
                            placeholder="월 10만원 비과세 가능"
                        >
                            <option>포함</option>
                            <option>미포함</option>
                        </FormInput>
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <strong>차량유지비</strong>
                        <span className="ms-1 text-muted font-11 ">(월 20만원 비과세 가능)</span>
                        <Button className="float-end " variant="link" size="sm" onClick={togglechayujibi}>
                            입력
                        </Button>
                        <FormInput
                            name="chayujibi"
                            type="select"
                            containerClass="mb-3"
                            className="form-select"
                            register={register}
                            key="select"
                            errors={errors}
                            control={control}
                        >
                            <option>포함</option>
                            <option>미포함</option>
                        </FormInput>
                    </Col>
                    <Col xl={6}>
                        <FormInput
                            label="부양가족수"
                            type="text"
                            name="buyanggajog"
                            containerClass={'mb-3'}
                            register={register}
                            key="text"
                            errors={errors}
                            control={control}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <FormInput
                            label="근로조건메모"
                            type="text"
                            name="memo"
                            containerClass={'mb-3'}
                            register={register}
                            key="text"
                            errors={errors}
                            control={control}
                            placeholder="특이사항"
                        />
                    </Col>
                </Row>

                {/* 식대  */}
                <Modal show={sigdaeModal} onHide={togglesigdae}>
                    <Modal.Header onHide={togglesigdae} closeButton>
                        <h4 className="modal-title">식대직접입력</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="ps-3 pe-3" action="#">
                            <div className="mb-3">
                                <label htmlFor="sigdae" className="form-label">
                                    
                                </label>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="sigdae"
                                    required
                                    placeholder="(원)"
                                />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={togglesigdae}>
                            닫기
                        </Button>{' '}
                        <Button variant="primary" onClick={togglesigdae}>
                            저장
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* 차량 */}
                <Modal show={chayujibiModal} onHide={togglechayujibi}>
                    <Modal.Header onHide={togglechayujibi} closeButton>
                        <h4 className="modal-title">차량유지비 직접입력</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="ps-3 pe-3" action="#">
                            <div className="mb-3">
                                <label htmlFor="chayujibi" className="form-label">
                                    
                                </label>
                                <input
                                    className="form-control"
                                    type="number"
                                    id="chayujibi"
                                    required
                                    placeholder="(원)"
                                />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light" onClick={togglechayujibi}>
                            닫기
                        </Button>{' '}
                        <Button variant="primary" onClick={togglechayujibi}>
                            저장
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const PlacementToast = () => {
    const [position, setPosition] = useState<ToastContainerProps['position']>('top-start');
    const [jigjeobModal, togglejigjeob] = useToggle();

    const methods = useForm({
        defaultValues: {
            password: '12345',
            statictext: 'email@example.com',
            color: '#727cf5',
        },
    });

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    
    
    return (
        <Card>
            <Card.Body>
                <p className="text-gray mb-3">
                    <strong className="font-18">3. 입사서류</strong>
                    {/* <span className="ms-2 font-11">*필수입력항목</span> */}
                </p>
                <Row>
                    <Col xl={3}>
                        <ListGroup.Item as="button" action onClick={togglejigjeob} className="text-center font-15 mb-3">
                            직접등록하기
                        </ListGroup.Item>
                    </Col>
                    <Col xl={3}>
                        <ListGroup.Item as="button" action  className="text-center font-15">
                            직원에게 서류 요청하기
                        </ListGroup.Item>
                    </Col>
                </Row>
                <Modal show={jigjeobModal} onHide={togglejigjeob}>
                    <Modal.Body>
                        <div className="text-center mt-2 mb-4 font-15">
                            <p>입사서류 선택</p>
                        </div>
                        <form className="ps-3 pe-3" action="#"> 
                            <div className="mb-1">
                                <p>
                                    <label htmlFor="username" className="form-label text-dark">
                                        신분증
                                    </label>
                                    <span className="ms-1 font-11 text-muted">(외국인등록증)</span>
                                    <FileUploader2
                                        onFileUpload={(files) => {
                                            console.log(files);
                                        }}
                                    />
                                </p>
                                <p>
                                    <label htmlFor="username" className="form-label text-dark">
                                        주민등록등본
                                    </label>
                                    <FileUploader2
                                        onFileUpload={(files) => {
                                            console.log(files);
                                        }}
                                    />
                                </p>
                                <p>
                                    <label htmlFor="username" className="form-label text-dark">
                                        근로계약서
                                    </label>
                                    <FileUploader2
                                        onFileUpload={(files) => {
                                            console.log(files);
                                        }}
                                    />
                                </p>
                                <p>
                                    <label htmlFor="username" className="form-label text-dark">
                                        차량등록증
                                    </label>
                                    <FileUploader2
                                        onFileUpload={(files) => {
                                            console.log(files);
                                        }}
                                    />
                                </p>
                                <p>
                                    <label htmlFor="username" className="form-label text-dark">
                                        보건증
                                    </label>
                                    <FileUploader2
                                        onFileUpload={(files) => {
                                            console.log(files);
                                        }}
                                    />
                                </p>

                                {/* <ListGroup.Item as="button" action className="text-center font-15">
                                    근로계약서
                                </ListGroup.Item> */}
                                {/* <input
                                    className="form-control"
                                    type="file"
                                    id="username"
                                    required
                                    placeholder="dd"
                                /> */}
                            </div>
                            <div className="mt-3  text-center">
                                <button className="btn btn-primary me-2" type="submit">
                                   저장
                                </button>
                               
                                <Button className="text-sm-end" variant="light" onClick={togglejigjeob}>
                                    닫기
                                </Button>{' '}
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    );
};

const Notifications = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'직원정보입력'}
            />
            {/* toast */}
            <Row>
                <Col>
                    <DefaultToasts />
                </Col>
            </Row>

            <Row>
                <Col>
                    <CustomToast />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PlacementToast />
                </Col>
            </Row>
        </>
    );
};
        

export default Notifications;
