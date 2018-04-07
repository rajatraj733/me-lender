

import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export  class ActivityIndicatorService {
    private showProgress$ = new BehaviorSubject<boolean>(false);

    showActivityIndicator() {
        this.showProgress$.next(true);
    }
    hideActivityIndicator() {
        this.showProgress$.next(false);
    }

    getListener() {
        return this.showProgress$;
    }
}