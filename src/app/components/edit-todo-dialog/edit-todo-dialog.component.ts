import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Todo } from '../../services/todo.model';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss'],
})
export class EditTodoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo,
    private _dataService: DataService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return;

    const updatedTodo: Todo = {
      ...this.todo,
      ...form.value,
    };
    this._dataService.addTodo(updatedTodo).subscribe((data) => {
      console.log('response', data);
      this._router.navigateByUrl('/todos');
    });
    this.dialogRef.close(updatedTodo);
    return window.location.reload();
  }
}
