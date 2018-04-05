

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BorrowerService} from "../services/borrower.service";
import {Borrower} from "../entities/borrower";

@Component({
    selector: 'ns-borrower-details',
    moduleId: module.id,
    templateUrl: './borrower-details.component.html'
}) export class BorrowerDetailsComponent implements OnInit{
    borrower: Borrower;

    constructor(private route: ActivatedRoute,
                private borrowerService: BorrowerService) {


    }
    ngOnInit() {
        const contactId = +this.route.snapshot.params['id'];
        this.borrowerService.getBorrowerByContactId(contactId).then((borrower: Borrower) => {
            this.borrower = borrower;

        }).catch(e=>{console.log(e.message);});
    }
}