import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './shared/materials/modules.materials';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
