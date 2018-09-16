import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  arrayFields = [
      {
        'label': 'Crianças matriculadas',
        'value': 265
      },
      {
        'label': 'Crianças na lista de espera',
        'value': 189
      },
      {
        'label': 'Crianças na lista de espera',
        'value': 189
      },
      {
        'label': 'Crianças na lista de espera',
        'value': 189
      }
    ];

  constructor() { }

  ngOnInit() {
  }

}
