const ONE_HOUR_MINUTES = 60;                            // 60분
const NIGHT_SHIFT_TIME = (ONE_HOUR_MINUTES * 22);       // 22:00
const MORNING_TIME = (ONE_HOUR_MINUTES * 6);            // 06:00
const MORNING_TIME_24 = (ONE_HOUR_MINUTES * (6 + 24));  // 06:00
const MIDNIGHT_TIME_24 = (ONE_HOUR_MINUTES * 24);       // 00:00

const getNightTime = (work: string, leave: string) => {
	if (work === undefined || !work) {
		return 0;
	}
	const workHour = parseInt(work.slice(11, 13)) * ONE_HOUR_MINUTES; // hour
	const workMinutes = parseInt(work.slice(14, 16));
	let		workTime = workHour + workMinutes;
	let		leaveHour;
	let		leaveMinutes;
	let		leaveTime;
	let		result;

	//	퇴근을 안찍은 경우 현재시간을 사용
	if (leave == undefined) {
		const today = new Date();
		leaveHour = parseInt(today.toString().slice(16, 18)) * ONE_HOUR_MINUTES; // hour
		leaveMinutes = parseInt(today.toString().slice(19, 21));;
	} else {
		leaveHour = parseInt(leave.slice(11, 13)) * ONE_HOUR_MINUTES; // hour
		leaveMinutes = parseInt(leave.slice(14, 16));
	}
	leaveTime = leaveHour + leaveMinutes;

	//	오전 6시 이전이면 
	if (leaveTime <= MORNING_TIME) {
		leaveTime += MIDNIGHT_TIME_24;
	}
	if (workTime <= MORNING_TIME) {
		workTime += MIDNIGHT_TIME_24;
	}

	//	계산
	result = (Math.min(leaveTime, MORNING_TIME_24) - Math.max(workTime, NIGHT_SHIFT_TIME)) / ONE_HOUR_MINUTES;

	//음수일경우 0으로 계산
	result = Math.max(result, 0);
	return parseFloat(result.toFixed(2));
}
export default getNightTime;