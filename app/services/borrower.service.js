"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firestore_service_1 = require("./firestore.service");
var contact_service_1 = require("./contact.service");
var BorrowerService = /** @class */ (function () {
    function BorrowerService(firestoreService, contactService) {
        this.firestoreService = firestoreService;
        this.contactService = contactService;
    }
    BorrowerService.prototype.getBorrowerList = function () {
        return this.firestoreService.getAllBorrowers();
    };
    BorrowerService.prototype.getNewBorrowerList = function () {
        var _this = this;
        if (this.newBorrowers && this.newBorrowers.length > 0) {
            return Promise.resolve(this.newBorrowers);
        }
        else if (this.newBorrowers$) {
            return this.newBorrowers$;
        }
        this.newBorrowers$ = new Promise(function (resolve, reject) {
            _this.contactService.getContacts().then(function (contacts) {
                _this.newBorrowers = [];
                _this.firestoreService.getAllBorrowers().then(function (borrowers) {
                    var i = 0;
                    for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
                        var contact = contacts_1[_i];
                        if (i < borrowers.length) {
                            if (contact.name === borrowers[i].name) {
                                _this.newBorrowers.push(borrowers[i]);
                                i++;
                            }
                            else {
                                _this.newBorrowers.push(contact);
                            }
                        }
                        else {
                            _this.newBorrowers.push(contact);
                        }
                    }
                    resolve(_this.newBorrowers);
                }).catch(function (error) {
                    console.log(error.message);
                    reject(error);
                });
            });
        });
        return this.newBorrowers$;
    };
    BorrowerService.prototype.getBorrowerByName = function (name) {
        return this.getBorrowerList().then(function (borrowers) {
            for (var _i = 0, borrowers_1 = borrowers; _i < borrowers_1.length; _i++) {
                var borrower = borrowers_1[_i];
                if (borrower.name === name) {
                    return borrower;
                }
            }
        }).catch(function (e) { return e; });
    };
    BorrowerService.ADD_NEW = "addNewBorrower";
    BorrowerService.BORROWED = 'borrowed';
    BorrowerService.RETURNED = 'returned';
    BorrowerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [firestore_service_1.FireStoreService,
            contact_service_1.ContactService])
    ], BorrowerService);
    return BorrowerService;
}());
exports.BorrowerService = BorrowerService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9ycm93ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvcnJvd2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFHekMseURBQXFEO0FBQ3JELHFEQUFpRDtBQUdqRDtJQVFJLHlCQUFvQixnQkFBa0MsRUFDbEMsY0FBOEI7UUFEOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDbEQsQ0FBQztJQUVELHlDQUFlLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRCw0Q0FBa0IsR0FBbEI7UUFBQSxpQkFnQ0M7UUEvQkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDN0MsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFvQjtnQkFDeEQsS0FBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFxQjtvQkFDL0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNWLEdBQUcsQ0FBQyxDQUFrQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVE7d0JBQXpCLElBQU0sT0FBTyxpQkFBQTt3QkFDZCxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ3ZCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0NBQ3JDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNyQyxDQUFDLEVBQUUsQ0FBQzs0QkFDUixDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNKLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUNwQyxDQUFDO3dCQUNMLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3BDLENBQUM7cUJBQ0o7b0JBQ0QsT0FBTyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUU5QixDQUFDO0lBRUQsMkNBQWlCLEdBQWpCLFVBQWtCLElBQVk7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFxQjtZQUN0RCxHQUFHLENBQUEsQ0FBbUIsVUFBUyxFQUFULHVCQUFTLEVBQVQsdUJBQVMsRUFBVCxJQUFTO2dCQUEzQixJQUFNLFFBQVEsa0JBQUE7Z0JBQ2QsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUN4QixNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNwQixDQUFDO2FBQ0o7UUFDSixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQXpETSx1QkFBTyxHQUFHLGdCQUFnQixDQUFDO0lBQzNCLHdCQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ3RCLHdCQUFRLEdBQUcsVUFBVSxDQUFDO0lBSHBCLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FTNkIsb0NBQWdCO1lBQ2xCLGdDQUFjO09BVHpDLGVBQWUsQ0EyRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Qm9ycm93ZXJ9IGZyb20gXCIuLi9lbnRpdGllcy9ib3Jyb3dlclwiO1xuaW1wb3J0IHtUcmFuc2FjdGlvbn0gZnJvbSBcIi4uL2VudGl0aWVzL3RyYW5zYWN0aW9uXCI7XG5pbXBvcnQge0ZpcmVTdG9yZVNlcnZpY2V9IGZyb20gXCIuL2ZpcmVzdG9yZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tIFwiLi9jb250YWN0LnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJvcnJvd2VyU2VydmljZSB7XG4gICAgc3RhdGljIEFERF9ORVcgPSBcImFkZE5ld0JvcnJvd2VyXCI7XG4gICAgc3RhdGljIEJPUlJPV0VEID0gJ2JvcnJvd2VkJztcbiAgICBzdGF0aWMgUkVUVVJORUQgPSAncmV0dXJuZWQnO1xuXG4gICAgbmV3Qm9ycm93ZXJzOiBCb3Jyb3dlcltdO1xuICAgIG5ld0JvcnJvd2VycyQ6IFByb21pc2U8Qm9ycm93ZXJbXT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmVzdG9yZVNlcnZpY2U6IEZpcmVTdG9yZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXRCb3Jyb3dlckxpc3QoKTogUHJvbWlzZTxCb3Jyb3dlcltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpcmVzdG9yZVNlcnZpY2UuZ2V0QWxsQm9ycm93ZXJzKCk7XG4gICAgfVxuXG4gICAgZ2V0TmV3Qm9ycm93ZXJMaXN0KCk6IFByb21pc2U8Qm9ycm93ZXJbXT4ge1xuICAgICAgICBpZiAodGhpcy5uZXdCb3Jyb3dlcnMgJiYgdGhpcy5uZXdCb3Jyb3dlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm5ld0JvcnJvd2Vycyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5uZXdCb3Jyb3dlcnMkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXdCb3Jyb3dlcnMkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV3Qm9ycm93ZXJzJCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFjdFNlcnZpY2UuZ2V0Q29udGFjdHMoKS50aGVuKChjb250YWN0czogQm9ycm93ZXJbXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3Qm9ycm93ZXJzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlc3RvcmVTZXJ2aWNlLmdldEFsbEJvcnJvd2VycygpLnRoZW4oKGJvcnJvd2VyczogQm9ycm93ZXJbXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29udGFjdCBvZiBjb250YWN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCBib3Jyb3dlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhY3QubmFtZSA9PT0gYm9ycm93ZXJzW2ldLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdCb3Jyb3dlcnMucHVzaChib3Jyb3dlcnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdCb3Jyb3dlcnMucHVzaChjb250YWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3Qm9ycm93ZXJzLnB1c2goY29udGFjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLm5ld0JvcnJvd2Vycyk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5uZXdCb3Jyb3dlcnMkO1xuXG4gICAgfVxuXG4gICAgZ2V0Qm9ycm93ZXJCeU5hbWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxCb3Jyb3dlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCb3Jyb3dlckxpc3QoKS50aGVuKChib3Jyb3dlcnM6IEJvcnJvd2VyW10pID0+IHtcbiAgICAgICAgICAgZm9yKGNvbnN0IGJvcnJvd2VyIG9mIGJvcnJvd2Vycykge1xuICAgICAgICAgICAgICAgaWYoYm9ycm93ZXIubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgIHJldHVybiBib3Jyb3dlcjtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlPT5lKTtcbiAgICB9XG59Il19