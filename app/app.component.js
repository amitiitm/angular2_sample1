"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var filter_pipe_1 = require('./filter.pipe');
var AppComponent = (function () {
    function AppComponent(http) {
        var _this = this;
        this.fullPath = 'http://trstorage1.blob.core.windows.net/expert-pictures/';
        this.mydata = [];
        http.get('https://api.tipranks.com/api/analysts/aapl?num=15&X-APIKey=TR_Interview4&X-APIToken=TR_Interview')
            .subscribe(function (result) {
            _this.mydata = result.json();
        });
    }
    AppComponent.prototype.redirect = function () {
        this.router.navigate(['http://google.com']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/TestAssignment.html',
            pipes: [filter_pipe_1.SortArrayPipe]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map