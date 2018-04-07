import {Injectable} from "@angular/core";
import * as Contacts from 'nativescript-contacts-lite';
import {Borrower} from "../entities/borrower";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import "rxjs/add/observable/fromPromise";
import {Const} from "../const";

@Injectable()
export class ContactService {
    borrowers: Borrower[];
    borrowers$: Promise<Borrower[]>;
    desiredFields = [
        'display_name',
        'email',
        'phone'
    ];

    getContacts(): Promise<Borrower[]> {
        if (this.borrowers && this.borrowers.length > 0) {
            return Promise.resolve(this.borrowers);
        } else if (this.borrowers$) {
            return this.borrowers$;
        } else {
            this.borrowers$ = Contacts.getContacts(this.desiredFields).then((result) => {
                this.borrowers = this.parseContactToBorrower(result);
                console.log("got all the contacts");
                return this.borrowers;
            }).catch( (error) => {
                console.dir(error);
                return error;
            });
            return this.borrowers$;
        }
    }

    getContactByName(name: string): Promise<Borrower> {
        return this.getContacts().then((borrowers: Borrower[]) => {
            for(const borrower of borrowers) {
                if(borrower.name === name) {
                    return borrower;
                }
            }
        });
    }


    private parseContactToBorrower(contacts): Borrower[] {
        const borrowers = [];
        for(const contact of contacts) {
            const id = contact.contact_id;
            const name = contact.display_name;
            const phones = [];
            if (contact.phone) {
                for (const phone of contact.phone) {
                    if (phone.account_name.indexOf('gmail') !== -1) {
                        let phoneNo = phone.number;
                        phoneNo = phoneNo.replace(/ /g, '');
                        if (!Borrower.isValidPhone(phoneNo)) {
                            phoneNo = Borrower.convertToValidPhone(phoneNo);
                        }
                        if (phones.indexOf(phoneNo) === -1) {
                            phones.push(phoneNo);
                        }
                    }
                }
            }
            if(phones.length) {
                borrowers.push(new Borrower(id, name, phones, Const.source.CONTACT));
            }
        }
        borrowers.sort((a: Borrower, b: Borrower) => a.name.localeCompare(b.name));
        return borrowers;
    }
}