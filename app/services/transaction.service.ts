


import {Injectable} from "@angular/core";
import {FireStoreService} from "./firestore.service";
import {Transaction} from "../entities/transaction";
import {Const} from "../const";

@Injectable()

export class TransactionService {
    constructor(private firestoreService: FireStoreService) {

    }

    addTransaction(transaction: Transaction, mode: String): Promise<any> {
        return new Promise((resolve, reject) => {
            if (mode === Const.mode.ADD_NEW) {
                this.firestoreService.addBorrower(transaction.borrower).then(message => {
                    console.log(`TransactionService: ${message}`);
                    this.firestoreService.addTransaction(transaction).then(documnetRef => {
                            console.log(`TransactionService: transaction added`);
                            transaction.borrower.amount = transaction.amount;
                            this.firestoreService.updateBorrower(transaction.borrower).then((msg) => {
                                console.log(msg);
                                resolve();
                            }).catch(error => {
                                delete transaction.borrower.lastPaid;
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
            }
        });
    }


}