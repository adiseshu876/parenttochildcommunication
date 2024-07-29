import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() fromchild: any;
@Output() public child = new EventEmitter()



onClick(){
  this.child.emit('from child communication')
}
}
