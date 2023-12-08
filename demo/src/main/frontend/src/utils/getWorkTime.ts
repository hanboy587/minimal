    const BASIC_WORK = 8;                                   // 기본근로
    const BASIC = 0;

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

export default getWorkTime;