import { ChartModule } from 'primeng/chart';
import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [ChartModule,DropdownModule,FormsModule],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent implements OnInit {
  carbonData: any;
  carbonOptions: any;
  selectedBilling = 'monthly';

  ngOnInit() {
    this.carbonData = {
      labels: ['Ground Floor', 'First Floor', 'Second Floor', 'Third Floor'],
      datasets: [
        {
          data: [85, 94, 73, 64], // Values from the chart in your screenshot
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#AB47BC'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D', '#BA68C8'],
        },
      ],
    };
  
    this.carbonOptions = {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      }
    };
  }
  billingOptions = [
    { label: 'Monthly', value: 'monthly' },
    { label: 'Yearly', value: 'yearly' }
  ];
  
}
