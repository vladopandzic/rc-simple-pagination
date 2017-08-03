

import * as React from "react";



export default class Pagination extends React.Component<IPaginationProps, IPaginationState> {

    render() {
       
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
        var pages = arrayToIterate.map((elem: number, index: number) => {
            var activeClass = activePage === elem ? "active" : "";
            return (<li key={index} className={"page-item hidden-sm-down " + activeClass} onClick={this.props.onPaginationNumberClicked.bind(this, elem,"numberClicked") }>
                <a role="button" className="page-link" >{elem}</a></li>);
        });

        var hideClass = "disabled";// hidden-xs-up
        var hidePrevious = activePage === 1 ? hideClass : "";
        var hideNext = activePage === this.props.numOfPages || this.props.numOfPages === 0 ? hideClass : "";

        var hideFirst = activePage < 10 ? hideClass : "";
        var hideLast = activePage + 2 >= this.props.numOfPages ? hideClass : "";
        const {nextLinkTitle,prevLinkTitle} = this.props;
        const isVisibleClass = this.props.isNotVisible ? 'hidden' : '';
        return (


            <nav className={"text-xs-center clearfix " + isVisibleClass}>
                <ul   className="pagination">
                    <li className={"page-item  " + hideFirst} onClick={this.props.onPaginationNumberClicked.bind(this, 1,"firstClicked") }>
                        <a className="page-link" aria-label="Previous">
                            <span aria-hidden="true"><strong>&laquo; </strong></span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className={"page-item " + hidePrevious}
                        onClick={this.props.onPaginationNumberClicked.bind(this, this.props.activePage - 1,"prevClicked") }>
                        <a className="page-link"  aria-label="Previous">
                            <span aria-hidden="true"><strong>&lt; </strong><span className="hidden">{prevLinkTitle} </span></span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {pages}
                    <li className={"page-item " + hideNext}
                        onClick={this.props.onPaginationNumberClicked.bind(this, this.props.activePage + 1,"nextClicked") }>
                        <a className="page-link"  aria-label="Next">
                            <span aria-hidden="true"><span className="hidden">{nextLinkTitle} </span><strong>&gt; </strong></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                    <li className={"page-item  " + hideLast}
                        onClick={this.props.onPaginationNumberClicked.bind(this, this.props.numOfPages,"lastClicked") }>
                        <a className="page-link"  aria-label="Next">
                            <span aria-hidden="true"><strong>&raquo; </strong></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );

    }

}

interface IPaginationProps {
    activePage: number;
    numOfPages: number;
    prevLinkTitle: string;
    nextLinkTitle:string;
    onPaginationNumberClicked(numberClicked: number,eventName:string);
    isNotVisible?: boolean;

}
interface IPaginationState {
    url: string;

}
