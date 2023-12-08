import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetAuth, forgotPassword } from 'redux/actions';
import { useRedux } from 'hooks';
import { UserData } from '../NewHRForgetPassword';

export default function useForgetPassword() {
    const { dispatch, appSelector } = useRedux();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    const { loading, passwordReset, resetPasswordSuccess, error } = appSelector((state) => ({
        loading: state.Auth.loading,
        user: state.Auth.user,
        error: state.Auth.error,
        passwordReset: state.Auth.passwordReset,
        resetPasswordSuccess: state.Auth.resetPasswordSuccess,
    }));

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            userID: yup.string().required(t('가입하신 이메일을 입력해주세요')),
        })
    );
    

    /*
     * handle form submission
     */
    const onSubmit = (formData: UserData) => {
        dispatch(forgotPassword(formData['username']));
    };
    
    return {
        loading,
        passwordReset,
        resetPasswordSuccess,
        error,
        schemaResolver,
        onSubmit,
    };
}
