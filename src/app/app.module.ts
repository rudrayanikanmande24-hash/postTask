import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostGetConfirmComponent } from './post-get-confirm/post-get-confirm.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostDashboardComponent,
    PostFormComponent,
    PostCardComponent,
    PostGetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
