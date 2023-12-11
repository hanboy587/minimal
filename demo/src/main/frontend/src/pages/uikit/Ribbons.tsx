import { Row, Col, Card, Tab, Nav, Button, Table } from 'react-bootstrap';
import Tooltips from './Tooltips';
import Typography from './Typography';
import Widgets from './Widgets';
import BarChart from './Spinners';
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import { logoutUser } from 'redux/actions';
import { useRedux } from 'hooks';
import axios from 'axios';
import moment from 'moment';
import { getUsername } from 'utils/getUsername';
import { getRealname } from 'utils/getRealname';
import jwtDecode from 'jwt-decode';

const HRmain = () => {

    const { dispatch } = useRedux();
	const [ip, setIp]									= useState("");
	const [latitude, setLatitude]						= useState(0);
	const [longitude, setLongitude]						= useState(0);
	const [deviceType, setDeviceType]					= useState("");
	const [distance, setDistance]						= useState(0);
	const [realname, setRealname]						= useState<string | null>("");
	const [username, setUsername]						= useState("");
	const [workTime, setWorkTime]						= useState("");
	const [lastDayWorkTime, setLastDayWorkTime]			= useState<string | null>(null);
	const [lastDayWorkDate, setLastDayWorkDate]			= useState<string | null>(null);
	const [lastDayLeaveTime, setLastDayLeaveTime]		= useState<string | null>(null);
	const [leaveTime, setLeaveTime]						= useState("");
	const COPMANY_LATITUDE								= 37.56851186299292;
	const COMPANY_LONGITUDE								= 126.82783654977143;
	const MOBILE										= "mobile";
	const DESKTOP										= "desktop";
	const WORK											= "WORK";
	const LEAVE											= "LEAVE";
	const WORK_URL										= "work";
	const LEAVE_URL										= "leave";
	const IP_URL										= "https://api.ipify.org?format=json";
	const TODAY_COMMUTE_LIST							= "todayCommute";
	const correctionTimeRegex							= /^(([0-1][0-9])|(2[0-3])):[0-5][0-9]$/;

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

	const getLastDayCommuteInfo = async() => {
		const res = await axios.post("getLastDayCommute", {
			"username": getUsername(),

		});
		if (res.data) {
			let temp_work = res.data.work;
			let temp_leave = res.data.leave;
			if (temp_work) {
				setLastDayWorkDate(temp_work.slice(0, 10));
				setLastDayWorkTime(temp_work.slice(11, 19));
			}
			if (temp_leave) {
				setLastDayLeaveTime(temp_leave.slice(11, 19));
			}
		}
	};



	useEffect(() => {
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
			getLastDayCommuteInfo();
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
		alert("test");
		const type = url;
        const data = {
			"requesterRealname" : getRealname(),
			"requesterUsername" : getUsername(),
            "updateTime" : moment().format().substring(0, 10) + "T" + correctionTime,
            "comment" : correctionComment,
            "type" : type, 
        };
		await axios.post("requestUpdateCommute", data);
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

	useEffect(() => {
	},[lastDayWorkTime]);

	const lastDayCommuteRegistration = async() => {
		const res = await axios.post("lastDayCommuteRegistration", {
					"deviceType" : deviceType,
					"latitude" : latitude,
					"longitude" : longitude,
					"username" : username,
					"ip": ip
		});

		if (res.data === "SUCCESS") {
			alert("마지막 출근날 퇴근을 등록했습니다.");
		} else {
			alert("예상치못한 오류입니다.\n 관리자에게 문의해주세요");
		}
	};
	const commute = async(status: string) => {

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

		if (lastDayWorkTime && !lastDayLeaveTime && status === WORK) {
			alert("마지막 출근날 퇴근이 없습니다. 관리자에게 문의 하세요");
			return ;
			// 오늘날짜 비교
		} else if (lastDayWorkTime && !lastDayLeaveTime && status === LEAVE && moment().days() != moment(lastDayWorkDate).days()) {

			lastDayCommuteRegistration();
			alert("test");
			return ;
		}

		const res2 = await axios.post('/gyeoljae/commute', data);

		console.log('결재 확인 : ', res2);
		if(res2.data.data != null) {
			alert('출근 생성 요청이 이미 존재합니다.');
			return;
		}
		
		// console.log('return 동작 안했으면 보임');
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

	// const date = new Date();
	const [time, setTime] = useState(new Date());
	const todayDate = () => {
		let now = new Date();
		let todayYear = now.getFullYear();
		let todayMonth = now.getMonth() + 1;
		let todayDate = now.getDate();
		const week = ['일','월','화','수','목','금','토'];
		let dayOfWeek = week[now.getDay()];
		return todayYear + '.' + todayMonth + '.' + todayDate + '.' + dayOfWeek + '요일'
	}
	const todayTime = () => {
		let now = new Date();
		let hours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
		let minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
		let seconds = now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds();
		return  hours + '시' + minutes + '분' + seconds + '초';
	}

	// 근무유형
	const Geunmuyuhyeong = () => {
		const [geunmuyuhyeong, setGeunmuyuhyeong] = useState('');
	
		useEffect(() => {
			axios.get('src/pages/uikit/ribbon.json')
				.then(response => {
					setGeunmuyuhyeong(response.data);
				});
		}, []);
	
		return (
			<>
				<p>
					근무유형 : <span>{geunmuyuhyeong}</span>
				</p>
			</>
		);
	}
	// 출퇴근버튼 disabled
    const [submitDisable, setSubmitDisable] = useState(true);
    useEffect(() => {
        setSubmitDisable(workTime == "");
    }, [workTime]);

	// 버튼클릭 text 변경 (1) 클릭다시누르면 돌아가게
	// const [contents, setContents] = useState('test');
	// const changeContents = () => {
	// 	setContents(prev => prev === "test2" ? "test" : "test2")
	// };
	// 버튼클릭 text 변경 (2) 클릭시 글자변경
	// const[contents,setContents] = useState('test');
	// const changeContents = () => {
	// 	setContents('test2')
	// }

	// 예정에서 출근으로 text변경)
	const [yejeongchulgeun, setYejeongchulgeun] = useState("예정출근 : 09:30");
	const changeYejeongchulgeun = () => {
		setYejeongchulgeun("출근 : ");
	} 
	// 예정에서 퇴근으로 text변경
	const [yejeongtoegeun, setYejeongtoegeun] = useState("예정퇴근 : 18:00");
	const changeYejeongtoegeun = () => {
		setYejeongtoegeun("퇴근 : ")
	}

	// const changechulgeun = () => {
	// 	// const yejung = '예정출근: 09:00'
	// 	// const jigeum = '출근 :'
	// 	{ workTime == workTime ? '예정출근: 09:00' : '출근 :' }
	// }
	const [accessToken, setAccessToken] = useState(sessionStorage.getItem('accessToken'));
	const [filterList, setFilterList] = useState<any[]>([]);

	
	const gyeoljaelist = async () => {
		const res = await axios.get("/gyeoljae/pending");

		const token = sessionStorage.getItem('accessToken');
        setAccessToken(token);
		let filterData = [];
		if(accessToken){
			const jwtAccess: any = jwtDecode(accessToken);
			if(Number(jwtAccess.ApprovalAuthorityLevel) === 1){
				const filterData1 = res.data.data.filter((item:any) => item.approvalStatus == "PREPARED" && item.gyeolJaeDay == null);
				filterData = [...filterData1];
			}else if(Number(jwtAccess.ApprovalAuthorityLevel) === 2){
				const filterData1 = res.data.data.filter((item:any) => item.approvalStatus == "PENDING" && item.gyeolJaeDay == null);
				filterData = [...filterData1];

			}else{
				const filterData1 = res.data.data.filter((item:any) => item.requesterUsername == getUsername())
				filterData = filterData1;
			}
		}
		setFilterList(filterData);
	}
	

	// 출근
	const [ychulgeun, setYchulgeun] = useState(true);
	useEffect(() => {
		setYchulgeun(workTime == "");
	}, [workTime]);

	// 퇴근
	const [ytoegeun, setYtoegeun] = useState(true);
	useEffect(() => {
		setYtoegeun(leaveTime == "");
	}, [leaveTime]);
		// const ychulgeun = workTime
		// const ytoegeun = leaveTime
	
	// 야근시작
	const [isOvertimeStarted, setIsOvertimeStarted] = useState(false); 
	const overstartClick = () => {
		setIsOvertimeStarted(true);
		setIsOvertimeEnd(true); // 야근시작btn생성시 종료버튼도 동시생성
	};

	// 야근종료
	const [isOvertimeEnd, setIsOvertimeEnd] = useState(false);
	const overendClick = () => {
		setIsOvertimeEnd(true);
	};

	// 연장 여부 판단
	const [yeonjangid, setYeonjangid] = useState<any>();
	const [yeonjangsijag, setYeonjangsijag] = useState(false);
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, '0');
	const day = String(today.getDate()).padStart(2, '0');

	const todayStr = `${year}-${month}-${day}`;

	const [yeonjangsijagsigan, setYeonjangsijagsigan] = useState<any>();
	const [yeonjangjonglyosigan, setyeonjangjonglyosigan] = useState<any>();

	const data = {
		'nowDate' : todayStr,
		'username' : getUsername() 
	}

	// 결재 존재 판단
	const geyolJaeyeobu = async() => {
		
		const res = await axios.post('/gyeoljae/commute', data);
		console.log(res);
		if(res.data == null) return false;
	}

	// 연장 여부 판단
	const yeonjangyeobu = async () => {
		try{

			const res = await axios.post('/chugageunmu', data);
			console.log(res.data);
			if(res.data.status == 'OK' && res.data.data.useFlag == true){
				setYeonjangsijag(true);
				setYeonjangid(res.data.data.id);
				setYeonjangsijagsigan(res.data.data.realOverTimeStart?.slice(11, 19));
				setyeonjangjonglyosigan(res.data.data.realOverTimeEnd?.slice(11, 19));
			}
		}catch(error) {
			console.log(error);
		}
	}

	// 연장 시작
	const yeonjanggeunlosijag = async () => {
		if(window.confirm('연장 근무를 시작하시겠습니까?')){
			console.log('aaaaaaaaaaaaaaa ', yeonjangid);
			const res = await axios.patch(`/chugageunmu/start/${yeonjangid}`);
			setYeonjangsijagsigan(res.data.data.realOverTimeStart?.slice(11, 19));
			alert('연장 근무를 시작했습니다.');
		}	
	}

	const yeonjanggeunlojonglyo = async () => {
		if(window.confirm('연장 근무를 종료하시겠습니까?')){
			const res = await axios.patch(`/chugageunmu/end/${yeonjangid}`);
			setyeonjangjonglyosigan(res.data.data.realOverTimeEnd?.slice(11, 19));
		}
		if(window.confirm('바로 퇴근하시겠습니까?')){
			commute(LEAVE); changeYejeongtoegeun(); overendClick();
			alert('퇴근 처리가 완료 되었습니다.');
		}
	}
	useEffect(() => {
		yeonjangyeobu();
	},[])
	useEffect(() => {
		gyeoljaelist();
	},[])
	return (
		<>
			<Row className="mt-3">
				<Col xxl={5}>
					<Card>
						<Card.Body >
					{/* <div>
						{
							filterList? (
								<p>오늘 전자 결재 대기 건 수는 {filterList?.length}건 입니다.</p>
							)
							: (
								<p></p>
							)
						}
						
					</div> */}
							{/* text변경 test code */}
							{/* <div>
								h2>{contents}</h2>
								<button onClick={changeContents}>Contents 변경</button>
							</div> */}
							<hr />
							<Row style={{ fontSize: "30px", textAlign: "center" }} className="px-3">
								<p className="mb-0" style={{padding:"10px"}}>
									{todayDate()}
								</p>
								<p style={{ color: "red", padding:"10px" ,paddingTop:"0px"}}>
									{todayTime().slice(0, 9)}
									{todayTime().slice(9, 12)}
									{todayTime().slice(12, 9)}
								</p>
							</Row>
							<hr  className="mt-0" />
							<Row style={{ fontSize: "23px", color: "#ABABAB", textAlign: "center",padding:"10px" }}>
								<Col style={{borderRight: "0.5px solid #E0E0E0",height:"100%",padding:"10px"}}>
									<div className="col ps-2">
										{ychulgeun == true ? (
											<p>예정출근:09:30</p>
										) : (
											<p>업무시작: <span style={{ color: "#6c757d" }}>{workTime}</span> </p>
										)
										}
										{
											yeonjangid != null?(
												<p>연장시작: <span style={{ color: "#6c757d" }}>{yeonjangsijagsigan}</span></p>
											) : (
												null
											)
										}
									
									{/* {
										yeonjangsijag?
											<div className="col ps-2">
												{isOvertimeStarted && <p>연장시작:<span style={{ color: "#6c757d" }}></span> </p>}
											</div>
										: <p>출근:<span style={{ color: "#6c757d" }}>{workTime}</span> </p>
									} */}

									</div>
								</Col>
								<Col style={{ padding: "10px" }}>
									<div className="col ps-2">
										{ytoegeun == true ? (
											<p>예정퇴근:18:00 </p>
										) : (
											<p>업무종료: <span style={{ color: "#6c757d" }}>{leaveTime}</span></p>
										)
										}
										{
											yeonjangid != null?(
												<p>연장종료: <span style={{ color: "#6c757d" }}>{yeonjangjonglyosigan}</span></p>
											) : (
												null
											)
										}
									</div>
									
								</Col>
							</Row>
							<hr />
							<Row>
								<Col sm={6} style={{ borderRight: "0.5px solid #E0E0E0", height: "100%", padding: "10px" }} className="d-flex flex-row justify-content-center">
									<div>
										{
											yeonjangsijag == true && yeonjangsijagsigan == null ?(
												<Button
												id="overtimeStartBtn"
												variant="link"
												type="button"
											 	onClick={yeonjanggeunlosijag}
												style={{
													borderRadius: "15px",
													padding: "13px",
													minWidth:"200px",
													background: "#FF8000",
													color: "white",
													
												}}
											>
												<p className="mb-0" style={{ textAlign: "center", fontSize: "20px", }}>
													연장시작
												</p>
											</Button>
											) : (
												<Button id="chulgeunbtn" variant="primary" type="button" onClick={() => {commute(WORK); changeYejeongchulgeun();}}
												style={{
													borderRadius: "15px",
													padding: "13px",
													minWidth:"200px",
													background: "#8181F7",
													color: "white",
												}}
											>
												<p className=" mb-0" style={{ textAlign: "center", fontSize: "20px" }}>
													업무시작
												</p>
											</Button>
											)

										}
									</div>
								</Col>
								<Col sm={6} className="d-flex flex-row justify-content-center" style={{ padding: "10px" }}>
									<div >
										{
											yeonjangsijag == true && yeonjangjonglyosigan == null ? (
												<Button
												id="overtimeStartBtn"
												variant="link"
												type="button"
												onClick={yeonjanggeunlojonglyo}
												style={{
													borderRadius: "15px",
													padding: "13px",
													minWidth:"200px",
													background: "#FF8000",
													color: "white",
													
												}}
											>
												<p className="mb-0" style={{ textAlign: "center", fontSize: "20px" }}>
													연장종료
												</p>
											</Button>
											) : (
												<Button id="toegeunbtn" variant="primary" disabled={submitDisable}

												onClick={() => { commute(LEAVE); changeYejeongtoegeun(); overendClick(); }}
												style={{
													borderRadius: "15px",
													padding: "13px",
													minWidth:"200px",
													background: "#8181F7",
													color: "white",
												}}
											>
												<p className=" mb-0 " style={{ textAlign: "center", fontSize: "20px" }}>
													업무종료
												</p>
											</Button>
											)
										}
									</div>
								</Col>
							</Row>
							<hr />
						</Card.Body>
					</Card>
				</Col>
				<Col xxl={7}>
					<Card>
						<Card.Body>
							<Tab.Container defaultActiveKey="1">
								<Row>
									<Col>
										<Nav as="ul" variant="pills" className="nav nav-pills bg-nav-pills nav-justified mb-3">
											<Nav.Item as="li" className="nav-item">
												<Nav.Link href="#" eventKey="1" className="nav-link rounded-3">
													<p className="font-18 mt-1">일별</p>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li" className="nav-item">
												<Nav.Link href="#" eventKey="2" className="nav-link rounded-3">
													<p className="font-18 mt-1">주별</p>
												</Nav.Link>
											</Nav.Item>
											<Nav.Item as="li">
												<Nav.Link href="#" eventKey="3" className="nav-link rounded-3">
													<p className="font-18 mt-1">월별</p>
												</Nav.Link>
											</Nav.Item>
										</Nav>
										<Row>
											<Col>
												<Tab.Content>
													<Tab.Pane eventKey="1">
														<Tooltips />
													</Tab.Pane>
													<Tab.Pane eventKey="2">
														<Typography />
													</Tab.Pane>
													<Tab.Pane eventKey="3">
														< Widgets />
													</Tab.Pane>
												</Tab.Content>
											</Col>
										</Row>
									</Col>
								</Row>
							</Tab.Container>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			{
				filterList?.length == 0 ? null: (
			<Row>
				<Card>
					<Card.Body>
								<Table className=" table-centered table-bordered table caption-top" style={{tableLayout:"fixed"}} >
									<caption>결재대기</caption>
										<thead className="table-madegray" style={{ color: "#6c757d" }}>
											<tr>
												<th style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>근태</th>
												<th style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>휴가</th>
												<th style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>외출</th>
												<th style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>출장</th>
												<th style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>조퇴</th>
												<th style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>연장근무</th>
												<th style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>취소</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td  style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#5b63c4",textAlign:"center" }}>
													{filterList?.filter((item) => item.type == '근태').length}

												</td>
												<td  style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#5b63c4",textAlign:"center" }}>
													{filterList?.filter((item) => item.type == '휴가').length}
												</td>
												<td  style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#5b63c4",textAlign:"center" }}>
													{filterList?.filter((item) => item.type == '외출').length}
												</td>
												<td  style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#5b63c4",textAlign:"center" }}>
													{filterList?.filter((item) => item.type == '출장').length}
												</td>
												<td  style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#5b63c4",textAlign:"center" }}>
													{filterList?.filter((item) => item.type == '조퇴').length}
												</td>
												<td  style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#5b63c4",textAlign:"center" }}>
													{filterList?.filter((item) => item.type == '추가근무').length}
												</td>
												<td  style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#5b63c4",textAlign:"center" }}>
													{filterList?.filter((item) => item.type == '취소').length}
												</td>
											</tr>
										</tbody>
									</Table>
					</Card.Body>
				</Card>
			</Row>
			)
			}
			<Row>
				<Col>
					<BarChart />
				</Col>
			</Row>
		</>
	);
};

export default HRmain;
