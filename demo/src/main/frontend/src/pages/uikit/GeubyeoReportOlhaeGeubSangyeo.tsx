import { Row, Col, Card, } from 'react-bootstrap';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';


const GeubyeoReportOlhaeGeubSangyeo = () => {

    //급상여 option
    const apexBarChartStackedOpts2: ApexOptions = {
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
        colors: ['#C5E99B', '#8CD790', '#75D701', '#3ac569', '#218380',
            '#519D9E', '#5A9367', '#56A902', '#58C9B9', '#4FB0C6', '#4F86C6'],
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

    const apexBarChartStackedData2 = [
        {
            name: '주휴수당',
            data: [50, 10, 20, 30, 0, 15, 3, 10, 20, 22, 50, 10],
        },
        {
            name: '연장수당',
            data: [10, 50, 0, 0, 50, 0, 30],
        },
        {
            name: '야간수당',
            data: [20, 0, 0, 0, 0, 0, 0],
        },
        {
            name: '연차수당',
            data: [9, 7, 5, 8, 6, 9, 4],
        },
        {
            name: '휴일수당',
            data: [25, 12, 19, 32, 25, 24, 10],
        },
        {
            name: '식대',
            data: [25, 12, 19, 32, 25, 24, 10],
        },
        {
            name: '보육수당',
            data: [25, 12, 19, 32, 25, 24, 10],
        },
        {
            name: '운전보조금',
            data: [25, 12, 19, 32, 25, 24, 10],
        },
        {
            name: '명절수당',
            data: [25, 12, 19, 32, 25, 24, 10],
        },
        {
            name: '12월차액',
            data: [25, 12, 19, 32, 25, 24, 10],
        },
        {
            name: '상여',
            data: [25, 12, 19, 32, 25, 24, 10],
        },
    ];

    return (
        <>
            <div className="mt-3">
                <p style={{ fontSize: "20px" }}>급상여</p>
                <Chart
                    options={apexBarChartStackedOpts2}
                    series={apexBarChartStackedData2}
                    type="bar"
                    className="apex-charts"

                />
            </div>
        </>
    );
};

export default GeubyeoReportOlhaeGeubSangyeo;