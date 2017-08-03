# rc-simple-pagination

<b>Demo:</b> <a href="https://vladop.github.io/rc-simple-pagination/examples/index.html">https://vladop.github.io/rc-simple-pagination/examples/index.html</a>

Get started by
  <code>npm i rc-simple-pagination</code>
  
  <b>Javascript:</b>
  
  
       const Pagination=require('rc-simple-pagination');
       
  
  or:
  
         import Pagination from 'rc-simple-pagination'
         
  
  
  
  <b>CSS</b>
  
  For default styling pull css from <code>dist</code> folder:
  
       <link rel="stylesheet" type="text/css" href="node_modules/rc-simple-pagination/dist/pagination.css">                
   
   
  You can use it like this:
  

      render(){
       
          <Pagination activePage={this.state.currentPage} numOfPages={30} onPaginationNumberClicked={this.onNumberClicked}  nextLinkTitle={"Next"} prevLinkTitle={"Prev"}  />
           
       }    
       
  
  <b>Props</b>
  
  
|   Name         | Type           | Default          | Description                                | Optional
| ------------- |:--------------:| ----------------:| ------------------------------------------:| ---------:|
| activePage    | number         | <i>no-default</i>| Current active page (state on parent component)              | <b>No</b> |
| numOfPages    | number         | <i>no-default</i>| Total number of pages| <b>No</b> |
| onPaginationNumberClicked  | Function({ newPage,eventName }) |           | Callback executed whenever some page (or prev,next buttons) is selected     | <b>No</b> |
| nextLinkTitle  | string |   Next       | Localized text for next button        | <b>No</b> |
| prevLinkTitle  | string |   Prev       | Localized text for prev button        | <b>No</b> |
