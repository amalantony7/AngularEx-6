import { Component } from '@angular/core';

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

  loadSpinner(){
    this.progSpinner =true;
    setTimeout(() =>{
      this.progSpinner = false
    },5000)
  }
}
