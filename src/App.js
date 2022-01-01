import React from "react";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import photo from "./components/photo.jpg";
import kirtika from"./components/kirtika.jpg";
import sona from"./components/sona.jpg";
import trupti from "./components/trupti.jpg";
import css from "./components/navbar.css"

const Home = () => {
  return (
    <>

    
      <Navbar />
      <React.Fragment>
        
      
        <h1 className="text-center text-success my-5 " >Meet our team Members Here</h1>
        <div className="container" >
         
          <div className="row">
            <div className="col-md-3" style={{width:'250px',marginLeft:'70px'}}>
              <div class="card" >
                <img src={sona} style={{height:'300px'}} class="card-img-top" alt="..." />
                <div class="card-body">
                <h3 class="card-title">Sonali ikal</h3>
                <p class="card-text"><h4>Branch: Electronics And  Communication </h4>
                  <h4>Year of study: final year</h4></p>
                  <a href="https://www.linkedin.com/in/sonali-ekal-604879209" class="btn btn-primary">View Profile</a>
                </div>
              </div>
            </div>

            <div className="col-md-3 " style={{width:'250px' ,marginLeft:'45px'}}>
              <div class="card" >
                <img src={kirtika} style={{height:'300px'}}class="card-img-top" alt="..." />
                <div class="card-body">
                <h3 class="card-title">Kirtika patil</h3>
                <p class="card-text"><h4>Branch: Electronics And  Communication </h4>
                  <h4>Year of study: final year</h4></p>
                  <a href="https://www.linkedin.com/in/kirtikap/" class="btn btn-primary">View Profile</a>
                  
                </div>
              </div>
            </div>
            
            
           
            
            <div className="col-md-3"style={{width:'250px',marginLeft:'45px'}}>
              <div class="card" >
                <img src={photo} style={{height:'300px' }}  class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 class="card-title">Pooja Kadam</h3>
                  <p class="card-text"><h4>Branch:  Computer  Science And Engineearing  </h4>
                  <h4>Year of study: Prefinal Year</h4></p>
                  <a href="https://www.linkedin.com/in/pooja-kadam-3361a01ba" class="btn btn-primary">View Profile</a>
                </div>
              </div>
            </div>

            <div className="col-md-3"style={{width:'250px', marginLeft:'45px'}}>
              <div class="card" >
                <img src={trupti} style={{height:'300px'}} class="card-img-top" alt="..." />
                <div class="card-body">
                <h3 class="card-title">Trupti Kande</h3>
                  <p class="card-text"><h4>Branch: Electronics And  Communication </h4>
                  <h4>Year of study: final year</h4></p>
                 
                  <a href="https://www.linkedin.com/in/trupti-kande-7599a0209" class="btn btn-primary">View Profile</a>
                </div>
              </div>
            </div>


          </div>
          
        </div>
        
      </React.Fragment>
    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <React.Fragment>
        <div style={{color:'slateblue'}}>
        
        <h1 style={{marginTop:'5%',fontSize:'50px'}}className="text-center text-success ">About Our Project </h1>
        
          
        
          <ul style={{marginTop:'5%',fontSize:'25px',justifyContent:'center', alignItems:'center',marginLeft:'20%',marginRight:'10%'}} >
            <li>1.Our website is related to cyber security.</li><br/>
            <li>2.we are provied some cyber security related services to our user.</li><br/>
            <li>3.By using our website user also get knowledge about besic cyber security related things.</li><br/>
            <li>4.If user have some cyber security related Question they can freely contact us.</li><br/>
          </ul>
         </div>
          
          
        


      </React.Fragment>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <React.Fragment>
      <div style={{color:'slateblue'}}>
  
        <h1 className="heading" style={{marginTop:'5%',fontSize:'50px',justifyContent:'center', alignItems:'center',marginLeft:'30%',marginRight:'10%'}}>Here is Our Services </h1>
        <ul style={{marginTop:'5%',fontSize:'25px',justifyContent:'center', alignItems:'center',marginLeft:'20%',marginRight:'10%', color:'slateblue'}} >
          <li>1. Using our website you can easiely find out the fraud number. </li><br/>
          <li>2. Using our website you can easiely find the Fraud Account Number.</li><br/>
          <li>3. You can check cyber security guidelines on our website</li><br/>
          <li>4. If you have any doubt related to cyber Security you can directly contact us through our website</li>
 
        </ul>
        </div>
      
      </React.Fragment>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <h1 className="visit">Visit Our Site Here </h1><br />
        <h2 className="visit">To Know more About Our Project</h2><br /><br />
        <button className="btn" style={{
          padding: '10px 0',
          width: '20%',
          // color: 'lime',
          outline: 'none',


          border: '2px solid black',
          cursor: 'pointer',


          
          
        }} type="button" id="1" onClick={(e) => {
          e.preventDefault();
          window.location.href='https://youtu.be/0tfm0MX402g';
          }}  class="btn btn-info"><h3>Visit Us</h3></button>
           


      </section>
    </>
  );
};

const App = () => {
  return (
    

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/service" element={<Service />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
