import { Chart } from 'chart.js';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-humidity-graph',
  standalone: true,
  imports: [],
  templateUrl: './temp-humidity-graph.component.html',
  styleUrls: ['./temp-humidity-graph.component.css']
})
export class TempHumidityGraphComponent implements OnInit, AfterViewInit {
  private myChart: Chart | undefined;

  ngOnInit(): void {
    this.createChart('ground'); // Initialize the chart with ground floor data
  }

  ngAfterViewInit(): void {
    this.createChart('ground'); // Ensure the chart is created after the view initializes
  }

  createChart(floor: string): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    if (this.myChart) {
      this.myChart.destroy(); // Destroy previous chart instance
    }

    const data = this.getChartData(floor);

    this.myChart = new Chart(ctx, {
      type: 'line', // Change this to the desired chart type
      data: data,
      options: {
        responsive: true,
        elements: {
          line: {
            tension: 0.4, // Smoothness of the line (0 = straight, 1 = fully curved)
          },
          point: {
            radius: 3, // Size of the points
            hoverRadius: 5 // Size of the points on hover
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Time'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Values'
            },
            beginAtZero: true // Ensures the y-axis starts at zero
          }
        }
      }
    });
  }

  getChartData(floor: string) {
    // Dummy data, replace with actual data fetching logic
    const labels = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM'];

    // Replace data based on selected floor
    let temperatureData: number[] = [];
    let humidityData: number[] = [];
    let invoiceData: number[] = [];

    switch (floor) {
      case 'ground':
        temperatureData = [22, 23, 21, 20, 24]; // Example temperature data for Ground Floor
        humidityData = [55, 60, 53, 58, 62]; // Example humidity data for Ground Floor
        invoiceData = [100, 200, 150, 300, 250]; // Example invoice data for Ground Floor
        break;
      case 'first':
        temperatureData = [25, 26, 24, 23, 27]; // Example data for First Floor
        humidityData = [60, 65, 62, 61, 68]; // Example data for First Floor
        invoiceData = [150, 250, 200, 350, 300]; // Example data for First Floor
        break;
      case 'second':
        temperatureData = [20, 21, 22, 19, 23]; // Example data for Second Floor
        humidityData = [50, 55, 54, 53, 52]; // Example data for Second Floor
        invoiceData = [90, 190, 140, 290, 240]; // Example data for Second Floor
        break;
      case 'third':
        temperatureData = [28, 29, 27, 26, 30]; // Example data for Third Floor
        humidityData = [70, 75, 72, 71, 78]; // Example data for Third Floor
        invoiceData = [200, 300, 250, 400, 350]; // Example data for Third Floor
        break;
    }

    return {
      labels: labels,
      datasets: [
        {
          label: 'Temperature (°C)',
          data: temperatureData,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: true,
          lineTension: 0.4 // Smoothing effect
        },
        {
          label: 'Humidity (%)',
          data: humidityData,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          fill: true,
          lineTension: 0.4 // Smoothing effect
        },
        {
          label: 'Invoice ($)',
          data: invoiceData,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          lineTension: 0.4 // Smoothing effect
        }
      ]
    };
  }

  onFloorChange(event: Event): void {
    const selectedFloor = (event.target as HTMLSelectElement).value;
    this.createChart(selectedFloor); // Recreate the chart with selected floor data
  }
}
