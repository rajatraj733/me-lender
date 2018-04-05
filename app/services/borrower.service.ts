import {Injectable} from "@angular/core";
import {Borrower} from "../entities/borrower";
import {Transaction} from "../entities/transaction";
import {FireStoreService} from "./firestore.service";
import {ContactService} from "./contact.service";

@Injectable()
export class BorrowerService {
    static ADD_NEW = "addNewBorrower";
    static BORROWED = 'borrowed';
    static RETURNED = 'returned';

    newBorrowers: Borrower[];
    newBorrowers$: Promise<Borrower[]>;

    constructor(private firestoreService: FireStoreService,
                private contactService: ContactService) {
    }

    getBorrowerList(): Promise<Borrower[]> {
        return this.firestoreService.getAllBorrowers();
    }

    getNewBorrowerList(): Promise<Borrower[]> {
        if (this.newBorrowers && this.newBorrowers.length > 0) {
            return Promise.resolve(this.newBorrowers);
        } else if (this.newBorrowers$) {
            return this.newBorrowers$;
        }
        this.newBorrowers$ = new Promise((resolve, reject) => {
            this.contactService.getContacts().then((contacts: Borrower[]) => {
                this.newBorrowers = [];
                this.firestoreService.getAllBorrowers().then((oBorrowers: Borrower[]) => {
                    const borrowers = JSON.parse(JSON.stringify(oBorrowers));
                    borrowers.push(new Borrower());
                    let i = 0;
                    for (const contact of contacts) {
                        if (contact.name === borrowers[i].name) {
                            this.newBorrowers.push(borrowers[i]);
                            i++;
                        } else {
                            this.newBorrowers.push(contact);
                        }
                    }
                    resolve(this.newBorrowers);
                }).catch((error) => {
                    console.log(error.message);
                    reject(error);
                });
            });
        });
        return this.newBorrowers$;

    }

    getBorrowerByContactId(id: number): Promise<Borrower> {
        return this.getBorrowerList().then((borrowers: Borrower[]) => {
           for(const borrower of borrowers) {
               if(borrower.contactId === id) {
                   return borrower;
               }
           }
        }).catch(e=>e);
    }
}