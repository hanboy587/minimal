import { CartItem } from '../types';

export type Cart = {
    items: Array<CartItem>;
    sub_total: number;
    shipping: number;
    total: number;
};


// table 로인한 추가
export type TableRecord = {
    id: number;
    Name: string;
    jumin: string;
};



// 비과세및감면소득명세
export type TableRecord1 = {
    id: number;
    gubun: string;
    nabsejohab: string;
};


// 세액명세 table
export type TableRecord2 = {
    id: number;
    gubun: string;
    sodeugse: string;
    jibangsodeugse: string;
    nongeochon: string;
};
