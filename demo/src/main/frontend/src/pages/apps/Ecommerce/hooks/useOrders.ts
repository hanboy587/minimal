import { useState } from 'react';
import { Order, Order2 } from '../types';
import { orders, orders2 } from '../data';

// 가입정보조회취득상실 데이터 orderList 설정하는곳

export default function useOrders() {
    const [ orderList, setOrderList] = useState<Order[]>(orders);
    const [ orderList2, setOrderList2] = useState<Order2[]>(orders2);

    // change order status group
    const changeOrderStatusGroup = (OrderStatusGroup: string) => {
        let updatedData = orders;
        //  filter
        updatedData =
            OrderStatusGroup === 'All'
                ? orders
                : [...orders].filter((o) => o.payment_status?.includes(OrderStatusGroup));
        setOrderList(updatedData);
    };
    const changeOrderStatusGroup2 = (OrderStatusGroup: string) => {
        let updatedData = orders;
        //  filter
        updatedData =
            OrderStatusGroup === 'All'
                ? orders
                : [...orders].filter((o) => o.payment_status?.includes(OrderStatusGroup));
        setOrderList2(updatedData);
    };

    return { orderList, orderList2, changeOrderStatusGroup, changeOrderStatusGroup2 };
}
