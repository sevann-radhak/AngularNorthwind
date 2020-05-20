import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductBestSeller } from '../../models/best-sellers';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-best-seller-product-chart',
  templateUrl: './best-seller-product-chart.component.html',
  styleUrls: ['./best-seller-product-chart.component.scss']
})
export class BestSellerProductChartComponent implements OnInit, OnChanges {

  @Input()
  products: ProductBestSeller[];
  Highcharts: any;
  chartOptions: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.products && changes.products.currentValue) {
      this.buildChart();
    }
  }

  ngOnInit(): void {
  }

  buildChart(): void {
    this.Highcharts = Highcharts;
    this.chartOptions = {
      series: [
        {
          colorByPoint: true,
          data: this.products,
          name: 'Products',
          type: 'column'
        }
      ],
      title: {
        text: 'Top 10 best sellers Products'
      },
      tooltip: {
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: '%'
        }
      }
    };
  }
}
