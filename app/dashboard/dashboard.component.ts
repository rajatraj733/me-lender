

import {Component} from "@angular/core";
import {BorrowerService} from "../services/borrower.service";

@Component({
    selector: "ns-dashboard",
    moduleId: module.id,
    templateUrl: './dashboard.component.html'
}) export  class DashboardComponent {
    constructor(private borrowerService: BorrowerService) {
        this.borrowerService.getNewBorrowerList().then();
    }
}