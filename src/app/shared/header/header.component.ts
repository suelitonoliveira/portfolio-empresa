import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    CommonModule,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})
export class HeaderComponent {
  menuOpen = false;
  menuItems = [
    { label: 'Home', link: '' },
    { label: 'Serviços', link: '/servicos' },
    { label: 'Sobre Nós', link: '/sobre' },
    { label: 'Contato', link: '/contato' },
  ];
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
