import { Component, signal } from '@angular/core';
import { ContactList } from './components/contact-list/contact-list';
import { Menu } from './components/menu/menu';
import { Encabezado } from './components/encabezado/encabezado';
import { LineChart } from './components/line-chart/line-chart';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactList, Menu, Encabezado, LineChart],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('dashboard-app');
}