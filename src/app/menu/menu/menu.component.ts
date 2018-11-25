import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  drawerOpened = true;
  input : String;

  constructor() { }

  ngOnInit() {
    
  }

  getScenarioInput(){
    return this.input;
  }

  toggleDrawer(){
    this.drawerOpened = !this.drawerOpened;
  }
}
