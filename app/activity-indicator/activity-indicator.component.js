"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var activity_indicator_service_1 = require("../services/activity-indicator.service");
var ActivityIndicatorComponent = /** @class */ (function () {
    function ActivityIndicatorComponent(activityIndicatorService) {
        this.activityIndicatorService = activityIndicatorService;
        this.value = false;
    }
    ActivityIndicatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.value);
        this.activityIndicatorService.getListener().subscribe(function (value) {
            _this.value = value;
            console.log(_this.value);
        });
    };
    ActivityIndicatorComponent = __decorate([
        core_1.Component({
            selector: 'ns-activity-indicator',
            moduleId: module.id,
            template: '<ActivityIndicator  [busy]="value" [visibility]="value? \'visible\': \'collapse\'"  width="100" height="100" class="activity-indicator"></ActivityIndicator>'
        }),
        __metadata("design:paramtypes", [activity_indicator_service_1.ActivityIndicatorService])
    ], ActivityIndicatorComponent);
    return ActivityIndicatorComponent;
}());
exports.ActivityIndicatorComponent = ActivityIndicatorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktaW5kaWNhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGl2aXR5LWluZGljYXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxzQ0FBZ0Q7QUFDaEQscUZBQWdGO0FBTTdFO0lBRUMsb0NBQW9CLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBRHRFLFVBQUssR0FBWSxLQUFLLENBQUM7SUFDa0QsQ0FBQztJQUUxRSw2Q0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUN2RCxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFWVywwQkFBMEI7UUFKekMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSw4SkFBOEo7U0FDM0ssQ0FBQzt5Q0FFZ0QscURBQXdCO09BRjFELDBCQUEwQixDQVl6QztJQUFELGlDQUFDO0NBQUEsQUFaRSxJQVlGO0FBWmUsZ0VBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0FjdGl2aXR5SW5kaWNhdG9yU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2FjdGl2aXR5LWluZGljYXRvci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtYWN0aXZpdHktaW5kaWNhdG9yJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlOiAnPEFjdGl2aXR5SW5kaWNhdG9yICBbYnVzeV09XCJ2YWx1ZVwiIFt2aXNpYmlsaXR5XT1cInZhbHVlPyBcXCd2aXNpYmxlXFwnOiBcXCdjb2xsYXBzZVxcJ1wiICB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGNsYXNzPVwiYWN0aXZpdHktaW5kaWNhdG9yXCI+PC9BY3Rpdml0eUluZGljYXRvcj4nXG59KSBleHBvcnQgY2xhc3MgQWN0aXZpdHlJbmRpY2F0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgdmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGl2aXR5SW5kaWNhdG9yU2VydmljZTogQWN0aXZpdHlJbmRpY2F0b3JTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLmFjdGl2aXR5SW5kaWNhdG9yU2VydmljZS5nZXRMaXN0ZW5lcigpLnN1YnNjcmliZSh2YWx1ZSA9PntcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59Il19