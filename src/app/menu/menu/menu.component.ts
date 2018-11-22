import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  drawerOpened = true;

  constructor() { }

  ngOnInit() {
    
  }

  toggleDrawer(){
    this.drawerOpened = !this.drawerOpened;
    console.log("drawerOpened set to ", this.drawerOpened);
  }
}
