import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list.component';
import { CourseEditComponent } from './course-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StarModule } from '../shared/components/star/star.module';
import { PipesModule } from '../shared/pipes/pipes.module';

export const rotas: Routes = [
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/:id', component: CourseEditComponent},
]

@NgModule({
  declarations: [
    CourseListComponent,
    CourseEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    PipesModule,
    RouterModule.forRoot(rotas),
  ]
})
export class CourseModule { }
