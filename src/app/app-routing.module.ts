import { TopheadingComponent } from './components/topheading/topheading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './components/technews/technews.component';
import { BiznewsComponent } from './components/biznews/biznews.component';
import { SportsnewsComponent } from './components/sportsnews/sportsnews.component';

const routes: Routes = [
  {
    path: "",
    component: TopheadingComponent
  },
  {
    path: "technology",
    component: TechnewsComponent
  },
  {
    path: "business",
    component: BiznewsComponent
  },
  {
    path: "sports",
    component: SportsnewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
