import {Component, OnInit} from "@angular/core";
import {Borrower} from "../entities/borrower";
import {BorrowerService} from "../services/borrower.service";

@Component({
    selector: 'ns-borrower-list',
    moduleId: module.id,
    templateUrl: './borrower-list.component.html'
})
export class BorrowerListComponent implements OnInit {
    private borrowerList: Borrower[];
    private displayedBorrowerList: Borrower[];

    constructor(private borrowerService: BorrowerService) {
    }

    ngOnInit() {
        this.borrowerService.getBorrowerList().then((borrowers: Borrower[]) => {
            this.borrowerList = borrowers;
            this.displayedBorrowerList = this.borrowerList;
            this.sort(this.displayedBorrowerList);
        });

    }

    sort(borrowers: Borrower[]): Borrower[] {
        return borrowers.sort((a: Borrower, b: Borrower) => a.amount > b.amount ? 1 : -1);
    }

    filter(event) {
        const text = event.value;
        this.displayedBorrowerList = this.borrowerList.filter((value: Borrower) =>
            value.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
    }

}