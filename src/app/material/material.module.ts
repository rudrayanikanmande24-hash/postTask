import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatDialogModule} from '@angular/material/dialog'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider'

let matArr =[
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule,
  MatIconModule,
  MatDividerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matArr
  ],
  exports:[
    ...matArr
  ]
})
export class MaterialModule { }
