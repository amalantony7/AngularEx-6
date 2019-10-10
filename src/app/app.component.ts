import { Component } from '@angular/core';
import { MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMatEx';
  notifications = 3;
  progSpinner =false;
  opened=false;
  minDate= new Date(1990, 1, 1);
  maxDate = new Date;

  loadSpinner(){
    this.progSpinner =true;
    setTimeout(() =>{
      this.progSpinner = false
    },5000)
  }

  dateFilter = date => {
    const day= date.getDay();
    return day !=0 && day !=6;
  }

  constructor(private _snackBar : MatSnackBar){}

  openSnackBar(message, action){
    this._snackBar.open(message , action , {"duration" : 2000});
  }

}
