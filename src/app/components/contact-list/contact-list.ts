import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRow } from "../contact-row/contact-row";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, ContactRow],
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.css']
})
export class ContactList implements OnInit {
  contacts: Contact[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ contacts: Contact[] }>('contacts.json').subscribe({
      next: data => {
        this.contacts = data.contacts;
      },
      error: err => {
        console.error('Error cargando contacts.json', err);
      }
    });
  }
}

export interface Contact {
  id: number;
  name: string;
  email: string;
}
