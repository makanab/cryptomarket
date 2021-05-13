import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CryptoMarketService } from '../shared/cryptomarket.service';

import { CryptoMarketListComponent } from './crypto-market-list.component';

describe('CryptoMarketListComponent', () => {
  let component: CryptoMarketListComponent;
  let fixture: ComponentFixture<CryptoMarketListComponent>;
  const route = ({ data: of({ }) } as any) as ActivatedRoute;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoMarketListComponent ],
      imports:[
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[
        CryptoMarketService,
        {provide:ActivatedRoute,useValue:route}
      ]
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
