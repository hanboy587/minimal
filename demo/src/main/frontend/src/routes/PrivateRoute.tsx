import { Navigate, useLocation } from 'react-router-dom';
import { APICore } from 'helpers/api/apiCore';
import { useUser } from 'hooks';
import { useRedux } from 'hooks';
import { logoutUser } from '../redux/actions';
import axios from 'axios';

type PrivateRouteProps = {
    component: React.ComponentType;
    roles?: string[];
};

/**
 * Private Route forces the authorization before the route can be accessed
 * @param {*} param0
 * @returns
 */
const PrivateRoute = ({component: RouteComponent, roles, ...rest}: PrivateRouteProps) => {
    const {dispatch} = useRedux();
    let location = useLocation();
    const [loggedInUser] = useUser();

    const api = new APICore();
    console.log("api : ", api.isUserAuthenticated());

    if (!api.isUserAuthenticated()) {
        return <Navigate to={'/index'} state={{from: location}} replace/>;
    }

    // check if route is restricted by role
    // 역할별로 경로제한
    /*
        if (roles && roles.indexOf(loggedInUser.role) === -1) {
            return <Navigate to={"/ui/base-ui/ribbons"} />
        }

        if (roles && roles.indexOf(loggedInUser.role) === -1) {
            return <Navigate to={"/ui/base-ui/Schedulecalendar"} />
        }
     */

    return <RouteComponent/>;
};

export default PrivateRoute;

    /**
     * not logged in so redirect to login page with the return url
	 * 세션 다시체크해서 만약 Fail이면 로그아웃 시키기
     */
		
		/*
		const data = sessionStorage.getItem('hyper_user') || '{}';
		const token = JSON.parse(data).token;
		const user_id = JSON.parse(data).user_id;
		console.log("user_id : ", user_id);
		axios.post('/token_renewal', {user_id : user_id}, {
			headers: { Authorization: `Bearer ${token}` },
		}).then((res) => {
			console.log("res : ", res);
			console.log("res.data : ", res.data);
			const message = res.data.message;
			if (message === "Fail") {
				sessionStorage.removeItem('hyper_user');
			} else {
				sessionStorage.setItem('hyper_user', JSON.stringify(res.data));
			}
		});
		const new_data = sessionStorage.getItem('hyper_user');
		const Login = sessionStorage.getItem('Login');
		console.log('new_data : ', new_data);
		console.log('Login : ', Login);
		if (!new_data && Login) {
			alert('세션이 만료되었습니다.');
			dispatch(logoutUser());
			sessionStorage.removeItem('Login');
			return <Navigate to={'/account/login'} state={{ from: location }} replace />;
		} else if (new_data && Login) {
			console.log("session 만료 안됨");
		} else {
			return <Navigate to={'/account/login'} state={{ from: location }} replace />;
		}
		*/