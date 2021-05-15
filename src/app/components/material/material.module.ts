import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from  '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule } from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



const MaterialModules  = [
  MatToolbarModule,MatTableModule,
  MatInputModule,MatPaginatorModule,MatSortModule,
  MatProgressSpinnerModule

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports:[
    MaterialModules
  ]
})
export class MaterialModule { }
