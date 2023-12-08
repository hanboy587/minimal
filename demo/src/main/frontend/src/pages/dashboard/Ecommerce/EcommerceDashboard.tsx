import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HyperDatepicker } from 'components';
import { useDatePicker } from 'hooks';
import Statistics from './Statistics';
import PerformanceChart from './PerformanceChart';
import RevenueChart from './RevenueChart';
import RevenueChart2 from './RevenueChart2';
import RevenueByLocationChart from './RevenueByLocationChart';
import SalesChart from './SalesChart';
import Activity from './Activity';
import Products from './Products';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/actions';

import OrderList from "../../../pages/apps/CRM/OrderList/index";

const EcommerceDashboard = () => {
	const dispatch = useDispatch();
    const { selectedDate, onDateChange } = useDatePicker();
	const logoutBtn = () => {
		console.log('logoutBtn');
		dispatch(logoutUser());
	};
    return (
        <>
			<button onClick={logoutBtn}>logoutBtn</button>
			<OrderList />
            <Row>
                <Col lg={13}>
                    <RevenueChart />
                </Col>

            </Row>
            <Row>
                <Col lg={13}>
                    <RevenueChart2 />
                </Col>     
            </Row>
        </>
    );
};

export { EcommerceDashboard };
