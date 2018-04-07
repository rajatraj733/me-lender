import {Injectable} from "@angular/core";
import {FireStoreService} from "./firestore.service";
import {Transaction} from "../entities/transaction";
import {Const} from "../const";

@Injectable()

export class TransactionService {
    constructor(private firestoreService: FireStoreService) {

    }

    addTransaction(transaction: Transaction, mode: String): Promise<any> {
        transaction.amount = +transaction.amount;
        transaction.borrower.amount = +transaction.borrower.amount;
        if (mode === Const.mode.ADD_NEW) {
            return this.addNewBorrowerTransaction(transaction);
        } else if (mode === Const.mode.BORROWED) {
            return this.addBorrowingTransaction(transaction);
        } else if (mode === Const.mode.RETURNED) {
            return this.addReturningTransaction(transaction);
        }
    }

    addNewBorrowerTransaction(transaction: Transaction): Promise<any> {
        return new Promise((resolve, reject) => {
            this.firestoreService.addBorrower(transaction.borrower).then(message => {
                console.log(`TransactionService: ${message}`);
                this.firestoreService.addTransaction(transaction).then(documnetRef => {
                        console.log(`TransactionService: transaction added`);
                        transaction.borrower.amount = transaction.amount;
                        this.firestoreService.updateBorrower(transaction.borrower).then((msg) => {
                            console.log(msg);
                            resolve();
                        }).catch(error => {
                            delete transaction.borrower.amount;
                            throw error;
                        });
                    }
                ).catch(error => {
                    throw error;
                });
            }).catch((error) => {
                console.log('TransactionService: ' + error.message);
                reject(error);
            });
        });
    }

    addBorrowingTransaction(transaction: Transaction): Promise<any> {
        return new Promise((resolve, reject) => {
            this.firestoreService.addTransaction(transaction).then(documentRef => {
                console.log('TransactionService: Borrowing Transaction Added!!');
                transaction.borrower.amount += transaction.amount;
                this.firestoreService.updateBorrower(transaction.borrower).then(msg => {
                    console.log(msg);
                    resolve();
                }).catch(e => {
                    transaction.borrower.amount -= +transaction.amount;
                    throw e;
                });
            }).catch(e => {
                console.log('TransactionService: ' + e.message);
                reject(e);
            });
        });
    }

    addReturningTransaction(transaction: Transaction): Promise<any> {
        return new Promise((resolve, reject) => {
            transaction.amount = (-1) * +transaction.amount;
            this.firestoreService.addTransaction(transaction).then(documentRef => {
                console.log('TransactionService: Returning Transaction Added!!');
                transaction.borrower.amount += transaction.amount;
                const tempLastPaid = transaction.borrower.lastPaid;
                if(!transaction.borrower.lastPaid || transaction.date.localeCompare(transaction.borrower.lastPaid) === 1) {
                    transaction.borrower.lastPaid = transaction.date;
                }
                this.firestoreService.updateBorrower(transaction.borrower).then(msg => {
                    console.log(msg);
                    resolve();
                }).catch(e => {
                    transaction.borrower.amount -= transaction.amount;
                    transaction.borrower.lastPaid = tempLastPaid;
                    throw e;
                });
            }).catch(e => {
                console.log('TransactionService: ' + e.message);
                reject(e);
            });
        });
    }


}