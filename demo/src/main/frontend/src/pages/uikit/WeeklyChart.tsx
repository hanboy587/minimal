import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
import axios from 'axios';
import workCollection from 'utils/workCollection';

// 주별차트
const WeeklyChart = () => {
    // default options
    const [commuteListInfo, setCommuteListInfo] = useState<any>();
    const [workTotal, setWorkTotal] = useState<number>(0);
    const [overTotal, setOverTotal] = useState<number>(0);
    const [nightTotal, setNightTotal] = useState<number>(0);
    const [weekendTotal, setWeekendTotal] = useState<number>(0);
    const [week, setWeek] = useState<string[]>();

    const getMonthCommuteList = async () => {
        const data : any = sessionStorage.getItem("hyper_user");
        const res = await axios.post("monthCommuteList", {
            "username" : JSON.parse(data).username
        });
        setCommuteListInfo(res.data);
    };

    const getWeek = () => {
        let currentDay = new Date();
        let theYear = currentDay.getFullYear();
        let theMonth = currentDay.getMonth();
        let theDate = currentDay.getDate();
        let theDayOfWeek = currentDay.getDay();

        let thisWeek: string[] = [];

        let j = 0;
        for (let i = 0; i < 7; i++) {
            let resultDay = new Date(theYear, theMonth, theDate + (i - theDayOfWeek));
            let dd: number = resultDay.getDate();
            let ddString;

            ddString = dd.toString();
            if (ddString.length == 1) {
                ddString = '0' + ddString;
            }
            thisWeek[j] = ddString;
            j++;
        };
        // console.log("thisWeek : ", thisWeek);
        setWeek(thisWeek);
    };

    const getWeekTotal = (commuteListInfo : any,  week : string[]) => {
        let i = 0;
        let tempWorkTotal : number = 0;
        let tempOverTotal : number = 0;
        let tempNightTotal : number = 0;
        let tempWeekendTotal : number = 0;

        while (i < commuteListInfo.length) {
            let MonthDay = commuteListInfo[i].nowDate.slice(8, 10);

            let j = 0;
            while (j < week.length) {
                if (week[j] == MonthDay) {
                    const [tempWorkTime, tempOverTime, tempNightTime] = workCollection(commuteListInfo[i]);
                    const date = new Date(commuteListInfo[i].work);
                    // 평일 주말 계산
                    if (date.getDay() != 0 && date.getDay() != 6) {
                        tempWorkTotal += tempWorkTime;
                    } else {
                        tempWeekendTotal += tempWorkTime;
                    }
                    tempOverTotal += tempOverTime;
                    tempNightTotal += tempNightTime;
                }
                j++;
            }
            i++;
        }
        tempWorkTotal = parseFloat(tempWorkTotal.toFixed(2));
        tempOverTotal = parseFloat(tempOverTotal.toFixed(2));
        tempNightTotal = parseFloat(tempNightTotal.toFixed(2));
        tempWeekendTotal = parseFloat(tempWeekendTotal.toFixed(2));
        setWorkTotal(tempWorkTotal);
        setOverTotal(tempOverTotal);
        setNightTotal(tempNightTotal);
        setWeekendTotal(tempWeekendTotal);
    };

    useEffect(() => {
        if (commuteListInfo && week) {
            getWeekTotal(commuteListInfo, week);
        }
    }, [commuteListInfo, week]);

    useEffect(() => {
        getMonthCommuteList();
        getWeek();
    }, []);


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
            data: [37.5, 0, 0,],
        },
        {
            name: '기본근로',
            data: [0, workTotal, 0,],
        },
        {
            name: '연장근로',
            data: [0, overTotal, 0,],
        },
        {
            name: '휴일',
            data: [0, weekendTotal, 0,],
        },
        {
            name: '야간',
            data: [0, 0, nightTotal,],
        },
    ];

    return (
        <div style={{height:"300px"}}>
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

export default WeeklyChart;
