import {Injectable} from "@angular/core";
import {Borrower} from "../entities/borrower";
import * as firebase from "nativescript-plugin-firebase/app";
import {Transaction} from "../entities/transaction";
import {Const} from "../const";

@Injectable()
export class FireStoreService {

    borrowers: Borrower[];
    borrowers$: Promise<Borrower[]>;

    constructor() {
    }

    addBorrower(borrower: Borrower): Promise<any> {
        const borrowerCollections = firebase.firestore().collection(Const.collection.BORROWERS);
        return new Promise((resolve, reject) => {
            try {
                this.getAllBorrowers().then((borrowers: Borrower[]) => {
                    let duplicateFound = false;
                    let message = '';
                    for(let sBorrower of borrowers) {
                        if (sBorrower.name === borrower.name) {
                            duplicateFound = true;
                            console.log('duplicate contact found');
                            message = 'Borrower with name ' + borrower.name + ' already exists in database. If they are different, modify this borrower with another name';
                        }
                    };
                    if(!duplicateFound) {
                        borrower.source = Const.source.FIRE_STORE;
                        borrowerCollections.doc(borrower.name).set(borrower)
                            .then(() => {
                                console.log(`Firestore: borrower added`);
                                message = 'borrower added';
                                this.borrowers.push(borrower);
                            })
                            .catch((error) => {
                                console.dir(error);
                                throw error;
                            });
                    }
                    resolve(message);
                }).catch(e => {
                    reject(e);
                });
            } catch (e) {
                reject(e);
            }
        });

    }

    getAllBorrowers(): Promise<Borrower[]> {
        if (this.borrowers && this.borrowers.length > 0) {
            return Promise.resolve(this.borrowers);
        } else if (this.borrowers$) {
            return this.borrowers$;
        } else {
            const borrowerCollections = firebase.firestore().collection(Const.collection.BORROWERS);
            this.borrowers$ = borrowerCollections.get().then(
                querySnapshot => {
                    console.log('got all the borrowers');
                    this.borrowers = [];
                    querySnapshot.forEach((doc) => {
                        this.borrowers.push(doc.data() as Borrower);
                    });
                    this.borrowers.sort((a: Borrower, b: Borrower) => a.name.localeCompare(b.name));
                    return this.borrowers;
                }
            ).catch(e => {
                console.log('error getting all the browsers');
                console.dir(e);
                return e;
            });
            return this.borrowers$;
        }

    }

    addTransaction(transaction: Transaction): Promise<any> {
        const transactionCollection = firebase.firestore().collection(Const.collection.TRANSACTIONS);
        return transactionCollection.add({
            amount: transaction.amount,
            date: transaction.date,
            borrower: transaction.borrower.name,
            comment: transaction.comment
        }).then(documentRef => {
            console.log(`transaction added with ${documentRef.id}`);
            return documentRef;
        });
    }
    updateBorrower(borrower: Borrower): Promise<string> {
        borrower.source = Const.source.FIRE_STORE;
        return firebase.firestore().collection(Const.collection.BORROWERS).doc(borrower.name)
            .update(borrower).then(() => {
            return 'borrower updated';
        }).catch(e=>e);
    }
}