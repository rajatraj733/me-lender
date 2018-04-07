

import {Component, OnInit} from "@angular/core";
import {ActivityIndicatorService} from "../services/activity-indicator.service";

@Component({
    selector: 'ns-activity-indicator',
    moduleId: module.id,
    template: '<ActivityIndicator  [busy]="value" [visibility]="value? \'visible\': \'collapse\'"  width="100" height="100" class="activity-indicator"></ActivityIndicator>'
}) export class ActivityIndicatorComponent implements OnInit{
    value: boolean = false;
    constructor(private activityIndicatorService: ActivityIndicatorService) {}

    ngOnInit() {
        console.log(this.value);
        this.activityIndicatorService.getListener().subscribe(value =>{
            this.value = value;
            console.log(this.value );
        });
    }

}