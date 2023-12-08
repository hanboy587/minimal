import { Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const GeubyeoReportYesangYeonBong = () => {

    // 예상연봉 options
    var apexMixedOpts: ApexOptions = {
        chart: {
            height: 380,
            type: 'line',
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            width: [0, 5,], //차트라인(선)굵기
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '40%', //bar차트 넓이
            },
        },
        colors: ['#d6ecfa', '#4F86C6'],
        fill: {
            opacity: [0.85, 1,], //차트라인선명도
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: 'vertical',
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        labels: [
            '2020',
            '2021',
            '2022',
            '2023',
            '2024',

        ],
        markers: {
            size: 0,
        },
        legend: {
            offsetY: -10,
        },
        // xaxis: {
        //     type: 'datetime',
        // },
        // yaxis: {
        //     title: {
        //         text: 'Points',
        //     },
        // },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + '(만)원';
                    }
                    return y;
                },
            },
        },
        grid: {
            borderColor: '#f1f3fa',
        },
    };

    // 예상연봉 data
    const apexMixedData = [
        {
            name: '내연봉',
            type: 'column',
            data: [2500, 2700, 3000, 3200, ],
        },
        {
            name: '예상연봉(증가퍼센트)',
            type: 'line',
            data: [2600, 2700, 2900, 3200, 3500,],
        },
        // {
        //     name: 'Team C',
        //     type: 'area',
        //     data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        // },
    ];

    return (
        <>
            <div >
                <p style={{ fontSize: "20px" }}>예상연봉</p>
                <Chart
                    options={apexMixedOpts}
                    series={apexMixedData}
                    type="line"
                    height={400}
                    className="apex-charts"
                />
            </div>
        </>
    );
};

export default GeubyeoReportYesangYeonBong;