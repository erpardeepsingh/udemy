import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
class Header extends Component {
  render() {
    return (
    <div>
      <Navbar/>
      <div class="jumbotron big-banner mb-0 jumbotron-fluid" id="a5">
         

         <div class="container">
               <div class="row align-items-center">
                 <div class="col">
                   
                   <div class="col-md-4 text-light">
                       <h1 class="display-5">Hot Sale—$9.99 courses!</h1>
                       <p class="lead">Get our best deal on courses</p>
                 </div>

                 <div class="col-md-6">
                       <form class="form-inline my-2 my-lg-0" >
                               <input class="form-control form-control-lg mr-sm-0 col-8
                                border-right-0 "
                               id="a1" 
                                type="search" placeholder="What Do You Want To Learn?" 
                                aria-label="Search"/>
                               
                               <button class="btn btn-light btn-lg my-2 my-sm-0 col-2 border-left-0" 
                               id="a2"
                               type="submit"><i class="fas text-danger fa-search"></i></button>
                           </form>
                   </div>


                 </div>
                
               </div>
             </div>

      </div>


      <div class="fresh-content text-light py-3" >
          <div class="container">
              <div class="row">
                  <div class="col-md-4">
                      <div class="media">
                           <i class="far fa-play-circle mr-3 display-4" ></i>
                           <div class="media-body">
                             <h5 class="mt-0">Fresh Content</h5>
                             Choose from 65,000 courses with new additions published every month
                           </div>
                         </div>
                  </div>

                  <div class="col-md-4">
                       <div class="media">
                            <i class="far fa-play-circle mr-3 display-4"></i>
                            <div class="media-body">
                              <h5 class="mt-0">Trusted Instructors</h5>
                              Take courses taught by industry experts around the world
                            </div>
                          </div>
                   </div>
                  
                  <div class="col-md-4">
                       <div class="media">
                            <i class="far fa-play-circle mr-3 display-4"></i>
                            <div class="media-body">
                              <h5 class="mt-0">Flexible Learning</h5>
                              Learn on your terms with lifetime course access and the Udemy mobile app
                            </div>
                          </div>
                   </div>

                   
                
              </div>
          </div>
      </div>
    </div> )
  }
}
export default Header;