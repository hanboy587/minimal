import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const JigeobList = () => {

    useEffect(() => {
        JigeobList()
    }, []);

    const [jigeobMap, setJigeobMap] = useState<any[]>();

    const postData = async () => {
        const data = await axios.post('https://kjh.rba.kr/payroll/search',{
            yearMonth:'2022-12'
        })
        setJigeobMap(data.data);
        return(
            <>
                {jigeobMap?.map((inf) => (
                    <p>
                        {inf.data}
                    </p>
                ))}
            </>
        )
    }
    // useEffect(() => {
    //         console.log('새로 구현하는 axios res : ', jigeobMap);
    // },[jigeobMap]);
    // useEffect(() => {
    //     postData();
    // }, []);

    return null;
}
export default JigeobList;