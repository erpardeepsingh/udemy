import React, { Component } from 'react'

import Footer from './Footer';
import Navbar from './Navbar';

export default class PostsDetail extends Component {
  render() {
    return (
      <div className="App">
         <Navbar/>
         <Footer/>
      </div>
    )
  }
}
