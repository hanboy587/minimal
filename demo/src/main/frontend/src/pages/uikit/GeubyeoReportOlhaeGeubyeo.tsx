import { Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const GeubyeoReportOlhaeGeubyeo = () => {

    //기본급 option
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
            categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            labels: {
                formatter: function (val) {
                    return val + '(만)원';
                },
            },
        },
        yaxis: {
            title: {
                text: undefined,
            },
        },
        colors: ['#79bd9a', '#a5d296', '#a8dba8', '#cff09e', '#cff0da'],
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + '(만)원';
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

    // 올해평균연봉 data
    const apexBarChartStackedData = [
        {
            name: '기본급여',
            data: [200, 210, 220, 230, 250, 300, 200, 300, 350, 300, 200, 360],
        },
    ];

    return (
        <>
            <div className="mt-3">
                <p style={{ fontSize: "20px" }}>급여</p>
                <Chart
                    options={apexBarChartStackedOpts}
                    series={apexBarChartStackedData}
                    type="bar"
                    className="apex-charts"
                />
            </div>
        </>
    );
};

export default GeubyeoReportOlhaeGeubyeo;