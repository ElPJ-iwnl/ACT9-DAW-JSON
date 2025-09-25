import { Component, Input } from '@angular/core';
import { Contact } from '../contact-list/contact-list';

@Component({
  selector: 'tr[app-contact-row]',     
  standalone: true,
  template: `
    <td>{{ contact.id }}</td>
    <td>{{ contact.name }}</td>
    <td>{{ contact.email }}</td>
  `
})
export class ContactRow {
  @Input({ required: true }) contact!: Contact;
}