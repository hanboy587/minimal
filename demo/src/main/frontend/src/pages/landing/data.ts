import { FAQItem, PricingPlan } from 'components';
import { Feature, LayoutDemo, Service } from './types';
import layout1 from 'assets/images/layouts/layout-1.png';
import layout2 from 'assets/images/layouts/layout-2.png';
import layout3 from 'assets/images/layouts/layout-3.png';
import layout4 from 'assets/images/layouts/layout-4.png';
import layout5 from 'assets/images/layouts/layout-5.png';
import layout6 from 'assets/images/layouts/layout-6.png';
import image1 from 'assets/images/features-1.svg';
import image2 from 'assets/images/features-2.svg';

const services: Service[] = [
    {
        icon: 'uil uil-desktop',
        title: '사업장 성립신고',
        description: '4대보험을 적용받기 위해 공단에 사업장을 신고하는 업무',
    },
    {
        icon: 'uil uil-vector-square',
        title: '근로자 취득신고',
        description: '4대보험에 가입(취득)신고하기 위해 작성하는 업무',
    },
    {
        icon: 'uil uil-presentation',
        title: '근로자 상실신고',
        description:'4대보험에 자격상실 신고하기 위해 작성하는 업무',
    },
    {
        icon: 'uil uil-apps',
        title: '고용/산재 보수총액신고',
        description: '고용보험 사업장 가입자의 소득총액을 신고하는 업무',
    },
    {
        icon: 'uil uil-shopping-cart-alt',
        title: '피부양자 신청',
        description: '건강보험에 가입된 가입자의 가족에 대해 취득 신고하는 업무',
    },
    {
        icon: 'uil uil-grids',
        title: '건강 보수총액신고',
        description:'건강보험 사업장 가입자의 소득총액을 신고하는 업무',
    },
];

const layouts: LayoutDemo[] = [
    {
        image: layout1,
        layout: 'Vertical Layout',
    },
    {
        image: layout2,
        layout: 'Horizontal Layout',
    },
    {
        image: layout3,
        layout: 'Detached Layout',
    },
    {
        image: layout5,
        layout: 'Light Sidenav Layout',
    },
    {
        image: layout6,
        layout: 'Boxed Layout',
    },
    {
        image: layout4,
        layout: 'Semi Dark Layout',
    },
];

const features: Feature[] = [
    {
        id: 1,
        title: '쉽고 간편한 4대보험 관리 이제 나이스노무와 함께하세요',
        desc: '',
        image: image1,
        features: [
            '어렵고 복잡한 4대보험신고를 체계적으로 관리하여 업무의 효율을 높여드립니다',
            '1:1 전문 담당자 지원하여 신고부터 관리까지 철저한 사후관리를 도와드립니다',
            '30인 미만, 전전년도 과세소득 3억원 미만 사업장은 무료위탁으로 부담을 덜어드립니다',
        ],
    },
    {
        id: 2,
        title: '나이스노무 에서만 누릴수있는 혜택',
        desc: '',
        image: image2,
        features: [
            '카카오톡 알림을 통해 홈페이지 접속 없이,신고별 진행상태와 신고기한을 알려드립니다.',
            '부가서비스 제공! 4대보험, 두루누리등 계산기를 이용하여쉽게 4대보험을 관리할 수 있습니다.',
           
        ],
    },
];

const plans: PricingPlan[] = [
    {
        id: 1,
        name: 'Standard License',
        icon: 'dripicons-user',
        price: '$49',
        duration: 'License',
        features: ['10 GB Storage', '500 GB Bandwidth', 'No Domain', '1 User', 'Email Support', '24x7 Support'],
        isRecommended: false,
    },
    {
        id: 2,
        name: 'Multiple License',
        icon: 'dripicons-briefcase',
        price: '$99',
        duration: 'License',
        features: ['50 GB Storage', '900 GB Bandwidth', '2 Domain', '10 User', 'Email Support', '24x7 Support'],
        isRecommended: true,
    },
    {
        id: 3,
        name: 'Extended License',
        icon: 'dripicons-store',
        price: '$599',
        duration: 'License',
        features: [
            '100 GB Storage',
            'Unlimited Bandwidth',
            '10 Domain',
            'Unlimited Users',
            'Email Support',
            '24x7 Support',
        ],
        isRecommended: false,
    },
];

const rawFaqs: FAQItem[] = [
    {
        id: 1,
        question: '외국인 근로자의 경우 건강보험 적용되나요?',
        answer: '외국인, 재외국민이 건강보험 적용 사업장에 근무 또는 공무원, 교직원으로 임용, 채용된 경우 2006.1.1.부터 의무가입 대상이며, 이 경우 외국인등록(국내거소 신고 등록)을 필하여야 합니다.',
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
    },
    {
        id: 2,
        question: '4대보험 취득신고시 보수를 어떻게 입력해야 하나요?',
        answer: "매월 지급되는 급여액에 비과세가 포함되어 있다면 제외된 금액을 신고합니다.즉, 월평균 보수/소득월액/보수월액=근로소득-비과세소득으로 입력합니다.＊바과세: 식대 10만원, 자가운전보조금 20만원, 연구보조비(활동비) 20만원 등.",
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
    },
    {
        id: 3,
        question: '어디까지 업무를 대행해주나요?',
        answer: '보험관계의 성립·변경·소멸 신고에 관한 업무 , 보수총액 및 보험료 신고에 관한 업무 , 근로자 고용정보 및 피보험자격 신고에 관한 업무 ,그밖에 사업주가 근로복지공단 ∙ 건강보험공단이나 지방고용노동관에 신고 또는 보고해야 할 보험 사무',
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
    },
    {
        id: 4,
        question: '근로자의 보수가 변동이 있을 때 신고해야 하나요?',
        answer: '보수 인상 또는 인하되었을 경우 사업주는 월평균보수 변경신고를 할 수 있으며, 월평균보수변경신고서에 기재한 보수 변경 월부터 변경된 월평균보수에 따라 매월 보험료가 부과됩니다. 다만, 월평균보수가 변경되었음에도 신고하지 않은 경우, 소득변동으로 인한 보험료 차액분은 다음 연도 3월 15일 보수총액신고 또는 퇴직시점에 퇴직정산으로 정산 가능합니다.',
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
    },
];

export { services, layouts, features, plans, rawFaqs };
