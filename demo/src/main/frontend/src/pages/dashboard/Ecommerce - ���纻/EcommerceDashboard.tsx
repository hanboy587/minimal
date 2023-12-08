import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HyperDatepicker } from 'components';
import { useDatePicker } from 'hooks';
import Statistics from './Statistics';
import PerformanceChart from './PerformanceChart';
import RevenueChart from './RevenueChart';
import RevenueByLocationChart from './RevenueByLocationChart';
import SalesChart from './SalesChart';
import Activity from './Activity';
import Products from './Products';

import OrderList from "../../../pages/apps/CRM/OrderList/index";

const EcommerceDashboard = () => {
    const { selectedDate, onDateChange } = useDatePicker();
    return (
        <>
			<OrderList />
        </>
    );
};

export { EcommerceDashboard };
