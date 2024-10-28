import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';

import { HeaderComponent } from './shared/header/header.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,FormsModule,TableModule,HeaderComponent],

  imports: [RouterOutlet,SidebarComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

