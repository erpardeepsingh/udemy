import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
class Landing extends Component {
  render() {
    return (
        <div className="App">
        <Header/>
        
       <div class="container mt-5" >
          <h3>
               <small class="text-muted">Top Courses in "Business"</small>
             </h3>
           <div class="card-deck" >
        <Posts/><Posts/><Posts/><Posts/><Posts/><Posts/>
        </div>         
      </div>
        <Footer/>
       </div>
    )
  }
}
export default Landing;