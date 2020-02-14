import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {
    private contactsUrl = '/api/contacts';

    constructor (private http: HttpClient) {}

    // get("/api/contacts")
    getContacts(): Observable<Contact[]>{
      return this.http.get<any>(this.contactsUrl)
      .pipe(map((res) => res as Contact[]));
    }

    // post("/api/contacts")
    createContact(newContact: Contact): Observable<Contact> {
      return this.http.post(this.contactsUrl, newContact)
      .pipe(map((res) => res as Contact));
    }

    // delete("/api/contacts/:id")
    deleteContact(delContactId: string): Observable<string> {
      return this.http.delete(this.contactsUrl + '/' + delContactId)
       .pipe(map((res) => res as string));
    }

    // put("/api/contacts/:id")
    updateContact(putContact: Contact): Observable<Contact> {
      const putUrl = this.contactsUrl + '/' + putContact._id;
      return this.http.put(putUrl, putContact)
      .pipe(map((res) => res as Contact));
    }

    private handleError (error: any): Promise<any> {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
    }
}
