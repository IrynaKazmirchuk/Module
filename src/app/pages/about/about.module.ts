import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutInfoComponent } from './about-info/about-info.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'info',
    component: AboutInfoComponent
  }
];

@NgModule({
  declarations: [
    AboutComponent,
    AboutInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AboutModule { }
