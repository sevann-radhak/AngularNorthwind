import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Constants } from '../../../constants/constans';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, OnChanges {

  @Input() items: any[] = [];
  @Input() columns: any[] = [];
  @Input() minTableHeight = 50;

  NO_ITEMS: Constants;
  tableColumns: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.NO_ITEMS = Constants.NO_ITEMS;
    this.tableColumns = this.columns;
  }

}
