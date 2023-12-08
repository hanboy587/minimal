import { Card, Row, Col, Button, Navbar, Nav, NavDropdown, Form, FormControl, Modal, } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { BsFillCalendar2XFill, BsFillClockFill,BsFillEmojiSmileUpsideDownFill,BsFillEnvelopeFill } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";
import { useToggle } from 'hooks';
import { useRedux } from 'hooks';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { isMobile } from 'react-device-detect';
import { logoutUser } from 'redux/actions';
import { useMediaQuery } from "react-responsive";

const BottomNav = () => {
    const { dispatch } = useRedux();
    const [ip, setIp] = useState("");
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [deviceType, setDeviceType] = useState("");
    const [distance, setDistance] = useState(0);
    const [realname, setRealname] = useState<string | null>("");
    const [username, setUsername] = useState("");
    const [workTime, setWorkTime] = useState("");
    const [yesterDayWorkTime, setYesterDayWorkTime] = useState<string | null>(null);
    const [yesterDayLeaveTime, setYesterDayLeaveTime] = useState<string | null>(null);
    const [leaveTime, setLeaveTime] = useState("");
    const COPMANY_LATITUDE = 37.56851186299292;
    const COMPANY_LONGITUDE = 126.82783654977143;
    const MOBILE = "mobile";
    const DESKTOP = "desktop";
    const WORK = "WORK";
    const LEAVE = "LEAVE";
    const WORK_URL = "work";
    const LEAVE_URL = "leave";
    const IP_URL = "https://api.ipify.org?format=json";
    const TODAY_COMMUTE_LIST = "todayCommute";
    const correctionTimeRegex = /^(([0-1][0-9])|(2[0-3])):[0-5][0-9]$/;


    const getIp = async () => {
        const res = await axios.get(IP_URL);
        setIp(res.data.ip);
    };

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }


    const checkDevice = () => {
        if (isMobile) {
            setDeviceType(MOBILE);
        } else {
            setDeviceType(DESKTOP);
        }
    };

    const getCommuteInfo = async () => {
        const res = await axios.post(TODAY_COMMUTE_LIST, {
            "username": username
        });
        if (res.data) {
            let temp_work = res.data.work;
            let temp_leave = res.data.leave;
            setWorkTime(temp_work?.slice(11, 19));
            setLeaveTime(temp_leave?.slice(11, 19));
        }
    }

    const getYesterDayCommuteInfo = async () => {
        const res = await axios.post("yesterdayCommute", {
            "username": username
        });
        if (res.data) {
            let temp_work = res.data.work;
            let temp_leave = res.data.leave;
            if (temp_work) {
                setYesterDayWorkTime(temp_work.slice(11, 19));
            }
            if (temp_leave) {
                setYesterDayLeaveTime(temp_leave.slice(11, 19));
            }
        }
    };



    useEffect(() => {
        getIp();
        // getLocation();
        // setLongitude(COMPANY_LONGITUDE);
        // setLatitude(COPMANY_LATITUDE);
        var data: any = sessionStorage.getItem("hyper_user");
        setRealname(JSON.parse(data).realname);
        setUsername(JSON.parse(data).username);
        checkDevice();
    }, []);

    useEffect(() => {
        if (realname) {
            getCommuteInfo();
            getYesterDayCommuteInfo();
        }
    }, [realname]);

    const timeCorrection = async (url: string) => {
        let res;
        if (url == WORK_URL) {
            res = window.confirm("출근 시간을 정정신고 하시겠습니까?");
        } else {
            res = window.confirm("퇴근 시간을 정정신고 하시겠습니까?");
        }
        if (!res) {
            return;
        }
        requestAgainWork(url);
    }

    const requestAgainWork = async (url: string) => {
        let correctionTime;
        // correctionTime 예외처리
        // 사유 예외 처리
        let step = 0;
        while (step != 1) {
            correctionTime = prompt("정정 신고할 시각을 입력해주세요.\n ex) 17:23");
            if (!correctionTime) {
                alert("취소되었습니다.");
                return;
            }
            const res = correctionTimeRegex.test(correctionTime);
            if (res) {
                step = 1;
            } else {
                alert("입력이 잘못되엇습니다.\n다시 입력해주세요");
            }
        }
        const correctionComment = prompt("사유를 간단하게 적어주세요.\n ex) 출근을 했지만 출근버튼을 누르지 못하였음");
        if (!correctionComment) {
            return;
        }
        const res = await axios.post(url, {
            "deviceType": deviceType,
            "latitude": latitude,
            "longitude": longitude,
            "username": username,
            "distance": distance,
            "ip": ip,
            "correction": "yes",
            "correctionTime": correctionTime,
            "correctionComment": correctionComment
        });
        const message = res.data;
        if (message === "CHANGE") {
            alert("정정신고를 완료 했습니다.")
        }
        getCommuteInfo();
    }

    const getDistanceFromLatLonInKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    }

    const deg2rad = (deg: number) => {
        return deg * (Math.PI / 180)
    }

    const commute = async (status: string) => {
        let url;
        let distance = getDistanceFromLatLonInKm(latitude, longitude, COPMANY_LATITUDE, COMPANY_LONGITUDE);
        setDistance(distance);

        distance *= 1000;
        distance = Math.floor(distance);

        if (status === WORK) {
            url = WORK_URL;
        } else {
            url = LEAVE_URL;
        }
        if (status === WORK) {
            if (!window.confirm("출근 하시겠습니까?")) {
                return;
            }
        } else {
            if (!window.confirm("퇴근 하시겠습니까?")) {
                return;
            }
        }

        if (yesterDayWorkTime && !yesterDayLeaveTime && status === WORK) {
            alert("전날 퇴근이 없습니다. 관리자에게 문의 하세요");
            return;
        }

        const res = await axios.post(url, {
            "deviceType": deviceType,
            "latitude": latitude,
            "longitude": longitude,
            "username": username,
            "ip": ip
        }
        );

        const message = res.data;

        if (url === WORK_URL) {

            if (message === "HAVE_ALREADY_DONE") {
                alert('이미 출근체크를 완료하셨습니다.');
                timeCorrection(WORK_URL);
            } else if (message === 'SAVE') {
                alert('출근처리를 완료했습니다.');
            } else {
                alert('예상치못한 에러가 발생했습니다 관리자에게 문의 해주세요.');
            }

        } else if (url === LEAVE_URL) {

            if (message === "GOING_WORK_FIRST") {
                alert('출근처리가 되어있지않습니다.');
            } else if (message === "LEAVE_WORK") {
                alert('이미 퇴근처리가 되었습니다.');
                timeCorrection(url);
            } else if (message === 'FINISHED_COMMUTING') {
                alert('퇴근처리가 완료되었습니다.');
            } else {
                alert('예상치못한 에러가 발생했습니다 관리자에게 문의 해주세요.');
            }

        }
        getCommuteInfo();
    };
    const onClickLogout = () => {
        dispatch(logoutUser());
    }

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return (() => clearInterval(id))
    }, []);

    const [time, setTime] = useState(new Date());
    const todayTime = () => {
        let now = new Date();
        let hours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
        let minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
        let seconds = now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
    }

    const date = new Date();

    // modal
    const [isOpen, toggleChultoegeun] = useToggle();

    // 출퇴근버튼 disabled
    const btnActive = () => {
        const target: any = document.getElementById('toegeunbtn');
        return (
            target.disabled = false
        );
    }
    // 미디어쿼리
    const isPC: boolean = useMediaQuery({
        query: "(min-width:576px)"
    });
    const isMobile: boolean = useMediaQuery({
        query: "(max-width:575px) and (min-width:358px)"
    });
    const isFolder: boolean = useMediaQuery({
        query: "(max-width:359px)"
    });

    //출퇴근 글자변경
    // const changeContents = () => {
    //     const [contents, setContents] = useState('this is react');
    //     setContents(prev => prev === "this is hook" ? "this is react!" : "this is hook")
    // }

    return (
        <>
            {/*
            bottom 이 나타나는 화면크기
            'd-lg-none' 에서 size 에따라 달라짐 
            xl 일시 => maxwidth: 1199
            lg 일시 => maxwidth: 991
        */}
            <Row>
                <Col>
                    <Navbar bg="white" expand="lg" style={{ overflow: "hidden", borderTop: "1px solid #E0E0E0", height: "60px" }}
                        className=" navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation"
                    >
                        <Navbar.Brand>
                            <Nav className="wrapper"  >
                                <span>
                                    <div style={{ textAlign: "center", float: "left", width: "25%", height: "45px", }}>
                                        <NavLink to="/ui/base-ui/Schedulecalendar">
                                            <BsFillCalendar2XFill style={{ fontSize: "100%" }} />
                                        </NavLink>
                                    </div>
                                    <div style={{ textAlign: "center", float: "left", width: "25%", height: "45px", }}>

                                        <NavLink to="#" onClick={toggleChultoegeun}>
                                            <BsFillClockFill style={{ fontSize: "100%" }} />
                                        </NavLink>
                                    </div>
                                    <div style={{ textAlign: "center", float: "left", width: "25%", height: "45px", }}>
                                        <NavLink to="/ui/base-ui/Profile3">
                                            <FaUserCog style={{ fontSize: "100%" }} />
                                        </NavLink>
                                    </div>
                                    <div style={{ textAlign: "center", float: "left", width: "25%", height: "45px", }}>
                                        <NavLink to="#" onClick={toggleChultoegeun}>
                                            <BsFillEmojiSmileUpsideDownFill style={{ fontSize: "100%" }} />
                                        </NavLink>
                                    </div>
                                </span>
                            </Nav>
                        </Navbar.Brand>
                    </Navbar>
                </Col>
            </Row>
            {/* 출퇴근 모달 */}
            {isPC &&
                <Modal show={isOpen} onHide={toggleChultoegeun} dialogClassName={'modal-dialog-centered'}>
                    <Modal.Body>
                        <Row className="mt-2 mb-2">
                            <Col>
                                <div>
                                    <div className="d-flex align-items-center border border-light rounded-3 p-1">
                                        <Col style={{ textAlign: "center" }} className="mt-2">
                                            <div>
                                                <p className="mb-0" style={{ color: "#A0A0A0" }}>예정출근</p>
                                                <p className="mb-1" style={{ fontSize: "30px" }}>08:00</p>
                                            </div>
                                        </Col>
                                        <Col style={{ textAlign: "center" }} className="mt-2">
                                            <div>
                                                <p className="mb-0" style={{ color: "#A0A0A0" }}>예정퇴근</p>
                                                <p className="mb-1" style={{ fontSize: "30px" }}>18:00</p>
                                            </div>
                                        </Col>
                                    </div>
                                    {/* <Row style={{ fontSize: "23px", color: "#ABABAB", textAlign: "center" }}>
                                    <Col style={{ borderRight: "0.5px solid #E0E0E0", height: "100%" }}>
                                        <div className="col ps-2">
                                            실제출근 : {workTime}
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="col ps-2">
                                            실제퇴근 : {leaveTime}
                                        </div>
                                    </Col>
                                </Row> */}
                                    <br />
                                    <Row >
                                        <Col sm={6} className="d-flex flex-row justify-content-center">
                                            <div>
                                                <Button id="chulgeunbtn" variant="primary" type="button" onClick={() => { commute(WORK); btnActive(); }}
                                                    style={{
                                                        borderRadius: "14px",
                                                        padding: "1rem 4rem",
                                                        background: "#8181F7",
                                                        color: "white",
                                                    }}
                                                >
                                                    <p className="text-center fw-bold mb-0 text-center font-18">
                                                        출근
                                                    </p>
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col sm={6} className="d-flex flex-row justify-content-center">
                                            <div >
                                                <Button id="toegeunbtn" variant="primary" disabled
                                                    onClick={() => commute(LEAVE)}
                                                    style={{
                                                        borderRadius: "14px",
                                                        padding: "1rem 4rem",
                                                        background: "#8181F7",
                                                        color: "white",
                                                    }}
                                                >
                                                    <p className="text-center fw-bold mb-0 text-center font-18">
                                                        퇴근
                                                    </p>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            }
            {isMobile &&
                <Modal show={isOpen} onHide={toggleChultoegeun} dialogClassName={'modal-dialog-centered'}>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <div>
                                    <div className="d-flex align-items-center border border-light rounded-3 p-1">
                                        <Col style={{ textAlign: "center" }} className="mt-2">
                                            <div>
                                                <p className="mb-0" style={{ color: "#A0A0A0" }}>예정출근</p>
                                                <p className="mb-1" style={{ fontSize: "30px" }}>08:00</p>
                                            </div>
                                        </Col>
                                        <Col style={{ textAlign: "center" }} className="mt-2">
                                            <div>
                                                <p className="mb-0" style={{ color: "#A0A0A0" }}>예정퇴근</p>
                                                <p className="mb-1" style={{ fontSize: "30px" }}>18:00</p>
                                            </div>
                                        </Col>
                                    </div>
                                    {/* <Row style={{ fontSize: "23px", color: "#ABABAB", textAlign: "center" }}>
                                        <Col style={{ borderRight: "0.5px solid #E0E0E0", height: "100%" }}>
                                            <div className="col ps-2">
                                                예정출근 : 09:30
                                            </div>
                                        </Col>
                                        <Col >
                                            <div className="col ps-2">
                                                예정퇴근 : 18:00
                                            </div>
                                        </Col>
                                    </Row> */}
                                    {/* <Row style={{ fontSize: "23px", color: "#ABABAB", textAlign: "center" }}>
                                            <Col style={{ borderRight: "0.5px solid #E0E0E0", height: "100%" }}>
                                                <div className="col ps-2">
                                                    실제출근 : {workTime}
                                                </div>
                                            </Col>
                                            <Col>
                                                <div className="col ps-2">
                                                    실제퇴근 : {leaveTime}
                                                </div>
                                            </Col>
                                        </Row> */}

                                    <Row className="mt-3" >
                                        <Col sm={6} className="d-flex flex-row justify-content-center">
                                            <div>
                                                <Button id="chulgeunbtn" variant="primary" type="button" onClick={() => { commute(WORK); btnActive(); }}
                                                    style={{
                                                        borderRadius: "14px",
                                                        padding: "1rem 3rem",
                                                        background: "#8181F7",
                                                        color: "white",
                                                    }}
                                                >
                                                    <p className="text-center fw-bold mb-0 text-center font-18">
                                                        출근
                                                    </p>
                                                </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button id="toegeunbtn" variant="primary" disabled
                                                    onClick={() => commute(LEAVE)}
                                                    style={{
                                                        borderRadius: "14px",
                                                        padding: "1rem 3rem",
                                                        background: "#8181F7",
                                                        color: "white",
                                                    }}
                                                >
                                                    <p className="text-center fw-bold mb-0 text-center font-18">
                                                        퇴근
                                                    </p>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            }
            {isFolder &&
                <Modal show={isOpen} onHide={toggleChultoegeun} dialogClassName={'modal-dialog-centered'}>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <div>
                                    <div className="d-flex align-items-center border border-light rounded-3 p-1">
                                        <Col style={{ textAlign: "center" }} className="mt-2">
                                            <div>
                                                <p className="mb-0" style={{ color: "#A0A0A0" }}>예정출근</p>
                                                <p className="mb-1" style={{ fontSize: "30px" }}>08:00</p>
                                            </div>
                                        </Col>
                                        <Col style={{ textAlign: "center" }} className="mt-2">
                                            <div>
                                                <p className="mb-0" style={{ color: "#A0A0A0" }}>예정퇴근</p>
                                                <p className="mb-1" style={{ fontSize: "30px" }}>18:00</p>
                                            </div>
                                        </Col>
                                    </div>
                                    <Row className="mt-3" >
                                        <Col sm={6} className="d-flex flex-row justify-content-center">
                                            <div>
                                                <Button id="chulgeunbtn" variant="primary" type="button" onClick={() => { commute(WORK); btnActive(); }}
                                                    style={{
                                                        borderRadius: "14px",
                                                        padding: "1rem 2rem",
                                                        background: "#8181F7",
                                                        color: "white",
                                                    }}
                                                >
                                                    <p className="text-center fw-bold mb-0 text-center font-18">
                                                        출근
                                                    </p>
                                                </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                <Button id="toegeunbtn" variant="primary" disabled
                                                    onClick={() => commute(LEAVE)}
                                                    style={{
                                                        borderRadius: "14px",
                                                        padding: "1rem 2rem",
                                                        background: "#8181F7",
                                                        color: "white",
                                                    }}
                                                >
                                                    <p className="text-center fw-bold mb-0 text-center font-18">
                                                        퇴근
                                                    </p>
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            }
        </>
    );
};

export default BottomNav;
