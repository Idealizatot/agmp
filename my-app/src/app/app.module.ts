import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BodyComponent } from './components/body/body.component';

import { CoursesService } from './services/courses/courses.service';

import { CourseModule } from './modules/course/course.module';
import { OrderByPipe } from './pipes/orderBy/order-by.pipe';
import { FilterByWordPipe } from './pipes/filterByWord/filter-by-word.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    CourseModule,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
