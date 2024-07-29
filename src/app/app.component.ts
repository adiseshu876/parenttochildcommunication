import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parenttochildcommunication';
  fromParent ='welcome to angular from parent'
msg: any;
  // fromParent = [
  //   {id:1,name:'angular',author:'seshu'},
  //   {id:1,name:'angular',author:'seshu'},
  //   {id:1,name:'angular',author:'seshu'},
  //   {id:1,name:'angular',author:'seshu'},
  // ]
}
