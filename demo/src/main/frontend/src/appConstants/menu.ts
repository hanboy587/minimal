 import { AUTH, ROLE_WORKER, ROLE_USER, ROLE_ADMIN, ROLE_GADMIN } from '../utils/Auth';
 import { useLocation } from 'react-router-dom';
 import { useEffect } from 'react';

export type MenuItemType = {
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
    children?: MenuItemType[];
};
// const                                          
const NEED = 1;
const NOT_NEED = 0;


const MENU_ITEMS: MenuItemType[] = [
    
    // 사라질수있는메뉴 -1
    {key: 'navigation', label: '', isTitle: true, role: ROLE_WORKER},
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

    { key: 'apps', label:'', isTitle: true, },

    // {
    //     key: 'apps-hyeonhwang',
    //     label: '업무현황(사)',
    //     isTitle: false,
    //     icon: 'mdi mdi-clipboard-check-outline',
    //     url: '/ui/extended/rangesliders',
    //     businessInfo: NEED,
    //     role: ROLE_USER,
    // },
    
    // {
    //     key: 'apps-eobjangjeongbo',
    //     label: '사업장 정보(사)',
    //     isTitle: false,
    //     icon: 'mdi mdi-office-building-outline',
    //     url: '/ui/base-ui/saeobjangjeongboiblyeog',
    //     role: ROLE_USER,
    //     businessInfo: NEED,
    // },  

    // {
    //     key: 'apps-jigwongwanli',
    //     label: '직원관리(사)',
    //     isTitle: false,
    //     icon: 'mdi mdi-account-check',
    //     url: '/ui/base-ui/grid',
    //     role: ROLE_USER,
    //     businessInfo: NEED,
    // },

    // {
    //     key: 'apps-crmreport',
    //     label: '4대보험신고(사)',
    //     isTitle: false,
    //     icon: 'uil-file-shield-alt',
    //     role: ROLE_USER,
    //     businessInfo: NEED,
    //     children: [
    //         {
    //             key: 'crmreport-chwideugsingo',
    //             label: '4대보험취득신고',
    //             url: '/ui/base-ui/chwideugsingo',
    //             parentKey: 'apps-crmreport',
    //             badge: { variant: 'danger', text: 'New' }
    //         },
            
    //         {
    //             key:'crmreport-sangsilsingo',
    //             label: '4대보험상실신고',
    //             url: '/ui/base-ui/sangsilsingo',
    //             parentKey: 'apps-crmreport',
    //         },
    //     ],
    // },
    
    // {
    //     key: 'apps-crmview',
    //     label: '4대보험조회(사)',
    //     isTitle: false,
    //     icon: 'mdi mdi-clipboard-check-outline',
    //     role: ROLE_USER,
    //     businessInfo: NEED,
    //     children: [
    //         {
    //             key: 'crmview-information',
    //             label: '사업장정보조회',
    //             url: '/ui/base-ui/placeholders',
    //             parentKey: 'apps-crmview',
    //         },
    //         {
    //             key: 'crmview-piboheom',
    //             label: '피보험자 이력',
    //             url: '/ui/tables/piboheomjailyeog',
    //             parentKey: 'apps-crmview',
    //         }
    //     ]
    // },

    // {
    //     key: 'apps-wizard2',
    //     label: '이직확인서(사)',
    //     isTitle: false,
    //     icon: ' uil-file-edit-alt',
    //     url: '/ui/forms/validation',
    //     role: ROLE_USER,
    // },  

    

    // 근로자용
    { key: 'apps', label:'', isTitle: true, },
    
    // {
    //     key: 'apps-wizard',
    //     label: '이직확인서(노)',
    //     isTitle: false,
    //     icon: ' uil-file-edit-alt',
    //     url: '/ui/forms/wizard',
    //     role: ROLE_WORKER,
    // },

    // {
    //     key: 'apps-hyeonhwang2',
    //     label: '업무현황(노)',
    //     isTitle: false,
    //     icon: 'mdi mdi-clipboard-check-outline',
    //     url: '/ui/extended/ratings',
    //     role: ROLE_WORKER,
    // },
    
    // {
    //     key: 'base-ui-ManagerDash',
    //     label: '메인(사)',
    //     icon: 'uil-home-alt',
    //     url: '/ui/base-ui/ManagerBoard',
    //     role: ROLE_WORKER,
    // },
    {
        key: 'base-ui-popovers2',
        label: '근태관리_총무',
        icon: ' mdi mdi-tab-search',
        url: '/ui/base-ui/SpecialCommute',
        role: ROLE_GADMIN,
    },
    {
        key: 'base-ui-popovers',
        label: '근태관리',
        icon: ' mdi mdi-tab-search',
        url: '/ui/base-ui/tabsTop',
        role: ROLE_WORKER,
    },
    // {
    //     key: 'base-ui-seonglibsingo',
    //     label: '일정관리',
    //     icon: 'mdi mdi-calendar-cursor',
    //     isTitle: false,
    //     url: '/apps/calendar',
    //     role: ROLE_WORKER,
    // },
    // {
    //     key: 'base-ui-sangse',
    //     label: '근무기록조회',
    //     url: '/ui/base-ui/offcanvas',
    //     icon: 'mdi mdi-clock-edit-outline',
    //     role: ROLE_WORKER,
    // },
    {
        key: 'apps-seonglibsingo',
        label: '전자결재',
        isTitle: false,
        icon: ' mdi mdi-account-check',
        url: '/ui/base-ui/accordionsTop',
        role: ROLE_USER,
    },
//     {
//         key: 'base-objangseoljeong',
//         label: '사업장설정',
//         isTitle: false,
//         icon: ' mdi mdi-badge-account-alert-outline',
//         url: '/ui/base-ui/Saeobjangseoljeong',
//         role: ROLE_WORKER,
//     },
    
    // {
    //     key: 'base-ui-weeklyplan',
    //     label: '주간계획표',
    //     url: '/ui/base-ui/notifications',
    //     icon: ' uil uil-edit-alt',
    //     role: ROLE_WORKER,
    // },
    {
        key: 'base-ui-schedulecalendar',
        label: '근태결재',
        icon: ' uil uil-edit-alt',
        url: '/apps/ScheduleCalendarTop',
        role: ROLE_WORKER,
    },
    // {
    //     key: 'base-ui-schedulecalendarAll',
    //     label: '스케줄선택조회',
    //     icon: ' uil uil-edit-alt',
    //     url: '/ui/base-ui/schedulecalendarAll',
    //     role: ROLE_WORKER,
    // },
  
    // {
    //     key: 'Workschedule',
    //     label: '근무일정생성', 
    //     isTitle: false,
    //     icon: 'mdi mdi-calendar-clock-outline',
    //     url: '/ui/base-ui/Workschedule',
    //     role: ROLE_WORKER,
    // },
    // {
    //     key: 'base-ui-Paylist',
    //     label: '급여명세서list', 
    //     isTitle: false,
    //     icon: 'dri dripicons-thumbs-up',
    //     url: '/ui/base-ui/Paylist',
    //     role: ROLE_WORKER,
    // },
    // {
    //     key: 'base-ui-Geubyeomyeongseseo',
    //     label: '급여명세서', 
    //     isTitle: false,
    //     icon: 'dri dripicons-thumbs-up',
    //     url: '/ui/base-ui/Geubyeomyeongseseo',
    //     role: ROLE_WORKER,
    // },
    // {
    //     key: 'base-ui-Gwonhangwanli',
    //     label: '권한관리(직원권한)', 
    //     isTitle: false,
    //     icon: 'mdi mdi-shield-account-outline',
    //     url: '/ui/base-ui/Gwonhangwanli',
    //     role: ROLE_WORKER,
    // },
    // {
    //     key: 'base-ui-Geunlotimecheck',
    //     label: '근로시간확인', 
    //     isTitle: false,
    //     icon: 'mdi mdi-clock-check-outline',
    //     url: '/ui/base-ui/Geunlotimecheck',
    //     role: ROLE_WORKER,
    // },
    // {
    //     key: 'base-ui-Jojigdo',
    //     label: '조직도', 
    //     isTitle: false,
    //     icon: 'mdi mdi-account-multiple-outline',
    //     url: '/ui/base-ui/Jojigdo',
    //     role: ROLE_WORKER,
    // },
    // {
    //     key: 'base-ui-Fax',
    //     label: '팩스', 
    //     isTitle: false,
    //     icon: 'mdi mdi-fax',
    //     url: '/ui/base-ui/Fax',
    //     role: ROLE_WORKER,
    // },
    // {
    //     key: 'base-ui-ComponentEx',
    //     label: '컴포넌트test', 
    //     isTitle: false,
    //     icon: 'mdi mdi-fax',
    //     url: '/ui/base-ui/ComponentEx',
    //     role: ROLE_WORKER,
    // },
    // {
    //     key: 'apps-email',
    //     label: '이메일',
    //     isTitle: false,
    //     icon: 'uil-envelope',
    //     role: ROLE_WORKER,
    //     children: [
    //         {
    //             key: 'email-inbox',
    //             label: 'Inbox',
    //             url: '/apps/email/inbox',
    //             parentKey: 'apps-email',
    //         },
    //         {
    //             key: 'email-read-email',
    //             label: 'Read Email',
    //             url: '/apps/email/details',
    //             parentKey: 'apps-email',
    //         },
    //     ],
    // },
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
    // {
    //     key: 'landing',
    //     label: '홈화면',
    //     isTitle: false,
    //     icon: 'uil-globe',
    //     url: '/index',
    //     target: '_blank',
    //     role: ROLE_WORKER,
    // },

    // {
    //     key: 'page-error-500',
    //     label: 'Error - 500',
    //     url: '/error-500',
    //     parentKey: 'pages',
    //     role: ROLE_WORKER,
    // },
    // {
    //     key: 'apps-segeum',
    //     label: '전자세금계산서',
    //     isTitle: false,
    //     icon: 'mdi mdi-calculator',
    //     role: ROLE_WORKER,
    //     children: [
    //         {
    //             key: 'segeum-balgeub',
    //             label: '전자세금계산서발급',
    //             url: '/ui/base-ui/alerts',
    //             parentKey: 'apps-segeum',
    //             role: ROLE_WORKER,
    //         },
    //         {
    //             key: 'segeum-yeongseyul',
    //             label: '영세율세금계산서',
    //             url: '/ui/base-ui/buttons',
    //             parentKey: 'apps-segeum',
    //             role: ROLE_WORKER,
    //         },
    //         {
    //             key: 'segeum-wisutag',
    //             label: '위수탁세금계산서',
    //             url: '/ui/base-ui/cards',
    //             parentKey: 'apps-segeum',
    //             role: ROLE_WORKER,
    //         },
    //         {
    //             key: 'segeum-yeongseyulwisutag',
    //             label: '영세율위수탁계산서',
    //             url: '/ui/base-ui/carousel',
    //             parentKey: 'apps-segeum',
    //             role: ROLE_WORKER,
    //         },
    //     ]
    // },
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
// function MenuSelect() {

//     const location = useLocation();

//     if(location != null){

    
//     const MENU_ITEMS: MenuItemType[] = [
    
//         // 사라질수있는메뉴 -1
//         {key: 'navigation', label: '', isTitle: true, role: ROLE_WORKER},
//         // {
//         //     key: 'navigation-main2',
//         //     label: 'Main(사)',
//         //     isTitle: false,
//         //     icon: 'uil-home-alt',
//         //     url: '/dashboard/analytics',
//         //     role: ROLE_USER,
//         // },
//         // {
//         //     key: 'navigation-main3',
//         //     label: 'Main(노)',
//         //     isTitle: false,
//         //     icon: 'uil-home-alt',
//         //     url: '/dashboard/e-wallet',
//         //     role: ROLE_USER,
//         // },
    
    
//         { key: 'apps', label:'', isTitle: true, },
    
//         {
//             key: 'apps-hyeonhwang',
//             label: '업무현황(사)',
//             isTitle: false,
//             icon: 'mdi mdi-clipboard-check-outline',
//             url: '/ui/extended/rangesliders',
//             businessInfo: NEED,
//             role: ROLE_USER,
//         },
        
//         {
//             key: 'apps-eobjangjeongbo',
//             label: '사업장 정보(사)',
//             isTitle: false,
//             icon: 'mdi mdi-office-building-outline',
//             url: '/ui/base-ui/saeobjangjeongboiblyeog',
//             role: ROLE_USER,
//             businessInfo: NEED,
//         },  
    
//         {
//             key: 'apps-jigwongwanli',
//             label: '직원관리(사)',
//             isTitle: false,
//             icon: 'mdi mdi-account-check',
//             url: '/ui/base-ui/grid',
//             role: ROLE_USER,
//             businessInfo: NEED,
//         },
    
//         {
//             key: 'apps-crmreport',
//             label: '4대보험신고(사)',
//             isTitle: false,
//             icon: 'uil-file-shield-alt',
//             role: ROLE_USER,
//             businessInfo: NEED,
//             children: [
//                 {
//                     key: 'crmreport-chwideugsingo',
//                     label: '4대보험취득신고',
//                     url: '/ui/base-ui/chwideugsingo',
//                     parentKey: 'apps-crmreport',
//                     badge: { variant: 'danger', text: 'New' }
//                 },
                
//                 {
//                     key:'crmreport-sangsilsingo',
//                     label: '4대보험상실신고',
//                     url: '/ui/base-ui/sangsilsingo',
//                     parentKey: 'apps-crmreport',
//                 },
//             ],
//         },
        
//         {
//             key: 'apps-crmview',
//             label: '4대보험조회(사)',
//             isTitle: false,
//             icon: 'mdi mdi-clipboard-check-outline',
//             role: ROLE_USER,
//             businessInfo: NEED,
//             children: [
//                 {
//                     key: 'crmview-information',
//                     label: '사업장정보조회',
//                     url: '/ui/base-ui/placeholders',
//                     parentKey: 'apps-crmview',
//                 },
//                 {
//                     key: 'crmview-piboheom',
//                     label: '피보험자 이력',
//                     url: '/ui/tables/piboheomjailyeog',
//                     parentKey: 'apps-crmview',
//                 }
//             ]
//         },
    
//         {
//             key: 'apps-wizard2',
//             label: '이직확인서(사)',
//             isTitle: false,
//             icon: ' uil-file-edit-alt',
//             url: '/ui/forms/validation',
//             role: ROLE_USER,
//             badge: { variant: 'danger', text: 'New' }
//         },  
    
        
    
//         // 근로자용
//         { key: 'apps', label:'', isTitle: true, },
        
//         {
//             key: 'apps-wizard',
//             label: '이직확인서(노)',
//             isTitle: false,
//             icon: ' uil-file-edit-alt',
//             url: '/ui/forms/wizard',
//             role: ROLE_WORKER,
//         },
      
//         {
//             key: 'Workschedule',
//             label: '근무일정생성', 
//             isTitle: false,
//             icon: 'mdi mdi-calendar-clock-outline',
//             url: '/ui/base-ui/Workschedule',
//             role: ROLE_WORKER,
//         },
//         {
//             key: 'base-ui-Paylist',
//             label: '급여명세서list', 
//             isTitle: false,
//             icon: 'dri dripicons-thumbs-up',
//             url: '/ui/base-ui/Paylist',
//             role: ROLE_WORKER,
//         },
//         {
//             key: 'base-ui-Geubyeomyeongseseo',
//             label: '급여명세서', 
//             isTitle: false,
//             icon: 'dri dripicons-thumbs-up',
//             url: '/ui/base-ui/Geubyeomyeongseseo',
//             role: ROLE_WORKER,
//         },
//         {
//             key: 'base-ui-Gwonhangwanli',
//             label: '권한관리(직원권한)', 
//             isTitle: false,
//             icon: 'mdi mdi-shield-account-outline',
//             url: '/ui/base-ui/Gwonhangwanli',
//             role: ROLE_WORKER,
//         },
//         {
//             key: 'base-ui-Geunlotimecheck',
//             label: '근로시간확인', 
//             isTitle: false,
//             icon: 'mdi mdi-clock-check-outline',
//             url: '/ui/base-ui/Geunlotimecheck',
//             role: ROLE_WORKER,
//         },
//         {
//             key: 'base-ui-Jojigdo',
//             label: '조직도', 
//             isTitle: false,
//             icon: 'mdi mdi-account-multiple-outline',
//             url: '/ui/base-ui/Jojigdo',
//             role: ROLE_WORKER,
//         },
//         {
//             key: 'base-ui-Fax',
//             label: '팩스', 
//             isTitle: false,
//             icon: 'mdi mdi-fax',
//             url: '/ui/base-ui/Fax',
//             role: ROLE_WORKER,
//         },
//     ];
// }
    
//     useEffect(() => {
//         console.log(location);
//     }, [ location ])
// }


export { MENU_ITEMS };
