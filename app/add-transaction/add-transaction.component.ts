import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../services/contact.service";
import {Borrower} from "../entities/borrower";
import {DatePicker} from "tns-core-modules/ui/date-picker";
import * as utils from 'tns-core-modules/utils/utils';
import {Transaction} from "../entities/transaction";
import {DatePipe} from "@angular/common";
import {BorrowerService} from "../services/borrower.service";
import {TransactionService} from "../services/transaction.service";

@Component({
    selector: 'ns-add-new-borrower',
    moduleId: module.id,
    templateUrl: './add-transaction.component.html'
})
export class AddTransactionComponent implements OnInit {
    mode: string;
    borrower: Borrower;
    amount: number = null;
    date: Date = new Date();
    constructor(private route: ActivatedRoute,
                private contactService: ContactService,
                private borrowerService: BorrowerService,
                private transactionService: TransactionService) {
    }

    ngOnInit(): void {
        const contactId = +this.route.snapshot.params["id"];
        this.mode = this.route.snapshot.params["mode"];
        this.contactService.getContactById(contactId).then((borrower: Borrower) => {
                this.borrower = borrower;
            }).catch( (error) => {
                console.dir(error);
            }
        );
        this.setAppeareances();
    }

    setAppeareances() {
        // let datePicker = <DatePicker> this.datePicker.nativeElement;
        // datePicker.android.setCalendarViewShown(true);
    }

    onPickerLoaded(args){
        let datePicker = <DatePicker> args.object;
        datePicker.date = this.date;
        datePicker.maxDate = new Date(2045, 12, 12);
        datePicker.minDate = new Date(2000, 1, 1);
    }
    addTransaction() {
        const transaction = new Transaction();
        transaction.borrower = this.borrower;
        transaction.amount = this.amount;
        transaction.date = new DatePipe('en').transform(this.date, 'yyyy-MM-dd');
        console.dir(transaction);
        this.transactionService.addTransaction(transaction, this.mode);

    }
    onDateChange(args) {
        this.date = args.value;
    }

}