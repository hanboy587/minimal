import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import * as yup from 'yup';
import PageTitle from '../../components/PageTitle';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { encode } from 'base-64';
import { logoutUser } from '../../redux/actions';
import AccountLayout from './AccountLayout';


// 비밀번호 변경

const ChangePassword = () => {
	const dispatch = useDispatch();

	const [inputs, setInputs] = useState({
		id: '',
		password: '',
		newPassword: '',
		newPasswordRetry: '',

	});

	const { id, password, newPassword, newPasswordRetry } = inputs;

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target);
		const { value, name } = e.target;
		setInputs({
			...inputs,
			[name]: value
		});
	};

	const onSubmit = async () => {
		if (newPassword !== newPasswordRetry) {
			alert('두 비밀번호가 같지않습니다.');
		} else {
			try {
				const res = await axios.post('/changepassword', {
					'id': encode(id),
					'password': encode(password),
					'newPassword': encode(newPassword),
					'newPasswordRetry': encode(newPasswordRetry),
				});
				console.log(res);
				const message = res.data.message;
				if (message == 'PASSWORD INVALID') {
					alert('패스워드가 틀렸습니다.');
					setInputs({
						...inputs,
						password: '',
						newPassword: '',
						newPasswordRetry: '',
					});
				} else if (message == 'INVALID') {
					alert('유효하지않습니다.');
				} else {
					alert('비멀번호 변경에 성공햇습니다, 다시로그인해주시기 바랍니다.');
					dispatch(logoutUser());
				}

			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		const sessionData: string | null = sessionStorage.getItem('hyper_user');
		console.log(sessionData);
		/*
		const user_id = JSON.parse(sessionData).user_id;
		if (user_id) {
			setInputs({
				...inputs,
				id: user_id,
			});
		}
		*/
	}, [id]);

	return (
		<div>
			<AccountLayout>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="exampleEmail2">아이디</Form.Label>
						<Form.Control type="id" name="id" id="id"  onChange={onChangeHandler} value={id || ''} disabled />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="examplePassword2">현재 비밀번호</Form.Label>
						<Form.Control
							type="password"
							name="password"
							id=""
							placeholder="비밀번호를 입력해주세요."
							onChange={onChangeHandler}
							value={password}
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label htmlFor="examplePassword2">새 비밀번호</Form.Label>
						<Form.Control
							type="password"
							name="newPassword"
							id="examplePassword2"
							placeholder="새 비밀번호를 입력해주세요."
							onChange={onChangeHandler}
							value={newPassword}
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label htmlFor="examplePassword2">새 비밀번호 확인</Form.Label>
						<Form.Control
							type="password"
							name="newPasswordRetry"
							id="examplePassword2"
							placeholder="새 비밀번호를 다시 입력해주세요."
							onChange={onChangeHandler}
							value={newPasswordRetry}
						/>
					</Form.Group>
					<div className="text-center">
						<Button variant="primary" type="button" onClick={onSubmit}>
							비밀번호 변경
						</Button>
					</div>
				</Form>
			</AccountLayout>
		</div>
	);
};



export default ChangePassword;
