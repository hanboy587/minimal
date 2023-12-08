import { Link } from 'react-router-dom';
import { Form, Table } from 'react-bootstrap';

type OrderData = {
	woldo: string;
	zgeullosodeukse: string;
	zjibangse: string;
	zgitasodeukse: string;
	zgungminhwansugeup: string;
	zgoyonghwansugeup: string;
	zgeullosehwansugeup: string;
	zjibangsehwansugeup: string;
	zgoyongboheom: string;
	zsiljigeuphwansugeup: string;
	zgungminyeonggeum: string;
	chongaek: string;
	zgongjehapgye: string;
	orderId: string;

};

type OrdersProps = {
    orderData: Array<OrderData>;
	select: string;
	keyword: string;
};

interface apiResponse {

}

const DONT_EXITS = 'NOT';

const Orders = ({ orderData, select, keyword }: OrdersProps) => {
    return (
        <Table responsive className="table-centered table-nowrap mb-0">
            <thead className="table-light">
                <tr>
                    <th style={{ width: '20px' }}>
                        <Form>
                            <Form.Check type="checkbox" id="all" />
                        </Form>
                    </th>
                    <th>월도</th>
                    <th>열람일시</th>
                    <th>재수당</th>
                    <th>공제액</th>
                    <th>사회보험료</th>
                    <th>세금</th>
                    <th>환수환급금</th>
                    <th style={{ width: '125px' }}>상세보기</th>
                </tr>
            </thead>
            <tbody>
			{
				(orderData || []).filter((data) => {
					if (select === DONT_EXITS) {
						return data;
					} else {
						const year = data.woldo.substr(0, 4);
						if (year === select) {
							return data;
						}
					}
				}).map((order, i) => {
					var segeum = order.zgeullosodeukse + order.zjibangse + order.zgitasodeukse;
					var hwansugeub = order.zgungminhwansugeup + order.zgoyonghwansugeup + order.zgeullosehwansugeup + order.zjibangsehwansugeup + order.zsiljigeuphwansugeup;
					var sahoeboheomlyo = order.zgoyongboheom + order.zgungminyeonggeum;
					var chongaek = order.chongaek;
					var zgongjehapgye = order.zgongjehapgye;
					segeum = segeum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
					hwansugeub = hwansugeub.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
					sahoeboheomlyo = sahoeboheomlyo.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
					chongaek = chongaek.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
					zgongjehapgye = zgongjehapgye.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
					return (
                        <tr key={i}>
                            <td>
                                <Form>
                                    <Form.Check type="checkbox" id={order.orderId} />
                                </Form>
                            </td>
                            <td>
                                <Link to="#" className="text-body fw-bold">
                                    {order.woldo}
                                </Link>
                            </td>
                            <td>
																{}
                            </td>
                            <td>
																{ chongaek }
                            </td>
														<td>
																{ zgongjehapgye }
														</td>
                            <td>
																{ sahoeboheomlyo }
                            </td>
                            <td>
																{ segeum }
														</td>
                            <td>
																{ hwansugeub }
                            </td>
                            <td>
                                <Link to="/pages/invoice" className="action-icon">
                                    <i className="uil-file-search-alt"></i>
                                </Link>
                            </td>
                        </tr>
                    );
                })
			}
            </tbody>
        </Table>
    );
};

export default Orders;
