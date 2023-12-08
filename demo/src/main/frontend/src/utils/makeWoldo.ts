export const makeWoldo = (refYear: any, refMonth: any) => {

    let finalYear = '';
    if(refMonth < 10){
        let oneMonth = '0' + refMonth;
        finalYear = refYear + '-' + oneMonth;
    }else{
        finalYear = refYear + '-' + refMonth;
    }

    // return ex) 2023-01
    // return ex) 2023-10
    return finalYear;
}