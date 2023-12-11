import { Row, Col, Card, Button, Table, Modal, Popover, OverlayTrigger, Form, } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { PageTitle, FormInput } from 'components';
import { useToggle } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
// import { pdfjs } from 'react-pdf';
import { number } from 'yup/lib/locale';
import { Document, Page } from 'react-pdf';
import DaumPostcode from "react-daum-postcode";
import { getUsername } from 'utils/getUsername';
import { GrCircleQuestion } from "react-icons/gr";
import { useMediaQuery } from "react-responsive";


// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

type SaeobJangJeongBoIbLyeogType = {
    sanghomyeong: string;
    hyeongtae: string;
    jongsajagubun: string;
    jongsajasu: string;
    businessnumber: string;
    beobindeunglogbeonho: string;
    eobtae: string;
    jongmog: string;
    saeobjangjeonhwabeonho: string;
    jiyeogseontaeg: string;
    gugun: string;
    sojaejijuso: string;
    nameojijuso: string;
    jiyeogseontaeg2: string;
    gugun2: string;
    sojaejijuso2: string;
    nameojijuso2: string;
    daepyojaseongmyeong: string;
    daepyojajeonhwabeonho: string;
    chwiimil: string;
    juminbeonho: string;
    location: string;
    gaeeobyeonwolil: string;
    seonglib: string;
    gwanrino: string;
    daehaenggigwan: string;
    suimil: string;
}

const Basic = () => {
    const [isOpen40, toggleSeonglib] = useToggle();
    const [isOpen41, toggleSamudaehaeng] = useToggle();
    const [isOpen44, toggleNextSamudaehaeng] = useToggle();
    const [isOpen45, toggleSamudaehaengPdf] = useToggle();
    const [socialInsuranceCommitmentPdf, setSocialInsuranceCommitmentPdf] = useState();
    const [socialInsuranceDeclarationPdf, setSocialInsuranceDeclarationPdf] = useState();
    const [isNextOpen40, toggleNextChwideug] = useToggle();
    const [isOpen42, toggleSangse2] = useToggle();
    const [isOpen43, toggleAddress] = useToggle();
    const [isOpen50, toggleAddress2] = useToggle();
    const [num27, setNum27] = useState(0);
    const [businessnumberOk, setBusinessnumberOk] = useState(false);
    const [inputs, setInputs] = useState({
        sanghomyeong: '',
        hyeongtae: '',
        jongsajagubun: '',
        jongsajasu: '',
        businessnumber: '',
        beobindeunglogbeonho: '',
        eobtae: '',
        jongmog: '',
        saeobjangjeonhwabeonho: '',
        jiyeogseontaeg: '',
        gugun: '',
        sojaejijuso: '',
        nameojijuso: '',
        jiyeogseontaeg2: '',
        gugun2: '',
        sojaejijuso2: '',
        nameojijuso2: '',
        daepyojaseongmyeong: '',
        daepyojajeonhwabeonho: '',
        chwiimil: '',
        juminbeonho: '',
        location: '',
        gaeeobyeonwolil: '',
        seonglib: '',
        gwanrino: '',
        daehaenggigwan: '',
        suimil: '',
    });

    const complete = (data: any) => {
        let addressArr = data.address.split(" ");
        let addressNum = addressArr[addressArr.length - 1];
        setInputs({
            ...inputs,
            jiyeogseontaeg: data.sido,
            gugun: data.sigungu,
            sojaejijuso: data.roadname + " " + addressNum,

        });
        toggleAddress();
    }

    const complete2 = (data: any) => {
        let addressArr2 = data.address.split(" ");
        let addressNum2 = addressArr2[addressArr2.length - 1];
        setInputs({
            ...inputs,
            jiyeogseontaeg2: data.sido,
            gugun2: data.sigungu,
            sojaejijuso2: data.roadname + " " + addressNum2,

        });
        toggleAddress2();
    }

    const READ = 0;
    const MODIFY = 1;
    const [state, setState] = useState(MODIFY);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onChangeSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const { sanghomyeong,
        hyeongtae,
        jongsajagubun,
        jongsajasu,
        businessnumber,
        beobindeunglogbeonho,
        eobtae,
        jongmog,
        saeobjangjeonhwabeonho,
        jiyeogseontaeg,
        gugun,
        sojaejijuso,
        nameojijuso,
        jiyeogseontaeg2,
        gugun2,
        sojaejijuso2,
        nameojijuso2,
        daepyojaseongmyeong,
        daepyojajeonhwabeonho,
        chwiimil,
        juminbeonho,
        location,
        gaeeobyeonwolil,
        seonglib,
        gwanrino,
        daehaenggigwan,
        suimil,
    } = inputs;

    const checkValid = () => {
        if (!sanghomyeong) {
            alert("상호명을 넣어주세요.");
            return 0;
        }

        if (!hyeongtae) {
            alert("형태를 넣어주세요.");
            return 0;
        }

        if (!businessnumber) {
            alert("사업자등록번호를 넣어주세요.");
            return 0;
        }

        if (!businessnumberOk) {
            alert("사업자등록번호 유효체크를 해주세요.");
            return 0;
        }

        if (!eobtae) {
            alert("업태를 넣어주세요.");
            return 0;
        }

        if (!gaeeobyeonwolil) {
            alert("개업연월일을 넣어주세요.");
            return 0;
        }

        if (!jongmog) {
            alert("종목을 넣어주세요.");
            return 0;
        }

        if (!saeobjangjeonhwabeonho) {
            alert("사업장 전화번호를 넣어주세요.");
            return 0;
        }

        if (!nameojijuso) {
            alert("주소를 넣어주세요.");
            return 0;
        }

        if (!daepyojaseongmyeong) {
            alert("사업장 소재지를 넣어주세요.");
            return 0;
        }

        if (!chwiimil) {
            alert("취임일을 넣어주세요.");
            return 0;
        }

        if (!juminbeonho) {
            alert("주민번호를 넣어주세요.");
            return 0;
        }

        if (!location) {
            alert("대표자주소를 넣어주세요.");
            return 0;
        }

        if (!daepyojajeonhwabeonho) {
            alert("대표자 전화번호를 넣어주세요.");
            return 0;
        }

        if (!seonglib) {
            alert("고용산재보험 성립신고 여부를  선택해주세요");
            return 0;
        }

        if (!gwanrino) {
            alert("관리번호를 입력해주세요");
            return 0;
        }

        return 1;
    };

    const onSubmit = async () => {
        if (!checkValid()) {
            return;
        }
        const tempInputs: any = inputs;
        tempInputs.username = getUsername();
        const data = await axios.post('businessInfoSave', tempInputs);
        inquiry();
    }

    const onFaxInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFaxInfo(e.target.value.split("*")[0]);
    };

    const inputPriceFormat = (str: any) => {
        const comma = (str: any) => {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
        };
        const uncomma = (str: any) => {
            str = String(str);
            return str.replace(/[^\d]+/g, "");
        };
        return comma(uncomma(str));
    };

    const inquiry = async () => {
        const data = await axios.post("businessInfoInquiry", {
            username: getUsername()
        });
        if (data.data) {
            delete data.data.username;
            const tempData: SaeobJangJeongBoIbLyeogType = data.data;
            setInputs(tempData);
            setState(READ);
        }
    };

    useEffect(() => {
        inquiry();
    }, []);

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    interface DocLoadProps {
        numPages: number;
    };

    const [timer, setTimer] = useState(0);
    const [timerStatus, setTimerStatus] = useState(false);

    const getSocialInsuranceDeclarationPdf = async () => {
        const url = "http://localhost:5000/socialInsuranceDeclarationToPdf";
        const inputData = {
            username: getUsername(),
            docType: "수임신고서",
            관리번호: gwanrino,
            상호명: sanghomyeong,
            근로자수: jongsajasu,
            사업장소재지: jiyeogseontaeg + " " + gugun + " " + location,
            사업장전화번호: saeobjangjeonhwabeonho,
            대표자성명: daepyojaseongmyeong,
            업태종목: eobtae + jongmog,
            공단: "근로복지공단"
        }
        // console.log(inputData);
        const data = await axios.post(url, inputData);
        // console.log(data.data);
        setSocialInsuranceDeclarationPdf(data.data);

    };

    const getSocialInsuranceCommitmentToPdf = async () => {
        const url = "http://localhost:5000/socialInsuranceCommitmentToPdf";
        const sessionJson: any = sessionStorage.getItem("hyper_user");
        const inputData = {
            "username": JSON.parse(sessionJson).username,
            "관리번호": gwanrino,
            "대표자성명": daepyojaseongmyeong,
            "사업장전화번호": saeobjangjeonhwabeonho,
            "상호명": sanghomyeong,
            "docType": "사무위탁서",
            "공단": "근로복지공단",
            "대표자전화번호": daepyojajeonhwabeonho,
            "사업장소재지": jiyeogseontaeg + " " + gugun + " " + location,
            "업태종목": eobtae + " " + jongmog,
        };
        // console.log(inputData);
        const data = await axios.post(url, inputData);
        // console.log(data);
        setSocialInsuranceCommitmentPdf(data.data);
        /*
        try {
            progressBarTime();
            console.log(data);
            setPdfFile(data.data);
            setTimer(100);
            alert("pdf 생성이 완료되었습니다.");
        } catch (error) {
            console.log(error);
            alert("오류가 발생했습니다. 재요청 부탁드립니다.");
        }
        */
    };

    const progressBarTime = () => {
        setTimerStatus(true);
        let timertemp = 0;
        let timerId = setInterval(() => { setTimer(timertemp += 1); }, 100);
        setTimeout(() => { clearInterval(timerId); setTimerStatus(false); }, 10000);
    };

    const onDocumentLoadSuccess = ({ numPages }: DocLoadProps) => {
        setNumPages(numPages);
    };

    // 사업자등록번호 인증버튼 클릭시 disable
    const [businessNumDisable, setBusinessNumDisable] = useState(false);

    const businessnumberCheck = async () => {
        const inputData = {
            "b_no": [
                businessnumber,
            ]
        };
        const url = "https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=2L2z6k2p%2FvCvMpWAcqROm80d9cMXGipObgWe2Yzzia7hxcWeZ2Atm60JDAM8G8xlcIa5lROlmUgWrz27w%2BooSw%3D%3D";
        const res = await axios.post(url, inputData);
        const tax_type = res.data.data[0].tax_type;
        if (tax_type === "국세청에 등록되지 않은 사업자등록번호입니다.") {
            setBusinessnumberOk(false);
            alert("국세청에 등록되지 않은 사업자등록번호입니다.");
            setBusinessNumDisable(false);
        } else {
            setBusinessnumberOk(true);
            alert("확인되었습니다.");
            setBusinessNumDisable(true);
        }
    };

    const [laborWelfareCorporation, setLaborWelfareCorporation] = useState<any[]>();
    const [searchResult, setSearchResult] = useState<any[]>();
    const [searchInput, setSearchInput] = useState<string>("");
    const [faxInfo, setFaxInfo] = useState<string>("");
    const [faxNumber, setFaxNumber] = useState<string>("");
    const [gongdanjisa, setGongdanjisa] = useState("");

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    const getLaborWelfareCorporationData = async () => {
        const url = "https://api.odcloud.kr/api/15049970/v1/uddi:84145517-cdf0-45ff-bcd3-87efbcc4f097?page=1&perPage=100&serviceKey=2L2z6k2p%2FvCvMpWAcqROm80d9cMXGipObgWe2Yzzia7hxcWeZ2Atm60JDAM8G8xlcIa5lROlmUgWrz27w%2BooSw%3D%3D";
        const data = await axios.post(url);
        const dataArr: any[] = data.data.data;
        setLaborWelfareCorporation(dataArr);
        setSearchResult(dataArr);
    }

    const sendFax = async () => {
        if (!faxNumber && !gongdanjisa) {
            alert("예상치 못한오류입니다. 관리자에게 문의해주세요.");
            return;
        }
        if (!socialInsuranceCommitmentPdf && !socialInsuranceDeclarationPdf) {
            alert("pdf를 생성해주세요.");
            return;
        }
        const url = "https://fax.rba.kr/faxSend";
        // const url = "http://localhost:4430/faxSend";
        const res = await axios.post(url, {
            "base64PdfFile": [socialInsuranceCommitmentPdf],
            "fromNumber": "0261904279",
            "toNumber": "0261904279"
            // "toNumber" : faxNumber.split("-").join(""),
        });
        // console.log(res);
        // console.log(url);
        // console.log(faxInfo);
    }

    useEffect(() => {
        getLaborWelfareCorporationData();
    }, []);

    useEffect(() => {
        if (searchResult) {
            const FaxInfoData: any[] = searchResult.map((data) => {
                if (data["관할구역"].includes(jiyeogseontaeg) && (data["관할구역"].includes(gugun.split(" ")[0]) || data["관할구역"].includes(gugun))) {
                    return data;
                }
            }).filter(el => el);
            if (FaxInfoData.length === 1) {
                console.log(FaxInfoData[0]);
                setFaxNumber(FaxInfoData[0]["대표 전자팩스"]);
                setGongdanjisa(FaxInfoData[0]["기관(지사)명"]);
            }
        }
        // console.log("jiyeogseontaeg : ", jiyeogseontaeg);
        // console.log("gugun : ", gugun);

    }, [jiyeogseontaeg, gugun, searchResult]);

    useEffect(() => {
        if (laborWelfareCorporation) {
            setSearchResult(laborWelfareCorporation.map(data => {
                if (data["기관(지사)명"].replace(/ /g, '').includes(searchInput)) {
                    return data;
                } else {
                    return null;
                }
            }));
        }
    }, [searchInput]);

    const test = () => {
        alert("test");
    };

    // 보험사무대행위탁 tooltip
    const popover = (
        <Popover>
            <Popover.Body>
                근로복지공단의 인가를 받아 보험가입자로부터
                보험사무를 위탁받아 처리하는 법인입니다
            </Popover.Body>
        </Popover>
    );

    // 미디어쿼리
    const isPC: boolean = useMediaQuery({
        query: "(min-width:555px)",
    });
    const isMobile: boolean = useMediaQuery({
        query: "(max-width:555px)",
    });

    return (
        <Card >
            <Card.Body style={{ padding: "1.5rem 0.5rem" }}>

                {/* <Button onClick={sendFax}>test</Button>
                        faxNumber : {faxNumber} */}

                {isPC &&
                    <Row>
                        {/* <Col>
                                <p className="text-start mb-0"> * 필수입력항목입니다</p>
                            </Col> */}
                        <Col>
                            <p className="text-end mb-0">
                                {seonglib === '1' ?
                                    <Button className="mb-1" onClick={toggleSamudaehaengPdf}>사무대행신고</Button>
                                    :
                                    <Button className="mb-1" onClick={toggleSeonglib}>보험관계성립신고</Button>
                                }
                            </p>
                        </Col>
                    </Row>
                }
                {isMobile &&
                    <Row>
                        {/* <Col>
                            <p className="text-start mb-0"> * 필수입력항목입니다</p>
                        </Col> */}
                        <Col>
                            <p className="text-end mb-0">
                                {seonglib === '1' ?
                                    <Button className="mb-1"style={{width:"99%"}} onClick={toggleSamudaehaengPdf}>사무대행신고</Button>
                                    :
                                    <Button className="mb-1"style={{width:"99%"}} onClick={toggleSeonglib}>보험관계성립신고</Button>
                                }
                            </p>
                        </Col>
                    </Row>
                }
                {isPC &&
                    <div>
                        <Row>
                            <Col xl={6}>
                                <div className="table-responsive mt-2 text-left">
                                    <Table className=" table-centered table-bordered" >
                                        <thead className="table-madegray" style={{ color: "#6c757d" }}>
                                            <tr>
                                                <th colSpan={2} style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>사업장 정보</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px", color: "#a3a7ad" }}>상호명</td>
                                                {state ?
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='sanghomyeong' onChange={onChange} value={sanghomyeong} placeholder="나이스노무법인"></input>
                                                    </td>
                                                    :
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='sanghomyeong' onChange={onChange} value={sanghomyeong} disabled></input>
                                                    </td>
                                                }
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>형태</td>
                                                <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                                    {state ?
                                                        <>
                                                            <input type="radio" name="hyeongtae" value="1" onChange={onChange} checked={hyeongtae === '1'} style={{ width: "25px", height: "15px" }}></input> 법인 &nbsp;&nbsp;
                                                            <input type="radio" name="hyeongtae" value="0" onChange={onChange} checked={hyeongtae === '0'} style={{ width: "25px", height: "15px" }}></input> 개인
                                                        </>
                                                        :
                                                        <>
                                                            <input type="radio" name="hyeongtae" value="1" checked={hyeongtae === '1'} style={{ width: "25px", height: "15px" }} disabled></input> 법인 &nbsp;&nbsp;
                                                            <input type="radio" name="hyeongtae" value="0" checked={hyeongtae === '0'} style={{ width: "25px", height: "15px" }} disabled></input> 개인
                                                        </>
                                                    }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>종사자구분</td>
                                                <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                    {state ?
                                                        <select className="form-select" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='jongsajagubun' onChange={onChangeSelectBox} value={jongsajagubun}>
                                                            {/* <option>-- 선택 --</option> */}
                                                            <option value="0">근로자</option>
                                                            {/* <option value="1">예술인</option> */}
                                                            {/* <option value="2">특수형태근로종사자</option> */}
                                                        </select>
                                                        :
                                                        <select className="form-select" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='jongsajagubun' onChange={onChangeSelectBox} value={jongsajagubun} disabled>
                                                            {/* <option>-- 선택 --</option> */}
                                                            <option value="0">근로자</option>
                                                            {/* <option value="1">예술인</option> */}
                                                            {/* <option value="2">특수형태근로종사자</option> */}
                                                        </select>
                                                    }
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>종사자수</td>
                                                {state ?
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" type="number" min={0} style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='jongsajasu' onChange={onChange} value={jongsajasu} placeholder="0"></input>
                                                    </td>
                                                    :
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" type="number" min={0} style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='jongsajasu' onChange={onChange} value={jongsajasu} disabled></input>
                                                    </td>
                                                }
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>사업자등록번호</td>
                                                {state ?
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 5px" }}>
                                                        <Row style={{ margin: "0px" }}>
                                                            <Col xs={10}>
                                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='businessnumber' onChange={onChange} value={businessnumber} placeholder="1234567891"></input>
                                                            </Col>
                                                            <Col xs={2} style={{ padding: "0px" }}>
                                                                <Button className="mb-1" style={{ width: "95%", margin: "0px" }} onClick={()=>{businessnumberCheck(); setBusinessNumDisable(true);}} disabled={businessNumDisable}>인증</Button>
                                                            </Col>
                                                        </Row>
                                                        {/* <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "80%", float: "left" }} name='businessnumber' onChange={onChange} value={businessnumber} placeholder="1234567891"></input> */}
                                                        {/* <Button className="mb-1" style={{ margin: "0px 0px 0px 10px",width:"99%" }} onClick={businessnumberCheck}>인증하기</Button> */}
                                                    </td>
                                                    :
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control mt-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='businessnumber' onChange={onChange} value={businessnumber} disabled></input>
                                                    </td>
                                                }
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>법인등록번호</td>
                                                {state ?
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='beobindeunglogbeonho' onChange={onChange} value={beobindeunglogbeonho} placeholder="123456700000789"></input>
                                                    </td>
                                                    :
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='beobindeunglogbeonho' onChange={onChange} value={beobindeunglogbeonho} disabled></input>
                                                    </td>
                                                }
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>개업연월일</td>
                                                {state ?
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='gaeeobyeonwolil' onChange={onChange} value={gaeeobyeonwolil}></input>
                                                    </td>
                                                    :
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='gaeeobyeonwolil' onChange={onChange} value={gaeeobyeonwolil} disabled></input>
                                                    </td>
                                                }
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>업태</td>
                                                {state ?
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='eobtae' onChange={onChange} value={eobtae} placeholder="제조업"></input>
                                                    </td>
                                                    :
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='eobtae' onChange={onChange} value={eobtae} disabled></input>
                                                    </td>
                                                }
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>종목</td>
                                                {state ?
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='jongmog' onChange={onChange} value={jongmog} placeholder="음·식료품 제조업"></input>
                                                    </td>
                                                    :
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='jongmog' onChange={onChange} value={jongmog} placeholder="음·식료품 제조업" disabled></input>
                                                    </td>
                                                }
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>전화번호</td>
                                                {state ?
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" type="number" min={0} style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='saeobjangjeonhwabeonho' onChange={onChange} value={saeobjangjeonhwabeonho} placeholder="02-1234-5678"></input>
                                                    </td>
                                                    :
                                                    <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                        <input className="form-control" type="number" min={0} style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='saeobjangjeonhwabeonho' onChange={onChange} value={saeobjangjeonhwabeonho} placeholder="02-1234-5678" disabled></input>
                                                    </td>
                                                }
                                            </tr>
                                            <tr>
                                                <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>소재지</td>
                                                <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                    <Button className="mb-1 mt-1" style={{ width: "99%" }} variant="primary" onClick={toggleAddress}>주소검색</Button>
                                                    <input
                                                        className="form-control mb-1 mt-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='jiyeogseontaeg' onChange={onChange} value={jiyeogseontaeg} placeholder={"지역선택"} disabled>
                                                    </input>
                                                    <input
                                                        className="form-control mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='gugun' onChange={onChange} value={gugun} placeholder={"구/군 선택"} disabled>
                                                    </input>
                                                    <input
                                                        className="form-control mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='sojaejijuso' onChange={onChange} value={sojaejijuso} disabled>
                                                    </input>
                                                    {state ?
                                                        <input className="form-control mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='nameojijuso' onChange={onChange} value={nameojijuso} placeholder={"상세주소를 입력해주세요"}></input>
                                                        :
                                                        <input className="form-control mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='nameojijuso' onChange={onChange} value={nameojijuso} placeholder={"상세주소를 입력해주세요"} disabled></input>
                                                    }
                                                    {/* <Button className="mb-1" variant="primary" onClick={toggleAddress}>주소검색</Button> */}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                            {/* 사용자정보 / 4대보험정보 */}
                            <Col xl={6}>
                                <div>
                                    <Row className="mb-0">
                                        <div className="table-responsive mt-2 text-left">
                                            <Table className=" table-centered table-bordered">
                                                <thead className="table-madegray" style={{ color: "#6c757d" }}>
                                                    <tr>
                                                        <th colSpan={2} style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>사용자(대표자) 정보</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "20%", fontSize: "18px", color: "#a3a7ad" }}>성명</td>
                                                        {state ?
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='daepyojaseongmyeong' onChange={onChange} value={daepyojaseongmyeong} placeholder="나이스"></input>
                                                            </td>
                                                            :
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='daepyojaseongmyeong' onChange={onChange} value={daepyojaseongmyeong} disabled></input>
                                                            </td>
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }} >취임일</td>
                                                        {state ?
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='chwiimil' onChange={onChange} value={chwiimil}></input>
                                                            </td>
                                                            :
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='chwiimil' onChange={onChange} value={chwiimil} disabled></input>
                                                            </td>
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>주민번호</td>
                                                        {state ?
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='juminbeonho' onChange={onChange} value={juminbeonho} placeholder="7712131237894"></input>
                                                            </td>
                                                            :
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='juminbeonho' onChange={onChange} value={juminbeonho} disabled></input>
                                                            </td>
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>전화번호</td>
                                                        {state ?
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='daepyojajeonhwabeonho' onChange={onChange} value={daepyojajeonhwabeonho} placeholder="01045671234"></input>
                                                            </td>
                                                            :
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='daepyojajeonhwabeonho' onChange={onChange} value={daepyojajeonhwabeonho} disabled></input>
                                                            </td>
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>주소</td>
                                                        <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                            <Button className="mb-1 mt-1" style={{ width: "99%" }} variant="primary" onClick={toggleAddress2}>주소검색</Button>
                                                            <input
                                                                className="form-control mb-1 mt-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='jiyeogseontaeg2' onChange={onChange} value={jiyeogseontaeg2} placeholder={"지역선택"} disabled>
                                                            </input>
                                                            <input
                                                                className="form-control mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='gugun2' onChange={onChange} value={gugun2} placeholder={"구/군 선택"} disabled>
                                                            </input>
                                                            <input
                                                                className="form-control mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='sojaejijuso2' onChange={onChange} value={sojaejijuso2} disabled>
                                                            </input>
                                                            {state ?
                                                                <input className="form-control mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='nameojijuso2' onChange={onChange} value={nameojijuso2} placeholder={"상세주소를 입력해주세요"}></input>
                                                                :
                                                                <input className="form-control mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='nameojijuso2' onChange={onChange} value={nameojijuso2} placeholder={"상세주소를 입력해주세요"} disabled></input>
                                                            }
                                                            {/* <Button className="mb-1" variant="primary" onClick={toggleAddress2}>주소검색</Button> */}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="table-responsive text-left">
                                            <Table className=" table-centered table-bordered" >
                                                <thead className="table-madegray" style={{ color: "#6c757d" }}>
                                                    <tr>
                                                        <th colSpan={2} style={{ fontSize: "20px", textAlign: "center", border: "1px solid #DCDCDC" }}>4대보험 정보</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", width: "25%", fontSize: "18px", color: "#a3a7ad" }}>고용산재보험 성립신고 여부</td>
                                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "18px" }}>
                                                            {state ?
                                                                <>
                                                                    <input type="radio" name="seonglib" onChange={onChange} value="1" checked={seonglib === '1'} style={{ width: "25px", height: "15px" }}></input> 예 &nbsp;&nbsp;
                                                                    <input type="radio" name="seonglib" onChange={onChange} value="0" checked={seonglib === '0'} style={{ width: "25px", height: "15px" }}></input> 아니오
                                                                </>
                                                                :
                                                                <>
                                                                    <input type="radio" name="seonglib" value="1" checked={seonglib === '1'} style={{ width: "25px", height: "15px" }} disabled></input> 예 &nbsp;&nbsp;
                                                                    <input type="radio" name="seonglib" value="0" checked={seonglib === '0'} style={{ width: "25px", height: "15px" }} disabled></input> 아니오
                                                                </>
                                                            }
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>고용산재 보험 관리번호</td>
                                                        {state ?
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" type="string" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='gwanrino' onChange={onChange} value={gwanrino} placeholder="12345678912"></input>
                                                            </td>
                                                            :
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" type="string" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='gwanrino' onChange={onChange} value={gwanrino} disabled></input>
                                                            </td>
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>보험사무대행기관</td>
                                                        {state ?
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='daehaenggigwan' onChange={onChange} value={daehaenggigwan} placeholder="나이스노무법인"></input>
                                                            </td>
                                                            :
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='daehaenggigwan' onChange={onChange} value={daehaenggigwan} disabled></input>
                                                            </td>
                                                        }
                                                    </tr>
                                                    <tr>
                                                        <td className="table-madegray" style={{ border: "1px solid #DCDCDC", fontSize: "18px", color: "#a3a7ad" }}>사무처리 시작일</td>
                                                        {state ?
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='suimil' onChange={onChange} value={suimil}></input>
                                                            </td>
                                                            :
                                                            <td className="text-start" style={{ padding: "0px 15px 0px 15px" }}>
                                                                <input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "18px", width: "99%" }} name='suimil' onChange={onChange} value={suimil} disabled></input>
                                                            </td>
                                                        }
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                }
                {isMobile &&
                    <div className="table-responsive mt-2 text-left">
                        <Table className=" table-centered table-bordered" >
                            <thead className="table-madegray" style={{ color: "#6c757d" }}>
                                <tr>
                                    <th colSpan={2} style={{ fontSize: "15px", textAlign: "center" }}>사업장 정보</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", width: "25%", fontSize: "13px", color: "#a3a7ad" }}>상호명</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%", }} name='sanghomyeong' onChange={onChange} value={sanghomyeong} placeholder="나이스노무법인" ></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='sanghomyeong' onChange={onChange} value={sanghomyeong} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>형태</td>
                                    <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "12px" }}>
                                        {state ?
                                            <>
                                                <input type="radio" name="hyeongtae" value="1" onChange={onChange} checked={hyeongtae === '1'} style={{ width: "25px", height: "10px" }}></input> 법인 &nbsp;&nbsp;
                                                <input type="radio" name="hyeongtae" value="0" onChange={onChange} checked={hyeongtae === '0'} style={{ width: "25px", height: "10px" }}></input> 개인
                                            </>
                                            :
                                            <>
                                                <input type="radio" name="hyeongtae" value="1" checked={hyeongtae === '1'} style={{ width: "25px", height: "10px" }} disabled></input> 법인 &nbsp;&nbsp;
                                                <input type="radio" name="hyeongtae" value="0" checked={hyeongtae === '0'} style={{ width: "25px", height: "10px" }} disabled></input> 개인
                                            </>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>종사자구분</td>
                                    <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                        {state ?
                                            <select className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "12px", width: "99%" }} name='jongsajagubun' onChange={onChangeSelectBox} value={jongsajagubun}>
                                                {/* <option> -- 선택 -- </option> */}
                                                <option value="0">근로자</option>
                                                {/* <option value="1">예술인</option> */}
                                                {/* <option value="2">특수형태근로종사자</option> */}
                                            </select>
                                            :
                                            <select className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", fontSize: "12px", width: "99%" }} name='jongsajagubun' onChange={onChangeSelectBox} value={jongsajagubun} disabled>
                                                {/* <option> -- 선택 -- </option> */}
                                                <option value="0">근로자</option>
                                                {/* <option value="1">예술인</option> */}
                                                {/* <option value="2">특수형태근로종사자</option> */}
                                            </select>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>종사자수</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="number" min={0} style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='jongsajasu' onChange={onChange} value={jongsajasu} placeholder="0"></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="number" min={0} style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='jongsajasu' onChange={onChange} value={jongsajasu} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>사업자등록번호</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 1px" }}>
                                            <Row style={{ margin: "0px", padding: "3px" }}>
                                                <Col xs={9}>
                                                    <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='businessnumber' onChange={onChange} value={businessnumber} placeholder="1234567891"></input>
                                                </Col>
                                                <Col xs={3} style={{ padding: "3px 0px 0px 0px" }}>
                                                    <Button onClick={businessnumberCheck} size="sm" style={{ margin: "0px", width: "100%", fontSize: "10px" }}> 인증</Button>
                                                </Col>
                                            </Row>
                                            {/* <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='businessnumber' onChange={onChange} value={businessnumber} placeholder="1234567891"></input> */}
                                            {/* <Button onClick={businessnumberCheck} size="sm" style={{ padding: "5px", width: "40px", fontSize: "10px" }}> 인증</Button> */}
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='businessnumber' onChange={onChange} value={businessnumber} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>법인등록번호</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='beobindeunglogbeonho' onChange={onChange} value={beobindeunglogbeonho} placeholder="123456700000789"></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='beobindeunglogbeonho' onChange={onChange} value={beobindeunglogbeonho} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>개업연월일</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='gaeeobyeonwolil' onChange={onChange} value={gaeeobyeonwolil}></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='gaeeobyeonwolil' onChange={onChange} value={gaeeobyeonwolil} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>업태</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='eobtae' onChange={onChange} value={eobtae} placeholder="제조업"></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='eobtae' onChange={onChange} value={eobtae} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>종목</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='jongmog' onChange={onChange} value={jongmog} placeholder="음·식료품"></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='jongmog' onChange={onChange} value={jongmog} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "2px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>사업장전화번호</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="number" min={0} style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='saeobjangjeonhwabeonho' onChange={onChange} value={saeobjangjeonhwabeonho} placeholder="0212345678"></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="number" min={0} style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='saeobjangjeonhwabeonho' onChange={onChange} value={saeobjangjeonhwabeonho} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>사업장 소재지</td>
                                    <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                        <Button className="mt-1 mb-1" style={{ width: "99%" }} variant="primary" onClick={toggleAddress} size="sm">주소검색</Button>
                                        <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='jiyeogseontaeg' onChange={onChange} value={jiyeogseontaeg} placeholder={"지역선택"} disabled>
                                        </input>
                                        <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='gugun' onChange={onChange} value={gugun} placeholder={"구/군 선택"} disabled>
                                        </input>
                                        <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='sojaejijuso' onChange={onChange} value={sojaejijuso} disabled>
                                        </input>
                                        {state ?
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='nameojijuso' onChange={onChange} value={nameojijuso} placeholder={"상세주소를 입력해주세요"}></input>
                                            :
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='nameojijuso' onChange={onChange} value={nameojijuso} placeholder={"상세주소를 입력해주세요"} disabled></input>
                                        }
                                        {/* <Button className="mt-1 mb-1" variant="primary" onClick={toggleAddress} size="sm">주소검색</Button> */}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                }
                {/* 주소 검색 모달(사업장소재지) */}
                <Modal show={isOpen43} onHide={toggleAddress} backdrop={"static"}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <h5 className="text-white">주소찾기</h5>
                    </Modal.Header>
                    <DaumPostcode
                        className="postmodal"
                        autoClose
                        onComplete={complete} />
                </Modal>
                {/* 주소 검색 모달(사용자정보) */}
                <Modal show={isOpen50} onHide={toggleAddress2} backdrop={"static"}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <h5 className="text-white">주소찾기</h5>
                    </Modal.Header>
                    <DaumPostcode
                        className="postmodal2"
                        autoClose
                        onComplete={complete2} />
                </Modal>
                {isMobile &&
                    <div className="table-responsive mt-2 text-left">
                        <Table className=" table-centered table-bordered">
                            <thead className="table-madegray" style={{ color: "#6c757d" }}>
                                <tr>
                                    <th colSpan={2} style={{ fontSize: "15px", textAlign: "center" }}>사용자(대표자) 정보</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", width: "25%", color: "#a3a7ad" }}>대표자 성명</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='daepyojaseongmyeong' onChange={onChange} value={daepyojaseongmyeong} placeholder="나이스"></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='daepyojaseongmyeong' onChange={onChange} value={daepyojaseongmyeong} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }} >취임일</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='chwiimil' onChange={onChange} value={chwiimil}></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='chwiimil' onChange={onChange} value={chwiimil} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>주민번호</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='juminbeonho' onChange={onChange} value={juminbeonho} placeholder="7712131237894"></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='juminbeonho' onChange={onChange} value={juminbeonho} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>대표자전화번호</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='daepyojajeonhwabeonho' onChange={onChange} value={daepyojajeonhwabeonho} placeholder="01045671234"></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='daepyojajeonhwabeonho' onChange={onChange} value={daepyojajeonhwabeonho} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>주소</td>
                                    <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                        <Button className="mt-1 mb-1" variant="primary" style={{ width: "99%" }} onClick={toggleAddress2} size="sm">주소검색</Button>
                                        <input
                                            className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='jiyeogseontaeg2' onChange={onChange} value={jiyeogseontaeg2} placeholder={"지역선택"} disabled>
                                        </input>
                                        <input
                                            className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='gugun2' onChange={onChange} value={gugun2} placeholder={"구/군 선택"} disabled>
                                        </input>
                                        <input
                                            className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='sojaejijuso2' onChange={onChange} value={sojaejijuso2} disabled>
                                        </input>
                                        {state ?
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='nameojijuso2' onChange={onChange} value={nameojijuso2} placeholder={"상세주소를 입력해주세요"}></input>
                                            :
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='nameojijuso2' onChange={onChange} value={nameojijuso2} placeholder={"상세주소를 입력해주세요"} disabled></input>
                                        }
                                        {/* <Button className="mt-1 mb-1" variant="primary" onClick={toggleAddress2} size="sm">주소검색</Button> */}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                }
                {isMobile &&
                    <div className="table-responsive mt-2 text-left">
                        <Table className=" table-centered table-bordered">
                            <thead className="table-madegray" style={{ color: "#6c757d" }}>
                                <tr>
                                    <th colSpan={2} style={{ fontSize: "15px", textAlign: "center" }}>4대보험 정보</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", width: "100px", fontSize: "13px", color: "#a3a7ad" }}>고용산재보험 성립신고 여부</td>
                                    <td className="text-start" style={{ padding: "0px 0px 0px 15px", fontSize: "12px" }}>
                                        {state ?
                                            <>
                                                <input type="radio" name="seonglib" onChange={onChange} value="1" checked={seonglib === '1'} style={{ width: "25px", height: "10px" }}></input> 예 &nbsp;&nbsp;
                                                <input type="radio" name="seonglib" onChange={onChange} value="0" checked={seonglib === '0'} style={{ width: "25px", height: "10px" }}></input> 아니오
                                            </>
                                            :
                                            <>
                                                <input type="radio" name="seonglib" value="1" checked={seonglib === '1'} style={{ width: "25px", height: "10px" }} disabled></input> 예 &nbsp;&nbsp;
                                                <input type="radio" name="seonglib" value="0" checked={seonglib === '0'} style={{ width: "25px", height: "10px" }} disabled></input> 아니오
                                            </>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>고용산재 보험 관리번호</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="string" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='gwanrino' onChange={onChange} value={gwanrino} placeholder="12345678912"></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="string" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='gwanrino' onChange={onChange} value={gwanrino} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>보험사무 <br />대행기관</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='daehaenggigwan' onChange={onChange} value={daehaenggigwan} placeholder="나이스노무법인"></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='daehaenggigwan' onChange={onChange} value={daehaenggigwan} disabled></input>
                                        </td>
                                    }
                                </tr>
                                <tr>
                                    <td className="table-madegray" style={{ padding: "5px", border: "1px solid #DCDCDC", fontSize: "13px", color: "#a3a7ad" }}>사무처리 시작일</td>
                                    {state ?
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='suimil' onChange={onChange} value={suimil}></input>
                                        </td>
                                        :
                                        <td className="text-start" style={{ padding: "0px 0px 0px 15px" }}>
                                            <input className="form-control mt-1 mb-1" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", height: "100%", fontSize: "12px", width: "99%" }} name='suimil' onChange={onChange} value={suimil} disabled></input>
                                        </td>
                                    }
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                }
                {isPC &&
                    <Row>
                        <Col className="text-end">
                            {state ?
                                <Button variant="primary" type="button" onClick={onSubmit}>
                                    저장하기
                                </Button>
                                :
                                <Button variant="primary" type="button" onClick={() => setState(MODIFY)}>
                                    수정하기
                                </Button>
                            }
                        </Col>
                    </Row>
                }
                {isMobile &&
                    <Row>
                        <Col className="text-end">
                            {state ?
                                <Button variant="primary" type="button" style={{width:"99%"}} onClick={onSubmit}>
                                    저장하기
                                </Button>
                                :
                                <Button variant="primary" type="button" style={{width:"99%"}} onClick={() => setState(MODIFY)}>
                                    수정하기
                                </Button>
                            }
                        </Col>
                    </Row>
                }

                {/* 1번쨰 보험관계성립신고 모달 */}

                <Modal show={isOpen40} onHide={toggleSeonglib} backdrop={"static"}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <p className="text-white mb-0" style={{ fontSize: "20px" }}>보험관계성립신고</p>

                    </Modal.Header>
                    <Modal.Body>
                        <Row className="mb-2"  >
                            <Col md={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>성립일</p>
                                <input className="form-control mb-1" type="date" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}></input>
                            </Col>
                            <Col md={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>상시근로자수</p>
                                <input className="form-control mb-1" type="number" min={0} style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="1"></input>
                            </Col>
                        </Row>
                        <Row className="mb-2" style={{ fontSize: "14px" }}>
                            <p className="mb-0">신고일현재까지 산재발생여부 </p>
                            <div>
                                <input type="radio" name="sanjae" style={{ width: "15px" }}></input> 네 &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" name="sanjae" style={{ width: "15px" }}></input> 아니오
                            </div>
                        </Row>
                        <Row className="mb-2" style={{ fontSize: "14px" }}>
                            <p className="mb-0">고용보험, 국민연금, 보험료 자원 신청여부 </p>
                            <div>
                                <input type="radio" name="jawon" style={{ width: "15px" }}></input> 네 &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio" name="jawon" style={{ width: "15px" }}></input> 아니오
                            </div>
                        </Row>
                        <Row>
                            <p style={{ fontSize: "14px" }}>
                                <OverlayTrigger placement="right" overlay={popover}>
                                    <span className="d-inline-block">
                                        <GrCircleQuestion />
                                    </span>
                                </OverlayTrigger>&nbsp;
                                보험사무 대행 위탁 동의&nbsp;&nbsp;
                                <input type="checkbox" checked style={{ width: "17px" }} ></input>
                            </p>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        {/* <Button onClick={test}>test</Button> */}
                        <Button
                            variant="primary"
                            onClick={() => {
                                toggleSeonglib();
                                toggleNextChwideug();
                            }}
                        >
                            취득신고
                        </Button>
                    </Modal.Footer>
                </Modal>
                {/* 2번째 취득신고모달 */}
                <Modal show={isNextOpen40} onHide={toggleNextChwideug} backdrop={"static"}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton>
                        <p className="text-white mb-0" style={{ fontSize: "20px" }}>취득신고</p>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <p className="text-end mb-0">
                                <Button size="sm" variant="link">신고 대상자 조회</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </p>
                        </Row>

                        <Row>
                            <Col>
                                <div className="table-responsive text-center">
                                    <Table className="mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>이름</th>
                                                <th>주민번호</th>
                                                <th>상세정보</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type="checkbox"></input></td>
                                                <td>나취득</td>
                                                <td>900404-1116655</td>
                                                <td><Button size="sm" variant="link" onClick={toggleSangse2}>상세입력</Button></td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox"></input></td>
                                                <td>왕노동</td>
                                                <td>001212-3567785</td>
                                                <td><Button size="sm" variant="link">상세입력</Button></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" onClick={toggleNextChwideug}>성립및취득신고</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={isOpen45} onHide={toggleSamudaehaengPdf}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <h5 className="text-white">사무대행신고</h5>

                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <div>
                                <Document
                                    file={`data:application/pdf;base64,${socialInsuranceCommitmentPdf}`}
                                    onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pageNumber} height={600} width={480} />
                                </Document>
                                <Button onClick={getSocialInsuranceCommitmentToPdf}>사무 위탁서pdf생성</Button>
                            </div>
                            <div>
                                <Document
                                    file={`data:application/pdf;base64,${socialInsuranceDeclarationPdf}`}
                                    onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pageNumber} height={600} width={480} />
                                </Document>
                                <Button onClick={getSocialInsuranceDeclarationPdf}>수임 신고서pdf생성</Button>
                            </div>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="link" type="button" onClick={toggleSamudaehaengPdf}>
                            취소
                        </Button>
                        <Button size="sm" onClick={() => {
                            toggleSamudaehaengPdf();
                            toggleSamudaehaeng();
                        }}>
                            다음
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* 사무대행신고 모달 */}
                <Modal show={isOpen41} onHide={toggleSamudaehaeng}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <h5 className="text-white">사무대행신고</h5>

                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <p className="font-18" style={{ fontWeight: 'bold' }}>
                                    접수한 후에는 수정이 불가합니다
                                </p>
                                <p className="font-15 , text-center"> fax번호 : {faxNumber} <br /> {gongdanjisa} 에 fax접수 하시겠습니까?</p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" onClick={sendFax}>
                            접수
                        </Button>
                        <Button size="sm" variant="link" type="button" onClick={toggleSamudaehaeng}>
                            종료
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={isOpen44} onHide={toggleNextSamudaehaeng}>
                </Modal>

                {/* 취득신고 상세입력 모달 */}

                <Modal show={isOpen42} onHide={toggleSangse2} backdrop={"static"}>
                    <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                    >
                        <p className="text-white mb-0" style={{ fontSize: "20px" }}>상세입력</p>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>이름 <br />
                                    <input className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="나이스" disabled></input>
                                </p>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주민번호 <br />
                                    <input className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="9912129665575" disabled></input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>국적<br />
                                    <input className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="몽골" ></input>
                                </p>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0 " style={{ fontSize: "14px", color: "#a3a3a3" }}> 체류자격<br />
                                    <input className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="취업" ></input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>입사일 <br />
                                    <input className="form-control" type="date" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}></input>
                                </p>
                            </Col>
                            <Col sm={6} className="mb-2" style={{ fontSize: "14px", color: "#a3a3a3" }}>
                                <p className="mb-0 ">계약직여부 * </p>
                                <p style={{ fontSize: "17px", marginTop: "9px", marginBottom: "0px" }}>
                                    <input type="radio" name="gyeyagjigyeobu" style={{ width: "15px" }}></input> 예 &nbsp;&nbsp;
                                    <input type="radio" name="gyeyagjigyeobu" style={{ width: "15px" }}></input> 아니오
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>월평균보수 * <br />
                                    <input className="form-control"
                                        style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}
                                        type="text" name="monthlybosu2" placeholder="2,000,000"
                                        value={num27}
                                        onChange={(e) => setNum27(inputPriceFormat(e.target.value))}>
                                    </input>
                                </p>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>계약종료일 * <br />
                                    <input className="form-control" type="date" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }}></input>
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}>주소정근로시간(최대40h) * <br />
                                    <input type="number" min={0} className="form-control" style={{ border: "1px solid #d5d5d5", outline: "none", width: "99%", marginTop: "7px" }} placeholder="35"></input>
                                </p>
                            </Col>
                            <Col sm={6} className="mb-2" style={{ fontSize: "14px", color: "#a3a3a3" }}>
                                <p className="mb-0">대표자여부 *</p>
                                <p style={{ fontSize: "17px", marginTop: "9px", marginBottom: "0px" }}>
                                    <input type="radio" name="daepyojayeobu" style={{ width: "15px" }} ></input> 예 &nbsp;&nbsp;
                                    <input type="radio" name="daepyojayeobu" style={{ width: "15px" }} checked></input> 아니오
                                </p>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <p className="mb-2" style={{ fontSize: "19px" }}>취득부호</p>
                        </Row>
                        <Row>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}> 국민연금 * <br />
                                    <select className="form-select" style={{ border: "1px solid #d5d5d5", outline: "none", height: "100%", width: "99%", marginTop: "7px" }} name='seclctbox6'>
                                        <option value="0">-- 선택 --</option>
                                        <option value="1">18세 이상 당연취득</option>
                                        <option value="2">18세 미만 취득</option>
                                        <option value="3">전입(사업장 통•폐합) </option>
                                        <option value="4">대학강사</option>
                                        <option value="5">60시간 미만 신청 취득</option>
                                        <option value="6">일용근로자, 단시간근로자 등</option>
                                    </select>
                                </p>
                            </Col>
                            <Col sm={6} className="mb-2">
                                <p className="mb-0" style={{ fontSize: "14px", color: "#a3a3a3" }}> 건강보험 *<br />
                                    <select className="form-select" style={{ border: "1px solid #d5d5d5", outline: "none", height: "100%", width: "99%", marginTop: "7px" }} name='seclctbox9'>
                                        <option value="0">-- 선택 --</option>
                                        <option value="1">최초취득</option>
                                        <option value="2">의료급여수급권자 해제</option>
                                        <option value="3">직장가입자 변경</option>
                                        <option value="4">직장피부양자 상실</option>
                                        <option value="5">지역가입자에서 변경</option>
                                        <option value="6">국가유공자 상실</option>
                                        <option value="7">기타</option>
                                        <option value="8">직권말소후 재등록</option>
                                        <option value="9">직장가입자 이중가입</option>
                                    </select>
                                </p>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button size="sm" variant="link" type="submit" onClick={toggleSangse2} >
                            취소
                        </Button>
                        <Button size="sm" variant="link" type="submit" onClick={toggleSangse2} >
                            예
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
};




const SaeobJangJeongBoIbLyeog = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[

                ]}
                title={'사업장(회사)정보'}
            />
            <Basic />
        </>
    );
};

export default SaeobJangJeongBoIbLyeog;