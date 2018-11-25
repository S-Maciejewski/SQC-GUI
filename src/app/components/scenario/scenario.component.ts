import { Component, OnInit } from '@angular/core';
import { HttpHelper } from '../../utils/HttpHelper.service';
import { MenuComponent } from 'src/app/menu/menu/menu.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {

  menu: MenuComponent;
  httpHelper: HttpHelper;
  http: HttpClient;

  constructor(menu: MenuComponent,
    helper: HttpHelper,
    httpClient: HttpClient) {
    this.httpHelper = helper;
    this.menu = menu;
    this.http = httpClient;
  }

  ngOnInit() {
  }


  getSteps() {
    this.httpHelper.getSteps(this.http, this.menu.getScenarioInput());
  }
}
