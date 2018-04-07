"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var ActivityIndicatorService = /** @class */ (function () {
    function ActivityIndicatorService() {
        this.showProgress$ = new BehaviorSubject_1.BehaviorSubject(false);
    }
    ActivityIndicatorService.prototype.showActivityIndicator = function () {
        this.showProgress$.next(true);
    };
    ActivityIndicatorService.prototype.hideActivityIndicator = function () {
        this.showProgress$.next(false);
    };
    ActivityIndicatorService.prototype.getListener = function () {
        return this.showProgress$;
    };
    ActivityIndicatorService = __decorate([
        core_1.Injectable()
    ], ActivityIndicatorService);
    return ActivityIndicatorService;
}());
exports.ActivityIndicatorService = ActivityIndicatorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktaW5kaWNhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpdml0eS1pbmRpY2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHNDQUF5QztBQUN6Qyx3REFBcUQ7QUFHckQ7SUFEQTtRQUVZLGtCQUFhLEdBQUcsSUFBSSxpQ0FBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBWWhFLENBQUM7SUFWRyx3REFBcUIsR0FBckI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsd0RBQXFCLEdBQXJCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBWlMsd0JBQXdCO1FBRHJDLGlCQUFVLEVBQUU7T0FDQyx3QkFBd0IsQ0FhckM7SUFBRCwrQkFBQztDQUFBLEFBYkQsSUFhQztBQWJhLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCAgY2xhc3MgQWN0aXZpdHlJbmRpY2F0b3JTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHNob3dQcm9ncmVzcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICAgIHNob3dBY3Rpdml0eUluZGljYXRvcigpIHtcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MkLm5leHQodHJ1ZSk7XG4gICAgfVxuICAgIGhpZGVBY3Rpdml0eUluZGljYXRvcigpIHtcbiAgICAgICAgdGhpcy5zaG93UHJvZ3Jlc3MkLm5leHQoZmFsc2UpO1xuICAgIH1cblxuICAgIGdldExpc3RlbmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaG93UHJvZ3Jlc3MkO1xuICAgIH1cbn0iXX0=