import { Injectable } from '@angular/core';
import  { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface ImarketDataApi {
 status:{},
 data:Imarketlistdata[]

}

export interface Imarketlistdata {
  rank:string;
  currency:string;
  pair:string;
  volume:string
}


@Injectable({
  providedIn:'root'
})

export class CryptoMarketService {

  constructor(private http:HttpClient){}


  marketListLatest():Observable<ImarketDataApi>{
    return this.http.get<ImarketDataApi>(environment.baseUrl+'market/list');

  }


}
