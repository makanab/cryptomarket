import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoMarketListComponent } from './crypto-market-list.component';

describe('CryptoMarketListComponent', () => {
  let component: CryptoMarketListComponent;
  let fixture: ComponentFixture<CryptoMarketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoMarketListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoMarketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
