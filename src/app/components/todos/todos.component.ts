import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/services/todo.model';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos!: Todo[];
  showValidationError: boolean = false;


  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

onFormSubmit(form: NgForm){
  if (form.invalid) {return this.showValidationError = true}else {
    
    this.dataService.addTodo(new Todo(form.value.text));
    this.showValidationError = false;
    return form.reset();
  
  
  }
 }
toggleCompleted(todo: Todo) {
  // set todo to completed  
  todo.completed = !todo.completed;
}

editTodo(todo: Todo) {
  const index = this.todos.indexOf(todo);

  let dialogRef = this.dialog.open(EditTodoDialogComponent, {
    
    width: '80%',
  });

}

}



