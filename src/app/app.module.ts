import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AntiRagging } from './AntiRagging.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { DepermentsComponent } from './deperments/deperments.component';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    AntiRagging,
    CourseComponent,
    DepermentsComponent,
    NameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
