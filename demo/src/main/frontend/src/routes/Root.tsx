import { Navigate } from 'react-router-dom';

// 접속시 기본화면 url 

const Root = () => {
    const getRootUrl = () => {
        let url: string = 'ui/base-ui/ribbons';
        return url;
    };

    const url = getRootUrl();

    return <Navigate to={`/${url}`} />;
};

export default Root;
