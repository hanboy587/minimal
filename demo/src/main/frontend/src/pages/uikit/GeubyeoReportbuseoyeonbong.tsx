import { Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import React from 'react';


//  부서별평균연봉 

const GeubyeoReportbuseoyeonbong = () => {

    const apexBarChartOpts: ApexOptions = {
        chart: {
            height: 380,
            type: 'bar',
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + '만원';
                },
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {
                    position: 'top',
                },
            },
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff'],
            },
        },
        colors: ['#0000CC','#0080FF', '#99CCFF', '#FFCCCC'],
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff'],
        },

        xaxis: {
            categories: [2020, 2021, 2022],
        },
        legend: {
            offsetY: -10,
        },
        states: {
            hover: {
                filter: {
                    type: 'none',
                },
            },
        },
        grid: {
            borderColor: '#f1f3fa',
        },
    };

    // chart data
    const apexBarChartData = [
        {
            name: '물류팀',
            data: [6400, 2200, 4300,],
        },
        {
            name: '상품팀',
            data: [5300, 3200, 2300, ],
        },
        {
            name: '마케팅팀',
            data: [ 5200, 3700, 4100],
        },
        {
            name: '운영팀',
            data: [3000, 4400, 3200],
        },
    ];

    return (
        <>
            <p style={{fontSize:"20px"}}>부서별 평균 연봉</p>
            <Chart
                options={apexBarChartOpts}
                series={apexBarChartData}
                height={500}
                type="bar"
                className="apex-charts"
            />
            
        </>
    );
};

export default GeubyeoReportbuseoyeonbong;