export const timeFilter = (el:any) => {
    if (el.updateWork) 
        el.updateWork = el.updateWork.substring(16, 11);
    if (el.updateLeave)
        el.updateLeave = el.updateLeave.substring(16, 11);
    if (el.gyeolJaeDay)
        el.gyeolJaeDay = el.gyeolJaeDay.substring(10, -1);

    // dateTime 형태에서 hh:mm:ss 형식으로 가공
    return el;
}