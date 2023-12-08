import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import { ApexOptions } from 'apexcharts';
import { CardTitle } from 'components';

const RevenueChart = () => {
    const apexLineChartWithLables: ApexOptions = {
        chart: {
            height: 364,
            type: 'line',
            dropShadow: {
                enabled: true,
                opacity: 0.1,
                blur: 7,
                left: -7,
                top: 7,
            },
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            parentHeightOffset: 0,
        },
        grid: {
            padding: {
                left: 0,
                right: 0,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        legend: {
            show: false,
        },
        colors: ['#B266FF', '#0acf97', '#fa5c7c', '#ffbc00'],
        xaxis: {
            categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월','8월','9월','10월','11월','12월'],
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return val + '만원';
                },
            },
        },
    };

    const apexLineChartWithLablesData = [
        {
            name: '월급여',
            data: [180, 195, 200, 180, 220, 180, 200, 220, 180, 195, 180, 200],
        },
        // {
        //     name: 'Previous Week',
        //     data: [0, 15, 10, 30, 15, 35, 25],
        // }
    ];

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-2"
                    title="급여명세서"
                    menuItems={[
                    ]}
                />
                <Chart
                    options={apexLineChartWithLables}
                    series={apexLineChartWithLablesData}
                    type="line"
                    className="apex-charts mt-3"
                    height={378}
                />
            </Card.Body>
        </Card>
    );
};

export default RevenueChart;
