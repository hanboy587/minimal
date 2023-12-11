import { SetStateAction, useEffect, useState } from 'react';
import { Row, Col, Card, Alert, Button, Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { PageTitle, FormInput, } from 'components';
import { Wizard, Steps, Step } from 'react-albus';
// import avatar1 from 'assets/images/users/avatar-3.png';
import classnames from 'classnames'
import Accordions from './Accordions';
import Avatars from './Avatars';
import { useForm } from 'react-hook-form';
import { Line } from 'react-chartjs-2';
import { useToggle } from 'hooks';
import Yeongseyulpage from './Buttons';
import axios from 'axios';
import { StringIterator } from 'lodash';
import { makeNowDate } from 'utils/makeNowDate';



interface gonggeubjajeongbo {
    // 기본정보 ----
    // 회사코드
    hometaxbill_id: string,
    // 패스워드
    spass: string,
    // 인증키
    apikey: string,
    // 사업자관리번호
    homemunseo_id: string,
    // 세금계산서 종류1 	01=세금계산서 02=수정세금계산서 03=계산서 04=수정계산서
    typecode1: string,
    // 세금계산서 종류2 	01=일반 02=영세율 03=위수탁 04=수입 05=영세율위수탁 06=수입납부유예
    typecode2: string,
    // 작성일자	YYYYMMDD(-없이)
    issuedate: string,
    // 영수/청구 구분 01=영수 02=청구
    purposetype: string,

    // 공급자정보 ----
    // *사업자등록번호
    ir_companynumber: string,
    // *업태
    ir_biztype: string,
    // *상호
    ir_companyname: string,
    // *업종
    ir_bizclassification: string,
    // 공급자 종사업자 식별코드	
    ir_taxnumber: string,
    // *대표자성명
    ir_ceoname: string,
    //담당부서명
    ir_busename: string,
    // 담당자명
    ir_name: string,
    // 담당자전화번호
    ir_cell: string,
    // *담당자이메일
    ir_email: string,
    // *주소
    ir_companyaddress: string

    // 공급받는 자 ----
    // 공급받는자 사업자등록번호 	주민번호,사업자등록번호(-없이)
    ie_companynumber: string,
    // 공급받는자 업태
    ie_biztype: string,
    // 공급받는자 사업자명
    ie_companyname: string,
    // 공급받는자 업태
    ie_bizclassification: string,
    // 공급받는자 구분 01=사업자등록번호 02=주민등록번호 03=외국인
    partytypecode: string,

    // 수탁 사업자(선택)
    // 수탁 사업자 등록번호
    su_companynumber: string,
    // 수탁 사업자 상호명
    su_companyname: string,
    // 수탁 사업자 대표자명
    su_ceoname: string,

    // 결제내역 ----
    // 현금
    cash: string,
    // 수표
    scheck: string,
    // 어음
    draft: string,
    // 외상 미수금
    uncollected: string,
    // 총 공급가액
    chargetotal: string,
    // 총 세액
    taxtotal: string,

    // 품목
    // 품목 공급 가액 [supplyprice]
    // 세액 [tax]
    taxdetailList: any[],
}




const Ilbangyesanseo = () => {
    const [isOpen5, toggleQnA] = useToggle();
    // axios.defaults.withCredentials = true;

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

    // radio 
    const [selectedValue, setSelectedValue] = useState('');
    const [taxdetailList, setTaxdetailList] = useState<any>([{
        "description": "품목별비고입력",
        "supplyprice": "500000",
        "quantity": "0.00",
        "unit": "",
        "subject": "품목명1",
        "gyymmdd": "20210311",
        "tax": "50000",
        "unitprice": "50000"
    }]);

    const handleRadioChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedValue(e.target.value);
    };

    const [gonggeubjajeongboData, setGonggeubjajeongboData] = useState({
        'hometaxbill_id': 'nicemso',
        'spass': 'nicenomu7700',
        'apikey': 'nicemsoyQMZ12pX',
        'homemunseo_id': 'NHTB20230517095605',
        'typecode1': '01',
        'typecode2': '01',
        'description': '비고사항입력 랍니다',
        'issuedate': '20230517',
        'modifytype': '',
        'purposetype': '02',
        'originalissueid': '',
        'si_id': '',
        'si_hcnt': '',
        'si_startdt': '',
        'si_enddt': '',
        'ir_companynumber': '7693000033',
        'ir_biztype': '서비스업,도소매',
        'ir_companyname': '(주)신안소프트',
        'ir_bizclassification': '소프트웨어개발업외하드웨어,쇼핑몰유통사업',
        'ir_taxnumber': '',
        'ir_ceoname': '김순관',
        'ir_busename': '개발',
        'ir_name': '김기사',
        'ir_cell': '010-1234-4321',
        'ir_email': 'sinit@sinit.co.kr',
        'ir_companyaddress': '수원시 영통구 신원로 88(신동) 102동 713호',
        'ie_companynumber': '1358187511',
        'ie_biztype': '서비스업,도소매',
        'ie_companyname': '(주)공급받는자 회사명',
        'ie_bizclassification': '하드웨어,소핑몰유통사업',
        'ie_taxnumber': '',
        'partytypecode': '01',
        'ie_ceoname': '김사랑',
        'ie_busename1': '개발',
        'ie_name1': '김사랑',
        'ie_cell1': '010-9999-1234',
        'ie_email1': 'sinit@sinit.co.kr',
        'ie_busename2': 'CS',
        'ie_name2': '김시아',
        'ie_cell2': '010-2222-4444',
        'ie_email2': 'sinit1@sinit.co.kr',
        'ie_companyaddress': '수원시 영통구 신원로 88(신동) 102동 713호',
        'su_companynumber': '',
        'su_biztype': '',
        'su_companyname': '',
        'su_bizclassification': '',
        'su_taxnumber': '',
        'su_ceoname': '',
        'su_busename': '',
        'su_name': '',
        'su_cell': '',
        'su_email': '',
        'su_companyaddress': '',
        'cash': '1000000',
        'scheck': '0',
        'draft': '0',
        'uncollected': '0',
        'chargetotal': '1000000',
        'taxtotal': '100000',
        'grandtotal': '1100000',
        'taxdetailList': [
            {
            "description": "품목별비고입력",
            "supplyprice": "500000",
            "quantity": "0.00",
            "unit": "",
            "subject": "품목명1",
            "gyymmdd": "20210311",
            "tax": "50000",
            "unitprice": "50000"
            },
            {
            "description": "품목별비고입력2",
            "supplyprice": "500000",
            "quantity": "0.00",
            "unit": "",
            "subject": "품목명2",
            "gyymmdd": "20210311",
            "tax": "50000",
            "unitprice": "50000"
            }
            ]
    });
    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        setGonggeubjajeongboData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const axiosTest = async () => {
        const postData = {
            'hometaxbill_id': 'nicemso',
            'spass': 'nicenomu7700',
            'apikey': 'nicemsoyQMZ12pX',
            'homemunseo_id': 'NHTB20230517095605',
            'typecode1': '01',
            'typecode2': '01',
            'description': '비고사항입력 랍니다',
            'issuedate': '20230517',
            'modifytype': '',
            'purposetype': '02',
            'originalissueid': '',
            'si_id': '',
            'si_hcnt': '',
            'si_startdt': '',
            'si_enddt': '',
            'ir_companynumber': '7693000033',
            'ir_biztype': '서비스업,도소매',
            'ir_companyname': '(주)신안소프트',
            'ir_bizclassification': '소프트웨어개발업외하드웨어,쇼핑몰유통사업',
            'ir_taxnumber': '',
            'ir_ceoname': '김순관',
            'ir_busename': '개발',
            'ir_name': '김기사',
            'ir_cell': '010-1234-4321',
            'ir_email': 'sinit@sinit.co.kr',
            'ir_companyaddress': '수원시 영통구 신원로 88(신동) 102동 713호',
            'ie_companynumber': '1358187511',
            'ie_biztype': '서비스업,도소매',
            'ie_companyname': '(주)공급받는자 회사명',
            'ie_bizclassification': '하드웨어,소핑몰유통사업',
            'ie_taxnumber': '',
            'partytypecode': '01',
            'ie_ceoname': '김사랑',
            'ie_busename1': '개발',
            'ie_name1': '김사랑',
            'ie_cell1': '010-9999-1234',
            'ie_email1': 'sinit@sinit.co.kr',
            'ie_busename2': 'CS',
            'ie_name2': '김시아',
            'ie_cell2': '010-2222-4444',
            'ie_email2': 'sinit1@sinit.co.kr',
            'ie_companyaddress': '수원시 영통구 신원로 88(신동) 102동 713호',
            'su_companynumber': '',
            'su_biztype': '',
            'su_companyname': '',
            'su_bizclassification': '',
            'su_taxnumber': '',
            'su_ceoname': '',
            'su_busename': '',
            'su_name': '',
            'su_cell': '',
            'su_email': '',
            'su_companyaddress': '',
            'cash': '1000000',
            'scheck': '0',
            'draft': '0',
            'uncollected': '0',
            'chargetotal': '1000000',
            'taxtotal': '100000',
            'grandtotal': '1100000',
            'taxdetailList': [
                {
                "description": "품목별비고입력",
                "supplyprice": "500000",
                "quantity": "0.00",
                "unit": "",
                "subject": "품목명1",
                "gyymmdd": "20210311",
                "tax": "50000",
                "unitprice": "50000"
                },
                {
                "description": "품목별비고입력2",
                "supplyprice": "500000",
                "quantity": "0.00",
                "unit": "",
                "subject": "품목명2",
                "gyymmdd": "20210311",
                "tax": "50000",
                "unitprice": "50000"
                }
                ]
        }

        const res = await axios.post('http://115.68.1.5:8084/homtax/post', gonggeubjajeongboData);

        console.log('axios Test     ', res);
    }

    useEffect(() => {
        axiosTest();
    },[])


    const handleSubmit2 = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const {
            hometaxbill_id,
            spass,
            apikey,
            homemunseo_id,
            typecode1,
            typecode2,
            issuedate,
            purposetype,
            ir_companynumber,
            ir_biztype,
            ir_companyname,
            ir_bizclassification,
            ir_taxnumber,
            ir_ceoname,
            ir_busename,
            ir_name,
            ir_cell,
            ir_email,
            ir_companyaddress,
            ie_companynumber,
            ie_biztype,
            ie_companyname,
            ie_bizclassification,
            partytypecode,
            su_companynumber,
            su_ceoname,
            cash,
            scheck,
            draft,
            uncollected,
            chargetotal,
            taxtotal
        } = gonggeubjajeongboData;

        let taList = {
            "description": "품목별비고입력",
            "supplyprice": "500000",
            "quantity": "0.00",
            "unit": "",
            "subject": "품목명1",
            "gyymmdd": "20210311",
            "tax": "50000",
            "unitprice": "50000"
        }

        const postData = {
            'hometaxbill_id': 'nicemso',
            'spass': 'nicenomu7700',
            'apikey': 'nicemsoyQMZ12pX',
            'homemunseo_id': 'NHTB20230517095605',
            'typecode1': '01',
            'typecode2': '01',
            'description': '비고사항입력 랍니다',
            'issuedate': '20230517',
            'modifytype': '',
            'purposetype': '02',
            'originalissueid': '',
            'si_id': '',
            'si_hcnt': '',
            'si_startdt': '',
            'si_enddt': '',
            'ir_companynumber': '7693000033',
            'ir_biztype': '서비스업,도소매',
            'ir_companyname': '(주)신안소프트',
            'ir_bizclassification': '소프트웨어개발업외하드웨어,쇼핑몰유통사업',
            'ir_taxnumber': '',
            'ir_ceoname': '김순관',
            'ir_busename': '개발',
            'ir_name': '김기사',
            'ir_cell': '010-1234-4321',
            'ir_email': 'sinit@sinit.co.kr',
            'ir_companyaddress': '수원시 영통구 신원로 88(신동) 102동 713호',
            'ie_companynumber': '1358187511',
            'ie_biztype': '서비스업,도소매',
            'ie_companyname': '(주)공급받는자 회사명',
            'ie_bizclassification': '하드웨어,소핑몰유통사업',
            'ie_taxnumber': '',
            'partytypecode': '01',
            'ie_ceoname': '김사랑',
            'ie_busename1': '개발',
            'ie_name1': '김사랑',
            'ie_cell1': '010-9999-1234',
            'ie_email1': 'sinit@sinit.co.kr',
            'ie_busename2': 'CS',
            'ie_name2': '김시아',
            'ie_cell2': '010-2222-4444',
            'ie_email2': 'sinit1@sinit.co.kr',
            'ie_companyaddress': '수원시 영통구 신원로 88(신동) 102동 713호',
            'su_companynumber': '',
            'su_biztype': '',
            'su_companyname': '',
            'su_bizclassification': '',
            'su_taxnumber': '',
            'su_ceoname': '',
            'su_busename': '',
            'su_name': '',
            'su_cell': '',
            'su_email': '',
            'su_companyaddress': '',
            'cash': '1000000',
            'scheck': '0',
            'draft': '0',
            'uncollected': '0',
            'chargetotal': '1000000',
            'taxtotal': '100000',
            'grandtotal': '1100000',
            'taxdetailList': [
                {
                "description": "품목별비고입력",
                "supplyprice": "500000",
                "quantity": "0.00",
                "unit": "",
                "subject": "품목명1",
                "gyymmdd": "20210311",
                "tax": "50000",
                "unitprice": "50000"
                },
                {
                "description": "품목별비고입력2",
                "supplyprice": "500000",
                "quantity": "0.00",
                "unit": "",
                "subject": "품목명2",
                "gyymmdd": "20210311",
                "tax": "50000",
                "unitprice": "50000"
                }
                ]
            }

        const formDataTo = new FormData();
        formDataTo.append('hometaxbill_id', 'nicemso');
        formDataTo.append('spass', 'nicenomu7700');
        formDataTo.append('apikey', 'nicemsoyQMZ12pX');
        formDataTo.append('homemunseo_id', '7693000034'); // 계산서 고유번호 - 변동 되어야 함
        formDataTo.append('typecode1', '01');
        formDataTo.append('typecode2', '01');
        formDataTo.append('issuedate', makeNowDate());
        // formDataTo.append('purposetype', selectedValue);
        formDataTo.append('purposetype', '01');

        formDataTo.append('ir_companynumber', '7693000033'); // 고정 값
        formDataTo.append('ir_biztype', '서비스업');
        formDataTo.append('ir_companyname', '(주)신안소프트');
        formDataTo.append('ir_taxnumber', '');
        formDataTo.append('ir_bizclassification', '소프트웨어개발업외하드웨어,쇼핑몰유통사업');
        formDataTo.append('ir_ceoname', '김순관');
        formDataTo.append('ir_email', '개발');
        formDataTo.append('ir_companyaddress', '수원시 영통구 신원로 88(신동) 102동 713호');
        formDataTo.append('ie_companynumber', '1358187511');
        formDataTo.append('ie_biztype', '서비스업,도소매');
        formDataTo.append('ie_companyname', '(주)공급받는자 회사명');
        formDataTo.append('ie_bizclassification', '하드웨어,소핑몰유통사업');
        // if 공급받는자 등록번호 판별식
        formDataTo.append('partytypecode', '01');
        
        formDataTo.append('su_companynumber', '');
        formDataTo.append('su_ceoname', '');
        
        formDataTo.append('cash', '1000000');
        formDataTo.append('scheck', '0');
        formDataTo.append('draft', '0');
        formDataTo.append('uncollected', '0');
        formDataTo.append('chargetotal', '');
        formDataTo.append('taxtotal', '100000');
        formDataTo.append('taxdetailList', taList.supplyprice);
        formDataTo.append('taxdetailList', taList.tax);
        
        // formDataTo.append('ir_companynumber', ir_companynumber);
        // formDataTo.append('ir_biztype', ir_biztype);
        // formDataTo.append('ir_companyname', ir_companyname);
        // formDataTo.append('ir_taxnumber', ir_taxnumber);
        // formDataTo.append('ir_bizclassification', ir_bizclassification);
        // formDataTo.append('ir_ceoname', ir_ceoname);
        // formDataTo.append('ir_email', ir_email);
        // formDataTo.append('ir_companyaddress', ir_companyaddress);
        // formDataTo.append('ie_companynumber', ie_companynumber);
        // formDataTo.append('ie_biztype', ie_biztype);
        // formDataTo.append('ie_companyname', ie_companyname);
        // formDataTo.append('ie_bizclassification', ie_bizclassification);
        // // if 공급받는자 등록번호 판별식
        // formDataTo.append('partytypecode', partytypecode);
        
        // formDataTo.append('su_companynumber', su_companynumber);
        // formDataTo.append('su_ceoname', su_ceoname);
        
        // formDataTo.append('cash', '1000000');
        // formDataTo.append('scheck', '0');
        // formDataTo.append('draft', '0');
        // formDataTo.append('uncollected', '0');
        // formDataTo.append('chargetotal', '');
        // formDataTo.append('taxtotal', '100000');
        // formDataTo.append('taxdetailList', taxdetailList.supplyprice);
        // formDataTo.append('taxdetailList', taxdetailList.tax);

        console.log()


        axios.post('http://115.68.1.5:8084/homtax/post', postData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'

            }
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    };

    useEffect(() => {
        
    },[taxdetailList])
    return (
        <div>
            <Button onClick={axiosTest}>api 테스트</Button>
            <Wizard>
                <Steps>
                    <Step
                        id="Add Certificate"
                        render={({ next }) => (
                            <Form onSubmit={handleSubmit2}>
                                <div className="table-responsive mt-2 text-center">
                                    <Button type='submit' variant='outline-primary'>보내기</Button>
                                </div>
                                <span className="text-start  mb-0">
                                    <Button variant="link" className="mdi mdi-progress-question " style={{ color: "#6c757d" }} onClick={toggleQnA}>
                                        설명서
                                    </Button>
                                </span>
                                <span className="float-end  mb-0" style={{ fontSize: "18px" }}>
                                    공급자 구분 * &nbsp;&nbsp;
                                    <input type="radio" name="radio"></input> 기업 &nbsp;
                                    <input type="radio" name="radio"></input> 개인 &nbsp;
                                    <input type="radio" name="radio"></input> 외국인
                                </span>
                                <div className="table-responsive  text-center">
                                    <table className="table table-bordered table-centered mb-0">
                                        <thead className="table-light">
                                            <tr>
                                                <th colSpan={10}>전자세금계산서(공급자보관용)</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td className="table-danger" rowSpan={4} style={{ width: "1%", padding: "5px" }}>공<br />급<br />자</td>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>등록번호</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id='ir_companynumber'
                                                        name='ir_companynumber'
                                                        // defaultValue={gonggeubjajeongboData.ir_companynumber}/
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", }}
                                                        placeholder="1112233444">
                                                    </input>
                                                </td>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>종사업장</td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id='ir_taxnumber'
                                                        name='ir_taxnumber'
                                                        // defaultValue={gonggeubjajeongboData.ir_taxnumber}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", }}>
                                                    </input>
                                                </td>
                                                <td className="table-blue" rowSpan={4} style={{ width: "1%", padding: "5px" }}>공급받는자</td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>등록번호</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        id='ie_companynumber'
                                                        name='ie_companynumber'
                                                        // defaultValue={gonggeubjajeongboData.ie_companynumber}
                                                        onChange={handleInputChange}
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}>
                                                    </input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>종사업장</td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>상호(법인명)</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        id='ir_companyname'
                                                        name='ir_companyname'
                                                        // defaultValue={gonggeubjajeongboData.ir_companyname}
                                                        onChange={handleInputChange}
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="OOO">
                                                    </input>
                                                </td>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>성명(대표자)</td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        id='ir_ceoname'
                                                        name='ir_ceoname'
                                                        // defaultValue={gonggeubjajeongboData.ir_ceoname}
                                                        onChange={handleInputChange}
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="나이스">
                                                    </input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>상호(법인명)</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        id='ie_companyname'
                                                        name='ie_companyname'
                                                        // defaultValue={gonggeubjajeongboData.ie_companyname}
                                                        onChange={handleInputChange}
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="나이스헤어">
                                                    </input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>성명(대표자)</td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="나헤어">
                                                    </input>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>주소</td>
                                                <td colSpan={3} style={{ width: "42%", padding: "3px 6px 3px 9px" }}>
                                                    <input
                                                    className="form-control" 
                                                    id='ir_companyaddress'
                                                    name='ir_companyaddress'
                                                    // defaultValue={gonggeubjajeongboData.ir_companyaddress}
                                                    onChange={handleInputChange}
                                                    type="text" 
                                                    style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%" }} 
                                                    placeholder="서울시 강서구 마곡동">

                                                    </input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>주소</td>
                                                <td colSpan={3} style={{ width: "42%", padding: "3px 6px 3px 9px" }}>
                                                    <input className="form-control" type="text" style={{ border: "1px solid #EEEEEE", outline: "none", width: "100%" }} placeholder="서울시 강서구 마곡동"></input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>업태</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input 
                                                    className="form-control" 
                                                    id='ir_biztype'
                                                    name='ir_biztype'
                                                    // defaultValue={gonggeubjajeongboData.ir_biztype}
                                                    onChange={handleInputChange}
                                                    type="text" 
                                                    style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }} 
                                                    placeholder="공인노무사업"></input>
                                                </td>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>종목</td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id='ir_bizclassification'
                                                        name='ir_bizclassification'
                                                        // defaultValue={gonggeubjajeongboData.ir_bizclassification}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="서비스업"></input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>업태</td>
                                                <td style={{ width: "13%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        id='ie_biztype'
                                                        name='ie_biztype'
                                                        // defaultValue={gonggeubjajeongboData.ie_biztype}
                                                        onChange={handleInputChange}
                                                        className="form-control"
                                                        type="text"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}
                                                        placeholder="미용업">
                                                    </input>
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>종목</td>
                                                <td style={{ width: "14%", padding: "3px 3px 3px 9px" }}>
                                                    <input 
                                                    className="form-control" 
                                                    id='ie_bizclassification'
                                                    name='ie_bizclassification'
                                                    // defaultValue={gonggeubjajeongboData.ie_bizclassification}
                                                    onChange={handleInputChange}
                                                    type="text" 
                                                    style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }} 
                                                    placeholder="서비스업">
                                                    </input>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <th className="table-light" colSpan={2}>작성일자 *</th>
                                                <th className="table-light" colSpan={3}>공급가격 *</th>
                                                <th className="table-light" colSpan={3}>세액 *</th>
                                                <th className="table-light" colSpan={2}>합계금액</th>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} style={{ padding: "3px 3px 3px 9px" }}><input className="form-control" type="date" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}></input></td>
                                                <td colSpan={3} style={{ padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ width: "99%", border: "1px solid #EEEEEE", outline: "none", textAlign: "right" }}></input></td>
                                                <td colSpan={3} style={{ padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ width: "99%", border: "1px solid #EEEEEE", outline: "none", textAlign: "right" }}></input></td>
                                                <td colSpan={2} style={{ padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ width: "99%", border: "1px solid #EEEEEE", outline: "none", textAlign: "right" }}></input></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table table-bordered table-centered mt-0">
                                        <tbody>
                                            <tr>
                                                <th className="table-light" style={{ width: "15%", }}>월/일</th>
                                                <th className="table-light" style={{ width: "15%", }}>품목</th>
                                                <th className="table-light" style={{ width: "10%", }}>규격</th>
                                                <th className="table-light" style={{ width: "10%", }}>수량</th>
                                                <th className="table-light" style={{ width: "10%", }}>단가(원)</th>
                                                <th className="table-light" style={{ width: "10%", }}>공급가액(원)</th>
                                                <th className="table-light" style={{ width: "10%", }}>세액(원)</th>
                                                <th className="table-light" colSpan={2} style={{ width: "15%", padding: "5px" }}>
                                                    비고
                                                </th>
                                                <th className="table-light" style={{ width: "5%", }}>
                                                    <button style={{ width: "30px", border: "1px solid gray", outline: "none" }}>+</button>
                                                </th>
                                            </tr>
                                            <tr>

                                                <td style={{ width: "15%", padding: "3px 3px 3px 9px" }}>
                                                    <input className="form-control" style={{ width: "20%", border: "1px solid #EEEEEE", outline: "none", display: "inline-block" }}></input> / <input className="form-control" style={{ width: "20%", border: "1px solid #EEEEEE", outline: "none", display: "inline-block" }}></input>
                                                </td>
                                                <td style={{ width: "15%", padding: "3px 3px 3px 9px" }}>
                                                    <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}></input>
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}></input></td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}></input></td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}></input></td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}></input></td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}></input></td>
                                                <td colSpan={2} style={{ width: "15%", padding: "3px 3px 3px 9px" }}>
                                                    <input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%" }}></input>
                                                </td>
                                                <td style={{ width: "5%", }}>
                                                    <button style={{ width: "30px", border: "1px solid gray", outline: "none" }}>-</button>
                                                </td>
                                            </tr>
                                            <tr >
                                                <th className="table-light" style={{ width: "10%", }}>합계금액</th>
                                                <th className="table-light" style={{ width: "10%", }}>현금</th>
                                                <th className="table-light" style={{ width: "10%", }}>수표</th>
                                                <th className="table-light" style={{ width: "10%", }}>어음</th>
                                                <th className="table-light" style={{ width: "10%", }}>외상무수금</th>
                                                <td rowSpan={2} colSpan={5} style={{ width: "50%", fontSize: "18px" }}>이 금액을 <br />
                                                    <input type="radio" name="radio" value='01' checked={selectedValue === '01'} onChange={handleRadioChange}></input> 영수 &nbsp;
                                                    <input type="radio" name="radio" value='02' checked={selectedValue === '02'} onChange={handleRadioChange}></input> 청구 &nbsp; 함
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}></input></td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}></input></td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}></input></td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}></input></td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "right" }}></input></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="table-responsive mt-2 text-center">
                                    <table className="table table-bordered table-centered text-black">
                                        <thead className="table-light">
                                            <tr>
                                                <th style={{ width: "13%", }}></th>
                                                <th style={{ width: "29%", }}>발급담당자</th>
                                                <th style={{ width: "29%", }}>수신담당자1</th>
                                                <th style={{ width: "29%", }}>수신담당자2</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th style={{ width: "13%", }}>담당자 부서명</th>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th style={{ width: "13%", }}>담당자 명 *</th>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input 
                                                    className="form-control"
                                                    id='ir_name'
                                                    name='ir_name'
                                                    // defaultValue={gonggeubjajeongboData.ir_name}
                                                    onChange={handleInputChange} 
                                                    style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}></input></td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}></input></td>
                                            </tr>
                                            <tr>
                                                <th style={{ width: "13%", }}>이메일 주소 *</th>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input 
                                                    className="form-control" 
                                                    id='ir_email'
                                                    name='ir_email'
                                                    // defaultValue={gonggeubjajeongboData.ir_email}
                                                    onChange={handleInputChange}
                                                    style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}></input></td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}><input className="form-control" style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}></input></td>
                                            </tr>
                                            <tr>
                                                <th style={{ width: "13%", }}>연락처</th>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                                <td style={{ width: "29%", padding: "3px 3px 3px 9px" }}>
                                                    <input
                                                        className="form-control"
                                                        style={{ border: "1px solid #EEEEEE", outline: "none", width: "99%", textAlign: "center" }}>
                                                    </input>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <ul className="list-inline wizard mb-0">
                                    <li className="next list-inline-item float-end">
                                        <Button onClick={next} variant="link">
                                            다음
                                        </Button>
                                    </li>
                                </ul>
                            </Form>
                        )}
                    />
                    <Step
                        id="Issued"
                        render={({ next, previous }) => (
                            <Form>
                                <div>
                                    <h3 className="header-title mb-3 font-18"> 미리보기</h3>
                                </div>
                                <div className="table-responsive mt-2 text-center">
                                    <table className="table table-bordered table-centered">
                                        <thead className="table-light">
                                            <tr>
                                                <th colSpan={10}>전자세금계산서(공급자보관용)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="table-danger" rowSpan={4} style={{ width: "1%", padding: "5px" }}>
                                                    공<br />급<br />자<br />
                                                </td>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>
                                                    등록번호 *
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    111-22-33444
                                                </td>
                                                <td className="table-danger" style={{ width: "10%", padding: "5px" }}>
                                                    종사업장번호
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    000000000
                                                </td>
                                                <td className="table-blue" rowSpan={4} style={{ width: "1%", padding: "5px" }}>
                                                    공급받는자
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>
                                                    등록번호 *
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }}> 
                                                    000 11 44552
                                                </td>
                                                <td className="table-blue" style={{ width: "10%", padding: "5px" }}>
                                                    종사업장번호
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    1111111
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>
                                                    상호(법인명) *
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    사업장테스트
                                                </td>
                                                <td className="table-danger" style={{ width: "10%", padding: "5px" }}>
                                                    성명(대표자) *
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    나이스
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>
                                                    상호(법인명) *
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    MM주식회사
                                                </td>
                                                <td className="table-blue" style={{ width: "10%", padding: "5px" }}>
                                                    성명(대표자) *
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    MMS
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>
                                                    주소
                                                </td>
                                                <td colSpan={3} style={{ width: "43%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    서울시 강서구 마곡동
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>
                                                    주소
                                                </td>
                                                <td colSpan={3} style={{ width: "43%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    서울시
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="table-danger" style={{ width: "8%", padding: "5px" }}>
                                                    업태
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    판매
                                                </td>
                                                <td className="table-danger" style={{ width: "10%", padding: "5px" }}>
                                                    종목
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    소프트
                                                </td>
                                                <td className="table-blue" style={{ width: "8%", padding: "5px" }}>
                                                    업태
                                                </td>
                                                <td style={{ width: "20%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    판매
                                                </td>
                                                <td className="table-blue" style={{ width: "10%", padding: "5px" }}>
                                                    종목
                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    소프트
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <th className="table-light" colSpan={2}>
                                                    작성일자 *
                                                </th>
                                                <th className="table-light" colSpan={3}>
                                                    공급가격 *
                                                </th>
                                                <th className="table-light" colSpan={3}>
                                                    세액 *
                                                </th>
                                                <th className="table-light" colSpan={2}>
                                                    비고
                                                </th>
                                            </tr>
                                            <tr>
                                                <td colSpan={2} style={{ padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    2022.05.01
                                                </td>
                                                <td colSpan={3} style={{ padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    1,000,000
                                                </td>
                                                <td colSpan={3} style={{ padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    100,000
                                                </td>
                                                <td colSpan={2} style={{ padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    -
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table table-bordered table-centered mt-0">
                                        <tbody>
                                            <tr>
                                                <th className="table-light" style={{ width: "15%" }}>
                                                    월/일
                                                </th>
                                                <th className="table-light" style={{ width: "15%" }}>
                                                    품목
                                                </th>
                                                <th className="table-light" style={{ width: "10%", }}>
                                                    규격
                                                </th>
                                                <th className="table-light" style={{ width: "10%", }}>
                                                    수량
                                                </th>
                                                <th className="table-light" style={{ width: "10%", }}>
                                                    단가
                                                </th>
                                                <th className="table-light" style={{ width: "10%", }}>
                                                    공급가액
                                                </th>
                                                <th className="table-light" style={{ width: "10%", }}>
                                                    세액
                                                </th>
                                                <th className="table-light" colSpan={2} style={{ width: "15%", padding: "5px" }}>
                                                    비고
                                                </th>
                                                <th className="table-light" style={{ width: "5%", }}>
                                                    <button
                                                        style={{ width: "30px", border: "1px solid gray", outline: "none" }} disabled>
                                                        +
                                                    </button>
                                                </th>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "15%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    04/20
                                                </td>
                                                <td style={{ width: "15%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    키보드
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    100
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    1,000
                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td colSpan={2} style={{ width: "15%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td style={{ width: "5%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                
                                                </td>
                                            </tr>

                                            <tr>

                                                <th className="table-light" style={{ width: "10%" }}>
                                                    합계금액
                                                </th>
                                                <th className="table-light" style={{ width: "10%" }}>
                                                    현금
                                                </th>
                                                <th className="table-light" style={{ width: "10%" }}>
                                                    수표
                                                </th>
                                                <th className="table-light" style={{ width: "10%" }}>
                                                    어음
                                                </th>
                                                <th className="table-light" style={{ width: "10%" }}>
                                                    외상무수금
                                                </th>
                                                <td rowSpan={2} colSpan={5} style={{ width: "50%", fontSize: "18px" }}>
                                                    이 금액을 <br /> &nbsp;&nbsp; 청구 &nbsp; 함
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px", height: "44.95px" }}>

                                                </td>
                                                <td style={{ width: "10%", padding: "3px 3px 3px 9px", height: "44.95px" }}>
                                                    
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <ul className="list-inline wizard mb-0">
                                    <li className="previous list-inline-item">
                                        <Button onClick={previous} variant="link">
                                            뒤로
                                        </Button>
                                    </li>
                                    <li className="next list-inline-item float-end">
                                        <Button onClick={next} variant="link">
                                            발급하기
                                        </Button>
                                    </li>
                                </ul>
                            </Form>
                        )}
                    />

                    <Step
                        id="completed"
                        render={({ previous }) => (
                            <Row>
                                <Col sm={12}>
                                    <div className="text-center">
                                        <h2 className="mt-0">
                                            <i className="mdi mdi-check-all"></i>
                                        </h2>
                                        <h3 className="mt-0">세금계산서 발급을 완료했습니다</h3>

                                        <span className="w-75 mt-2 mb-4 mx-auto">
                                            완료된 계산서는 목록에서 확인이 가능하며<br />
                                            홈택스에 요청한 작업이 완료까지 시간이 소요될수 있습니다.
                                        </span>

                                        {/* <div className="mb-3">
                                                
                                            </div> */}
                                    </div>
                                </Col>

                                <Col sm={12}>
                                    <ul className="list-inline wizard mb-0">
                                        <li className="previous list-inline-item">
                                            <Button onClick={previous} variant="link">
                                                뒤로
                                            </Button>
                                        </li>

                                        <li className="next list-inline-item float-end">
                                            <Button variant="link">완료</Button>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        )}
                    />
                </Steps>
            </Wizard>
            {/* QnA 모달 */}
            <Modal show={isOpen5} onHide={toggleQnA}>
                <Modal.Header style={{ backgroundColor: "#727cf5" }} closeButton
                >
                    <h5 className="text-white">전자세금계산서(일반)</h5>

                </Modal.Header>
                <Modal.Body className="qna">
                    <Row>
                        <Col>
                            <span className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>전자세금계산서란?</span>
                            <span className="font-15">
                                세금계산서를 공인인증서를 사용하여 전자서명이 된 디지털 문서형태의 세금계산서를 말하며,
                                인터넷을 통해 발행, 보관, 교부 및 국세청 신고가 가능한 세금계산서를 말합니다.
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>전자세금계산서 발급기한</span>
                            <span className="font-15">
                                전자세금계산서는 일반세금계산서(종이세금계산서)와 마찬가지로 반드시 거래시기가 속하는 달의 다음 달 10일까지 발급해야 합니다
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <span className="mb-0 text-black font-16" style={{ fontWeight: 'bold' }}>전자세금계산서 의무 발급자</span>
                            <span className="font-15">
                                법인사업자와 직전연도 사업자별 공급가액이 3억원 이상인 개인사업자는
                                종이세금계산서 대신 의무적으로 전자세금계산서를 발급하여야 합니다.
                            </span>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button size="sm" variant="link" type="submit" onClick={toggleQnA} >
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};



const Completelistilban = () => {


    const [order_date2] = useState<string>('2022.05.01');
    const [order_date3] = useState<string>('ox주식회사');
    const [order_date4] = useState<string>('100,000');
    const [order_date5] = useState<string>('10,000');
    const [order_date6] = useState<string>('2022.04.22');
    const [order_date7] = useState<string>('MM주식회사');
    const [order_date8] = useState<string>('5,000');
    const [order_date9] = useState<string>('500');
    const [order_date10] = useState<string>('2022.04.22');
    const [order_date11] = useState<string>('CC주식회사');
    const [order_date12] = useState<string>('1500');
    const [order_date13] = useState<string>('150');
    const [order_date14] = useState<string>('-');






    return (
        <>
            <div>
                <h3>최근 발급한 세금계산서</h3>
                <span>나이스에서 발급하여 홈택스에 등록이 완료된 세금계산서만 조회됩니다</span>

                <div className="table-responsive mt-3 text-center">
                    <table className="table table-bordered table-centered text-black">
                        <thead className="table-light">
                            <tr>
                                <th>작성일자</th>
                                <th>공급받는자</th>
                                <th>공급가격</th>
                                <th>세액</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{order_date2}</td>
                                <td>{order_date3}</td>
                                <td>{order_date4}</td>
                                <td>{order_date5}</td>
                                <td>{order_date14}</td>
                            </tr>
                            <tr>
                                <td>{order_date6}</td>
                                <td>{order_date7}</td>
                                <td>{order_date8}</td>
                                <td>{order_date9}</td>
                                <td>{order_date14}</td>
                            </tr>
                            <tr>
                                <td>{order_date10}</td>
                                <td>{order_date11}</td>
                                <td>{order_date12}</td>
                                <td>{order_date13}</td>
                                <td>{order_date14}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>


        </>
    );
};

const Ilbanpage = () => {
    return (
        <>

            <Row>
                <Col>
                    <Ilbangyesanseo />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Completelistilban />
                </Col>
            </Row>
        </>
    );
};

export default Ilbanpage;