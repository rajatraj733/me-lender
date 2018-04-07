"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase/app");
var const_1 = require("../const");
var FireStoreService = /** @class */ (function () {
    function FireStoreService() {
    }
    FireStoreService.prototype.addBorrower = function (borrower) {
        var _this = this;
        var borrowerCollections = firebase.firestore().collection(const_1.Const.collection.BORROWERS);
        return new Promise(function (resolve, reject) {
            try {
                _this.getAllBorrowers().then(function (borrowers) {
                    var duplicateFound = false;
                    var message = '';
                    for (var _i = 0, borrowers_1 = borrowers; _i < borrowers_1.length; _i++) {
                        var sBorrower = borrowers_1[_i];
                        if (sBorrower.name === borrower.name) {
                            duplicateFound = true;
                            console.log('duplicate contact found');
                            message = 'Borrower with name ' + borrower.name + ' already exists in database. If they are different, modify this borrower with another name';
                        }
                    }
                    ;
                    if (!duplicateFound) {
                        borrower.source = const_1.Const.source.FIRE_STORE;
                        borrowerCollections.doc(borrower.name).set(borrower)
                            .then(function () {
                            console.log("Firestore: borrower added");
                            message = 'borrower added';
                            _this.borrowers.push(borrower);
                        })
                            .catch(function (error) {
                            console.dir(error);
                            throw error;
                        });
                    }
                    resolve(message);
                }).catch(function (e) {
                    reject(e);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    };
    FireStoreService.prototype.getAllBorrowers = function () {
        var _this = this;
        if (this.borrowers && this.borrowers.length > 0) {
            return Promise.resolve(this.borrowers);
        }
        else if (this.borrowers$) {
            return this.borrowers$;
        }
        else {
            var borrowerCollections = firebase.firestore().collection(const_1.Const.collection.BORROWERS);
            this.borrowers$ = borrowerCollections.get().then(function (querySnapshot) {
                console.log('got all the borrowers');
                _this.borrowers = [];
                querySnapshot.forEach(function (doc) {
                    _this.borrowers.push(doc.data());
                });
                _this.borrowers.sort(function (a, b) { return a.name.localeCompare(b.name); });
                return _this.borrowers;
            }).catch(function (e) {
                console.log('error getting all the browsers');
                console.dir(e);
                return e;
            });
            return this.borrowers$;
        }
    };
    FireStoreService.prototype.addTransaction = function (transaction) {
        var transactionCollection = firebase.firestore().collection(const_1.Const.collection.TRANSACTIONS);
        return transactionCollection.add({
            amount: transaction.amount,
            date: transaction.date,
            borrower: transaction.borrower.name,
            comment: transaction.comment
        }).then(function (documentRef) {
            console.log("transaction added with " + documentRef.id);
            return documentRef;
        });
    };
    FireStoreService.prototype.updateBorrower = function (borrower) {
        borrower.source = const_1.Const.source.FIRE_STORE;
        return firebase.firestore().collection(const_1.Const.collection.BORROWERS).doc(borrower.name)
            .update(borrower).then(function () {
            return 'borrower updated';
        }).catch(function (e) { return e; });
    };
    FireStoreService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FireStoreService);
    return FireStoreService;
}());
exports.FireStoreService = FireStoreService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZXN0b3JlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaXJlc3RvcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QywyREFBNkQ7QUFFN0Qsa0NBQStCO0FBRy9CO0lBS0k7SUFDQSxDQUFDO0lBRUQsc0NBQVcsR0FBWCxVQUFZLFFBQWtCO1FBQTlCLGlCQW9DQztRQW5DRyxJQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsYUFBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFJLENBQUM7Z0JBQ0QsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLFNBQXFCO29CQUM5QyxJQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7b0JBQzNCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztvQkFDakIsR0FBRyxDQUFBLENBQWtCLFVBQVMsRUFBVCx1QkFBUyxFQUFULHVCQUFTLEVBQVQsSUFBUzt3QkFBMUIsSUFBSSxTQUFTLGtCQUFBO3dCQUNiLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7NEJBQ25DLGNBQWMsR0FBRyxJQUFJLENBQUM7NEJBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQzs0QkFDdkMsT0FBTyxHQUFHLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsNEZBQTRGLENBQUM7d0JBQ25KLENBQUM7cUJBQ0o7b0JBQUEsQ0FBQztvQkFDRixFQUFFLENBQUEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FB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VUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdGLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUM7WUFDN0IsTUFBTSxFQUFFLFdBQVcsQ0FBQyxNQUFNO1lBQzFCLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtZQUN0QixRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQ25DLE9BQU8sRUFBRSxXQUFXLENBQUMsT0FBTztTQUMvQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsV0FBVztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTBCLFdBQVcsQ0FBQyxFQUFJLENBQUMsQ0FBQztZQUN4RCxNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELHlDQUFjLEdBQWQsVUFBZSxRQUFrQjtRQUM3QixRQUFRLENBQUMsTUFBTSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDaEYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2QixNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsQ0FBQyxFQUFELENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUEzRlEsZ0JBQWdCO1FBRDVCLGlCQUFVLEVBQUU7O09BQ0EsZ0JBQWdCLENBNEY1QjtJQUFELHVCQUFDO0NBQUEsQUE1RkQsSUE0RkM7QUE1RlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtCb3Jyb3dlcn0gZnJvbSBcIi4uL2VudGl0aWVzL2JvcnJvd2VyXCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7VHJhbnNhY3Rpb259IGZyb20gXCIuLi9lbnRpdGllcy90cmFuc2FjdGlvblwiO1xuaW1wb3J0IHtDb25zdH0gZnJvbSBcIi4uL2NvbnN0XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlU3RvcmVTZXJ2aWNlIHtcblxuICAgIGJvcnJvd2VyczogQm9ycm93ZXJbXTtcbiAgICBib3Jyb3dlcnMkOiBQcm9taXNlPEJvcnJvd2VyW10+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgYWRkQm9ycm93ZXIoYm9ycm93ZXI6IEJvcnJvd2VyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgYm9ycm93ZXJDb2xsZWN0aW9ucyA9IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oQ29uc3QuY29sbGVjdGlvbi5CT1JST1dFUlMpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFsbEJvcnJvd2VycygpLnRoZW4oKGJvcnJvd2VyczogQm9ycm93ZXJbXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZHVwbGljYXRlRm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBzQm9ycm93ZXIgb2YgYm9ycm93ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc0JvcnJvd2VyLm5hbWUgPT09IGJvcnJvd2VyLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXBsaWNhdGVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2R1cGxpY2F0ZSBjb250YWN0IGZvdW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICdCb3Jyb3dlciB3aXRoIG5hbWUgJyArIGJvcnJvd2VyLm5hbWUgKyAnIGFscmVhZHkgZXhpc3RzIGluIGRhdGFiYXNlLiBJZiB0aGV5IGFyZSBkaWZmZXJlbnQsIG1vZGlmeSB0aGlzIGJvcnJvd2VyIHdpdGggYW5vdGhlciBuYW1lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWR1cGxpY2F0ZUZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3Jyb3dlci5zb3VyY2UgPSBDb25zdC5zb3VyY2UuRklSRV9TVE9SRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcnJvd2VyQ29sbGVjdGlvbnMuZG9jKGJvcnJvd2VyLm5hbWUpLnNldChib3Jyb3dlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBGaXJlc3RvcmU6IGJvcnJvd2VyIGFkZGVkYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnYm9ycm93ZXIgYWRkZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvcnJvd2Vycy5wdXNoKGJvcnJvd2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGdldEFsbEJvcnJvd2VycygpOiBQcm9taXNlPEJvcnJvd2VyW10+IHtcbiAgICAgICAgaWYgKHRoaXMuYm9ycm93ZXJzICYmIHRoaXMuYm9ycm93ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5ib3Jyb3dlcnMpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm9ycm93ZXJzJCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9ycm93ZXJzJDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGJvcnJvd2VyQ29sbGVjdGlvbnMgPSBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKENvbnN0LmNvbGxlY3Rpb24uQk9SUk9XRVJTKTtcbiAgICAgICAgICAgIHRoaXMuYm9ycm93ZXJzJCA9IGJvcnJvd2VyQ29sbGVjdGlvbnMuZ2V0KCkudGhlbihcbiAgICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvdCBhbGwgdGhlIGJvcnJvd2VycycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvcnJvd2VycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3Jyb3dlcnMucHVzaChkb2MuZGF0YSgpIGFzIEJvcnJvd2VyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9ycm93ZXJzLnNvcnQoKGE6IEJvcnJvd2VyLCBiOiBCb3Jyb3dlcikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvcnJvd2VycztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBnZXR0aW5nIGFsbCB0aGUgYnJvd3NlcnMnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9ycm93ZXJzJDtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgYWRkVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFRyYW5zYWN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25Db2xsZWN0aW9uID0gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihDb25zdC5jb2xsZWN0aW9uLlRSQU5TQUNUSU9OUyk7XG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbkNvbGxlY3Rpb24uYWRkKHtcbiAgICAgICAgICAgIGFtb3VudDogdHJhbnNhY3Rpb24uYW1vdW50LFxuICAgICAgICAgICAgZGF0ZTogdHJhbnNhY3Rpb24uZGF0ZSxcbiAgICAgICAgICAgIGJvcnJvd2VyOiB0cmFuc2FjdGlvbi5ib3Jyb3dlci5uYW1lLFxuICAgICAgICAgICAgY29tbWVudDogdHJhbnNhY3Rpb24uY29tbWVudFxuICAgICAgICB9KS50aGVuKGRvY3VtZW50UmVmID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGB0cmFuc2FjdGlvbiBhZGRlZCB3aXRoICR7ZG9jdW1lbnRSZWYuaWR9YCk7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnRSZWY7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVCb3Jyb3dlcihib3Jyb3dlcjogQm9ycm93ZXIpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgICAgICBib3Jyb3dlci5zb3VyY2UgPSBDb25zdC5zb3VyY2UuRklSRV9TVE9SRTtcbiAgICAgICAgcmV0dXJuIGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oQ29uc3QuY29sbGVjdGlvbi5CT1JST1dFUlMpLmRvYyhib3Jyb3dlci5uYW1lKVxuICAgICAgICAgICAgLnVwZGF0ZShib3Jyb3dlcikudGhlbigoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJ2JvcnJvd2VyIHVwZGF0ZWQnO1xuICAgICAgICB9KS5jYXRjaChlPT5lKTtcbiAgICB9XG59Il19