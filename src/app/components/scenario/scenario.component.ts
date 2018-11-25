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

  getInput: Function;
  httpHelper: HttpHelper;
  http: HttpClient;

  constructor(menu: MenuComponent,
    helper: HttpHelper,
    httpClient: HttpClient) {
    this.httpHelper = helper;
    this.getInput = menu.getScenarioInput;
    this.http = httpClient;
  }

  ngOnInit() {
  }


  getSteps() {
    console.log('getSteps called in scenario component');
    this.httpHelper.getSteps(this.http, this.getInput());
  }
}
