import React from "react";

function Toast()
{
  return(
  <div className="toast-container">
    <div className="container toast">
       <p className="p-message">Hello</p>
       <button className="cancel-button"><p className="p-message">x</p></button>
    </div>
  </div>)
}

export default Toast
