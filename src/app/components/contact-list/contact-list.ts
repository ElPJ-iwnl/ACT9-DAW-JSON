import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRow } from "../contact-row/contact-row";

@Component({
  selector: 'app-contact-list',
  standalone: true,                 
  imports: [CommonModule, ContactRow],
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.css'] 
})
export class ContactList {
  contacts: Contact[] = [
    { id: 1, name: 'Maria Lopez', email: 'maria.lopez@example.com' },
    { id: 2, name: 'Carlos Ruiz', email: 'carlos.ruiz@example.com' },
    { id: 3, name: 'Ana Gomez', email: 'ana.gomez@example.com' },
    { id: 4, name: 'Luis Fernandez', email: 'luis.fernandez@example.com' }
  ];
}

export interface Contact {
  id: number;
  name: string;
  email: string;
}