import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
    providedIn: 'root'
})
export class SnackBarService{

    constructor(
        private _matsnackbar : MatSnackBar
    ){}

    openSnackBarService(msg: string){
        this._matsnackbar.open(msg, 'Close',{
            duration: 2000,
            data: msg,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        })
    }
}