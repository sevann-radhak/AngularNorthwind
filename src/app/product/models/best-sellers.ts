export class ProductBestSeller {
    constructor(
        public id: number,
        public name: string,
        public sold: number,
        public y: number) {
    }

    static mapFromResponse(data: any, totalSelling: number) {
        return new ProductBestSeller(
            data.id,
            data.productName,
            data.sold,
            this.getPercentage(totalSelling, data.sold)
        );
    }

    static getPercentage(totalSelling: number, sold: number) {
        return sold / totalSelling * 100;
    }
}
