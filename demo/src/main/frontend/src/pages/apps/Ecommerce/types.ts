export type Product = {
    id: number;
    n: string;
    name: string;
    category: string;
    image: string;
    added_date: string;
    rating: number;
    price: string;
    quantity: number;
    status: boolean;
};

export type Order = {
    id: number;
    order_id: string;
    order_date: string;
    order_time: string;
    payment_status: string;
    total: string;
    payment_method: string;
    order_status: string;
};
export type Order2 = {
    id: number;
    order_id: string;
    order_date: string;
    order_time: string;
    payment_status: string;
    total: string;
    payment_method: string;
    order_status: string;
};

// 원천징수영수증 테이블
export type Customer = {
    id: number;
    gubun: string;
    name: string;
    phone: string;
    gwisognyeondo: number;
   
};
// 원천징수영수부 테이블
export type Customer2 = {
    id: number;
    gubun: string;
    name: string;
    phone: string;
    gwisogyeonwol: string;
   
};

export type Seller = {
    id: number;
    name: string;
    store: string;
    products: number;
    created_on: string;
    balance: string;
    image: string;
};

export type OrderItem = {
    id: number;
    name: string;
    quantity: number;
    price: string;
    total: string;
};

// 연말정산 결과 미리보기 테이블
export type OrderItem2 = {
    id: number;
    name: string;
    quantity: string;
    price: string;
    total: string;
};

export type ShippingAddress = {
    provider: string;
    address_1: string;
    address_2: string;
    phone: string;
    mobile: string;
};

export type Billing = {
    type: string;
    provider: string;
    valid: string;
};

export type DeliveryInfoItem = {
    provider: string;
    order_id: string;
    payment_mode: string;
};

export type OrderDetailsItem = {
    id: string;
    order_status?: string;
    items: OrderItem[];
    gross_total: string;
    shipping_charge: string;
    tax: string;
    net_total: string;
    shipping: ShippingAddress;
    billing: Billing;
    delivery: DeliveryInfoItem;
};

// 연말정산 결과 미리보기 테이블
export type OrderDetailsItem2 = {
    id: string;
    order_status?: string;
    items: OrderItem2[];
   
};

export type CartItem = {
    id: number;
    image: string;
    name: string;
    size: string;
    color: string;
    price: number;
    qty: number;
    total: number;
};

export type CartSummaryItem = {
    gross_total: number;
    discount: number;
    shipping_charge: number;
    tax: number;
    net_total: number;
};
