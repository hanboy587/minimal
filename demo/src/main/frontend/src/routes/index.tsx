import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { DefaultLayout, VerticalLayout, HorizontalLayout, DetachedLayout, FullLayout } from 'layouts';
import PrivateRoute from './PrivateRoute';
import Root from './Root';
import { LayoutTypes } from 'appConstants';
import { useRedux } from 'hooks';

// auth
const Auth = ["ROLE_USER", "ROLE_WORKER", "ROLE_ADMIN"];

// lazy load all the views
const Login = React.lazy(() => import('pages/account/Login'));
const Logout = React.lazy(() => import('pages/account/Logout'));
const Register = React.lazy(() => import('pages/account/Register'));
const Confirm = React.lazy(() => import('pages/account/Confirm'));
const ForgetPassword = React.lazy(() => import('pages/account/ForgetPassword'));
const LockScreen = React.lazy(() => import('pages/account/LockScreen'));
const ChangePassword = React.lazy(() => import('pages/account/ChangePassword'));

const Login2 = React.lazy(() => import('pages/account/Login2'));
const Logout2 = React.lazy(() => import('pages/account/Logout2'));
const Register2 = React.lazy(() => import('pages/account/Register2'));
const Confirm2 = React.lazy(() => import('pages/account/Confirm2'));
const ForgetPassword2 = React.lazy(() => import('pages/account/ForgetPassword2'));
const LockScreen2 = React.lazy(() => import('pages/account/LockScreen2'));

// dashboard
const AnalyticsDashboard = React.lazy(() => import('pages/dashboard/Analytics'));
const EcommerceDashboard = React.lazy(() => import('pages/dashboard/Ecommerce'));
const ProjectDashboard = React.lazy(() => import('pages/dashboard/Project'));
const EWalletDashboard = React.lazy(() => import('pages/dashboard/E-Wallet'));

// apps
const CalendarApp = React.lazy(() => import('pages/apps/Calendar'));
const ProjectList = React.lazy(() => import('pages/apps/Projects/List'));
const ProjectDetail = React.lazy(() => import('pages/apps/Projects/Detail/'));
const ProjectGannt = React.lazy(() => import('pages/apps/Projects/Gantt'));
const ProjectForm = React.lazy(() => import('pages/apps/Projects/ProjectForm'));
// topbar 인사 용 근태결재 탭을위해 존재함 
const ScheduleCalendarTop = React.lazy(() => import('pages/apps/ScheduleCalendarTop'));

// - chat
const ChatApp = React.lazy(() => import('pages/apps/Chat/'));

// -crm
const CRMDashboard = React.lazy(() => import('pages/apps/CRM/Dashboard'));
const CRMProjects = React.lazy(() => import('pages/apps/CRM/Projects'));
const CRMManagement = React.lazy(() => import('pages/apps/CRM/Management'));
const CRMClients = React.lazy(() => import('pages/apps/CRM/Clients'));
const CRMOrderList = React.lazy(() => import('pages/apps/CRM/OrderList'));

// - ecommece pages
const EcommerceProducts = React.lazy(() => import('pages/apps/Ecommerce/Products'));
const ProductDetails = React.lazy(() => import('pages/apps/Ecommerce/ProductDetails'));
const Orders = React.lazy(() => import('pages/apps/Ecommerce/Orders'));
const OrderDetails = React.lazy(() => import('pages/apps/Ecommerce/OrderDetails'));
const Customers = React.lazy(() => import('pages/apps/Ecommerce/Customers'));
const Cart = React.lazy(() => import('pages/apps/Ecommerce/Cart'));
const Checkout = React.lazy(() => import('pages/apps/Ecommerce/Checkout/'));
const Sellers = React.lazy(() => import('pages/apps/Ecommerce/Sellers'));

// - email
const Inbox = React.lazy(() => import('pages/apps/Email/Inbox'));
const Write = React.lazy(() => import('pages/apps/Email/Write'));
const EmailDetail = React.lazy(() => import('pages/apps/Email/Detail'));
const Complete = React.lazy(() => import('pages/apps/Email/Complete'));

// - social
const SocialFeed = React.lazy(() => import('pages/apps/SocialFeed/'));

// - tasks
const TaskList = React.lazy(() => import('pages/apps/Tasks/List/'));
const TaskDetails = React.lazy(() => import('pages/apps/Tasks/Details'));
const Kanban = React.lazy(() => import('pages/apps/Tasks/Board/'));
// - file
const FileManager = React.lazy(() => import('pages/apps/FileManager'));

// pages
const Profile = React.lazy(() => import('pages/profile'));
const ErrorPageNotFound = React.lazy(() => import('pages/error/PageNotFound'));
const ErrorPageNotFoundAlt = React.lazy(() => import('pages/error/PageNotFoundAlt'));
const ServerError = React.lazy(() => import('pages/error/ServerError'));

// - other
const Invoice = React.lazy(() => import('pages/other/Invoice'));
const FAQ = React.lazy(() => import('pages/other/FAQ'));
const Pricing = React.lazy(() => import('pages/other/Pricing'));
const Maintenance = React.lazy(() => import('pages/other/Maintenance'));
const Starter = React.lazy(() => import('pages/other/Starter'));
const PreLoader = React.lazy(() => import('pages/other/PreLoader/'));
const Timeline = React.lazy(() => import('pages/other/Timeline'));

const Landing = React.lazy(() => import('pages/landing/'));
const Seobiseusogae = React.lazy(() => import('pages/landing/Seobiseusogae'));
const Samudaehaengjedo = React.lazy(() => import('pages/landing/Samudaehaengjedo'));
const Gongjisahang = React.lazy(() => import('pages/landing/Gongjisahang'));
const QnA = React.lazy(() => import('pages/landing/QnA'));
const Yaggwan = React.lazy(() => import('pages/landing/Yaggwan'));
const Gaeinjeongbocheoli = React.lazy(() => import('pages/landing/Gaeinjeongbocheoli'));
const Boheomsamuwiimcheoligyuyag = React.lazy(() => import('pages/landing/Boheomsamuwiimcheoligyuyag'));
const Sahoeboheomsingo = React.lazy(() => import('pages/landing/Sahoeboheomsingo'));
const Jeojaggwon = React.lazy(() => import('pages/landing/Jeojaggwon'));
const Dashboard = React.lazy(() => import('pages/landing/Dashboard'));

// uikit
const Accordions = React.lazy(() => import('pages/uikit/Accordions'));
const AccordionsTop = React.lazy(() => import('pages/uikit/AccordionsTop')); //accordions topbar전용메뉴
const Alerts = React.lazy(() => import('pages/uikit/Alerts'));
const Avatars = React.lazy(() => import('pages/uikit/Avatars'));
const Badges = React.lazy(() => import('pages/uikit/Badges'));
const Breadcrumbs = React.lazy(() => import('pages/uikit/Breadcrumb'));
const Buttons = React.lazy(() => import('pages/uikit/Buttons'));
const Cards = React.lazy(() => import('pages/uikit/Cards'));
const Carousels = React.lazy(() => import('pages/uikit/Carousel'));
const Dropdowns = React.lazy(() => import('pages/uikit/Dropdowns'));
const EmbedVideo = React.lazy(() => import('pages/uikit/EmbedVideo'));
const IlYongJeongBo = React.lazy(() => import('pages/uikit/IlYongJeongBo'));
const Grid = React.lazy(() => import('pages/uikit/Grid'));
const WorkerInfo = React.lazy(() => import('pages/uikit/WorkerInfo'));
const ChwiDeugSinGo = React.lazy(() => import('pages/uikit/ChwiDeugSinGo'));
const Notifications = React.lazy(() => import('pages/uikit/Notifications'));
const Offcanvases = React.lazy(() => import('pages/uikit/Offcanvas'));
const Placeholders = React.lazy(() => import('pages/uikit/Placeholders'));
const SangSilSinGo = React.lazy(() => import('pages/uikit/SangSilSinGo'));
const SaeobJangJeongBoIbLyeog = React.lazy(() => import('pages/uikit/SaeobJangJeongBoIbLyeog'));
const Progress = React.lazy(() => import('pages/uikit/Progress'));
const Ribbons = React.lazy(() => import('pages/uikit/Ribbons'));
const Spinners = React.lazy(() => import('pages/uikit/Spinners'));
const Tabs = React.lazy(() => import('pages/uikit/Tabs'));
const TabsTop = React.lazy(() => import('pages/uikit/TabsTop')); //tabs topbar전용메뉴
const SpecialCommute = React.lazy(() => import('pages/uikit/SpecialCommute'));
const Tooltips = React.lazy(() => import('pages/uikit/Tooltips'));
const Typography = React.lazy(() => import('pages/uikit/Typography'));
const DragDrop = React.lazy(() => import('pages/uikit/DragDrop'));
const RangeSliders = React.lazy(() => import('pages/uikit/RangeSliders'));
const ScheduleCalendarAll = React.lazy(() => import('pages/apps/ScheduleCalendarAll'));
const ScheduleCalendar = React.lazy(() => import('pages/apps/ScheduleCalendar'));
// const ScheduleCalendarTop = React.lazy(() => import('pages/apps/ScheduleCalendarTop'));
const Ratings = React.lazy(() => import('pages/uikit/Ratings'));
const Profile3 = React.lazy(() => import('pages/uikit/Profile3'));
const Weeklyplan = React.lazy(() => import('pages/uikit/Weeklyplan'));
const Workschedule = React.lazy(() => import('pages/uikit/Workschedule'));
const ManagerBoard = React.lazy(() => import('pages/uikit/ManagerBoard'));
const TotaltimeGraph = React.lazy(() => import('pages/uikit/TotaltimeGraph'));
const Geubyeomyeongseseo2 = React.lazy(() => import('pages/uikit/Geubyeomyeongseseo2'));
const Geubyeomyeongseseo = React.lazy(() => import('pages/uikit/Geubyeomyeongseseo'));
const Paylist = React.lazy(() => import('pages/uikit/Paylist'));
const Gwonhangwanli = React.lazy(() => import('pages/uikit/Gwonhangwanli'));
const Geunlotimecheck = React.lazy(() => import('pages/uikit/Geunlotimecheck'));
const Jojigdo = React.lazy(() => import('pages/uikit/Jojigdo'));
const Jojigdosidebar = React.lazy(() => import('pages/uikit/Jojigdosidebar'));
const Fax = React.lazy(() => import('pages/uikit/Fax'));
const ComponentEx = React.lazy(() => import('pages/uikit/ComponentEx'));
const GeubyeoReport = React.lazy(() => import('pages/uikit/GeubyeoReport'));
const GeubyeomyeongseseoTest = React.lazy(() => import('pages/uikit/GeubyeomyeongseseoTest'));
const Gpt = React.lazy(() => import('pages/uikit/Gpt'));
const GptSearchlist = React.lazy(() => import('pages/uikit/GptSearchlist'));
const Mandalart = React.lazy(() => import('pages/uikit/Mandalart'));
const Saeobjangseoljeong = React.lazy(() => import('pages/uikit/Saeobjangseoljeong'));
const Jeonjasegeumgyesanseo = React.lazy(() => import('pages/uikit/Jeonjasegeumgyesanseo'));
const DonglyoPyeongga = React.lazy(() => import('pages/uikit/DonglyoPyeongga'));
const Settingform = React.lazy(() => import('pages/uikit/Settingform'));
const HyugasayongList = React.lazy(() => import('pages/uikit/HyugasayongList'));
const HyugasayongUser = React.lazy(() => import('pages/uikit/HyugasayongUser'));
const JigwonjeongboList = React.lazy(() => import('pages/uikit/JigwonjeongboList'));
const NewHRLogin = React.lazy(() => import('pages/uikit/NewHRLogin'));
const NewHRJoin = React.lazy(() => import('pages/uikit/NewHRJoin'));
const NewHRID = React.lazy(() => import('pages/uikit/NewHRID'));
const NewHRForgetPassword = React.lazy(() => import('pages/uikit/NewHRForgetPassword'));
const UserIpTable = React.lazy(() => import('pages/uikit/UserIpTable'));
const SettingformMiyongeob = React.lazy(() => import('pages/uikit/SettingformMiyongeob'));

// icons
const Dripicons = React.lazy(() => import('pages/icons/Dripicons'));
const MDIIcons = React.lazy(() => import('pages/icons/MDIIcons'));
const Unicons = React.lazy(() => import('pages/icons/Unicons'));

// forms
const BasicForms = React.lazy(() => import('pages/forms/Basic'));
const FormAdvanced = React.lazy(() => import('pages/forms/Advanced'));
const FormValidation = React.lazy(() => import('pages/forms/Validation'));
const FormWizard = React.lazy(() => import('pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('pages/forms/FileUpload'));
const Editors = React.lazy(() => import('pages/forms/Editors'));

// charts
const ApexChart = React.lazy(() => import('pages/charts/Apex'));
const ChartJs = React.lazy(() => import('pages/charts/ChartJs'));

// tables
const BasicTables = React.lazy(() => import('pages/tables/Basic'));
const Piboheomjailyeog = React.lazy(() => import('pages/tables/Piboheomjailyeog'));

// widgets
const Widgets = React.lazy(() => import('pages/uikit/Widgets'));

// maps
const GoogleMaps = React.lazy(() => import('pages/maps/GoogleMaps'));
const VectorMaps = React.lazy(() => import('pages/maps/VectorMaps'));

const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    const { appSelector } = useRedux();

    const { layout } = appSelector((state) => ({
        layout: state.Layout,
    }));

    const getLayout = () => {
        let layoutCls: React.ComponentType = VerticalLayout;

        switch (layout.layoutType) {
            case LayoutTypes.LAYOUT_HORIZONTAL:
                layoutCls = HorizontalLayout;
                break;
            case LayoutTypes.LAYOUT_DETACHED:
                layoutCls = DetachedLayout;
                break;
            case LayoutTypes.LAYOUT_FULL:
                layoutCls = FullLayout;
                break;
            default:
                layoutCls = VerticalLayout;
                break;
        }
        return layoutCls;
    };
    let Layout = getLayout();

    // @ts-ignore
    return useRoutes([
        { path: '/', element: <Root /> },
        {
            // public routes
            path: '/',
            element: <DefaultLayout />,
            children: [
                {
                    path: 'account',
                    children: [
                        { path: 'login', element: <LoadComponent component={Login} /> },
                        { path: 'register', element: <LoadComponent component={Register} /> },
                        { path: 'confirm', element: <LoadComponent component={Confirm} /> },
                        { path: 'forget-password', element: <LoadComponent component={ForgetPassword} /> },
                        { path: 'lock-screen', element: <LoadComponent component={LockScreen} /> },
                        { path: 'logout', element: <LoadComponent component={Logout} /> },
                        { path: 'login2', element: <LoadComponent component={Login2} /> },
                        { path: 'register2', element: <LoadComponent component={Register2} /> },
                        { path: 'confirm2', element: <LoadComponent component={Confirm2} /> },
                        { path: 'forget-password2', element: <LoadComponent component={ForgetPassword2} /> },
                        { path: 'lock-screen2', element: <LoadComponent component={LockScreen2} /> },
                        { path: 'logout2', element: <LoadComponent component={Logout2} /> },
						{ path: 'change-password', element: <LoadComponent component={ChangePassword} /> }
                    ],
                },
                {
                    path: '/*',
                    element: <LoadComponent component={ErrorPageNotFound} />,
                },
                {
                    path: 'error-500',
                    element: <LoadComponent component={ServerError} />,
                },
                {
                    path: 'maintenance',
                    element: <LoadComponent component={Maintenance} />,
                },
                {
                    path: 'index',
                    element: <LoadComponent component={Landing} />,
                },
                {
                    path: 'Seobiseusogae',
                    element: <LoadComponent component={Seobiseusogae} />,
                },
                {
                    path: 'Samudaehaengjedo',
                    element: <LoadComponent component={Samudaehaengjedo} />,
                },
                {
                    path: 'Gongjisahang',
                    element: <LoadComponent component={Gongjisahang} />,
                },
                {
                    path: 'QnA',
                    element: <LoadComponent component={QnA} />,
                },
                {
                    path: 'Yaggwan',
                    element: <LoadComponent component={Yaggwan} />,
                },
                {
                    path: 'Gaeinjeongbocheoli',
                    element: <LoadComponent component={Gaeinjeongbocheoli} />,
                },
                {
                    path: 'Boheomsamuwiimcheoligyuyag',
                    element: <LoadComponent component={Boheomsamuwiimcheoligyuyag} />,
                },
                {
                    path: 'Sahoeboheomsingo',
                    element: <LoadComponent component={Sahoeboheomsingo} />,
                },
                {
                    path: 'Jeojaggwon',
                    element: <LoadComponent component={Jeojaggwon} />,
                },
                {
                    path: 'Dashboard',
                    element: <LoadComponent component={Dashboard} />,
                },
                
            ],
        },
        {
            // auth protected routes
            path: '/',
            element: <PrivateRoute roles={Auth} component={Layout} />,
            children: [
                {
                    path: 'dashboard',
                    children: [
                        {
                            path: 'analytics',
                            element: <LoadComponent component={AnalyticsDashboard} />,
                        },
                        {
                            path: 'ecommerce',
                            element: <LoadComponent component={EcommerceDashboard} />,
                        },
                        {
                            path: 'project',
                            element: <LoadComponent component={ProjectDashboard} />,
                        },
                        {
                            path: 'e-wallet',
                            element: <LoadComponent component={EWalletDashboard} />,
                        },
                    ],
                },
                {
                    path: 'apps',
                    children: [
                        {
                            path: 'calendar',
                            element: <LoadComponent component={CalendarApp} />,
                        },
                        {
                            path: 'SchedulecalendarTop',
                            element: <LoadComponent component={ScheduleCalendarTop} />,
                        },
                        {
                            path: 'chat',
                            element: <LoadComponent component={ChatApp} />,
                        },
                        {
                            path: 'crm',
                            children: [
                                {
                                    path: 'dashboard',
                                    element: <LoadComponent component={CRMDashboard} />,
                                },
                                {
                                    path: 'projects',
                                    element: <LoadComponent component={CRMProjects} />,
                                },
                                {
                                    path: 'management',
                                    element: <LoadComponent component={CRMManagement} />,
                                },
                                {
                                    path: 'clients',
                                    element: <LoadComponent component={CRMClients} />,
                                },
                                {
                                    path: 'orders',
                                    element: <LoadComponent component={CRMOrderList} />,
                                },
                            ],
                        },
                        {
                            path: 'ecommerce',
                            children: [
                                {
                                    path: 'products',
                                    element: <LoadComponent component={EcommerceProducts} />,
                                },
                                {
                                    path: 'details',
                                    element: <LoadComponent component={ProductDetails} />,
                                },
                                {
                                    path: 'orders',
                                    element: <LoadComponent component={Orders} />,
                                },
                                {
                                    path: 'order/details',
                                    element: <LoadComponent component={OrderDetails} />,
                                },
                                {
                                    path: 'customers',
                                    element: <LoadComponent component={Customers} />,
                                },
                                {
                                    path: 'shopping-cart',
                                    element: <LoadComponent component={Cart} />,
                                },
                                {
                                    path: 'checkout',
                                    element: <LoadComponent component={Checkout} />,
                                },
                                {
                                    path: 'sellers',
                                    element: <LoadComponent component={Sellers} />,
                                },
                            ],
                        },
                        {
                            path: 'email',
                            children: [
                                {
                                    path: 'inbox',
                                    element: <LoadComponent component={Inbox} />,
                                },
                                {
                                    path: 'details',
                                    element: <LoadComponent component={EmailDetail} />,
                                },
                                {
                                    path: 'Write',
                                    element: <LoadComponent component={Write} />,
                                },
                                {
                                    path: 'Complete',
                                    element: <LoadComponent component={Complete} />,
                                },
                            ],
                        },
                        {
                            path: 'tasks',
                            children: [
                                {
                                    path: 'list',
                                    element: <LoadComponent component={TaskList} />,
                                },
                                {
                                    path: 'kanban',
                                    element: <LoadComponent component={Kanban} />,
                                },
                                {
                                    path: 'details',
                                    element: <LoadComponent component={TaskDetails} />,
                                },
                            ],
                        },

                        {
                            path: 'projects',
                            children: [
                                {
                                    path: 'list',
                                    element: <LoadComponent component={ProjectList} />,
                                },
                                {
                                    path: 'details',
                                    element: <LoadComponent component={ProjectDetail} />,
                                },
                                {
                                    path: 'gantt',
                                    element: <LoadComponent component={ProjectGannt} />,
                                },
                                {
                                    path: 'new',
                                    element: <LoadComponent component={ProjectForm} />,
                                },
                            ],
                        },
                        {
                            path: 'social',
                            element: <LoadComponent component={SocialFeed} />,
                        },
                        {
                            path: 'file',
                            element: <LoadComponent component={FileManager} />,
                        },
                    ],
                },
                {
                    path: 'pages',
                    children: [
                        {
                            path: 'starter',
                            element: <LoadComponent component={Starter} />,
                        },
                        {
                            path: 'profile',
                            element: <LoadComponent component={Profile} />,
                        },
                        {
                            path: 'pricing',
                            element: <LoadComponent component={Pricing} />,
                        },
                        {
                            path: 'error-404-alt',
                            element: <LoadComponent component={ErrorPageNotFoundAlt} />,
                        },
                        {
                            path: 'timeline',
                            element: <LoadComponent component={Timeline} />,
                        },
                        {
                            path: 'invoice',
                            element: <LoadComponent component={Invoice} />,
                        },
                        {
                            path: 'faq',
                            element: <LoadComponent component={FAQ} />,
                        },
                        {
                            path: 'preloader',
                            element: <LoadComponent component={PreLoader} />,
                        },
                    ],
                },
                {
                    path: 'ui',
                    children: [
                        {
                            path: 'base-ui',
                            children: [
                                {
                                    path: 'accordions',
                                    element: <LoadComponent component={Accordions} />,
                                },
                                {
                                    path: 'accordionsTop', //accordions topbar전용메뉴
                                    element: <LoadComponent component={AccordionsTop} />,
                                },
                                {
                                    path: 'alerts',
                                    element: <LoadComponent component={Alerts} />,
                                },
                                {
                                    path: 'avatars',
                                    element: <LoadComponent component={Avatars} />,
                                },
                                {
                                    path: 'badges',
                                    element: <LoadComponent component={Badges} />,
                                },
                                {
                                    path: 'breadcrumb',
                                    element: <LoadComponent component={Breadcrumbs} />,
                                },
                                {
                                    path: 'buttons',
                                    element: <LoadComponent component={Buttons} />,
                                },
                                {
                                    path: 'cards',
                                    element: <LoadComponent component={Cards} />,
                                },
                                {
                                    path: 'carousel',
                                    element: <LoadComponent component={Carousels} />,
                                },
                                {
                                    path: 'dropdowns',
                                    element: <LoadComponent component={Dropdowns} />,
                                },
                                {
                                    path: 'embedvideo',
                                    element: <LoadComponent component={EmbedVideo} />,
                                },
                                {
                                    path: 'ilyongjeongbo',
                                    element: <LoadComponent component={IlYongJeongBo} />,
                                },
                                {
                                    path: 'Grid',
                                    element: <LoadComponent component={Grid} />,

                                },
                                {
                                    path: 'workerinfo',
                                    element: <LoadComponent component={WorkerInfo} />,
                                },
                                {
                                    path: 'chwideugsingo',
                                    element: <LoadComponent component={ChwiDeugSinGo} />,
                                },
                                {
                                    path: 'notifications',
                                    element: <LoadComponent component={Notifications} />,
                                },
                                {
                                    path: 'offcanvas',
                                    element: <LoadComponent component={Offcanvases} />,
                                },
                                {
                                    path: 'placeholders',
                                    element: <LoadComponent component={Placeholders} />,
                                },
                                {
                                    path: 'SangSilSinGo',
                                    element: <LoadComponent component={SangSilSinGo} />,
                                },
                                {
                                    path: 'SaeobJangJeongBoIbLyeog',
                                    element: <LoadComponent component={SaeobJangJeongBoIbLyeog} />,
                                },
                                {
                                    path: 'progress',
                                    element: <LoadComponent component={Progress} />,
                                },
                                {
                                    path: 'ribbons',
                                    element: <LoadComponent component={Ribbons} />,
                                },
                                {
                                    path: 'spinners',
                                    element: <LoadComponent component={Spinners} />,
                                },
                                {
                                    path: 'tabs',
                                    element: <LoadComponent component={Tabs} />,
                                },
                                {
                                    path: 'tabsTop',//tabs topbar전용메뉴
                                    element: <LoadComponent component={TabsTop} />,
                                },
                                {
                                    path: 'specialcommute',
                                    element: <LoadComponent component={SpecialCommute} />,
                                },
                                {
                                    path: 'tooltips',
                                    element: <LoadComponent component={Tooltips} />,
                                },
                                {
                                    path: 'Schedulecalendar',
                                    element: <LoadComponent component={ScheduleCalendar} />,
                                },
                                // {
                                //     path: 'SchedulecalendarTop',
                                //     element: <LoadComponent component={ScheduleCalendarTop} />,
                                // },
                                {
                                    path: 'ScheduleCalendarAll',
                                    element: <LoadComponent component={ScheduleCalendarAll} />,
                                },
                                {
                                    path: 'typography',
                                    element: <LoadComponent component={Typography} />,
                                },
                                {
                                    path: 'Profile3',
                                    element: <LoadComponent component={Profile3} />,
                                },
                                {
                                    path: 'Weeklyplan',
                                    element: <LoadComponent component={Weeklyplan} />,
                                },
                                {
                                    path: 'Workschedule',
                                    element: <LoadComponent component={Workschedule} />,
                                },
                                {
                                    path: 'ManagerBoard',
                                    element: <LoadComponent component={ManagerBoard} />,
                                },
                                {
                                    path: 'TotaltimeGraph',
                                    element: <LoadComponent component={TotaltimeGraph} />,
                                },
                                {
                                    path: 'Geubyeomyeongseseo2',
                                    element: <LoadComponent component={Geubyeomyeongseseo2} />,
                                },
                                {
                                    path: 'Geubyeomyeongseseo',
                                    element: <LoadComponent component={Geubyeomyeongseseo} />,
                                },
                                {
                                    path: 'Paylist',
                                    element: <LoadComponent component={Paylist} />,
                                },
                                {
                                    path: 'Gwonhangwanli',
                                    element: <LoadComponent component={Gwonhangwanli} />,
                                },
                                {
                                    path: 'Geunlotimecheck',
                                    element: <LoadComponent component={Geunlotimecheck} />,
                                },
                                {
                                    path: 'Jojigdo',
                                    element: <LoadComponent component={Jojigdo} />,
                                },
                                {
                                    path: 'Jojigdosidebar',
                                    element: <LoadComponent component={Jojigdosidebar} />,
                                },
                                {
                                    path: 'Fax',
                                    element: <LoadComponent component={Fax} />,
                                },
                                {
                                    path: 'ComponentEx',
                                    element: <LoadComponent component={ComponentEx} />,
                                },
                                {
                                    path: 'GeubyeoReport',
                                    element: <LoadComponent component={GeubyeoReport} />,
                                },
                                {
                                    path: 'GeubyeomyeongseseoTest',
                                    element: <LoadComponent component={GeubyeomyeongseseoTest} />,
                                },
                                {
                                    path: 'Gpt',
                                    element: <LoadComponent component={Gpt} />,
                                },
                                {
                                    path: 'GptSearchlist',
                                    element: <LoadComponent component={GptSearchlist} />,
                                },
                                {
                                    path: 'Mandalart',
                                    element: <LoadComponent component={Mandalart} />,
                                },
                                {
                                    path: 'Saeobjangseoljeong',
                                    element: <LoadComponent component={Saeobjangseoljeong} />,
                                },
                                {
                                    path: 'Jeonjasegeumgyesanseo',
                                    element: <LoadComponent component={Jeonjasegeumgyesanseo} />,
                                },
                                {
                                    path: 'DonglyoPyeongga',
                                    element: <LoadComponent component={DonglyoPyeongga} />,
                                },
                                {
                                    path: 'Settingform',
                                    element: <LoadComponent component={Settingform} />,
                                },
                                {
                                    path: 'HyugasayongList',
                                    element: <LoadComponent component={HyugasayongList} />,
                                },
                                {
                                    path: 'HyugasayongUser',
                                    element: <LoadComponent component={HyugasayongUser} />,
                                },
                                {
                                    path: 'JigwonjeongboList',
                                    element: <LoadComponent component={JigwonjeongboList} />,
                                },
                                {
                                    path: 'NewHRLogin',
                                    element: <LoadComponent component={NewHRLogin} />,
                                },
                                {
                                    path: 'NewHRJoin',
                                    element: <LoadComponent component={NewHRJoin} />,
                                },
                                {
                                    path: 'NewHRID',
                                    element: <LoadComponent component={NewHRID} />,
                                },
                                {
                                    path: 'NewHRForgetPassword',
                                    element: <LoadComponent component={NewHRForgetPassword} />,
                                },
                                {
                                    path: 'UserIpTable',
                                    element: <LoadComponent component={UserIpTable} />,
                                },
                                {
                                    path: 'SettingformMiyongeob',
                                    element: <LoadComponent component={SettingformMiyongeob} />,
                                },
                            ],
                        },
                        {
                            path: 'widgets',
                            element: <LoadComponent component={Widgets} />,
                        },
                        {
                            path: 'extended',
                            children: [
                                {
                                    path: 'dragdrop',
                                    element: <LoadComponent component={DragDrop} />,
                                },
                                {
                                    path: 'rangesliders',
                                    element: <LoadComponent component={RangeSliders} />,
                                },
                                {
                                    path: 'ratings',
                                    element: <LoadComponent component={Ratings} />,
                                },
                            ],
                        },
                        {
                            path: 'icons',
                            children: [
                                {
                                    path: 'unicons',
                                    element: <LoadComponent component={Unicons} />,
                                },
                                {
                                    path: 'mdi',
                                    element: <LoadComponent component={MDIIcons} />,
                                },
                                {
                                    path: 'dripicons',
                                    element: <LoadComponent component={Dripicons} />,
                                },
                            ],
                        },
                        {
                            path: 'forms',
                            children: [
                                {
                                    path: 'basic',
                                    element: <LoadComponent component={BasicForms} />,
                                },
                                {
                                    path: 'advanced',
                                    element: <LoadComponent component={FormAdvanced} />,
                                },
                                {
                                    path: 'validation',
                                    element: <LoadComponent component={FormValidation} />,
                                },
                                {
                                    path: 'wizard',
                                    element: <LoadComponent component={FormWizard} />,
                                },
                                {
                                    path: 'upload',
                                    element: <LoadComponent component={FileUpload} />,
                                },
                                {
                                    path: 'editors',
                                    element: <LoadComponent component={Editors} />,
                                },
                            ],
                        },
                        {
                            path: 'tables',
                            children: [
                                {
                                    path: 'basic',
                                    element: <LoadComponent component={BasicTables} />,
                                },
                                {
                                    path: 'Piboheomjailyeog',
                                    element: <LoadComponent component={Piboheomjailyeog} />,
                                },
                            ],
                        },
                        {
                            path: 'charts',
                            children: [
                                {
                                    path: 'apex',
                                    element: <LoadComponent component={ApexChart} />,
                                },
                                {
                                    path: 'chartjs',
                                    element: <LoadComponent component={ChartJs} />,
                                },
                            ],
                        },
                        {
                            path: 'maps',
                            children: [
                                {
                                    path: 'googlemaps',
                                    element: <LoadComponent component={GoogleMaps} />,
                                },
                                {
                                    path: 'vectormaps',
                                    element: <LoadComponent component={VectorMaps} />,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ]);
};

export { AllRoutes };
