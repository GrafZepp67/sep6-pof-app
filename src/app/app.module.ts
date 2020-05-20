import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionStudentsComponent } from './sections/section-students/section-students.component';
import { SectionTeachersComponent } from './sections/section-teachers/section-teachers.component';
import { appRoutes } from 'src/routes';
import { StudentDataService } from './services/student-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionStudentsComponent,
    SectionTeachersComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StudentDataService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
