import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './widgets/sidebar/sidebar.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { UpdateCourseComponent } from './courses/update-course/update-course.component';
import { CourseFormComponent } from './courses/course-form/course-form.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { SharedModule } from '../shared/shared.module';
import { DataTableModule } from 'angular-6-datatable';
import { BreadcrumbsModule } from 'ng6-breadcrumbs';
import { CourseViewComponent } from './courses/course-view/course-view.component';
import { ChapterComponent } from './chapter/chapter.component';
import { CreateChapterComponent } from './chapter/create-chapter/create-chapter.component';
import { UpdateChapterComponent } from './chapter/update-chapter/update-chapter.component';
import { ChapterViewComponent } from './chapter/chapter-view/chapter-view.component';
import { ChapterFormComponent } from './chapter/chapter-form/chapter-form.component';
import { ChapterListComponent } from './chapter/chapter-list/chapter-list.component';
import { QuestionsComponent } from './questions/questions.component';
import { CreateQuestionComponent } from './questions/create-question/create-question.component';
import { UpdateQuestionComponent } from './questions/update-question/update-question.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionViewComponent } from './questions/question-view/question-view.component';
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    DataTableModule,
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    SidebarComponent,
    CoursesComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    CourseFormComponent,
    CoursesListComponent,
    CourseViewComponent,
    ChapterComponent,
    CreateChapterComponent,
    UpdateChapterComponent,
    ChapterViewComponent,
    ChapterFormComponent,
    ChapterListComponent,
    QuestionsComponent,
    CreateQuestionComponent,
    UpdateQuestionComponent,
    QuestionFormComponent,
    QuestionViewComponent,
    QuestionsListComponent
  ]
})
export class AdminModule { }
