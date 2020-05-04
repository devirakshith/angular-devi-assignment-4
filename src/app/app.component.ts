import { Component } from '@angular/core';
import {animateFunction} from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [animateFunction]
})

export class AppComponent {
  title = 'assignment4';
  listitem = [];
  temp = '';
  i = 0;
  items = [];
  disableflagForAddButton = false;
  disableflagForRemoveButton = true;

  toggleList() {
    this.items = this.items.length ? [] : [0, 1, 2, 3, 4, 5];
  }

  isDisabled(){
    if (this.items.length > 0){
        this.disableflagForAddButton = true;
        this.disableflagForRemoveButton = false;
    }
    else{
        this.disableflagForAddButton = false;
        this.disableflagForRemoveButton = true;
    }
  }

}
