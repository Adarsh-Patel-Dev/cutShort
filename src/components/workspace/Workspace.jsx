import React from 'react'
import "./workspace.css"
import { useNavigate } from "react-router-dom"
import { useStepContext } from '../../context/stepContext'


function Workspace() {
  const { setStep } = useStepContext()
  const navigate = useNavigate()
  
  return (
    <section className='main-container center'>
    <div>
     <h3 className='main-heading'>Let's set up a home for all your work</h3>
     <p className='sub-heading'>You can always create another workspace later.</p>
    </div>

    <div>
        <form 
         onSubmit={(e) => {
          e.preventDefault()
          setStep(prev=>prev+1)
          navigate('/workspacesetup')
        }}
        className='flex flex-col gap-md pad-xl'>

            <div className='input-container flex-start flex-col gap-xs'>
            <label className='input-label' htmlFor="full-name">Workspace Name</label>
            <input className='input' type="text" id="full-name" placeholder='Eden' />
            </div>

            <div className='input-container flex-start flex-col gap-xs'>
            <label className='input-label' htmlFor="display-name">Workspace URL <span className='gray'> (optional)</span></label>
            <div className='input-box flex '>
            <div className='input-msg'>www.edem.com/</div>
            <input className='input-field' type="text" id="display-name" placeholder='Example' />
            </div>
            </div>

            <input className='submit-btn' type="submit" value="Create Workspace" />
        </form>
    </div>
    </section>
  )
}

export  { Workspace }