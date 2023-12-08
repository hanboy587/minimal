import React, { useRef, useEffect, useState } from 'react';
import { Card, Row, Col, } from 'react-bootstrap';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartArea,
    ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useMediaQuery } from "react-responsive";
import axios from 'axios';
import { ConsoleView } from 'react-device-detect';
import { workerData } from 'worker_threads';
import { array, date } from 'yup';
import { domainToASCII } from 'url';
import reactSelect from 'react-select';
import workCollection from 'utils/workCollection';

// 출근 그래프

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface commuteList {
    idx: number,
    nowDate: string,
    username: string,
    work: string
    workIp: string,
    workDistance: string,
    workLatitude: string,
    workLongitude: string,
    workDeviceType: string,
    correctionWork: Date,
    correctionWorkComment: Date,
    leave: string,
    leaveIp: string,
    leaveDistance: string,
    leaveLatitude: string,
    leaveLongitude: string,
    leaveDeviceType: string,
    correctionLeave: string,
    correctionLeaveComment: string,
}

interface commuteListArray extends Array<commuteList>{};

type GreetingsProps = {
    name: string;
};

type BarChartPCProps = {
    timeTable: any;
    contractualWorkingHoursArr: any;
    monthDays: string[] | undefined;
}


const BarChartPC : React.FC<BarChartPCProps> = ({timeTable, contractualWorkingHoursArr, monthDays}) => {
    const chartRef = useRef<any>(null);
    const [chartData, setChartData] = useState<ChartData<'bar'>>({ datasets: [] });

    const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
        const gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
        gradientStroke.addColorStop(0, '#fa5c7c');
        gradientStroke.addColorStop(1, '#727cf5');
        return gradientStroke;
    };

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) {
            return;
        }

        const chartData: ChartData<'bar'> = {
            //라벨 변수화
            labels: monthDays,
            datasets: [
                {
                    label: '총근로(h)',
                    backgroundColor: createGradient(chart.ctx, chart.chartArea),
                    borderColor: createGradient(chart.ctx, chart.chartArea),
                    hoverBackgroundColor: createGradient(chart.ctx, chart.chartArea),
                    hoverBorderColor: createGradient(chart.ctx, chart.chartArea),
                    categoryPercentage: 0.5,
                    barPercentage: 0.7,
                    data: timeTable, 
                },
                {
                    label: '소정근로(h)',
                    backgroundColor: '#e3eaef',
                    borderColor: '#e3eaef',
                    hoverBackgroundColor: '#e3eaef',
                    hoverBorderColor: '#e3eaef',
                    categoryPercentage: 0.5,
                    barPercentage: 0.7,
                    data: contractualWorkingHoursArr,
                },
            ],
        };

        setChartData(chartData);
    }, [timeTable, contractualWorkingHoursArr, monthDays]);

    // options
    const barChartOpts = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltips: {
                backgroundColor: '#727cf5',
                titleFontColor: '#fff',
                bodyFontColor: '#fff',
                bodyFontSize: 14,
                displayColors: false,
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                    color: 'rgba(0,0,0,0.05)',
                },
                stacked: false,
                ticks: {
                    stepSize: 2,
                },
            },
            x: {
                stacked: false,
                grid: {
                    color: 'rgba(0,0,0,0.05)',
                },
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">근로시간(월)</h4>
                <div style={{ height: '320px' }} className="chartjs-chart">
                    <Bar ref={chartRef} data={chartData} options={barChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};



const BarChartM1 : React.FC<BarChartPCProps> = ({timeTable, contractualWorkingHoursArr, monthDays}) => {
    const chartRefM1 = useRef<any>(null);
    const [chartDataM1, setChartData] = useState<ChartData<'bar'>>({ datasets: [] });

    const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
        const gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
        gradientStroke.addColorStop(0, '#fa5c7c');
        gradientStroke.addColorStop(1, '#727cf5');
        return gradientStroke;
    };

    useEffect(() => {
        const chart = chartRefM1.current;

        if (!chart) {
            return;
        }

        const chartDataM1: ChartData<'bar'> = {
            labels: monthDays ,
            datasets: [
                {
                    label: '총근로(h)',
                    backgroundColor: createGradient(chart.ctx, chart.chartArea),
                    borderColor: createGradient(chart.ctx, chart.chartArea),
                    hoverBackgroundColor: createGradient(chart.ctx, chart.chartArea),
                    hoverBorderColor: createGradient(chart.ctx, chart.chartArea),
                    categoryPercentage: 0.5,
                    barPercentage: 0.7,
                    data: timeTable
                    ,
                },
                {
                    label: '소정근로(h)',
                    backgroundColor: '#e3eaef',
                    borderColor: '#e3eaef',
                    hoverBackgroundColor: '#e3eaef',
                    hoverBorderColor: '#e3eaef',
                    categoryPercentage: 0.5,
                    barPercentage: 0.7,
                    data: contractualWorkingHoursArr,
                },
            ],
        };

        setChartData(chartDataM1);
    }, [timeTable, contractualWorkingHoursArr]);
    // options
    const barChartOpts = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltips: {
                backgroundColor: '#727cf5',
                titleFontColor: '#fff',
                bodyFontColor: '#fff',
                bodyFontSize: 14,
                displayColors: false,
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                    color: 'rgba(0,0,0,0.05)',
                },
                stacked: false,
                ticks: {
                    stepSize: 2,
                },
            },
            x: {
                stacked: false,
                grid: {
                    color: 'rgba(0,0,0,0.05)',
                },
            },
        },
    };
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">근로시간(01 ~ 15)</h4>

                <div style={{ height: '320px' }} className="chartjs-chart">
                    <Bar ref={chartRefM1} data={chartDataM1} options={barChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};


const BarChartM2 : React.FC<BarChartPCProps> = ({timeTable, contractualWorkingHoursArr, monthDays}) => {
    const chartRefM2 = useRef<any>(null);
    const [chartDataM2, setChartData] = useState<ChartData<'bar'>>({ datasets: [] });

    const createGradient = (ctx: CanvasRenderingContext2D, area: ChartArea) => {
        const gradientStroke = ctx.createLinearGradient(0, 500, 0, 150);
        gradientStroke.addColorStop(0, '#fa5c7c');
        gradientStroke.addColorStop(1, '#727cf5');
        return gradientStroke;
    };

    useEffect(() => {
        const chart = chartRefM2.current;

        if (!chart) {
            return;
        }

        const chartDataM2: ChartData<'bar'> = {
            labels: monthDays,
            datasets: [
                {
                    label: '총근로(h)',
                    backgroundColor: createGradient(chart.ctx, chart.chartArea),
                    borderColor: createGradient(chart.ctx, chart.chartArea),
                    hoverBackgroundColor: createGradient(chart.ctx, chart.chartArea),
                    hoverBorderColor: createGradient(chart.ctx, chart.chartArea),
                    categoryPercentage: 0.5,
                    barPercentage: 0.7,
                    data: timeTable
                },
                {
                    label: '소정근로(h)',
                    backgroundColor: '#e3eaef',
                    borderColor: '#e3eaef',
                    hoverBackgroundColor: '#e3eaef',
                    hoverBorderColor: '#e3eaef',
                    categoryPercentage: 0.5,
                    barPercentage: 0.7,
                    data: contractualWorkingHoursArr,
                },
            ],
        };

        setChartData(chartDataM2);
    }, [timeTable, contractualWorkingHoursArr]);
    // options
    const barChartOpts = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltips: {
                backgroundColor: '#727cf5',
                titleFontColor: '#fff',
                bodyFontColor: '#fff',
                bodyFontSize: 14,
                displayColors: false,
            },
        },
        scales: {
            y: {
                grid: {
                    display: false,
                    color: 'rgba(0,0,0,0.05)',
                },
                stacked: false,
                ticks: {
                    stepSize: 2,
                },
            },
            x: {
                stacked: false,
                grid: {
                    color: 'rgba(0,0,0,0.05)',
                },
            },
        },
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title mb-3">근로시간(16 ~ 31)</h4>

                <div style={{ height: '320px' }} className="chartjs-chart">
                    <Bar ref={chartRefM2} data={chartDataM2} options={barChartOpts} />
                </div>
            </Card.Body>
        </Card>
    );
};


const BarChart = () => {
    const isDesktop: boolean = useMediaQuery({
        query: "(min-width:1024px)",
    });
    const isTablet: boolean = useMediaQuery({
        query: "(min-width:220px) and (max-width:1023px)",
    });
    const [table, setTable] = useState<commuteListArray | undefined>();
    const [timeTable, setTimeTable] = useState<any>();
    const [leftTimeTable, setLeftTimeTable] = useState<any>();
    const [rightTimeTable, setRightTimeTable] = useState<any>();
    const [contractualWorkingHoursArr, setContractualWorkingHoursArr] = useState<any>();
    const [leftcontractualWorkingHoursArr, setLeftContractualWorkingHoursArr] = useState<number[]>();
    const [rightcontractualWorkingHoursArr, setRightContractualWorkingHoursArr] = useState<number[]>();
    const [monthDays, setMonthDays] = useState<string[]>();
    const [leftMonthDays, setLeftMonthDays] = useState<string[]>();
    const [rightMonthDays, setRightMonthDays] = useState<string[]>();

    const getWeeks = () : string[] => {
        let today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        let lastDay = new Date(year, month + 1, 0).getDate();
        let arr = [];
        let i = 1;
        while (i <= lastDay) {
            arr.push(i + "일");
            i++;
        }
        return arr;
    };

    // 소정근로 시간 1달치
    const getContractualWorkingHours = () => {
        const contractualWorkingHours = 8;
        let arr = [];
        let i = 1;
        let today = new Date();   
        let month = today.getMonth();
        let year = today.getFullYear();
        let lastDay = new Date(year, month, 0).getDate();

        while (i <= lastDay) {
            let tempDay = new Date(year, month, i).getDay();
            // 평일만 
            if (tempDay == 0 || tempDay == 6) {
                arr.push(0);
            } else {
                arr.push(contractualWorkingHours);
            }
            i++;
        }
        return arr;
    }

    const getCommuteList = async() => {
		var data : any = sessionStorage.getItem("hyper_user");
        if (JSON.parse(data).username) {
            const res = await axios.post("monthCommuteList", {
                "username": JSON.parse(data).username
            });
            if (res.data) {
                setTable(res.data);
            }
        }
	}

    useEffect(() => {
        setTimeTable(newCalendar());
        setLeftTimeTable(newCalendar()?.slice(0, 15));
        setRightTimeTable(newCalendar()?.slice(15, -1));
    }, [table]);
// 시간 x 60 + 분
    const getMinutes = (work : string, leave : string) => {
        if (leave == undefined) {
            return 0;
        }
        const workHour = parseInt(work.slice(11, 13)) * 60; // hour
        const workMinutes = parseInt(work.slice(14, 16));
        const workTime = workHour + workMinutes;
        const leaveHour = parseInt(leave.slice(11, 13)) * 60; // hour
        const leaveMinutes = parseInt(leave.slice(14, 16));
        const leaveTime = leaveHour + leaveMinutes;
        const result = (leaveTime - workTime) / 60 ;
        return result;
    };

    const newCalendar = () => {
        const cleanCalendar = table?.map((data : any) => {
            let newObj : any =[];
            if (data) {
                if (data.work) {
                    newObj["day"] = parseInt(data.work.slice(8, 10));
                } else {
                    newObj["day"] = parseInt(data.nowDate.slice(8, 10));
                }
                const [tempWorkTime, tempOverTime] = workCollection(data);
                newObj["time"] = tempWorkTime + tempOverTime;
            }
            return newObj;
        });

        if (!cleanCalendar) {
            return ;
        }

        let newObj : any = [];

        let i = 0;
        let today = new Date();   
        let month = today.getMonth();
        let year = today.getFullYear();
        let lastDay = new Date(year, month, 0).getDate();

        while (i < lastDay) {
            let result = 0;
            let j = 0;
            while (j < cleanCalendar?.length) {
                if (cleanCalendar[j].day == i + 1) {
                    result = cleanCalendar[j].time;
                }
                j++;
            }
            newObj[i] = result;
            i++;
        }

        // return newObj.;
        return Object.values(newObj);
    }

    useEffect(() => {
        getCommuteList();
        setMonthDays(getWeeks());
        setLeftMonthDays(getWeeks().slice(0, 15));
        setRightMonthDays(getWeeks().slice(15, getWeeks().length));
        setContractualWorkingHoursArr(getContractualWorkingHours());
    }, []);

    useEffect(() => {
        setLeftContractualWorkingHoursArr(getContractualWorkingHours().slice(0, 15));
        setRightContractualWorkingHoursArr(getContractualWorkingHours().slice(15, -1));
    }, [contractualWorkingHoursArr]);

    return (
        <>
            <div>
                <Row>
                    {isDesktop &&
                        < BarChartPC timeTable={timeTable} contractualWorkingHoursArr={contractualWorkingHoursArr} monthDays={monthDays} />
                    }
                </Row>
                <Row>
                    <Col>
                        {isTablet &&
                            <BarChartM1 timeTable={leftTimeTable} contractualWorkingHoursArr={leftcontractualWorkingHoursArr} monthDays={leftMonthDays} />
                        }
                    </Col>
                    <Col>
                        {isTablet &&
                            <BarChartM2 timeTable={rightTimeTable} contractualWorkingHoursArr={rightcontractualWorkingHoursArr} monthDays={rightMonthDays} />
                        }
                    </Col>
                </Row>
            </div>

        </>
    );
};

export default BarChart;
