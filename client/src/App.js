import React from "react";
// import logo from './logo.svg';
import registerationLogo from './Images/registration-form-1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <form className="box">
          <h1>Signup</h1>
          <div class="left-container">
          <img src={registerationLogo} alt="" />
            
            </div>



          <div className="left-container">
          <div className="form-group ">
              <input type="text" placeholder="Username" id="user" autocomplete="off" ></input>            
              <span id="usererror" style={{color:"aliceblue"}}></span>
              
            </div>  
            <div className="form-group ">
              <input type="email" placeholder="email" id="email" autocomplete="off"></input>
              <span id="emailerror" style={{ color: "aliceblue"}}></span>
                           
            </div>
            <div class="form-group ">
                            <input type="password" placeholder="password"   id="pass" autocomplete="off"></input>
              <span id="passerror" style={{ color: "aliceblue" }}></span>
                        </div>
                            
                            <div class="form-group ">    
                            <input type="password" placeholder="confirm password"   id="conpass" autocomplete="off"></input>
                            <span id="conpasserror"  style={{ color: "aliceblue" }}></span>
                            </div> 

                            <div class="form-group ">            
                            <input type="text" placeholder="contact number"   id="number" autocomplete="off"></input>
                            <span id="numbererror"   style={{ color: "aliceblue" }}></span>
                            </div>

                            <input type="button" value="SIGNUP" id="signup" ></input>
                            
            <div style={{marginTop:"6%", fontSize:"15px"}}>
            {/* <div style={{ margin-top: "6%", font-size: "15px"}}> */}
            
                                <a href="/html/signin.html" >
                                    Already have an account?
                        
                                </a>
                        
                            </div>
          </div>
          
          

          
      </form>
      </div>
    </div>
  );
}

export default App;
