import { useEffect, FC, useState } from "react";
import axios from "axios";
import { resourceLimits } from "worker_threads";

interface commuteList {
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


const useWorkTime = () : number => {
    const ONE_HOUR_MINUTES = 60;                            // 60분
    const LUNCH_START_TIME = (ONE_HOUR_MINUTES * 12) + 30;  // 12:30
    const LUNCH_END_TIME = (ONE_HOUR_MINUTES * 13) + 30;    // 13:30
    const DINNER_START_TIME = (ONE_HOUR_MINUTES * 18);      // 18:00
    const DINNER_END_TIME = (ONE_HOUR_MINUTES * 19);        // 19:00
    const NIGHT_SHIFT_TIME = (ONE_HOUR_MINUTES * 22);       // 22:00
    const MORNING_TIME = (ONE_HOUR_MINUTES * 6);            // 06:00
    const MIDNIGHT_TIME = 0;                                // 00:00
    const MIDNIGHT_TIME_24 = (ONE_HOUR_MINUTES * 24);       // 00:00
    const BASIC_WORK = 8;                                   // 기본근로
    const BASIC = 0;
    const [today, setToday] = useState<commuteList>();
    const [result, setResult] = useState(0);

    const getTodayCommuteList = async() => {
        const data : any = sessionStorage.getItem("hyper_user");
        const res = await axios.post("todayCommute", {
            "username" : JSON.parse(data).username
        });
        setToday(res.data);
    }

    const getBasicWorkTime = (work: string, leave: string) => {
        const workHour = parseInt(work.slice(11, 13)) * ONE_HOUR_MINUTES; // hour
        const workMinutes = parseInt(work.slice(14, 16));
        const workTime = workHour + workMinutes;

        let leaveHour;
        let leaveMinutes;
        let leaveTime;

        let result;

        // 퇴근을 안찍은 경우
        if (leave == undefined) {
            const today = new Date();
            leaveHour = parseInt(today.toString().slice(16, 18)) * ONE_HOUR_MINUTES;
            leaveMinutes = parseInt(today.toString().slice(19, 21));
            leaveTime = leaveHour + leaveMinutes;
        } else {
            leaveHour = parseInt(leave.slice(11, 13)) * ONE_HOUR_MINUTES;
            leaveMinutes = parseInt(leave.slice(14, 16));
            leaveTime = leaveHour + leaveMinutes;
        }
        // 새벽시간 예외처리
        // 00 ~ 06
        if (MIDNIGHT_TIME <= workTime && MORNING_TIME >= workTime && MIDNIGHT_TIME <= leaveTime && MORNING_TIME >= leaveTime) {
            return 0;
        }
        // 새벽시간 예외처리
        // 22 ~ 06
        if (NIGHT_SHIFT_TIME <= workTime && (MIDNIGHT_TIME_24 - 1) >= workTime && MORNING_TIME >= leaveTime) {
            return 0;
        }

        if (MORNING_TIME >= leaveTime || NIGHT_SHIFT_TIME <= leaveTime) {
            leaveTime = NIGHT_SHIFT_TIME;
        }

        //  새벽이 포함된경우
        if (MORNING_TIME >= leaveTime) {
            result = (((24 * ONE_HOUR_MINUTES) + leaveTime) - workTime) / ONE_HOUR_MINUTES;
        } else {
            result = (leaveTime - workTime) / ONE_HOUR_MINUTES;
        }
        // 점심시간이 포함된경우
        if (LUNCH_START_TIME > workTime && LUNCH_END_TIME < leaveTime) {
            result -= 1;
        } else if (LUNCH_START_TIME > workTime && LUNCH_END_TIME < leaveTime && MORNING_TIME > leaveTime) {
            result -= 1;
            // 점심시간 도중인경우 출근 퇴근 둘다
        } else if (LUNCH_START_TIME <= workTime && LUNCH_END_TIME >= leaveTime) {
            result = 0;
        } else if (LUNCH_START_TIME <= workTime && LUNCH_END_TIME > workTime && LUNCH_END_TIME <= leaveTime) {
            result -= ((LUNCH_END_TIME - workTime) / ONE_HOUR_MINUTES);
        }
        //점심시간만 도중인경우

        if (LUNCH_START_TIME > workTime && LUNCH_END_TIME >= leaveTime && LUNCH_START_TIME <= leaveTime) {
            result -= ((leaveTime - LUNCH_START_TIME) / 60);
        }
        if (LUNCH_START_TIME > workTime && LUNCH_END_TIME >= leaveTime && MIDNIGHT_TIME > leaveTime) {
            result -= ((leaveTime - LUNCH_START_TIME) / 60);
        }

        //저녁시간이 포함된경우
        if (DINNER_START_TIME > workTime && DINNER_END_TIME <= leaveTime) {
            result -= 1;
        }

        if (DINNER_START_TIME > workTime && DINNER_END_TIME <= leaveTime && MORNING_TIME >= leaveTime) {
            result -= 1;
        }

        if (DINNER_START_TIME > workTime && DINNER_END_TIME > leaveTime && DINNER_START_TIME < leaveTime) {
            result -= ((DINNER_END_TIME - leaveTime) / ONE_HOUR_MINUTES);
        } else if (DINNER_START_TIME > workTime && LUNCH_END_TIME <= workTime && DINNER_END_TIME > leaveTime && DINNER_START_TIME <= leaveTime) {
            result -= ((leaveTime - DINNER_END_TIME) / ONE_HOUR_MINUTES);
        } else if (DINNER_START_TIME > workTime && DINNER_END_TIME > leaveTime && MORNING_TIME > leaveTime) {
            result -= ((leaveTime - DINNER_END_TIME) / ONE_HOUR_MINUTES);
        } else if (DINNER_START_TIME <= workTime && DINNER_END_TIME > leaveTime) {
            result -= ((leaveTime - workTime) / ONE_HOUR_MINUTES);
        } else if (DINNER_START_TIME <= workTime && DINNER_END_TIME >= workTime && DINNER_END_TIME <= leaveTime) {
            result -= ((DINNER_END_TIME - workTime) / ONE_HOUR_MINUTES);
        }
        return result;
    };

    const getWorkTime = (time: number, nightTime: number, STATUS: number) => {
        let result;
        let night = nightTime;

        //8시간보다 클때
        if (time > BASIC_WORK) {
            result = BASIC_WORK;
        } else {
            result = time + nightTime;
            if (result > BASIC_WORK) {
                night = result - BASIC_WORK;
                result = BASIC_WORK;
            } else {
                night = 0;
            }
        }
        if (STATUS == BASIC) {
            return parseFloat(result.toFixed(2));
        } else {
            return parseFloat(night.toFixed(2));
        }
    }

    const getNightTime = (work: string, leave: string) => {
        if (work === undefined) {
            return 0;
        }
        const workHour = parseInt(work.slice(11, 13)) * ONE_HOUR_MINUTES; // hour
        const workMinutes = parseInt(work.slice(14, 16));
        const workTime = workHour + workMinutes;
        let leaveHour;
        let leaveMinutes;
        let leaveTime;
        let result;
        // 퇴근을 안찍은 경우
        if (leave == undefined) {
            const today = new Date();
            leaveHour = parseInt(today.toString().slice(16, 18)) * ONE_HOUR_MINUTES; // hour
            leaveMinutes = parseInt(today.toString().slice(19, 21));;
            leaveTime = leaveHour + leaveMinutes;
        } else {
            leaveHour = parseInt(leave.slice(11, 13)) * ONE_HOUR_MINUTES; // hour
            leaveMinutes = parseInt(leave.slice(14, 16));
            leaveTime = leaveHour + leaveMinutes;
        }
        if (MIDNIGHT_TIME <= workTime && MORNING_TIME >= workTime && MORNING_TIME >= leaveTime) {
            result = ((leaveTime - workTime) / ONE_HOUR_MINUTES);
        } else if (NIGHT_SHIFT_TIME >= workTime && MORNING_TIME >= leaveTime) {
            result = (((MIDNIGHT_TIME_24 + leaveTime) - NIGHT_SHIFT_TIME) / ONE_HOUR_MINUTES);
        } else if (NIGHT_SHIFT_TIME <= workTime && MORNING_TIME >= leaveTime) {
            //debug
            result = (((MIDNIGHT_TIME_24 + leaveTime) - workTime) / ONE_HOUR_MINUTES);
        } else if (NIGHT_SHIFT_TIME > workTime && NIGHT_SHIFT_TIME > leaveTime) {
            result = 0;
        } else if (NIGHT_SHIFT_TIME >= workTime && NIGHT_SHIFT_TIME <= leaveTime) {
            result = ((leaveTime - NIGHT_SHIFT_TIME) / ONE_HOUR_MINUTES);
        } else {
            result = -1;
        }
        return parseFloat(result.toFixed(2));
    }

    useEffect(() => {
        getTodayCommuteList();
    }, []);

    useEffect(() => {
        if (today) {
            setResult(getWorkTime(getBasicWorkTime(today.work, today.leave), getNightTime(today.work, today.leave), BASIC));
            console.log("debug");
        };
    }, [today]);

    return result;
};

export default useWorkTime;
/*
import { Dispatch, SetStateAction, useCallback, useState, ChangeEvent } from 'react';

type ReturnTypes = [T, (e: ChangeEvent) => void, Dispatch<SetStateAction>];

const useInput = (initialData: T): ReturnTypes => {
    const [value, setValue] = useState(initialData);
    const handler = useCallback((e: ChangeEvent) => {
        setValue((e.target.value as unknown) as T);
    }, []);
    return [value, handler, setValue];
};

export default useInput;
*/
