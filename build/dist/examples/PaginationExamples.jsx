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
var ReactDOM = require("react-dom");
var $ = require("jquery");
var Pagination_1 = require("../src/Pagination");
var PaginationExamples = (function (_super) {
    __extends(PaginationExamples, _super);
    function PaginationExamples(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            events: [],
            currentPage: 5
        };
        _this.onNumberClicked = _this.onNumberClicked.bind(_this);
        return _this;
    }
    PaginationExamples.prototype.onNumberClicked = function (page, eventName) {
        var newEvents = JSON.parse(JSON.stringify(this.state.events));
        var message = "Clicked on page";
        if (eventName == "firstClicked") {
            message = "Clicked to go to first page:";
        }
        else if (eventName == "lastClicked") {
            message = "Clicked to go to last page:";
        }
        else if (eventName == "nextClicked") {
            message = "Clicked to go to next page, page:";
        }
        else if (eventName == "prevClicked") {
            message = "Clicked to go to previous page, page:";
        }
        newEvents.push(message + " " + page);
        this.setState({
            currentPage: page,
            events: newEvents
        });
    };
    PaginationExamples.prototype.render = function () {
        return (<div>
                    <Pagination_1.default activePage={this.state.currentPage} numOfPages={30} onPaginationNumberClicked={this.onNumberClicked} nextLinkTitle={"Next"} prevLinkTitle={"Prev"}/>
                    <strong> Active page:{this.state.currentPage} </strong>
                     <div>
                        Events:
                        <ul>
                        {this.state.events.map(function (e) {
            return <li>{e}</li>;
        })}
                       </ul>
                   </div>
               </div>);
    };
    return PaginationExamples;
}(React.Component));
exports.default = PaginationExamples;
$(document).ready(function () {
    ReactDOM.render(<PaginationExamples />, document.getElementById('root'));
});
//# sourceMappingURL=PaginationExamples.jsx.map