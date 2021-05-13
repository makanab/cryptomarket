import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoMarketListComponent } from './components/crypto-market-list/crypto-market-list.component';
import { CryproMarketResolve } from './components/crypto-market-list/cryptomarket.resolve';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'',
        component:CryptoMarketListComponent,
        resolve:{marketList:CryproMarketResolve}
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
