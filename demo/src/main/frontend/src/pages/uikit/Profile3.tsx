import { Row, Col, Card, Button, Form, } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Control, FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import axios from 'axios';
import { encode } from 'base-64';
import { logoutUser } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import React from 'react';
import Myinfo from './Myinfo';
import Companyinfo from './Companyinfo';
import { FormInput } from 'components';

const Profile3 = () => {

    //이름
    const [realname, setRealname] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setRealname(JSON.parse(data).realname);
    }, []);

    // 회사명
    const [division, setDivision] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setDivision(JSON.parse(data).division);
    }, []);

    // 이메일
    const [username, setUsername] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setUsername(JSON.parse(data).username);
    }, []);

    // 핸드폰번호
    const [phonenumber, setPhonenumber] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setPhonenumber(JSON.parse(data).phonenumber);
    }, []);

    // 사업자등록번호
    const [businessNumber, setBusinessNumber] = useState("");
    useEffect(() => {
        var data: any = sessionStorage.getItem("hyper_user");
        setBusinessNumber(JSON.parse(data).businessNumber);
    }, []);

    // 비밀번호변경
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({
        id: '',
        password: '',
        newPassword: '',
        newPasswordRetry: '',
        phoneNum: '',
        sosog: '',
        jiggeub: '',
        jigchaeg: '',

    });

    const { id, password, newPassword, newPasswordRetry, 
        phoneNum, sosog, jiggeub, jigchaeg
    } = inputs;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    // 추가된부분
    const MODIFY = 1;
    const [state, setState] = useState(MODIFY);

    

    const onSubmit = async () => {
        if (newPassword !== newPasswordRetry) {
            alert('두 비밀번호가 같지않습니다.');
        } else {
            try {
                const res = await axios.post('/changepassword', {
                    'id': encode(id),
                    'password': encode(password),
                    'newPassword': encode(newPassword),
                    'newPasswordRetry': encode(newPasswordRetry),
                });
                console.log(res);
                const message = res.data.message;
                if (message == 'PASSWORD INVALID') {
                    alert('패스워드가 틀렸습니다.');
                    setInputs({
                        ...inputs,
                        password: '',
                        newPassword: '',
                        newPasswordRetry: '',
                    });
                } else if (message == 'INVALID') {
                    alert('유효하지않습니다.');
                } else {
                    alert('비멀번호 변경에 성공햇습니다, 다시로그인해주시기 바랍니다.');
                    dispatch(logoutUser());
                }

            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        const sessionData: string | null = sessionStorage.getItem('hyper_user');
        // console.log(sessionData);
        /*
        const user_id = JSON.parse(sessionData).user_id;
        if (user_id) {
            setInputs({
                ...inputs,
                id: user_id,
            });
        }
        */
    }, [id]);


    return (
        <>
            <Row className="mt-3">
                <Col xxl={4} xl={5}>
                    <Myinfo />

                    <Companyinfo />
                </Col>
                <Col xxl={8} xl={7}>
                    <Card>
                        <Card.Body>
                            <div>
                                <p className="mb-3 text-center bg-light p-2" style={{ fontSize: "20px" }} >
                                    프로필 수정
                                </p>
                            </div>
                            <Row>
                                <Col md={6}>
                                    <p className="mb-1" style={{fontSize:"15px"}}>이름</p>
                                    <input
                                        type="text"
                                        name="realname"
                                        className="form-control mb-3"
                                        placeholder={realname}
                                        key="firstname"
                                        disabled

                                    />
                                </Col>
                                <Col md={6}>
                                <p className="mb-1" style={{fontSize:"15px"}}>이메일</p>
                                    <input
                                        type="text"
                                        name="id"
                                        id="id"
                                        placeholder={username}
                                        className="form-control mb-3"
                                        key="email"
                                        onChange={onChangeHandler}
                                        value={id || ''}
                                        disabled
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <p className="mb-1" style={{ fontSize: "15px" }}>핸드폰번호</p>
                                    {state ?
                                        <input
                                            type="string"
                                            name="phoneNum"
                                            placeholder={phonenumber}
                                            className="form-control mb-3"
                                            key="phoneNum"
                                            value={phoneNum}
                                            onChange={onChangeHandler}
                                            disabled
                                        />
                                        :
                                        <input
                                            type="string"
                                            name="phoneNum"
                                            placeholder={phonenumber}
                                            className="form-control mb-3"
                                            key="phoneNum"
                                            value={phoneNum}
                                            onChange={onChangeHandler}
                                        />
                                    }
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <p className="mb-1" style={{ fontSize: "15px" }}>새 비밀번호</p>
                                    {state ?
                                        <input
                                            type="password"
                                            name="newPassword"
                                            id="examplePassword2"
                                            placeholder="새 비밀번호를 입력해주세요."
                                            onChange={onChangeHandler}
                                            value={newPassword}
                                            className="form-control mb-3"
                                            disabled
                                        />
                                        :
                                        <input
                                            type="password"
                                            name="newPassword"
                                            id="examplePassword2"
                                            placeholder="새 비밀번호를 입력해주세요."
                                            onChange={onChangeHandler}
                                            value={newPassword}
                                            className="form-control mb-3"
                                        />
                                    }
                                </Col>
                                <Col md={6}>
                                    <p className="mb-1" style={{ fontSize: "15px" }}>새 비밀번호 확인</p>
                                    {state ?
                                        <input
                                            type="password"
                                            name="newPasswordRetry"
                                            id="examplePassword2"
                                            placeholder="새 비밀번호를 다시 입력해주세요."
                                            onChange={onChangeHandler}
                                            value={newPasswordRetry}
                                            className="form-control mb-3"
                                            disabled
                                        />
                                        :
                                        <input
                                            type="password"
                                            name="newPasswordRetry"
                                            id="examplePassword2"
                                            placeholder="새 비밀번호를 다시 입력해주세요."
                                            onChange={onChangeHandler}
                                            value={newPasswordRetry}
                                            className="form-control mb-3"
                                        />
                                    }
                                </Col>
                            </Row>
                            <hr />
                            <div>
                                <p className="mb-0" style={{ fontSize: "17px" }}>
                                    ※ 회사정보 설정 안내
                                </p>
                                <p style={{ fontSize: "15px" }}>
                                    회사정보가 변경된 경우 <strong style={{ color: "red" }}>국세청에 등록된 회사정보</strong> 를 기준으로 자동 갱신됩니다.
                                </p>
                            </div>
                            <Row>
                                <Col md={6}>
                                    <p className="mb-1" style={{ fontSize: "15px" }}>회사명</p>
                                    <input
                                        type="text"
                                        name="SaeopjangNm"
                                        placeholder={division}
                                        className="form-control mb-3"
                                        key="SaeopjangNm"
                                        disabled
                                    />
                                </Col>
                                <Col md={6}>
                                <p className="mb-1" style={{ fontSize: "15px" }}>사업자등록번호</p>
                                    <input
                                        type="number"
                                        name="BusinessNumber"
                                        placeholder={businessNumber}
                                        className="form-control mb-3"
                                        key="BusinessNumber"
                                        disabled
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <p className="mb-1" style={{ fontSize: "15px" }}>주소</p>
                                    <input
                                        type="text"
                                        name="SaeopjangAddr"
                                        placeholder="서울시 강서구 마곡동 "
                                        className="form-control mb-3"
                                        key="SaeopjangAddr"
                                        disabled
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <p className="mb-1" style={{ fontSize: "15px" }}>소속</p>
                                    {state ?
                                        <input
                                            type="text"
                                            name="sosog"
                                            placeholder="인사"
                                            className="form-control mb-3"
                                            key="sosog"
                                            value={sosog}
                                            onChange={onChangeHandler}
                                            disabled
                                        />
                                        :
                                        <input
                                            type="text"
                                            name="sosog"
                                            placeholder="인사"
                                            className="form-control mb-3"
                                            key="sosog"
                                            value={sosog}
                                            onChange={onChangeHandler}
                                        />
                                    }
                                </Col>
                                <Col md={4}>
                                    <p className="mb-1" style={{ fontSize: "15px" }}>직급</p>
                                    {state ?
                                        <input
                                            type="text"
                                            name="jiggeub"
                                            placeholder="대리"
                                            className="form-control mb-3"
                                            key="jiggeub"
                                            value={jiggeub}
                                            onChange={onChangeHandler}
                                            disabled
                                        />
                                        :
                                        <input
                                            type="text"
                                            name="jiggeub"
                                            placeholder="대리"
                                            className="form-control mb-3"
                                            key="jiggeub"
                                            value={jiggeub}
                                            onChange={onChangeHandler}
                                        />
                                    }
                                </Col>
                                <Col md={4}>
                                    <p className="mb-1" style={{ fontSize: "15px" }}>직책</p>
                                    {state ?
                                        <input
                                            type="text"
                                            name="jigchaeg"
                                            placeholder="팀원"
                                            className="form-control mb-3"
                                            key="jigchaeg"
                                            value={jigchaeg}
                                            onChange={onChangeHandler}
                                            disabled
                                        />
                                        :
                                        <input
                                            type="text"
                                            name="jigchaeg"
                                            placeholder="팀원"
                                            className="form-control mb-3"
                                            key="jigchaeg"
                                            value={jigchaeg}
                                            onChange={onChangeHandler}
                                        />
                                    }
                                </Col>
                            </Row>
                            <div className="text-end">
                                <Row>
                                    {state ?
                                        <Button variant="primary" type="button" style={{ width: "99%" }} onClick={() => setState(MODIFY)}>
                                            수정
                                        </Button>
                                        :
                                        <Button variant="primary" type="button" style={{ width: "99%" }} onClick={() => onSubmit()}>
                                            저장
                                        </Button>
                                    }
                                </Row>
                                {/* <Row>
                                    <Col xs={6}>
                                        <Button variant="primary" type="button" style={{width:"99%"}}  >
                                            수정
                                        </Button>
                                    </Col>
                                    <Col xs={6}>
                                        <Button variant="primary" type="button" style={{width:"99%"}} onClick={()=>onSubmit()}>
                                            저장
                                        </Button>
                                    </Col>
                                </Row> */}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Profile3;