import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/services/todo.model';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

onFormSubmit(form: NgForm){
  console.log('form submited');
}

}
