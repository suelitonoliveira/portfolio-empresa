import { Iservicos } from '../../shared/interfaces/Iservicos';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  services: Iservicos[] = [
    { id: 1, nome: 'Desenvolvimento Web' },
    { id: 2, nome: 'Desenvolvimento Sistema' },
  ];
}
