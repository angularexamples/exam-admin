import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { UpdateCourseComponent } from './courses/update-course/update-course.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseViewComponent } from './courses/course-view/course-view.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ChapterListComponent } from './chapter/chapter-list/chapter-list.component';
import { CreateChapterComponent } from './chapter/create-chapter/create-chapter.component';
import { UpdateChapterComponent } from './chapter/update-chapter/update-chapter.component';
import { ChapterViewComponent } from './chapter/chapter-view/chapter-view.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsListComponent } from './questions/questions-list/questions-list.component';
import { CreateQuestionComponent } from './questions/create-question/create-question.component';
import { UpdateQuestionComponent } from './questions/update-question/update-question.component';
import { QuestionViewComponent } from './questions/question-view/question-view.component';

const AdminRoutes: Routes = [
  {
    path: '', component: LayoutComponent,
    children:
      [
        {
          path: '', component: DashboardComponent
        },
        {
          path: 'course', component: CoursesComponent,
          children: [
            {
              path: '', component: CoursesListComponent
            },
            {
              path: 'create', component: CreateCourseComponent
            },
            {
              path: 'update/:id', component: UpdateCourseComponent
            },
            {
              path: 'view/:id', component: CourseViewComponent
            }
          ]
        },
        {
          path: 'chapter', component: ChapterComponent,
          children: [
            {
              path: '', component: ChapterListComponent
            },
            {
              path: 'create', component: CreateChapterComponent
            },
            {
              path: 'update/:id', component: UpdateChapterComponent
            },
            {
              path: 'view/:id', component: ChapterViewComponent
            }
          ]
        },
        {
          path: 'question', component: QuestionsComponent,
          children: [
            {
              path: '', component: QuestionsListComponent
            },
            {
              path: 'create', component: CreateQuestionComponent
            },
            {
              path: 'update/:id', component: UpdateQuestionComponent
            },
            {
              path: 'view/:id', component: QuestionViewComponent
            }
          ]
        }
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(AdminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
