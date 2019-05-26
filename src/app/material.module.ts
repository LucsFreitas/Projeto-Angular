import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatGridListModule, MatButtonModule, MatToolbarModule,
  MatInputModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatCommonModule, MatSnackBarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCommonModule,
    MatSnackBarModule,
  ],
  exports: [
    MatTableModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCommonModule,
    MatSnackBarModule,
  ]
})
export class MaterialModule { }
