import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../models/todos';
import { todosData3 } from '../../consts/todos';
import { SnackBarService } from '../../services/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  todosArr : Itodo[] = [];
  editObj !: Itodo;

  constructor(
    private _snackbar : SnackBarService,
    private _matDialogBox : MatDialog
  ) { }

  ngOnInit(): void {
    this.todosArr = todosData3;
  }

  getNewTodoObj(newTodo: Itodo){
    this.todosArr.unshift(newTodo);
    this._snackbar.openSnackBarService(`The new TodoItem is added successfully!!!`);
  }

  getRemoveID(removeID: string){
    let config = new MatDialogConfig()
    config.data = `Are you aure? you want to remove this todoItem with id ${removeID}`;
    config.width = '400px';
    let dialogRef = this._matDialogBox.open(GetConfirmComponent,config);
    dialogRef.afterClosed()
    .subscribe({
      next: resp =>{
        if(resp){
          let getIndex = this.todosArr.findIndex(t => t.todoID === removeID);
          this.todosArr.splice(getIndex,1);
          this._snackbar.openSnackBarService(`The todoItem with id ${removeID} is removed successfully!!!`);
        }
      },
      error: err =>{
        this._snackbar.openSnackBarService(err.msg);
      }
    })
  }

  getEditTodo(editTodo: Itodo){
    this.editObj = editTodo;
  }

  getUpdatedTodo(todo: Itodo){
    let getIndex = this.todosArr.findIndex(t => t.todoID === todo.todoID);
    this.todosArr[getIndex] = todo;
    this._snackbar.openSnackBarService(`The todoItem ${todo.todoItem} is updated successfully!!!`)
  }

}
