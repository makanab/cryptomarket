import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CryptoMarketService } from "../shared/cryptomarket.service";




@Injectable({
  providedIn:'root'
})

export class CryproMarketResolve implements Resolve<any>{

  constructor(private cryproMarketService:CryptoMarketService){}

  resolve(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): Observable<any>|Promise<any>|any{

    return this.cryproMarketService.marketListLatest();

  }

}
