import { OrderListDetailItem } from './order-list-detail-item';

export class OrderListDetail {
    data: OrderListDetailItem[];
    generalTaxesSale: number;
    total: number;
    totalValueSale: number;

    static mapFromResponse(data: any): OrderListDetail {
        if (!data) {
            return new OrderListDetail();
        }

        const orderDetail = new OrderListDetail();
        const products: OrderListDetailItem[] = [];

        data.map(p => {
            const product = new OrderListDetailItem();
            product.id = p.id;
            product.productId = p.productId;
            product.productName = p.productName;
            product.quantity = p.quantity;
            product.unitPrice = p.unitPrice;
            return products.push(product);
        });

        orderDetail.data = products;
        orderDetail.totalValueSale =
            Number(products.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0).toFixed(2));
        orderDetail.generalTaxesSale = Number((0.18 * orderDetail.totalValueSale).toFixed(2));

        return orderDetail;
    }
}
