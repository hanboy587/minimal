export const nextWoldoBtn = (refMonth: any, refYear: any) => {
    const result = new Date().getMonth() < refMonth && (new Date().getFullYear() == Number(refYear));

    // calendar에서 사용
    // 매개변수의 월도에서 다음으로 진입 시 해당 년도가 바뀔 때 여부 판단을 위해 사용
    return result;
}