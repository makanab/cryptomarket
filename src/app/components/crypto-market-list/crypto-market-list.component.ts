import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CryptoMarketService } from '../shared/cryptomarket.service';

export interface Imarketlistdata {
  rank:string;
  currency:string;
  pair:string;
  volume:string

}

@Component({
  selector: 'crypto-market-list',
  templateUrl: './crypto-market-list.component.html',
  styleUrls: ['./crypto-market-list.component.scss']
})
export class CryptoMarketListComponent implements OnInit {


  @ViewChild(MatPaginator) paginator:MatPaginator|undefined;
  @ViewChild(MatPaginator) sort:MatSort|undefined;

  displayedColumns:string[] = ['rank','currency','pair','price'];
  dataSource!: MatTableDataSource<Imarketlistdata>;
  status:any;


  constructor(private cryptoMarketService:CryptoMarketService) {


   }

  ngOnInit(): void {

    this.marketListLatest();

  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }


  marketListLatest(){
    this.cryptoMarketService.marketListLatest().subscribe(
      res=>{
        //const data =  Array.from()
        this.dataSource =  new MatTableDataSource(res.data);
        console.log(this.dataSource);
      },
      err=>{

      }
    )

  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }








}
