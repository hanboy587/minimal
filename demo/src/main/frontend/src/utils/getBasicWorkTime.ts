const ONE_HOUR_MINUTES = 60;                            // 60분
const LUNCH_START_TIME = (ONE_HOUR_MINUTES * 12) + 30;  // 12:30
const LUNCH_END_TIME = (ONE_HOUR_MINUTES * 13) + 30;    // 13:30
const DINNER_START_TIME = (ONE_HOUR_MINUTES * 18);      // 18:00
const DINNER_END_TIME = (ONE_HOUR_MINUTES * 19);        // 19:00
const NIGHT_SHIFT_TIME = (ONE_HOUR_MINUTES * 22);       // 22:00
const MORNING_TIME = (ONE_HOUR_MINUTES * 6);            // 06:00
const MIDNIGHT_TIME = 0;                                // 00:00
const MIDNIGHT_TIME_24 = (ONE_HOUR_MINUTES * 24);       // 00:00
const BASIC = 0;
const getBasicWorkTime = (work: string, leave: string) => {
	if (!work) {
		return 0;
	}

	const workHour = parseInt(work.slice(11, 13)) * ONE_HOUR_MINUTES; // hour
	const workMinutes = parseInt(work.slice(14, 16));
	let workTime = workHour + workMinutes;

	let leaveHour;
	let leaveMinutes;
	let leaveTime;

	let result;

	//	퇴근을 안찍은 경우 현재시간을 사용
	if (leave == undefined) {
		const today = new Date();
		leaveHour = parseInt(today.toString().slice(16, 18)) * ONE_HOUR_MINUTES;
		leaveMinutes = parseInt(today.toString().slice(19, 21));
		if (parseInt(work.slice(8, 10)) < parseInt(today.toString().slice(8, 10))) {
			return 0;
		}
	} else {
		leaveHour = parseInt(leave.slice(11, 13)) * ONE_HOUR_MINUTES;
		leaveMinutes = parseInt(leave.slice(14, 16));
	}
	leaveTime = leaveHour + leaveMinutes;

	//	06h 이전일경우 +24h
	if (leaveTime <= MORNING_TIME) {
		leaveTime += MIDNIGHT_TIME_24;
	}
	if (workTime <= MORNING_TIME) {
		workTime += MIDNIGHT_TIME_24;
	}

	//	전부 새벽시간이면 0
	if (NIGHT_SHIFT_TIME <= workTime && NIGHT_SHIFT_TIME <= leaveTime) {
		return 0;
	}
	//	 퇴근시간이 22h 이후 인경우 퇴근시간 22h 고정
	if (MORNING_TIME >= leaveTime || NIGHT_SHIFT_TIME <= leaveTime) {
		leaveTime = NIGHT_SHIFT_TIME;
	}
	result = leaveTime - workTime;

	//	휴게 1,2 계산
	const breakTime_1 = Math.max(0, Math.min(leaveTime, LUNCH_END_TIME) - Math.max(workTime, LUNCH_START_TIME));
	const breakTime_2 = Math.max(0, Math.min(leaveTime, DINNER_END_TIME) - Math.max(workTime, DINNER_START_TIME));

	//  휴게시간 빼기
	result -= (breakTime_1 + breakTime_2);

	result = Math.max(result, 0);
	return result / ONE_HOUR_MINUTES;
};

export default getBasicWorkTime;