import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, throwError } from 'rxjs';

export interface Contact {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly url = 'contacts.json';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<{ contacts: Contact[] }>(this.url).pipe(
      map(r => r?.contacts ?? []),
      catchError(err => {
        console.error('No se pudo cargar contacts.json', err);
        return throwError(() => new Error('Error cargando contacts.json'));
      })
    );
  }
}
