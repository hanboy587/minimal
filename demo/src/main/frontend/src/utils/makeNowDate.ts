export const makeNowDate = () => {
    // 홈택스 전자세금계산서 입력용 날짜
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const date = String(today.getDate()).padStart(2, '0');
    const yyyymmdd = `${year}-${month}-${date}`;

    // return ex)2023-01-01
    return yyyymmdd;
}