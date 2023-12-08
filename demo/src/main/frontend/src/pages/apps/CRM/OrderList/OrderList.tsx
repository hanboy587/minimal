import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { FormInput, PageTitle } from 'components';
import Orders from './Orders';
//import { orderData } from './data';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface OrderData {
	data: string;
}
const DONT_EXITS = 'NOT';

const OrderList = () => {
	const url = "https://arte.rba.kr/_mis/list_json.php?flag=read&RealPid=NICE006317&allFilter=%5B%7B%22operator%22:%22contains%22,%22value%22:%22%22,%22field%22:%22woldo%22%7D,%7B%22operator%22:%22eq%22,%22value%22:%221397%22,%22field%22:%22deungnokbeonho%22%7D%5D&orderby=idx&$callback=jQuery112405156548597335047_1644309320097&flag=readResult&pure=1";
	const [orderData, setOrderData] = useState([]);
	const [keyword, setKeyword] = useState("");
	const [select, setSelect] = useState(DONT_EXITS);
	const [selectYear, setSelectYear] = useState<string[]>([]);
	const getData = async() => {
		const res = await axios.get(url);
		setOrderData(res.data);
		var i = 0;
		var result1: string[] = [];
		while (i < res.data.length) {
			result1.push(res.data[i].woldo.substr(0, 4));
			i++;
		}
		let result2: string[] = [];
		result1.forEach((v) => {
			if (!result2.includes(v)) {
				result2.push(v);
			}
		})
		setSelectYear(result2);
	}

	useEffect(() => {
		getData();
	}, []);

	const onChangeSelect = (e:any) => {
		setSelect(e.target.value);
	};

	const token_renewal = async() => {
		const data = sessionStorage.getItem('hyper_user') || '{}';
		const token = JSON.parse(data).token;
		const user_id = JSON.parse(data).user_id;
		const res = await axios.post('/token_renewal', {user_id : user_id}, {
			headers: { Authorization: `Bearer ${token}` },
		});
		const message = res.data.message;
		const new_token = res.data.token;
		if (message === "Fail") {
			sessionStorage.clear();
			alert('세션이 만료되었습니다.');
		}
		if (res.data) {
			sessionStorage.setItem('hyper_user', JSON.stringify(res.data));
		} else {
		}
	};

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                ]}
                title={'리스트'}
            />
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <Row className="mb-2">
                                <Col xl={8}>
                                    <Row className="gy-2 gx-2 align-items-center justify-content-xl-start justify-content-between">
                                        <Col xs="auto">
                                            <FormInput type="text" name="search" placeholder="Search..." />
                                        </Col>
                                        <Col xs="auto">
                                            <Form.Group as={Row}>
                                                <Form.Label htmlFor="exampleEmail3" column sm={5}>
													년도선택
                                                </Form.Label>
                                                <Col sm={7}>
                                                    <FormInput
                                                        name="select"
                                                        type="select"
                                                        className="form-select"
														onChange={onChangeSelect}
                                                        key="select">
                                                        <option value={DONT_EXITS}>선택</option>
														{selectYear.map((year, index) => (<option key={index} value={year}>{year}</option>))}
                                                    </FormInput>
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                            <Orders orderData={orderData} select={select} keyword={keyword} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export { OrderList };
