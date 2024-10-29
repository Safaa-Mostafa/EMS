import { ChartModule } from 'primeng/chart';
import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent {

}
