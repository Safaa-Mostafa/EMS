import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent {
  temperatureData: any = {
    labels: ['Ground Floor', 'First Floor', 'Second Floor', 'Third Floor'],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [24, 22, 22, 23], // Example data
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#26C6DA']
      }
    ]
  };

  chartOptions: any = {
    responsive: true,
    indexAxis: 'y',  // Set indexAxis to 'y' to make the chart horizontal
    scales: {
      x: {
        ticks: { color: '#ffffff' }
      },
      y: {
        ticks: { color: '#ffffff' }
      }
    },
    plugins: {
      legend: { display: true, labels: { color: '#ffffff' } }
    }
  };
}
