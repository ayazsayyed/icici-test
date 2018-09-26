import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-data',
  templateUrl: './business-data.component.html',
  styleUrls: ['./business-data.component.css']
})
export class BusinessDataComponent implements OnInit {
  public business = [{
    'name': 'Option 1',
    'value': 'Option 1'
  },
  {
    'name': 'Option 2',
    'value': 'Option 2'
  },
  {
    'name': 'Option 3',
    'value': 'Option 3'
  },
  {
    'name': 'Option 4',
    'value': 'Option 4'
  }];
  constructor() { }

  ngOnInit() {
  }

}
