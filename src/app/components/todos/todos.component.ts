import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/services/todo.model';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todo: Todo = new Todo();
  todos: Todo[] = [];
  showValidationError: boolean = false;

  constructor(
    private _dataService: DataService,
    private dialog: MatDialog,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._dataService.getAllTodos().subscribe((data) => (this.todos = data));
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      return (this.showValidationError = true);
    } else {
      this.todo.completed = false;
      this._dataService.addTodo(this.todo).subscribe((data) => {
        console.log('response', data);
        this._router.navigate([this._router.url]);
      });
      this.showValidationError = false;
      form.reset();
      return window.location.reload();
    }
  }
  toggleCompleted(id: number) {
    
this._dataService.updateTodo(id).subscribe((data) => {
  console.log("updated", data);
 
});
return window.location.reload();
  }

  editTodo(todo: Todo) {
    

    let dialogRef = this.dialog.open(EditTodoDialogComponent, {
      width: '70%',
      data: todo,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this._dataService.addTodo(this.todo);
    });
  }

  deleteTodo(id: number) {
    this._dataService.deleteTodo(id).subscribe((data) => {
      console.log(' deleted response', data);
      this._router.navigateByUrl('/todos');
      return window.location.reload();
    });
  }
}
