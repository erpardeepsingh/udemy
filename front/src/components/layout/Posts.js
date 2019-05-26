import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Posts extends Component {
  render() {
    return(
   
     <div className="App">
     <div class="card mx-1 shadow-sm">
                      <span class="badge  badge-warning w-50 mt-2"
                          id="a6"
                        >BEST SELLER</span>

                     <img class="card-img-top h-50" src="images/course-image.jpg" alt="Card image cap"/>
                     <div class="card-body px-2">
                       <a href="#"><h6>An Entire MBA in 1 Course:Award Winning...</h6></a>
                       <p class="card-text" id="a7">Chris Haroun, Complete Busines...</p>
                       <p class="card-text"><small class="text-muted">
                           <i class="fas fa-star text-warning"></i>
                           <i class="fas fa-star text-warning"></i>
                           <i class="fas fa-star text-warning"></i>
                           <i class="fas fa-star text-warning"></i>
                           <i class="fas fa-star-half text-warning"></i>
                         4.5 (18,560)</small>
                         <span class="d-block"></span>
                         <span class="float-right"> 
                           <small id="a8" class="text-muted">
                             ($199)</small>$9.99 </span>
                         
                         </p>
                     </div>
                   </div>
                   </div>
      
    )
    }
}
export default Posts;