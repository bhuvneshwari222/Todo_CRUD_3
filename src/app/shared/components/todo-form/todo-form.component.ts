import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todos';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  isInEditMode: boolean = false;
  @ViewChild('todoForm') todoForm !: NgForm;
  @Output() emitNewTodoObj: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Input() getEditTodo !: Itodo;
  @Output() emitUpdatedTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['getEditTodo'].currentValue) {
      this.todoForm.form.patchValue(this.getEditTodo);
      this.isInEditMode = true;
    }
  }

  onSubmitTodo() {
    if (this.todoForm.valid) {
      let newTodo: Itodo = { ...this.todoForm.form.value, todoID: Date.now().toString() };
      this.emitNewTodoObj.emit(newTodo);
      this.todoForm.resetForm();
    }
  }

  updateTodo() {
    if (this.todoForm.valid) {
      let updatedTodo: Itodo = { ...this.todoForm.form.value, todoID: this.getEditTodo.todoID };
      this.emitUpdatedTodo.emit(updatedTodo);
      this.isInEditMode = false;
      this.todoForm.resetForm();
    }
  }

}
