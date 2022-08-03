import React from 'react'
import { MdDone } from "react-icons/md";
import "./success.css";



function Success() {
  return (
    <section className="main-container center ">
      <div className="flex flex-col gap-md pad-xl">
       <div className='done-icon'><MdDone/></div>
        <h3 className="main-heading">Congratulations, Eren!</h3>
        <p className="sub-heading">
          You have completed onboarding, you can start using Eden!
        </p>
          <button
            className="submit-btn"
            type="submit"
            value="Create Workspace"
          >Create Workspace</button>
      </div>
    </section>
  )
}

export  { Success }