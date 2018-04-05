


import {Component, OnInit} from "@angular/core";
import {ContactService} from '../services/contact.service';
import {Borrower} from '../entities/borrower';
import {BorrowerService} from "../services/borrower.service";
import {Const} from "../const";


@Component({
    selector: 'ns-new-borrower-list',
    moduleId: module.id,
    templateUrl: './new-borrower-list.component.html'
}) export class NewBorrowerListComponent implements OnInit{


    originalBorrowerList: Borrower[];
    displayedBorrowerList: Borrower[];
    mode = Const.mode;
    source = Const.source;
    public templateSelector = (item: Borrower, index: number, items: any) => {
        return item.source;
    }

    constructor(private contactService: ContactService,
                private borrowerService: BorrowerService) {}

    ngOnInit(): void {
        this.borrowerService.getNewBorrowerList().then((borrowers: Borrower[]) => {
            this.originalBorrowerList = borrowers;
            this.displayedBorrowerList = this.originalBorrowerList;
        });
    }

    filter(event) {
        const text = event.value;
        this.displayedBorrowerList = this.originalBorrowerList.filter((value: Borrower) =>
            value.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
    }

}