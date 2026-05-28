import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../models/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() getTodosArr !: Itodo[];
  @Output() emitRemoveID : EventEmitter<string> = new EventEmitter<string>();
  @Output() emitEdittodo : EventEmitter<Itodo> = new EventEmitter<Itodo>();

  constructor() { }

  ngOnInit(): void {
  }


  trackByTodoID(index: number, todo: Itodo){
    return todo.todoID;
  }

  onRemoveTodo(removeID: string){
    this.emitRemoveID.emit(removeID);
  }

  onEdit(editTodo: Itodo){
    this.emitEdittodo.emit(editTodo);
  }
}

