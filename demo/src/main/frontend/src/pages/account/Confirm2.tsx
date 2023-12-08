// 회원가입 사용자 페이지

import { Button, Alert, Row, Col, Modal, Tab, Nav } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import { useLogin } from './hooks';
import KakaoLogin from './KakaoLogin';
import NaverLogin from './NaverLogin';
// import ReCAPTCHA from "react-google-recaptcha";

import { useToggle } from 'hooks';
import { useModal } from './hooks';
import logodark from 'assets/images/logo-dark.png';
import { useTypeahead } from './hooks';
import Select from 'react-select';
// import { Typeahead } from 'react-bootstrap-typeahead';
import classNames from 'classnames';
import { useState } from 'react';
import axios from 'axios';


// 사용자용 회원가입

type TabContentItem = {
    id: string;
    icon: string;
    title: string;
    text: string;
};


export type SearchData = {
    addr: string;
    opaBoheomFg: string;
    post: string;
    saeopFg: string;
    saeopjaDrno: string;
    saeopjangNm: string;
    sangsiInwonCnt: string;
    seongripDt: string;
    sjEopjongCd: string;
    sjEopjongNm: string;
    businessNumber: string;
}


export type UserData = {
    username: string;
    password: string;
};

const Confirm2 = () => {
    const [checked, setChecked] = useState<boolean>(false);
    const [searchData, setSearchData] = useState<SearchData | null>();
    const [businessNumber, setBusinessNumber] = useState("");
    const [inputs, setInputs] = useState({
        "username": "",
        "password": "",
        "re_password": "",
        "realname": "",
        "email": "",
        "phonenumber": "",
        "companyInfo": "",
        "role": "ROLE_USER",
    });

    const onChangeBusinessNumber = (e: { target: any; }) => {
        setBusinessNumber(e.target.value);
    }

    const { username, password, re_password, realname, email, phonenumber, companyInfo } = inputs;

    const onChange = (e: { target: { value: string; name: string; }; }) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const checkValid = () => {
        var emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        var passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/i;
        var phonenumberRegExp = /^\d{11}$/;
        const result = username.match(emailRegExp);
        console.log("result : ", result);
        if (!username) {
            alert("아이디를 입력해 주세요.");
            return false;
        }
        if (!password) {
            alert("비밀번호를 넣어주세요.");
            return false;
        }
        if (!password.match(passwordRegExp)) {
            alert("비밀번호 양식을 맞춰주세요.");
            return false;
        }
        if (!re_password) {
            alert("비밀번호 확인을 넣어주세요.");
            return false;
        }
        if (password !== re_password) {
            alert("비밀번호와 비밀번호 확인이 다릅니다.");
            return false;
        }
        if (!email) {
            alert("이메일을 입력해 주세요.");
            return false;
        }
        if (!email.match(emailRegExp)) {
            alert("이메일 양식을 맞춰주세요.");
            return false;
        }
        if (!checked) {
            alert("약관에 동의해주세요.");
            return false;
        }
        return true;
    }

    const signSubmit = async () => {

        if (!checkValid()) {
            return;
        }
        const data = await axios.post("join", inputs);
        if (data) {
            if (data.data === "SUCCESS") {
                alert("성공");
                window.location.href = "/";
            } else if (data.data === "ALREADY") {
                alert("이메일이 중복됩니다.");
            } else {
                alert("오류입니다. 관리자에게 얘기해주세요.");
            }
        }
    }

    const companyFind = async () => {
        console.log("companyInfo : ", businessNumber);
        try {
            const result = await axios.post("companyfindorsave", {
                "companyInfo": businessNumber
            });
            if (!result) {
                setSearchData(null);
                return;
            }
            const data: SearchData = result.data;
            setSearchData(data);
        } catch (error) {
            console.log(error);
            setSearchData(null);
        }
    }

    const selectSearchData = () => {
        const inputData = searchData?.saeopjangNm + "-" + searchData?.businessNumber;
        setInputs({
            ...inputs,
            companyInfo: inputData
        });
        // setBusinessNumber
    }

    const [isOpen2, toggleSosog] = useToggle();
    const [isOpen1, toggleBox] = useToggle();
    return (
        <Row>
            <form className="ps-3 pe-3" action="#">
                <div className="mb-3">
                    <p className="mb-1">
                        아이디
                    </p>
                    <input
                        className="form-control"
                        name="username"
                        type="input"
                        id="username"
                        required
                        placeholder="아이디를 입력해 주세요"
                        value={username}
                        onChange={onChange}
                        style={{ fontSize: "17px" }}
                    />
                </div>
                <div className="mb-3">
                    <p className="mb-1">
                        비밀번호
                    </p>
                    <input
                        className="form-control"
                        name="password"
                        type="password"
                        required
                        id="password"
                        value={password}
                        onChange={onChange}
                        placeholder="비밀번호(영문, 숫자, 특수문자 포함 8~12자리)"
                        style={{ fontSize: "17px" }}
                    />
                </div>
                <div className="mb-3">
                    <p className="mb-1">
                        비밀번호 확인
                    </p>
                    <input
                        className="form-control"
                        name="re_password"
                        type="password"
                        required
                        id="passwordRetry"
                        value={re_password}
                        onChange={onChange}
                        placeholder="비밀번호를 다시 입력해 주세요"
                        style={{ fontSize: "17px" }}
                    />
                </div>
                <div className="mb-3">
                    <p className="mb-1">
                        이름
                    </p>
                    <input
                        className="form-control"
                        type="input"
                        id="username"
                        name="realname"
                        required
                        value={realname}
                        onChange={onChange}
                        placeholder="나이스"
                        style={{ fontSize: "17px" }}
                    />
                </div>
                <div className="mb-3">
                    <p className="mb-1">
                        이메일
                    </p>
                    <input
                        className="form-control"
                        name="email"
                        type="email"
                        id="email"
                        placeholder="nice@nicenomu.com"
                        value={email}
                        onChange={onChange}
                        style={{ fontSize: "17px" }}
                    />
                </div>
                <div className="mb-3">
                    <p className="mb-1">
                        연락처
                    </p>
                    <input
                        className="form-control"
                        type="input"
                        name="phonenumber"
                        id="username"
                        required
                        value={phonenumber}
                        onChange={onChange}
                        placeholder="01012345678"
                        style={{ fontSize: "17px" }}
                    />
                </div>
                <Row>
                    <Col xs={9}>
                        <div className="mt-1">
                            <p className="mb-1">
                                소속
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    <input type="checkbox" onClick={toggleBox}></input> 30인 이상 사업장
                                </span>
                            </p>
                            <input
                                className="form-control"
                                name="companyInfo"
                                type="text"
                                id="searchoffice"
                                readOnly
                                value={companyInfo}
                                onChange={onChange}
                                placeholder="회사명을 입력해 주세요"
                                style={{ fontSize: "17px" }}
                            />
                            {/* <input style={{width: "85%", height: "40px", border: "1px solid #EEEEEE", outline: "none" }} /> */}
                        </div>
                    </Col>
                    <Col xs={3} >
                        <Button className="mt-4" variant="primary" onClick={toggleSosog} style={{ width: "99%", padding: "8px" }}>
                            검색
                        </Button>
                    </Col>
                </Row>

                <div className="mb-3 mt-3">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="customCheck1" checked={checked} onChange={e => setChecked(!checked)} />
                        <label className="form-check-label" htmlFor="customCheck1" style={{ fontSize: "15px" }}>
                            <Link to="/account/Confirm">서비스 이용약관</Link> 및 <Link to="/account/Logout2">개인정보취급방침</Link>
                            에 대한 내용을 모두 확인하였으며, 이에 동의합니다
                        </label>
                    </div>
                </div>
                <div className="mb-3 text-center">
                    <Button type="submit" onClick={signSubmit} style={{ width: "99%", fontSize: "19px" }}>
                        회원가입
                    </Button>
                </div>
            </form>
            {/* 회사검색 */}

            <Modal show={isOpen2} onHide={toggleSosog} backdrop={"static"}
            // style={{
            //     position: "fixed",
            //     top: "70%",
            //     left: "50%",
            //     transform: "translate(-50%, -50%)"
            // }}
            >
                <Modal.Header style={{ backgroundColor: "#727cf5", paddingBottom: "5px" }} closeButton
                >
                    <p className="text-white" style={{ fontSize: "25px" }}>회사찾기</p>

                </Modal.Header>
                <Modal.Body className="company ps-3 pe-3">
                    <div className="text-start mt-2 mb-4">
                        <p className="mb-0" style={{ fontSize: "16px" }}>회사명 또는 사업자 등록번호를 입력해 주세요</p>
                        <p style={{ fontSize: "16px" }}>만약 회사명으로 검색 안될 시 사업자 등록번호로 검색해 주세요</p>
                    </div>
                    <Row>
                        <Col xs={9}>
                            <div className="mb-0">
                                <input
                                    className="form-control"
                                    type="text"
                                    id="searchoffice2"
                                    onChange={onChangeBusinessNumber}
                                    value={businessNumber}
                                    required
                                    placeholder="-를 제외한 10자리"
                                    style={{ fontSize: "17px" }}
                                />
                            </div>
                        </Col>
                        <Col xs={3}>
                            <Button onClick={companyFind} style={{ width: "99%", padding: "7px" }}>
                                검색
                            </Button>
                        </Col>
                    </Row>
                    <div>
                        {
                            searchData
                                ?
                                <>
                                    {searchData.saeopjangNm} - {searchData.businessNumber}
                                    <Button onClick={selectSearchData}>
                                        선택
                                    </Button>
                                </>
                                :
                                null
                        }
                    </div>
                    <Row className="mt-3" style={{ paddingLeft: "10px", paddingRight: "5px" }}>
                        <Button  type="button" onClick={toggleSosog} style={{ width: "99%", fontSize: "18px" }}>
                            확인
                        </Button>
                    </Row>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button size="sm" type="button" onClick={toggleSosog} >
                        확인
                    </Button>
                </Modal.Footer> */}
                <hr className="mb-0" />
            </Modal>

            {/* 30인이상 사업장 문구 */}

            <Modal show={isOpen1} onHide={toggleBox}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton>
                    <h4 className="modal-title text-light">가입문의 02 - 835 - 7700</h4>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-center">30인 이상 사업장 서비스는 구축 중입니다</p>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </Row>

    );
}

export default Confirm2;

