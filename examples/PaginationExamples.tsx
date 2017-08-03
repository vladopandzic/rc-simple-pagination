import * as React from 'react';
declare var require:any;
var ReactDOM = require("react-dom");
import * as _ from 'lodash'
import * as $ from 'jquery'; 
import Pagination from '../src/Pagination';
export default class PaginationExamples extends React.Component<ITimePickerExamplesProps, ITimePickerExamplesState>{

    constructor(props:ITimePickerExamplesProps){
            super(props);
            this.state={
                events:[],
                currentPage:5
            }
            this.onNumberClicked=this.onNumberClicked.bind(this);
    }
     onNumberClicked(page,eventName){
       var newEvents=JSON.parse(JSON.stringify(this.state.events));
       var message="Clicked on page";
       if(eventName=="firstClicked"){
           message="Clicked to go to first page:"
       }else if(eventName=="lastClicked"){
           message="Clicked to go to last page:"
       }else if(eventName=="nextClicked"){
           message="Clicked to go to next page, page:"
       }else if(eventName=="prevClicked"){
            message="Clicked to go to previous page, page:"
       }
       newEvents.push(message +" "+ page)
        this.setState({
            currentPage:page,
            events:newEvents
        })             
     }
    render(){
        return (
                <div >
                    <Pagination activePage={this.state.currentPage} numOfPages={30} onPaginationNumberClicked={this.onNumberClicked}  nextLinkTitle={"Next"} prevLinkTitle={"Prev"}  />
                    <strong> Active page:{this.state.currentPage} </strong>
                     <div>
                        Events:
                        <ul>
                        { this.state.events.map(e=>{
                          return <li>{e}</li>;
                        })
                        }
                       </ul>
                   </div>
               </div>

        )

    }

}
interface ITimePickerExamplesProps{


}
interface ITimePickerExamplesState{

    currentPage:number;
    events:string[];

}

$(document).ready(function () {
    ReactDOM.render(<PaginationExamples />, document.getElementById('root'));
});