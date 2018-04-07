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
import {Const} from "../const";
import * as dialogs from "ui/dialogs";
import {RouterExtensions} from "nativescript-angular";
import {ActivityIndicatorService} from "../services/activity-indicator.service";

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
    modeConst = Const.mode;
    comment: string;
    constructor(private route: ActivatedRoute,
                private contactService: ContactService,
                private transactionService: TransactionService,
                private borrowerService: BorrowerService,
                private routerExtensions: RouterExtensions,
                private activityIndicatorService: ActivityIndicatorService) {
    }

    ngOnInit(): void {
        const name = this.route.snapshot.params['name'];
        this.mode = this.route.snapshot.params["mode"];
        if (this.mode === Const.mode.ADD_NEW) {
            this.contactService.getContactByName(name).then((borrower: Borrower) => {
                this.borrower = borrower;
            }).catch((error) => {
                    console.dir(error);
                }
            );
        } else if(this.mode === Const.mode.RETURNED || this.mode === Const.mode.BORROWED) {
            this.borrowerService.getBorrowerByName(name).then((borrower: Borrower) => {
               this.borrower = borrower;
            }).catch(e =>{console.dir(e);});
        }
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
        transaction.comment = this.comment;
        console.dir(transaction);
        this.activityIndicatorService.showActivityIndicator();
        this.transactionService.addTransaction(transaction, this.mode).then(() => {
            this.activityIndicatorService.hideActivityIndicator();
            dialogs.alert({
                title: 'Response',
                message: 'Transaction Added!!',
                okButtonText: 'Ok'
            }).then(() => {
                console.log('acknowledged by user');
                this.routerExtensions.backToPreviousPage();
            });
        }).catch(e =>{
            this.activityIndicatorService.hideActivityIndicator();
            dialogs.alert({
                title: 'Error',
                message: e.message,
                okButtonText: 'Ok'
            }).then();
        });

    }
    onDateChange(args) {
        this.date = args.value;
    }

}