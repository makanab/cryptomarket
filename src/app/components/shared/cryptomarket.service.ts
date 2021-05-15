import { Injectable } from '@angular/core';
import  { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';


export interface ImarketDataApi {
 status:{},
 data:Imarketlistdata[]

}

export interface Imarketlistdata {
  name:string;
  symbol:string;
  price:number;

}


@Injectable({
  providedIn:'root'
})

export class CryptoMarketService {

  constructor(private http:HttpClient){}


   marketListLatest():Observable<ImarketDataApi>{
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get<ImarketDataApi>(environment.baseUrl+'market/list',{headers:reqHeader});

  }


}
