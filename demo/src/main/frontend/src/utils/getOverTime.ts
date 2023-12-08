const BASIC_WORK = 8;                                   // 기본근로

const getOverTime = (time: number) => {
    if (time > BASIC_WORK) {
        time = time - BASIC_WORK;
    } else {
        time = 0;
    }
    time = Math.max(time, 0);
    return parseFloat(time.toFixed(2));
}

export default getOverTime;