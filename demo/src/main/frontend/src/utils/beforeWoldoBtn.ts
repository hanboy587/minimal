export const beforeWoldoBtn = (ipsaDt:any, refMonth: any, refYear: any) => {
    const result = new Date(ipsaDt) >= new Date(refYear.current+ '-' + refMonth.current + '-01');


    // calendar에서 사용
    // 매개변수의 월도에서 이전으로 진입 시 해당 년도가 바뀔 때 여부 판단을 위해 사용
    return result;
}