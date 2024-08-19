import { Iservicos } from '../../shared/interfaces/Iservicos';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  services: Iservicos[] = [
    {
      id: 1,
      nome: 'Desenvolvimento de Sites',
      texto:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      imagem: 'colagem-de-fundo-de-programacao.jpg',
    },
    {
      id: 2,
      nome: 'Desenvolvimento de Sotware',
      texto:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting',
      imagem: 'programacao.jpg',
    },
  ];

  menuOpen = false;
  menuItems = [
    { label: 'Página Inicial', link: 'cabecalho' },
    { label: 'Sobre Nós', link: 'sobre' },
    { label: 'Serviços', link: 'servicos' },
    { label: 'Contato', link: 'contato' },
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
