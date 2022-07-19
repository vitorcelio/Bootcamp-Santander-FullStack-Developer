import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const rotas: Routes = [
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  declarations: [
    NavbarComponent,
    NotfoundComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    RouterModule.forRoot(rotas)
  ]
})
export class CoreModule { }
