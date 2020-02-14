import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
   providers: [ContactService]
})
export class ContactDetailsComponent {
  @Input()
  contact: Contact;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;
  constructor (private contactService: ContactService) {

  }
  createContact(contact: Contact) {
    this.contactService.createContact(contact).toPromise().then((newContact: Contact) => {
      this.createHandler(newContact);
    });
  }

  updateContact(contact: Contact): void {
    this.contactService.updateContact(contact).toPromise().then((updatedContact: Contact) => {
      this.updateHandler(updatedContact);
    });
  }

  deleteContact(contactId: string): void {
    this.contactService.deleteContact(contactId).toPromise().then((deletedContactId: string) => {
      this.deleteHandler(deletedContactId);
    });
  }
 }




