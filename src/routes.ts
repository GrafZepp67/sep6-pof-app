import { Routes } from '@angular/router';
import { SectionStudentsComponent } from './app/sections/section-students/section-students.component';
import { SectionTeachersComponent } from './app/sections/section-teachers/section-teachers.component';

export const appRoutes: Routes = [
    { path: 'students', component: SectionStudentsComponent},
    { path: 'teachers', component: SectionTeachersComponent},

    { path: '', redirectTo: '/students', pathMatch: 'full'}
];