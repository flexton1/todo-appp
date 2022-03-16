import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
  {path: 'todos', component: TodosComponent},
  {
    path: '',
    redirectTo: '/todos',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/todos',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
