import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
       <a class="navbar-brand mb-3" href="#">
         <img src="images/logo-coral.svg" width="100px" />
       </a>

       <button class="navbar-toggler" type="button" data-toggle="collapse" 
       data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
     
       <div class="collapse navbar-collapse " id="navbarSupportedContent">


         <ul class="navbar-nav mr-auto container-fluid">
          
           <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <i class="fas fa-list-ul"></i> Categories
             </a>
             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <a class="dropdown-item" href="#">Action</a>
               <a class="dropdown-item" href="#">Another action</a>
               <div class="dropdown-divider"></div>
               <a class="dropdown-item" href="#">Something else here</a>
             </div>
           </li>

           <li class="nav-item col-8">
                    <form class="form-inline my-2 my-lg-0 inbutton">
                           <input class="form-control form-control-lg mr-sm-0 col-8 bg-light border-0 "
                           id="a1" 
                           type="search" placeholder="Search for Courses" aria-label="Search"/>
                            
                           <button class="btn btn-light btn-lg  my-2 my-sm-0 ml-0 col-2" 
                         id="a2"
                           type="submit"><i class="fas fa-search text-danger "></i></button>
                       </form>
                   </li>

         </ul>

          
               <a class="nav-link btn btn-light  mx-2" href="#"
               
               data-toggle="popover" title="Try Udemy for Business"
               data-placement="bottom"
               data-trigger="focus"
               data-content="Get your team access to Udemy’s top 2,500 courses anytime,
                anywhere."
               
               >Udemy for Business</a>
               <a class="nav-link btn btn-light  mx-2" href="#">Become an Instructor</a>
               <a class="nav-link btn btn-light  mx-2 rounded-circle" href="#">  <i class="fas fa-shopping-cart"></i> </a>
               <a class="nav-link btn btn-outline-dark" href="#">Login</a>
               <a class="nav-link btn btn-danger mx-2" href="#">Signup</a>
           

         
       </div>
     </nav>
    </div>
  
    )
  }
}
export default Navbar;