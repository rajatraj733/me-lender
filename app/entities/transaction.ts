


import {Borrower} from "./borrower";

export class Transaction {
    id: string;
    borrower: Borrower;
    amount: number;
    date: string;
    comment: string;
}