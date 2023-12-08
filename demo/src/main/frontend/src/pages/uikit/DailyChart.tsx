import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useWorkTime } from 'hooks';
import workCollection from 'utils/workCollection';

// 일별차트
interface commuteList {
    idx: number;
    nowDate: string;
    username: string;
    work: string;
    workIp: string;
    workDistance: string;
    workLatitude: string;
    workLongitude: string;
    workDeviceType: string;
    correctionWork: Date;
    correctionWorkComment: Date;
    leave: string;
    leaveIp: string;
    leaveDistance: string;
    leaveLatitude: string;
    leaveLongitude: string;
    leaveDeviceType: string;
    correctionLeave: string;
    correctionLeaveComment: string;
};

const DailyChart = () => {

    const [today, setToday] = useState<commuteList>();
    const [workTime, setWorkTime] = useState(0);
    const [overWorkTime, setOverTime] = useState(0);
    const [nightWorkTime, setNightTime] = useState(0);
    const [weekendWorkTime, setWeekendWorkTime] = useState(0);

    const getTodayCommuteList = async() => {
        const data : any = sessionStorage.getItem("hyper_user");
        const res = await axios.post("todayCommute", {
            "username" : JSON.parse(data).username
        });
        setToday(res.data);
    }

    // const 
    useEffect(() => {
        if (today) {
            const [tempWorkTime, tempOverTime, tempNightTime] = workCollection(today);
            const date = new Date(today.work);
            // 평일 주말 계산
            console.log(tempWorkTime);
            if (date.getDay() != 0 && date.getDay() != 6) {
                setWorkTime(tempWorkTime);
                setWeekendWorkTime(0);
            } else {
                setWorkTime(0);
                setWeekendWorkTime(tempWorkTime);
            }
            setOverTime(tempOverTime);
            setNightTime(tempNightTime);

        }
    }, [today]);
    useEffect(() => {
        getTodayCommuteList();
    }, []);
    // default options
    const apexBarChartStackedOpts: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false,
            },

        },
        plotOptions: {
            bar: {
                horizontal: true,

            },
        },
        stroke: {
            show: false,
        },
        xaxis: {
            categories: ['소정근로(h)', '실제근로(h)', '야간근로(h)'],
            labels: {
                formatter: function (val) {
                    return val + 'h';
                },
            },

        },
        yaxis: {
            title: {
                text: undefined,
            },
        },
        colors: ['#4BBCF4', '#BBDED6', '#61C0BF', '#FFB6B9', '#FAE3D9'],
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + 'h';
                },
            },
        },
        fill: {
            opacity: 1,

        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                },
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
        },
        grid: {
            borderColor: '#f1f3fa',
        },
    };

    // chart data
    const apexBarChartStackedData = [
        {
            name: '소정근로',
            data: [7.5, 0, 0,],
        },
        {
            name: '기본근로',
            data: [0, workTime, 0,],
        },
        {
            name: '연장근로',
            data: [0, overWorkTime, 0,],
        },
        {
            name: '휴일',
            data: [0, weekendWorkTime, 0,],
        },
        {
            name: '야간',
            data: [0, 0, nightWorkTime,],
        },
    ];

    return (
        <div style={{ height: "300px" }}>
            <h4 className="header-title mb-3"></h4>
            <Chart
                options={apexBarChartStackedOpts}
                series={apexBarChartStackedData}
                type="bar"
                className="apex-charts"
                height="100%"  //px는 320기준으로 변경할것

            />
        </div>
    );
};

export default DailyChart;