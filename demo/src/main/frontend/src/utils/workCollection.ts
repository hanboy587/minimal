import getBasicWorkTime from "./getBasicWorkTime";
import getNightTime from "./getNightTime";
import getOverTime from "./getOverTime";
import getWorkTime from "./getWorkTime";

const BASIC = 0;
const NIGHT = 1;

type commuteList = {
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
};


const workCollection = (today : commuteList) : [number, number, number] => {
    const workTime = getWorkTime(getBasicWorkTime(today.work, today.leave), getNightTime(today.work, today.leave), BASIC);
    const overTime = getOverTime(getBasicWorkTime(today.work, today.leave));
    const nightTime = getWorkTime(getBasicWorkTime(today.work, today.leave), getNightTime(today.work, today.leave), NIGHT);
    return [workTime, overTime, nightTime];
};

export default workCollection;