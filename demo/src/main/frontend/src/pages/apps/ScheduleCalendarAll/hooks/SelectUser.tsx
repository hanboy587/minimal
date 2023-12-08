import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getUsername } from 'utils/getUsername';

export default function SelectUser() {
    const [ userList, setUserList ] = useState<any[]>();
    // const businessNumber = getBusinessNumber();

    // '2248167722'
    // console.log('getNumber @@@@ : ', businessNumber);
    // /users 매핑으로
     useEffect(() => {
        axios.get('/users',
        {params:{businessNumber:'2248167722'}})
        .then(res => {
            setUserList(res.data);
        })
     }, []);

     if(userList){
            const list = (userList.map((inf) => (
                <option key={inf.password} value={inf.realname}>
                    {inf.realname}
                </option>
        )))
        return (
            <>
                <select>
                    {list}
                </select>
            </>
        );
     }else{
        return null;
     }
}