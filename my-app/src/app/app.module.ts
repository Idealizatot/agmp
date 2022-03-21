import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { CourseModule } from './modules/course/course.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BodyComponent } from './components/body/body.component';

import { CoursesService } from './services/courses/courses.service';

import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { FilterByWordPipe } from './pipes/filterByWord/filter-by-word.pipe';
import { AuthComponent } from './components/auth/auth/auth.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BreadcrumbsComponent,
    SearchComponent,
    NotFoundComponent,
    BodyComponent,
    OrderByPipe,
    FilterByWordPipe,
    AuthComponent,
    NewCourseComponent,
    EditCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule, 
    CourseModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
