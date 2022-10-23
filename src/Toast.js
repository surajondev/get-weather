import React, { useEffect } from "react";

function Toast(props)
{  
  const closeToasterMessage = () =>{
    props.closeToasterMessage()
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      props.closeToasterMessage();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [props.toasterMessage])

  return(
  <div className="toast-container">
    <div className="container toast">
       <p className="p-message">{props.toasterMessage}</p>
       <button className="cancel-button" onClick={closeToasterMessage}><p className="p-message">x</p></button>
    </div>
  </div>)
}

export default Toast
