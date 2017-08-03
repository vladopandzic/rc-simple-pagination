"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Pagination = (function (_super) {
    __extends(Pagination, _super);
    function Pagination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pagination.prototype.render = function () {
        var _this = this;
        var activePage = this.props.activePage;
        var maxNumberAvailableToShown = this.props.numOfPages;
        var maxIfDidntAlmostReachedEnd = activePage + 2;
        var maxWhenNumOfPagesAndActivePageHigherThen10 = (activePage + 2 > this.props.numOfPages) ? maxNumberAvailableToShown :
            maxIfDidntAlmostReachedEnd;
        var maxShownPageNumber = this.props.numOfPages < 10 ? this.props.numOfPages :
            (activePage < 10 ? 10 : maxWhenNumOfPagesAndActivePageHigherThen10);
        var minShownPageNumber = activePage < 10 ? 1 : (activePage - 8);
        var arrayToIterate = [];
        for (var i = minShownPageNumber; i <= maxShownPageNumber; i++) {
            arrayToIterate.push(i);
        }
        var pages = arrayToIterate.map(function (elem, index) {
            var activeClass = activePage === elem ? "active" : "";
            return (React.createElement("li", { key: index, className: "page-item hidden-sm-down " + activeClass, onClick: _this.props.onPaginationNumberClicked.bind(_this, elem, "numberClicked") },
                React.createElement("a", { role: "button", className: "page-link" }, elem)));
        });
        var hideClass = "disabled"; // hidden-xs-up
        var hidePrevious = activePage === 1 ? hideClass : "";
        var hideNext = activePage === this.props.numOfPages || this.props.numOfPages === 0 ? hideClass : "";
        var hideFirst = activePage < 10 ? hideClass : "";
        var hideLast = activePage + 2 >= this.props.numOfPages ? hideClass : "";
        var _a = this.props, nextLinkTitle = _a.nextLinkTitle, prevLinkTitle = _a.prevLinkTitle;
        var isVisibleClass = this.props.isNotVisible ? 'hidden' : '';
        return (React.createElement("nav", { className: "text-xs-center clearfix " + isVisibleClass },
            React.createElement("ul", { className: "pagination" },
                React.createElement("li", { className: "page-item  " + hideFirst, onClick: this.props.onPaginationNumberClicked.bind(this, 1, "firstClicked") },
                    React.createElement("a", { className: "page-link", "aria-label": "Previous" },
                        React.createElement("span", { "aria-hidden": "true" },
                            React.createElement("strong", null, "\u00AB ")),
                        React.createElement("span", { className: "sr-only" }, "Previous"))),
                React.createElement("li", { className: "page-item " + hidePrevious, onClick: this.props.onPaginationNumberClicked.bind(this, this.props.activePage - 1, "prevClicked") },
                    React.createElement("a", { className: "page-link", "aria-label": "Previous" },
                        React.createElement("span", { "aria-hidden": "true" },
                            React.createElement("strong", null, "< "),
                            React.createElement("span", { className: "hidden" },
                                prevLinkTitle,
                                " ")),
                        React.createElement("span", { className: "sr-only" }, "Previous"))),
                pages,
                React.createElement("li", { className: "page-item " + hideNext, onClick: this.props.onPaginationNumberClicked.bind(this, this.props.activePage + 1, "nextClicked") },
                    React.createElement("a", { className: "page-link", "aria-label": "Next" },
                        React.createElement("span", { "aria-hidden": "true" },
                            React.createElement("span", { className: "hidden" },
                                nextLinkTitle,
                                " "),
                            React.createElement("strong", null, "> ")),
                        React.createElement("span", { className: "sr-only" }, "Next"))),
                React.createElement("li", { className: "page-item  " + hideLast, onClick: this.props.onPaginationNumberClicked.bind(this, this.props.numOfPages, "lastClicked") },
                    React.createElement("a", { className: "page-link", "aria-label": "Next" },
                        React.createElement("span", { "aria-hidden": "true" },
                            React.createElement("strong", null, "\u00BB ")),
                        React.createElement("span", { className: "sr-only" }, "Next"))))));
    };
    return Pagination;
}(React.Component));
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map