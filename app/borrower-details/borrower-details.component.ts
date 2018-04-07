

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BorrowerService} from "../services/borrower.service";
import {Borrower} from "../entities/borrower";
import {Const} from "../const";

@Component({
    selector: 'ns-borrower-details',
    moduleId: module.id,
    templateUrl: './borrower-details.component.html'
}) export class BorrowerDetailsComponent implements OnInit{
    borrower: Borrower;
    mode = Const.mode;
    constructor(private route: ActivatedRoute,
                private borrowerService: BorrowerService) {


    }
    ngOnInit() {
        const name = this.route.snapshot.params['name'];
        this.borrowerService.getBorrowerByName(name).then((borrower: Borrower) => {
            this.borrower = borrower;

        }).catch(e=>{console.log(e.message);});
    }
}