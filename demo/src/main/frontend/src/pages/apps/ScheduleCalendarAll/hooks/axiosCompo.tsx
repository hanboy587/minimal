import React, { useEffect, useState } from 'react';
import { getUsername } from 'utils/getUsername';
import axios from 'axios';


interface goingAllList {
    id: number,
    type: string,
    comment: string,
    username: string,
    nowDate: string,
    money: string,
    updateTime: string,
}
// 컴포넌트 만들어보기
function GetListCompo(){
    const username = getUsername();
    const getList = async() => {
        const res = await axios.post("/going/findByUsername", {
            "username": username
        })

        
        const goingList : goingAllList[] = res.data;
        const calendarList : any[] = [];
        goingList.map((data) => {
            let temp : any = {};
            const start = new Date(data.nowDate);
            console.log('외출', data)
            temp["start"] = start;
            temp["title"] = "외출 ";
            temp["className"] = "bg-warning";
            calendarList.push(temp);
        })

        return calendarList;
    }
}

export default GetListCompo;
