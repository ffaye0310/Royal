import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  canva !: any
  constructor() { }

  ngOnInit(): void {

    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];
    this.canva = document.getElementById('firstChart')
    
    new Chart( this.canva,
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              backgroundColor : "#f4a4d6",
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  

}
}