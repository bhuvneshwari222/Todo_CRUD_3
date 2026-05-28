import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";

let matArr = [
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule
]

@NgModule({
    imports: [...matArr],
    exports: [...matArr]
})
export class MaterialModule{}