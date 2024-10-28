import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,TableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EMS_Dashboard';
  checked = true;
  products: any[] = [];

  constructor() {
    this.loadProducts();
  }

  loadProducts() {
    // Replace this with your actual data fetching logic
    this.products = [
      { code: 'P001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P003', name: 'Product 3', category: 'Category 3', quantity: 30 },
      // Add more products as needed
    ];
  }
}
