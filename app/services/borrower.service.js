"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var borrower_1 = require("../entities/borrower");
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
                _this.firestoreService.getAllBorrowers().then(function (oBorrowers) {
                    var borrowers = JSON.parse(JSON.stringify(oBorrowers));
                    borrowers.push(new borrower_1.Borrower());
                    var i = 0;
                    for (var _i = 0, contacts_1 = contacts; _i < contacts_1.length; _i++) {
                        var contact = contacts_1[_i];
                        if (contact.name === borrowers[i].name) {
                            _this.newBorrowers.push(borrowers[i]);
                            i++;
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
    BorrowerService.prototype.getBorrowerByContactId = function (id) {
        return this.getBorrowerList().then(function (borrowers) {
            for (var _i = 0, borrowers_1 = borrowers; _i < borrowers_1.length; _i++) {
                var borrower = borrowers_1[_i];
                if (borrower.contactId === id) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9ycm93ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvcnJvd2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsaURBQThDO0FBRTlDLHlEQUFxRDtBQUNyRCxxREFBaUQ7QUFHakQ7SUFRSSx5QkFBb0IsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBRDlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ2xELENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsNENBQWtCLEdBQWxCO1FBQUEsaUJBOEJDO1FBN0JHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzdDLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBb0I7Z0JBQ3hELEtBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUN2QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsVUFBc0I7b0JBQ2hFLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQVEsRUFBRSxDQUFDLENBQUM7b0JBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDVixHQUFHLENBQUMsQ0FBa0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRO3dCQUF6QixJQUFNLE9BQU8saUJBQUE7d0JBQ2QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs0QkFDckMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3JDLENBQUMsRUFBRSxDQUFDO3dCQUNSLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ0osS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3BDLENBQUM7cUJBQ0o7b0JBQ0QsT0FBTyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsQixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUU5QixDQUFDO0lBRUQsZ0RBQXNCLEdBQXRCLFVBQXVCLEVBQVU7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFxQjtZQUN0RCxHQUFHLENBQUEsQ0FBbUIsVUFBUyxFQUFULHVCQUFTLEVBQVQsdUJBQVMsRUFBVCxJQUFTO2dCQUEzQixJQUFNLFFBQVEsa0JBQUE7Z0JBQ2QsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMzQixNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNwQixDQUFDO2FBQ0o7UUFDSixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxDQUFDLEVBQUQsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQXZETSx1QkFBTyxHQUFHLGdCQUFnQixDQUFDO0lBQzNCLHdCQUFRLEdBQUcsVUFBVSxDQUFDO0lBQ3RCLHdCQUFRLEdBQUcsVUFBVSxDQUFDO0lBSHBCLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FTNkIsb0NBQWdCO1lBQ2xCLGdDQUFjO09BVHpDLGVBQWUsQ0F5RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXpERCxJQXlEQztBQXpEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Qm9ycm93ZXJ9IGZyb20gXCIuLi9lbnRpdGllcy9ib3Jyb3dlclwiO1xuaW1wb3J0IHtUcmFuc2FjdGlvbn0gZnJvbSBcIi4uL2VudGl0aWVzL3RyYW5zYWN0aW9uXCI7XG5pbXBvcnQge0ZpcmVTdG9yZVNlcnZpY2V9IGZyb20gXCIuL2ZpcmVzdG9yZS5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tIFwiLi9jb250YWN0LnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJvcnJvd2VyU2VydmljZSB7XG4gICAgc3RhdGljIEFERF9ORVcgPSBcImFkZE5ld0JvcnJvd2VyXCI7XG4gICAgc3RhdGljIEJPUlJPV0VEID0gJ2JvcnJvd2VkJztcbiAgICBzdGF0aWMgUkVUVVJORUQgPSAncmV0dXJuZWQnO1xuXG4gICAgbmV3Qm9ycm93ZXJzOiBCb3Jyb3dlcltdO1xuICAgIG5ld0JvcnJvd2VycyQ6IFByb21pc2U8Qm9ycm93ZXJbXT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmVzdG9yZVNlcnZpY2U6IEZpcmVTdG9yZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb250YWN0U2VydmljZTogQ29udGFjdFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBnZXRCb3Jyb3dlckxpc3QoKTogUHJvbWlzZTxCb3Jyb3dlcltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpcmVzdG9yZVNlcnZpY2UuZ2V0QWxsQm9ycm93ZXJzKCk7XG4gICAgfVxuXG4gICAgZ2V0TmV3Qm9ycm93ZXJMaXN0KCk6IFByb21pc2U8Qm9ycm93ZXJbXT4ge1xuICAgICAgICBpZiAodGhpcy5uZXdCb3Jyb3dlcnMgJiYgdGhpcy5uZXdCb3Jyb3dlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm5ld0JvcnJvd2Vycyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5uZXdCb3Jyb3dlcnMkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5uZXdCb3Jyb3dlcnMkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmV3Qm9ycm93ZXJzJCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29udGFjdFNlcnZpY2UuZ2V0Q29udGFjdHMoKS50aGVuKChjb250YWN0czogQm9ycm93ZXJbXSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3Qm9ycm93ZXJzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlc3RvcmVTZXJ2aWNlLmdldEFsbEJvcnJvd2VycygpLnRoZW4oKG9Cb3Jyb3dlcnM6IEJvcnJvd2VyW10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9ycm93ZXJzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvQm9ycm93ZXJzKSk7XG4gICAgICAgICAgICAgICAgICAgIGJvcnJvd2Vycy5wdXNoKG5ldyBCb3Jyb3dlcigpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbnRhY3Qgb2YgY29udGFjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWN0Lm5hbWUgPT09IGJvcnJvd2Vyc1tpXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdCb3Jyb3dlcnMucHVzaChib3Jyb3dlcnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdCb3Jyb3dlcnMucHVzaChjb250YWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMubmV3Qm9ycm93ZXJzKTtcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLm5ld0JvcnJvd2VycyQ7XG5cbiAgICB9XG5cbiAgICBnZXRCb3Jyb3dlckJ5Q29udGFjdElkKGlkOiBudW1iZXIpOiBQcm9taXNlPEJvcnJvd2VyPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJvcnJvd2VyTGlzdCgpLnRoZW4oKGJvcnJvd2VyczogQm9ycm93ZXJbXSkgPT4ge1xuICAgICAgICAgICBmb3IoY29uc3QgYm9ycm93ZXIgb2YgYm9ycm93ZXJzKSB7XG4gICAgICAgICAgICAgICBpZihib3Jyb3dlci5jb250YWN0SWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvcnJvd2VyO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGU9PmUpO1xuICAgIH1cbn0iXX0=