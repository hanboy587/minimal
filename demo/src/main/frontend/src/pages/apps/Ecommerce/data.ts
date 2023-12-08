import { Customer, Customer2, Order, Order2, Product, Seller } from './types';

// 4대보험 보수총액 조회 data
const products: Product[] = [
    {
        id: 1,
        n: 'n년',
        name: '25,000,000원',
        category: '-',
        image: '',
        added_date: '-',
        rating: 0,
        price: '-',
        quantity: 157,
        status: true,
    },
    {
        id: 2,
        n: 'n-1년',
        name: '25,000,000원',
        category: '-',
        image: 'https://robohash.org/doloribusatconsequatur.png?size=100x100&set=set1',
        added_date: '-',
        rating: 2,
        price: '-',
        quantity: 246,
        status: true,
    },
    {
        id: 3,
        n: 'n-3년',
        name: '25,000,000원',
        category: '-',
        image: 'https://robohash.org/animidebitisfacilis.png?size=100x100&set=set1',
        added_date: '-',
        rating: 2,
        price: '-',
        quantity: 376,
        status: true,
    },
    // {
    //     id: 4,
    //     n: 'n년',
    //     name: '600SL',
    //     category: 'Mercedes-Benz',
    //     image: 'https://robohash.org/temporibusnecessitatibusvoluptatum.png?size=100x100&set=set1',
    //     added_date: '6/11/2019',
    //     rating: 3,
    //     price: 76.42,
    //     quantity: 56,
    //     status: false,
    // },
];

// 가입정보조회 취득 data
const orders: Order[] = [
    {
        id: 1,
        order_id: '취득일',
        order_date: '2021.04.01',
        order_time: '',
        payment_status: '-',
        total: '-',
        payment_method: '-',
        order_status: '-',
    },
    {
        id: 2,
        order_id: '취득사유',
        order_date: '-',
        order_time: '',
        payment_status: '-',
        total: '만18세이상',
        payment_method: '최초취득',
        order_status: '-',
    },
    {
        id: 3,
        order_id: '직종',
        order_date: '미용서비스원',
        order_time: '',
        payment_status: '미용서비스원',
        total: '-',
        payment_method: '-',
        order_status: '',
    },
    {
        id: 4,
        order_id: '주 소정근로시간',
        order_date: '40',
        order_time: '',
        payment_status: '40',
        total: '-',
        payment_method: '-',
        order_status: '',
    },
    {
        id: 5,
        order_id: '월 소득액',
        order_date: '20,000,000원',
        order_time: '',
        payment_status: '-',
        total: '-',
        payment_method: '-',
        order_status: '',
    },

    // {
    //     id: 6,
    //     order_id: '2164',
    //     order_date: '22-Feb-2019',
    //     order_time: '3:59 AM',
    //     payment_status: 'Paid',
    //     total: '$9813.57',
    //     payment_method: 'Paypal',
    //     order_status: 'Delivered',
    // },
];

// 가입정보조회 상실
const orders2: Order2[] = [
    {
        id: 1,
        order_id: '상실일',
        order_date: '2022.04.01',
        order_time: '',
        payment_status: '-',
        total: '-',
        payment_method: '-',
        order_status: '',
    },
    {
        id: 2,
        order_id: '상실사유',
        order_date: '자진퇴사',
        order_time: '',
        payment_status: '-',
        total: '-',
        payment_method: '-',
        order_status: '',
    },
    {
        id: 3,
        order_id: '전년도 보수총액',
        order_date: '20.000.000원',
        order_time: '',
        payment_status: '-',
        total: '-',
        payment_method: '-',
        order_status: '',
    },
    {
        id: 4,
        order_id: '당해연도 보수총액',
        order_date: '6.000.000원',
        order_time: '',
        payment_status: '-',
        total: '-',
        payment_method: '-',
        order_status: '',
    },
    // {
    //     id: 5,
    //     order_id: '109',
    //     order_date: '05-Apr-2019',
    //     order_time: '8:14 AM',
    //     payment_status: 'Paid',
    //     total: '$417.32',
    //     payment_method: 'Mastercard',
    //     order_status: 'Cancelled',
    // },
   
    
];

// 원천징수 영수증
const customers: Customer[] = [
     {
        id: 1,
        gubun: '근로소득',
        name: '나이스',
        phone: '(010) 12345678',
        gwisognyeondo: 2021,
    },
    {
        id: 2,
        gubun: '근로소득',
        name: '나이스',
        phone: '(010) 12345678',
        gwisognyeondo: 2020,
    },
    {
        id: 3,
        gubun: '근로소득',
        name: '나이스',
        phone: '(010) 12345678',
        gwisognyeondo: 2019,
    },
    {
        id: 4,
        gubun: '근로소득',
        name: '나이스',
        phone: '(010) 12345678',
        gwisognyeondo: 2018,
    },
    {
        id: 5,
        gubun: '근로소득',
        name: '나이스',
        phone: '(010) 12345678',
        gwisognyeondo: 2017,
    },
   
];

// 원천징수 영수부
const customers2: Customer2[] = [
    {
       id: 1,
       gubun: '근로소득',
       name: '나이스',
       phone: '(010) 12345678',
       gwisogyeonwol: '2022년03월',
   },
   {
       id: 2,
       gubun: '근로소득',
       name: '나이스',
       phone: '(010) 12345678',
       gwisogyeonwol: '2022년02월',
   },
   {
       id: 3,
       gubun: '근로소득',
       name: '나이스',
       phone: '(010) 12345678',
       gwisogyeonwol: '2022년01월',
   },
   {
       id: 4,
       gubun: '근로소득',
       name: '나이스',
       phone: '(010) 12345678',
       gwisogyeonwol: '2021년12월',
   },
   {
       id: 5,
       gubun: '근로소득',
       name: '나이스',
       phone: '(010) 12345678',
       gwisogyeonwol: '2021년11월',
   },
  
];
 
const sellers: Seller[] = [
    
];

export { products, orders, orders2, customers, customers2, sellers };
