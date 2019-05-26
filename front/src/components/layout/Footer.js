import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
  render() {
    return (

      <div>
        <div class="row pt-5 px-3 border-top mt-5 " id="a3">
  <div class="col">

    
    <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link text-info" href="#"><b>Udemy for business</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-info" href="#"><b>Become and Instructor</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-info" href="#">Mobile Apps</a>
        </li>
      </ul>


  </div>
  <div class="col">

      <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link text-info" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-info" href="#">Careers</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-info" href="#">Blog</a>
          </li>
        </ul>

  </div>
  <div class="col">

      <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link text-info" href="#">Topics</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-info" href="#">Support</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-info" href="#">Affiliate</a>
          </li>
        </ul>

  </div>
  <div class="col">
<form>
    <div class="form-group col-6 float-right">
        <select  class="form-control" id="exampleFormControlSelect2">
          <option><i class="fas fa-globe"></i> English</option>
          <option>Japanese</option>
          <option>Yoruba</option>
          <option>Igbo</option>
          <option>Hausa</option>
        </select>
      </div>
</form>

  </div>
</div>
      <nav class="nav mt-5 ml-3" id="a4">
      <span class="nav-link active text-muted font-weight-bold" >Local Home Pages</span>
      <span class="nav-link" >English</span>
      <a class="nav-link text-info" href="#">Deutsch</a>
      <a class="nav-link text-info" href="#">Français</a>
      <a class="nav-link text-info" href="#">Português</a>
      <a class="nav-link text-info" href="#">日本語</a>
    </nav>
  <hr/>
  
  <div class="row" id="a4">
        <div class="col pl-5">
            <img src="images/logo-coral.svg" width="100px" class="mr-5" /> <span>Copyright © 2018 Udemy, Inc.</span>
        </div>
        <div class="col">
            <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link active text-info" href="#">Terms</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-info" href="#">Privacy and Cookie Police</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-info" href="#">Intellectual Property</a>
                </li>
              </ul>
  
        </div>
  </div>
  </div>
   )
  }
}
export default Footer;