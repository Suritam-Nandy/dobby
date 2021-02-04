import React from 'react'
import registerationLogo from '../Images/registration-form-1.jpg';
import "../App.css"

const signin = () => {
    return (
        <div className="wrapper">
      <form className="box" action="" method="post">
        <h1>Signin</h1>
        <div className="left-container">
        <img src={registerationLogo} alt="" />
        </div>
        <div className="right-container">
          <div className="form-group">
            <input
              type="email"
              placeholder="email"
              id="email"
              autocomplete="off"
              
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="password"
              id="pass"
              autocomplete="off"
            />
          </div>
          <input type="button" value="SIGNIN" id="signin" />

          <div style={{marginTop:"10%", fontSize:"15px", textAlign:"center"}}>
            <a href="/index.html" className="text-dark">
              Not have an account? Signup
            </a>
          </div>
        </div>
      </form>
    </div>
    )
}

export default signin
