import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellersProductContainerComponent } from './best-sellers-product-container.component';

describe('BestSellersProductContainerComponent', () => {
  let component: BestSellersProductContainerComponent;
  let fixture: ComponentFixture<BestSellersProductContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestSellersProductContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellersProductContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
