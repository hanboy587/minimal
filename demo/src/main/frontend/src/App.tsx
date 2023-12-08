import '@progress/kendo-theme-default/dist/all.css';
import Routes from 'routes/Routes';
import { useEffect } from 'react';

// For Default import Saas.scss
import 'assets/scss/Saas.scss';
// import 'assets/scss/Creative.scss';
// import 'assets/scss/Modern.scss';

// kakao naver 간편로그인
declare global {
  interface Window {
    Kakao: any;
	naver: any;
  }
}
// 알림 기능 권한 요청


//	configureFakeBackend();
const App = () => {
    return <Routes />;
};

export default App;
