import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskComponent} from "./task.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";




@NgModule({
  declarations: [
    TaskComponent
  ],
  exports: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class TaskModule { }
