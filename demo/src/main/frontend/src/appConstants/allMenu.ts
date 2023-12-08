import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AUTH, ROLE_ADMIN, ROLE_USER, ROLE_WORKER, ROLE_GADMIN } from '../utils/Auth';

export type MenuItemType4 = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    role?: number;
    businessInfo?: number;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType4[];
};
// const                                          
const NEED = 1;
const NOT_NEED = 0;


const MENU_ITEMS_All: MenuItemType4[] = [
    // 사라질수있는메뉴 -1
    { key: 'navigation', label: '', isTitle: true, role: ROLE_WORKER },
    // {
    //     key: 'navigation-main2',
    //     label: 'Main(사)',
    //     isTitle: false,
    //     icon: 'uil-home-alt',
    //     url: '/dashboard/analytics',
    //     role: ROLE_USER,
    // },
    // {
    //     key: 'navigation-main3',
    //     label: 'Main(노)',
    //     isTitle: false,
    //     icon: 'uil-home-alt',
    //     url: '/dashboard/e-wallet',
    //     role: ROLE_USER,
    // },

    // HR용 메뉴
    { key: 'base-ui', label: 'HR', isTitle: false },
    {
        key: 'base-ui-DashBoard',
        label: '메인',
        icon: 'uil-home-alt',
        url: '/ui/base-ui/ribbons',
        role: ROLE_WORKER,
    },

    { key: 'apps', label: '사업장', isTitle: true },



    {
        key: 'apps-eobjangjeongbo',
        label: '사업장 정보(사)',
        isTitle: false,
        icon: 'mdi mdi-office-building-outline',
        url: '/ui/base-ui/saeobjangjeongboiblyeog',
        role: ROLE_USER,
        businessInfo: NEED,
    },
    {
        key: 'apps-jigwongwanli',
        label: '직원관리(사)',
        isTitle: false,
        icon: 'mdi mdi-account-check',
        url: '/ui/base-ui/grid',
        role: ROLE_USER,
        businessInfo: NEED,
    },
    {
        key: 'apps-wizard2',
        label: '이직확인서(사)',
        isTitle: false,
        icon: ' uil-file-edit-alt',
        url: '/ui/forms/validation',
        role: ROLE_USER,
    },


    { key: 'base-ui', label: '경영지원', isTitle: true },
    {
        key: 'base-ui-popovers2',
        label: '근태현황_총무',
        icon: ' mdi mdi-tab-search',
        url: '/ui/base-ui/SpecialCommute',
        role: ROLE_ADMIN,
    },
    {
        key: 'base-ui-hyugasayong',
        label: '휴가사용현황_총무',
        icon: ' mdi mdi-tab-search',
        url: '/ui/base-ui/HyugasayongList',
        role: ROLE_ADMIN,
    },
    {
        key: 'base-ui-hyugaUser',
        label: '휴가사용내역',
        icon: ' mdi mdi-tab-search',
        url: '/ui/base-ui/HyugasayongUser',
        role: ROLE_USER,
    },

    { key: 'base-ui', label: '관리자', isTitle: true, },
    {
        key: 'base-ui-Gwonhangwanli',
        label: '권한관리(직원권한)',
        isTitle: false,
        icon: 'mdi mdi-shield-account-outline',
        url: '/ui/base-ui/Gwonhangwanli',
        role: ROLE_WORKER,
    },

    {
        key: 'apps-seonglibsingo',
        label: '전자결재',
        isTitle: false,
        icon: ' mdi mdi-account-check',
        url: '/ui/base-ui/accordions',
        role: ROLE_USER,
    },

    {
        key: 'base-objangseoljeong',
        label: '사업장설정',
        isTitle: false,
        icon: ' mdi mdi-badge-account-alert-outline',
        url: '/ui/base-ui/Saeobjangseoljeong',
        role: ROLE_WORKER,
    },
    {
        key: 'base-ui-userip',
        label: '유저IP',
        isTitle: false,
        icon: 'drip  dripicons-pin',
        url: '/ui/base-ui/UserIpTable',
        role: ROLE_WORKER,
    },
    {
        key: 'base-ui-JigwonjeongboList',
        label: '직원정보리스트',
        isTitle: false,
        icon: 'drip  dripicons-pin',
        url: '/ui/base-ui/JigwonjeongboList',
        role: ROLE_WORKER,
    },
    
    



    //     {
    //         key: 'base-ui-ManagerDash',
    //         label: '메인(사)',
    //         icon: 'uil-home-alt',
    //         url: '/ui/base-ui/ManagerBoard',
    //         role: ROLE_WORKER,
    //     },
    {
        key: 'Dashboard',
        label: '현황판',
        icon: 'uil-home-alt',
        url: '/Dashboard',
        role: ROLE_WORKER,
    },

    {
        key: 'base-ui-popovers',
        label: '근태관리',
        icon: ' mdi mdi-tab-search',
        url: '/ui/base-ui/tabs',
        role: ROLE_WORKER,
    },

    {
        key: 'base-ui-seonglibsingo',
        label: '일정관리',
        icon: 'mdi mdi-calendar-cursor',
        isTitle: false,
        url: '/apps/calendar',
        role: ROLE_WORKER,
    },
    {
        key: 'base-ui-sangse',
        label: '근무기록조회',
        url: '/ui/base-ui/offcanvas',
        icon: 'mdi mdi-clock-edit-outline',
        role: ROLE_WORKER,
    },
    {
        key: 'base-ui-weeklyplan',
        label: '주간계획표',
        url: '/ui/base-ui/notifications',
        icon: ' uil uil-edit-alt',
        role: ROLE_WORKER,
    },

    {
        key: 'base-ui-schedulecalendar',
        label: '근태결재',
        icon: ' uil uil-edit-alt',
        url: '/ui/base-ui/Schedulecalendar',
        role: ROLE_WORKER,
    },

    {
        key: 'base-ui-schedulecalendarAll',
        label: '스케줄선택조회',
        icon: ' uil uil-edit-alt',
        url: '/ui/base-ui/schedulecalendarAll',
        role: ROLE_WORKER,
    },

    // {
    //     key: 'Workschedule',
    //     label: '근무일정생성', 
    //     isTitle: false,
    //     icon: 'mdi mdi-calendar-clock-outline',
    //     url: '/ui/base-ui/Workschedule',
    //     role: ROLE_WORKER,
    // },


    {
        key: 'base-ui-Geunlotimecheck',
        label: '근로시간확인',
        isTitle: false,
        icon: 'mdi mdi-clock-check-outline',
        url: '/ui/base-ui/Geunlotimecheck',
        role: ROLE_WORKER,
    },

    // 근로자용
    // { key: 'apps', label:'근로자', isTitle: true, },


    { key: 'base-ui', label: '기타', isTitle: true, },
    {
        key: 'base-ui-Fax',
        label: '팩스',
        isTitle: false,
        icon: 'mdi mdi-fax',
        url: '/ui/base-ui/Fax',
        role: ROLE_WORKER,
    },
    {
        key: 'base-ui-GeubyeoReport',
        label: '급여리포트',
        isTitle: false,
        icon: ' uil-chart-line',
        url: '/ui/base-ui/GeubyeoReport',
        role: ROLE_WORKER,
    },
    {
        key: 'base-ui-Gpt',
        label: 'Gpt',
        isTitle: false,
        icon: 'mdi mdi-chat-question-outline',
        url: '/ui/base-ui/Gpt',
        role: ROLE_WORKER,
    },
    // {
    //     key: 'base-ui-Mandalart',
    //     label: '만다라트',
    //     isTitle: false,
    //     icon: 'uil uil-chart-pie-alt',
    //     url: '/ui/base-ui/Mandalart',
    //     role: ROLE_WORKER,
    // },


    {
        key: 'apps-email',
        label: '이메일',
        isTitle: false,
        icon: 'uil-envelope',
        role: ROLE_WORKER,
        children: [
            {
                key: 'email-inbox',
                label: 'Inbox',
                url: '/apps/email/inbox',
                parentKey: 'apps-email',
            },
            {
                key: 'email-read-email',
                label: 'Read Email',
                url: '/apps/email/details',
                parentKey: 'apps-email',
            },
        ],
    },

    {
        key: 'base-ui-DonglyoPyeongga',
        label: '성과관리_동료',
        isTitle: false,
        icon: 'mdi mdi-clipboard-edit-outline',
        url: '/ui/base-ui/DonglyoPyeongga',
        role: ROLE_WORKER,
    },
    // {
    //     key: 'apps-chat',
    //     label: 'Chat',
    //     isTitle: false,
    //     icon: 'uil-comments-alt',
    //     url: '/apps/chat',
    // },
    {
        key: 'base-ui-Jojigdo',
        label: '조직도',
        isTitle: false,
        icon: 'mdi mdi-account-multiple-outline',
        url: '/ui/base-ui/Jojigdo',
        role: ROLE_WORKER,
    },

    // {
    //     key: 'task-kanban',
    //     label: 'Kanban Board',
    //     url: '/apps/tasks/kanban',
    //     icon: ' mdi mdi-align-vertical-distribute',
    //     role: ROLE_WORKER,
    // },
    // {
    //     key: 'project-gantt',
    //     label: 'Gantt',
    //     url: '/apps/projects/gantt',
    //     icon: ' mdi mdi-align-vertical-distribute',
    //     role: ROLE_WORKER,
    // },
    //     {
    //         key: 'landing',
    //         label: '홈화면',
    //         isTitle: false,
    //         icon: 'uil-globe',
    //         url: '/index',
    //         target: '_blank',
    //         role: ROLE_WORKER,
    //     },


    //     {
    //         key: 'page-error-500',
    //         label: 'Error - 500',
    //         url: '/error-500',
    //         parentKey: 'pages',
    //         role: ROLE_WORKER,
    //     },

    //     {
    //         key: 'apps-segeum',
    //         label: '전자세금계산서',
    //         isTitle: false,
    //         icon: 'mdi mdi-calculator',
    //         role: ROLE_WORKER,
    //         children: [
    //             {
    //                 key: 'segeum-balgeub',
    //                 label: '전자세금계산서발급',
    //                 url: '/ui/base-ui/alerts',
    //                 parentKey: 'apps-segeum',
    //                 role: ROLE_WORKER,
    //             },
    //             {
    //                 key: 'segeum-yeongseyul',
    //                 label: '영세율세금계산서',
    //                 url: '/ui/base-ui/buttons',
    //                 parentKey: 'apps-segeum',
    //                 role: ROLE_WORKER,
    //             },
    //             {
    //                 key: 'segeum-wisutag',
    //                 label: '위수탁세금계산서',
    //                 url: '/ui/base-ui/cards',
    //                 parentKey: 'apps-segeum',
    //                 role: ROLE_WORKER,
    //             },
    //             {
    //                 key: 'segeum-yeongseyulwisutag',
    //                 label: '영세율위수탁계산서',
    //                 url: '/ui/base-ui/carousel',
    //                 parentKey: 'apps-segeum',
    //                 role: ROLE_WORKER,
    //             },
    //         ]
    //     },

    {
        key: 'base-ui-Jeonjasegeumgyesanseo',
        label: '전자세금',
        isTitle: false,
        icon: 'mdi mdi-account-multiple-outline',
        url: '/ui/base-ui/Jeonjasegeumgyesanseo',
        role: ROLE_WORKER,
    },
    {
        key: 'base-ui-Settingform',
        label: '폼',
        isTitle: false,
        icon: 'drip  dripicons-pin',
        url: '/ui/base-ui/Settingform',
        role: ROLE_WORKER,
    },
    {
        key: 'base-ui-SettingformMiyong',
        label: '임시미용폼',
        isTitle: false,
        icon: 'drip  dripicons-pin',
        url: '/ui/base-ui/SettingformMiyongeob',
        role: ROLE_WORKER,
    },
    {
        key: 'base-ui-NewHRLogin',
        label: 'NEWHR',
        isTitle: false,
        icon: 'drip  dripicons-pin',
        url: '/ui/base-ui/NewHRLogin',
        role: ROLE_WORKER,
    },
    {
        key: 'base-ui-Geubyeomyeongseseo',
        label: '급여명세서', 
        isTitle: false,
        icon: 'dri dripicons-thumbs-up',
        url: '/ui/base-ui/Geubyeomyeongseseo',
        role: ROLE_WORKER,
    },
    


];

// 지금현재 미사용메뉴---
// {
//     key: 'apps-jiwongeum',
//     label: '아무거나생성가능',
//     isTitle: false,
//     icon: ' mdi mdi-tab-search',
//     url: '/ui/base-ui/progress',
//     role: ROLE_WORKER, 
// },
// -------------

//     {
//         key: 'apps-jigwongwanli',
//         label: '직원관리(사)',
//         isTitle: false,
//         icon: 'mdi mdi-account-check',
//         children: [
//             {
//                 key: 'jigwongwanli-ilyongjeongbo',
//                 label: '일용정보',
//                 url: '/ui/base-ui/grid',
//                 parentKey: 'apps-jigwongwanli',
//             },
//             {
//                 key: 'jigwongwanli-goyongjeongbo',
//                 label: '고용정보',
//                 url: '/ui/base-ui/listgroups',
//                 parentKey: 'apps-jigwongwanli',
//             },

//         ]
//     },

//     {
//         key: 'apps-crmreport',
//         label: '4대보험신고(사)',
//         isTitle: false,
//         icon: 'uil-file-shield-alt',
//         children: [

//             {
//                 key: 'crmreport-chwideugsingo',
//                 label: '4대보험취득신고',
//                 url: '/ui/base-ui/modals',
//                 parentKey: 'apps-crmreport',
//                 badge: { variant: 'danger', text: 'New' }
//             },

//             {
//                 key:'crmreport-sangsilsingo',
//                 label: '4대보험상실신고',
//                 url: '/ui/base-ui/paginations',
//                 parentKey: 'apps-crmreport',
//             },
//         ],
//     },

//     {
//         key: 'apps-crmview',
//         label: '4대보험조회(사)',
//         isTitle: false,
//         icon: 'mdi mdi-clipboard-check-outline',
//         children: [
//             {
//                 key: 'crmview-information',
//                 label: '사업장정보조회',
//                 url: '/ui/base-ui/placeholders',
//                 parentKey: 'apps-crmview',
//             },
//             {
//                 key: 'crmview-piboheom',
//                 label: '피보험자 이력',
//                 url: '/ui/tables/advanced',
//                 parentKey: 'apps-crmview',
//             }
//         ]
//     },

//     {
//         key: 'apps-wizard2',
//         label: '이직확인서(사)',
//         isTitle: false,
//         icon: ' uil-file-edit-alt',
//         url: '/ui/forms/validation',
//         badge: { variant: 'danger', text: 'New' }
//     },  



//     // 근로자용
//     { key: 'apps', label:'', isTitle: true, },

//     {
//         key: 'apps-wizard',
//         label: '이직확인서(노)',
//         isTitle: false,
//         icon: ' uil-file-edit-alt',
//         url: '/ui/forms/wizard',
//     },


export { MENU_ITEMS_All };
