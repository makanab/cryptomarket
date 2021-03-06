import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { CryptoMarketService, ImarketDataApi, Imarketlistdata } from '../shared/cryptomarket.service';


@Component({
  selector: 'crypto-market-list',
  templateUrl: './crypto-market-list.component.html',
  styleUrls: ['./crypto-market-list.component.scss']
})
export class CryptoMarketListComponent implements AfterViewInit {

  displayedColumns:string[] = ['currency','symbol','price'];
  dataSource:MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatPaginator) sort!:MatSort;


  constructor(
    private cryptoMarketService:CryptoMarketService,
    private route:ActivatedRoute
    ) {

      this.dataSource = new MatTableDataSource(this.route.snapshot.data.marketList.data);
    }

    ngOnInit(){}


    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      }


      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }







  }
