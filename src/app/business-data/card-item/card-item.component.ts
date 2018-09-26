import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  public dataSets = [{
    'iconCode': 'fa-stethoscope fas',
    'imageTitle': 'Doctor'
  },
  {
    'iconCode': 'fa-cog fas',
    'imageTitle': 'Engineer'
  },
  {
    'iconCode': 'fas fa-folder-open',
    'imageTitle': 'CA'
  },
  {
    'iconCode': 'fa-gavel fas',
    'imageTitle': 'Lawyer'
  },
  {
    'iconCode': 'fas fa-user-tie',
    'imageTitle': 'Architect'
  },
  {
    'iconCode': 'fas fa-user-tie',
    'imageTitle': 'Other'
  }]
  constructor() { }

  ngOnInit() {
  }

}
