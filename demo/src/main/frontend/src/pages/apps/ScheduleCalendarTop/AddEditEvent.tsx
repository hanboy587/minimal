import { Modal, Row, Col, Button } from 'react-bootstrap';
import { DateClickArg } from '@fullcalendar/interaction';
import { EventInput } from '@fullcalendar/react';
import { FormInput } from 'components';
import { Event } from './types';
import { useAddEditEvent, useCalendar } from './hooks';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { getRealname } from 'utils/getRealname';
import axios from 'axios';
import { getUsername } from 'utils/getUsername';
import moment from 'moment';
import { makeNowDate } from 'utils/makeNowDate';

const EXPANSION = 1;
const UNEXPANDED = 0;

type AddEditEventProps = {
    isOpen: boolean;
    onClose: () => void;
    isEditable: boolean;
    eventData: EventInput;
    onRemoveEvent: () => void;
    onUpdateEvent: (value: Event) => void;
    onAddEvent: (value: Event) => void;
    dateInfo: DateClickArg;
    clickDateInfo: Date | undefined;
    setClickDateInfo: Dispatch<SetStateAction<Date | undefined>>;
    clickNowDateInfo: string | undefined;
    cancelId: any | undefined;
    cancelType: any | undefined;
    selectDate: any | undefined;
};

const AddEditEvent = ({
    isOpen,
    onClose,
    isEditable,
    eventData,
    onRemoveEvent,
    onUpdateEvent,
    onAddEvent,
    dateInfo,
    clickDateInfo,
    setClickDateInfo,
    clickNowDateInfo,
    cancelId,
    cancelType,
    selectDate
}: AddEditEventProps) => {
    const { register, control, errors } = useAddEditEvent(
        eventData,
        isEditable,
        onUpdateEvent,
        onAddEvent,
    );

    const [extensionDate, setExtensionDate] = useState(UNEXPANDED);
    const [inputs, setInputs] = useState({
        modalDate: '',
        selectItem: '',
        vacationSelectItem: '',
        updateTime: '',
        comment: '',
        money: '',
        overTimeStart: '',
        overTimeEnd: '',
        nowTime: '',
    });

    const { modalDate, selectItem, vacationSelectItem, updateTime, comment, money, overTimeStart, overTimeEnd, nowTime } = inputs;

    // 퇴근날짜 다음날로 확장할때 사용
    useEffect(() => {
        setInputs({
            ...inputs,
            overTimeEnd: "",
            updateTime: "",
        });
    }, [extensionDate]);

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    }, [inputs]);

    const onReset = () => {
        setInputs({
            modalDate: '',
            selectItem: '',
            vacationSelectItem: '',
            updateTime: '',
            comment: '',
            money: '',
            overTimeStart: '',
            overTimeEnd: '',
            nowTime: '',
        });
    };

    const getKoreaTime = (clickDateInfo: Date) => {
        // deep copy issue
        let tempDateInfo: Date = new Date(clickDateInfo);
        tempDateInfo.setHours(tempDateInfo.getHours() - 9);
        let Hours: string = tempDateInfo.getHours().toString();
        if (Hours.length == 1) {
            Hours = "0" + Hours;
        }
        let Minutes: string = tempDateInfo.getMinutes().toString();
        if (Minutes.length == 1) {
            Minutes = "0" + Minutes;
        }
        const time = Hours + ":" + Minutes;
        let year = tempDateInfo.getFullYear().toString();
        let month = (tempDateInfo.getMonth() + 1).toString();
        let day = tempDateInfo.getDate().toString();
        if (year.length == 1) {
            year = "0" + year;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        if (day.length == 1) {
            day = "0" + day;
        }
        const date = year + "-" + month + "-" + day;
        return [date, time];
    };

    // 수정요청하기 -> 요청시간이 처음 요청시간이랑 같으면 alert띄우기
    // 출근요청 -> 요청이 들어감 이미 출근요청이 또 있다면 ?
    // 퇴근요청 -> 출근이 이미 있는경우 허용 이부분 예외처리

    interface commuteTypeinter {
        idx: number;
        nowDate: string;
        username: string;
        work: string;
        workIp: string;
        workDistance: string;
        workLatitude: string;
        workLongitude: string;
        workDeviceType: string;
        correctionWork: Date;
        correctionWorkComment: Date;
        leave: string;
        leaveIp: string;
        leaveDistance: string;
        leaveLatitude: string;
        leaveLongitude: string;
        leaveDeviceType: string;
        correctionLeave: string;
        correctionLeaveComment: string;
        going: string;
    };

    const isValidCheckGenerateGyeolJae = () => {
        if (selectItem == "earlyLeave") {
            if (!money) {
                alert("(유급/무급) 선택해주세요");
                return false;
            }
            if (!comment) {
                alert("사유를 입력해주세요");
                return false;
            }
        } else if (selectItem == "work" || selectItem == "leave" || selectItem == "businessTrip" || selectItem == "going") {
            if (!updateTime) {
                alert("요청시간을 입력해주세요");
                return false;
            }
            if (!comment) {
                alert("사유를 입력해주세요");
                return false;
            }
        } else if (selectItem == "vacation") {
            if (!vacationSelectItem) {
                alert("휴가 신청 목록을 선택해주세요");
                return false;
            }
            if (!money) {
                alert("(유급/무급) 선택해주세요");
                return false;
            }
            if (!comment) {
                alert("사유를 입력해주세요");
                return false;
            }
        } else if (selectItem == "going") {
            if (!money) {
                alert("(유급/무급) 선택해주세요");
                return false;
            }
            if (!comment) {
                alert("사유를 입력해주세요");
                return false;
            }
        } else if (selectItem == "work" || selectItem == "leave") {
            if (!updateTime) {
                alert("요청시간을 입력해주세요");
                return false;
            }
            if (!comment) {
                alert("사유를 입력해주세요");
                return false;
            }
        } else if (selectItem == "overTime") {
            if (!overTimeStart) {
                alert("추가시작 시간을 정해주세요");
                return false;
            }
            if (!overTimeEnd) {
                alert("추가종료 시간을 정해주세요");
                return false;
            }
            const start = moment(modalDate + 'T' + overTimeStart);
            const end = moment(overTimeEnd);
            const flag = start.isSameOrAfter(end);
            if (flag) {
                alert("추가종료시간이 시작시간보다 빠릅니다. \n정정해주세요.");
                return false;
            }
            if (!comment) {
                alert("사유를 입력해주세요");
                return false;
            }
        } else {
            alert("선택항목을 선택해주세요");
            return false;
        }
        return true;
    }

    const leaveGenerateToGyeolJae = async () => {
        const data = {
            username: getUsername(),
            nowDate: modalDate,
        };

        const res = await axios.post("findCommute", data);
        const commute: commuteTypeinter = res.data;

        const commuteRes = await axios.post('/gyeolJaeList');
        if(commuteRes.data.filter((item:any) => item.commuteType == '퇴근' && item.nowDate == modalDate && item.approvalStatus !='APPROVED_CANCEL').length != 0){
            // console.log('퇴근 리스트', commuteRes.data.filter((item:any) => item.commuteType == '퇴근' && item.nowDate == modalDate && item.approvalStatus !='APPROVED_CANCEL'))
            alert('선택하신 날짜의 퇴근 생성 요청이 이미 존재합니다.\n추가 생성이 필요한 경우 개발팀에 문의해주세요.')
            return false;
        }

        if (!commute || !commute.work) {
            alert("출근 생성을 먼저 해주세요");
            return false;
        }
        if (commute.leave) {
            alert("퇴근이 이미 되어있습니다.\n수정을 원하신다면 스케줄의 해당블록을 클릭해주세요.");
            return false;
        }
        const work = moment(commute.work);
        const leave = moment(updateTime);
        if (work.isSameOrAfter(leave)) {
            alert("퇴근시간이 출근시간보다 빠릅니다.  정정바랍니다.");
            return false;
        }
        const data2 = {
            "type": selectItem,
            "requesterUsername": getUsername(),
            "requesterRealname": getRealname(),
            "nowDate": modalDate,
            "updateTime": updateTime,
            "comment": comment,
        };
        const res2 = await axios.post("requestGenerateCommute", data2);
        return true;
    };

    const workGenerateToGyeolJae = async () => {
        const data = {
            username: getUsername(),
            nowDate: modalDate,
        };
        const res = await axios.post("findCommute", data);
        const commute: commuteTypeinter = res.data;
        
        const commuteRes = await axios.post('/gyeolJaeList');
        if(commuteRes.data.filter((item:any) => item.commuteType == '근태' && item.nowDate == modalDate && item.approvalStatus !='APPROVED_CANCEL').length != 0){
            alert('선택하신 날짜의 출근 생성 요청이 이미 존재합니다.\n추가 생성이 필요한 경우 개발팀에 문의해주세요.')
            return false;
        }
        if (commute) {
            if (commute.work) {
                alert("오늘 자 출근이 이미 존재합니다.\n수정이 필요하시다면 스케줄 정정을 해주세요");
            return false;
            }
        } else {
            const data2 = {
                "type": selectItem,
                "requesterUsername": getUsername(),
                "requesterRealname": getRealname(),
                "nowDate": modalDate,
                "updateTime": modalDate + "T" + updateTime,
                "comment": comment,
            };
            
                const res2 = await axios.post("requestGenerateCommute", data2);
                // console.log('::::::::::::', data2);
                if (res2.data) {
                    return true;
                } else {
                    console.log("ERROR 관리자에게 문의 바람");
                    return false;
                }
        }
        return false;
    };

    // @@@@@@@@@@@@@@
    const hyugaGenerateToGyeolJae = async () => {
        const nowTime = new Date();
        const gyeolJaeDay = new Date();
        const data = {
            "type": selectItem,
            "vacationSelectItem": vacationSelectItem,
            "requesterUsername": getUsername(),
            "requesterRealname": getRealname(),
            "nowDate": modalDate,
            "money": money,
            "comment": comment,
            "nowTime": nowTime,
            "updateTime": updateTime,
            "gyeolJaeDay": gyeolJaeDay,
        };
        // console.log(':::::::::', data);
        const commuteRes = await axios.post('/gyeolJaeList');
        if(commuteRes.data.filter((item:any) => item.type.includes('휴가') && item.nowDate == modalDate && item.approvalStatus !='APPROVED_CANCEL').length != 0){
            alert('선택하신 날짜의 휴가 생성 요청이 이미 존재합니다.\n추가 생성이 필요한 경우 개발팀에 문의해주세요.')
            return false;
        }
        const res = await axios.post("request-generate-hyuga", data);
        const msg = res.data;
        if (msg == "SUCCESS")
            return true;
        return false;
    };

    const oeChulGenerateToGyeolJae = async () => {
        const data = {
            "type": selectItem,
            "requesterUsername": getUsername(),
            "requesterRealname": getRealname(),
            "nowDate": modalDate,
            "updateTime": updateTime,
            "money": money,
            "comment": comment,
        };
        const commuteRes = await axios.post('/gyeolJaeList');
        if(commuteRes.data.filter((item:any) => item.type.includes('외출') && item.nowDate == modalDate && item.approvalStatus !='APPROVED_CANCEL').length != 0){
            alert('선택하신 날짜의 외출 생성 요청이 이미 존재합니다.\n추가 생성이 필요한 경우 개발팀에 문의해주세요.')
            return false;
        }
        const res = await axios.post("request-generate-oechul", data);
        const msg = res.data;
        // console.log('외출 모달 axios @@@@@@@@@@@@@@@@@@@@@@@', data);
        if (msg == "SUCCESS")
            return true;
        return false;
    };

    const chulJangGenerateToGyeolJae = async () => {
        const data = {
            "type": selectItem,
            "requesterUsername": getUsername(),
            "requesterRealname": getRealname(),
            "nowDate": modalDate,
            "updateTime": updateTime,
            "comment": comment,
        };
        const commuteRes = await axios.post('/gyeolJaeList');
        if(commuteRes.data.filter((item:any) => item.type.includes('출장') && item.nowDate == modalDate && item.approvalStatus !='APPROVED_CANCEL').length != 0){
            alert('선택하신 날짜의 출장 생성 요청이 이미 존재합니다.\n추가 생성이 필요한 경우 개발팀에 문의해주세요.')
            return false;
        }
        // const res = await axios.post("requestGenerateBusinessTrip", data);
        const res = await axios.post("request-generate-chuljang", data);
        const msg = res.data;
        if (msg == "SUCCESS")
            return true;
        return false;
    };

    const joToeGenerateToGyeolJae = async () => {
        const data = {
            "type": selectItem,
            "requesterUsername": getUsername(),
            "requesterRealname": getRealname(),
            "nowDate": modalDate,
            "updateTime": updateTime,
            "money": money,
            "comment": comment,
        };
        const commuteRes = await axios.post('/gyeolJaeList');
        if(commuteRes.data.filter((item:any) => item.type.includes('조퇴') && item.nowDate == modalDate && item.approvalStatus !='APPROVED_CANCEL').length != 0){
            alert('선택하신 날짜의 조퇴 생성 요청이 이미 존재합니다.\n추가 생성이 필요한 경우 개발팀에 문의해주세요.')
            return false;
        }
        const res = await axios.post("request-generate-jotoe", data);
        const msg = res.data;
        return true;
    };

    const chuGaGeunMuGenerateToGyeolJae = async () => {
        const data = {
            "type": selectItem,
            "requesterUsername": getUsername(),
            "requesterRealname": getRealname(),
            "nowDate": modalDate,
            "overTimeStart": modalDate + "T" + overTimeStart,
            "overTimeEnd": overTimeEnd,
            "money": money,
            "comment": comment,
        };
        const commuteRes = await axios.post('/gyeolJaeList');
        // if(commuteRes.data.filter((item:any) => item.type.includes('추가') && item.nowDate == modalDate && item.approvalStatus !='APPROVED_CANCEL').length != 0){
        //     alert('선택하신 날짜의 연장근무 생성 요청이 이미 존재합니다.\n추가 생성이 필요한 경우 개발팀에 문의해주세요.')
        //     return false;
        // }
        const res = await axios.post("request-generate-chugageunmu", data);
        const msg = res.data;
        if (msg == "SUCCESS")
            return true;
        return false;
    };

    const generateGyeolJaeEachLogic = () => {
        if (selectItem == "work") {
            return workGenerateToGyeolJae();
        } else if (selectItem == "leave") {
            return leaveGenerateToGyeolJae();
        } else if (selectItem == "vacation") {
            return hyugaGenerateToGyeolJae();
        } else if (selectItem == "going") {
            return oeChulGenerateToGyeolJae();
        } else if (selectItem == "businessTrip") {
            return chulJangGenerateToGyeolJae();
        } else if (selectItem == "earlyLeave") {
            return joToeGenerateToGyeolJae();
        } else if (selectItem == "overTime") {
            return chuGaGeunMuGenerateToGyeolJae();
        } else {
            return false;
        }
    };

    const findCommute = async () => {
        // db확인
        const data = {
            username: getUsername(),
            nowDate: clickNowDateInfo,
        };
        const res = await axios.post("findCommute", data);
        const commute = res.data;
        return commute;
    }

    const workUpdateToGyeolJae = async () => {
        const commute: any = await findCommute();
        // alert("workUpdateToGyeolJae");
        alert("요청이 전송되었습니다");
        // 퇴근이 없는경우 바로바꿔줌
        const data = {
            "requesterUsername": getUsername(),
            "requesterRealname": getRealname(),
            "nowDate": modalDate,
            "updateTime": modalDate + "T" + updateTime,
            "comment": comment,
            "type": selectItem,
        };
        if (!commute.leave) {
            const res = await axios.post("requestUpdateCommute", data);
            const msg = res.data;
            if (msg != "SUCCESS") {
                alert("예상치못한오류입니다.\n관리자에게 문의해주세요");
                return false;
            }
            return true;
        }
        // 출근 레코드 확인
        // leave 가 있다는뜻
        const leave = moment(commute.leave);
        const work = moment(updateTime);
        const result = work.isSameOrAfter(leave);
        // console.log(result);
        if (work.isSameOrAfter(leave)) {
            alert("수정한 출근시간이 퇴근시간보다 느립니다.");
            return false;
        } else {
            const res = await axios.post("requestUpdateCommute", data);
            const msg = res.data;
            if (msg != "SUCCESS") {
                alert("예상치못한오류입니다.\n관리자에게 문의해주세요");
                return false;
            }
            return true;
        }
        // const res = await axios.post("requestUpdateCommute", data);
    };

    const leaveUpdateToGyeolJae = async () => {
        // alert("debug");
        alert("요청이 전송되었습니다");
        const data = {
            "requesterUsername": getUsername(),
            "requesterRealname": getRealname(),
            "nowDate": clickNowDateInfo,
            "updateTime": modalDate + "T" + updateTime,
            "comment": comment,
            "type": selectItem,
        };
        const commute: any = await findCommute();
        if (!commute) {
            alert("출근이 생성되어있지않습니다.");
            return false;
        }
        if (!commute.work) {
            alert("출근이 생성되어있지않습니다.");
            return false;
        }
        if (!commute.leave) {
            alert("수정할 퇴근이 없습니다.");
            return false;
        }
        const work = moment(commute.work);
        const leave = moment(updateTime);
        if (leave.isSameOrBefore(work)) {
            alert("퇴근시간이 출근시간과 같거나 빠릅니다.");
            return false;
        }
        const res = await axios.post("requestUpdateCommute", data);
        const msg = res.data;
        if (msg != "SUCCESS") {
            alert("예상치못한오류입니다.\n관리자에게 문의해주세요");
            return false;
        }
        return true;
    };

    const updateGyeolJaeEachLogic = async () => {
        if (selectItem == "work") {
            const res = await workUpdateToGyeolJae();
            return res;
            // return workUpdateToGyeolJae();
        } else if (selectItem == "leave") {
            return leaveUpdateToGyeolJae();
        }
    };

    const generateGyeolJae = async () => {
        // console.log("inputs : ", inputs);
        if (!isValidCheckGenerateGyeolJae()) {
            return;
        }
        if (!(await generateGyeolJaeEachLogic())) {
            alert("오류가 발생했습니다.");
            return;
        }
        alert("요청이 전송되었습니다.");
        onClose();
    };

    const isValidCheckUpdateGyeolJae = () => {
        if (selectItem == "work" || selectItem == "leave") {
            if (!updateTime) {
                alert("요청시간을 입력해주세요");
                return false;
            }
            if (!comment) {
                alert("사유를 입력해주세요");
                return false;
            }
        }
        return true;
    };

    const updateGyeolJae = async () => {
        // console.log("inputs : ", inputs);
        if (!isValidCheckUpdateGyeolJae()) {
            return;
        }
        if (!(await updateGyeolJaeEachLogic())) {
            return;
        }
        onClose();
    };

    useEffect(() => {
        if (clickDateInfo) {
            const [date, time] = getKoreaTime(clickDateInfo);
            if (isEditable == true) {
                if (eventData.title == "출근") {
                    if (clickNowDateInfo) {
                        setInputs({
                            ...inputs,
                            selectItem: "work",
                            updateTime: date + "T" + time,
                            modalDate: clickNowDateInfo,
                        });
                    }
                } else if (eventData.title == "퇴근") {
                    if (clickNowDateInfo) {
                        setInputs({
                            ...inputs,
                            selectItem: "leave",
                            updateTime: date + "T" + time,
                            modalDate: clickNowDateInfo,
                        });
                    }
                } else if (eventData.title?.includes('연차')) {
                    if (clickNowDateInfo) {
                        setInputs({
                            ...inputs,
                            selectItem: "vacation",
                            updateTime: date + "T" + time,
                            modalDate: clickNowDateInfo,
                        });
                    }
                } else if (eventData.title == "외출") {
                    if (clickNowDateInfo) {
                        setInputs({
                            ...inputs,
                            selectItem: "going",
                            updateTime: date + "T" + time,
                            modalDate: clickNowDateInfo,
                        });
                    }
                }
            } else {
                setInputs({
                    ...inputs,
                    // selectItem: "work",
                    selectItem: '',
                    modalDate: dateInfo.dateStr,
                    updateTime: '',
                });
            }
        } else {
            setInputs({
                ...inputs,
                // selectItem: "work",
                selectItem: '',
                modalDate: dateInfo.dateStr,
                updateTime: '',
            });
        }
    }, [isEditable, clickDateInfo]);

    type updateBtnProps = {
        name: string;
    };

    const UpdateBtn = ({ name }: updateBtnProps) => {
        return (
            <Button className="btn btn-success btn btn-success" onClick={updateGyeolJae}>
                {name}
            </Button>
        );
    };

    const UpdateBtnArea = () => {
        if (selectItem == "work") {
            return <UpdateBtn name={"출근수정 요청하기"} />;
        } else if (selectItem == "leave") {
            return <UpdateBtn name={"퇴근수정 요청하기"} />;
        } else if (selectItem == "vacation") {
            return <UpdateBtn name={"휴가수정 요청하기"} />;
        } else if (selectItem == "going") {
            return <UpdateBtn name={"외출수정 요청하기"} />;
        } else if (selectItem == "businessTrip") {
            return <UpdateBtn name={"출장수정 요청하기"} />;
        } else if (selectItem == "earlyLeave") {
            return <UpdateBtn name={"조퇴수정 요청하기"} />;
        } else if (selectItem == "overTime") {
            return <UpdateBtn name={"연장근무 수정요청하기"} />;
        } else {
            return null;
        }
    };

    type generateBtnProps = {
        name: string;
    };

    const GenerateBtn = ({ name }: generateBtnProps) => {
        return (
            <Button className="btn btn-success btn btn-success" onClick={generateGyeolJae}>
                {name}
            </Button>
        );
    };

    const GenerateBtnArea = () => {
        if (selectItem == "work") {
            return <GenerateBtn name={"출근생성요청하기"} />;
        } else if (selectItem == "leave") {
            return <GenerateBtn name={"퇴근생성요청하기"} />;
        } else if (selectItem == "vacation") {
            return <GenerateBtn name={"휴가생성요청하기"} />;
        } else if (selectItem == "going") {
            return <GenerateBtn name={"외출생성요청하기"} />;
        } else if (selectItem == "businessTrip") {
            return <GenerateBtn name={"출장생성요청하기"} />;
        } else if (selectItem == "earlyLeave") {
            return <GenerateBtn name={"조퇴생성요청하기"} />;
        } else if (selectItem == "overTime") {
            return <GenerateBtn name={"연장근무생성요청하기"} />;
        } else {
            return null;
        }
    };

    const RequestButton = () => {
        return (
            <>
                {isEditable ? <UpdateBtnArea /> : <GenerateBtnArea />}
            </>
        );
    };

    const Comment = useCallback((props) => {
        const { comment } = props;
        return (
            <FormInput
                type="input"
                label="사유작성"
                name="comment"
                placeholder="사유를 입력해주세요"
                containerClass={'mb-3'}
                register={register}
                key="comment"
                value={comment || ''}
                onChange={onChange}
                errors={errors}
                control={control}
            />
        );
    }, [comment]);

    const MoneyRadio = useCallback((props) => {
        const { money } = props;
        return (
            <div className='mb-3'>
                <Row>
                    <FormInput
                        type='radio'
                        label="유급"
                        name="money"
                        key="paid"
                        containerClass={'col-6'}
                        register={register}
                        value="유급"
                        checked={money == "유급"}
                        onChange={onChange}
                        errors={errors}
                        control={control}
                    />
                    <FormInput
                        type='radio'
                        label="무급"
                        name="money"
                        key="unpaid"
                        containerClass={'col-6'}
                        register={register}
                        value="무급"
                        checked={money == "무급"}
                        onChange={onChange}
                        errors={errors}
                        control={control}
                    />
                </Row>
            </div>
        );
    }, [money])

    const EditSchedule = useCallback((props: any) => {
        const { modalDate, selectItem, updateTime, comment, overTimeStart, overTimeEnd } = props;
        // console.log('edit 부분 ::: ', eventData.title);
        const min = modalDate + "T" + "00:00:00";
        const max = modalDate + "T" + "23:59:59";
        const defaultModalDate = clickDateInfo || new Date();
        // console.log(getKoreaTime(defaultModalDate));
        const [date] = getKoreaTime(defaultModalDate);
        return (
            <>
                <Col sm={12}>
                    <FormInput
                        type="select"
                        name="selectItem"
                        containerClass={'mb-3'}
                        register={register}
                        key="className"
                        errors={errors}
                        control={control}
                        disabled={true}
                        onChange={onChange}
                        value={selectItem || null}
                        className='d-none'
                    >
                        <option value="work">출근</option>
                        <option value="leave">퇴근</option>
                        <option value="vacation">연차</option>
                        <option value="going">외출</option>
                    </FormInput>

                    <FormInput
                        type="text"
                        label="날짜"
                        name="nowDate"
                        value={date}
                        containerClass={'mb-3'}
                        disabled={true}
                    />
                    <FormInput
                        type="text"
                        label="선택항목"
                        name="selectItem"
                        value={eventData.title}
                        containerClass={'mb-3'}
                        disabled={true}
                    />

                </Col>
                {
                    eventData.title?.includes('연장') ?
                    <>
                        <OverTimeStart overTimeStart={overTimeStart} />
                        <Col>
                            <OverTimeEnd overTimeEnd={overTimeEnd} />
                        </Col>
                    </>
                    :

                    <FormInput
                        type="time"
                        label="수정시간"
                        name="updateTime"
                        placeholder="Insert Event Name"
                        containerClass={'mb-0'}
                        register={register}
                        key="updateTime"
                        value={updateTime || ''}
                        onChange={onChange}
                        errors={errors}
                        control={control}
                    />
                }
                
                <p className="mb-3" style={{ fontSize: "13px" }}>취소 요청 시 시간 표기 금지 </p>

                <Comment comment={comment} />
            </>
        );
    }, []);

    const VacationSelect = useCallback((props: any) => {
        const { vacationSelectItem, comment, money } = props;
        if (vacationSelectItem == "") {
            return null;
        }
        return (
            <>
                <MoneyRadio money={money} />
                <Comment comment={comment} />
            </>
        );
    }, []);

    const OverTimeStart = useCallback((props: any) => {
        const { overTimeStart } = props;
        return (
            <FormInput
                type="time"
                label="연장시간시작"
                name="overTimeStart"
                placeholder="Insert Event Name"
                containerClass={'mb-3'}
                register={register}
                key="overTimeStart"
                value={overTimeStart}
                onChange={onChange}
                errors={errors}
                control={control}
            />
        );
    }, []);


    const OverTimeEnd = useCallback((props: any) => {
        const { overTimeEnd, min, max } = props;
        return (
            <FormInput
                type="datetime-local"
                label="연장시간종료"
                name="overTimeEnd"
                placeholder="Insert Event Name"
                containerClass={'row-sm-6'}
                register={register}
                key="overTimeEnd"
                value={overTimeEnd}
                min={min}
                max={max}
                onChange={onChange}
                errors={errors}
                control={control}
            />
        );
    }, []);

    const UpdateTime = useCallback((props: any) => {
        const { updateTime, max, min, label } = props;
        return (
            <>
                <FormInput
                    type="datetime-local"
                    label={label}
                    name="updateTime"
                    placeholder="Insert Event Name"
                    containerClass={'mb-3'}
                    register={register}
                    key="updateTime"
                    value={updateTime || ''}
                    min={min}
                    max={max}
                    onChange={onChange}
                    errors={errors}
                    control={control}
                />
            </>
        );
    }, []);

    const AddScheduleList = useCallback((props: any) => {
        const { nowTime, modalDate, selectItem, vacationSelectItem, updateTime, comment, money, overTimeStart, overTimeEnd, extensionDate, setExtensionDate } = props;

        if (selectItem == "work") {
            return (
                <>
                    <FormInput
                        type="time"
                        label="출근요청시간"
                        name="updateTime"
                        placeholder="Insert Event Name"
                        containerClass={'mb-3'}
                        register={register}
                        key="updateTime"
                        value={updateTime || ''}
                        onChange={onChange}
                        errors={errors}
                        control={control}
                    />
                    <Comment comment={comment} />
                </>
            );
        } else if (selectItem == "leave") {
            const min = moment(modalDate).startOf("day").format().substring(0, 19);
            const max = moment(modalDate).endOf("day").format().substring(0, 19);
            const maxPlusOneDay = moment(modalDate).add(1, "days").format().substring(0, 19);
            const maxChange = () => {
                if (!extensionDate) {
                    setExtensionDate(EXPANSION);
                } else {
                    setExtensionDate(UNEXPANDED);
                }
            };
            if (!extensionDate) {
                return (
                    <>
                        <Col>
                            <UpdateTime updateTime={updateTime} max={max} min={min} label={"퇴근요청시간"} />
                            <Row sm={3} style={{ paddingTop: "30px" }}>
                                <Button className="btn btn-success btn btn-success" onClick={maxChange}>
                                    퇴근날짜 제한 해제
                                </Button>
                            </Row>
                        </Col>
                        <Comment comment={comment} />
                    </>
                );
                // 여기까지 날짜 제한까지했고 
                // nowDate + 1 퇴근 날려보는 시도 해보기 
            } else {
                return (
                    <>
                        <Col>
                            <UpdateTime updateTime={updateTime} max={maxPlusOneDay} min={min} label={"퇴근요청시간"} />
                            <Row sm={3} style={{ paddingTop: "30px" }}>
                                <Button className="btn btn-success btn btn-success" onClick={maxChange}>
                                    퇴근날짜 제한
                                </Button>
                            </Row>
                        </Col>
                        <Comment comment={comment} />
                    </>
                );
            }
            // 휴가
        } else if (selectItem == "vacation") {
            return (
                <>
                    <FormInput
                        type="select"
                        label="휴가신청항목"
                        name="vacationSelectItem"
                        containerClass={'mb-3'}
                        register={register}
                        key="className"
                        errors={errors}
                        control={control}
                        disabled={false}
                        onChange={onChange}
                        value={vacationSelectItem || ''}
                    >

                        <option value="">종류를 선택해주세요</option>
                        <option value="연차">연차</option>
                        <option value="반차">반차</option>
                        <option value="반반차">반반차</option>
                        <option value="국방의무">국방의무</option>
                    </FormInput>
                    <VacationSelect vacationSelectItem={vacationSelectItem} money={money} comment={comment} />
                    {/* {selectItem, vacationSelectItem, updateTime, comment, money} = props; */}
                </>
            );
            // 외출
        } else if (selectItem == "going") {
            return (
                <>
                    <FormInput
                        type="time"
                        label="외출요청시간"
                        name="updateTime"
                        placeholder="Insert Event Name"
                        containerClass={'mb-3'}
                        register={register}
                        key="updateTime"
                        value={updateTime || ''}
                        onChange={onChange}
                        errors={errors}
                        control={control}
                    />
                    <MoneyRadio money={money} />
                    <Comment comment={comment} />
                </>
            );
            // 출장
        } else if (selectItem == "businessTrip") {
            return (
                <>
                    {/* <UpdateTime updateTime={updateTime} label={"(출장)퇴근요청시간"} /> */}
                    <FormInput
                        type="time"
                        label="(출장)퇴근요청시간"
                        name="updateTime"
                        placeholder="Insert Event Name"
                        containerClass={'mb-3'}
                        register={register}
                        key="updateTime"
                        value={updateTime || ''}
                        onChange={onChange}
                        errors={errors}
                        control={control}
                    />
                    <Comment comment={comment} />
                </>
            );
            // 조퇴
        } else if (selectItem == "earlyLeave") {
            return (
                <>
                    <FormInput
                        type="time"
                        label="조퇴요청시간"
                        name="updateTime"
                        placeholder="Insert Event Name"
                        containerClass={'mb-3'}
                        register={register}
                        key="updateTime"
                        value={updateTime || ''}
                        onChange={onChange}
                        errors={errors}
                        control={control}
                    />
                    <MoneyRadio money={money} />
                    <Comment comment={comment} />
                </>
            );
            // 추가근무
        } else if (selectItem == "overTime") {
            const min = moment(modalDate).startOf("day").format().substring(0, 19);
            const max = moment(modalDate).endOf("day").format().substring(0, 19);
            const maxPlusOneDay = moment(modalDate).add(1, "days").format().substring(0, 19);
            const maxChange = () => {
                if (!extensionDate) {
                    setExtensionDate(EXPANSION);
                } else {
                    setExtensionDate(UNEXPANDED);
                }
            };
            if (!extensionDate) {
                return (
                    <>
                        <OverTimeStart overTimeStart={overTimeStart} />
                        <Col>
                            <OverTimeEnd overTimeEnd={overTimeEnd} min={min} max={maxPlusOneDay} />
                            <Row sm={3} style={{ paddingTop: "30px" }}>
                                <Button className="btn btn-success btn btn-success" onClick={maxChange}>
                                    연장시간종료 날짜 제한 해제
                                </Button>
                            </Row>
                        </Col>
                        <Comment comment={comment} />
                    </>
                );
            } else {
                return (
                    <>
                        <OverTimeStart overTimeStart={overTimeStart} />
                        <Col>
                            <OverTimeEnd overTimeEnd={overTimeEnd} min={min} max={max} />
                            <Row sm={3} style={{ paddingTop: "30px" }}>
                                <Button className="btn btn-success btn btn-success" onClick={maxChange}>
                                    연장시간종료 날짜 제한
                                </Button>
                            </Row>
                        </Col>
                        <Comment comment={comment} />
                    </>
                );
            }
        } else {
            return null;
        }
    }, [selectItem]);

    const AddSchedule = useCallback((props: any) => {
        const { nowTime, modalDate, selectItem, vacationSelectItem, updateTime, comment, money, overTimeStart, overTimeEnd, extensionDate, setExtensionDate } = props;
        return (
            <>
                <Col sm={12}>
                    <FormInput
                        type="select"
                        label="선택항목"
                        name="selectItem"
                        containerClass={'mb-3'}
                        register={register}
                        key="className"
                        errors={errors}
                        control={control}
                        disabled={false}
                        onChange={onChange}
                        value={selectItem || ''}
                    >
                        <option value="">종류를 선택해주세요</option>
                        <option value="work">출근신청</option>
                        <option value="leave">퇴근신청</option>
                        <option value="vacation">휴가신청</option>
                        <option value="going">외출신청</option>
                        <option value="businessTrip">출장신청</option>
                        <option value="earlyLeave">조퇴신청</option>
                        <option value="overTime">연장근무</option>
                    </FormInput>
                </Col>
                <AddScheduleList nowTime={nowTime} modalDate={modalDate} selectItem={selectItem} vacationSelectItem={vacationSelectItem} updateTime={updateTime} comment={comment} money={money} overTimeStart={overTimeStart} overTimeEnd={overTimeEnd} extensionDate={extensionDate} setExtensionDate={setExtensionDate} />
            </>
        );
    }, []);

    const ModalInputs = useCallback((props: any) => {
        const { nowTime, modalDate, selectItem, vacationSelectItem, updateTime, comment, money, overTimeStart, overTimeEnd, extensionDate, setExtensionDate } = props;

        return (
            <>
                {
                    isEditable
                        ?
                        <EditSchedule nowTime={nowTime} modalDate={modalDate} selectItem={selectItem} updateTime={updateTime} comment={comment} />
                        :
                        <AddSchedule nowTime={nowTime} modalDate={modalDate} selectItem={selectItem} vacationSelectItem={vacationSelectItem} updateTime={updateTime} comment={comment} money={money} overTimeStart={overTimeStart} overTimeEnd={overTimeEnd} extensionDate={extensionDate} setExtensionDate={setExtensionDate} />
                }
            </>
        );

    }, [isEditable]);

    const cancelAxios = (data: any) => {
        // data = cancelData();
        const newData = {
            "id": cancelId,
            "type": cancelType
        };
        if (window.confirm('취소 요청을 하시겠습니까?')) {

            // console.log('취소 axios data 진입 : ', newData);
            axios.patch('/gyeolJae/cancel', newData)
                .then(res => {
                    // console.log('취소 axios 동작 : ', res);
                    alert('취소 요청이 되었습니다.');
                })
                .catch(err => {
                    // console.log('취소 axios 실패 : ', err);
                })
            onClose();
        }

    }

    const updateChuga = (props:any) => {
        const newData = {
            "id" : cancelId,
            "overTimeStart" : selectDate + "T" + overTimeStart,
            "overTimeEnd" : overTimeEnd,
            "comment" : 'test'
        }
        // console.log('update axios data :: ', newData);/

        if(window.confirm('수정 요청을 하시겠습니까?')) {
            // console.log('수정 axios 진입 : ', newData);
            axios.post('/request-update-chugageunmu', newData)
                .then(res => {
                    // console.log('연장 수정 요청 then res : ', res);
                    alert('수정 요청이 되었습니다.')
                })
                .catch(err => {
                    // console.log('연장 수정 요청 catch : ', err);
                })
            onClose();
        }
    }



    // 선택항목 바꿀때 초기화
    useEffect(() => {
        setInputs(prev => ({
            ...prev,
            vacationSelectItem: '',
            updateTime: '',
            comment: '',
            money: '',
            overTimeStart: '',
            overTimeEnd: '',
        }));
    }, [selectItem]);

    useEffect(() => {
        setInputs(prev => ({
            ...prev,
            updateTime: '',
            comment: '',
            money: '',

        }));
    }, [vacationSelectItem]);

    return (
        <Modal show={isOpen} onHide={onClose} backdrop="static" keyboard={false}>
            <Modal.Header className="pb-2 px-4 border-bottom-0" closeButton>
                <Modal.Title id="modal-title">
                    <h5> {isEditable ? '수정신청' : '스케줄신청'} </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4 pb-4 pt-0">
                <form noValidate name="chat-form" id="chat-form">
                    <Row>
                        <Col sm={12}>
                            {isEditable ?
                                null
                                :
                                <FormInput
                                    type="date"
                                    label="날짜"
                                    name="date"
                                    placeholder="Insert Event Name"
                                    containerClass={'mb-3'}
                                    register={register}
                                    value={modalDate || ''}
                                    key="date"
                                    errors={errors}
                                    control={control}
                                    disabled={true}
                                />}
                        </Col>
                        {/* 출근시간, 퇴근시간, 휴가신청, 외출신청, 출장신청, 조퇴신청 */}
                        <ModalInputs nowTime={nowTime} modalDate={modalDate} selectItem={selectItem} vacationSelectItem={vacationSelectItem} updateTime={updateTime} comment={comment} money={money} overTimeStart={overTimeStart} overTimeEnd={overTimeEnd} extensionDate={extensionDate} setExtensionDate={setExtensionDate} />
                    </Row>

                    <Row>
                        <Col xs={4}>
                            <Button className="btn btn-light me-1" onClick={() => { onClose(); onReset(); }}>
                                Close
                            </Button>
                        </Col>
                        <Col xs={8} className="text-end">
                            {isEditable && eventData.title != '출근' && eventData.title != '퇴근' ?
                                (
                                    <>
                                      {eventData.title?.includes('연장') && <Button onClick={updateChuga}>수정요청</Button>}
                                      <Button onClick={cancelAxios}>취소요청</Button>
                                    </>
                                  )
                                :null
                            }
                            <RequestButton />
                        </Col>
                    </Row>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default AddEditEvent;
