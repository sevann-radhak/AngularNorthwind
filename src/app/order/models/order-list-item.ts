import { OrderListDetail } from './order-list-detail';

export class OrderListItem {
    id: number;
    address: string;
    city: string;
    company: string;
    customer: string;
    customerId: number;
    data: OrderListDetail;
    orderDate: string;
    phone: string;
    statusId: string;
    statusName: string;

    static mapFromResponse(data: any): OrderListItem {
        const orderListItem: OrderListItem = new OrderListItem();
        orderListItem.id = data.id;
        orderListItem.address = data.address;
        orderListItem.city = data.city;
        orderListItem.company = data.company;
        orderListItem.customer = data.customer;
        orderListItem.customerId = data.customerId;
        orderListItem.data = OrderListDetail.mapFromResponse(data.data);
        orderListItem.orderDate = data.orderDate;
        orderListItem.phone = data.phone;
        orderListItem.statusId = data.statusId;
        orderListItem.statusName = data.statusName;

        return orderListItem;
    }
}
