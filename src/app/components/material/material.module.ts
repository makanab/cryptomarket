import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from  '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';



const MaterialModules  = [
  MatToolbarModule,MatTableModule,MatInputModule,MatPaginatorModule

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
