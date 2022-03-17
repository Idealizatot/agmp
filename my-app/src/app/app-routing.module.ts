import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth/auth.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { MainComponent } from './components/main/main.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'courses', component: MainComponent},
  {path: 'courses/new', component: NewCourseComponent},
  {path: 'courses/:id', component: EditCourseComponent},
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
