
  import * as React from 'react';
var  Pagination=require('../src/Pagination');

var enzyme = require("enzyme");


var mount = enzyme.mount;
var shallow = enzyme.shallow;
var expect = require('chai').expect;

declare var describe,it;
   
   

describe('<Pagination/>', function () {
    it("true should be true",function(){
        expect(true).to.equal(true);
    })
    it('should have at least one <li> with active class', function () {
        const wrapper = shallow(<Pagination activePage={5}  numOfPages={20} onPaginationNumberClicked={() => { } } nextLinkTitle={"Next"} prevLinkTitle={"Prev"}/>);
        expect(wrapper.find('.active')).to.have.length(1);
    }); 
    it('should render 14 <li>s (10+2 for back buttons +2 for forward buttons) when there are more than 10 pages', function () {
        const wrapper = shallow(<Pagination activePage={5} numOfPages={340} onPaginationNumberClicked={() => { } } nextLinkTitle={"Next"} prevLinkTitle={"Prev"}/>);
        expect(wrapper.find('li')).to.have.length(14);  
    });
    it('should have "disabled" class on first page button when on first page or any page less than 10', function () {
        const wrapper = shallow(<Pagination activePage={1} numOfPages={340} onPaginationNumberClicked={() => { } } nextLinkTitle={"Next"} prevLinkTitle={"Prev"}/>);
        expect(wrapper.find('li').at(0).hasClass('disabled')).to.equal(true)  

        const wrapper2 = shallow(<Pagination activePage={9} numOfPages={340} onPaginationNumberClicked={() => { } } nextLinkTitle={"Next"} prevLinkTitle={"Prev"}/>);
        expect(wrapper2.find('li').at(0).hasClass('disabled')).to.equal(true)
        const wrapper3 = shallow(<Pagination activePage={11} numOfPages={340} onPaginationNumberClicked={() => { } } nextLinkTitle={"Next"} prevLinkTitle={"Prev"}/>);
        expect(wrapper3.find('li').at(0).hasClass('disabled')).to.equal(false)  
    })

    it('should have "disabled" class on back button when on first page', function () {
        const wrapper = shallow(<Pagination activePage={1} numOfPages={340} onPaginationNumberClicked={() => { } } nextLinkTitle={"Next"} prevLinkTitle={"Prev"}/>);
        expect(wrapper.find('li').at(1).hasClass('disabled')).to.equal(true)
    });

    it('should have "disabled" class on forward button when on last page', function () {
        const wrapper = shallow(<Pagination activePage={340} numOfPages={340} onPaginationNumberClicked={() => { } } nextLinkTitle={"Next"} prevLinkTitle={"Prev"}/>);
        expect(wrapper.find('li').at(12).hasClass('disabled')).to.equal(true)
    });
    it('should have "disabled" class on last button when on last page', function () {
        const wrapper = shallow(<Pagination activePage={340} numOfPages={340} onPaginationNumberClicked={() => { } } nextLinkTitle={"Next"} prevLinkTitle={"Prev"}/>);
        var totalNumberOfLIElements = wrapper.find('li').length;
        expect(wrapper.find('li').at(totalNumberOfLIElements-1).hasClass('disabled')).to.equal(true)
    });
  
   
});