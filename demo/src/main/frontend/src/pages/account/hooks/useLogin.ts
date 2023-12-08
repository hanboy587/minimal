import { useEffect, useState } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetAuth, loginUser, googleLoginUser, logoutUser } from 'redux/actions';
import { useRedux } from 'hooks';
import { UserData } from '../Login';

type LocationState = {
    from?: Location;
};

export default function useLogin() {
    const { t } = useTranslation();
    const { dispatch, appSelector } = useRedux();
	const [captcha, setCaptcha] = useState("");
    const location: Location = useLocation();
    let redirectUrl: string = '/';

    if (location.state) {
        const { from } = location.state as LocationState;
        redirectUrl = from ? from.pathname : '/';
    }

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    const { loading, userLoggedIn, user, error } = appSelector((state) => ({
        loading: state.Auth.loading,
        user: state.Auth.user,
        error: state.Auth.error,
        userLoggedIn: state.Auth.userLoggedIn,
    }));

	const onCaptchaChange = (value: any) => {
		// console.log('Captcha value:', value);
		setCaptcha(value);
	}

    /*
    form validation schema
    */
    const schemaResolver = yupResolver(
        yup.object().shape({
            username: yup.string().required(t('이메일을 입력해주세요')),
            password: yup.string().required(t('비밀번호를 입력해주세요')),
        })
    );

    /*
    handle form submission
    */
    const onSubmit = (formData: UserData) => {
//		if (!captcha) {
//			alert('캡챠를 해주시기 바랍니다.');
//		} else {
			dispatch(loginUser(formData['username'], formData['password']));
//		}
    };

	const onSuccess = async(res:any) => {
		const profile = res.getBasicProfile();
		const idToken = res.getAuthResponse().id_token;
		// console.log('id_token : ', idToken);
		const userdata = {
			email: profile.getEmail(),
			image: profile.getImageUrl(),
			name: profile.getName(),
		}; 
		dispatch(googleLoginUser(idToken));
	}

	const onFailure = (res:any) => {
		alert("구글 로그인에 실패하였습니다");
		console.log("err", res);
	};

    return {
        loading,
        userLoggedIn,
        user,
        error,
        schemaResolver,
        onSubmit,
        redirectUrl,
		onCaptchaChange,
		onSuccess,
		onFailure,
    };
}
