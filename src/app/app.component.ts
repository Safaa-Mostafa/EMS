import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';

import { HeaderComponent } from './shared/header/header.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FloorOverviewComponent } from './overview/floor-overview/floor-overview.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,TableModule,HeaderComponent,SidebarComponent,FloorOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

