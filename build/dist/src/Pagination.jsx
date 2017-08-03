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
            return (<li key={index} className={"page-item hidden-sm-down " + activeClass} onClick={_this.props.onPaginationNumberClicked.bind(_this, elem, "numberClicked")}>
                <a role="button" className="page-link">{elem}</a></li>);
        });
        var hideClass = "disabled"; // hidden-xs-up
        var hidePrevious = activePage === 1 ? hideClass : "";
        var hideNext = activePage === this.props.numOfPages || this.props.numOfPages === 0 ? hideClass : "";
        var hideFirst = activePage < 10 ? hideClass : "";
        var hideLast = activePage + 2 >= this.props.numOfPages ? hideClass : "";
        var _a = this.props, nextLinkTitle = _a.nextLinkTitle, prevLinkTitle = _a.prevLinkTitle;
        var isVisibleClass = this.props.isNotVisible ? 'hidden' : '';
        return (<nav className={"text-xs-center clearfix " + isVisibleClass}>
                <ul className="pagination">
                    <li className={"page-item  " + hideFirst} onClick={this.props.onPaginationNumberClicked.bind(this, 1, "firstClicked")}>
                        <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true"><strong>&laquo; </strong></span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className={"page-item " + hidePrevious} onClick={this.props.onPaginationNumberClicked.bind(this, this.props.activePage - 1, "prevClicked")}>
                        <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true"><strong>&lt; </strong><span className="hidden">{prevLinkTitle} </span></span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {pages}
                    <li className={"page-item " + hideNext} onClick={this.props.onPaginationNumberClicked.bind(this, this.props.activePage + 1, "nextClicked")}>
                        <a className="page-link" aria-label="Next">
                            <span aria-hidden="true"><span className="hidden">{nextLinkTitle} </span><strong>&gt; </strong></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                    <li className={"page-item  " + hideLast} onClick={this.props.onPaginationNumberClicked.bind(this, this.props.numOfPages, "lastClicked")}>
                        <a className="page-link" aria-label="Next">
                            <span aria-hidden="true"><strong>&raquo; </strong></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>);
    };
    return Pagination;
}(React.Component));
exports.default = Pagination;
//# sourceMappingURL=Pagination.jsx.map