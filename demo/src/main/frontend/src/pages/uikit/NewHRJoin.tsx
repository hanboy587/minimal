import { Button, Alert, Row, Col, Modal, Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useToggle } from 'hooks';
import { useModal } from './hooks';
// import { useTypeahead } from './hooks';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { TextField, RadioGroup, FormControl, InputLabel, styled, } from '@mui/material';
import Swal from "sweetalert2";

// 근로자 회원가입

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

const NewHRJoin = () => {

    const { className, toggleModal, openModalWithClass } = useModal();
    const [isOpen, toggleSosog] = useToggle();
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
        "role": "ROLE_WORKER",
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
        // console.log("result : ", result);
        if (!username) {
            alert("아이디를 넣어주세요.");
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
        if (!realname) {
            alert("성함을 입력해 주세요.");
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
        if (!phonenumber) {
            alert("전화번호를 입력해 주세요.");
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

        // const data = await axios.post("");
        const data = await axios.post("join", inputs);
        // if (data) {
        //     if (data.data === "SUCCESS") {
        //         alert("성공");
        //         Swal.fire('회원가입이 완료 되었습니다');
        //         window.location.href ="/apps/email/Complete";
        //     } else if (data.data === "ALREADY") {
        //         alert("이메일이 중복됩니다.");
        //     } else {
        //         alert("오류입니다. 관리자에게 얘기해주세요.");
        //     }
        // }
        if (data) {
            if (data.data === "SUCCESS") {
                Swal.fire({
                    icon: 'success',
                    title: '회원가입이 완료 되었습니다',
                  }).then(() => {
                    window.location.href = '';
                  });
            } else if (data.data === "ALREADY") {
                alert("이메일이 중복됩니다.");
            } else {
                alert("오류입니다. 관리자에게 얘기해주세요.");
            }
        }
    }

    const companyFind = async (e: any) => {
        e.preventDefault();
        console.log("companyInfo : ", businessNumber);
        try {
            // const cleanAxios = axios.create();
            const result = await axios.post("companyfindorsave", {
                "companyInfo": businessNumber
            });
            if (!result) {
                setSearchData(null);
                return;
            }
            const data: SearchData = result.data;
            setSearchData(data);
            // console.log(data);
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

    //  폭죽
    // const [showFirework, setShowFirework] = useState(false);

    // const toggleFirework = () => {
    //   setShowFirework(!showFirework);
    // };
  
    // const successJoin = () => {
    //     const handleButtonClick = () => { 
    //       Swal.fire('회원가입이 완료 되었습니다');
    //     };
    //   };
    
    // textfieldCss
    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
          color: '#A0AAB4',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#E0E3E7',
          },
          '&:hover fieldset': {
            borderColor: '#B2BAC2',
          },
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
            <Row>
                <form className="ps-3 pe-3" action="#">
                    <div className="mb-3">
                        <CssTextField
                            id="username"
                            name="username"
                            type="text"
                            required
                            value={username}
                            onChange={onChange}
                            label="아이디를 입력해 주세요"
                            variant="outlined"
                            style={{ width: "99%", fontSize: "17px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <CssTextField
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={onChange}
                            label="영문,숫자,특수문자 포함 8~12 자리 비밀번호를 입력해주세요"
                            variant="outlined"
                            style={{ width: "99%", fontSize: "17px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <CssTextField
                            id="passwordRetry"
                            name="re_password"
                            type="password"
                            required
                            value={re_password}
                            onChange={onChange}
                            label="비밀번호를 다시 입력해 주세요"
                            variant="outlined"
                            style={{ width: "99%", fontSize: "17px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <CssTextField
                            id="realname"
                            name="realname"
                            type="text"
                            required
                            value={realname}
                            onChange={onChange}
                            label="이름을 입력해 주세요"
                            variant="outlined"
                            style={{ width: "99%", fontSize: "17px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <CssTextField
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email}
                            onChange={onChange}
                            label="이메일을 입력해 주세요"
                            variant="outlined"
                            style={{ width: "99%", fontSize: "17px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <CssTextField
                            id="phonenumber"
                            name="phonenumber"
                            type="nmuber"
                            required
                            value={phonenumber}
                            onChange={onChange}
                            label="전화번호를 입력해 주세요"
                            variant="outlined"
                            style={{ width: "99%", fontSize: "17px" }}
                        />
                    </div>

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
                        <Button
                            type="button"
                            onClick={() => {
                                // toggleFirework();
                                signSubmit();
                            }}
                            // style={{ width: "99%", fontSize: "19px" }}
                            style={{
                                borderRadius: "15px",
                                width:"99%",
                                padding: "1rem 4rem",
                                color: "white",
                                fontSize: "20px"
                            }}
                        >
                            회원가입
                        </Button>
                        {/* {showFirework && <FireWork />} */}
                    </div>
                </form>

            </Row>

        </>
    );
};

export default NewHRJoin;
