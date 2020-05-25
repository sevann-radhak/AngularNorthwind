export class GetOrders {
    dateFrom: string;
    dateTo: string;
    limit: number;
    offset: number;
    status: number;

    constructor(limit: number, offset: number) {
        this.limit = limit;
        this.offset = offset;
    }
}
