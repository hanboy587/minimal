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
        colors: ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00'],
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
                    return val + 'h';
                },
            },
        },
    };

    const apexLineChartWithLablesData = [
        {
            name: '이번달시수',
            data: [209, 210, 213, 209, 215, 209, 213, 217, 209, 210, 209, 213],
        },
    ];

    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-2"
                    title="근로시간"
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
